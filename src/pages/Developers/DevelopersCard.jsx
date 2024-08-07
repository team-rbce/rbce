import React from 'react';
import PropTypes from 'prop-types';

export default function DevelopersCard({ name, description, socials }) {
  return (
    <div>
      <img src="" alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        {socials.map((social) => (
          <a href={ social } key={ social } target="_blank" aria-label="Social Link">
            <img src="" alt="" />
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
};
