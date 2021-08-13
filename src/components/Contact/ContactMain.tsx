import React, { FC } from "react";
import Connect from "./Connect";
import Details from "./Details";
import Map from "./Map";

interface IProps {
  scriptLoaded: boolean;
}

const ContactMain: FC<IProps> = ({ scriptLoaded }) => {
  return (
    <main>
      <Details />
      {scriptLoaded && (
        <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
      )}
      <Connect />
    </main>
  );
};

export default ContactMain;
