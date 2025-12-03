// src/components/Footer.jsx
import React from "react";
import "../index.css";

import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Twitter/X icon

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        fontSize: "0.85rem",
        position: "relative",
      }}
    >
      {/* LEFT LINKS */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.85rem",
          }}
        >
          Legal
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.85rem",
          }}
        >
          Support
        </a>
      </div>

      {/* CENTER COPYRIGHT */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.85rem",
          opacity: 0.9,
        }}
      >
        Copyright © 2025 Remanned
      </div>

      {/* RIGHT SOCIAL ICONS */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          fontSize: "1.1rem",
        }}
      >
        <a href="#" style={{ color: "#fff" }}>
          <FaXTwitter />
        </a>
        <a href="#" style={{ color: "#fff" }}>
          <FaLinkedin />
        </a>
        <a href="#" style={{ color: "#fff" }}>
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
}
