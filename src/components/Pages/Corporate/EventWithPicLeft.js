import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default class EventWithPicLeft extends React.PureComponent {
  render() {
    return (
      <Grid item container md={12}>
        <Grid item md={5} style={{ paddingLeft: 30, paddingRight: 30 }}>
          <img
            src={this.props.url}
            alt="Google Logo"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          container
          md={7}
          style={{ paddingLeft: 30, paddingRight: 30 }}
          alignContent={"center"}
        >
          <Typography align={"left"} variant={"h2"}>
            {this.props.headline}
          </Typography>
          <Typography align={"left"} paragraph={true} variant={"h6"}>
            {this.props.text}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
