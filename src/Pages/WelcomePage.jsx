// src/Pages/WelcomePage.jsx
import "../index.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

import logo from "../assets/logo.png";
import SpiritualArc from "../components/SpiritualArc.jsx";

export function WelcomePage() {
  const navigate = useNavigate();

  const handleClickContinue = () => {
    navigate("/login"); // go to login screen route
  };

  return (
    <div
      className="welcome-page-wrapper"
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar with logo */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0.5rem 1rem",
          backgroundColor: "#000",
        }}
      >
        <img src={logo} alt="Remanned Logo" style={{ height: "32px" }} />
      </header>

      {/* Main hero content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 2rem",
          textAlign: "center",
        }}
      >
        {/* Welcome Back */}
        <h1
          style={{
            color: "#9e865a",
            fontSize: "2.2rem",
            fontStyle: "italic",
            fontWeight: 300,
            margin: "0.25rem 0 1.5rem 0",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Welcome Back
        </h1>

        {/* Arc + labels + Venn rendered via component */}
        <SpiritualArc />

        {/* Click to Continue button */}
        <button
          id="welcome-page-btn"
          onClick={handleClickContinue}
          style={{
            marginTop: "1.5rem",
            marginBottom: "2rem",
            padding: "0.75rem 4rem",
            border: "none",
            borderRadius: "3px",
            backgroundColor: "#9e865a",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "0.9rem",
            cursor: "pointer",
            width: "50%",
            maxWidth: "400px",
          }}
        >
          Click to Continue
        </button>
      </main>

      <Footer />
    </div>
  );
}
