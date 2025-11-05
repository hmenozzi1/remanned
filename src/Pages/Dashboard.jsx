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
               
          
          <Card id="top-card" style={{width:"80vw"}}>
          
          <h1 id="top-card-header">MQ3TM Cycle Overview</h1>
          <h2 id="top-card-subheader">Your journey through the MQ3TM cycle</h2>
          <img src="src\assets\Screenshot 2025-11-03 144303.png" id="mq-img" alt="" />
         <ul id="mq-list">
          <li className="mq-list-option">Completed Works</li>
          <li className="mq-list-option">Checkpoints</li>
          <li className="mq-list-option">Upcoming Works</li>
         </ul>
          </Card>
          
               <Card className="bottom-card bottom-card-left">

          </Card>  
          <Card className="bottom-card bottom-card-right">
          
          <h1>HQ</h1>
          <h1>AQ</h1>
          <h1>MQ</h1>
          </Card>
        
          
          
          </MainSection>
          
          
          
          
          
          
          
          
          
          </div>
          
          </Body>
          
          
          
          
          <Footer></Footer>
          
          
          </>);
     }