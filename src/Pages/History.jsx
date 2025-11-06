import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from '../components/ProfileBanner.jsx';
import Sidebar from '../components/SideBar.jsx';
import MainSection from '../components/MainSection.jsx';
export function  History(){
    return(<>
        
      <Body>
          
          
          
          <div className="dashboard-layout">
          <ProfileBanner/>
          
          <Sidebar/>
          
          
          
          <MainSection>
          
          
          <Card className="top-card" style={{width:"80vw",height:"63vh", display:"flex", flexDirection:"column",justifyContent:"center", textAlign:"center"}} >
          
          <h1 id="top-card-header">MQ3TM Cycle Overview</h1>
          <h2 id="top-card-subheader">Your journey through the MQ3TM cycle</h2>
          <img src="src\assets\Screenshot 2025-11-03 144303.png" id="mq-img" alt="" />
          <ul id="mq-list">
          <li className="mq-list-option">Completed Works</li>
          <li className="mq-list-option">Checkpoints</li>
          <li className="mq-list-option">Upcoming Works</li>
          </ul>
          </Card>
          <div className="bottom-container">
<Card className="bottom-card-left" style={{height:"35vh"}}>
           <h1 className='bottom-card-header'>SQ Completion</h1>
          <h1 className="bottom-card-subheader">Phase 1</h1>
          <button className='completed-btn'>Completed</button>
          <h1 className='completed-date'>Completed on July 16 2024</h1>
          <p  className='phase-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt sint laudantium animi perspiciatis obcaecati qui recusandae accusantium assumenda quam!</p>
          </Card>  
          <Card className="bottom-card-right" style={{height:"35vh"}}>
          
           <h1 className='bottom-card-header' >SQ Completion</h1>
          <h1 className="bottom-card-subheader">Phase 1</h1>
          <button className='completed-btn'>Completed</button>
          <h1 className='completed-date'>Completed on July 16 2024</h1>
          <p className='phase-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt sint laudantium animi perspiciatis obcaecati qui recusandae accusantium assumenda quam!</p>
          </Card>
          
          </div>
          
          
          
          </MainSection>
          
          
          
          
          
          
          
          
          
          </div>
          
          </Body>
          
          
          
          
          <Footer></Footer>
    
    </>);
}