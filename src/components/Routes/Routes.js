import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "../Pages/LandingPage/LandingPage";
import EventsPage from "../Pages/Events/EventsPage";
import CorporatePage from "../Pages/Corporate/CorporatePage";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path={"/sponsorship"} component={CorporatePage} />
        <Route exact path={"/events"} component={EventsPage} />
        {/* <Route exact path={"/newsletter"} component={NewsPage} /> */}
      </Switch>
    );
  }
}
