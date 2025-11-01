
import Button from './Button.jsx';
import '../index.css';

function Body({children}){
    return(
        <>
        <div className="body">
        {children}  {/* This is essential */}
        
        
        </div>
        
        
        </>
    );
}

export default Body;