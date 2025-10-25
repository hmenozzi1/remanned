

import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Button from "../components/Button.jsx";

export function WelcomePage(){
    return(
        <>
      <Body>
     
      </Body>
     <p>    <img src="src\assets\images (5).jpg" className="body-img" alt="" />
        <h1 className="title">Welcome to Remanned.</h1>
       
        <h2 className="slogan">"Building Men of Character, Strength and Legacy"</h2>
         <h3 className="sub-title">Click the next button to continue. </h3>
         </p>
          <Button name="Next" />
       <Footer></Footer>
        </>
    );
}