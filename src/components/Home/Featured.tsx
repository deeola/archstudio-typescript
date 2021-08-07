import React, { FC } from "react";

//Desktop
import delsol from "../../assets/portfolio/desktop/image-del-sol.jpg";
import btower from "../../assets/portfolio/desktop/image-228b.jpg";
import prototype from "../../assets/portfolio/desktop/image-prototype.jpg";

//Tablet

import delsolTab from "../../assets/portfolio/tablet/image-del-sol.jpg";
import btowerTab from "../../assets/portfolio/tablet/image-228b.jpg";
import prototypeTab from "../../assets/portfolio/tablet/image-prototype.jpg";

//Mobile

import delsolMobile from "../../assets/portfolio/mobile/image-del-sol.jpg";
import btowerMobile from "../../assets/portfolio/mobile/image-228b.jpg";
import prototypeMobile from "../../assets/portfolio/mobile/image-prototype.jpg";

import iconArrow from "../../assets/icons/icon-arrow.svg";

interface propFeat {}

const Featured: FC<propFeat> = () => {
  return (
    <section className="featuredSection">
      <div className="featuredTitle">
        <h2>Featured</h2>
        <div className="heroLinkSvgTop">
          <p className="heroLink">
            <div className="featuredLink">See All</div>
          </p>
          <div className="arrowDiv">
            <img className="arrow" src={iconArrow} alt="iconArrow"></img>
          </div>
        </div>
      </div>
      <div className="featurePortfolioContainer">
        <div className="eachPortfolio delsol">
          <img alt="" className="desktop" src={delsol}></img>
          <img alt="" className="tablet" src={delsolTab}></img>
          <img alt="" className="mobile" src={delsolMobile}></img>
          <p className="featureNumber">1</p>
          <div className="projectNameLink">
            <p className="projectName">Project Del Sol</p>
            <div>View All Projects</div>
          </div>
        </div>

        <div className="eachPortfolio btower">
          <img alt="" className="desktop" src={btower}></img>
          <img alt="" className="tablet" src={btowerTab}></img>
          <img alt="" className="mobile" src={btowerMobile}></img>
          <p className="featureNumber">2</p>
          <div className="projectNameLink">
            <p className="projectName">228B Tower</p>
            <div>View All Projects</div>
          </div>
        </div>
        <div className="eachPortfolio prototype">
          <img alt="" className="desktop" src={prototype}></img>
          <img alt="" className="tablet" src={prototypeTab}></img>
          <img alt="" className="mobile" src={prototypeMobile}></img>
          <p className="featureNumber">3</p>
          <div className="projectNameLink">
            <p className="projectName">Le Prototype</p>
            <div>View All Projects</div>
          </div>
        </div>
      </div>
      <div className="featuredLink">
        <div className="heroLinkSvg">
          <p className="heroLink">See All </p>
          <div className="arrowDiv">
            <img className="arrow" src={iconArrow} alt="iconArrow"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
