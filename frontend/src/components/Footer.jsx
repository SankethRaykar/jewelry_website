import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant">
      <div className="w-full py-section-gap px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="flex flex-col space-y-6">
          <span className="font-display-md text-display-md text-primary uppercase">VIVAH LUXE</span>
          <p className="font-body-md text-on-surface-variant">Defining ethnic luxury for the global connoisseur. Craftsmanship that bridges centuries.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 border border-outline-variant rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 border border-outline-variant rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-label-sm uppercase tracking-widest text-on-surface">Collections</h4>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Temple Jewellery</a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Kundan Polki</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-label-sm uppercase tracking-widest text-on-surface">Customer Care</h4>
          <a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Shipping &amp; Returns</a>
          <a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Us</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-label-sm uppercase tracking-widest text-on-surface">Our Boutique</h4>
          <p className="font-body-md text-on-surface-variant">102 Royal Arcade, Heritage District<br/>Jaipur, Rajasthan 302001</p>
          <p className="font-body-md text-on-surface-variant">+91 141 555 LUXE</p>
        </div>
      </div>
      <div className="w-full border-t border-outline-variant py-8 px-margin-desktop text-center">
        <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">© 2024 VIVAH LUXE JEWELLERY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
