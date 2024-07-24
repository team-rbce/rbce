import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';
import FooterSocialLinks from './FooterSocialLinks';

export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap px-3 py-4 justify-between items-center bg-background-primary-dark text-white font-Inter  absolute bottom-0 w-full md:flex-row sm:px-10 md:px-16 lg:px-24">
      <FooterNav />
      <FooterSocialLinks />
      <Link to="time-de-desenvolvimento" className="text-sm underline opacity-60 md:self-end md:w-full md:text-right">desenvolvido por Ana, Filipe, Samuel e Yan</Link>
    </footer>
  );
}
