import '../index.css';
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import Card from "./components/Card.jsx";
import ProfileBanner from './components/ProfileBanner.jsx';
import Sidebar from './components/SideBar.jsx';
import MainSection from "./components/MainSection.jsx";
import Button from "./components/Button.jsx";
import { useNavigate } from "react-router-dom";

export function AdminDashboard() {
  const navigate = useNavigate();

  const goToWeeklyTactics = () => {
    // For now, send them to Goals; later we can swap to a dedicated WeeklyPlan page
    navigate("/Goals.jsx");
  };

  const goToDailyEngagement = () => {
    // Daily engagement = Journal / DailyLog
    navigate("/Journal.jsx");
  };

  return (
    <>
      <Body>
        <div className="dashboard-layout">
          <ProfileBanner />

          <Sidebar style={{ height: "200vh" }} />

          <MainSection
            style={{
              height: "800vh",
              display: "grid",
              gridTemplateRows: "20vw 20vw 20vw",
              gridTemplateAreas:
                '"top top " "middle-left middle-middle middle-right""bottom-left bottom-left bottom-right bottom-right"',
              gridArea: "main",
            }}
          >
            <div className="admin-dashboard-layout">
              <Card
                className="top-card"
                style={{
                  width: "80vw",
                  height: "64.5vh",
                  display: "flex",
                  textAlign: "center",
                  margin: "auto",
                  flexDirection: "column",
                  marginTop: "2vh",
                }}
              >
                <h1 id="top-card-header">MQ3TM Cycle Overview</h1>

                <h2 id="top-card-subheader">
                  Mastery, Quantity, Quality - Tracking your 12 week journey
                </h2>
                <img
                  src="src\assets\Screenshot 2025-11-19 112150.png"
                  id="mq-img"
                  alt=""
                />
                <div className="mq-container">
                  <div className="mq-item-container">
                    <img
                      src="src\assets\new-moon (1).png"
                      className="mq-icons"
                      alt=""
                    />
                    <p className="mq-list-option">Completed Works</p>
                  </div>
                  <div className="mq-item-container">
                    <img
                      src="src\assets\red-flag.png"
                      className="mq-icons"
                      alt=""
                    />
                    <p className="mq-list-option">Checkpoints</p>
                  </div>
                  <div className="mq-item-container">
                    <img
                      src="src\assets\new-moon.png"
                      className="mq-icons"
                      alt=""
                    />
                    <p className="mq-list-option">Upcoming Works</p>
                  </div>
                </div>
              </Card>

              <div className="middle-container">
                <Card
                  className="middle-card-left"
                  style={{ height: "100vh", width: "26vw", gap: "2vh" }}
                >
                  <h1 className="card-header">Weekly Tactics Planning</h1>

                  <h1 className="card-subheader">
                    Define your strategy for the week.
                  </h1>

                  <Button
                    name="Add Tactic"
                    onClick={goToWeeklyTactics}
                    style={{ marginTop: "4.5vh", marginBottom: "4.5vh" }}
                  ></Button>
                </Card>

                <Card
                  className="middle-card-middle"
                  style={{ height: "100vh", width: "26vw", gap: "2vh" }}
                >
                  <h1 className="card-header">Daily Arena Engagement</h1>
                  <h1 className="card-subheader">
                    Log your daily actions and reflections.
                  </h1>

                  <Button
                    name="Log Engagement"
                    onClick={goToDailyEngagement}
                    style={{ marginTop: "4.5vh", marginBottom: "4.5vh" }}
                  ></Button>
                </Card>

                {/* rest of the existing AdminDashboard layout below... */}
              </div>
            </div>
          </MainSection>
        </div>
      </Body>

      <Footer></Footer>
    </>
  );
}
