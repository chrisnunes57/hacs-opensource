import React from "react";
import SponsorPackage from "./Sponsors/SponsorPackage";
import Sponsors from "./Sponsors/Sponsors";
import Grid from "@material-ui/core/Grid/index";
import CorpContact from "./CorpContact";
import HowToSponsor from "./HowToSponsor";
import EventsNoPic from "./EventsNoPics";
import Testimonials from "./Testimonials";
import OtherPerks from "./OtherPerks";
import withStyles from "@material-ui/core/styles/withStyles";
import EventWithPicLeft from "./EventWithPicLeft";
import EventWithPicRight from "./EventWithPicRight";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper
  }
});


const divEventUrl =
  "http://drive.google.com/uc?export=view&id=1scwoL56YFQ9Xh5YyadlwGFTcaV3W-RI6";

const headline = "Networking Event";
const text =
  " Each semester HACS members are exclusively invited to a diversity networking event the day before career fair. \n" +
  "  Your company can be invited to this intimate night of networking.";

export default withStyles(styles)(
  class CorporatePage extends React.Component {
    render() {
      const { classes } = this.props;
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
          <Grid item lg={12}>
          <EventWithPicLeft headline={headline} url={divEventUrl} text={text} />
          </Grid>
          <Grid item lg={12}>
            <EventWithPicRight headline={'Kickoff'} url={divEventUrl} text={text}/>
          </Grid>
          <Grid>
            <EventsNoPic />
          </Grid>
          <Grid item lg={12}>
            <EventWithPicLeft headline={'General Meeting'} url={divEventUrl} text={text} />
          </Grid>
          <Grid item lg={12}>
            <EventWithPicRight headline={'Austin Office Visit'} url={divEventUrl} text={text} />
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
  }
);
