import '../index.css';
import Button from "./Button.jsx";

export default function Form(){
    return(<>   
        
        <form className="contact-form">
      
        <div className="name-container">
        <label className="form-input-labels">First Name</label>
        <input type="text" className="form-input" placeholder="John Doe" />
        </div>
        <div className="name-container">
        <label className="form-input-labels">Last Name</label>
        <input type="text" className="form-input" placeholder="John Doe" />
        </div>
        
        
     
        <div className="username-container">
        <label className="form-input-labels">Username</label>
        <input type="text" className="form-input" placeholder="jdoe1" />
        </div>
        <div className="email-container">
        <label className="form-input-labels">Email</label>
        <input type="text" className="form-input" placeholder="something@example.com" />
        </div>
        
        
        
        
        
       
        
        
        </form>
   
     <Button name="Sign Up"></Button>
        
        </>);
    }