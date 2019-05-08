import React from "react";
import SponsorPackage from "./SponsorPackage";
import Sponsors from "./Sponsors";
import Grid from "@material-ui/core/Grid/index";
import CorpContact from "./CorpContact";
import HowToSponsor from "./HowToSponsor";
import EventsNoPic from "./EventsNoPics";
import Testimonials from "./Testimonials";
import OtherPerks from "./OtherPerks";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  paper:
  {
    backgroundColor: theme.palette.background.paper,
  }
});


export default  withStyles(styles)(class CorporatePage extends React.Component {
  render() {

    const {classes} = this.props;
    return (
      <Grid container direction="row" spacing={8}>
        <Grid container direction={"row"} className={classes.paper}>
        <Grid item md={6}>
          <HowToSponsor />
        </Grid>
        <Grid item md={6}>
          <CorpContact />
        </Grid>
        </Grid>
        <Grid>
          <EventsNoPic />
        </Grid>
        <Grid item xs={12}>
          <OtherPerks />
        </Grid>
        <Grid item xs={12}>
          <SponsorPackage />
        </Grid>
        <Grid item xs={12}>
          <Testimonials />
        </Grid>
        <Grid item xs={12}>
          <Sponsors />
        </Grid>
      </Grid>
    );
  }
})
