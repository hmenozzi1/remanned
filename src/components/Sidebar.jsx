import "./index.css";
import Button from "./Button.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ children, style }) {
  const navigate = useNavigate();

  const handleEndSession = () => {
    navigate("/login");
  };

  return (
    <>
      <div id="sidebar-container" style={style}>
        <ul id="sidebar-list">
          <Link to="/dashboard" className="sidebar-nav-link">
            <li className="sidebar-nav-item">
              <img
                src="src/assets/dashboard-icon-style-free-vector.jpg"
                className="sidebar-icon"
                alt=""
              />
              Dashboard
            </li>
          </Link>

          <Link to="/journal" className="sidebar-nav-link">
            <li className="sidebar-nav-item">
              <img
                src="src/assets/images (1).png"
                className="sidebar-icon"
                alt=""
              />
              Journal
            </li>
          </Link>

          <Link to="/goals" className="sidebar-nav-link">
            <li className="sidebar-nav-item">
              <img
                src="src/assets/white-strategy-icon-33.png"
                className="sidebar-icon"
                alt=""
              />
              Goals
            </li>
          </Link>

          <Link to="/history" className="sidebar-nav-link">
            <li className="sidebar-nav-item">
              <img
                src="src/assets/images.png"
                className="sidebar-icon"
                alt=""
              />
              History
            </li>
          </Link>

          <Link to="/settings" className="sidebar-nav-link">
            <li className="sidebar-nav-item">
              <img
                src="src/assets/images (1).png"
                className="sidebar-icon"
                alt=""
              />
              Settings
            </li>
          </Link>
        </ul>

        <Button
          name="End Session"
          className="end-session-btn"
          onClick={handleEndSession}
          icon={
            <img
              src="src/assets/white-strategy-icon-33.png"
              className="sidebar-icon"
              alt=""
            />
          }
          style={{
            backgroundColor: "#de3b40",
            marginTop: "58vh",
            width: "15.5vw",
            marginLeft: "1.5vh",
            alignItems: "center",
          }}
        />
      </div>
    </>
  );
}
