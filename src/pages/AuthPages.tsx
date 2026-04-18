import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../CartContext';
import { formatCurrency, cn } from '../lib/utils';
import { Lock, ShieldCheck, ChevronRight, Apple, CreditCard, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-4xl font-black italic uppercase italic mb-8">Cart is Empty</h2>
        <Link to="/shop" className="text-brand-red border-b border-brand-red pb-1 font-bold uppercase text-xs">Return to Shop</Link>
      </div>
    );
  }

  const handleCheckout = () => {
    alert("This is a demonstration. Your order has been placed successfully!");
    clearCart();
    navigate('/');
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-black">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Checkout Form */}
        <div className="lg:col-span-12 lg:col-start-1 lg:col-end-9 space-y-12">
          <div className="flex items-center space-x-4 mb-12">
             {['Information', 'Shipping', 'Payment'].map((s, i) => (
                <React.Fragment key={s}>
                   <span className={cn(
                     "text-[10px] uppercase font-bold tracking-widest transition-colors",
                     step === i + 1 ? "text-white" : "text-white/20"
                   )}>{s}</span>
                   {i < 2 && <ChevronRight size={10} className="text-white/20" />}
                </React.Fragment>
             ))}
          </div>

          <div className="space-y-12">
            <section className="space-y-8">
              <div className="flex justify-between items-center bg-white/5 p-8 border border-white/10">
                 <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest mb-1">Express Checkout</h3>
                   <p className="text-[10px] text-white/40 uppercase">Secure your nexus items in seconds.</p>
                 </div>
                 <div className="flex space-x-4">
                    <button className="bg-black text-white p-4 border border-white/20 hover:bg-white hover:text-black transition-colors">
                      <Apple size={20} fill="currentColor" />
                    </button>
                    <button className="bg-white text-black p-4 hover:bg-brand-red hover:text-white transition-colors">
                       <span className="font-bold text-xs uppercase italic">Google Pay</span>
                    </button>
                 </div>
              </div>

              <div className="relative text-center py-4">
                 <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10"></div>
                 <span className="relative bg-brand-black px-4 text-[10px] text-white/20 uppercase font-black tracking-widest italic">OR CONTINUE WITH DATA</span>
              </div>

              <div className="space-y-6">
                 <h2 className="text-2xl font-black italic uppercase italic tracking-tighter">Shipping Address</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="FIRST NAME" className="bg-neutral-900 border border-white/10 p-4 text-xs font-mono outline-none focus:border-brand-red" />
                    <input type="text" placeholder="LAST NAME" className="bg-neutral-900 border border-white/10 p-4 text-xs font-mono outline-none focus:border-brand-red" />
                 </div>
                 <input type="text" placeholder="ADDRESS" className="w-full bg-neutral-900 border border-white/10 p-4 text-xs font-mono outline-none focus:border-brand-red" />
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input type="text" placeholder="CITY" className="bg-neutral-900 border border-white/10 p-4 text-xs font-mono outline-none focus:border-brand-red" />
                    <input type="text" placeholder="POSTCODE" className="bg-neutral-900 border border-white/10 p-4 text-xs font-mono outline-none focus:border-brand-red" />
                    <input type="text" placeholder="COUNTRY" className="bg-neutral-900 border border-white/10 p-4 text-xs font-mono outline-none focus:border-brand-red" />
                 </div>
              </div>
            </section>

            <div className="flex justify-between items-center pt-12">
               <Link to="/shop" className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">
                  <ChevronLeft size={16} />
                  <span>Back to shop</span>
               </Link>
               <button 
                onClick={handleCheckout}
                className="bg-brand-red text-white px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                  Complete Order
               </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 lg:col-start-9 space-y-8 lg:sticky lg:top-32 h-fit">
           <div className="p-8 bg-neutral-900/50 border border-white/10 space-y-8">
              <h3 className="text-xl font-black italic uppercase italic underline underline-offset-8 decoration-brand-red">Order Summary</h3>
              
              <div className="space-y-6 max-h-[40vh] overflow-y-auto hide-scrollbar">
                 {cart.map(item => (
                   <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-center gap-4">
                      <div className="relative">
                        <img src={item.images[0]} className="w-16 h-20 object-cover grayscale" alt={item.name} />
                        <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                           {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                         <h4 className="text-[10px] font-bold uppercase tracking-widest">{item.name}</h4>
                         <p className="text-[9px] text-white/40 uppercase">{item.selectedSize} / {item.selectedColor}</p>
                      </div>
                      <p className="text-xs font-mono">{formatCurrency(item.price * item.quantity)}</p>
                   </div>
                 ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                 <div className="flex justify-between text-xs text-white/60">
                    <span>Subtotal</span>
                    <span className="font-mono">{formatCurrency(totalPrice)}</span>
                 </div>
                 <div className="flex justify-between text-xs text-white/60">
                    <span>Shipping</span>
                    <span className="text-[10px] uppercase font-bold text-brand-red">Complimentary</span>
                 </div>
                 <div className="flex justify-between items-center pt-4 text-lg font-black italic">
                    <span className="uppercase italic tracking-tighter">Total</span>
                    <span className="font-mono text-2xl">{formatCurrency(totalPrice)}</span>
                 </div>
              </div>

              <div className="pt-8 space-y-4">
                 <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    <Lock size={14} className="text-brand-red" />
                    <span>End-to-end Encrypted Nexus</span>
                 </div>
                 <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    <ShieldCheck size={14} className="text-brand-red" />
                    <span>Verified Payment Protocols</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6 bg-brand-black">
       <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.5em] mb-8">Error Code: 404</span>
       <h1 className="text-8xl md:text-[15vw] font-black italic uppercase tracking-tighter leading-none mb-12">Lost in Nexus.</h1>
       <p className="text-white/40 uppercase tracking-[0.2em] text-sm font-light mb-12">
          The requested technical profile does not exist in our system.
       </p>
       <Link to="/shop" className="bg-white text-black px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-brand-red hover:text-white transition-all">
          Return to Hub
       </Link>
    </div>
  );
};
