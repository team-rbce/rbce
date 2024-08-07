import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProjectsCaroulsel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (

    <Carousel responsive={ responsive } showDots keyBoardControl transitionDuration={ 500 } draggable renderDotsOutside arrows removeArrowOnDeviceType={ ['tablet', 'mobile'] }>
      <div className="h-72 bg-red-200 w-full rounded-2xl shadow-sm" />
      <div className="h-72 bg-gray-200 w-full rounded-2xl shadow-sm" />
      <div className="h-72 bg-gray-300 w-full rounded-2xl shadow-sm" />

    </Carousel>

  );
}
