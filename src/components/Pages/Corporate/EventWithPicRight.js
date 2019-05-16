import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default class EventWithPicRight extends React.PureComponent {
  render() {
    return (
      <Grid item container md={12}>
        <Grid
          item
          container
          md={7}
          style={{ paddingLeft: 30, paddingRight: 30 }}
          alignContent={"center"}
        >
          <Typography variant={"h2"} align={"right"}>
          {/*<h2 style={{textAlign:"right"}}>{this.props.headline}</h2>*/}
            {this.props.headline}
          </Typography>
          <Typography align={"left"} paragraph={true} variant={"h6"}>
            {this.props.text}
          </Typography>
        </Grid>
        <Grid item md={5} style={{ paddingLeft: 30, paddingRight: 30 }}>
          <img
            src="http://drive.google.com/uc?export=view&id=1scwoL56YFQ9Xh5YyadlwGFTcaV3W-RI6"
            alt="Google Logo"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    );
  }
}
