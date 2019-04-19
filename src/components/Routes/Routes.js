import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "../Pages/LandingPage";
import EventsPage from "../Pages/EventsPage";
import CorporatePage from "../Pages/CorporatePage";
import NewsPage from "../Pages/NewsPage";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path={"/sponsorship"} component={CorporatePage} />
        <Route exact path={"/events"} component={EventsPage} />
        <Route exact path={"/newsletter"} component={NewsPage} />
      </Switch>
    );
  }
}
