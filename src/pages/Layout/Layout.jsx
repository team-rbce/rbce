import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EmailButtonModal from '../../components/EmailButtonModal/EmailButtonModal';

export default function Layout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="px-3 py-4 sm:px-10 md:px-16 lg:px-24 h-full relative">
        <EmailButtonModal />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
