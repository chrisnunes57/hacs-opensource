import React from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
// import Card from '@material-ui/core'


export default class Officer extends React.PureComponent{
      render(){
        const { classes } = this.props;
        return(
          <React.Fragment>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={this.props.imageURL}
                  title={this.props.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.name}
                  </Typography>
                  <Typography component="p">
                    {this.props.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </React.Fragment>
        )
      }
}