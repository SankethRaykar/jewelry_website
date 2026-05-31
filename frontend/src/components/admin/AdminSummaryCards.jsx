import React from 'react';

export default function AdminSummaryCards({ productCount }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-10">
      {/* Total Revenue */}
      <div className="bg-surface-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-primary-fixed/30 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" data-icon="payments" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
          </div>
          <span className="text-primary font-bold text-label-sm">+12.5%</span>
        </div>
        <h3 className="text-on-surface-variant font-label-sm uppercase tracking-wider">Total Revenue</h3>
        <p className="font-headline-md text-headline-md text-on-surface mt-1">₹42,85,200</p>
      </div>
      
      {/* Total Orders */}
      <div className="bg-surface-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-secondary-container rounded-lg text-secondary group-hover:bg-on-secondary-container group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" data-icon="local_mall" style={{ fontVariationSettings: "'FILL' 1" }}>local_mall</span>
          </div>
          <span className="text-primary font-bold text-label-sm">+8.1%</span>
        </div>
        <h3 className="text-on-surface-variant font-label-sm uppercase tracking-wider">Total Orders</h3>
        <p className="font-headline-md text-headline-md text-on-surface mt-1">1,482</p>
      </div>
      
      {/* Active Products */}
      <div className="bg-surface-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-tertiary-fixed rounded-lg text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" data-icon="diamond" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
          </div>
          <span className="text-secondary font-bold text-label-sm">Stable</span>
        </div>
        <h3 className="text-on-surface-variant font-label-sm uppercase tracking-wider">Active Products</h3>
        <p className="font-headline-md text-headline-md text-on-surface mt-1">{productCount}</p>
      </div>
      
      {/* New Customers */}
      <div className="bg-surface-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-on-tertiary-fixed/10 rounded-lg text-on-tertiary-fixed-variant group-hover:bg-on-tertiary-fixed-variant group-hover:text-white transition-colors">
            <span className="material-symbols-outlined" data-icon="person_add" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
          </div>
          <span className="text-primary font-bold text-label-sm">+24.0%</span>
        </div>
        <h3 className="text-on-surface-variant font-label-sm uppercase tracking-wider">New Customers</h3>
        <p className="font-headline-md text-headline-md text-on-surface mt-1">186</p>
      </div>
    </section>
  );
}
