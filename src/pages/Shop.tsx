import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { cn } from '../lib/utils';

export const Shop = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const [category, setCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Accessories'];

  const filteredProducts = products
    .filter(p => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesFilter = !filterParam || 
        (filterParam === 'new' && p.isNew) || 
        (filterParam === 'sale' && p.isSale);
      return matchesCategory && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (a.isNew ? -1 : 1);
      return 0;
    });

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-4">The Nexus</h1>
            <p className="text-white/40 uppercase tracking-widest text-xs">Architectural Wearables for the Modern Nomad / {filteredProducts.length} Items</p>
          </div>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest hover:text-brand-red transition-colors"
            >
              <SlidersHorizontal size={14} />
              <span>Filter & Sort</span>
            </button>
          </div>
        </div>

        {/* Global Filter Bar */}
        <div className="mb-12 border-b border-white/10 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-12 pb-4">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all relative pb-2",
                  category === cat ? "text-brand-red" : "text-white/40 hover:text-white"
                )}
              >
                {cat}
                {category === cat && (
                  <motion.div layoutId="category-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Filter & Sort Drawer (Simplified for now) */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12 border-b border-white/5"
            >
              <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Sort By</h4>
                  <div className="flex flex-col space-y-3">
                    {['featured', 'newest', 'price-low', 'price-high'].map(s => (
                      <button 
                        key={s} 
                        onClick={() => setSortBy(s)}
                        className={cn(
                          "text-xs uppercase tracking-widest text-left hover:text-brand-red transition-colors",
                          sortBy === s ? "text-white font-bold" : "text-white/60"
                        )}
                      >
                        {s.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Add more filter options here as needed: sizes, colors, etc. */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-48 text-center space-y-6">
            <h3 className="text-2xl font-black uppercase italic text-white/20">No matching items found</h3>
            <button 
              onClick={() => {setCategory('All'); setSortBy('featured')}}
              className="text-brand-red border-b border-brand-red pb-1 uppercase font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
