import '../index.css';
import Button from "./Button.jsx";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
export default function Sidebar({children, style}){
    return(<>   
    <div id="sidebar-container" style={style}>
      <ul id="sidebar-list">
      <Link to="/Dashboard.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"><img src="src\assets\dashboard-icon-style-free-vector.jpg" className="sidebar-icon" alt="" />Dashboard</li></Link>

      <Link to="/Journal.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"> <img src="src\assets\images (1).png" className="sidebar-icon"/>Journal</li></Link>
       <Link to="/Goals.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"><img src="src\assets\white-strategy-icon-33.png" className="sidebar-icon"/>Goals</li></Link>
      <Link to="/History.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"> <img src="src\assets\images.png" className="sidebar-icon"/>History</li></Link>
      <Link to="/Settings.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"> <img src="src\assets\images (1).png" className="sidebar-icon"/>Settings</li></Link>
     
      </ul>
    <Button   name="End Session" className="end-session-btn"  

    icon={ <img src="src\assets\white-strategy-icon-33.png" className="sidebar-icon" alt="" />} 
     style={{ backgroundColor: "#de3b40", marginTop: "58vh", width:"15.5vw", float:"bottom", marginLeft:"1.5vh", alignItems:"center"} } />
    
     
        </div>
        </>);
    }