import React, { FC } from "react";
import { Link } from "react-router-dom";
import iconArrow from "../../assets/icons/icon-arrow.svg";

interface TeamProps {}

const SmallTeams: FC<TeamProps> = () => {
  return (
    <section className="smallTeamSection">
      <div className="smallTeamContainer">
        <h2>Small team, big ideas</h2>
        <Link className="homeAboutLink" to="/About">
          <div className="heroLinkSvg">
            <p className="heroLink">About Us </p>
            <div className="arrowDiv">
              <img className="arrow" src={iconArrow} alt="iconArrow"></img>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SmallTeams;
