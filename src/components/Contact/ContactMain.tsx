import React, { FC, useState, useEffect } from "react";
import { loadMapApi } from "../Utils/GoogleMapsUtils";
import Details from "./Details";
import Map from "./Map";

interface IProps {}

const ContactMain: FC<IProps> = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", () => {
      setScriptLoaded(true);
    });
  }, []);

  return (
    <main>
      <Details />
      {scriptLoaded && (
        <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
      )}
    </main>
  );
};

export default ContactMain;
