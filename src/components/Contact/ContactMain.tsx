import React, { FC } from "react";
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
    </main>
  );
};

export default ContactMain;
