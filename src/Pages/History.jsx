import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from '../components/ProfileBanner.jsx';
import Sidebar from '../components/SideBar.jsx';
import DashboardLayout from "../components/DashboardLayout.jsx"
export function  History(){
    return(<>
        
   <DashboardLayout>
      {/* Top card */}
      <Card id="top-card">
        <h1>History Overview</h1>
      </Card>

      {/* Bottom cards */}
      <div id="bottom-card-container">
        <Card className="bottom-card">
          <h2>Recent Activities</h2>
        </Card>
        <Card className="bottom-card">
          <h2>Statistics</h2>
        </Card>
      </div>
    </DashboardLayout>
    
    </>);
}