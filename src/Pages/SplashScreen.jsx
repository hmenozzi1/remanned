
import "../index.css";
import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";

import Button from "../components/Button.jsx";
import { useNavigate } from 'react-router-dom';

export function SplashScreen(){

  const navigate=useNavigate();

      const onClick=()=>{
navigate("/");
  }
    return(
        <>
        
      <Body>
     <div id="splash-screen-page-container">
<img src="src\assets\Screenshot 2025-11-03 142758.png" className="remanned-logo" alt="" />
         
       
        

        <Button name="Click to Continue" id="welcome-page-btn" onClick={onClick}></Button>
   
     </div>
    
        
            </Body>

            <Footer></Footer>
    
       
        </>
    );
}