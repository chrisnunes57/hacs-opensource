import React from "react";
import Carousel from "../Wip/LandingPage/Carousel";
import Agenda from "../Wip/LandingPage/Agenda";
import TwitterFeed from "../Wip/LandingPage/TwitterFeed";
import Announcements from "../Wip/LandingPage/Announcements";
import ContactLinks from "../Wip/LandingPage/ContactLinks";
import FeaturedMember from "../Wip/LandingPage/FeaturedMember";
import Officers from "../Wip/LandingPage/Officers";
import Grid from "@material-ui/core/Grid";
import MissionStatement from "../Wip/LandingPage/MissionStatement";

export default class LandingPage extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" spacing={0}>
        <Grid item xs={12}>
          <Carousel />
        </Grid>
        <Grid item xs={12}>
          <MissionStatement />
        </Grid>
        <Grid item xs={6}>
          <Announcements />
        </Grid>
        <Grid item xs={6}>
          <Agenda />
        </Grid>
        <Grid item xs={6}>
          <TwitterFeed />
        </Grid>
        <Grid item xs={6}>
          <FeaturedMember />
        </Grid>
        <Grid item={12}>
          <Officers />
        </Grid>
        <Grid item xs={4}>
          <ContactLinks />
        </Grid>
      </Grid>
    );
  }
}
