import { Outlet } from "react-router-dom";
import Navigation from "@/routes/navigation/Navigation";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <footer className="footer-bg-img pt-28 h-60 md:h-72 lg:h-96 mx-auto w-full max-w-6xl"></footer>
    </>
  );
};

export default Layout;
