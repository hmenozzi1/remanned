
import Header from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';

import {HashRouter as Router, Routes, Route} from 'react-router-dom';//libraries from react can be used as components
//Hashrouter-creates routing environment wraps around App.jsx, Routes-specicy all potential routes Route -each individual route
import {Dashboard} from './Pages/Dashboard.jsx';
import {Journal} from './Pages/Journal.jsx';
import {Login} from './Pages/Login.jsx';
import {WelcomePage} from './Pages/WelcomePage.jsx';
import {SignUp} from './Pages/SignUp.jsx';
import {Layout} from './Pages/Layout.jsx';
import { Goals } from './Pages/Goals.jsx';
import { Progress } from './Pages/Progress.jsx';
import {SplashScreen} from './Pages/SplashScreen.jsx';


function App (){
  
  return (
    <Router>
    <Routes>
    <Route element={<Layout/>}>//prop element
    
    <Route path="/SplashScreen.jsx" element={<SplashScreen/>}/>//default element
    <Route path="/" element={<WelcomePage/>}/>//default element
    <Route path="/SignUp.jsx" element={<SignUp/>}/>
    <Route path="/Login.jsx" element={<Login/>}/>
    <Route path="/Dashboard.jsx" element={<Dashboard/>}/>
    
    <Route path="/Journal.jsx" element={<Journal/>}/>
    <Route path="/Goals.jsx" element={<Goals/>}/>
    <Route path="/Progress.jsx" element={<Progress/>}/>
    <Route path="/Notification.jsx" element={<Notification/>}/>
    
    </Route>
    </Routes>
    </Router>
    
  );
}

export default App;