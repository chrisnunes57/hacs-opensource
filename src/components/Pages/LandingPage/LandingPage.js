import React from "react";
import Carousel from "./LandingPage/Carousel";
import FeaturedMember from "./LandingPage/FeaturedMember";
import Officers from "./LandingPage/Officers";
import Grid from "@material-ui/core/Grid/index";

import UnderCarousel from "./LandingPage/UnderCarousel";

export default class LandingPage extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Grid item xs={12} style={{ paddingTop: 0 }}>
          <Carousel />
        </Grid>
        <Grid container item xs={12}>
         <UnderCarousel/>
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
