import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Headercarousel = () => {
  return (
    <Carousel className="h-[50vh] m-auto w-1/2">
      <div className="h-[50vh]">
        <img src="https://cdn.pixabay.com/photo/2016/10/26/21/05/modern-kitchen-1772638__480.jpg" />
      </div>
      <div className="h-[50vh]">
        <img src="https://cdn.pixabay.com/photo/2014/11/11/05/28/dishwasher-526358__340.jpg" />
      </div>
    </Carousel>
  );
};

export default Headercarousel;
