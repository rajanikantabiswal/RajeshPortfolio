import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Professional and creative designer with excellent branding ideas. He transformed our entire festive collection catalog layouts with extreme care, resulting in massive showroom walk-ins.",
      author: "Premanand Senapati",
      role: "Marketing Director",
      company: "Arundhati Jewellers Pvt. Ltd.",
      rating: 5
    },
    {
      quote: "Delivered high-quality marketing creatives and website graphics consistently on time. Rajesh possesses a rare ability to understand complex tech guidelines and turn them into highly intuitive visual products.",
      author: "Sudhanshu Sekhar",
      role: "Technical Director",
      company: "EmerTech RND Solutions Pvt. Ltd.",
      rating: 5
    },
    {
      quote: "Amazing understanding of packaging graphics and visual storytelling. Our luxury cosmetics box designs received massive critical acclaim from industry designers, thanks to Rajesh's typographical genius.",
      author: "Nisha Mohanty",
      role: "Founder",
      company: "Elixir Organics",
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none overflow-hidden"
    >
      <SectionHeader 
        number="06" 
        title="Kind Words From Elite Clients" 
        subtitle="Testimonials" 
        gradientTitle
        align="center"
      />

      <div className="relative max-w-4xl mx-auto mt-16 px-4">
        
        {/* Decorative Quote Icon Background */}
        <Quote className="absolute -top-16 left-6 w-32 h-32 text-white/[0.01] rotate-185 pointer-events-none select-none" />

        {/* Carousel Slider Panel */}
        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full glass-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative"
            >
              {/* Star review grid */}
              <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Quote bubble */}
              <p className="font-sans font-medium text-base md:text-xl text-white/90 leading-relaxed text-center sm:text-left italic">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author specs */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-white/5 gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-display font-bold text-white text-base leading-none">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-xs text-brand-cyan font-semibold mt-1.5">
                    {testimonials[activeIndex].role} <span className="text-text-muted font-normal">at</span> {testimonials[activeIndex].company}
                  </p>
                </div>

                <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-2xl hidden sm:block">
                  <MessageSquare size={20} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="w-11 h-11 rounded-full glass-card hover:bg-brand-purple/15 text-white/80 hover:text-white border border-white/5 hover:border-brand-purple/40 flex items-center justify-center transition-all duration-300 cursor-pointer"
            data-hover
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer
                  ${activeIndex === idx ? 'w-6 bg-brand-purple' : 'w-1.5 bg-white/20'}
                `}
                data-hover
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-11 h-11 rounded-full glass-card hover:bg-brand-purple/15 text-white/80 hover:text-white border border-white/5 hover:border-brand-purple/40 flex items-center justify-center transition-all duration-300 cursor-pointer"
            data-hover
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
