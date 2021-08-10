import React, { FC } from "react";
import Footer from "../Shared/Footer";
import AboutHeader from "./AboutHeader";
import AboutMain from "./AboutMain";

interface iProps {}

const About: FC<iProps> = () => {
  return (
    <div className="aboutMain">
      <AboutHeader />
      <AboutMain />
      <Footer />
    </div>
  );
};

export default About;
