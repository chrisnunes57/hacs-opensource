import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  withStyles,
  Grid
} from "@material-ui/core";
import TextOnHover from "./TextOnHover";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  media: {
    height: 350,
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

const studentOne = {
  name: "Manuel",
  blurb:
    "I love hacs it's so great. They've really helped me achieve my goals as a hispanic in CS",
  image_link:
    "https://media.comicbook.com/2019/04/detective-pikachu-1166860-1280x0.jpeg"
};

const studentTwo = {
  name: "Manuel",
  blurb:
    "I love hacs it's so great. They've really helped me achieve my goals as a hispanic in CS",
  image_link:
    "https://media.comicbook.com/2019/04/detective-pikachu-1166860-1280x0.jpeg"
};

const studentThree = {
  name: "Jesus",
  blurb:
    "I love hacs it's so great. They've really helped me achieve my goals as a hispanic in CS",
  image_link:
    "https://media.comicbook.com/2019/04/detective-pikachu-1166860-1280x0.jpeg"
};

// const apiURL = "http://127.0.0.1:3001/testimonials";

export default withStyles(styles)(
  class Testimonials extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        testimonials: [studentOne, studentTwo, studentThree],
        open: false
      };
    }

    handleOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    componentDidMount() {
      // todo: add pulling from db when we make that table
      // fetch(apiURL)
      //   .then(results => {
      //     return results.json();
      //   })
      //   .then(announcements => {
      //     debugger;
      //     let data = [];
      //     for (let i = 0; i < announcements.length; i++) {
      //       let announcement = announcements[i];
      //       if (announcement) {
      //         data.push(announcement);
      //       }
      //     }
      //     this.setState({
      //       announcements: data
      //     });
      //   });
    }

    render() {
      const { classes } = this.props;
      return (
        <Grid item container xs={12}>
          {this.state.testimonials.map(testimonial => {
            return (
              <Grid item container xs={4} justify={"center"}>
                <Grid item container xs={2} />
                <Grid item container xs={8} justify={"center"}>
                  <Card raised>
                    {/*{!this.state.open &&*/}
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.open}
                      onClose={this.handleClose}
                    >
                      <CardContent
                        className={classes.paper}
                        style={{
                          top: `${50}%`,
                          left: `${50}%`,
                          transform: `translate(-${50}%, -${50}%)`,
                          paddingBottom: 0
                        }}
                      >
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
                            <Grid item container justify={"center"} md={12}>
                              <Typography variant="h3" id="modal-title">
                                {testimonial.name}
                              </Typography>
                            </Grid>
                            <Grid item container justify={"center"} md={12}>
                              <Typography
                                variant="h6"
                                id="simple-modal-description"
                              >
                                "{testimonial.blurb}"
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Modal>
                    {/*}*/}
                    {!this.state.open && (
                      <CardActionArea onClick={this.handleOpen}>
                        <TextOnHover
                          name={testimonial.name}
                          blurb={testimonial.blurb}
                        >
                          <CardMedia
                            component={"img"}
                            src={testimonial.image_link}
                            className={classes.media}
                          />
                        </TextOnHover>
                      </CardActionArea>
                    )}
                  </Card>
                </Grid>
                <Grid item container xs={2} />
              </Grid>
            );
          })}
        </Grid>
      );
    }
  }
);
