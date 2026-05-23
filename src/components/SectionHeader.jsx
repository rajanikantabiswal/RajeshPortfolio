import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  number, 
  title, 
  subtitle, 
  gradientTitle = false,
  align = 'left' 
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`relative mb-16 select-none ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Absolute Watermark Number */}
      {number && (
        <span 
          className={`absolute -top-12 font-display font-black text-8xl md:text-9xl text-white/[0.02] tracking-tighter pointer-events-none select-none
            ${isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0'}
          `}
        >
          {number}
        </span>
      )}

      {/* Subtitle / Tag */}
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs md:text-sm font-semibold tracking-widest text-brand-purple uppercase mb-3"
        >
          // {subtitle}
        </motion.span>
      )}

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white
          ${gradientTitle ? 'text-gradient-purple-cyan' : ''}
        `}
      >
        {title}
      </motion.h2>

      {/* Accent Glowing Divider Line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-[2px] bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full mt-4
          ${isCenter ? 'mx-auto' : ''}
        `}
      />
    </div>
  );
};

export default SectionHeader;
