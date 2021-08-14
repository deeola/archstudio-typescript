import React, { useState, FC } from "react";
import { SliderData } from "./imageSlider/SliderData";
import iconArrow from "../../assets/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

const Hero: FC<{}> = (props) => {
  const [current, setCurrent] = useState<number>(0);
  const handleChanges = (num: number): void => {
    setCurrent(num);
  };

  return (
    <div className="imageliderDiv">
      <>
        {SliderData.map((slide, index: number) => {
          return (
            <div className="heroMainDiv">
              <div className={index === current ? "slide active" : "slide"}>
                {index === current && (
                  <div className="heroImageandText">
                    <div className="heroImageDiv">
                      <img
                        className="desktop"
                        src={
                          require("../../assets" + slide.image.desktop).default
                        }
                        alt="heroDesktop"
                      ></img>
                      <img
                        className="tablet"
                        src={
                          require("../../assets" + slide.image.tablet).default
                        }
                        alt="heroTablet"
                      ></img>
                      <img
                        className="mobile"
                        src={
                          require("../../assets" + slide.image.mobile).default
                        }
                        alt="heroMobile"
                      ></img>
                    </div>
                    <div className="heroTitleTextLink">
                      <div>
                        <h1 className="heroTitle">{slide.title}</h1>
                        <p className="heroText"> {slide.heroText}</p>
                      </div>
                      <Link className="homePortfolioLink" to="/Portfolio">
                        <div className="heroLinkSvg">
                          <p className="heroLink">See Our Portfolio </p>
                          <div className="arrowDiv">
                            <img
                              className="arrow"
                              src={iconArrow}
                              alt="iconArrow"
                            ></img>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="buttonBox">
                      <div
                        className={index === 0 ? "button active" : "button"}
                        onClick={() => handleChanges(0)}
                      >
                        01
                      </div>
                      <div
                        className={index === 1 ? "button active" : "button"}
                        onClick={() => handleChanges(1)}
                      >
                        02
                      </div>
                      <div
                        className={index === 2 ? "button active" : "button"}
                        onClick={() => handleChanges(2)}
                      >
                        03
                      </div>
                      <div
                        className={index === 3 ? "button active" : "button"}
                        onClick={() => handleChanges(3)}
                      >
                        04
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Hero;
