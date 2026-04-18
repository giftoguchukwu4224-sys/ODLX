import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Sidebar */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-black z-[101] flex flex-col border-l border-white/10"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-black italic uppercase italic">Cart</h3>
                <span className="text-[10px] bg-white text-black px-2 py-0.5 font-bold rounded-full">
                  {totalItems}
                </span>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 hide-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <ShoppingBag size={48} className="text-white/10" />
                  <p className="text-white/40 uppercase tracking-widest text-xs">Your nexus is currently empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-brand-red text-xs font-bold uppercase tracking-widest border-b border-brand-red pb-1"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6">
                    <div className="bg-neutral-900 w-24 h-32 flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold uppercase tracking-widest">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="text-white/20 hover:text-brand-red transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wide">
                        {item.selectedSize} / {item.selectedColor}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-4 border border-white/10 px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}>
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-mono">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}>
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-xs font-mono">{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-neutral-950 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Estimated Total</span>
                  <span className="text-xl font-mono">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="space-y-4">
                  <Link 
                    to="/checkout" 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-brand-red text-white py-4 font-black uppercase tracking-[0.2em] text-center flex items-center justify-center space-x-4 group"
                  >
                    <span>Initiate Checkout</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <p className="text-[9px] text-center text-white/20 uppercase tracking-widest leading-relaxed">
                    Tax & shipping calculated at final step. Nexus security active.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
