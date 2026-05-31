import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 space-y-6 bg-surface-container dark:bg-surface-container-highest border-r border-outline-variant dark:border-outline w-64 z-50">
      <div className="flex flex-col space-y-1 mb-4">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">Admin Suite</h1>
        <p className="text-on-surface-variant font-label-sm text-label-sm">VIVAH Operations</p>
      </div>
      <nav className="flex-1 space-y-1">
        {/* Active Navigation */}
        <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-xl font-bold translate-x-1 duration-200">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-label-sm text-label-sm">Dashboard</span>
        </Link>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-colors duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="diamond">diamond</span>
          <span className="font-label-sm text-label-sm">Inventory</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-colors duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          <span className="font-label-sm text-label-sm">Orders</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-colors duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="group">group</span>
          <span className="font-label-sm text-label-sm">Customers</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-colors duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
          <span className="font-label-sm text-label-sm">Analytics</span>
        </a>
      </nav>
      <div className="pt-6 border-t border-outline-variant space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-colors duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="font-label-sm text-label-sm">Settings</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-colors duration-200" href="#">
          <span className="material-symbols-outlined" data-icon="help">help</span>
          <span className="font-label-sm text-label-sm">Support</span>
        </a>
        <div className="flex items-center gap-3 px-4 py-4 mt-4">
          <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden ring-2 ring-primary/20">
            <img alt="Admin User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz1rFGq_bp9tRz4fjIqkxLLQPEEoQkMRm6OBZ1wAw38VXQuCCLQ8iTg3rsMmSDsIvQlDftYHMzbPdqmj-U5RZUigv11VV854DkkxU_KfDjc1U4uZDv3GoL8i7b9U1I8Jk88bLzAMscnOOSStnEt3nAMK3dU0_amo6PxzK9XkhAlWkLVXzUcHL-fIYHoo36X-WjvgRZmy5wXEa83zUHE9Y2CG04TY1gezmzWL9Q1jnR2Tftf8VUp2v2q_pg2QvV_phIN_FiWLNkTDIt"/>
          </div>
          <div className="flex flex-col">
            <span className="text-on-surface font-bold text-label-sm">Devan R.</span>
            <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Operations lead</span>
          </div>
        </div>
        <div className="mt-4 px-4">
          <Link to="/" className="text-primary hover:underline font-label-sm text-xs">← Back to Storefront</Link>
        </div>
      </div>
    </aside>
  );
}
