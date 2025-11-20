
import '../index.css';
import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";

import Button from "../components/Button.jsx";
import { useNavigate } from 'react-router-dom';

export function WelcomePage(){

  const navigate=useNavigate();

      const onClick=()=>{
navigate("/Login.jsx");
  }
    return(
        <>
        
      <Body>
     <div id="welcome-page-container">
<img src="src\assets\Screenshot 2025-10-30 150421.png" className="remanned-banner" alt="" />
         
       <h1 id="welcome-page-header">Welcome Back</h1>
        <ul id="header-list-1" className="header-list">
            <li className="header-list-items top-list-item">Conscious</li>
            <li className="header-list-items top-list-item">Subconscious</li>
          
        </ul>

       <img src="src\assets\Screenshot 2025-10-30 145401.png" id="remanned-arc" alt="" />
      
        <ul id="header-list-2" className="header-list">
       
            <li className="header-list-items" href="SignUp.jsx">Responsibility</li>
            <li className="header-list-items">Ethicality</li>
            <li className="header-list-items mastery-item">Mastery</li>
            <li className="header-list-items">Adaptability</li>
            <li className="header-list-items">Nobility</li>
        </ul>

        <Button name="Click to Continue" id="welcome-page-btn" onClick={onClick} style={{  marginTop:"4.5vh",marginBottom:"4.5vh"}}></Button>
      <img src="src\assets\-.png" id='venn-diagram-img' alt="" />
     </div>
    
        
            </Body>

            <Footer></Footer>
    
       
        </>
    );
}