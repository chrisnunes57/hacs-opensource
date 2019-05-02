import React from "react";
import Grid from "@material-ui/core/Grid/index";
import Typography from "@material-ui/core/Typography/index";

/**
 * Simple component displaying our mission statement
 * and then multiple photos of our membership at events or something
 */
export default class MissionStatement extends React.PureComponent {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        spacing={0}
        alignItems="center"
      >
        <Grid item xs={6} offset={3}>
          <Typography center>
            The Hispanic Association of Computer Scientists (HACS) is an
            organization that aims to empower and provide support for Hispanic
            and Latinx students in computer science through academic,
            professional, and social development.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
