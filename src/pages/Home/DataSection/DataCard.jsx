import React from 'react';
import PropTypes from 'prop-types';

export default function DataCard({ title, description }) {
  return (
    <div className="ring-1 ring-color-tertiary p-4 rounded-lg">
      <h3 className="text-lg font-Inter font-bold">{title}</h3>
      <p className="text-base font-Inter">{description}</p>
    </div>
  );
}

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
