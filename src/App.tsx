import React from "react";
import "./css/style.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route path="/Portfolio" render={(props) => <Portfolio />} />
          <Route path="/About" render={(props) => <About />} />
          <Route path="/Contact" render={(props) => <Contact />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
