import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default function Title({ children }) {
  return (
    <h2 className="text-background-primary-dark font-semibold text-2xl font-Inter my-6 lowercase pl-6 sm:text-3xl relative ">
      {children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
