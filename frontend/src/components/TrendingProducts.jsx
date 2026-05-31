import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function TrendingProducts({ products }) {
  const sectionRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="reveal py-section-gap bg-surface-container-low overflow-hidden">
      <div className="px-margin-desktop max-w-container-max mx-auto mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg uppercase tracking-widest mb-2">Trending Now</h2>
          <p className="font-body-md text-on-surface-variant">The pieces everyone is talking about this season.</p>
        </div>
        <div className="flex gap-4">
          <button className="p-4 border border-outline-variant rounded-full hover:bg-primary hover:text-white transition-colors group cta-hover">
            <span className="material-symbols-outlined">west</span>
          </button>
          <button className="p-4 border border-outline-variant rounded-full hover:bg-primary hover:text-white transition-colors group cta-hover">
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>
      
      <div className="flex gap-gutter overflow-x-auto no-scrollbar px-margin-desktop pb-12">
        {products.map((product, idx) => (
          <div key={product.id} className="min-w-[320px] group product-card-shimmer">
            <div className="relative bg-white aspect-[3/4] overflow-hidden mb-4 rounded-lg">
              {idx === 0 && <span className="absolute top-4 left-4 z-10 bg-sale-accent text-white px-3 py-1 font-label-sm rounded-sm">NEW</span>}
              {idx === 1 && <span className="absolute top-4 left-4 z-10 bg-primary-container text-on-primary-container px-3 py-1 font-label-sm rounded-sm">COLLECTOR'S</span>}
              
              <Link to={`/product/${product.id}`}>
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={product.images?.[0] || 'https://via.placeholder.com/320x400'} 
                  alt={product.name} 
                />
              </Link>
              
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-on-background py-4 flex justify-center">
                <button 
                  onClick={() => addToCart(product)}
                  className="text-primary-container font-label-sm uppercase tracking-widest flex items-center gap-2 add-to-bag"
                >
                  Add to Bag <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                </button>
              </div>
            </div>
            <h3 className="font-body-lg font-bold mb-1">{product.name}</h3>
            <p className="font-label-sm text-primary mb-2">₹{product.sale_price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
