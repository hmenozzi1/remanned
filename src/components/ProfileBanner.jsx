import '../index.css';
import Button from "./Button.jsx";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function ProfileBanner({children}){
    
    return(<>   
    
    <div id="profile-banner">
        <div id="banner-section-1">
             <img  id="banner-logo" src="src\assets\Screenshot 2025-11-02 055107.png" alt="" />
    <h1 id= "profile-banner-header">MQ&trade; Hub</h1> 
        </div>
        <div id="banner-section-2">
              <img src="src\assets\Icon-round-Question_mark.svg.png" alt="" id="banner-icon" />
    <img  id="profile-img" src="src\assets\smiling-young-man-illustration_1308-174669.jpg" alt="" />
        </div>
   
 
    </div>
  
     
        
        </>);
    }