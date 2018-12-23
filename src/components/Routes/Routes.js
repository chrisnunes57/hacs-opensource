import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "../Pages/LandingPage";

export default class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    );
  }
}