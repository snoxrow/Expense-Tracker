import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { FaRegUser, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-1/6 border ">
      <ul className="text-4xl h-full flex flex-col gap-5 justify-start items-center">
        <li>
          <Link to="/">
            {location.pathname === "/" ? (
              <MdSpaceDashboard />
            ) : (
              <MdOutlineSpaceDashboard />
            )}
          </Link>
        </li>
        <li>
          <Link to="/profile">
            {location.pathname === "/profile" ? <FaUser /> : <FaRegUser />}
          </Link>
        </li>
        <li>
          <Link to="/settings">
            {location.pathname === "/settings" ? (
              <IoSettingsSharp />
            ) : (
              <IoSettingsOutline />
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
