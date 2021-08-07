import React from "react";
import Footer from "../Shared/Footer";
import Header from "./Header";
import Main from "./Main";

const Home: React.FC<{}> = (props) => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
