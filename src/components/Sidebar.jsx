// src/components/Sidebar.jsx
import React from "react";

/**
 * MQ3™ Hub Sidebar
 * Props:
 *  - activeSection: "dashboard" | "goals" | "history" | "journal"
 *  - onNavigate(id): callback when a navigation item is selected
 */
export default function Sidebar({ activeSection = "dashboard", onNavigate }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "goals", label: "Goals" },
    { id: "history", label: "History" },
    { id: "journal", label: "Journal" },
  ];

  return (
    <nav
      style={{
        width: "260px",
        backgroundColor: "#050608",
        borderRight: "1px solid #262933",
        display: "flex",
        flexDirection: "column",
        padding: "1.25rem 1.5rem",
        boxSizing: "border-box",
        fontWeight: 500,
        letterSpacing: "0.12em",
        height: "100vh",
      }}
    >
      {/* Brand header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "999px",
            border: "2px solid #9e865a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
            fontWeight: "bold",
            color: "#9e865a",
          }}
        >
          MQ
        </div>

        <span
          style={{
            fontSize: "0.95rem",
            color: "#9e865a",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          MQ3™ Hub
        </span>
      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          fontSize: "0.8rem",
          textTransform: "uppercase",
        }}
      >
        {menuItems.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate && onNavigate(id)}
              style={{
                padding: "0.6rem 0.75rem",
                borderRadius: "8px",
                backgroundColor: isActive ? "#9e865a" : "transparent",
                color: isActive ? "#000" : "#f5f5f5",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: isActive ? 600 : 500,
                outline: "none",
              }}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Spacer pushes logout button to bottom */}
      <div style={{ flexGrow: 1 }} />

      {/* End Session button */}
      <button
        onClick={() => alert("Ending session")}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          backgroundColor: "#de3b40",
          border: "none",
          color: "#fff",
          fontWeight: 600,
          borderRadius: "999px",
          cursor: "pointer",
          letterSpacing: "0.12em",
          fontSize: "0.8rem",
          textTransform: "uppercase",
        }}
      >
        End Session
      </button>
    </nav>
  );
}
