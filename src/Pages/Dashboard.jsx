import '../index.css';
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";
import Card from "../components/Card.jsx";
import ProfileBanner from '../components/ProfileBanner.jsx';
import Sidebar from '../components/SideBar.jsx';
import MainSection from "../components/MainSection.jsx";
export function Dashboard(){
    return(<>
        
    <Body>

<ProfileBanner/>
<Sidebar/>




   <MainSection>
   <Card>

         <h1>HQ</h1>
    <h1>AQ</h1>
    <h1>MQ</h1>
    </Card>
      
  <Card>

         <h1>HQ</h1>
    <h1>AQ</h1>
    <h1>MQ</h1>
    </Card>  <Card>

         <h1>HQ</h1>
    <h1>AQ</h1>
    <h1>MQ</h1>
    </Card>

   </MainSection>
 










    </Body>
  

     
 
       <Footer></Footer>
    
    
    </>);
}