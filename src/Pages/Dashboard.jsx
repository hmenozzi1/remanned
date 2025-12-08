// src/Pages/Dashboard.jsx
import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import { useNavigate } from "react-router-dom";
import React from "react";
import Sidebar from "../components/Sidebar.jsx";

export function Dashboard() {
  const navigate = useNavigate();

  const handleSidebarNavigate = (id) => {
    switch (id) {
      case "dashboard":
        navigate("/dashboard");
        break;
      case "goals":
        navigate("/goals");
        break;
      case "history":
        navigate("/history");
        break;
      case "journal":
        navigate("/journal");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Body>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            backgroundColor: "#050608",
            color: "#ffffff",
          }}
        >
          {/* LEFT SIDEBAR: brand + nav + end session */}
          <MQ3TMHubSidebar
            activeSection="dashboard"
            onNavigate={handleSidebarNavigate}
          />

          {/* MAIN CONTENT */}
          <main
            style={{
              flex: 1,
              padding: "2rem 2.5rem",
              boxSizing: "border-box",
              backgroundColor: "#111318",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* MQ3TM Cycle Overview card */}
            <section
              style={{
                backgroundColor: "#191b23",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 0 25px #9e865a33",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "0.25rem",
                  fontSize: "1.3rem",
                  letterSpacing: "0.08em",
                }}
              >
                MQ3TM Cycle Overview
              </h2>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "1.5rem",
                  fontSize: "0.8rem",
                  color: "#c3c3c3",
                }}
              >
                Your journey through the MQ3TM cycle
              </p>

              <div
                style={{
                  position: "relative",
                  width: "260px",
                  height: "260px",
                  margin: "0 auto",
                }}
              >
                <svg
                  width="260"
                  height="260"
                  viewBox="0 0 220 220"
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  <circle
                    cx="110"
                    cy="110"
                    r="100"
                    fill="none"
                    stroke="#2c3038"
                    strokeWidth="14"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="100"
                    fill="none"
                    stroke="#9e865a"
                    strokeWidth="14"
                    strokeDasharray={2 * Math.PI * 100}
                    strokeDashoffset={2 * Math.PI * 100 * 0.33}
                    strokeLinecap="round"
                    transform="rotate(-90 110 110)"
                  />
                </svg>

                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 160 160"
                  style={{ position: "absolute", top: 30, left: 30 }}
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#2c3038"
                    strokeWidth="10"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#9e865a"
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 70}
                    strokeDashoffset={2 * Math.PI * 70 * 0.6}
                    strokeLinecap="round"
                    transform="rotate(-90 80 80)"
                  />
                </svg>

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  <div style={{ fontSize: "1.7rem" }}>1870</div>
                  <div style={{ fontSize: "0.9rem", color: "#d1bf86" }}>
                    MQ³™ Points
                  </div>
                  <div style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>
                    7 Day Streak
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom row: SQ + AQ cards */}
            <section
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                gap: "1.5rem",
              }}
            >
              {/* SQ Completion */}
              <div
                style={{
                  backgroundColor: "#191b23",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 0 15px #9e865a33",
                  fontSize: "0.85rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3 style={{ color: "#9e865a", fontSize: "0.95rem" }}>
                    SQ Completion
                  </h3>
                  <span
                    style={{
                      padding: "0.2rem 0.7rem",
                      borderRadius: "999px",
                      backgroundColor: "#25a56a",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    Completed
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#c3c3c3" }}>
                  Phase I • Completed on July 16, 2024
                </p>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.8rem",
                    lineHeight: 1.4,
                  }}
                >
                  Phase I, focusing on self-awareness and inner peace, has been
                  successfully completed. Great progress!
                </p>

                <div
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    height: "9px",
                    borderRadius: "999px",
                    backgroundColor: "#2c3038",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#32c96b",
                    }}
                  />
                </div>
              </div>

              {/* AQ Progress */}
              <div
                style={{
                  backgroundColor: "#191b23",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 0 15px #9e865a33",
                  fontSize: "0.85rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3 style={{ color: "#9e865a", fontSize: "0.95rem" }}>
                    AQ Progress
                  </h3>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#f5f5f5",
                    }}
                  >
                    70% Complete
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#c3c3c3" }}>
                  Phase II • Adapting and thriving in changing environments.
                </p>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.8rem",
                    lineHeight: 1.4,
                  }}
                >
                  Phase II, enhancing your ability to thrive in changing
                  environments, is currently 70% complete. Keep going!
                </p>

                <div
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    height: "9px",
                    borderRadius: "999px",
                    backgroundColor: "#2c3038",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                      height: "100%",
                      backgroundColor: "#f1c04a",
                    }}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </Body>
      <Footer />
    </>
  );
}
