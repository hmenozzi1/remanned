// src/context/CycleContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import api from '../services/api';

const CycleContext = createContext(null);

export const useCycle = () => {
  const context = useContext(CycleContext);
  if (!context) {
    throw new Error('useCycle must be used within a CycleProvider');
  }
  return context;
};

export const CycleProvider = ({ children }) => {
  const { user } = useAuth();
  const [currentCycle, setCurrentCycle] = useState(null);
  const [cycles, setCycles] = useState([]);
  const [goals, setGoals] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load active cycle when user changes
  useEffect(() => {
    if (user) {
      loadActiveCycle();
      loadAllCycles();
    } else {
      setCurrentCycle(null);
      setCycles([]);
      setGoals([]);
      setWeeks([]);
    }
  }, [user]);

  /* // Load all cycles for user
const loadAllCycles = async () => {
  if (!user) return;
  
  try {
    const response = await api.cycles.getAll();
    // Ensure response is an array
    const userCycles = Array.isArray(response) ? response : [];
    const filtered = userCycles.filter(c => c.user === user.user_id);
    setCycles(filtered);
  } catch (err) {
    console.error('Failed to load cycles:', err);
    setCycles([]); // Set empty array on error
  }
}; */ 

// Load all cycles for user
const loadAllCycles = async () => {
  if (!user) return;
  
  try {
    const response = await api.cycles.getAll();
    console.log('API Response:', response); // ← DEBUG
    console.log('Is Array?', Array.isArray(response)); // ← DEBUG
    
    // Ensure response is an array
    const userCycles = Array.isArray(response) ? response : [];
    const filtered = userCycles.filter(c => c.user === user.user_id);
    
    console.log('Filtered cycles:', filtered); // ← DEBUG
    setCycles(filtered);
  } catch (err) {
    console.error('Failed to load cycles:', err);
    setCycles([]); // Set empty array on error
  }
};

  // Load active cycle
  const loadActiveCycle = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const cycle = await api.cycles.getActive(user.user_id);
      
      if (cycle) {
        setCurrentCycle(cycle);
        
        // Load associated data
        const [cycleGoals, cycleWeeks] = await Promise.all([
          api.goals.getByCycle(cycle.cycle_id),
          api.weeks.getByCycle(cycle.cycle_id),
        ]);
        
        setGoals(cycleGoals);
        setWeeks(cycleWeeks);
      }
    } catch (err) {
      console.error('Failed to load active cycle:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create new cycle
  const createCycle = async (cycleData) => {
    try {
      setError(null);
      const newCycle = await api.cycles.create({
        ...cycleData,
        user: user.user_id,
        status: 'Active',
      });
      
      setCurrentCycle(newCycle);
      await loadAllCycles();
      
      return newCycle;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Archive current cycle
  const archiveCycle = async (cycleId, archiveData) => {
    try {
      // Update cycle status
      await api.cycles.update(cycleId, { status: 'Archived' });
      
      // Create archive record
      await api.archives.create({
        cycle: cycleId,
        ...archiveData,
      });
      
      await loadAllCycles();
      setCurrentCycle(null);
      
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Goal management
  const createGoal = async (goalData) => {
    if (!currentCycle) {
      throw new Error('No active cycle');
    }

    try {
      const newGoal = await api.goals.create({
        ...goalData,
        cycle: currentCycle.cycle_id,
      });
      
      setGoals([...goals, newGoal]);
      return newGoal;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateGoal = async (goalId, updates) => {
    try {
      const updatedGoal = await api.goals.update(goalId, updates);
      setGoals(goals.map(g => g.goal_id === goalId ? updatedGoal : g));
      return updatedGoal;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteGoal = async (goalId) => {
    try {
      await api.goals.delete(goalId);
      setGoals(goals.filter(g => g.goal_id !== goalId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Get goals by domain
  const getGoalsByDomain = (domain) => {
    return goals.filter(g => g.domain === domain);
  };

  // Get current week
  const getCurrentWeek = () => {
    const today = new Date();
    return weeks.find(w => {
      const start = new Date(w.starts_on);
      const end = new Date(w.ends_on);
      return today >= start && today <= end;
    });
  };

  // Calculate cycle progress
  const getCycleProgress = () => {
    if (!currentCycle) return 0;
    
    const start = new Date(currentCycle.start_date);
    const end = new Date(currentCycle.end_date);
    const today = new Date();
    
    const total = end - start;
    const elapsed = today - start;
    
    return Math.min(100, Math.max(0, (elapsed / total) * 100));
  };

  const value = {
    currentCycle,
    cycles,
    goals,
    weeks,
    loading,
    error,
    loadActiveCycle,
    loadAllCycles,
    createCycle,
    archiveCycle,
    createGoal,
    updateGoal,
    deleteGoal,
    getGoalsByDomain,
    getCurrentWeek,
    getCycleProgress,
  };

  return <CycleContext.Provider value={value}>{children}</CycleContext.Provider>;
};