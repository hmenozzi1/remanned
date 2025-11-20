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
            
            
            
            <MainSection style={{display:"grid",   gridTemplateAreas:'"top top " "bottom-left bottom-left bottom-right bottom-right"',gridArea:"main", gridTemplateRows:"66vh", flexGrow:"1"}}>
            
            
            <Card className="top-card" style={{width:"80vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
            
            <h1 id="top-card-header">MQ3TM Cycle Overview</h1>
            
            <h2 id="top-card-subheader">Your journey through the MQ3TM cycle</h2>
            <img src="src\assets\Screenshot 2025-11-19 112150.png" id="mq-img" alt="" />
            <div className="mq-container">
            <div className="mq-item-container"><img src="src\assets\new-moon (1).png" className='mq-icons' alt="" />
            <p className="mq-list-option">Completed Works</p> 
            </div>
            <div className="mq-item-container"><img src="src\assets\red-flag.png"className='mq-icons' alt="" />
            <p className="mq-list-option">Checkpoints</p>
            </div>
            <div className="mq-item-container"><img src="src\assets\new-moon.png"className='mq-icons' alt="" />
            <p className="mq-list-option">Upcoming Works</p>
            </div>
            
            
            </div>
            
            
            
            </Card>
            <div className="bottom-container">
            <Card className="bottom-card-left" style={{height:"35vh", marginLeft:"1vh",  width:"40vw", gap:"2vh"}}>
            <h1 className='card-header'>SQ Completion</h1>
        
            <div className="progess-bar-container completed-progress-bar-container">
            <h1 className="card-subheader">Phase 1</h1>
            <button className='completed-btn'>Completed</button>
            </div>
            <h1 className='completed-date'>Completed on July 16 2024</h1>
         
            <p  className='phase-description'>Phase I, focusing on self-awareness and inner peace, has been successfully completed. Great progress!</p>
            </Card> 




            <Card className="bottom-card-right" style={{height:"35vh", width:"40vw" , gap:"2vh"}}>
            <h1 className='card-header'>AQ Progress</h1>
            
            
             
            <div className="in-progress-bar-container">
            <div className="in-progress-bar-container-2">
            <h1 className="card-subheader">Phase 2</h1>
            <p className="percentage-completion-text">70% Complete</p>
            </div>
            
            
         
            <progress className="progress-bar" value="70" max="100">70%</progress>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            <p className='phase-description'>Phase II, enhancing your ability to thrive in changing environments, is
            currently 70% complete. Keep going!</p>
            </Card>
            
            </div>
            
            
            
            </MainSection>
            
            
            
            
            
            
            
            
            
            </div>
            
            </Body>
            
            
            
            
            <Footer className="footer"></Footer>
            
            
            </>);
      }