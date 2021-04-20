import React from "react";
import "./styles.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "react-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
