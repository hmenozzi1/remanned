import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/splash" className="nav-items">
          SplashScreen
        </Link>
        <Link to="/" className="nav-items">
          Home
        </Link>
        <Link to="/signup" className="nav-items">
          SignUp
        </Link>
        <Link to="/login" className="nav-items">
          Login
        </Link>
        <Link to="/dashboard" className="nav-items">
          Dashboard
        </Link>
        <Link to="/journal" className="nav-items">
          Journal
        </Link>
        <Link to="/goals" className="nav-items">
          Goals
        </Link>
        <Link to="/history" className="nav-items">
          History
        </Link>
        <Link to="/settings" className="nav-items">
          Settings
        </Link>
        <Link to="/admin/dashboard" className="nav-items">
          Admin Dashboard
        </Link>
        <Link to="/admin/goals" className="nav-items">
          Admin Goals
        </Link>
      </div>
    </>
  );
}

export default Navbar;
