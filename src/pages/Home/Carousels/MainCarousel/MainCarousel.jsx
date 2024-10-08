import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MainCard from './MainCard';

export default function MainCarousel() {
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
    <div className="pb-8 relative md:max-h-[calc(100vh-30vh)]">
      <Carousel responsive={ responsive } keyBoardControl transitionDuration={ 500 } autoPlay draggable removeArrowOnDeviceType={ ['mobile'] } renderArrowsWhenDisabled={ false }>

        <MainCard imagePath="photo01" title="Chegaram os Licendiados RBCE!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ex fugiat nemo quos adipisci recusandae?" />
        <MainCard imagePath="photo01" title="Chegaram os Licendiados RBCE!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ex fugiat nemo quos adipisci recusandae?" />
        <MainCard imagePath="photo01" title="Chegaram os Licendiados RBCE!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ex fugiat nemo quos adipisci recusandae?" />
        <MainCard imagePath="photo01" title="Chegaram os Licendiados RBCE!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ex fugiat nemo quos adipisci recusandae?" />

      </Carousel>

    </div>
  );
}
