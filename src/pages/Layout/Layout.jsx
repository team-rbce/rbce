import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EmailButtonModal from '../../components/EmailModal/EmailButtonModal';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="px-3 py-4 sm:px-10 md:px-16 lg:px-24 h-full relative">
        <Outlet />
      </main>
      <EmailButtonModal />
      <Footer />
    </>
  );
}
