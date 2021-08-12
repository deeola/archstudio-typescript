import React, { FC } from "react";

interface IProps {}

const ContactHero: FC<IProps> = () => {
  return (
    <div className="aboutHero">
      <div className="aboutHeadOne"></div>
      <div className="aboutHeadTwo">
        <h1 className="aboutTitle">Contact</h1>
        <div className="aboutHeaderText">
          <h3>Tell us about your project</h3>
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
