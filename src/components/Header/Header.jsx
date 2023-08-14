import { NavLink } from "react-router-dom";
import DarkMode from "../../shared/DarkMode";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ImageData } from "../../data/imgData";

const { logo } = ImageData;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="w-[95%] h-16 flex justify-between items-center fixed top-5 left-2/4 -translate-x-2/4 bg-[rgba(255,255,255,0.3)] dark:bg-secondaryBG  dark:shadow-[rgba(255,255,255,0.02)] border-2 border-borderClr dark:border-borderClrDark rounded-2xl drop-shadow-xl backdrop-blur-sm z-50">
        <div className="md:ml-5">
          <img src={logo} alt="logo" className="w-48 h-48" />
        </div>
        <div
          className={`w-full md:w-auto flex items-center flex-col md:flex-row absolute md:static top-16 transition-all ease-in-out duration-500 gap-5 md:gap-5 lg:gap-16 py-3  ${
            showMenu
              ? "right-0 bg-[rgba(0,0,0,0.8)] text-lime-100"
              : "right-[-490px]"
          }`}
        >
          <NavLink
            to="/"
            className="w-full md:w-auto hover:bg-[rgba(255,255,255,0.1)] dark:hover:bg-[rgba(0,0,0,0.5)] text-center p-2 "
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="w-full md:w-auto hover:bg-[rgba(255,255,255,0.1)] dark:hover:bg-[rgba(0,0,0,0.5)] text-center p-2 "
          >
            About
          </NavLink>
          <NavLink
            to="/tour"
            className="w-full md:w-auto hover:bg-[rgba(255,255,255,0.1)] dark:hover:bg-[rgba(0,0,0,0.5)] text-center p-2 "
          >
            Tours
          </NavLink>
          <NavLink
            to="/contact"
            className="w-full md:w-auto hover:bg-[rgba(255,255,255,0.1)] dark:hover:bg-[rgba(0,0,0,0.5)] text-center p-2 "
          >
            Contacts
          </NavLink>
        </div>
        <div className="flex items-center mr-4 gap-2 lg:gap-8">
          <NavLink to="/login-register">
            <button className="md:px-7 md:py-2 md:text-base">LogIn</button>
          </NavLink>
          <Menu size={32} className="md:hidden" onClick={handleMenu} />
          <DarkMode />
        </div>
      </nav>
    </>
  );
};

export default Header;
