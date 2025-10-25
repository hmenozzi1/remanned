import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Button from "../components/Button.jsx";

export function Login(){
    return(
    
    
     <>
         
    <Body></Body>
  <h1>Enter your information below.</h1>
       
<form className="contact-form">
  <div className="input-container">
  
      <div className="name-container">
        <label className="form-input-labels">Username</label>
        <input type="text" className="form-input" placeholder="John Doe" />
      </div>

      <div className="email-container">
        <label className="form-input-labels">Password</label>
        <input type="text" className="form-input" placeholder="something@example.com" />
      </div>

  

  
  </div>
    <Button name="Login"></Button>
        
</form>
 
     
   
       <Footer></Footer>
        </>
    
    
    
    
    );
}