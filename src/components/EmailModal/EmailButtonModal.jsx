import React, { useState } from 'react';
import EmailModal from './EmailModal';

export default function EmailButtonModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className="flex items-center justify-center cursor-pointer absolute bottom-72 right-3 w-14 h-14 rounded-full bg-[#00923E] z-10 sm:right-10 sm:bottom-52 md:bottom-40 md:right-16 lg:right-24" onClick={ () => setIsModalOpen(!isModalOpen) } aria-label="contact modal">
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14.0001L20.4 23.3C22.5334 24.9 25.4666 24.9 27.6 23.3L40 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 10H10C7.79086 10 6 11.7909 6 14V34C6 36.2091 7.79086 38 10 38H38C40.2091 38 42 36.2091 42 34V14C42 11.7909 40.2091 10 38 10Z" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
      {isModalOpen && <EmailModal setIsModalOpen={ setIsModalOpen } />}
    </>

  );
}
