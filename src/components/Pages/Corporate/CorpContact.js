import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, CardMedia, Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Javier from "./logoPics/javier.png";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import SubHeader from "../../Style/SubHeader";

const styles = theme => ({
  card: {
    display: "flex",
    // backgroundColor: "#e9ebee !important",
    // lineHeight: 46
    // borderWidth: "0px !important",
    // shadowColor: "#e9ebee !important"
    // borderBottomWidth: "0px !important"
    // position: "absolute",
    // width: theme.spacing.unit * 110,
    // backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    // padding: 0,
    outline: "none",
    // shadowColor : "#FFFFFF"
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
    // height: 300,
    objectFit: "cover",
  width: "100%",
  maxWidth: 250,
  height: "auto"
}
  }
);

export default withStyles(styles)(
  class CorpContact extends React.PureComponent {
    render() {
      const { classes } = this.props;
      return (
        <React.Fragment>
          <Grid container item className={classes.card} lg={12}>
          <Grid container item md={12}>
            <Grid item xs={12} container justify={"center"}>
              <SubHeader>Contact Us!</SubHeader>
            </Grid>
          </Grid>
          {/*<Grid item container xs={12}>*/}
            {/*<Paper className={classes.card} >*/}
              <Grid item md={4}>
                {/*<CardMedia*/}
                {/*  component={"img"}*/}
                {/*  image={Javier}*/}
                {/*  // className={classes.cover}*/}
                {/*/>*/}
              <img src={Javier} className={classes.cover}/>
              </Grid>
              <Grid item container justify={"center"} md={8}>
                <CardContent>
                  <Grid container item xs={12} justify={"center"}>
                    <Typography component="h4" variant="h4">
                      Javier Luis Romero
                    </Typography>
                  </Grid>
                  <Grid container item xs={12} justify={"center"}>
                    <Typography variant="h5" color="textSecondary">
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
          {/*  </Paper>*/}
          {/*</Grid>*/}
          </Grid>
        </React.Fragment>
      );
    }
  }
);
