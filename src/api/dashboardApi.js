// src/api/dashboardApi.js
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

export async function fetchDashboardData({
  userId = 1,
  targetWeekNumber = 1,
} = {}) {
  const [
    userRes,
    cyclesRes,
    weeksRes,
    scoreboardsRes,
    goalsRes,
    plansRes,
  ] = await Promise.all([
    fetch(`${API_BASE_URL}/users/${userId}/`),
    fetch(`${API_BASE_URL}/cycles/`),
    fetch(`${API_BASE_URL}/weeks/`),
    fetch(`${API_BASE_URL}/scoreboards/`),
    fetch(`${API_BASE_URL}/goals/`),
    fetch(`${API_BASE_URL}/weeklyplans/`),
  ]);

  if (!userRes.ok) {
    throw new Error("Failed to load user");
  }

  const user = await userRes.json();
  const [cycles, weeks, scoreboards, goals, plans] = await Promise.all([
    cyclesRes.json(),
    weeksRes.json(),
    scoreboardsRes.json(),
    goalsRes.json(),
    plansRes.json(),
  ]);

  // Active cycle for this user
  const cyclesForUser = cycles.filter((c) => c.user === userId);
  const activeCycle =
    cyclesForUser.find((c) => c.status === "Active") ||
    cyclesForUser[0] ||
    cycles[0] ||
    null;

  // Current week in that cycle
  const weeksForCycle = activeCycle
    ? weeks.filter((w) => w.cycle === activeCycle.cycle_id)
    : [];
  const week =
    weeksForCycle.find((w) => w.week_number === targetWeekNumber) ||
    weeksForCycle[0] ||
    weeks[0] ||
    null;

  const goalsForCycle = activeCycle
    ? goals.filter((g) => g.cycle === activeCycle.cycle_id)
    : [];

  const plansForWeek = week
    ? plans.filter((p) => p.week === week.week_id)
    : [];

  // Scoreboard for this user + week
  let scoreboard = null;
  if (week) {
    scoreboard = scoreboards.find(
      (s) => s.user === userId && s.week === week.week_id
    );
  }
  if (!scoreboard) {
    scoreboard =
      scoreboards.find((s) => s.user === userId) ||
      scoreboards[0] ||
      null;
  }

  return {
    user,
    activeCycle,
    week,
    scoreboard,
    goals: goalsForCycle,
    weeklyPlans: plansForWeek,
  };
}
