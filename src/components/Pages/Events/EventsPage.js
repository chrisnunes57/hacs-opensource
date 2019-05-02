import React from "react";
import EventsCalendar from "./EventsCalendar";
import Grid from "@material-ui/core/Grid/index";

export default class EventsPage extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" spacing={0}>
        <Grid item xs={12}>
          <h1>We got events going on here in this</h1>
          <EventsCalendar />
        </Grid>
      </Grid>
    );
  }
}
