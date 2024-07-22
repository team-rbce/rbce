/* eslint-disable max-len */
import React from 'react';
import Menu from './Menu';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="flex px-3 py-4 justify-between items-center bg-[#fafafa] sm:px-10 md:px-16 lg:px-24">
      <div className="flex items-center gap-2 text-[#3c4c41]">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24.7939" y="12.0615" width="18.8092" height="6.89231" fill="#9BD9A9" />
          <rect x="30.7788" y="24.9844" width="18.9538" height="6.83969" transform="rotate(-90 30.7788 24.9844)" fill="#9BD9A9" />
          <rect x="18.3818" y="24.9844" width="18.8092" height="6.89231" fill="#F3FE6B" />
          <rect x="24.3667" y="37.9076" width="18.9538" height="6.83969" transform="rotate(-90 24.3667 37.9076)" fill="#F3FE6B" />
          <rect x="5.98486" y="18.0925" width="18.8092" height="6.89231" fill="#9BD9A9" />
          <rect x="11.9697" y="31.0156" width="18.9538" height="6.83969" transform="rotate(-90 11.9697 31.0156)" fill="#9BD9A9" />
          <rect y="31.0156" width="18.8092" height="6.89231" fill="#4CBF6C" />
          <rect x="5.98486" y="43.9387" width="18.9538" height="6.83969" transform="rotate(-90 5.98486 43.9387)" fill="#4CBF6C" />
          <rect x="11.9695" y="6.03076" width="18.8092" height="6.89231" fill="#4CBF6C" />
          <rect x="17.9541" y="18.9539" width="18.9538" height="6.83969" transform="rotate(-90 17.9541 18.9539)" fill="#4CBF6C" />
          <rect x="31.2061" y="31.0156" width="18.8092" height="6.89231" fill="#4CBF6C" />
          <rect x="37.1909" y="43.9387" width="18.9538" height="6.83969" transform="rotate(-90 37.1909 43.9387)" fill="#4CBF6C" />
          <rect x="37.1909" y="18.0925" width="18.8092" height="6.89231" fill="#70CB86" />
          <rect x="43.1758" y="31.0156" width="18.9538" height="6.83969" transform="rotate(-90 43.1758 31.0156)" fill="#70CB86" />
          <rect x="12.397" y="37.0463" width="18.8092" height="6.89231" fill="#70CB86" />
          <rect x="18.3818" y="49.9692" width="18.9538" height="6.83969" transform="rotate(-90 18.3818 49.9692)" fill="#70CB86" />
          <rect x="25.2212" y="43.077" width="18.8092" height="6.89231" fill="#9BD9A9" />
          <rect x="31.2061" y="56.0001" width="18.9538" height="6.83969" transform="rotate(-90 31.2061 56.0001)" fill="#9BD9A9" />
        </svg>
        <h1 className="font-LibreFranklinItalic font-black text-4xl tracking-tighter">rbce</h1>
      </div>
      <div className="font-LibreFranklin text-[#232323]">
        <Menu />
        <Nav />
      </div>
    </header>
  );
}
