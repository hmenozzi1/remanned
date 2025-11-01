 import Navbar from "../components/Navbar.jsx";
 import {Outlet} from "react-router-dom";
 
 
 export function Layout({showNavbar=true}){
    {showNavbar && <Navbar/>}
    {/*All pages will be children to this layout */}
    return(
    <>
        <Navbar/>{/*shows navbar to user*/}
        <main>
        <Outlet/>{/*a placeolder to renders all child routes of parent's root element (nav bar).*/}

        </main>
       
        </>
        );
    }