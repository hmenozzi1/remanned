import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from "../components/ProfileBanner.jsx";
import Sidebar from "../components/SideBar.jsx";
import MainSection from "../components/MainSection.jsx";
import Button from "../components/Button.jsx";
export function  History(){
    return(<>
        
      <Body>
          
          
          
          <div className="dashboard-layout">
          <ProfileBanner/>
          
          <Sidebar/>
          
          
          
           <MainSection>
                     <div className="history-layout">
<div className="history-banner">
   <div className="history-banner-header-container">
                                           <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                           <h1 className="history-banner-header">Cycle 3: Q3 2023 Impact</h1>
                                            <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                        </div>

    <button className="history-banner-btn">Unlock New Cycle</button>
</div>



                        <div className="history-top-container">
                            <Card className="top-card" style={{width:"39vw",height:"55vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh",alignItems:"center"}} >
                                        
                                        <h1 className="history-top-header">Cycle Q3 2023 Impact</h1>
                                       
                                             <button className="domain-btn history-top-domain-btn">Underperforming</button>
                                              <p className="completion-rate">Completion Rate: 72%</p>
                                             <h1 className="key-achievements-header">Key Achievements</h1>
                                       <ul class="goals-list">
  <li class="goal-item">Launched a significant personal project.</li>
  <li class="goal-item">Developed foundational skills in a new area.</li>
  <li class="goal-item">Faced unexpected challenges requiring significant adaptation.</li>

</ul>
                                        
                                        
                                        
                                        </Card>
                                        <Card className="top-card" style={{width:"39vw",height:"55vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", alignItems:"center", marginTop:"2vh", marginBottom:"1vh"}} >
                                                    
                                                    <h1 className="history-top-header">Progress Comparison</h1>
                                                    
                                                    <h2 className="history-top-subheader">Expected vs Actual Results over 12 weeks with checkpoints</h2>
                                                    
                                                    
                                                   <img src="src\assets\Screenshot 2025-11-28 142220.png" alt="" className="history-graph" />
                                                    
                                                    
                                                    
                                                    </Card>
                        </div>









   <div className="history-bottom-container">
                            <Card className="top-card" style={{width:"79vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                        <div className="history-bottom-header-container">
                                           <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                           <h1 className="history-bottom-header">Domain Performance</h1>
                                        </div>
                                       
                                        
                                        <h2 className="history-bottom-subheader">Detailed breakdown by domain goals.</h2>
                                        <div className="domain-goals-container">
                                               <Card style={{borderRadius:".1vw", backgroundColor:"black", height:"28vh", width:"32vw", border:".2vw solid white", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                                                <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                                <h1 className="domain-category">Life</h1>
                                                <p className="domain-score">Score:790</p>
                                              
                                                <p className="domain-percentage">75%</p>
                                                <button className="domain-btn">Underperforming</button>
                                               </Card>
                                        <Card style={{borderRadius:".1vw",backgroundColor:"black", height:"28vh", width:"32vw", border:".2vw solid white", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                                                    <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                                <h1 className="domain-category"> Leadership</h1>
                                                <p className="domain-score">Score:710</p>
                                              
                                                <p className="domain-percentage">70%</p>
                                                <button className="domain-btn">Underperforming</button>
                                        </Card>
                                        <Card style={{borderRadius:".1vw",backgroundColor:"black", height:"28vh", width:"32vw", border:".2vw solid white", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                                                    <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                                <h1 className="domain-category">Legacy</h1>
                                                <p className="domain-score">Score:730</p>
                                              
                                                <p className="domain-percentage">80%</p>
                                                <button className="domain-btn">Underperforming</button>
                                        </Card>
                                      
                                        </div>
                                        
                                       
                                      
                                        
                                        
                                        
                                        </Card>
                                        <Card className="top-card" style={{width:"79vw",height:"30vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                                    
                                                    
                                        
                                                  
                                           <div className="history-bottom-header-container">
                                           <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                          <h1 className="history-bottom-header">Lessons Learned</h1>
                                        </div>    
                                                    <h2 className="history-bottom-subheader">Reflect on key challenges and insights from the cycle. What went well? What could be impacted on the next cycle?</h2>
                                                    <Button name="Document Learnings" style={{marginLeft:"9vh"}}></Button>
                                                    </Card>
                                                    <Card className="top-card" style={{width:"79vw",height:"30vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                                    
                                               
                                                     
                                                   <div className="history-bottom-header-container">
                                           <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                             <h1 className="history-bottom-header">Strength to Leverage</h1>
                                        </div>  
                                          <h2 className="history-bottom-subheader">Identify the strategies, habits or resources that contributed to your success. How can you amplify these in the future. </h2>
                                                      <Button name="Plan Leveraged Actions"  style={{marginLeft:"9vh"}}></Button>
                                                  
                                                    
                                                   
                                                    
                                                    
                                                    </Card>
                                                    <Card className="top-card" style={{width:"79vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                                     <div className="history-bottom-header-container">
                                           <img src="src\assets\Screenshot 2025-11-28 163242.png" className="domain-icon" alt="" />
                                              <h1 className="history-bottom-header">Prior Completed Cycles</h1>
                                        </div>  
                                                  
                                     
                                                    
                                               
                                                   
                                               <table className="cycle-history-table">
                                                <tr className='cycle-table-row'>
                                                    <th className="cycle-row-header">Cycle Name</th>
                                                    <th className="cycle-row-header">Completion Date</th>
                                                    <th className="cycle-row-header">Mastery Level</th>
                                                </tr>
                                                  <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item  cycle-name-row-item">Cycle 2: Q2 2023 Growth </td>
                                                 <td className="cycle-row-item  completion-date-row-item">2023-06-23</td>
                                                 <td className="cycle-row-item  completion-date-row-item  mastery-level-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item  cycle-name-row-item">Cycle 1: Q2 2023 Foundation </td>
                                                 <td className="cycle-row-item   completion-date-row-item">2023-03-11</td>
                                                 <td className="cycle-row-item mastery-level-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item  cycle-name-row-item">Cycle 4: Q2 2022 Planning </td>
                                                 <td className="cycle-row-item   completion-date-row-item">2023-12-31</td>
                                                 <td className="cycle-row-item  mastery-level-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item cycle-name-row-item">Cycle 3: Q2 2022 Innovation </td>
                                                 <td className="cycle-row-item    completion-date-row-item">2022-09-30</td>
                                                 <td className="cycle-row-item  mastery-level-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item  cycle-name-row-item">Cycle 2: Q2 2022 Refinement </td>
                                                 <td className="cycle-row-item   completion-date-row-item">2022-06-30</td>
                                                 <td className="cycle-row-item  mastery-level-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>

                                               </table>
                                                    
                                                    
                                                    
                                                    </Card>
                        </div>














                     </div>
                     
                    
                     
                     
                     
                     </MainSection>
                     
          
          
          
          
          
          </div>
          
          </Body>
          
          
          
          
          <Footer></Footer>
    
    </>);
}