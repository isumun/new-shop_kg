import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero/Hero';
import '../app/globals.css';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
