import '../index.css';
import {Link} from 'react-router-dom';

function Navbar(){
  
  return (<>
    <div className="navbar">
    
    <Link to="/" className="nav-items">Home</Link>
  
   
    <Link to="/SignUp.jsx" className="nav-items">SignUp</Link>
    <Link to="/Login.jsx" className="nav-items">Login</Link>
      <Link to="/Dashboard.jsx" className="nav-items">Dashboard</Link>
      <Link to="/Goals.jsx" className="nav-items">Goals</Link>
      <Link to="/History.jsx" className="nav-items">History</Link>
    <Link to="/Journal.jsx" className="nav-items">Journal</Link>
    
    
    
    </div>
    
    </>
  );
  
}

export default Navbar;