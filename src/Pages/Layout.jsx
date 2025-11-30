import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

export function Layout({ showNavbar = true }) {
  return (
    <>
      {showNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
