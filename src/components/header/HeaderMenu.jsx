/* eslint-disable max-len */
import React from 'react';
import './Menu.css';

export default function HeaderMenu() {
  const handleOpenMenu = () => {
    const menu = document.querySelector('.container');
    menu.classList.toggle('change');
  };

  return (
    <button className="container flex sm:hidden" onClick={ handleOpenMenu } aria-label="Toggle Menu">
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </button>
  );
}
