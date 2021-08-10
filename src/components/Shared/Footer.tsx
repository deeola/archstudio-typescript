import React, { FC } from "react";
import Navbar from "./Navbar";
import iconArrow from "../../assets/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

interface footerProp {}

const Footer: FC<footerProp> = () => {
  return (
    <footer>
      <div className="navContainer">
        <Navbar />
      </div>
      <Link className="footerPortfolio" to="/Portfolio">
        <div className="heroLinkSvg">
          <p className="heroLink">See Our Portfolio </p>
          <div className="arrowDiv">
            <img className="arrow" src={iconArrow} alt="iconArrow"></img>
          </div>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
