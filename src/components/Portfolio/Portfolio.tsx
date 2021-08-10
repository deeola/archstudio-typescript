import React, { FC } from "react";
import Footer from "../Shared/Footer";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioMain from "./PortfolioMain";

interface iProps {}

const Portfolio: FC<iProps> = () => {
  return (
    <div className="PortfolioMainContainer">
      <PortfolioHeader />
      <PortfolioMain />
      <Footer />
    </div>
  );
};

export default Portfolio;
