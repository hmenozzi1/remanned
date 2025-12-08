// src/App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CycleProvider } from "./context/CycleContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

import { Dashboard } from "./Pages/Dashboard.jsx";
import { Journal } from "./Pages/Journal.jsx";
import { Login } from "./Pages/Login.jsx";
import { WelcomePage } from "./Pages/WelcomePage.jsx";
import { SignUp } from "./Pages/SignUp.jsx";
import { Layout } from "./Pages/Layout.jsx";
import { Goals } from "./Pages/Goals.jsx";
import { History } from "./Pages/History.jsx";
import { SplashScreen } from "./Pages/SplashScreen.jsx";
import { Settings } from "./Pages/Settings.jsx";
import { AdminDashboard } from "./Pages/AdminDashboard.jsx";
import { AdminGoals } from "./Pages/AdminGoals.jsx";

function App() {
  return (
    <AuthProvider>
      <CycleProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              {/* Public routes */}
              <Route path="/splash" element={<SplashScreen />} />
              <Route path="/" element={<WelcomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

              {/* Protected user routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/journal"
                element={
                  <ProtectedRoute>
                    <Journal />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/goals"
                element={
                  <ProtectedRoute>
                    <Goals />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <ProtectedRoute>
                    <History />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />

              {/* Protected admin routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/goals"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminGoals />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </CycleProvider>
    </AuthProvider>
  );
}

export default App;