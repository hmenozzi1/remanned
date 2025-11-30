import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from "../components/ProfileBanner.jsx";
import Sidebar from "../components/SideBar.jsx";
import MainSection from "../components/MainSection.jsx";
export function AdminGoals(){
    return(<>
        <Body>
        
        
        
        <div className="dashboard-layout">
        <ProfileBanner/>
        
        <Sidebar/>
        
        
        
        
        <MainSection>
        
        
        <Card className="top-card" style={{width:"80vw",height:"63vh", display:"flex", justifyContent:"center", textAlign:"center", margin:"auto", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
        
        <h1 id="top-card-header">Overall Goals Progress</h1>
        
        <h2 className="top-card-subheader">Track your journey through your goal cycle.</h2>
        <img src="src\assets\Screenshot 2025-11-29 143040.png" className="admin-mq-img" alt="" />
        <div className="mq-container">
        <div className="admin-mq-item-container completed-works-item"><img src="src\assets\new-moon.png" className='mq-icons' alt="" />
        <p className="admin-mq-list-option  completed-works-item"> Completed Works</p> 
        </div>
        <div className="admin-mq-item-container checkpoints-item"><img src="src\assets\new-moon.png"className='mq-icons' alt="" />
        <p className="admin-mq-list-option checkpoints-item">Checkpoints</p>
        </div>
        <div className="admin-mq-item-container upcoming-works-item"><img src="src\assets\new-moon.png"className='mq-icons' alt="" />
        <p className="admin-mq-list-option upcoming-works-item">Upcoming Works</p>
        </div>
        
        
        </div>
        
        
        
        </Card>
        <div className="bottom-container">
        <Card className="bottom-card-left" style={{height:"60vh", marginLeft:"1vh",  marginBottom:"3vh",width:"40vw", gap:"2vh"}}>
       
        
        <div className="admin-completed-progress-bar-container">
        <h1 className='card-header'>SQ (Spiritual Component) Completion</h1>
        <p className="percentage-completion-text">Completed</p>
        </div>
        
        <p  className='admin-goals-text'>SQ represents a man's belief systems, clarity of identity, and connection to purpose.</p>
       
        <h1 className="admin-goals-header">Three Sacred Connections</h1>
       <ul class="goals-list">
        <li class="goal-item">Vertical – Man and SPIRIT</li>
        <li class="goal-item">Horizontal – Man and Brotherhood</li>
        <li class="goal-item">Internal – Man and Self</li>
           </ul>
        <h1 className="admin-goals-header">Byproduct</h1>
        <p className="admin-goals-text"> A man with strong SQ gains identity and purpose.</p>
        <h1 className="admin-goals-header">If SQ is Strong:</h1>
                <p className="admin-goals-text">Confusion, aimlessness, false identities, self-sabotage.</p>
        <h1 className="admin-goals-header">If SQ is Low:</h1>
                <p className="admin-goals-text"> Anchored belief, conviction, resilience in uncertainty.</p>
       
  
        
        </Card> 
        
        
        
        
        <Card className="bottom-card-right" style={{height:"60vh", width:"40vw" ,  marginBottom:"3vh", gap:"2vh"}}>
     
        
        
        
        <div className="admin-in-progress-bar-container">
        <h1 className='card-header'>AQ (Adversity Quotient) Progress</h1>
        <p className="percentage-completion-text">In Progress</p>
        </div>
        
        
        
        
        
        
        
        
        
        <p className='admin-goals-text'>AQ measures a man's ability to endure, adapt, and grow through challenge. Phase II, enancing the abiilty to thrive in changing environments is 70% complete. Keep going!</p>
        
       <h1 className="admin-goals-header">Five Traits of AQ</h1>
       <ul class="goals-list">
        <li class="goal-item">Responsibility – ownership of one's yard and domain.</li>
        <li class="goal-item">Ethicality – living with a personal code regardless of circumstance</li>
        <li class="goal-item">Mastery – discipline + endurance; the pain of growth when building a skill</li>
        <li class="goal-item">Adaptability – ability to bend without breaking</li>
        <li class="goal-item">Nobility – inner Excellence, always doing 3*more</li>
           </ul>
        <h1 className="admin-goals-header">Byproduct</h1>
        <p className="admin-goals-text"> A man with strong SQ gains identity and purpose.</p>
        <h1 className="admin-goals-header">If SQ is Strong:</h1>
                <p className="admin-goals-text">Confusion, aimlessness, false identities, self-sabotage.</p>
        <h1 className="admin-goals-header">If SQ is Low:</h1>
                <p className="admin-goals-text"> Anchored belief, conviction, resilience in uncertainty.</p>
          
        </Card>
        
        </div>
        
        
        
        
        </MainSection>
        
        
        
        
        
        
        
        </div>
        
        </Body>
        
        
        
        
        <Footer></Footer>
        </>
        
        
        
    );
}