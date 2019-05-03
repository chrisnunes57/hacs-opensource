import React from "react";
import SponsorPackage from "./SponsorPackage";
import Sponsors from "./Sponsors";
import Grid from "@material-ui/core/Grid/index";
import MyButton from "../../MyButton.js";
import SponsorSteps from "../Corporate/SponsorSteps";
import { ListItemText } from "@material-ui/core";

export default class HowToSponsor extends React.Component {
  render() {
    return (
      <Grid container direction="row" spacing={0}>
        <Grid item xs={12}>
          How To Sponsor
        </Grid>
        <Grid item xs={12}>
          <SponsorSteps>1) Check out our past events!</SponsorSteps>
          <SponsorSteps>2) Find out What you get with sponsorship</SponsorSteps>
          <SponsorSteps>
            3) Talk to our corporate officer for details
          </SponsorSteps>
        </Grid>
      </Grid>
    );
  }
}
