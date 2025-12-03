// src/components/ProfileBanner.jsx
import "../index.css";
import React from "react";

export default function ProfileBanner() {
  return (
    <header
      id="profile-banner"
      style={{
        gridArea: "banner",
        width: "100%",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 1.75rem",
        backgroundColor: "#050608",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Right side: help + avatar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.3)",
            backgroundColor: "transparent",
            color: "#9e865a",
            fontSize: "1rem",
            cursor: "pointer",
          }}
          aria-label="Help and support"
          title="Help"
        >
          ?
        </button>

        {/* Avatar placeholder – swap for an <img> if you want */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "999px",
            backgroundColor: "#9e865a",
          }}
        />
      </div>
    </header>
  );
}
