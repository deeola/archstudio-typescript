import React from "react";
import Navbar from "../Shared/Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header>
      <div className="homeDesign">
        <div className="homeRectangle">.</div>
        <p className="homeText">HOME</p>
      </div>
      <div className="navContainer">
        <Navbar />
      </div>
      <Hero />
    </header>
  );
};

export default Header;
