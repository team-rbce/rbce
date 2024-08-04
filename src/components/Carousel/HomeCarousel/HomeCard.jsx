import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function HomeCard({ imagePath }) {
  return (
    <div className="relative text-background-primary-light">
      <img src={ `/${imagePath}mobile.png` } alt="" className="w-full sm:hidden" />
      <img src={ `/${imagePath}.png` } alt="" className="w-full hidden sm:block" />
      <div className="absolute bg-background-primary-dark/40 bottom-10 left-1/2 transform -translate-x-1/2 rounded-2xl font-Inter flex flex-col justify-center items-start gap-4 p-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-5rem)] md:w-[calc(100%-8rem)] lg:w-[calc(100%-12rem)]">
        <h3 className="font-bold text-2xl">Chegaram os Licendiados RBCE!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ex fugiat nemo quos adipisci recusandae?
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

HomeCard.propTypes = {
  imagePath: propTypes.string.isRequired,
};
