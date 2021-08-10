import React, { FC } from "react";

import jakeDesktop from "../../assets/about/desktop/avatar-jake.jpg";
import mariaDesktop from "../../assets/about/desktop/avatar-maria.jpg";
import jacksonDesktop from "../../assets/about/desktop/avatar-jackson.jpg";
import thomDesktop from "../../assets/about/desktop/avatar-thompson.jpg";

//Icons

import twitterIcon from "../../assets/icons/icon-twitter.svg";
import linkedinIcon from "../../assets/icons/icon-linkedin.svg";

/*Leaders component */

interface IProps {}

const Leaders: FC<IProps> = () => {
  return (
    <section className="LeaderContainerDiv">
      <div className="leaderText">
        <h3>The Leaders</h3>
      </div>
      <div className="leaderImageContainer">
        <div className="LeaderImagesDiv">
          <div className="eachLeader">
            <img alt="Jake" src={jakeDesktop}></img>
            <p className="leaderName">Jake Richards</p>
            <p className="eaderPosition">Chief Architect</p>
            <div className="socialIcons">
              <img alt="icon" src={linkedinIcon} className="linkedinIcon"></img>
              <img alt="icon" src={twitterIcon} className="twitterIcon"></img>
            </div>
          </div>
        </div>
        <div className="LeaderImagesDiv">
          <div className="eachLeader">
            <img alt="Jake" src={thomDesktop}></img>
            <p className="leaderName">Thompson Smith</p>
            <p className="eaderPosition">Chief Architect</p>
            <div className="socialIcons">
              <img alt="icon" src={linkedinIcon} className="linkedinIcon"></img>
              <img alt="icon" src={twitterIcon} className="twitterIcon"></img>
            </div>
          </div>
        </div>
        <div className="LeaderImagesDiv">
          <div className="eachLeader">
            <img alt="Jake" src={jacksonDesktop}></img>
            <p className="leaderName">Jackson Rourke</p>
            <p className="eaderPosition">Lead Designer</p>
            <div className="socialIcons">
              <img alt="icon" src={linkedinIcon} className="linkedinIcon"></img>
              <img alt="icon" src={twitterIcon} className="twitterIcon"></img>
            </div>
          </div>
        </div>
        <div className="LeaderImagesDiv">
          <div className="eachLeader">
            <img alt="Jake" src={mariaDesktop}></img>
            <p className="leaderName">Maria Simpson</p>
            <p className="eaderPosition">Senior Architect</p>
            <div className="socialIcons">
              <img alt="icon" src={linkedinIcon} className="linkedinIcon"></img>
              <img alt="icon" src={twitterIcon} className="twitterIcon"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
