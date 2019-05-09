import React from "react";
import Grid from "@material-ui/core/Grid/index";
import TwitterFeed from "./TwitterFeed.js";
import Agenda from "./Agenda.js";
import Announcements from "./Announcements.js";

export default class UnderCarousel extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ background: "#FFFFFF", paddingTop: 50 }}
      >
        <Grid container item xs={12}>
          <Grid item xs={4} spacing={0} container justify={"center"}>
            <Agenda />
          </Grid>

          <Grid item xs={4} spacing={0} container justify={"center"}>
            <Grid item xs={12}>
              <Announcements />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12} spacing={0} container justify={"center"}>
              <TwitterFeed />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
