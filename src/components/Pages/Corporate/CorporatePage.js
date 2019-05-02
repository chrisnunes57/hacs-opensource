import React from "react";
import SponsorPackage from "./SponsorPackage";
import Sponsors from "./Sponsors";
import Grid from "@material-ui/core/Grid/index";
import CorpContact from "./CorpContact";
import HowToSponsor from "./HowToSponsor";

export default class CorporatePage extends React.Component {
  render() {
    return (
      <Grid container direction="row" spacing={8}>
        <Grid item xs={6}>
          <HowToSponsor style/>
        </Grid>
        <Grid item xs={6}>
          <CorpContact/>
        </Grid>
        <Grid item xs={12}>
          <SponsorPackage />
        </Grid>
        <Grid item xs={12} >
          <Sponsors />
        </Grid>
      </Grid>
    );
  }
}
