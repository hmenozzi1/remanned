// src/components/Sidebar.jsx
import React, { useState } from "react";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import { FaBars } from "react-icons/fa";

export default function Sidebar({ style }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      id="sidebar-container"
      style={{
        ...style,
        gridArea: "sidebar",
        backgroundColor: "#050608",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        padding: collapsed ? "1rem 0.75rem" : "1.5rem 1.25rem",
        minWidth: collapsed ? "70px" : "230px",
        transition: "all 0.2s ease",
      }}
    >
      {/* Top row: collapse button + brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "2rem",
        }}
      >
        <button
          onClick={() => setCollapsed((v) => !v)}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.25)",
            backgroundColor: "transparent",
            color: "#e5e7eb",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Toggle sidebar"
        >
          <FaBars size={14} />
        </button>

        {!collapsed && (
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9e865a",
            }}
          >
            MQ3™ Hub
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1 }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <SidebarLink
            to="/Dashboard.jsx"
            label="Dashboard"
            active={isActive("/Dashboard.jsx")}
            collapsed={collapsed}
          />
          <SidebarLink
            to="/Goals.jsx"
            label="Goals"
            active={isActive("/Goals.jsx")}
            collapsed={collapsed}
          />
          <SidebarLink
            to="/History.jsx"
            label="History"
            active={isActive("/History.jsx")}
            collapsed={collapsed}
          />
          <SidebarLink
            to="/Journal.jsx"
            label="Journal"
            active={isActive("/Journal.jsx")}
            collapsed={collapsed}
          />
        </ul>
      </nav>

      {/* End Session button */}
      <div style={{ marginTop: "1.5rem" }}>
        <Button
          name={collapsed ? "End" : "End Session"}
          className="end-session-btn"
          style={{
            width: "100%",
            backgroundColor: "#de3b40",
            borderRadius: "999px",
            height: "3rem",
            fontSize: "0.9rem",
          }}
        />
      </div>
    </aside>
  );
}

function SidebarLink({ to, label, active, collapsed }) {
  return (
    <li>
      <Link
        to={to}
        style={{
          display: "block",
          padding: "0.7rem 0.9rem",
          borderRadius: "999px",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: active ? "#000" : "#e5e7eb",
          backgroundColor: active ? "#9e865a" : "transparent",
          textAlign: collapsed ? "center" : "left",
          whiteSpace: "nowrap",
        }}
      >
        {collapsed ? label[0] : label}
      </Link>
    </li>
  );
}
