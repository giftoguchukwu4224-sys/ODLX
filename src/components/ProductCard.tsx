import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency, cn } from '../lib/utils';
import { useCart } from '../CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group product-card-bg border border-white/5 p-6 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4] bg-neutral-900 group">
        {/* Images */}
        <motion.img 
          src={product.images[0]} 
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0",
            isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <motion.img 
          src={product.images[1] || product.images[0]} 
          alt={`${product.name} - Alternate`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out grayscale-0",
            isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
          )}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-brand-red text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider">New</span>
          )}
          {product.isSale && (
            <span className="bg-white text-black text-[9px] font-bold px-2 py-1 uppercase tracking-wider">Sale</span>
          )}
          {product.stockCount < 5 && (
            <span className="bg-brand-black/80 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider border border-white/20">Low Stock</span>
          )}
        </div>

        {/* Actions Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-black/20 backdrop-blur-[2px] flex items-end p-6"
            >
              <div className="w-full flex justify-between items-center mb-4">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, product.sizes[0], product.colors[0].name);
                  }}
                  className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-6 py-3 flex items-center space-x-2 hover:bg-brand-red hover:text-white transition-colors flex-1 mr-4"
                >
                  <Plus size={14} />
                  <span>Quick Add</span>
                </button>
                <button className="bg-brand-black/80 text-white p-3 hover:bg-brand-red transition-colors backdrop-blur-md">
                  <Heart size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] mb-1 group-hover:text-brand-red transition-colors">
            {product.name}
          </h3>
          <p className="text-[11px] text-white/40 uppercase tracking-wide">{product.category}</p>
        </div>
        <p className="text-[13px] font-mono">{formatCurrency(product.price)}</p>
      </div>
    </motion.div>
  );
};
