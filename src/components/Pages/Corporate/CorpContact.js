import React from 'react';
import Grid from "@material-ui/core/Grid";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from "@material-ui/core/CardActionArea";
import logo from './logoPics/email.png'

const styles = {
  card: {
    maxHeight: 400
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    height: 200,
    width: 200,
    // width: 600,
    objectFit: "cover"
  }
};

export default withStyles(styles)(
  class CorpContact extends React.PureComponent {

  render(){
    const { classes } = this.props;
    return(
      <Grid container item xs={12}>
        <Grid item xs-={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia  component={"img"} image={logo} className={classes.media}/>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    )
  }
})