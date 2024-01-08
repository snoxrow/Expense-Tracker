import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
