// src/Pages/Layout.jsx
import { Outlet } from "react-router-dom";

/**
 * Simple layout wrapper – no global Navbar.
 * Each page is responsible for its own header/navigation.
 */
export function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
