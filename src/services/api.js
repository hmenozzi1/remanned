// src/services/api.js
import axios from 'axios';

// Base API URL - update this based on your environment
const API_BASE_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:8000/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/#/login';
    }
    return Promise.reject(error);
  }
);

// Helper to extract data from DRF paginated responses
const extractData = (response) => {
  // If response has 'results' array (DRF pagination), return it
  if (response.data && Array.isArray(response.data.results)) {
    return response.data.results;
  }
  // Otherwise return data as-is
  return response.data;
};

// API Service Object
const api = {
  // ==================== AUTHENTICATION ====================
  auth: {
    login: async (email, password) => {
      const response = await apiClient.post('/auth/login/', { email, password });
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      return response.data;
    },
    
    logout: async () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      return Promise.resolve();
    },
    
    register: async (userData) => {
      const response = await apiClient.post('/auth/register/', userData);
      return response.data;
    },
  },

  // ==================== USERS ====================
  users: {
    getProfile: async (userId) => {
      const response = await apiClient.get(`/users/${userId}/`);
      return response.data;
    },
    
    updateProfile: async (userId, data) => {
      const response = await apiClient.patch(`/users/${userId}/`, data);
      return response.data;
    },
    
    getCycles: async (userId) => {
      const response = await apiClient.get(`/users/${userId}/cycles/`);
      return extractData(response);
    },
  },

  // ==================== COHORTS ====================
  cohorts: {
    getAll: async () => {
      const response = await apiClient.get('/cohorts/');
      return extractData(response);
    },
    
    getById: async (cohortId) => {
      const response = await apiClient.get(`/cohorts/${cohortId}/`);
      return response.data;
    },
    
    create: async (data) => {
      const response = await apiClient.post('/cohorts/', data);
      return response.data;
    },
  },

  // ==================== CYCLES ====================
  cycles: {
    getAll: async () => {
      const response = await apiClient.get('/cycles/');
      return extractData(response);
    },
    
    getById: async (cycleId) => {
      const response = await apiClient.get(`/cycles/${cycleId}/`);
      return response.data;
    },
    
    create: async (data) => {
      const response = await apiClient.post('/cycles/', data);
      return response.data;
    },
    
    update: async (cycleId, data) => {
      const response = await apiClient.patch(`/cycles/${cycleId}/`, data);
      return response.data;
    },
    
    delete: async (cycleId) => {
      const response = await apiClient.delete(`/cycles/${cycleId}/`);
      return response.data;
    },
    
    // Get active cycle for user
    getActive: async (userId) => {
      const response = await apiClient.get(`/cycles/?user=${userId}&status=Active`);
      const cycles = extractData(response);
      return cycles[0]; // Return first active cycle
    },
  },

  // ==================== WEEKS ====================
  weeks: {
    getByCycle: async (cycleId) => {
      const response = await apiClient.get(`/weeks/?cycle=${cycleId}`);
      return extractData(response);
    },
    
    getById: async (weekId) => {
      const response = await apiClient.get(`/weeks/${weekId}/`);
      return response.data;
    },
    
    create: async (data) => {
      const response = await apiClient.post('/weeks/', data);
      return response.data;
    },
  },

  // ==================== GOALS ====================
  goals: {
    getByCycle: async (cycleId) => {
      const response = await apiClient.get(`/goals/?cycle=${cycleId}`);
      return extractData(response);
    },
    
    getById: async (goalId) => {
      const response = await apiClient.get(`/goals/${goalId}/`);
      return response.data;
    },
    
    create: async (data) => {
      const response = await apiClient.post('/goals/', data);
      return response.data;
    },
    
    update: async (goalId, data) => {
      const response = await apiClient.patch(`/goals/${goalId}/`, data);
      return response.data;
    },
    
    delete: async (goalId) => {
      const response = await apiClient.delete(`/goals/${goalId}/`);
      return response.data;
    },
  },

  // ==================== WEEKLY PLANS ====================
  weeklyPlans: {
    getByWeek: async (weekId) => {
      const response = await apiClient.get(`/weekly-plans/?week=${weekId}`);
      return extractData(response);
    },
    
    getById: async (planId) => {
      const response = await apiClient.get(`/weekly-plans/${planId}/`);
      return response.data;
    },
    
    create: async (data) => {
      const response = await apiClient.post('/weekly-plans/', data);
      return response.data;
    },
    
    update: async (planId, data) => {
      const response = await apiClient.patch(`/weekly-plans/${planId}/`, data);
      return response.data;
    },
    
    delete: async (planId) => {
      const response = await apiClient.delete(`/weekly-plans/${planId}/`);
      return response.data;
    },
  },

  // ==================== DAILY LOGS ====================
  dailyLogs: {
    getByUser: async (userId, startDate, endDate) => {
      let url = `/daily-logs/?user=${userId}`;
      if (startDate) url += `&start_date=${startDate}`;
      if (endDate) url += `&end_date=${endDate}`;
      const response = await apiClient.get(url);
      return extractData(response);
    },
    
    getByDate: async (userId, date) => {
      const response = await apiClient.get(`/daily-logs/?user=${userId}&log_date=${date}`);
      const logs = extractData(response);
      return logs[0]; // Return first match
    },
    
    getById: async (logId) => {
      const response = await apiClient.get(`/daily-logs/${logId}/`);
      return response.data;
    },
    
    create: async (data) => {
      const response = await apiClient.post('/daily-logs/', data);
      return response.data;
    },
    
    update: async (logId, data) => {
      const response = await apiClient.patch(`/daily-logs/${logId}/`, data);
      return response.data;
    },
    
    delete: async (logId) => {
      const response = await apiClient.delete(`/daily-logs/${logId}/`);
      return response.data;
    },
  },

  // ==================== SCOREBOARDS ====================
  scoreboards: {
    getByWeek: async (weekId) => {
      const response = await apiClient.get(`/scoreboards/?week=${weekId}`);
      const scoreboards = extractData(response);
      return scoreboards[0];
    },
    
    getByCycle: async (cycleId) => {
      const response = await apiClient.get(`/scoreboards/?cycle=${cycleId}`);
      return extractData(response);
    },
    
    getById: async (scoreboardId) => {
      const response = await apiClient.get(`/scoreboards/${scoreboardId}/`);
      return response.data;
    },
    
    create: async (data) => {
      const response = await apiClient.post('/scoreboards/', data);
      return response.data;
    },
    
    update: async (scoreboardId, data) => {
      const response = await apiClient.patch(`/scoreboards/${scoreboardId}/`, data);
      return response.data;
    },
  },

  // ==================== ARCHIVES ====================
  archives: {
    getByCycle: async (cycleId) => {
      const response = await apiClient.get(`/archives/?cycle=${cycleId}`);
      const archives = extractData(response);
      return archives[0];
    },
    
    getByUser: async (userId) => {
      const response = await apiClient.get(`/archives/?user=${userId}`);
      return extractData(response);
    },
    
    create: async (data) => {
      const response = await apiClient.post('/archives/', data);
      return response.data;
    },
    
    update: async (archiveId, data) => {
      const response = await apiClient.patch(`/archives/${archiveId}/`, data);
      return response.data;
    },
  },

  // ==================== CUSTOM ENDPOINTS ====================
  custom: {
    // Get dashboard summary
    getDashboardSummary: async (userId) => {
      const response = await apiClient.get(`/custom/dashboard/${userId}/`);
      return response.data;
    },
    
    // Get history with analytics
    getHistoryAnalytics: async (userId, cycleId) => {
      const response = await apiClient.get(`/custom/history/${userId}/${cycleId}/`);
      return response.data;
    },
    
    // Calculate MQ3 score
    calculateMQ3: async (cycleId) => {
      const response = await apiClient.post(`/custom/calculate-mq3/${cycleId}/`);
      return response.data;
    },
    
    // Update scoreboard
    updateScoreboard: async (cycleId) => {
      const response = await apiClient.post(`/custom/update-scoreboard/${cycleId}/`);
      return response.data;
    },
  },
};

export default api;