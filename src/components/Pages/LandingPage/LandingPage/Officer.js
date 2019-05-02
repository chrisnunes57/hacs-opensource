import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea/index";
import CardMedia from "@material-ui/core/CardMedia/index";
import Card from "@material-ui/core/Card/index";
import Typography from "@material-ui/core/Typography/index";
import CardContent from "@material-ui/core/CardContent/index";
import CardActions from "@material-ui/core/CardActions/index";
import Button from "@material-ui/core/Button/index";
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
  card: {
    maxHeight: 400
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    height: 200,
    objectFit: "cover"
  }
};

export default withStyles(styles)(
  class Officer extends React.PureComponent {
    render() {
      const { classes } = this.props;
      debugger;
      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component={"img"}
              src={this.props.photo_link}
              title={this.props.name}
            />
            <CardContent style={{ height: "200" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography component="p">{this.props.description}</Typography>
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
      );
    }
  }
);
