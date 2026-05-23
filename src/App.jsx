import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp, Send, Sparkles } from 'lucide-react';

// Core layout & decoration components
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';

// High-fidelity sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-[#f8fafc] bg-[#030303] antialiased select-none font-sans overflow-x-hidden">
      
      {/* 1. Global Custom Spring Cursor */}
      <CustomCursor />

      {/* 2. Global Interactive Particle Mesh & Glow Orbs */}
      <GridBackground />

      {/* 3. Sticky Frosted Glass Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 md:px-8 
          ${isScrolled 
            ? 'bg-[#030303]/75 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30' 
            : 'bg-transparent border-b border-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Badge */}
          <div 
            onClick={() => handleScrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group"
            data-hover
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <span className="text-xs font-black text-black font-display">RB</span>
            </div>
            <div className="text-left leading-none">
              <span className="font-display font-black text-sm tracking-wide text-white group-hover:text-brand-cyan transition-colors">
                Rajesh Bhuiya
              </span>
              <p className="text-[8px] text-text-muted font-bold tracking-widest uppercase mt-0.5">
                Creative Portfolio
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleScrollToSection(item.id)}
                className="text-xs font-bold tracking-wider text-text-muted hover:text-white uppercase transition-colors cursor-pointer relative py-1 group"
                data-hover
              >
                <span>{item.label}</span>
                {/* Underline hover slide */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-purple group-hover:w-full transition-all duration-350" />
              </button>
            ))}
          </nav>

          {/* Let's Talk button CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleScrollToSection('contact')}
              className="relative inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-display font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-md shadow-brand-purple/20 hover:shadow-brand-purple/40 border border-white/10 cursor-pointer"
              data-hover
            >
              <Send size={12} />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Menu Icon Trigger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.03] border border-white/5 text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            data-hover
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu Panel Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#030303]/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 lg:hidden flex flex-col gap-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4 text-left">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollToSection(item.id)}
                  className="text-sm font-bold tracking-wider text-text-muted hover:text-white uppercase transition-colors py-2 border-b border-white/5 text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => handleScrollToSection('contact')}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 font-display font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-full border border-white/10 cursor-pointer"
            >
              <Send size={12} />
              <span>Let's Talk</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Section Orchestration Layout */}
      <main className="relative pt-12">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* 5. Clean Footer layout */}
      <Footer />

    </div>
  );
}

export default App;
