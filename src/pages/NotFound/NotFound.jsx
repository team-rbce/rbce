import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-screen gap-10">
      <Logo />
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-background-primary-dark text-5xl font-extrabold text-center">Página não encontrada</p>
        <p className="text-background-primary-dark text-lg md:text-xl text-center">Não encontramos a página que você queria.</p>
        <Link to="/" className="bg-background-primary-dark p-3 text-background-primary-light font-semibold px-8 rounded-full mt-8 md:text-xl">Início</Link>
      </div>
    </div>
  );
}
