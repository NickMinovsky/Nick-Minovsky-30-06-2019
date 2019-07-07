import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/FavoriteList";
import Error from "./components/Layout/Error/Error";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites/" component={Favorites} />
          <Route path="/*" component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
