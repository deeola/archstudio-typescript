import React, { FC } from "react";

interface iProps {}

/*About Hero component */
const AboutHero: FC<iProps> = () => {
  return (
    <div className="aboutHero">
      <div className="aboutHeadOne"></div>
      <div className="aboutHeadTwo">
        <h1 className="aboutTitle">About</h1>
        <div className="aboutHeaderText">
          <h3>Your team of professionals</h3>
          <p>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
