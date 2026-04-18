import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, User, Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';
import { cn } from '../lib/utils';

export const AnnouncementBar = () => {
  return (
    <div className="bg-brand-red text-white py-2 px-4 text-center text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden whitespace-nowrap z-[60] relative">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        Complimentary express worldwide shipping on orders over $500 &mdash; New winter drop available now &mdash; Join ODLX circle for exclusive early access &mdash; Complimentary express worldwide shipping on orders over $500
      </motion.div>
    </div>
  );
};

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'New In', path: '/shop?filter=new' },
    { name: 'Collections', path: '/shop' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'About', path: '/about' },
    { name: 'Sale', path: '/shop?filter=sale', className: 'text-brand-red' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-brand-black/80 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.2em] hover:text-brand-red transition-colors",
                location.pathname === link.path ? "active-link" : "opacity-70",
                link.className
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link 
          to="/" 
          className="absolute left-1/2 -translate-x-1/2 group"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none group-hover:text-brand-red transition-colors">
            ODLX
          </h1>
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="hidden md:block hover:text-brand-red transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden md:block hover:text-brand-red transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-brand-red transition-colors">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="relative flex items-center space-x-1 group"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-brand-red transition-colors" />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-brand-red text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[100] bg-brand-black flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-3xl font-black">ODLX</h1>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "text-4xl serif font-light tracking-tight hover:text-brand-red",
                    link.className
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto border-t border-white/10 pt-8 flex space-x-6">
              <User size={24} />
              <Search size={24} />
              <Heart size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
