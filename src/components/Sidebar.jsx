// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * MQ3™ Hub Sidebar
 *
 * - Shows Dashboard / Goals / History / Journal
 * - Highlights the active section
 * - Handles navigation with react-router
 * - Shows an "End Session" button at the bottom
 *
 * Usage:
 *   <Sidebar activeSection="dashboard" />
 *   <Sidebar activeSection="goals" />
 */
function Sidebar({ activeSection = "dashboard" }) {
  const navigate = useNavigate();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", path: "/Dashboard.jsx" },
    { id: "goals", label: "Goals", path: "/Goals.jsx" },
    { id: "history", label: "History", path: "/History.jsx" },
    { id: "journal", label: "Journal", path: "/Journal.jsx" },
  ];

  const handleNavigate = (id) => {
    const target = menuItems.find((item) => item.id === id);
    if (target && target.path) {
      navigate(target.path);
    }
  };

  return (
    <nav
      style={{
        width: "240px",
        backgroundColor: "#1e1e1e",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
        boxSizing: "border-box",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        minHeight: "100vh",
      }}
    >
      {/* Brand / title */}
      <div
        style={{
          marginBottom: "2rem",
          fontSize: "1.1rem",
          color: "#9e865a",
          fontWeight: "bold",
        }}
      >
        MQ3™ Hub
      </div>

      {/* Nav items */}
      {menuItems.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => handleNavigate(id)}
            style={{
              background: "none",
              border: "none",
              color: isActive ? "#9e865a" : "#ccc",
              marginBottom: "1rem",
              fontWeight: isActive ? "bold" : "normal",
              cursor: "pointer",
              fontSize: "0.9rem",
              textAlign: "left",
              padding: 0,
              outline: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </button>
        );
      })}

      {/* Push end-session button to bottom */}
      <div style={{ marginTop: "auto" }}>
        <button
          onClick={() => alert("Ending session")}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "#9e865a",
            border: "none",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "6px",
            cursor: "pointer",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          End Session
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
export { Sidebar };
