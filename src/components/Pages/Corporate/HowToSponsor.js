import React from "react";
import Grid from "@material-ui/core/Grid/index";
import SponsorSteps from "./Sponsors/SponsorSteps";

import SubHeader from "../../Style/SubHeader";

export default class HowToSponsor extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ background: "#FFFFFF" }}
      >
        <Grid item xs={12}>
          <SubHeader>How To Sponsor</SubHeader>
        </Grid>
        <Grid item xs={12}>
          <SponsorSteps style={{ fontWeight: "5px" }}>
            1) Check out our past events!
          </SponsorSteps>
          <SponsorSteps>2) Find out what you get with sponsorship</SponsorSteps>
          <SponsorSteps>
            3) Talk to our corporate officer for details
          </SponsorSteps>
        </Grid>
      </Grid>
    );
  }
}
