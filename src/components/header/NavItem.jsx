import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavItem({ children }) {
  return (
    <NavLink
      to={ children.toLowerCase().replace(' ', '-') }
      className={ ({ isActive }) => `${isActive
        ? 'font-bold text-[#00923E]' : ''} hover:text-[#00923E]` }
    >
      {children}
    </NavLink>
  );
}

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
};
