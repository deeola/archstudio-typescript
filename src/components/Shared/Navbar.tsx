import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import close from "../../assets/icons/icon-close.svg";
type CSSprop = React.CSSProperties;

interface IStates {}

const Navbar: React.FC<IStates> = () => {
  //HAMBURGER STATE
  const [hamOpen, setHamOpen] = useState<boolean>(false);
  const [closeIcon, setCloseIcon] = useState<boolean>(false);
  const [openIcon, setOpenIcon] = useState<boolean>(false);

  const ulDisplay = (): CSSprop => {
    return hamOpen ? {} : { display: "none" };
  };

  //DISPLAY CLOSE ICON
  const DisplayCloseIcon = (): CSSprop => {
    return closeIcon ? { display: "block" } : { display: "none" };
  };

  //DISPLAY OPEN ICON
  const DisplayOpenIcon = (): CSSprop => {
    return openIcon ? { display: "none" } : { display: "block" };
  };

  //MENU STYLE
  const displayMenu = (): void => {
    setHamOpen(true);
    setCloseIcon(true);
    setOpenIcon(true);
  };

  const closeMenu = (): void => {
    setHamOpen(false);
    setCloseIcon(false);
    setOpenIcon(false);
  };

  return (
    <nav>
      <div className="logo">
        <Link onClick={closeMenu} to="/">
          <img className="mainLogo" src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="HambugerClose">
        <img
          style={DisplayOpenIcon()}
          onClick={() => {
            displayMenu();
          }}
          className="hamIcon"
          src={hamburger}
          alt="ham-icon"
        ></img>
        <img
          style={DisplayCloseIcon()}
          onClick={() => {
            closeMenu();
          }}
          className="closeIcon"
          src={close}
          alt="close-icon"
        ></img>
      </div>
      <ul style={ulDisplay()} className="navUl">
        <li>
          {" "}
          <NavLink activeClassName="actives" className="myLink" to="/Portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="actives" className="myLink" to="/About">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="actives" className="myLink" to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
