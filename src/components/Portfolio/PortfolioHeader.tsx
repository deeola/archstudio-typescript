import React, { FC } from "react";
import Navbar from "../Shared/Navbar";

interface iProps {}

const PortfolioHeader: FC<iProps> = () => {
  return (
    <header>
      <div className="homeDesign">
        <div className="homeRectangle">.</div>
        <p className="homeText">PORTFOLIO</p>
      </div>
      <div className="navContainer">
        <Navbar />
      </div>
    </header>
  );
};

export default PortfolioHeader;
