import React from 'react';
import Header from '../src/userpannel/header'
import { Outlet } from 'react-router-dom';
import Footer from '../src/userpannel/footer';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <a
        href="https://wa.me/917306066228"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}

export default App;
