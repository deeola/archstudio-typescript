import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import close from "../../assets/icons/icon-close.svg";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <div className="logo">
        <div>
          <img className="mainLogo" src={logo} alt="logo"></img>
        </div>
      </div>
      <div className="HambugerClose">
        <img className="hamIcon" src={hamburger} alt="ham-icon"></img>
        <img className="closeIcon" src={close} alt="close-icon"></img>
      </div>
      <ul className="navUl">
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
