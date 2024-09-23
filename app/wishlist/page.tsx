import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WishlistPage from '@/components/WishlistPage';
import '../../app/globals.css';
import WishJustPage from '@/components/WishJustPage';

function Wishlist() {
  return (
    <>
      <Header />
      <WishlistPage />
      <WishJustPage />
      <Footer />
    </>
  );
}

export default Wishlist;
