import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(console.error);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.images?.[0] || 'https://via.placeholder.com/400'} alt={product.name} className="max-w-md rounded-lg" />
      <p className="mt-4 text-xl">₹{product.sale_price}</p>
      <button className="mt-4 bg-[#755b00] text-white px-6 py-2 rounded-lg">Add to Cart</button>
    </div>
  );
}
