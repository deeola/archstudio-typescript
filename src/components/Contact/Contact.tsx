import React, { FC } from "react";
import Footer from "../Shared/Footer";
import ContactHeader from "./ContactHeader";
import ContactMain from "./ContactMain";

interface IProps {
  scriptLoaded: boolean;
}

const Contact: FC<IProps> = ({ scriptLoaded }) => {
  return (
    <div className="contactMain">
      <ContactHeader />
      <ContactMain scriptLoaded={scriptLoaded} />
      <Footer />
    </div>
  );
};

export default Contact;
