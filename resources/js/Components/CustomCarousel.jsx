import React, { useState, useEffect } from 'react';
import { Carousel } from "flowbite-react";

const CustomCarousel = () => {
  return (
    <div className="h-[800px] ">
      <Carousel slideInterval={10000} pauseOnHover>
        <img src="p/p1.jpg" alt="..." />
        <img src="p/p2.jpg" alt="..." />
        <img src="p/p3.jpg" alt="..." />
        <img src="p/p4.jpg" alt="..." />
        <img src="p/p5.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
