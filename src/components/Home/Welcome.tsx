import React from "react";

interface WelcomeProps {
  //   welcomeTo: string;
}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <section className="welcomeSection">
      <div className="welcomeContainer">
        <p className="welcome">Welcome</p>
        <div className="imagewelcome"></div>
      </div>

      <div className="welcomeText">
        <h2>Welcome to Arch Studio</h2>
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
