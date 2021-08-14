import React, { useEffect, useState } from "react";
import "./css/style.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { loadMapApi } from "./components/Utils/GoogleMapsUtils";
import Layer from "./components/Shared/Layer";

const App: React.FC<{}> = () => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", () => {
      setScriptLoaded(true);
    });
  }, []);

  // console.log(navOpened);

  // function returnLayer() {
  //   const navOpened = document.querySelectorAll(".navUl");

  //   if (navOpened.length !== 0) {
  //     const NavstyleName = navOpened[0].attributes[0].textContent;

  //     console.log(NavstyleName);

  //     if (NavstyleName === "display: none") {
  //       return <Layer />;
  //     }
  //   } else {
  //     console.log("layer is not block");
  //   }
  // }

  //
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route path="/Portfolio" render={(props) => <Portfolio />} />
          <Route path="/About" render={(props) => <About />} />
          <Route
            path="/Contact"
            render={(props) => <Contact scriptLoaded={scriptLoaded} />}
          />
        </Switch>
        {/* {returnLayer()} */}
      </div>
    </Router>
  );
};

export default App;
