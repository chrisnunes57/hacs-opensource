import React from "react";
import SponsorPackage from "../Wip/Corporate/SponsorPackage";
import Sponsors from "../Wip/Corporate/Sponsors";
import Grid from "@material-ui/core/Grid";
import WhatComesWithSponsorship from "./WhatComesWithSponsorship";
import NetworkingEvents from "./NetworkingEvents";
import Kickoff from "./Kickoff";
import NetworkingEventsPic from "./NetworkingEventsPic"

export default class CorporatePage extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        spacing={8}
      >
        <Grid item xs={12}>
            <SponsorPackage />
      </Grid>
        <Grid item xs={12}>
            <Sponsors />
        </Grid>
        <Grid item xs={10}><WhatComesWithSponsorship/></Grid>
        <Grid item xs={4}><NetworkingEventsPic/></Grid>
        <Grid item xs={6}><NetworkingEvents/></Grid>
        <Grid item xs={6}><Kickoff/></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    );
  }
}
