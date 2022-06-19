import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Singleproductcarousel = ({ image1, image2, image3 }) => {
  return (
    <Carousel className="h-[50vh] m-auto w-1/2">
      <div className="h-[50vh]">
        <img src={image1} />
      </div>
      <div className="h-[50vh]">
        <img src={image2} />
      </div>
      <div className="h-[50vh]">
        <img src={image3} />
      </div>
    </Carousel>
  );
};

export default Singleproductcarousel;
