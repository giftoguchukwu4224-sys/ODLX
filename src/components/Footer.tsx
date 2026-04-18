import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black">ODLX</h2>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Premium luxury streetwear defined by technical precision and editorial aesthetics. Built for the modern nomad.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, color: '#FF0000' }}
                  className="text-white/40 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-brand-red">Shop</h3>
            <ul className="space-y-4">
              {['New Arrivals', 'Outerwear', 'Tops', 'Bottoms', 'Accessories', 'Archive'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-brand-red">Help</h3>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="/faq" className="text-sm text-white/60 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-brand-red">Nexus Newsletter</h3>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Join the nexus for early drop access and exclusive editorial content.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors font-mono"
              />
              <button 
                type="submit"
                className="absolute right-0 bottom-3 text-brand-red hover:translate-x-1 transition-transform"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            &copy; {currentYear} ODLX STUDIO &mdash; ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center space-x-6">
            {/* Payment Icons Placeholder */}
            {['Apple Pay', 'Google Pay', 'Stripe', 'Visa', 'Mastercard'].map(p => (
              <span key={p} className="text-[9px] text-white/20 uppercase">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
