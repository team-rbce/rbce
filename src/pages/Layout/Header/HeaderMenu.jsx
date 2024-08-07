import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

export default function HeaderMenu({ setIsMenuOpen, isMenuOpen }) {
  return (
    <button
      className={ `${isMenuOpen ? 'change' : ''} container flex sm:hidden` }
      onClick={ () => setIsMenuOpen((prevState) => !prevState) }
      aria-label="Toggle Menu"
    >
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </button>
  );
}

HeaderMenu.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
