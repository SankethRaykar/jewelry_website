import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="sticky top-0 z-[60] bg-primary-container text-on-primary-container py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[marquee_20s_linear_infinite] px-4 font-label-sm uppercase tracking-widest">
          Free shipping above ₹500 | Festive Sale: Up to 60% Off | Discover the Royal Heirloom Collection | Free shipping above ₹500 | Festive Sale: Up to 60% Off
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="sticky top-[40px] z-50 bg-surface/85 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-24">
          <div className="hidden md:flex gap-8 items-center">
            <a className="font-label-sm text-primary border-b-2 border-primary pb-1" href="#">Necklaces</a>
            <a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Earrings</a>
            <a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Bridal</a>
            <a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Collections</a>
          </div>
          
          <Link className="font-display-md text-display-md text-on-surface tracking-tighter uppercase" to="/">
            VIVAH LUXE
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant">
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-md ml-2 w-40" placeholder="Search heritage..." type="text"/>
            </div>
            <Link to="/admin" className="material-symbols-outlined text-on-surface hover:text-primary transition-all duration-300">person</Link>
            <button className="material-symbols-outlined text-on-surface hover:text-primary transition-all duration-300 relative" id="cart-trigger">
              shopping_bag
              <span className="absolute -top-1 -right-1 bg-sale-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">1</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
