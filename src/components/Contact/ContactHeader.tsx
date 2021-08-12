import React, { FC } from "react";
import Navbar from "../Shared/Navbar";
import ContactHero from "./ContactHero";

interface Iprops {}

const ContactHeader: FC<Iprops> = () => {
  return (
    <header>
      <div className="homeDesign">
        <div className="homeRectangle"></div>
        <p className="homeText">CONTACT</p>
      </div>
      <div className="navContainer">
        <Navbar />
      </div>
      <ContactHero />
    </header>
  );
};

export default ContactHeader;
