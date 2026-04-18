import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Marquee } from '../components/Widgets';
import { products } from '../data/products';
import { formatCurrency } from '../lib/utils';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  const featuredProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="bg-brand-black min-h-screen">
      {/* Hero Section - Split Grid to match Artistic Flair */}
      <section className="relative h-screen grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] pt-[100px]">
        {/* Left Side: Hero content */}
        <div className="relative flex flex-col justify-end p-12 border-r border-white/10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em]">Spring / Summer 2024</span>
            <h1 className="text-[112px] font-black tracking-[-0.04em] uppercase italic leading-[0.9]">
              Raw<br />Elegance.
            </h1>
            <p className="text-sm md:text-lg font-light tracking-wide max-w-md text-white/60 leading-relaxed">
              Merging high-fashion silhouettes with industrial street culture. A study in obsidian fabrics and structural minimalism.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-6 pt-8">
              <Link 
                to="/shop" 
                className="bg-brand-red text-white px-10 py-5 font-black uppercase tracking-[0.2em] group flex items-center space-x-4 hover:scale-105 transition-transform"
              >
                <span>Explore Nexus</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Stats Strip */}
            <div className="flex justify-between border-t border-white/10 pt-8 mt-12">
              <div className="flex flex-col">
                <span className="text-xl font-serif">12</span>
                <span className="text-[9px] uppercase opacity-50 tracking-widest">Exclusive Pieces</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif">Tokyo</span>
                <span className="text-[9px] uppercase opacity-50 tracking-widest">Origin City</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif">04</span>
                <span className="text-[9px] uppercase opacity-50 tracking-widest">Annual Release</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Editorial Sidebar */}
        <div className="editorial-sidebar-bg p-12 hidden lg:flex flex-col justify-between items-center border-b border-white/5 z-10">
          <div className="w-full">
            <div className="product-card-bg p-8 border border-white/5 relative group">
              <span className="absolute top-4 right-4 bg-brand-red text-white text-[9px] font-bold px-2 py-1 uppercase">Limited Edition</span>
              <div className="aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
                 <img src={products[0].images[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Sidebar Pick" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                   <div className="font-serif text-xl">{products[0].name}</div>
                   <div className="text-sm opacity-60 font-mono">{formatCurrency(products[0].price)}</div>
                </div>
              </div>
              <button className="w-full mt-6 bg-brand-offwhite text-brand-black font-bold text-xs uppercase tracking-widest py-4 hover:bg-brand-red hover:text-white transition-colors">
                Add to Bag
              </button>
            </div>
          </div>

          <div className="space-y-4 text-left w-full">
            <p className="text-[11px] text-brand-red uppercase tracking-widest">Brand Statement</p>
            <p className="font-serif text-2xl italic leading-tight text-white/90">
              "We don't follow trends; we define the void they leave behind. ODLX is the uniform for the modern minimalist."
            </p>
          </div>
        </div>

        {/* Background Parallax Image */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-x-0 top-0 h-full z-0 opacity-40 pointer-events-none"
        >
          <img 
            src="https://picsum.photos/seed/odlx-hero/1920/1080?blur=4" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 z-20"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Social Proof Marquee */}
      <Marquee text="ODLX Nexus • High-Performance Streetwear • Editorial Architecture • Defined by Precision •" />

      {/* Featured Collections Grid */}
      <section className="py-32 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">Drop 024</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">New Arrivals</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-brand-red hover:border-brand-red transition-all">
            See All Items
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Statement / Video Section */}
      <section className="relative py-48 bg-neutral-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-6xl serif font-light italic leading-tight">
                "Functionality is not just an attribute; it is the <span className="text-brand-red">architectural spine</span> of everything we build."
              </h2>
              <p className="text-white/40 text-lg leading-relaxed font-light">
                ODLX exists at the intersection of high-fashion editorial and technical performance. Every seam, every textile, and every silhouette is intentional. We don't just follow trends; we define the landscape of the modern nomad.
              </p>
              <div className="flex items-center space-x-12 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-black mb-1">98%</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Technical Index</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-1">04+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Global Hubs</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video bg-neutral-800"
            >
              <img 
                src="https://picsum.photos/seed/editorial1/1200/800" 
                alt="Editorial Clip" 
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-red/40"
                >
                  <Play size={32} fill="white" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lookbook Teaser */}
      <section className="py-32 grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[80vh] overflow-hidden group">
          <img src="https://picsum.photos/seed/look1/800/1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Campaign 01" />
          <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors" />
          <div className="absolute bottom-12 left-12">
            <h3 className="text-4xl font-black uppercase italic mb-4">Metropolis</h3>
            <Link to="/lookbook" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">View Story</Link>
          </div>
        </div>
        <div className="relative h-[80vh] overflow-hidden group">
          <img src="https://picsum.photos/seed/look2/800/1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Campaign 02" />
          <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors" />
          <div className="absolute bottom-12 left-12">
            <h3 className="text-4xl font-black uppercase italic mb-4">Concrete Sky</h3>
            <Link to="/lookbook" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1">View Story</Link>
          </div>
        </div>
      </section>

      {/* Trust Marks */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="container mx-auto flex flex-wrap justify-center gap-16 md:gap-32 grayscale opacity-40">
           {['VOGUE', 'HYPEBEAST', 'GQ', 'HIGHSNOBIETY', 'DAZED'].map(press => (
             <span key={press} className="text-2xl font-black tracking-tighter">{press}</span>
           ))}
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-32 px-6 container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="w-16 h-1 w-24 bg-brand-red mx-auto" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Access the Nexus</h2>
          <p className="text-white/40 text-lg">
            Receive 10% off your first entry into the ODLX system.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto pt-8">
            <input 
              type="email" 
              placeholder="IDENTITY ADDRESS" 
              className="flex-1 bg-neutral-900 border border-white/10 px-6 py-5 text-sm focus:outline-none focus:border-brand-red"
            />
            <button className="bg-white text-black px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-brand-red hover:text-white transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Privacy is maintained. Unlink at any time.</p>
        </div>
      </section>
    </div>
  );
};
