import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, withStyles, Grid } from "@material-ui/core";
// import CardImgOverlay from "reactstrap/es/CardImgOverlay";



const styles = {
  media : {
    height: 300 ,
    objectFit: "cover"
  }
};

const studentOne = {
  name : 'Manuel',
  blurb: "I love hacs it's so great. They've really helped me achieve my goals as a hispanic in CS",
  image_link: 'https://media.comicbook.com/2019/04/detective-pikachu-1166860-1280x0.jpeg'
};

const studentTwo = {
  name : 'Manuel',
  blurb: "I love hacs it's so great. They've really helped me achieve my goals as a hispanic in CS",
  image_link: 'https://media.comicbook.com/2019/04/detective-pikachu-1166860-1280x0.jpeg'
};

const studentThree = {
  name : 'Jesus',
  blurb: "I love hacs it's so great. They've really helped me achieve my goals as a hispanic in CS",
  image_link: 'https://media.comicbook.com/2019/04/detective-pikachu-1166860-1280x0.jpeg'
};

// const apiURL = "http://127.0.0.1:3001/testimonials";

export default withStyles(styles)( class Testimonials extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      testimonials: [studentOne, studentTwo, studentThree]
    }
  }



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

  render(){
    const {classes } = this.props;
  return(
    <Grid item container xs={12}>
        {this.state.testimonials.map( testimonial => {
          return (
            <Grid item container xs={4} justify={"center"}>
            <Grid item container xs={2}/>
            <Grid item container  xs={8} justify={"center"}>
              <Card raised>
              <CardActionArea>
                {/*<CardContent>*/}
                  <CardMedia component={"img"} src={testimonial.image_link} className={classes.media}>
                  </CardMedia>
                {/*</CardContent>*/}

              </CardActionArea>
            </Card>
            </Grid>
              <Grid item container xs={2}/>
            </Grid>
          )
        })}
    </Grid>
  )
  }
})