
import Button from './Button.jsx';
import '../index.css';

function Body(){
    return(
        <>
        <div className="body">
        <img src="src\assets\images (5).jpg" className="body-img" alt="" />
        <h1 className="title">Welcome to Remanned.</h1>
       
        <h2 className="slogan">"Building Men of Character, Strength and Legacy"</h2>
         <h3 className="sub-title">Click the next button to continue. </h3>
          <Button name="Next" />
       

        </div>
        
        
        </>
    );
}

export default Body;