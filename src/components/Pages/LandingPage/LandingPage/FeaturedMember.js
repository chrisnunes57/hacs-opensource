import React from "react";
import { Container } from "reactstrap";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  withStyles,
  Grid
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";


const styles = theme => ({
  media: {
    height: 300,
    width: 290,
    objectFit: "cover"
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 110,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
    outline: "none"
  }
});

const testimonial = {
  name: "Featured Member",
  blurb:
    "I am the featured member bc im cool",
  image_link:
    "https://media.comicbook.com/2019/04/detective-pikachu-1166860-1280x0.jpeg"
};

export default withStyles(styles) (class FeaturedMember extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid item container xs={12} justify={"center"} style={{padding: 20}}>
                <Grid item container xs={8}>
                        <Grid container item md={12}>
                          <Grid item md={6}>
                            <CardMedia
                              component={"img"}
                              src={testimonial.image_link}
                              className={classes.media}
                            />
                          </Grid>

                          <Grid
                            item
                            container
                            justify={"center"}
                            md={6}
                            style={{ paddingLeft: 30, paddingRight: 30 }}
                          >
                            <Grid item container justify={"left"} align={"left !important"} md={12}>
                              <Typography variant="h3" id="modal-title">
                                {testimonial.name}
                              </Typography>
                            </Grid>
                            <Grid item container justify={"center"} align={"left !important"} md={12}>
                              <Typography
                                variant="h6"
                                id="simple-modal-description"
                              >
                                "{testimonial.blurb}"
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                </Grid>
              </Grid>
      );
    }
  }
)