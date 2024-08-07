import React from 'react';
import PropTypes from 'prop-types';

export default function DevelopersCard({ imagePath, name, description, socials }) {
  return (
    <div style={ { boxShadow: 'rgba(0, 0, 0, 0.301) 0px 4px 12px' } } className="flex flex-col items-center font-Inter bg-white rounded-2xl p-4 gap-4">
      <img src={ imagePath } alt={ `${name}avatar` } className="rounded-full h-20 w-20" />
      <h3 className="font-semibold text-xl text-background-primary-dark">{name}</h3>
      <p className="text-[#787878] text-center">{description}</p>
      <div className="flex">
        {socials.map((social) => (
          <a href={ social } key={ social } target="_blank" aria-label="Social Link">
            <img src="/linkedin.png" alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}

DevelopersCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
};
