import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from '../components/ProfileBanner.jsx';
import Sidebar from '../components/SideBar.jsx';
import MainSection from "../components/MainSection.jsx";
export function Dashboard(){
     return(<>
          
          <Body>
          
          
         
          <div className="dashboard-layout">
            <ProfileBanner/>
          
        <Sidebar/>
          
          
          
          <MainSection>
               
          
          <Card id="top-card">
          
          <h1>HQ</h1>
          <h1>AQ</h1>
          <h1>MQ</h1>
          </Card>
          <div id="bottom-card-container">
               <Card className="bottom-card">
          
          <h1>HQ</h1>
          <h1>AQ</h1>
          <h1>MQ</h1>
          </Card>  
          <Card className="bottom-card">
          
          <h1>HQ</h1>
          <h1>AQ</h1>
          <h1>MQ</h1>
          </Card>
          </div>
          
          
          </MainSection>
          
          
          
          
          
          
          
          
          
          </div>
          
          </Body>
          
          
          
          
          <Footer></Footer>
          
          
          </>);
     }