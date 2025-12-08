// src/hooks/useDailyLog.js
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCycle } from '../context/CycleContext';
import api from '../services/api';

export const useDailyLog = (date = new Date()) => {
  const { user } = useAuth();
  const { currentCycle, getCurrentWeek } = useCycle();
  const [dailyLog, setDailyLog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Format date as YYYY-MM-DD
  const formatDate = (d) => {
    return d.toISOString().split('T')[0];
  };

  // Load daily log for specified date
  useEffect(() => {
    if (user && currentCycle) {
      loadDailyLog();
    }
  }, [user, currentCycle, date]);

  const loadDailyLog = async () => {
    setLoading(true);
    try {
      const formattedDate = formatDate(date);
      const log = await api.dailyLogs.getByDate(user.user_id, formattedDate);
      setDailyLog(log || null);
    } catch (err) {
      console.error('Failed to load daily log:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create or update daily log
  const saveDailyLog = async (arenaScores) => {
    if (!user || !currentCycle) {
      throw new Error('User or cycle not available');
    }

    try {
      setError(null);
      const currentWeek = getCurrentWeek();
      const formattedDate = formatDate(date);

      const logData = {
        user: user.user_id,
        cycle: currentCycle.cycle_id,
        week: currentWeek?.week_id || null,
        log_date: formattedDate,
        ...arenaScores, // finance, fitness, fun, husband, father, son, business, community, philanthropy
      };

      let savedLog;
      if (dailyLog) {
        // Update existing log
        savedLog = await api.dailyLogs.update(dailyLog.log_id, logData);
      } else {
        // Create new log
        savedLog = await api.dailyLogs.create(logData);
      }

      setDailyLog(savedLog);
      return savedLog;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update single arena
  const updateArena = async (arenaName, value) => {
    const updates = { [arenaName]: value };
    
    if (dailyLog) {
      try {
        const updated = await api.dailyLogs.update(dailyLog.log_id, updates);
        setDailyLog(updated);
        return updated;
      } catch (err) {
        setError(err.message);
        throw err;
      }
    } else {
      // Create new log with this arena
      return await saveDailyLog(updates);
    }
  };

  // Calculate totals
  const getTotals = () => {
    if (!dailyLog) {
      return {
        life_total: 0,
        leadership_total: 0,
        legacy_total: 0,
        daily_total: 0,
      };
    }

    return {
      life_total: dailyLog.life_total || 0,
      leadership_total: dailyLog.leadership_total || 0,
      legacy_total: dailyLog.legacy_total || 0,
      daily_total: dailyLog.daily_total || 0,
    };
  };

  // Get arena value
  const getArenaValue = (arenaName) => {
    return dailyLog?.[arenaName] || 0;
  };

  return {
    dailyLog,
    loading,
    error,
    saveDailyLog,
    updateArena,
    getTotals,
    getArenaValue,
    refreshLog: loadDailyLog,
  };
};