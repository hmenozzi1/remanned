import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import Form from "../components/Form.jsx";
import Button from "../components/Button.jsx";
export function SignUp(){

      const onClick=()=>{
    alert('hello');
  }
    return(
        
        
        
        <>
        
        <Body>   
       
        <Card>
        
        <Form>
        <form className="contact-form">
         <h1>Enter your information below.</h1>
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
        
        
        
        
        
        
        
         <Button name="Sign Up"  onClick={onClick}></Button>
        </form>
        
       
        </Form>
        </Card>
        </Body>
        
        
        <Footer></Footer>
        </>
        
        
    );
}