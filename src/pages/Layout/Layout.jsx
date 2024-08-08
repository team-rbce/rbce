import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import EmailButtonModal from './EmailModal/EmailButtonModal';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Esta quebrado por enquanto */}
      <EmailButtonModal />
    </>
  );
}
