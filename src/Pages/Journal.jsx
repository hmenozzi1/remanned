import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from "../components/ProfileBanner.jsx";
import Sidebar from "../components/SideBar.jsx";
import MainSection from "../components/MainSection.jsx";
export function Journal(){
    return(<>
         <Body>
          
          
          
          <div className="dashboard-layout">
          <ProfileBanner/>
          
          <Sidebar/>
          
          
          
         
              <MainSection>
                        
                        
                        <Card className="journal-card" style={{width:"75vw",height:"150vh", borderRadius:"1vw", display:"flex", justifyContent:"center", textAlign:"center",alignItems:"center", margin:"auto", flexDirection:"column", marginTop:"3vh", marginBottom:"1vh", marginLeft:"0"}} >
                        
                        <h1 className="journal-card-header">Daily Reflection Journal</h1>
                     
                        <h2 className="journal-card-subheader">Capture your thoughts and insights with guided prompts and AQ-related reflections.</h2>
                       
                

                   <div className="reflection-features-toggle-container">
                     < label class="switch">
                     <input type="checkbox" checked/>
  <span class="slider round"></span>
</label>
   <p className="reflection-features-text">Enable enhanced reflections features</p>
                   </div>

                   



   <div className="journal-section-container">
      <h1 className='journal-section-header'>Lessons learned today</h1>
   <div className="journal-entry-container">
<input type="text" className="journal-entry-input" placeholder="Reflect on key takeaways and new insights from your day..."/>
   </div>
      <p className="character-count-text">0/500 characters</p>

   </div>
   <div className="journal-section-container">
      <h1 className='journal-section-header'>Areas I can improve on.</h1>
   <div className="journal-entry-container">
<input type="text" className="journal-entry-input" placeholder="Reflect on key takeaways and new insights from your day..."/>
   </div>
      <p className="character-count-text">0/500 characters</p>

   </div>
   <div className="journal-section-container">
      <h1 className='journal-section-header'>What will I do differently from today going forward?</h1>
   <div className="journal-entry-container">
<input type="text" className="journal-entry-input" placeholder="Reflect on key takeaways and new insights from your day..."/>
   </div>
      <p className="character-count-text">0/500 characters</p>

   </div>
   <div className="journal-section-container">
      <h1 className='journal-section-header'>AQ Reflection: Resilience and Adaptation</h1>
   <div className="journal-entry-container">
<input type="text" className="journal-entry-input" placeholder="Reflect on key takeaways and new insights from your day..."/>
   </div>
      <p className="character-count-text">0/750 characters</p>

   </div>
   <div className="journal-section-container">
      <h1 className='journal-section-header'>AQ Reflection: Leveraging Strengths</h1>
   <div className="journal-entry-container">
<input type="text" className="journal-entry-input" placeholder="Reflect on key takeaways and new insights from your day..."/>
   </div>
      <p className="character-count-text">0/750 characters</p>

   </div>

   <div className="journal-footer-container">
<p className="journal-footer-text">Your reflections are private and saved automatically. </p>
                       <button className="journal-btn">Submit</button>
   </div>
   
                       
                       
                       
                      
                   
              
                     
                        
                                  </Card>
                      
                        
                        
                        
                        </MainSection>
                        
          
          
          
          
          
          
          </div>
          
          </Body>
          
          
          
          
          <Footer></Footer>
        </>
    
    
    
   );
}