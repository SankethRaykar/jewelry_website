import React, { useEffect, useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSummaryCards from '../components/admin/AdminSummaryCards';
import AdminChartsAndAlerts from '../components/admin/AdminChartsAndAlerts';
import AdminRecentOrders from '../components/admin/AdminRecentOrders';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    // Fetch products for count and low stock alerts
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
      
    // Fetch orders if the backend endpoint exists, otherwise we'll fall back to mock data
    fetch(`${API_URL}/api/orders`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setOrders(data);
      })
      .catch(err => console.log('Orders endpoint might not be seeded yet', err));
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <AdminSidebar />
      <main className="ml-64 flex-1 p-8">
        <AdminHeader />
        <AdminSummaryCards productCount={products.length} />
        <AdminChartsAndAlerts products={products} />
        <AdminRecentOrders orders={orders} />
      </main>
    </div>
  );
}
