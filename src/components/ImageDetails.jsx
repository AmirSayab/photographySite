import React from "react";
import Slider from "react-slick";
import "../styles/imageDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photography from "../images/photography.jpg";
import ImageDetailsContent from "./ImageDetailsContent";

export default function ImageDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="image-details-container">
      <h2>Portfolio</h2>
      <Slider {...settings}>
      <ImageDetailsContent
        img={photography}
        h3="Inner Peace"
        p1="Shangrila Lake, Skardu, Pakistan Published on February 28, 2023
              Shot on Nikon, D850"
        p2="Lens information: ƒ/8, ISO 400, 1/1000s"
        p3="Dimention: 5184 x 3888"
      />
      <ImageDetailsContent
        img={photography}
        h3="Inner Peace"
        p1="Shangrila Lake, Skardu, Pakistan Published on February 28, 2023
              Shot on Nikon, D850"
        p2="Lens information: ƒ/8, ISO 400, 1/1000s"
        p3="Dimention: 5184 x 3888"
      />
      <ImageDetailsContent
        img={photography}
        h3="Inner Peace"
        p1="Shangrila Lake, Skardu, Pakistan Published on February 28, 2023
              Shot on Nikon, D850"
        p2="Lens information: ƒ/8, ISO 400, 1/1000s"
        p3="Dimention: 5184 x 3888"
      />
      </Slider>
    </div>
  );
}
