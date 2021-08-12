import React, { FC } from "react";
import Footer from "../Shared/Footer";
import ContactHeader from "./ContactHeader";
import ContactMain from "./ContactMain";

interface IProps {}

const Contact: FC<IProps> = () => {
  return (
    <div className="contactMain">
      <ContactHeader />
      <ContactMain />
      <Footer />
    </div>
  );
};

export default Contact;
