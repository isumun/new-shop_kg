'use client';
import { Product } from '../types/common';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { productsAPI } from '@/lib/product';
import { formatCurrency } from '@/utils/formatCurrency';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
