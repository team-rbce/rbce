import React from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderNav from './HeaderNav';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="flex px-3 py-4 justify-between items-center bg-background-primary-light sm:px-10 md:px-16 lg:px-24">
      <div className="flex items-center gap-2 text-[#3c4c41]">
        <Logo />
        <h1 className="font-LibreFranklinItalic font-black text-4xl tracking-tighter">rbce</h1>
      </div>
      <div className="font-LibreFranklin text-background-primary-dark">
        <HeaderMenu />
        <HeaderNav />
      </div>
    </header>
  );
}
