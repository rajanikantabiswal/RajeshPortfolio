import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  href, 
  icon: Icon, 
  download,
  className = '' 
}) => {
  const baseStyle = "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-display font-semibold text-sm tracking-wide rounded-full overflow-hidden transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple to-[#a855f7] text-white shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/45 border border-white/10",
    secondary: "bg-transparent text-brand-cyan hover:text-white border border-brand-cyan/40 hover:border-brand-cyan shadow-sm hover:shadow-brand-cyan/20",
    gold: "bg-gradient-to-r from-brand-gold to-[#fbbf24] text-black shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 border border-white/10",
    glass: "glass-card text-white hover:bg-white/10 border border-white/10 hover:border-white/20",
  };

  const Component = href ? 'a' : 'button';
  const customProps = href ? { href, download } : { onClick };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...customProps}
      >
        {/* Shine Overlay Effect */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shine_1.5s_ease-in-out_infinite]" />
        
        <span>{children}</span>
        {Icon && <Icon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
      </Component>
    </motion.div>
  );
};

export default Button;
