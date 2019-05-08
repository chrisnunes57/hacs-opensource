import React from "react";
import Carousel from "./LandingPage/Carousel";
import Agenda from "./LandingPage/Agenda";
import TwitterFeed from "./LandingPage/TwitterFeed";
import Announcements from "./LandingPage/Announcements";
import ContactLinks from "./LandingPage/ContactLinks";
import FeaturedMember from "./LandingPage/FeaturedMember";
import Officers from "./LandingPage/Officers";
import Grid from "@material-ui/core/Grid/index";
import MissionStatement from "./LandingPage/MissionStatement";

export default class LandingPage extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        // style={{ marginLeft: 20, marginRight: 20 }}
      >
        <Grid item xs={12} style={{ paddingTop: 0 }}>
          <Carousel />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={4}>
            <Announcements />
          </Grid>
          <Grid item xs={4}>
            <Agenda />
          </Grid>
          <Grid item xs={4}>
            <TwitterFeed />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FeaturedMember />
        </Grid>
        <Grid item={12}>
          <Officers />
        </Grid>
      </Grid>
    );
  }
}
