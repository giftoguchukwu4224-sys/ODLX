import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';

export const About = () => {
  return (
    <div className="pt-48 pb-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="space-y-12">
            <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em]">Origin Story</span>
            <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8]">Established <br /> in Chaos.</h1>
            <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light">
              ODLX started in a small basement studio in the East End of London in 2018. The vision was simple: create clothes that act as armor for the modern creative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase italic">The Philosophy</h3>
              <p className="text-white/40 leading-relaxed">
                We believe that garments should be intelligent. Our design process begins with a problem—how to move, how to carry, how to shield—and ends with a silhouette that solve it without compromise.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase italic">The Textile Matrix</h3>
              <p className="text-white/40 leading-relaxed">
                90% of our fabrics are sourced from a single mill in Osaka, Japan. We work exclusively with recycled nylons and organic cottons that exceed industry durability standards.
              </p>
            </div>
          </div>

          <div className="aspect-video relative overflow-hidden">
            <img src="https://picsum.photos/seed/about1/1920/1080?grayscale" className="w-full h-full object-cover grayscale opacity-60" alt="Studio" />
            <div className="absolute inset-0 bg-brand-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mix-blend-difference text-white">ODLX Studio</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    { q: "How long does shipping take?", a: "Express worldwide shipping typically takes 3-5 business days. Domestic UK orders arrive within 24-48 hours." },
    { q: "What is your return policy?", a: "We offer a 30-day technical return policy. Garments must be in original condition with all tags and Nexus seals intact." },
    { q: "How do I care for my ODLX items?", a: "Most items are machine washable at low temperatures. We recommend air drying to maintain tech-fiber integrity." },
    { q: "Do you offer international shipping?", a: "Yes, we ship to over 80 countries worldwide via DHL Express." }
  ];

  return (
    <div className="pt-48 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
         <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-24">Assistance</h1>
         <div className="space-y-12">
           {faqs.map((faq, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="border-b border-white/10 pb-12"
             >
               <h3 className="text-xl font-bold uppercase italic mb-6">0{i+1}. {faq.q}</h3>
               <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">{faq.a}</p>
             </motion.div>
           ))}
         </div>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="pt-48 pb-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-12">Inquire.</h1>
            <p className="text-white/40 text-lg font-light max-w-md">
              For editorial inquiries, technical support, or wholesale applications, please use the system below.
            </p>
            <div className="space-y-8 pt-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full"><Mail size={20} className="text-brand-red" /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40">Nexus Support</p>
                  <p className="text-lg">support@odlx.studio</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full"><MapPin size={20} className="text-brand-red" /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40">Atelier</p>
                  <p className="text-lg">24 Tech Row, London E1 6QL</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-6 pt-12 grayscale opacity-40">
              <Instagram size={24} />
              <Twitter size={24} />
            </div>
          </div>

          <form className="space-y-8 bg-neutral-900/50 p-12 border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-brand-red outline-none" placeholder="REKINDLE NAME" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-brand-red outline-none" placeholder="IDENTITY ADDRESS" />
              </div>
            </div>
            <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-brand-red outline-none appearance-none">
                  <option className="bg-brand-black">General Support</option>
                  <option className="bg-brand-black">Returns & Exchanges</option>
                  <option className="bg-brand-black">Editorial / Press</option>
                  <option className="bg-brand-black">Wholesale</option>
                </select>
            </div>
            <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={6} className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-brand-red outline-none resize-none" placeholder="TRANSMIT YOUR MESSAGE..."></textarea>
            </div>
            <button className="w-full bg-white text-black py-5 font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-4 hover:bg-brand-red hover:text-white transition-all">
              <span>Transmit</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
