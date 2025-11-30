// src/components/SpiritualArc.jsx
import React from "react";

const SpiritualArc = () => {
  const arcPoints = [
    { label: "Responsibility", position: -40 },
    { label: "Ethicality", position: -20 },
    { label: "Mastery", position: 0, bold: true },
    { label: "Adaptability", position: 20 },
    { label: "Nobility", position: 40 },
  ];

  const vennCircles = [
    { label: "Life", top: 0, left: 25 },
    { label: "Legacy", top: 0, left: 60 },
    { label: "Leadership", top: 30, left: 43 },
  ];

  return (
    <div
      style={{
        color: "#fff",
        textAlign: "center",
        padding: "20px 0 40px",
        userSelect: "none",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Conscious & Subconscious */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0 10px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          letterSpacing: "3px",
        }}
      >
        <div>CONSCIOUS</div>
        <div>SUBCONSCIOUS</div>
      </div>

      {/* Arc container */}
      <div style={{ position: "relative", height: "140px", marginBottom: "70px" }}>
        <svg viewBox="0 0 600 150" style={{ width: "100%", height: "100%" }}>
          {/* Arc Path */}
          <path
            d="M30 110 Q300 20 570 110"
            stroke="#ffffff"
            strokeWidth="6"
            fill="none"
          />
          {/* Markers */}
          {arcPoints.map(({ position }, index) => (
            <line
              key={index}
              x1={300 + position * 5}
              y1={110}
              x2={300 + position * 5}
              y2={80}
              stroke="#ffffff"
              strokeWidth="8"
            />
          ))}
        </svg>

        {/* Labels under the arc */}
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            fontWeight: "bold",
            fontSize: "0.95rem",
            padding: "0 20px",
          }}
        >
          {arcPoints.map(({ label, bold }, index) => (
            <div
              key={index}
              style={{
                fontWeight: bold ? "900" : "600",
                color: bold ? "#9e865a" : "#ffffff",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Venn diagram */}
      <div
        style={{
          position: "relative",
          width: "320px",
          height: "140px",
          margin: "0 auto",
        }}
      >
        {vennCircles.map(({ label, top, left }, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${top}px`,
              left: `${left}px`,
              width: "120px",
              height: "80px",
              borderRadius: "50%",
              border: "5px solid #ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              backgroundColor: "transparent",
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualArc;
