import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from "../components/ProfileBanner.jsx";
import Sidebar from "../components/SideBar.jsx";
import MainSection from "../components/MainSection.jsx";
export function Goals(){
    return(<>
        
         <Body>
          
          
          
          <div className="dashboard-layout">
          <ProfileBanner/>
          
          <Sidebar/>
          
          
          
     <MainSection style={{display:"grid",  height:"400vh", gridTemplateAreas:'"top top " "bottom-left bottom-left bottom-right bottom-right"',gridArea:"main", gridTemplateRows:"60vh", flexGrow:"1"}}>
               <div className="contact-support-container">
                  <h1  className="contact-support-text">Contact support for goal reconciliation.</h1>
                  <button className="contact-support-btn">Contact Support</button>
               </div>
               
               <Card className="top-card" style={{width:"80vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
               
               <h1 id="top-card-header">MQ3TM Cycle Overview</h1>
               
               <h2 className="top-card-subheader">Your journey through the MQ3TM cycle</h2>
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
               <Card className="bottom-card-left" style={{height:"60vh", marginLeft:"1vh",  marginBottom:"3vh",width:"40vw", gap:"2vh"}}>
               <h1 className='card-header'>SQ Completion</h1>
           
               <div className="progess-bar-container completed-progress-bar-container goals-sq-container">
               <h1 className="card-subheader">Phase 1</h1>
               <p className="percentage-completion-text">Completed</p>
               </div>
          
               <p  className='phase-description'>Phase I, focusing on self-awareness and inner peace, has been successfully completed. Great progress!</p>
               <ul class="goals-list">
  <li class="goal-item">SQ represents a man's belief system, clarity of identity, and connection to purpose.</li>
  <li class="goal-item">Three Social Connections:</li>
  <li class="goal-item">Vertical – Man and SPIRIT</li>
  <li class="goal-item">Horizontal – Man and Brotherhood</li>
  <li class="goal-item">Internal – Man and Self</li>
  <li class="goal-item">Byproduct: A man with strong SQ gains identity and purpose.</li>
  <li class="goal-item">If SQ is Low: Confusion, aimlessness, false identities, self-sabotage.</li>
  <li class="goal-item">If SQ is Strong: Anchored belief, conviction, resilience in uncertainty.</li>
</ul>
             
               </Card> 
   
   
   
   
               <Card className="bottom-card-right" style={{height:"60vh", width:"40vw" ,  marginBottom:"3vh", gap:"2vh"}}>
               <h1 className='card-header'>AQ Progress</h1>
               
               
                
            
               
                 <div className="in-progress-bar-container-2">
               <h1 className="card-subheader">Progress</h1>
               <p className="percentage-completion-text">In Progress</p>
               </div>
               
               
               
               
               
               
               
               
               
               <p className='phase-description'>Phase II, enhancing your ability to thrive in changing environments, is
               currently 70% complete. Keep going!</p>
       
<ul class="goals-list">
  <li class="goal-item">AQ measures a man's ability to endure, adapt, and grow through challenge.</li>
  <li class="goal-item">Five Traits of AQ:</li>
  <li class="goal-item">Responsibility – ownership of one’s yard and domain.</li>
  <li class="goal-item">Elasticity – living by a personal code regardless of circumstance.</li>
  <li class="goal-item">Mastery – discipline + endurance; the pain of growth when building skill.</li>
  <li class="goal-item">Adaptability – ability to bend without breaking.</li>
  <li class="goal-item">Nobility – inner excellence, always doing 3% more.</li>
  <li class="goal-item">Byproduct: Capacity and resilience.</li>
  <li class="goal-item">If AQ is Low: Blame-shifting, quitting early, fragile under pressure.</li>
  <li class="goal-item">If AQ is Strong: Unshakable resilience, growth through adversity, leadership under fire.</li>
</ul>
   <div className="in-progress-bar-container">
               <div className="in-progress-bar-container-2">
               <h1 className="card-subheader">Progress</h1>
               <p className="percentage-completion-text">70% Complete</p>
               </div>
               
               
            
               <progress className="progress-bar" value="70" max="100">70%</progress>
               </div>
               
               </Card>
               
               </div>
               
               
               
               </MainSection>
               
               
          
          
          
          
          
          
          
          </div>
          
          </Body>
          
          
          
          
          <Footer></Footer>
    
    
    </>);
}