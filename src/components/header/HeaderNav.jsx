import React from 'react';
import HeaderNavItem from './HeaderNavItem';

export default function HeaderNav() {
  return (
    <nav className="hidden gap-4 text-lg list-none sm:flex lg:text-xl">
      <HeaderNavItem>projetos</HeaderNavItem>
      <HeaderNavItem>quem somos</HeaderNavItem>
      <HeaderNavItem>nossa trajetoria</HeaderNavItem>
    </nav>
  );
}
