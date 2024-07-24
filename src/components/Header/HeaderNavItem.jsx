import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeaderNavItem({ children }) {
  return (
    <NavLink
      to={ children.toLowerCase().replace(' ', '-') }
      className={ ({ isActive }) => `${isActive
        ? 'font-bold text-color-tertiary' : ''} hover:text-color-tertiary` }
    >
      {children}
    </NavLink>
  );
}

HeaderNavItem.propTypes = {
  children: PropTypes.string.isRequired,
};
