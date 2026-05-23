import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Film, Share2, Printer, Megaphone, CalendarDays, Compass, Eye, Image } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Services = () => {
  const services = [
    {
      num: '01',
      title: 'Graphic Design',
      icon: Palette,
      description: 'High-end aesthetic layouts blending modern typography, compositions, and custom illustrations for print and digital channels.',
      deliverables: ['Custom Illustrations', 'Presentation Design', 'Vector Visuals', 'Vector Tracing'],
      color: 'group-hover:border-brand-purple/40 group-hover:shadow-brand-purple/5'
    },
    {
      num: '02',
      title: 'Branding & Identity',
      icon: Compass,
      description: 'Complete strategic brand foundations including curated color systems, modern typography standards, and usage manuals.',
      deliverables: ['Brand Guidelines', 'Typography Manuals', 'Color Systems', 'Stationery Assets'],
      color: 'group-hover:border-brand-cyan/40 group-hover:shadow-brand-cyan/5'
    },
    {
      num: '03',
      title: 'Logo Design',
      icon: Sparkles,
      description: 'Timeless, premium corporate logo marks and emblems that remain clear, scalable, and impactful across all mediums.',
      deliverables: ['Minimalist Logo Marks', 'Mascot Emblems', 'Wordmarks', 'Scalable SVG Vectors'],
      color: 'group-hover:border-brand-gold/40 group-hover:shadow-brand-gold/5'
    },
    {
      num: '04',
      title: 'Motion Graphics',
      icon: Share2,
      description: 'Engaging vector designs brought to life using custom transitions, camera movements, and interactive glowing parameters.',
      deliverables: ['Animated Title Posters', 'Explainer Graphic clips', 'Intro/Outro Sequences', 'Lottie Icons'],
      color: 'group-hover:border-pink-500/40 group-hover:shadow-pink-500/5'
    },
    {
      num: '05',
      title: 'Video Editing',
      icon: Film,
      description: 'Cinematic color grading, audio layout mastering, speed ramping, and detailed pacing adjustments for marketing reels.',
      deliverables: ['Social Media Reels', 'Cinematic Corporate Edits', 'Color Correction', 'VFX Composition'],
      color: 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/5'
    },
    {
      num: '06',
      title: 'Social Media Design',
      icon: Image,
      description: 'Vibrant, high-engagement digital banners, carousel slides, and platform banners engineered to maximize user scroll-stops.',
      deliverables: ['Platform Banners', 'Grid Layouts', 'Carousel Slides', 'Cover Highlights'],
      color: 'group-hover:border-brand-purple/40 group-hover:shadow-brand-purple/5'
    },
    {
      num: '07',
      title: 'Advertisement Design',
      icon: Megaphone,
      description: 'Persuasive high-conversion layouts combining compelling headings, clear product placements, and powerful CTA pathways.',
      deliverables: ['Display Creatives', 'Promo Banners', 'Billboard Layouts', 'E-commerce Assets'],
      color: 'group-hover:border-brand-cyan/40 group-hover:shadow-brand-cyan/5'
    },
    {
      num: '08',
      title: 'Print Media Design',
      icon: Printer,
      description: 'Bespoke layouts calibrated with exact color profiles, trim margins, bleed lines, and spot gloss finishes.',
      deliverables: ['Corporate Brochures', 'Pamphlets', 'Annual Reports', 'Catalog spreads'],
      color: 'group-hover:border-brand-gold/40 group-hover:shadow-brand-gold/5'
    },
    {
      num: '09',
      title: 'Event Creative Design',
      icon: CalendarDays,
      description: 'Coordinated branding kits for physical and digital conferences, gallery exhibitions, and corporate store milestones.',
      deliverables: ['Backdrop Banners', 'Entry Badges', 'Dangler Layouts', 'Promotional Flyers'],
      color: 'group-hover:border-pink-500/40 group-hover:shadow-pink-500/5'
    },
    {
      num: '10',
      title: 'Outdoor Branding',
      icon: Eye,
      description: 'Large-scale, eye-catching environmental layouts including commercial building wrappers, standees, and bus shelter banners.',
      deliverables: ['Building Wrappers', 'Rollup Standees', 'Shop Board Canvas', 'Bus Shelters'],
      color: 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/5'
    }
  ];

  return (
    <section 
      id="services" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none"
    >
      <SectionHeader 
        number="05" 
        title="Impactful Visual Solutions" 
        subtitle="Services Offered" 
        gradientTitle
        align="center"
      />

      {/* Services Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
        {services.map((svc, idx) => {
          const Icon = svc.icon;

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group relative p-6 md:p-8 rounded-3xl glass-card border border-white/5 transition-all duration-300 hover:scale-[1.02] cursor-default flex flex-col justify-between items-start text-left overflow-hidden ${svc.color}`}
            >
              {/* Abs Watermark number */}
              <span className="absolute top-4 right-6 font-display font-black text-4xl text-white/[0.03] select-none pointer-events-none group-hover:text-brand-purple/10 transition-colors duration-300">
                {svc.num}
              </span>

              {/* Service Icon Node */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-brand-purple group-hover:bg-brand-purple/10 group-hover:text-white transition-all duration-300 mb-6">
                <Icon size={22} className="transition-transform duration-500 group-hover:rotate-12" />
              </div>

              {/* Core Details */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-brand-cyan transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Slide-Up Deliverables list on Hover */}
              <div className="w-full mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {svc.deliverables.map((item, dIdx) => (
                  <span 
                    key={dIdx} 
                    className="text-[9px] font-bold tracking-wider uppercase bg-white/[0.03] text-white/80 border border-white/5 px-2 py-0.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
