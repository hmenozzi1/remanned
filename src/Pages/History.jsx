// src/Pages/History.jsx
import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function History() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [lessonsExpanded, setLessonsExpanded] = useState(true);
  const [strengthsExpanded, setStrengthsExpanded] = useState(true);
  const [priorCyclesExpanded, setPriorCyclesExpanded] = useState(true);

  const priorCycles = [
    { name: "Cycle 2: Q2 2023 Growth", date: "2023-06-30", mastery: 4 },
    { name: "Cycle 1: Q1 2023 Foundation", date: "2023-03-31", mastery: 5 },
    { name: "Cycle 4: Q4 2022 Planning", date: "2022-12-31", mastery: 3 },
    { name: "Cycle 3: Q3 2022 Innovation", date: "2022-09-30", mastery: 4 },
    { name: "Cycle 2: Q2 2022 Refinement", date: "2022-06-30", mastery: 3 },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} style={{ color: i <= count ? "#9e865a" : "#444", fontSize: "1.25rem" }}>★</span>);
    }
    return stars;
  };

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
              <button onClick={goGoals} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "#f5f5f5", fontWeight: 500, textTransform: "uppercase" }}>Goals</button>
              <button onClick={goHistory} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "#9e865a", color: "#000", fontWeight: 600, textTransform: "uppercase" }}>History</button>
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
              overflowY: "auto",
            }}
          >
            {/* Header */}
            <header style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center"
            }}>
              <div style={{ 
                fontWeight: "bold", 
                fontSize: "1.3rem", 
                color: "#9e865a", 
                userSelect: "none" 
              }}>
                &lt; Cycle 3: Q3 2023 Impact &gt;
              </div>
              <button
                onClick={() => alert("Unlock new cycle")}
                style={{
                  backgroundColor: "#9e865a",
                  color: "#000",
                  border: "none",
                  borderRadius: "6px",
                  padding: "0.5rem 1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                }}
              >
                Unlock New Cycle
              </button>
            </header>

            {/* Top Row: Cycle Overview & Progress Chart */}
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "1.5rem"
            }}>
              {/* Cycle Overview Card */}
              <section style={{ 
                backgroundColor: "#191b23", 
                borderRadius: "12px", 
                padding: "1.5rem", 
                boxShadow: "0 0 15px #9e865a33" 
              }}>
                <h2 style={{ color: "#9e865a", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                  Cycle 3: Q3 2023 Impact
                </h2>
                <span style={{ 
                  backgroundColor: "#dd3b67", 
                  color: "#fff", 
                  padding: "0.2rem 0.8rem", 
                  borderRadius: "12px", 
                  fontWeight: "bold", 
                  fontSize: "0.7rem",
                  display: "inline-block",
                  marginBottom: "0.75rem"
                }}>
                  Underperforming
                </span>
                <p style={{ margin: "0.5rem 0", fontWeight: "bold", fontSize: "0.9rem" }}>
                  Completion Rate: 72%
                </p>
                <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}><strong>Key Achievements:</strong></p>
                <ul style={{ 
                  marginLeft: "1.5rem", 
                  listStyleType: "disc", 
                  fontSize: "0.85rem",
                  lineHeight: "1.5"
                }}>
                  <li>Launched a significant personal project.</li>
                  <li>Developed foundational skills in a new area.</li>
                  <li>Faced unexpected challenges requiring significant adaptation.</li>
                </ul>
              </section>

              {/* Progress Comparison Chart */}
              <section style={{ 
                backgroundColor: "#191b23", 
                borderRadius: "12px", 
                padding: "1.5rem", 
                boxShadow: "0 0 15px #9e865a33" 
              }}>
                <h2 style={{ color: "#9e865a", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                  Progress Comparison
                </h2>
                <p style={{ color: "#bbb", fontSize: "0.8rem", marginBottom: "1rem" }}>
                  Expected vs. Actual results over 12 weeks with checkpoints.
                </p>
                <svg viewBox="0 0 300 150" width="100%" height="150" style={{ userSelect: "none" }}>
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map(v => {
                    const y = 135 - (v / 100) * 120;
                    return <line key={v} x1="30" y1={y} x2="290" y2={y} stroke="#444" strokeWidth="0.5" />;
                  })}
                  {/* Axes */}
                  <line x1="30" y1="15" x2="30" y2="135" stroke="#9e865a" strokeWidth="2" />
                  <line x1="30" y1="135" x2="290" y2="135" stroke="#9e865a" strokeWidth="2" />

                  {/* Expected Progress (Blue Line) */}
                  <polyline
                    fill="none"
                    stroke="#5e86bc"
                    strokeWidth="3"
                    points="30,135 60,105 90,75 120,60 150,45 180,30 210,25 240,20 270,18 290,15"
                  />

                  {/* Actual Progress (Red Line) */}
                  <polyline
                    fill="none"
                    stroke="#bc5e5e"
                    strokeWidth="3"
                    points="30,135 60,110 90,90 120,85 150,75 180,60 210,55 240,50 270,45 290,40"
                  />

                  {/* Week Labels */}
                  {["Week 2", "Week 4", "Week 6", "Week 8", "Week 10", "Week 12"].map((week, i) => (
                    <text key={week} x={30 + i * 45} y="150" fill="#888" fontSize="10" textAnchor="middle">
                      {week}
                    </text>
                  ))}

                  {/* Legend */}
                  <rect x="200" y="5" width="10" height="10" fill="#5e86bc" />
                  <text x="215" y="14" fill="#bbb" fontSize="11">Expected</text>
                  <rect x="200" y="20" width="10" height="10" fill="#bc5e5e" />
                  <text x="215" y="29" fill="#bbb" fontSize="11">Actual</text>
                </svg>
              </section>
            </div>

            {/* Domain Performance */}
            <section style={{ 
              backgroundColor: "#191b23", 
              borderRadius: "12px", 
              padding: "1.5rem", 
              boxShadow: "0 0 15px #9e865a33"
            }}>
              <h3 style={{ color: "#9e865a", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                Domain Performance
              </h3>
              <p style={{ color: "#bbb", marginBottom: "1rem", fontSize: "0.8rem" }}>
                Detailed breakdown by domain goals.
              </p>
              <div style={{ 
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem"
              }}>
                {[
                  { title: "Life", score: 750, percent: 75 },
                  { title: "Leadership", score: 700, percent: 70 },
                  { title: "Legacy", score: 800, percent: 80 },
                ].map(({ title, score, percent }) => (
                  <div key={title} style={{ 
                    backgroundColor: "#0f1115", 
                    borderRadius: "10px", 
                    padding: "1.25rem", 
                    boxShadow: "0 0 15px #9e865a22"
                  }}>
                    <h4 style={{ 
                      fontWeight: "bold", 
                      marginBottom: "0.5rem", 
                      color: "#9e865a",
                      fontSize: "0.95rem"
                    }}>
                      {title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", margin: "0.25rem 0" }}>Score: {score}</p>
                    <p style={{ fontSize: "0.85rem", margin: "0.25rem 0" }}>{percent}%</p>
                    <span style={{ 
                      backgroundColor: "#dd3b67", 
                      color: "#fff", 
                      padding: "0.2rem 0.75rem", 
                      borderRadius: "12px", 
                      fontWeight: "bold", 
                      fontSize: "0.7rem",
                      display: "inline-block",
                      marginTop: "0.5rem"
                    }}>
                      Underperforming
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons Learned */}
            <section style={{ 
              backgroundColor: "#191b23", 
              borderRadius: "12px", 
              padding: "1.5rem", 
              boxShadow: "0 0 15px #9e865a33"
            }}>
              <div
                onClick={() => setLessonsExpanded(!lessonsExpanded)}
                style={{ 
                  cursor: "pointer", 
                  color: "#9e865a", 
                  fontWeight: "bold", 
                  fontSize: "1rem", 
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: lessonsExpanded ? "1rem" : "0"
                }}
              >
                <span>Lessons Learned</span>
                <span>{lessonsExpanded ? "▲" : "▼"}</span>
              </div>
              {lessonsExpanded && (
                <div style={{ color: "#ccc" }}>
                  <p style={{ marginBottom: "1rem", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    Reflect on key challenges and insights from this cycle. What went well? 
                    What could be improved for the next cycle?
                  </p>
                  <button
                    style={{ 
                      backgroundColor: "#9e865a", 
                      color: "#000", 
                      padding: "0.5rem 1rem", 
                      border: "none", 
                      borderRadius: "6px", 
                      cursor: "pointer", 
                      fontWeight: "bold",
                      fontSize: "0.85rem"
                    }}
                    onClick={() => alert("Document Learnings")}
                  >
                    Document Learnings
                  </button>
                </div>
              )}
            </section>

            {/* Strengths to Leverage */}
            <section style={{ 
              backgroundColor: "#191b23", 
              borderRadius: "12px", 
              padding: "1.5rem", 
              boxShadow: "0 0 15px #9e865a33"
            }}>
              <div
                onClick={() => setStrengthsExpanded(!strengthsExpanded)}
                style={{ 
                  cursor: "pointer", 
                  color: "#9e865a", 
                  fontWeight: "bold", 
                  fontSize: "1rem", 
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: strengthsExpanded ? "1rem" : "0"
                }}
              >
                <span>Strengths to Leverage</span>
                <span>{strengthsExpanded ? "▲" : "▼"}</span>
              </div>
              {strengthsExpanded && (
                <div style={{ color: "#ccc" }}>
                  <p style={{ marginBottom: "1rem", fontSize: "0.9rem", lineHeight: "1.5" }}>
                    Identify the strategies, habits, or resources that contributed most to your success. 
                    How can you amplify these in the future?
                  </p>
                  <button
                    style={{ 
                      backgroundColor: "#9e865a", 
                      color: "#000", 
                      padding: "0.5rem 1rem", 
                      border: "none", 
                      borderRadius: "6px", 
                      cursor: "pointer", 
                      fontWeight: "bold",
                      fontSize: "0.85rem"
                    }}
                    onClick={() => alert("Plan Leveraging Actions")}
                  >
                    Plan Leveraging Actions
                  </button>
                </div>
              )}
            </section>

            {/* Prior Completed Cycles */}
            <section style={{ 
              backgroundColor: "#191b23", 
              borderRadius: "12px", 
              padding: "1.5rem", 
              boxShadow: "0 0 15px #9e865a33" 
            }}>
              <div
                onClick={() => setPriorCyclesExpanded(!priorCyclesExpanded)}
                style={{ 
                  cursor: "pointer", 
                  color: "#9e865a", 
                  fontWeight: "bold", 
                  fontSize: "1rem", 
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: priorCyclesExpanded ? "1rem" : "0"
                }}
              >
                <span>Prior Completed Cycles</span>
                <span>{priorCyclesExpanded ? "▲" : "▼"}</span>
              </div>
              {priorCyclesExpanded && (
                <table style={{ 
                  width: "100%", 
                  borderCollapse: "collapse", 
                  color: "#ccc",
                  fontSize: "0.85rem"
                }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #9e865a" }}>
                      <th style={{ textAlign: "left", padding: "0.75rem", color: "#9e865a" }}>
                        Cycle Name
                      </th>
                      <th style={{ textAlign: "left", padding: "0.75rem", color: "#9e865a" }}>
                        Completion Date
                      </th>
                      <th style={{ textAlign: "left", padding: "0.75rem", color: "#9e865a" }}>
                        Mastery Level
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priorCycles.map(({ name, date, mastery }) => (
                      <tr 
                        key={name} 
                        style={{ 
                          borderBottom: "1px solid #333",
                          cursor: "pointer",
                          transition: "background-color 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#252830"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        <td style={{ padding: "0.75rem" }}>{name}</td>
                        <td style={{ padding: "0.75rem" }}>{date}</td>
                        <td style={{ padding: "0.75rem", fontSize: "1.1rem" }}>
                          {renderStars(mastery)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          </main>
        </div>
      </Body>
    </>
  );
}