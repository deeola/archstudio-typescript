import React, { FC } from "react";
import Heritage from "./Heritage";

interface IProps {}

const AboutMain: FC<IProps> = () => {
  return (
    <main className="aboutMain">
      <Heritage />
    </main>
  );
};

export default AboutMain;
