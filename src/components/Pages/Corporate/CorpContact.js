import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Javier from "./logoPics/javier.png";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  card: {
    display: "flex",
    backgroundColor: "#e9ebee !important",
    // lineHeight: 46
    borderWidth: "0px !important",
    // shadowColor: "#e9ebee !important"
    borderBottomWidth: "0px !important"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    textAlign: "center"
  },
  cover: {
    height: 300,
    objectFit: "cover"
  }
});

export default withStyles(styles)(
  class CorpContact extends React.PureComponent {
    render() {
      const { classes } = this.props;
      return (
        <React.Fragment>
          <Grid container item xs={12}>
            <Grid item xs={12} container justify={"center"}>
              <h2 style={{ textDecoration: "underline" }}>Contact Us!</h2>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Card className={classes.card}>
              <Grid item xs={4}>
                <CardMedia
                  component={"img"}
                  image={Javier}
                  // className={classes.cover}
                />
              </Grid>
              <Grid item container justify={"center"} xs={8}>
                <CardContent>
                  <Grid container item xs={12} justify={"center"}>
                    <Typography component="h5" variant="h5">
                      Javier Luis Romero
                    </Typography>
                  </Grid>
                  <Grid container item xs={12} justify={"center"}>
                    <Typography variant="subtitle1" color="textSecondary">
                      - Corporate Officer -
                    </Typography>
                  </Grid>
                  <Grid container item xs={12} justify={"center"}>
                    <Button variant="outlined" className={classes.button}>
                      Email Us
                    </Button>
                  </Grid>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        </React.Fragment>
      );
    }
  }
);
