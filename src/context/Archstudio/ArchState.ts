import React, { useState } from "react";
import archContext from "./archContext";

const ArchState = () => {
  //SLIDER initial states
  const [current, setCurrent] = useState(0);
  const [liState, setLiState] = useState(false);

  const liStyle = () => {
    return liState
      ? { color: "green" }
      : {
          color: "red",
        };
  };

  const liClick = () => {
    setLiState(true);
  };

  const firstSlide = () => {
    setCurrent(0);
  };

  const secondSlide = () => {
    setCurrent(1);
  };
  const thirdSlide = () => {
    setCurrent(2);
  };
  const fourthSlide = () => {
    setCurrent(3);
  };

  //HAMBURGER STATE
  const [hamOpen, setHamOpen] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const ulDisplay = () => {
    return hamOpen ? {} : { display: "none" };
  };

  //DISPLAY CLOSE ICON
  const DisplayCloseIcon = () => {
    return closeIcon ? { display: "block" } : { display: "none" };
  };

  //DISPLAY OPEN ICON
  const DisplayOpenIcon = () => {
    return openIcon ? { display: "none" } : { display: "block" };
  };

  //MENU STYLE
  const displayMenu = () => {
    setHamOpen(true);
    setCloseIcon(true);
    setOpenIcon(true);
  };

  const closeMenu = () => {
    setHamOpen(false);
    setCloseIcon(false);
    setOpenIcon(false);
  };

  return (
    <archContext.Provider
      value={{
        DisplayOpenIcon,
        DisplayCloseIcon,
        ulDisplay,
        closeMenu,
        displayMenu,
        current,
        fourthSlide,
        secondSlide,
        firstSlide,
        thirdSlide,
        liClick,
        liStyle,
      }}
    >
      {props.children}
    </archContext.Provider>
  );
};

export default ArchState;
