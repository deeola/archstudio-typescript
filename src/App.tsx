import React from "react";
import "./css/style.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route path="/Portfolio" render={(props) => <Portfolio />} />
          <Route path="/About" render={(props) => <About />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
