import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import CategoryGrid from '../components/CategoryGrid';
import TrendingProducts from '../components/TrendingProducts';
import FeaturedBanner from '../components/FeaturedBanner';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Header />
      <HeroCarousel />
      <CategoryGrid />
      <TrendingProducts products={products} />
      <FeaturedBanner />
      <Newsletter />
      <Footer />
    </div>
  );
}
