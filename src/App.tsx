import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

// Components
import { Navigation, AnnouncementBar } from './components/Navigation';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { WhatsAppWidget } from './components/Widgets';
import { CustomCursor } from './components/CustomCursor';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Lookbook } from './pages/Lookbook';
import { About, FAQ, Contact } from './pages/InfoPages';
import { Checkout, NotFound } from './pages/AuthPages';

// Context
import { CartProvider } from './CartContext';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CookieConsent = () => {
  const [show, setShow] = React.useState(false);
  
  useEffect(() => {
    const consent = localStorage.getItem('odlx_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-[100] bg-brand-black border-t border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed max-w-2xl">
        Our nexus uses technical data packets (cookies) to optimize your architectural experience. By continuing, you agree to our data protocols.
      </p>
      <div className="flex space-x-6">
        <button 
          onClick={() => { setShow(false); localStorage.setItem('odlx_consent', 'true'); }}
          className="text-[10px] font-bold uppercase tracking-widest border-b border-white pb-1"
        >
          Accept Nexus Terms
        </button>
        <button onClick={() => setShow(false)} className="text-[10px] font-bold uppercase tracking-widest text-white/20">
          Decline
        </button>
      </div>
    </motion.div>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="relative selection:bg-brand-red selection:text-white">
          <CustomCursor />
          <ScrollToTop />
          <AnnouncementBar />
          <Navigation />
          
          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
                <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
                <Route path="/lookbook" element={<PageTransition><Lookbook /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <Cart />
          <WhatsAppWidget />
          <CookieConsent />
          
          {/* Artistic Flair Floating Badge */}
          <div className="fixed bottom-24 right-12 w-28 h-28 floating-badge z-[55] hidden md:flex">
             <span className="text-[10px] leading-tight font-bold tracking-widest text-brand-red uppercase">
               Quality<br />Guaranteed<br />•<br />ODLX
             </span>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
