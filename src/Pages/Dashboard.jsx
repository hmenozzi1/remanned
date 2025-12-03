// src/Pages/Dashboard.jsx
import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import { useNavigate } from "react-router-dom";
import React from "react";

/**
 * User Dashboard – MQ3™ Hub
 * Left column: app nav + End Session
 * Right: MQ3™ Cycle, SQ Completion, AQ Progress
 */
export function Dashboard() {
  const navigate = useNavigate();

  const goDashboard = () => navigate("/Dashboard.jsx");
  const goGoals = () => navigate("/Goals.jsx");
  const goHistory = () => navigate("/History.jsx");
  const goJournal = () => navigate("/Journal.jsx");

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
          {/* LEFT SIDEBAR COLUMN */}
          <aside
            style={{
              width: "260px",
              backgroundColor: "#050608",
              borderRight: "1px solid #262933",
              display: "flex",
              flexDirection: "column",
              padding: "1.25rem 1.5rem",
              boxSizing: "border-box",
            }}
          >
            {/* Brand */}
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
                }}
              >
                MQ
              </div>
              <span
                style={{
                  fontSize: "0.95rem",
                  letterSpacing: "0.12em",
                  color: "#9e865a",
                  textTransform: "uppercase",
                }}
              >
                MQ3™ Hub
              </span>
            </div>

            {/* Nav items */}
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
              }}
            >
              <button
                onClick={goDashboard}
                style={{
                  textAlign: "left",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#9e865a",
                  color: "#000",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Dashboard
              </button>

              <button
                onClick={goGoals}
                style={{
                  textAlign: "left",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  color: "#f5f5f5",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Goals
              </button>

              <button
                onClick={goHistory}
                style={{
                  textAlign: "left",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  color: "#f5f5f5",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                History
              </button>

              <button
                onClick={goJournal}
                style={{
                  textAlign: "left",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  color: "#f5f5f5",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Journal
              </button>
            </nav>

            {/* Spacer */}
            <div style={{ flexGrow: 1 }} />

            {/* End Session button */}
            <button
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#de3b40",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              onClick={() => alert("End Session")}
            >
              End Session
            </button>
          </aside>

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
