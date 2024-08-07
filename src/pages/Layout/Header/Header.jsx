import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HeaderNav from './HeaderNav';
import Logo from '../../../components/Logo/Logo';
import HeaderNavMenu from './HeaderNavMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex px-3 py-4 justify-between items-center bg-background-primary-light sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center gap-2 text-[#3c4c41]">
          <Logo />
          <h1 className="font-LibreFranklinItalic font-black text-4xl tracking-tighter"><Link to="/">rbce</Link></h1>
        </div>
        <div className="font-LibreFranklin text-background-primary-dark">
          <HeaderMenu setIsMenuOpen={ setIsMenuOpen } isMenuOpen={ isMenuOpen } />
          <HeaderNav />
        </div>
      </header>
      <HeaderNavMenu isMenuOpen={ isMenuOpen } />
    </>
  );
}
