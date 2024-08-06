import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProjectsCaroulsel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
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

    <Carousel responsive={ responsive } showDots keyBoardControl customTransition="all .5" transitionDuration={ 500 } infinite draggable={ false } renderDotsOutside arrows>

      <div className="h-72 bg-gray-500 w-full" />
      <div className="h-72 bg-gray-200 w-full" />
      <div className="h-72 bg-gray-300 w-full" />
      <div className="h-72 bg-gray-100 w-full" />

    </Carousel>

  );
}
