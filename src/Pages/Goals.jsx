// src/Pages/Goals.jsx
import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function Goals() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showSqDetails, setShowSqDetails] = useState(true);
  const [showAqDetails, setShowAqDetails] = useState(true);

  const goDashboard = () => navigate("/dashboard");
  const goGoals = () => navigate("/goals");
  const goHistory = () => navigate("/history");
  const goJournal = () => navigate("/journal");
  const handleEndSession = async () => { await logout(); navigate("/login"); };

  return (
    <>
      <Body>
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#050608", color: "#ffffff" }}>
          <aside style={{ width: "260px", backgroundColor: "#050608", borderRight: "1px solid #262933", display: "flex", flexDirection: "column", padding: "1.25rem 1.5rem", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "999px", border: "2px solid #9e865a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "bold" }}>MQ</div>
              <span style={{ fontSize: "0.95rem", letterSpacing: "0.12em", color: "#9e865a", textTransform: "uppercase" }}>MQ3™ Hub</span>
            </div>
            {user && (
              <div style={{ marginBottom: "1.5rem", padding: "0.5rem 0.75rem", backgroundColor: "#191b23", borderRadius: "6px", fontSize: "0.8rem" }}>
                <div style={{ fontWeight: "600", marginBottom: "0.15rem", color: "#fff" }}>{user.name}</div>
                <div style={{ color: "#888", fontSize: "0.7rem" }}>{user.email}</div>
              </div>
            )}
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.8rem", letterSpacing: "0.12em" }}>
              <button onClick={goDashboard} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "#f5f5f5", fontWeight: 500, textTransform: "uppercase" }}>Dashboard</button>
              <button onClick={goGoals} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "#9e865a", color: "#000", fontWeight: 600, textTransform: "uppercase" }}>Goals</button>
              <button onClick={goHistory} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "#f5f5f5", fontWeight: 500, textTransform: "uppercase" }}>History</button>
              <button onClick={goJournal} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "#f5f5f5", fontWeight: 500, textTransform: "uppercase" }}>Journal</button>
            </nav>
            <div style={{ flexGrow: 1 }} />
            <button onClick={handleEndSession} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "999px", border: "none", backgroundColor: "#de3b40", color: "#ffffff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}>End Session</button>
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
                    marginBottom: "0.4rem",
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

                {/* Phase I row with dropdown */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.6rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setShowSqDetails((v) => !v)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#c3c3c3",
                      fontSize: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <span>Phase I</span>
                    <span style={{ fontSize: "0.75rem" }}>
                      {showSqDetails ? "▴" : "▾"}
                    </span>
                  </button>
                </div>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#c3c3c3",
                    marginBottom: "0.75rem",
                  }}
                >
                  Phase I, focusing on self-awareness and inner peace, has been
                  successfully completed. Great progress!
                </p>

                {showSqDetails && (
                  <div
                    style={{
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <ul
                      style={{
                        marginLeft: "1rem",
                        paddingLeft: 0,
                        listStyle: "disc",
                      }}
                    >
                      <li>
                        SQ represents a man&apos;s belief system, clarity of
                        identity, and connection to purpose.
                      </li>
                      <li>Three Sacred Connections:</li>
                      <ul
                        style={{
                          marginLeft: "1.25rem",
                          listStyle: "disc",
                          marginTop: "0.25rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <li>Vertical – Man and SPIRIT</li>
                        <li>Horizontal – Man and Brotherhood</li>
                        <li>Internal – Man and Self</li>
                      </ul>
                      <li>
                        Byproduct: A man with strong SQ gains identity and
                        purpose.
                      </li>
                      <li>
                        If SQ is Low: Confusion, aimlessness, false identities,
                        self-sabotage.
                      </li>
                      <li>
                        If SQ is Strong: Anchored belief, conviction, resilience
                        in uncertainty.
                      </li>
                    </ul>
                  </div>
                )}
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
                    marginBottom: "0.4rem",
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

                {/* Phase II row with dropdown */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.6rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setShowAqDetails((v) => !v)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#c3c3c3",
                      fontSize: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <span>Phase II</span>
                    <span style={{ fontSize: "0.75rem" }}>
                      {showAqDetails ? "▴" : "▾"}
                    </span>
                  </button>
                </div>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#c3c3c3",
                    marginBottom: "0.75rem",
                  }}
                >
                  Phase II, enhancing your ability to thrive in changing
                  environments, is currently 70% complete. Keep going!
                </p>

                {showAqDetails && (
                  <div
                    style={{
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <ul
                      style={{
                        marginLeft: "1rem",
                        paddingLeft: 0,
                        listStyle: "disc",
                      }}
                    >
                      <li>
                        AQ measures a man&apos;s ability to endure, adapt, and
                        grow through challenge.
                      </li>
                      <li>Five Traits of AQ:</li>
                      <ul
                        style={{
                          marginLeft: "1.25rem",
                          listStyle: "disc",
                          marginTop: "0.25rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <li>
                          Responsibility – ownership of one&apos;s yard and
                          domain
                        </li>
                        <li>
                          Ethicality – living by a personal code regardless of
                          circumstance
                        </li>
                        <li>
                          Mastery – discipline + endurance; the pain of growth
                          when building skill
                        </li>
                        <li>
                          Adaptability – ability to bend without breaking
                        </li>
                        <li>
                          Nobility – inner excellence, always doing 3° more
                        </li>
                      </ul>
                      <li>Byproduct: Capacity and resilience.</li>
                      <li>
                        If AQ is Low: Blame-shifting, quitting early, fragile
                        under pressure.
                      </li>
                      <li>
                        If AQ is Strong: Unshakable resilience, growth through
                        adversity, leadership under fire.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
      </Body>
    </>
  );
}