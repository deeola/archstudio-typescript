import React, { FC, useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import { loadMapApi } from "../Utils/GoogleMapsUtils";
import ContactHeader from "./ContactHeader";
import ContactMain from "./ContactMain";

interface IProps {}

const Contact: FC<IProps> = () => {
  // const [scriptLoaded, setScriptLoaded] = useState(false);

  // useEffect(() => {
  //   const googleMapScript = loadMapApi();
  //   googleMapScript.addEventListener("load", () => {
  //     setScriptLoaded(true);
  //   });
  // }, []);
  return (
    <div className="contactMain">
      <ContactHeader />
      <ContactMain />
      <Footer />
    </div>
  );
};

export default Contact;
