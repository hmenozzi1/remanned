// src/components/MainSection.jsx
import "../index.css";

export default function MainSection({ children, style }) {
  return (
    <div
      className="main-section"
      style={{
        gridArea: "main",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
