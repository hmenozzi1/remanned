import "../index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from "../components/ProfileBanner.jsx";
import Sidebar from "../components/SideBar.jsx";
import MainSection from "../components/MainSection.jsx";
import { fetchDashboardData } from "../api/dashboardApi.js";

export function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const data = await fetchDashboardData({
          userId: 1, // TODO: replace with real logged-in user
          targetWeekNumber: 1,
        });

        if (isMounted) {
          setDashboardData(data);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError("Unable to load dashboard data.");
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleViewGoals = () => {
    navigate("/goals");
  };

  const handleViewHistory = () => {
    navigate("/history");
  };

  const handleContactSupport = () => {
    // For now just route to history/journal – update later when support page exists
    navigate("/journal");
  };

  // Derived metrics from scoreboard
  const scoreboard = dashboardData?.scoreboard;

  const totalPoints = scoreboard ? Number(scoreboard.total_points) || 0 : 0;
  const mqPercent = Math.round((totalPoints / 21) * 100); // 21 max weekly points

  const lifePoints = scoreboard ? Number(scoreboard.life_points) || 0 : 0;
  const leadershipPoints = scoreboard
    ? Number(scoreboard.leadership_points) || 0
    : 0;
  const legacyPoints = scoreboard ? Number(scoreboard.legacy_points) || 0 : 0;

  const lifePercent = Math.round((lifePoints / 7) * 100); // each domain max 7
  const leadershipPercent = Math.round((leadershipPoints / 7) * 100);
  const legacyPercent = Math.round((legacyPoints / 7) * 100);

  return (
    <>
      <Body>
        <div className="dashboard-layout">
          <ProfileBanner />
          <Sidebar />

          <MainSection
            style={{
              display: "grid",
              height: "40vh",
              gridTemplateAreas: '"top top" "bottom-left bottom-right"',
              gridTemplateRows: "60vh",
              flexGrow: "1",
            }}
          >
            {/* Top MQ Ring / Overview */}
            <Card
              className="top-card"
              style={{
                width: "80vw",
                height: "63vh",
                display: "flex",
                textAlign: "center",
                margin: "auto",
                gridArea: "top",
                flexDirection: "column",
                marginTop: "2vh",
                marginBottom: "1vh",
              }}
            >
              <div className="contact-support-banner">
                <p className="contact-support-text">
                  Contact support for goal reconciliation.
                </p>
                <button
                  className="contact-support-btn"
                  onClick={handleContactSupport}
                  style={{ backgroundColor: "#9e865a" }}
                >
                  Contact Support
                </button>
              </div>

              <h1 id="top-card-header">MQ3TM Cycle Overview</h1>
              <h2 className="top-card-subheader">
                Your journey through the MQ3TM cycle
              </h2>

              {/* Ring with live MQ points */}
              <div className="mq-ring-wrapper">
                <img
                  src="src/assets/Screenshot 2025-11-19 112150.png"
                  id="mq-img"
                  alt="MQ3TM cycle ring"
                />
                <div className="mq-ring-center">
                  {loading && <p className="mq-ring-loading">Loading...</p>}
                  {error && (
                    <p className="mq-ring-error">
                      {error} Showing placeholder data.
                    </p>
                  )}
                  {!loading && (
                    <>
                      <p className="mq-ring-points">{totalPoints.toFixed(2)}</p>
                      <p className="mq-ring-label">MQ Points</p>
                      <p className="mq-ring-streak">
                        {dashboardData?.week
                          ? `Week ${dashboardData.week.week_number}`
                          : ""}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Legend */}
              <div className="mq-container">
                <div className="mq-item-container">
                  <img
                    src="src/assets/new-moon (1).png"
                    className="mq-icons"
                    alt=""
                  />
                  <p className="mq-list-option">Completed Works</p>
                </div>
                <div className="mq-item-container">
                  <img
                    src="src/assets/red-flag.png"
                    className="mq-icons"
                    alt=""
                  />
                  <p className="mq-list-option">Checkpoints</p>
                </div>
                <div className="mq-item-container">
                  <img
                    src="src/assets/new-moon.png"
                    className="mq-icons"
                    alt=""
                  />
                  <p className="mq-list-option">Upcoming Works</p>
                </div>
              </div>
            </Card>

            {/* Bottom row cards */}
            <div className="bottom-container">
              {/* SQ card */}
              <Card
                className="bottom-card-left"
                style={{
                  height: "35vh",
                  marginLeft: "1vh",
                  width: "40vw",
                  gap: "2vh",
                }}
              >
                <h1 className="card-header">SQ Completion</h1>

                <div className="progess-bar-container completed-progress-bar-container">
                  <h1 className="card-subheader">Phase 1</h1>
                  <button
                    className="completed-btn"
                    onClick={handleViewGoals}
                    style={{ backgroundColor: "#9e865a" }}
                  >
                    Completed
                  </button>
                </div>

                {dashboardData?.activeCycle && (
                  <h1 className="completed-date">
                    {/* Use cycle end date as a rough completion date for now */}
                    Completed cycle ending on{" "}
                    {dashboardData.activeCycle.end_date}
                  </h1>
                )}

                <p className="phase-description">
                  Phase I, focusing on self-awareness and inner peace, has been
                  successfully completed. Great progress!
                </p>
              </Card>

              {/* AQ card */}
              <Card
                className="bottom-card-right"
                style={{ height: "35vh", width: "40vw", gap: "2vh" }}
              >
                <h1 className="card-header">AQ Progress</h1>

                <div className="in-progress-bar-container">
                  <div className="in-progress-bar-container-2">
                    <h1 className="card-subheader">Phase 2</h1>
                    <p className="percentage-completion-text">
                      {mqPercent}% Complete
                    </p>
                  </div>

                  <progress
                    className="progress-bar"
                    value={mqPercent}
                    max="100"
                  >
                    {mqPercent}%
                  </progress>
                </div>

                <p className="phase-description">
                  Phase II, enhancing your ability to thrive in changing
                  environments, is currently {mqPercent}% complete. Keep going!
                </p>

                {/* Optional small summary from domain percentages */}
                {!loading && (
                  <p className="phase-description small">
                    Life {lifePercent}% • Leadership {leadershipPercent}% •
                    Legacy {legacyPercent}%
                  </p>
                )}

                <button
                  className="history-link-btn"
                  onClick={handleViewHistory}
                  style={{ marginTop: "0.75rem", color: "#9e865a" }}
                >
                  View cycle history →
                </button>
              </Card>
            </div>
          </MainSection>
        </div>
      </Body>

      <Footer className="footer" />
    </>
  );
}
