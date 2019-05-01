import React from "react";
import SponsorPackage from "../Wip/Corporate/SponsorPackage";
import Sponsors from "../Wip/Corporate/Sponsors";
import Grid from "@material-ui/core/Grid";

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
