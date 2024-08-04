import React from 'react';

import Title from '../../components/Title/Title';
import HomeCarousel from '../../components/Carousel/HomeCarousel/HomeCarousel';

export default function Home() {
  return (
    <div className="relative">
      <HomeCarousel />
      <div className="px-3 py-4 sm:px-10 md:px-16 lg:px-24 h-full">
        <div className="mb-20">
          <Title>Nossa causa</Title>
          <p className="text-lg font-Inter text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia rerum sequi facilis vitae fuga corrupti! Blanditiis veritatis earum eius aliquam quae repudiandae dignissimos, laborum, commodi qui ipsam cumque nesciunt dolore error asperiores rerum aut eum illo explicabo eos! Quod culpa id quas mollitia iure qui magnam veritatis laboriosam sit adipisci. Illo suscipit consequatur animi accusamus, voluptatum cumque quam aliquam magnam veritatis labore sit? Ullam veniam, eaque expedita ducimus cum quos!
          </p>
        </div>
        <Title>Alguns dados importantes</Title>
        <Title>Principais projetos</Title>
        <Title>Parceiros</Title>
        <Title>Redes sociais</Title>

      </div>
    </div>
  );
}
