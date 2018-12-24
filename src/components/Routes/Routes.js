import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "../Pages/LandingPage";
import SponsorPage from "../Pages/SponsorPage";
import EventsPage from "../Pages/EventsPage";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path={"/sponsorship"} component={SponsorPage} />
        <Route exact path={"/events"} component={EventsPage}/>
      </Switch>
    );
  }
}
