import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#fdf9f3] min-h-screen p-8 text-[#1c1c18]">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display' }}>BlingLux Ethnic Jewelry</h1>
        <Link to="/admin" className="text-[#755b00] underline">Admin Login</Link>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-xl border border-[#d0c5b2]">
            <img src={p.images?.[0] || 'https://via.placeholder.com/300'} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="font-bold">{p.name}</h3>
            <p>₹{p.sale_price} <span className="line-through text-gray-400">₹{p.mrp}</span></p>
            <Link to={`/product/${p.id}`} className="block mt-4 text-center bg-[#755b00] text-white py-2 rounded-lg">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
