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

  const navData = [
    { title: "Home", url: "" },
    { title: "About", url: "/about" },
    { title: "Tours", url: "/tour" },
    { title: "Contacts", url: "/contact" },
  ];

  return (
    <>
      <header className="w-11/12 h-16 flex justify-between items-center fixed top-5 left-1/2 -translate-x-1/2 bg-transparent rounded-2xl backdrop-blur-md z-50">
        <div className="md:ml-5">
          <img src={logo} alt="logo" className="w-48 h-48" />
        </div>
        <nav
          className={`w-full md:w-auto flex items-center flex-col md:flex-row absolute md:static top-16 transition-all ease-in-out duration-500 text-lg gap-5 md:gap-5 lg:gap-16 py-3  ${
            showMenu
              ? "right-0 bg-[rgba(0,0,0,0.8)] text-lime-100"
              : "right-[-490px]"
          }`}
        >
          {navData.map((item, index) => {
            return (
              <NavLink
                to={item.url}
                key={index}
                className={`w-full md:w-auto hover:bg-[rgba(255,255,255,0.1)] dark:hover:bg-[rgba(0,0,0,0.5)] text-center p-2`}
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center mr-4 gap-2 lg:gap-8">
          <NavLink to="/login-register">
            <button className="md:px-7 md:py-2 md:text-base">LogIn</button>
          </NavLink>
          <Menu size={32} className="md:hidden" onClick={handleMenu} />
          <DarkMode />
        </div>
      </header>
    </>
  );
};

export default Header;
