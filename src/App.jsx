// src/App.jsx
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
        <Route element={<Layout />}>
          {/* Public / entry routes */}
          <Route path="/SplashScreen.jsx" element={<SplashScreen />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/SignUp.jsx" element={<SignUp />} />
          <Route path="/Login.jsx" element={<Login />} />

          {/* User routes */}
          <Route path="/Dashboard.jsx" element={<Dashboard />} />
          <Route path="/Journal.jsx" element={<Journal />} />
          <Route path="/Goals.jsx" element={<Goals />} />
          <Route path="/History.jsx" element={<History />} />
          <Route path="/Settings.jsx" element={<Settings />} />

          {/* Admin routes */}
          <Route path="/AdminDashboard.jsx" element={<AdminDashboard />} />
          <Route path="/AdminGoals.jsx" element={<AdminGoals />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
