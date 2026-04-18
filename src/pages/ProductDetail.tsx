import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, Minus, Heart, Share2, Ruler, Truck, ShieldCheck, 
  CheckCircle2, Trash2,
  ChevronRight, ArrowLeft, Star, ShoppingBag, Info
} from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../CartContext';
import { formatCurrency, cn } from '../lib/utils';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0].name);
      setActiveImage(0);
      window.scrollTo(0, 0);
    }
  }, [product, id]);

  if (!product) return <div>Product Not Found</div>;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-12">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Image Gallery */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 group relative overflow-hidden aspect-[3/4]"
              >
                <img 
                  src={img} 
                  alt={`${product.name} vision ${i + 1}`} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* Product Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">{product.category}</span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] font-bold text-white">4.9 (42 Reviews)</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">{product.name}</h1>
                <p className="text-2xl font-mono">{formatCurrency(product.price)}</p>
                <p className="text-white/60 text-sm leading-relaxed pt-4">
                  {product.description}
                </p>
              </div>

              {/* Selectors */}
              <div className="space-y-8">
                {/* Size */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Select Size</h4>
                    <button className="flex items-center space-x-1 text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white">
                      <Ruler size={12} />
                      <span>Size Guide</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "py-3 text-xs font-mono border transition-all",
                          selectedSize === size 
                            ? "bg-white text-black border-white" 
                            : "bg-transparent border-white/10 hover:border-white/40"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest">Colorway: {selectedColor}</h4>
                  <div className="flex space-x-3">
                    {product.colors.map(color => (
                      <button 
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={cn(
                          "w-8 h-8 rounded-full border-2 p-0.5 transition-all",
                          selectedColor === color.name ? "border-brand-red scale-110" : "border-transparent"
                        )}
                      >
                        <div 
                          className="w-full h-full rounded-full" 
                          style={{ backgroundColor: color.hex }} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Buy Section */}
                <div className="space-y-4 pt-4">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full bg-brand-red text-white py-5 font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-4 hover:bg-white hover:text-black transition-all group overflow-hidden relative"
                  >
                    <AnimatePresence mode="wait">
                      {isAdded ? (
                        <motion.div 
                          key="added"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                          className="flex items-center space-x-2"
                        >
                          <ShoppingBag size={18} />
                          <span>Added to Nexus</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="add"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                          className="flex items-center space-x-2"
                        >
                          <span>Initiate Add</span>
                          <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex-1 py-4 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center space-x-2">
                       <Heart size={14} />
                       <span>Wishlist</span>
                    </button>
                    <button className="flex-1 py-4 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center space-x-2">
                       <Share2 size={14} />
                       <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Urgency Signals */}
                <div className="p-4 bg-brand-red/10 border border-brand-red/20 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase text-brand-red tracking-wider">
                    <CheckCircle2 size={12} />
                    <span>In Stock — Ships within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase text-white/60 tracking-wider">
                    <Trash2 size={12} className="opacity-0" /> {/* Just spacing */}
                    <span>{Math.floor(Math.random() * 20) + 5} people currently viewing this profile</span>
                  </div>
                </div>

                {/* Details Accordion (Simplified) */}
                <div className="pt-8 space-y-6">
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4">Technical Specifications</h3>
                    <ul className="space-y-2">
                      {product.details.map((detail, i) => (
                        <li key={i} className="text-xs text-white/60 flex items-center space-x-3">
                          <div className="w-1 h-1 bg-brand-red" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-white/10 pt-6 space-y-4">
                     <div className="flex items-center space-x-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                       <Truck size={18} />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Global Express Shipping Available</span>
                     </div>
                     <div className="flex items-center space-x-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                       <ShieldCheck size={18} />
                       <span className="text-[10px] font-bold uppercase tracking-widest">30-Day Technical Returns</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Story / Narrative */}
        <div className="py-32 border-t border-white/10 mt-32">
          <div className="max-w-4xl mx-auto space-y-12">
            <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em]">Product Story</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">Designed for <br /> the Unseen.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
               <p className="text-white/60 leading-relaxed text-lg font-light">
                 The {product.name} represents the pinnacle of Nexus Drop 024. Inspired by the vertical silhouettes of Tokyo at midnight, our studio spent 18 months refining the textile weight to ensure perfect drape without sacrificing durability.
               </p>
               <p className="text-white/60 leading-relaxed text-lg font-light">
                 Each unit is laser-cut and hand-finished in our London atelier. The modular integration allow for seamless layering across the entire ODLX collection. This isn't just a garment; it's a mobile environment.
               </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="py-32 border-t border-white/10">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-16">Sync Your Look</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
