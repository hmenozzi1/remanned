import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from '../components/ProfileBanner.jsx';
import Sidebar from '../components/SideBar.jsx';
import DashboardLayout from '../components/DashboardLayout.jsx';
export function Goals(){
    return(<>
        
   <DashboardLayout>
      <Card id="top-card">
        <h1>Set Your Goals</h1>
      </Card>

      <div id="bottom-card-container">
        <Card className="bottom-card">
          <h2>Short Term</h2>
        </Card>
        <Card className="bottom-card">
          <h2>Long Term</h2>
        </Card>
      </div>
    </DashboardLayout>
    
    
    </>);
}