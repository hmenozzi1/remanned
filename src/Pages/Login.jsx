// src/Pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

import logo from "../assets/logo.png";
import Footer from "../components/Footer.jsx";

export function Login() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
    setFormData({ username: "", password: "", remember: false });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: replace this with real API auth later.
    // For now, just route to user or admin dashboard.
    if (isAdmin) {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="login-page-wrapper"
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

      {/* Login form */}
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
        <div
          className="login-container"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "12px",
            boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            padding: "2rem",
            maxWidth: "400px",
            width: "100%",
            color: "#fff",
          }}
        >
          {/* Toggle for User / Admin */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <button
              type="button"
              onClick={() => setIsAdmin(false)}
              style={{
                backgroundColor: !isAdmin ? "#9e865a" : "transparent",
                color: !isAdmin ? "#000" : "#fff",
                border: "none",
                padding: "0.5rem 1.5rem",
                borderRadius: "20px 0 0 20px",
                cursor: "pointer",
                fontWeight: "bold",
                flex: 1,
              }}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setIsAdmin(true)}
              style={{
                backgroundColor: isAdmin ? "#9e865a" : "transparent",
                color: isAdmin ? "#000" : "#fff",
                border: "none",
                padding: "0.5rem 1.5rem",
                borderRadius: "0 20px 20px 0",
                cursor: "pointer",
                fontWeight: "bold",
                flex: 1,
              }}
            >
              Admin
            </button>
          </div>

          {/* Login Title */}
          <h2
            style={{
              marginBottom: "1.5rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {isAdmin ? "Admin Login" : "User Login"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="username"
              style={{
                display: "block",
                textAlign: "left",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "1rem",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />

            <label
              htmlFor="password"
              style={{
                display: "block",
                textAlign: "left",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                marginBottom: "1rem",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
                color: "#fff",
                fontSize: "0.9rem",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  style={{ marginRight: "0.4rem" }}
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => alert("Trigger password recovery flow")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#9e865a",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
                backgroundColor: "#9e865a",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Log In
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
