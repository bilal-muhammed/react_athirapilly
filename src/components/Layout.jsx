import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet /> {/* This is where page content will render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
