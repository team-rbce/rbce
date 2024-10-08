import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function MainCard({ imagePath, title, description }) {
  return (
    <div className="relative text-background-primary-light md:max-h-[calc(100vh-30vh)]">
      <img src={ `/${imagePath}mobile.png` } alt="carousel item" className="w-full sm:hidden h-[calc(580px)] " draggable={ false } />
      <img src={ `/${imagePath}.png` } alt="carousel item" className="w-full hidden sm:block" draggable={ false } />
      <div className="absolute bg-background-primary-dark/40 bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 rounded-2xl font-Inter flex flex-col justify-center items-start gap-4 p-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-5rem)] md:w-[calc(100%-8rem)] lg:w-[calc(100%-12rem)]">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p>
          {description}
        </p>
        <Link
          to="/projects"
          className="px-6 p-3 rounded-md lowercase bg-color-tertiary hover:bg-color-primary mt-4 text-base font-semibold shadow-custom self-center sm:self-start"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
}

MainCard.propTypes = {
  imagePath: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
