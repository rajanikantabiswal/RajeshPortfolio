import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030303] py-12 px-4 md:px-8 select-none">
      
      {/* Floating Scroll to Top button */}
      <div className="absolute -top-[22px] left-1/2 -translate-x-1/2">
        <button
          onClick={() => handleScroll('hero')}
          className="w-11 h-11 rounded-full glass-card hover:bg-brand-purple text-white border border-white/10 hover:border-brand-purple/40 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-black/80"
          title="Back to top"
          data-hover
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo Branding Meta */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center">
            <span className="text-[10px] font-black text-black">RB</span>
          </div>
          <span className="font-display font-bold text-sm tracking-wide text-white">
            Rajesh Bhuiya
          </span>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-text-muted">
          {['about', 'skills', 'experience', 'portfolio', 'services', 'testimonials', 'contact'].map((section, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(section)}
              className="hover:text-white capitalize transition-colors duration-250 cursor-pointer"
              data-hover
            >
              {section}
            </button>
          ))}
        </div>

        {/* Legal copyrights */}
        <p className="text-[11px] font-medium text-text-muted tracking-wide">
          © 2026 Rajesh Bhuiya — Graphic Designer & Video Editor. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
