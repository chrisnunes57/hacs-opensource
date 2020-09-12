import React, { useState } from "react";
import "./Homepage.scss";
import ImageGallery from "react-image-gallery";
import TopGolf from "../../media/top_golf.jpg";
import StudyNight from "../../media/study-night.jpg";
import GoogleInterview from "../../media/google_interview.jpg";
import DropboxInterview from "../../media/dropbox_interview.jpg";

const images = [
  {
    original: TopGolf,
    caption: "HACS Social with Google at TopGolf, Fall 2019"
  },
  {
    original: DropboxInterview,
    caption: "Interview Prep with Dropbox"
  },
  {
    original: GoogleInterview,
    caption: "\"Demystifying the Technical Interview\" with Google"
  },
  {
    original: StudyNight,
    caption: "HACS networking event with ABCS, Fall 2019"
  }  
];

let handleSlide = (nextIndex) => {
  console.log("switching to slide " + nextIndex);
}

function ImageSlider() {

  const [captionIndex, updateCaptionIndex] = useState(0);

  return (
    <section className="slider">
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={1000}
        slideInterval={10000}
        onBeforeSlide={updateCaptionIndex}
      />
      <p className="caption">{images[captionIndex].caption}</p>
    </section>
  );
}

export default ImageSlider;
