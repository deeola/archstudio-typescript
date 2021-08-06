import React, { useState } from "react";
import ImageSlider from "./imageSlider/ImageSlider";
import { SliderData, Sliders } from "./imageSlider/SliderData";

interface Props {
  currents: number;
  handleChange: (num: number) => void;
  slides: Sliders;
}

const Hero: React.FC<{}> = (props) => {
  const [current, setCurrent] = useState<Props["currents"]>(0);
  const handleChanges: Props["handleChange"] = (num: number) => {
    setCurrent(num);
  };

  return (
    <div className="imageliderDiv">
      <ImageSlider
        slides={SliderData}
        currents={current}
        handleChange={handleChanges}
      />
    </div>
  );
};

export default Hero;
