import React from "react";
import Slider from "react-slick";
// import "./CardCarousel.scss";

function CardCarousel(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  const { cards } = props;
  return <Slider {...settings}>{cards}</Slider>;
}

export default CardCarousel;
