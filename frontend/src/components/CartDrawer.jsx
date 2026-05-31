import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm transition-opacity duration-300 opacity-100" 
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[101] shadow-2xl p-8 flex flex-col transform translate-x-0 transition-transform duration-300">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-headline-md text-headline-md uppercase tracking-widest">Shopping Bag</h3>
          <button 
            className="material-symbols-outlined text-on-surface hover:text-primary transition-colors"
            onClick={() => setIsCartOpen(false)}
          >
            close
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
          {cart.length === 0 ? (
            <p className="text-on-surface-variant font-body-md text-center py-10">Your shopping bag is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-center">
                <div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden">
                  <img 
                    src={item.product.images?.[0] || 'https://via.placeholder.com/100'} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Link to={`/product/${item.product.id}`} onClick={() => setIsCartOpen(false)}>
                    <h4 className="font-body-md font-semibold hover:text-primary transition-colors">{item.product.name}</h4>
                  </Link>
                  <p className="text-primary font-label-sm">₹{item.product.sale_price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      className="text-on-surface border border-outline-variant rounded px-2 hover:bg-surface-container"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >-</button>
                    <span className="text-label-sm text-on-surface-variant">{item.quantity}</span>
                    <button 
                      className="text-on-surface border border-outline-variant rounded px-2 hover:bg-surface-container"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >+</button>
                  </div>
                </div>
                <button 
                  className="material-symbols-outlined text-outline text-sm hover:text-error transition-colors"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  delete
                </button>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="pt-8 border-t border-outline-variant space-y-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-primary text-white py-5 font-label-sm uppercase tracking-widest rounded-lg cta-hover">
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
}
