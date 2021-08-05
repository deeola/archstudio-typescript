import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

type Props = {};

const Navbar: React.FC<Props> = () => {
  // const {
  //     displayMenu,
  //     closeMenu,
  //     ulDisplay,
  //     DisplayCloseIcon,
  //     DisplayOpenIcon,
  //   } = ArchContext;

  return (
    <nav>
      <div className="logo">
        <Link>
          <img className="mainLogo" src={logo} alt="logo"></img>
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
