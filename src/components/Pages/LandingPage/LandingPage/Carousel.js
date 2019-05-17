import React from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Grid from "@material-ui/core/Grid";

const apiURL = "http://127.0.0.1:3001/pictures";

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    fetch(apiURL)
      .then(results => {
        // debugger;
        return results.json();
      })
      .then(pictures => {
        // debugger;
        let data = [];
        for (let i = 0; i < pictures.length; i++) {
          let picture = pictures[i];
          if (picture) {
            data.push(picture);
          }
        }
        this.setState({
          pictures: data
        });
      });
  }

  render() {
    return (
      <Carousel autoPlay stopOnHover showThumbs={false} infiniteLoop>
        {this.state.pictures.map(picture => {
          return <img src={picture.image_link} style={{ height: 400 }} />;
        })}
      </Carousel>
    );
  }
}
