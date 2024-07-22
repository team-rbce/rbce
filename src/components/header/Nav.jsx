import React from 'react';
import NavItem from './NavItem';

export default function Nav() {
  return (
    <nav className="hidden gap-4 text-lg list-none sm:flex lg:text-xl">
      <NavItem>projetos</NavItem>
      <NavItem>quem somos</NavItem>
      <NavItem>nossa trajetoria</NavItem>
    </nav>
  );
}
