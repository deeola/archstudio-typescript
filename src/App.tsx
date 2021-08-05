import React from "react";
import "./css/style.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
