import React from "react";
import SponsorPackage from "./SponsorPackage";
import Sponsors from "./Sponsors";
import Grid from "@material-ui/core/Grid/index";

export default class CorporatePage extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" spacing={8}>
        <Grid item xs={12}>
          <SponsorPackage />
        </Grid>
        <Grid item xs={12}>
          <Sponsors />
        </Grid>
      </Grid>
    );
  }
}
