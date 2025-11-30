import { HashRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <Routes>
        {/* Public / entry screens (no sidebar) */}
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Authenticated app shell */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/goals" element={<AdminGoals />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
