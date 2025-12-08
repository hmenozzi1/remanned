// src/Pages/Journal.jsx
import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function Journal() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [enabledEnhanced, setEnabledEnhanced] = useState(true);
  const [responses, setResponses] = useState({ lessonsLearned: "", areasToImprove: "", changesGoingForward: "", aqResilience: "", aqStrengths: "" });
  const maxChars = { lessonsLearned: 500, areasToImprove: 500, changesGoingForward: 500, aqResilience: 750, aqStrengths: 750 };

  const handleChange = (field) => (event) => {
    const limit = maxChars[field];
    if (event.target.value.length <= limit) {
      setResponses({ ...responses, [field]: event.target.value });
    }
  };

  const handleSubmit = () => { console.log("Journal submission:", responses); alert("Journal entry saved!"); };
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
              <button onClick={goHistory} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "#f5f5f5", fontWeight: 500, textTransform: "uppercase" }}>History</button>
              <button onClick={goJournal} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "#9e865a", color: "#000", fontWeight: 600, textTransform: "uppercase" }}>Journal</button>
            </nav>
            <div style={{ flexGrow: 1 }} />
            <button onClick={handleEndSession} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "999px", border: "none", backgroundColor: "#de3b40", color: "#ffffff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}>End Session</button>
          </aside>

          <main style={{ flex: 1, padding: "2rem 2.5rem", boxSizing: "border-box", backgroundColor: "#111318", overflowY: "auto" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <section style={{ backgroundColor: "#191b23", borderRadius: "12px", padding: "2rem", boxShadow: "0 0 25px #9e865a33", marginBottom: "2rem" }}>
                <h1 style={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "1rem", color: "#9e865a" }}>Daily Reflection Journal</h1>
                <p style={{ marginBottom: "1.5rem", color: "#ccc", fontSize: "0.95rem" }}>Capture your thoughts and insights with guided prompts and AQ-related reflections.</p>
                <label style={{ display: "flex", alignItems: "center", cursor: "pointer", fontWeight: "500", color: "#ccc", fontSize: "0.9rem" }}>
                  <div style={{ position: "relative", width: "48px", height: "24px", marginRight: "0.75rem" }}>
                    <input type="checkbox" checked={enabledEnhanced} onChange={() => setEnabledEnhanced(!enabledEnhanced)} style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{ position: "absolute", cursor: "pointer", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: enabledEnhanced ? "#9e865a" : "#555", transition: "0.3s", borderRadius: "24px" }}>
                      <span style={{ position: "absolute", content: "", height: "18px", width: "18px", left: enabledEnhanced ? "27px" : "3px", bottom: "3px", backgroundColor: "white", transition: "0.3s", borderRadius: "50%" }} />
                    </span>
                  </div>
                  <span style={{ color: enabledEnhanced ? "#9e865a" : "#888" }}>Enable enhanced reflection features</span>
                </label>
              </section>

              {[
                { label: "Lessons learned today", name: "lessonsLearned", placeholder: "Reflect on key takeaways and new insights from your day...", limit: maxChars.lessonsLearned },
                { label: "Areas I can improve on", name: "areasToImprove", placeholder: "Consider what could have gone better and how you might approach it differently...", limit: maxChars.areasToImprove },
                { label: "What will I do differently from today going forward?", name: "changesGoingForward", placeholder: "Outline concrete actions or changes you plan to implement...", limit: maxChars.changesGoingForward },
                { label: "AQ Reflection: Resilience & Adaptation", name: "aqResilience", placeholder: "How did you handle unexpected challenges today? What strategies did you use to adapt?", limit: maxChars.aqResilience },
                { label: "AQ Reflection: Leveraging Strengths", name: "aqStrengths", placeholder: "When did you feel most effective or impactful? Which of your strengths did you use and how?", limit: maxChars.aqStrengths },
              ].map(({ label, name, placeholder, limit }) => {
                const value = responses[name];
                return (
                  <section key={name} style={{ backgroundColor: "#191b23", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 0 15px #9e865a33", marginBottom: "1.5rem" }}>
                    <label htmlFor={name} style={{ fontWeight: "bold", display: "block", marginBottom: "0.75rem", color: "#9e865a", fontSize: "1rem" }}>{label}</label>
                    <textarea id={name} name={name} value={value} placeholder={placeholder} onChange={handleChange(name)} rows={4} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", backgroundColor: "#0f1115", border: "1px solid #262933", color: "#eee", fontSize: "0.9rem", resize: "vertical", outline: "none", boxSizing: "border-box", fontFamily: "inherit", lineHeight: "1.5" }} />
                    <div style={{ textAlign: "right", fontSize: "0.8rem", color: value.length > limit ? "#ff6b6b" : "#888", marginTop: "0.5rem", userSelect: "none" }}>{value.length}/{limit} characters</div>
                  </section>
                );
              })}

              <section style={{ backgroundColor: "#191b23", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 0 15px #9e865a33", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <p style={{ color: "#888", fontSize: "0.85rem", fontStyle: "italic", userSelect: "none", margin: 0 }}>Your reflections are private and saved automatically.</p>
                <button onClick={handleSubmit} style={{ padding: "0.6rem 2rem", backgroundColor: "#9e865a", border: "none", borderRadius: "6px", color: "#000", fontWeight: "bold", fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}>Submit</button>
              </section>
            </div>
          </main>
        </div>
      </Body>
      <Footer />
    </>
  );
}