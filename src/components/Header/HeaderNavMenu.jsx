import React from 'react';
import propTypes from 'prop-types';
import HeaderNavItem from './HeaderNavItem';

export default function HeaderNavMenu({ isMenuOpen }) {
  return (
    <nav className={ `${isMenuOpen ? 'block' : 'hidden'} absolute z-10 bg-background-primary-light w-full flex flex-col gap-4 text-xl justify-center px-4 pt-2 pb-6 font-Inter font-semibold shadow-bottom-only` }>
      <HeaderNavItem>projetos</HeaderNavItem>
      <HeaderNavItem>quem somos</HeaderNavItem>
      <HeaderNavItem>nossa trajetoria</HeaderNavItem>
    </nav>
  );
}

HeaderNavMenu.propTypes = {
  isMenuOpen: propTypes.bool.isRequired,
};
