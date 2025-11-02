import '../index.css';
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import Sidebar from "./SideBar.jsx";
import ProfileBanner from "./ProfileBanner.jsx";
import MainSection from "./MainSection.jsx";


export default function DashboardLayout({ children }) {
  return (
    <>
      <Body>
        <div className="dashboard-layout">
          <ProfileBanner />
          <Sidebar />
          <MainSection>
            {children}
          </MainSection>
        </div>
      </Body>
      <Footer />
    </>
  );
}