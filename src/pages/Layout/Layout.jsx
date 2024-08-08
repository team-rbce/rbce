import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
/* import EmailButtonModal from './EmailModal/EmailButtonModal'; */

export default function Layout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      {/* Esta quebrado por enquanto */}
      {/* <EmailButtonModal /> */}
      <Footer />
    </>
  );
}
