import React, { useState } from 'react';
import propTypes from 'prop-types';
import HeaderNavItem from './HeaderNavItem';
import EmailModal from '../EmailModal/EmailModal';

export default function HeaderNavMenu({ isMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={ `${isMenuOpen ? 'block' : 'hidden'} sm:hidden absolute z-10 bg-background-primary-light w-full flex flex-col gap-4 text-xl justify-center px-4 pt-2 pb-6 font-Inter font-semibold shadow-bottom-only top-20` }>
      <HeaderNavItem>projetos</HeaderNavItem>
      <button onClick={ () => setIsOpen(!isOpen) } aria-label="Toggle Email Modal" className="hover:text-color-tertiary w-full text-left">fale conosco</button>
      <HeaderNavItem>quem somos</HeaderNavItem>
      <HeaderNavItem>nossa trajetoria</HeaderNavItem>
      {isOpen && <EmailModal setIsModalOpen={ setIsOpen } />}
    </nav>
  );
}

HeaderNavMenu.propTypes = {
  isMenuOpen: propTypes.bool.isRequired,
};
