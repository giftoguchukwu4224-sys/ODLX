import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const LookbookItem = ({ src, title, description, reverse = false }: { src: string, title: string, description: string, reverse?: boolean }) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-12 md:gap-24 items-center mb-48",
      reverse ? "md:flex-row-reverse" : ""
    )}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex-1 relative aspect-[3/4] overflow-hidden group"
      >
        <img 
          src={src} 
          alt={title} 
          className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0" 
        />
        <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors" />
      </motion.div>
      <div className="flex-1 space-y-8">
        <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em]">Section 0{Math.floor(Math.random() * 9) + 1}</span>
        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">{title}</h2>
        <p className="text-white/40 text-lg leading-relaxed font-light max-w-md">
          {description}
        </p>
        <Link 
          to="/shop" 
          className="bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-widest inline-flex items-center space-x-2 hover:bg-brand-red hover:text-white transition-colors group"
        >
          <span>Shop the System</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export const Lookbook = () => {
  return (
    <div className="pt-48 pb-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-32 text-center md:text-left">
          <h1 className="text-8xl md:text-[15vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 italic">अभियान <br /> Campaign</h1>
          <p className="text-white/40 uppercase tracking-[0.3em] text-sm font-light">
             Nexus Drop 24: Visual Narrative Study / Tokyo X London
          </p>
        </div>

        <LookbookItem 
          src="https://picsum.photos/seed/lb1/1200/1600"
          title="Urban Static"
          description="A study in grey. Captured at 3AM in the Shibuya crossing. The collection mirrors the silence of the city after the lights fade."
        />

        <LookbookItem 
          src="https://picsum.photos/seed/lb2/1200/1600"
          title="Vector Flow"
          description="Tracing the architectural lines of the Shard. Our garments are designed to complement the jagged edges of modernism."
          reverse
        />

        <LookbookItem 
          src="https://picsum.photos/seed/lb3/1200/1600"
          title="Silent Sky"
          description="Above the clouds, the perspective shifts. Technical fabrics meet the raw elements. High-performance, low-profile."
        />

        {/* Campaign Footer */}
        <div className="py-32 border-t border-white/10 text-center space-y-12">
           <p className="text-white/20 text-[10px] uppercase tracking-[0.4em]">Director: Sato Arata / Styling: ODLX Studio / Year: 2024</p>
           <Link to="/shop" className="text-8xl md:text-[10vw] font-black uppercase tracking-tighter hover:text-brand-red transition-colors italic">
             Shop Collection
           </Link>
        </div>
      </div>
    </div>
  );
};
