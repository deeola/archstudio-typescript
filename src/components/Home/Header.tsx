import React from "react";
import Navbar from "../Shared/Navbar";

function Header() {
  return (
    <header>
      <div className="homeDesign">
        <div className="homeRectangle">.</div>
        <p className="homeText">HOME</p>
      </div>
      <div className="navContainer">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
