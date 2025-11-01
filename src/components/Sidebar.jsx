import '../index.css';
import Button from "./Button.jsx";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
export default function Sidebar({children}){
    return(<>   
    <div id="sidebar-container">
      <ul id="sidebar-list">
      <Link to="/Dashboard.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"><img src="src\assets\images - Copy.png" className="sidebar-icon" alt="" />Dashboard</li></Link>
      <Link to="/Goals.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"><img src="src\assets\images - Copy.png" className="sidebar-icon"/>Goals</li></Link>
      <Link to="/History.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"> <img src="src\assets\images - Copy.png" className="sidebar-icon"/>History</li></Link>
      <Link to="/Journal.jsx" className="sidebar-nav-link"><li className="sidebar-nav-item"> <img src="src\assets\images - Copy.png" className="sidebar-icon"/>Journal</li></Link>
 
     
      </ul>
    <Button   name="End Session" className="end-session-btn"  
    icon={<FaBars/>} 
     style={{ backgroundColor: "#de3b40", marginTop: "50vh" }} />
     
        </div>
        </>);
    }