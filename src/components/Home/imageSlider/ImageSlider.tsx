import React, { useState } from "react";
import { SliderData, Sliders } from "./SliderData";
import iconArrow from "../../../assets/icons/icon-arrow.svg";

interface Props {
  currents: number;
  handleChange: (num: number) => void;
  SliderData: Sliders;
}

const ImageSlider: React.FC<Props> = () => {
  //states
  const [current, setCurrent] = useState<Props["currents"]>(0);

  //functions to change images

  const handleChanges: Props["handleChange"] = (num: number) => {
    setCurrent(num);
  };

  return (
    <>
      {SliderData.map((slide: any, index: number) => {
        return (
          <div className="heroMainDiv">
            <div className={index === current ? "slide active" : "slide"}>
              {index === current && (
                <div className="heroImageandText">
                  <div className="heroImageDiv">
                    <img
                      className="desktop"
                      src={
                        require("../../../assets" + slide.image.desktop).default
                      }
                      alt="heroDesktop"
                    ></img>
                    <img
                      className="tablet"
                      src={
                        require("../../../assets" + slide.image.tablet).default
                      }
                      alt="heroTablet"
                    ></img>
                    <img
                      className="mobile"
                      src={
                        require("../../../assets" + slide.image.mobile).default
                      }
                      alt="heroMobile"
                    ></img>
                  </div>
                  <div className="heroTitleTextLink">
                    <div>
                      <h1 className="heroTitle">{slide.title}</h1>
                      <p className="heroText"> {slide.heroText}</p>
                    </div>
                    <div className="homePortfolioLink">
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
                    </div>
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
  );
};

export default ImageSlider;
