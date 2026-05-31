import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    // Scroll to top when loading a new product
    window.scrollTo(0, 0);
    setLoading(true);
    fetch(`${API_URL}/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center items-center py-section-gap">
          <h2 className="font-headline-lg text-headline-lg mb-4 text-error">Product Not Found</h2>
          <Link to="/" className="text-primary hover:underline uppercase tracking-widest font-label-sm">Return to Collections</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Product Image Gallery (Simplified to single large image for now) */}
          <div className="bg-surface-white rounded-xl overflow-hidden shadow-sm sticky top-32">
            <img 
              src={product.images?.[0] || 'https://via.placeholder.com/600x800'} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-[3/4]" 
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col pt-8">
            <div className="mb-2 flex items-center gap-2 text-on-surface-variant font-label-sm uppercase tracking-widest">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span>Jewellery</span>
            </div>
            
            <h1 className="font-headline-lg text-[40px] leading-tight text-on-surface mb-4">{product.name}</h1>
            <p className="font-headline-md text-3xl text-primary mb-8">₹{product.sale_price}</p>
            
            <div className="h-px w-full bg-outline-variant mb-8"></div>
            
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {product.description || "An exquisite piece of craftsmanship, designed to elevate your elegance. This stunning creation from our royal heritage collection is a perfect blend of traditional artistry and contemporary sophistication."}
            </p>
            
            {/* Features (Mocked for luxury feel) */}
            <ul className="space-y-4 mb-10 text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span>Authentic Hallmarked Gold</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">workspace_premium</span>
                <span>Lifetime Exchange Policy</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <span>Insured Express Delivery</span>
              </li>
            </ul>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-primary text-white py-5 font-label-sm uppercase tracking-widest rounded-lg cta-hover flex justify-center items-center gap-2 mb-6 shadow-lg hover:shadow-xl transition-all"
            >
              Add to Bag <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            
            <button className="w-full border border-primary text-primary py-5 font-label-sm uppercase tracking-widest rounded-lg hover:bg-primary-fixed/10 transition-colors">
              Book a Virtual Appointment
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
