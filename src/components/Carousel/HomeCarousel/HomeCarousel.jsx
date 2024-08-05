import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeCard from './HomeCard';

export default function HomeCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={ responsive } showDots keyBoardControl customTransition="all .5" transitionDuration={ 500 } infinite autoPlay draggable={ false }>

      <HomeCard imagePath="photo01" />
      <HomeCard imagePath="photo01" />
      <HomeCard imagePath="photo01" />
      <HomeCard imagePath="photo01" />

    </Carousel>
  );
}
