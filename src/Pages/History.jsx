import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from '../components/ProfileBanner.jsx';
import Sidebar from '../components/SideBar.jsx';
import MainSection from '../components/MainSection.jsx';
import Button from '../components/Button.jsx';
export function  History(){
    return(<>
        
      <Body>
          
          
          
          <div className="dashboard-layout">
          <ProfileBanner/>
          
          <Sidebar/>
          
          
          
           <MainSection>
                     <div className="history-layout">

                        <div className="history-top-container">
                            <Card className="top-card" style={{width:"40vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                        
                                        <h1 id="top-card-header">Cycle Q3 2023 Impact</h1>
                                             <button className="domain-btn">Underperforming</button>
                                      
                                        
                                        
                                        
                                        </Card>
                                        <Card className="top-card" style={{width:"40vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                                    
                                                    <h1 id="top-card-header">Progress Comparison</h1>
                                                    
                                                    <h2 id="top-card-subheader">Expected vs Actual Results over 12 weeks with checkpoints</h2>
                                                    
                                                    
                                                   
                                                    
                                                    
                                                    
                                                    </Card>
                        </div>









   <div className="history-bottom-container">
                            <Card className="top-card" style={{width:"40vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                        
                                        <h1 id="history-bottom-header">Domain Performance</h1>
                                        
                                        <h2 id="history-bottom-subheader">Detailed breakdown by domain goals</h2>
                                        <div className="domain-goals-container">
                                               <Card style={{backgroundColor:"black", height:"20vh", width:"5vw", border:"1vw solid white"}}>
                                                <img src="" className="domain-icon" alt="" />
                                                <h1 className="domain-category">Life</h1>
                                                <p className="domain-score">Score:790</p>
                                              
                                                <p className="domain-percentage">70%</p>
                                                <button className="domain-btn">Underperforming</button>
                                               </Card>
                                        <Card style={{backgroundColor:"black", height:"5vh", width:"5vw", border:"1vw solid white"}}>
                                                    <img src="" className="domain-icon" alt="" />
                                                <h1 className="domain-category"> Leadership</h1>
                                                <p className="domain-score">Score:790</p>
                                              
                                                <p className="domain-percentage">70%</p>
                                                <button className="domain-btn">Underperforming</button>
                                        </Card>
                                        <Card style={{backgroundColor:"black", height:"5vh", width:"5vw", border:"1vw solid white"}}>
                                                    <img src="" className="domain-icon" alt="" />
                                                <h1 className="domain-category">Legacy</h1>
                                                <p className="domain-score">Score:790</p>
                                              
                                                <p className="domain-percentage">70%</p>
                                                <button className="domain-btn">Underperforming</button>
                                        </Card>
                                      
                                        </div>
                                        
                                       
                                      
                                        
                                        
                                        
                                        </Card>
                                        <Card className="top-card" style={{width:"40vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                                    
                                                    
                                        <h1 id="history-bottom-header">Lessons Learned</h1>
                                                    <h2 id="top-card-subheader">Your journey through the MQ3TM cycle</h2>
                                                    <img src="src\assets\Screenshot 2025-11-19 112150.png" id="mq-img" alt="" />
                                               
                                                    
                                                    <Button name="Document Learnings"></Button>
                                                    </Card>
                                                    <Card className="top-card" style={{width:"40vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                                    
                                               
                                        <h1 id="history-bottom-header">Strength to Leverage</h1>
                                                    
                                                 
                                        <h2 id="history-bottom-subheader">Reflect on key challenges and insights from the cycle. What went well? What could be impacted on the next cycle?</h2>
                                                      <Button name="Plan Leveraged Actions"></Button>
                                                  
                                                    <img src="src\assets\Screenshot 2025-11-19 112150.png" id="mq-img" alt="" />
                                                   
                                                    
                                                    
                                                    </Card>
                                                    <Card className="top-card" style={{width:"40vw",height:"63vh", display:"flex", textAlign:"center", margin:"auto", gridArea:"top", flexDirection:"column", marginTop:"2vh", marginBottom:"1vh"}} >
                                                    
                                                  
                                        <h1 id="history-bottom-header">Prior Completed Cycles</h1>
                                                    
                                                 <h2 id="history-bottom-subheader">Identify the strategies, habits or resources that contributed to your success. How can you amplify these in the future. </h2>
                                                    <img src="src\assets\Screenshot 2025-11-19 112150.png" id="mq-img" alt="" />
                                               <table className="cycle-history-table">
                                                <tr className='cycle-table-row'>
                                                    <th className="cycle-row-header">Cycle Name</th>
                                                    <th className="cycle-row-header">Cycle Name</th>
                                                    <th className="cycle-row-header">Cycle Name</th>
                                                </tr>
                                                  <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item">Cycle 2: Q2 2023 Growth </td>
                                                 <td className="cycle-row-item">2023-06-23</td>
                                                 <td className="cycle-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item">Cycle 2: Q2 2023 Growth </td>
                                                 <td className="cycle-row-item">2023-06-23</td>
                                                 <td className="cycle-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item">Cycle 2: Q2 2023 Growth </td>
                                                 <td className="cycle-row-item">2023-06-23</td>
                                                 <td className="cycle-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item">Cycle 2: Q2 2023 Growth </td>
                                                 <td className="cycle-row-item">2023-06-23</td>
                                                 <td className="cycle-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
                                                  </tr>
                                                   <tr className='cycle-table-row'>

                                                 <td className="cycle-row-item">Cycle 2: Q2 2023 Growth </td>
                                                 <td className="cycle-row-item">2023-06-23</td>
                                                 <td className="cycle-row-item">&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                         
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