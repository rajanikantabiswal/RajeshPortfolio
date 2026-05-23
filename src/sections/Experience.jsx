import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Experience = () => {
  const experiences = [
    {
      role: 'Graphic & Video Editor',
      company: 'Arundhati Jewellers Pvt. Ltd.',
      duration: 'March 2024 – Present',
      description: 'Led all visual creative assets and design output for a leading jewelry brand, coordinating digital and print productions.',
      responsibilities: [
        'Social media creatives and high-fidelity product photography touchups',
        'Visuals and layouts for multi-channel marketing campaigns',
        'Premium jewelry packaging designs and premium product tags',
        'Branding materials, brochures, and offline store flyers',
        'Print design creatives (newspapers, danglers, hoarding spreads)',
      ],
      color: 'border-brand-purple shadow-brand-purple/5'
    },
    {
      role: 'Visual Editor',
      company: 'EmerTech RND Solutions Pvt. Ltd.',
      duration: 'October 2017 – February 2024',
      description: 'Managed corporate brand identity and graphic requirements across web, social media, and offline channels.',
      responsibilities: [
        'Website UI graphics, product diagrams, and digital assets',
        'Vibrant social media posters and content graphics',
        'Corporate branding, packaging, and logo designs from scratch',
        'Print coordination, vector blueprints, and flyer media formats',
        'Video post-production and digital marketing media editing',
      ],
      color: 'border-brand-cyan shadow-brand-cyan/5'
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none"
    >
      <SectionHeader 
        number="03" 
        title="My Creative Timeline" 
        subtitle="Work Experience" 
        gradientTitle
      />

      <div className="relative max-w-4xl mx-auto mt-16">
        
        {/* Glow Timeline Laser Line Track */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-[1px]" />
        
        {/* Scroll-triggered progress cover line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent -translate-x-[1px] shadow-lg shadow-brand-purple/20"
        />

        {/* Timeline items wrapper */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-start md:items-center 
                  ${isEven ? 'md:flex-row-reverse' : ''}
                `}
              >
                
                {/* Node Dot Anchor */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#030303] border-2 border-brand-purple -translate-x-1/2 z-10 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-md shadow-brand-cyan/80 animate-ping" 
                  />
                  <div className="w-2 h-2 rounded-full bg-brand-cyan absolute" />
                </div>

                {/* Timeline Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full md:w-[45%] ml-12 md:ml-0 glass-card p-6 md:p-8 rounded-3xl border border-white/5 relative hover:border-white/10 transition-colors duration-300
                    ${exp.color}
                  `}
                >
                  {/* Time badge */}
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-cyan tracking-wider mb-3">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>

                  {/* Header Title */}
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <h4 className="font-display font-semibold text-sm text-brand-gold mt-1 mb-4 flex items-center gap-1.5">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </h4>

                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 text-left border-t border-white/5 pt-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5">
                        <ChevronRight size={14} className="text-brand-purple mt-1 shrink-0" />
                        <span className="text-xs text-white/80 leading-relaxed font-medium">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
