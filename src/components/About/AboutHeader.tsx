import React, { FC } from "react";
import Navbar from "../Shared/Navbar";
import AboutHero from "./AboutHero";

interface iProps {}

const AboutHeader: FC<iProps> = () => {
  return (
    <header>
      <div className="homeDesign">
        <div className="homeRectangle"></div>
        <p className="homeText">ABOUT</p>
        <p className="homeText">US</p>
      </div>
      <div className="navContainer">
        <Navbar />
      </div>
      <AboutHero />
    </header>
  );
};

export default AboutHeader;
