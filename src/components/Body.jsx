
import Button from './Button.jsx';
import '../index.css';

function Body({children, style}){
    return(
        <>
        <div className="body" style={style}>
        {children}  {/* This is essential */}
        
        
        </div>
        
        
        </>
    );
}

export default Body;