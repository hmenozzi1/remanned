-- ReManned MQ³ Database Schema

-- Enumerations
CREATE TYPE domain_enum AS ENUM ('Life','Leadership','Legacy');
CREATE TYPE cycle_status_enum AS ENUM ('Active','Archived');
CREATE TYPE level_enum AS ENUM ('Unstable','Survivor','Performer','Unshakable');
CREATE TYPE learn_leverage_enum AS ENUM ('Learn','Leverage');

-- Cohorts table
CREATE TABLE IF NOT EXISTS cohorts (
  cohort_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

-- Users table
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  cohort_id INT REFERENCES cohorts(cohort_id) ON DELETE SET NULL,
  join_date DATE NOT NULL DEFAULT CURRENT_DATE,
  current_level level_enum
);

-- 12-week cycles
CREATE TABLE IF NOT EXISTS cycles (
  cycle_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status cycle_status_enum NOT NULL DEFAULT 'Active',
  CHECK (end_date > start_date)
);

-- Individual weeks
CREATE TABLE IF NOT EXISTS weeks (
  week_id SERIAL PRIMARY KEY,
  cycle_id INT NOT NULL REFERENCES cycles(cycle_id) ON DELETE CASCADE,
  week_number INT NOT NULL CHECK (week_number BETWEEN 1 AND 12),
  starts_on DATE NOT NULL,
  ends_on DATE NOT NULL,
  UNIQUE (cycle_id, week_number),
  CHECK (ends_on >= starts_on)
);

-- SMAART goals
CREATE TABLE IF NOT EXISTS goals (
  goal_id SERIAL PRIMARY KEY,
  cycle_id INT NOT NULL REFERENCES cycles(cycle_id) ON DELETE CASCADE,
  domain domain_enum NOT NULL,
  goal_statement TEXT NOT NULL,
  lag_metric TEXT NOT NULL,
  lead_metrics TEXT NOT NULL,
  smaart_check BOOLEAN NOT NULL DEFAULT FALSE
);

-- Weekly planning for each goal
CREATE TABLE IF NOT EXISTS weekly_plans (
  weekly_plan_id SERIAL PRIMARY KEY,
  week_id INT NOT NULL REFERENCES weeks(week_id) ON DELETE CASCADE,
  goal_id INT NOT NULL REFERENCES goals(goal_id) ON DELETE CASCADE,
  tactics_planned INT NOT NULL CHECK (tactics_planned >= 0),
  tactics_completed INT NOT NULL CHECK (tactics_completed >= 0 AND tactics_completed <= tactics_planned),
  execution_percent NUMERIC(5,2)
    GENERATED ALWAYS AS (
      CASE WHEN tactics_planned = 0 THEN 0
           ELSE (tactics_completed::numeric * 100.0) / tactics_planned
      END
    ) STORED,
  UNIQUE (week_id, goal_id)
);

-- Daily logs: Life, Leadership, Legacy
CREATE TABLE IF NOT EXISTS daily_logs (
  log_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  cycle_id INT NOT NULL REFERENCES cycles(cycle_id) ON DELETE CASCADE,
  week_id INT REFERENCES weeks(week_id) ON DELETE SET NULL,
  log_date DATE NOT NULL,

  finance NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (finance IN (0.00, 0.33)),
  fitness NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (fitness IN (0.00, 0.33)),
  fun NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (fun IN (0.00, 0.33)),
  husband NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (husband IN (0.00, 0.33)),
  father NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (father IN (0.00, 0.33)),
  son NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (son IN (0.00, 0.33)),
  business NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (business IN (0.00, 0.33)),
  community NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (community IN (0.00, 0.33)),
  philanthropy NUMERIC(4,2) NOT NULL DEFAULT 0 CHECK (philanthropy IN (0.00, 0.33)),

  life_total NUMERIC(4,2) GENERATED ALWAYS AS (finance + fitness + fun) STORED,
  leadership_total NUMERIC(4,2) GENERATED ALWAYS AS (husband + father + son) STORED,
  legacy_total NUMERIC(4,2) GENERATED ALWAYS AS (business + community + philanthropy) STORED,
  daily_total NUMERIC(4,2) GENERATED ALWAYS AS (life_total + leadership_total + legacy_total) STORED,

  CHECK (daily_total <= 3.00),
  UNIQUE (user_id, log_date)
);

-- Weekly summary of points
CREATE TABLE IF NOT EXISTS scoreboards (
  scoreboard_id SERIAL PRIMARY KEY,
  week_id INT NOT NULL UNIQUE REFERENCES weeks(week_id) ON DELETE CASCADE,
  user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  life_points NUMERIC(5,2) NOT NULL DEFAULT 0,
  leadership_points NUMERIC(5,2) NOT NULL DEFAULT 0,
  legacy_points NUMERIC(5,2) NOT NULL DEFAULT 0,
  total_points NUMERIC(5,2) NOT NULL DEFAULT 0 CHECK (total_points <= 21.00),
  level level_enum,
  notes TEXT
);

-- Archived cycle reflections
CREATE TABLE IF NOT EXISTS archives (
  archive_id SERIAL PRIMARY KEY,
  cycle_id INT NOT NULL UNIQUE REFERENCES cycles(cycle_id) ON DELETE CASCADE,
  learned_or_leveraged learn_leverage_enum NOT NULL,
  summary TEXT,
  archived_date DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_daily_logs_user_week ON daily_logs (user_id, week_id);
CREATE INDEX IF NOT EXISTS idx_daily_logs_cycle_date ON daily_logs (cycle_id, log_date);
CREATE INDEX IF NOT EXISTS idx_weekly_plans_week ON weekly_plans (week_id);
CREATE INDEX IF NOT EXISTS idx_goals_cycle_domain ON goals (cycle_id, domain);

-- Weekly total calculation view
CREATE OR REPLACE VIEW v_weekly_mq_points AS
SELECT
  dl.user_id,
  dl.cycle_id,
  dl.week_id,
  COALESCE(SUM(dl.life_total),0)::NUMERIC(5,2) AS life_points,
  COALESCE(SUM(dl.leadership_total),0)::NUMERIC(5,2) AS leadership_points,
  COALESCE(SUM(dl.legacy_total),0)::NUMERIC(5,2) AS legacy_points,
  COALESCE(SUM(dl.daily_total),0)::NUMERIC(5,2) AS total_points
FROM daily_logs dl
GROUP BY dl.user_id, dl.cycle_id, dl.week_id;

-- Converts total points to level
CREATE OR REPLACE FUNCTION fn_week_level(total_points NUMERIC)
RETURNS level_enum AS $$
BEGIN
  IF total_points >= 18.0 THEN RETURN 'Unshakable';
  ELSIF total_points >= 13.0 THEN RETURN 'Performer';
  ELSIF total_points >= 7.0 THEN RETURN 'Survivor';
  ELSE RETURN 'Unstable';
  END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Updates scoreboard based on weekly totals
CREATE OR REPLACE PROCEDURE sp_upsert_scoreboard(p_cycle_id INT)
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO scoreboards (week_id, user_id, life_points, leadership_points, legacy_points, total_points, level)
  SELECT
    v.week_id,
    v.user_id,
    v.life_points,
    v.leadership_points,
    v.legacy_points,
    v.total_points,
    fn_week_level(v.total_points)
  FROM v_weekly_mq_points v
  JOIN weeks w ON w.week_id = v.week_id
  WHERE v.cycle_id = p_cycle_id
  ON CONFLICT (week_id) DO UPDATE
  SET
    life_points = EXCLUDED.life_points,
    leadership_points = EXCLUDED.leadership_points,
    legacy_points = EXCLUDED.legacy_points,
    total_points = EXCLUDED.total_points,
    level = EXCLUDED.level;
END;
$$;

-- Example: CALL sp_upsert_scoreboard(<cycle_id>);
