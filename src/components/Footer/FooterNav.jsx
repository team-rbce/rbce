import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FooterNav() {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center w-full sm:flex-row sm:gap-4 sm:justify-between md:w-fit">
      <p className="font-bold italic text-3xl tracking-tighter sm:font-extrabold ">rbce</p>
      <nav className="flex flex-col justify-center items-center gap-2 my-2 sm:flex-row sm:gap-4">
        <NavLink to="nossos-projetos" className="hover:text-color-tertiary">projetos</NavLink>
        <NavLink to="quem-somos" className="hover:text-color-tertiary">quem somos</NavLink>
        <NavLink to="timeline" className="hover:text-color-tertiary">nossa trajetória</NavLink>
      </nav>
    </div>
  );
}
