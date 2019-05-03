import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Button, CardMedia, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from "@material-ui/core/CardActionArea";
// import logo from './logoPics/email.png'

import Javier from './logoPics/javier.png'
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const styles =  theme => ({
  card: {
    // maxHeight: 400,
    display: 'flex',
    // width: "100%"/
    backgroundColor: "#e9ebee !important",
    borderWidth: 0,
    shadowColor: "#e9ebee !important"
  },
  // media: {
  //   // ⚠️ object-fit is not supported by IE 11.
  //   height: 300,
  //   width: 200,
  //   // width: 600,
  //   objectFit: "cover"
  // },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
    color: 'red'
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    textAlign: "center"
  },
  cover: {
    width: 200,
    // height: 250,
    objectFit: "cover"
  },

});

export default withStyles(styles)(
  class CorpContact extends React.PureComponent {

  render(){
    const { classes, theme } = this.props;
    return(
      <React.Fragment>
      <Grid container item xs={12} >
        <Grid item xs={12}  container  justify={"center"}
        >
          <h2 style ={{textDecoration:"underline"}}>Contact Us!</h2>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
          <Card className={classes.card}>

<Grid item xs={4}>
              <CardMedia  component={"img"} image={Javier} className={classes.cover}/>
</Grid>
            <Grid item xs={8}>
            <CardContent className={classes.content}>
               <div className={classes.details}>
                  <Typography component="h5" variant="h5">
                    Javier Luis Romero
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    - Corporate Officer -
                  </Typography>
                  <Button variant="outlined"  className={classes.button}>
                    Email Us
                  </Button>
</div>
            </CardContent>
            </Grid>
          </Card>
      </Grid>
      </React.Fragment>


    )
  }
})