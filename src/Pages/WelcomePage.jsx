// src/Pages/WelcomePage.jsx
import "../index.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

import logo from "../assets/logo.png";
import spiritualBanner from "../assets/spiritual-banner.png";    // replaced
import arcImg from "../assets/arc.png";                          // Replaced
import vennImg from "../assets/venn.png";                        // Replaced with new venn diagram (no background)

export function WelcomePage() {
  const navigate = useNavigate();

  const handleClickContinue = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Logo */}
      <header
        style={{
          display: "flex",
          padding: "1rem 2rem",
        }}
      >
        <img src={logo} alt="Remanned Logo" style={{ height: "40px" }} />
      </header>

      {/* MAIN CONTENT */}
      <main
        style={{
          textAlign: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* SPIRITUAL BANNER */}
        <img
          src={spiritualBanner}
          alt="Spiritual Banner"
          style={{
            width: "90%",
            maxWidth: "850px",
            marginTop: "1rem",
          }}
        />

        {/* Welcome Back */}
        <h1
          style={{
            color: "#9e865a",
            fontSize: "2.5rem",
            fontWeight: 300,
            marginTop: "0.5rem",
            marginBottom: "1rem",
            letterSpacing: "0.15em",
          }}
        >
          Welcome Back
        </h1>

        {/* Conscious / Subconscious */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "85%",
            maxWidth: "850px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            letterSpacing: "3px",
            marginTop: "1rem",
          }}
        >
          <span>CONSCIOUS</span>
          <span>SUBCONSCIOUS</span>
        </div>

        {/* ARC IMAGE */}
        <img
          src={arcImg}
          alt="Arc Graphic"
          style={{
            width: "90%",
            maxWidth: "950px",
            marginTop: "0.5rem",
          }}
        />

        {/* Continue Button */}
        <button
          onClick={handleClickContinue}
          style={{
            marginTop: "1.5rem",
            padding: "0.8rem 3.5rem",
            backgroundColor: "#9e865a",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Click to Continue
        </button>

        {/* Venn Diagram */}
        <img
          src={vennImg}
          alt="Life Legacy Leadership"
          style={{
            width: "75%",
            maxWidth: "600px",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
