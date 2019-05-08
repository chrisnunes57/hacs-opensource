import React from "react";
import Carousel from "./LandingPage/Carousel";
import FeaturedMember from "./LandingPage/FeaturedMember";
import Officers from "./LandingPage/Officers";
import Grid from "@material-ui/core/Grid/index";
import MissionStatement from "./LandingPage/MissionStatement";
import UnderCarousel from "./LandingPage/UnderCarousel";
import Fake from "./Fake";

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
        <Grid item xs={12}>
          <UnderCarousel />
        </Grid>
        <Grid item xs={12}>
          <Fake />
        </Grid>

        <Grid item xs={12}>
          <MissionStatement />
        </Grid>
        <Grid item xs={6}>
          <FeaturedMember />
        </Grid>
        <Grid item={12}>
          <Officers />
        </Grid>
      </Grid>
    );
  }
}
