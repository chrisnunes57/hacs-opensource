import React from "react";
import EventsCalendar from "../Wip/Events/EventsCalendar";
import Grid from "@material-ui/core/Grid";

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
