import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[55] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 text-white"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="py-12 border-y border-white/10 overflow-hidden whitespace-nowrap bg-brand-black">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter mx-8 text-white/40 italic">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
