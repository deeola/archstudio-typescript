import React, { FC } from "react";
import iconArrow from "../../assets/icons/icon-arrow.svg";

interface TeamProps {}

const SmallTeams: FC<TeamProps> = () => {
  return (
    <section className="smallTeamSection">
      <div className="smallTeamContainer">
        <h2>Small team, big ideas</h2>
        <div className="homeAboutLink">
          <div className="heroLinkSvg">
            <p className="heroLink">About Us </p>
            <div className="arrowDiv">
              <img className="arrow" src={iconArrow} alt="iconArrow"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallTeams;
