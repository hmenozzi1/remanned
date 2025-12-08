-- 1) Cohort and test user
INSERT INTO cohorts (name)
VALUES ('Alpha Cohort');

INSERT INTO users (name, email, cohort_id, join_date, current_level)
VALUES ('Test User', 'testuser@example.com', 1, '2025-01-01', 'Survivor');

-- 2) One active 12-week cycle for this user
-- Weeks run Monday–Sunday from 2025-01-06 to 2025-03-30
INSERT INTO cycles (user_id, start_date, end_date, status)
VALUES (1, '2025-01-06', '2025-03-30', 'Active');

-- 3) Weeks (user is currently in week 5–6, but we define all first 6 weeks)
INSERT INTO weeks (cycle_id, week_number, starts_on, ends_on) VALUES
(1, 1, '2025-01-06', '2025-01-12'),
(1, 2, '2025-01-13', '2025-01-19'),
(1, 3, '2025-01-20', '2025-01-26'),
(1, 4, '2025-01-27', '2025-02-02'),
(1, 5, '2025-02-03', '2025-02-09'),
(1, 6, '2025-02-10', '2025-02-16');

-- 4) Three SMAART goals for this cycle (Life, Leadership, Legacy)
INSERT INTO goals (cycle_id, domain, goal_statement, lag_metric, lead_metrics, smaart_check) VALUES
(1, 'Life',
 'Drop 10 lbs in 12 weeks',
 'Weight on 2025-03-30',
 'Daily steps, 3 workouts per week',
 TRUE),
(1, 'Leadership',
 'Weekly date night with spouse',
 '12 date nights completed',
 'Plan, schedule, and execute a date night each week',
 TRUE),
(1, 'Legacy',
 'Launch side-business landing page',
 'Landing page published and collecting emails',
 'Daily 30-minute build sessions',
 TRUE);

-- 5) Weekly plans: user has real execution in weeks 4 and 5, just planned in week 6
INSERT INTO weekly_plans (week_id, goal_id, tactics_planned, tactics_completed) VALUES
-- Week 4 (mostly on track)
(4, 1, 5, 4),   -- Life
(4, 2, 3, 3),   -- Leadership
(4, 3, 4, 2),   -- Legacy

-- Week 5 (some slippage)
(5, 1, 5, 3),
(5, 2, 3, 2),
(5, 3, 4, 3),

-- Week 6 (just planned, not executed yet)
(6, 1, 4, 0),
(6, 2, 2, 0),
(6, 3, 3, 0);

-- 6) Daily logs for a few days in Week 5 (2025-02-03 to 2025-02-05)
-- Values must be 0.00 or 0.33 and daily_total <= 3.00 (9 * 0.33 = 2.97)
INSERT INTO daily_logs (
  user_id, cycle_id, week_id, log_date,
  finance, fitness, fun,
  husband, father, son,
  business, community, philanthropy
) VALUES
(1, 1, 5, '2025-02-03',
 0.33, 0.33, 0.33,
 0.33, 0.33, 0.33,
 0.33, 0.33, 0.33),

(1, 1, 5, '2025-02-04',
 0.33, 0.00, 0.33,
 0.33, 0.00, 0.33,
 0.33, 0.00, 0.33),

(1, 1, 5, '2025-02-05',
 0.00, 0.33, 0.33,
 0.33, 0.33, 0.00,
 0.33, 0.33, 0.00);

-- 7) Build or update the scoreboard based on current logs for this cycle
CALL sp_upsert_scoreboard(1);

