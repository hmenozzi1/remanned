import "../index.css";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Form from "../components/Form.jsx";

export function Login(){

  const onClick=()=>{
    alert('hello');
  }
  return(
    
    
    <>
    
    <Body style={{height:"130vh" }}>
    <div id="login-container">
    <img src="src\assets\Screenshot 2025-10-30 150421.png" class="remanned-banner" alt="" />
    <div className="card-container">
    <Card>
    
    <Form>

<form className="contact-form">

  <h1 className="contact-form-header">Welcome Back.</h1>
   <div className="user-admin-toggle">
    

    <a href="" className="user-admin-text">User Login</a>





<label class="switch">
  <input type="checkbox" checked/>
  <span class="slider round"></span>
</label>



    <a href="" className="user-admin-text">Admin Login</a>
   

    
 

   
    
    
    
    
    </div>
    <div className="input-container">
    
  
    <label className="form-input-labels">Email or Username</label>
    <input type="text" className="form-input" placeholder="user@spiritualquest.com" />

    
 
    <label className="form-input-labels">Password</label>
    <input type="text" className="form-input" placeholder="securePassword123" />
   
    
    
    
    
    </div>
      <div className="input-container-2">
    
    <div class="remember-me-container">
 <input type="checkbox" className="form-input-2"/>
    <label id="remember-me-label">Remember Me</label>
    </div>
  
   

    
 
   <a href=""className='tech-support-btn'>Forgot Password?</a>
   
    
    
    
    
    
    </div>
    <Button name="Login" onClick={onClick} icon={<img className="btn-icon logout-icon" src="src\assets\door-leave-icon.png"/>}></Button>
    <a href=""className='tech-support-btn' id="tech-support-link">Click for Technical Support</a>
    
    </form>
    </Form>
    
    
    
    </Card>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    </Body>
    
    
    
    <Footer></Footer>
    </>
    
    
    
    
  );
}