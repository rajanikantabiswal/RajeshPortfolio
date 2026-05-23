import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Layers, Film, Award, LayoutGrid } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Skills = () => {
  const creativeSkills = [
    { name: 'Graphic Design', rating: 95, icon: Palette },
    { name: 'Branding & Identity', rating: 92, icon: Award },
    { name: 'Logo Design', rating: 90, icon: Sparkles },
    { name: 'Social Media Design', rating: 95, icon: LayoutGrid },
    { name: 'Packaging Design', rating: 88, icon: Layers },
    { name: 'Flyer & Print Design', rating: 92, icon: Layers },
    { name: 'Typography', rating: 85, icon: Palette },
    { name: 'Motion Graphics', rating: 86, icon: Film },
    { name: 'Video Editing', rating: 90, icon: Film },
  ];

  const softwareSkills = [
    { 
      name: 'Adobe Photoshop', 
      type: 'Raster / Branding', 
      level: 'Expert',
      color: 'hover:border-[#00c8ff] hover:shadow-[#00c8ff]/10',
      textColor: 'text-[#00c8ff]'
    },
    { 
      name: 'Adobe Illustrator', 
      type: 'Vector / Logos', 
      level: 'Expert',
      color: 'hover:border-[#ff9a00] hover:shadow-[#ff9a00]/10',
      textColor: 'text-[#ff9a00]'
    },
    { 
      name: 'CorelDRAW', 
      type: 'Print Production', 
      level: 'Expert',
      color: 'hover:border-[#00b050] hover:shadow-[#00b050]/10',
      textColor: 'text-[#00b050]'
    },
    { 
      name: 'Adobe After Effects', 
      type: 'Motion / FX', 
      level: 'Advanced',
      color: 'hover:border-[#d39eff] hover:shadow-[#d39eff]/10',
      textColor: 'text-[#d39eff]'
    },
    { 
      name: 'Adobe Premiere Pro', 
      type: 'Video Assembly', 
      level: 'Advanced',
      color: 'hover:border-[#9c9eff] hover:shadow-[#9c9eff]/10',
      textColor: 'text-[#9c9eff]'
    },
    { 
      name: 'Canva', 
      type: 'Fast Prototyping', 
      level: 'Expert',
      color: 'hover:border-[#00c4cc] hover:shadow-[#00c4cc]/10',
      textColor: 'text-[#00c4cc]'
    },
    { 
      name: 'CapCut', 
      type: 'Social / Reels', 
      level: 'Expert',
      color: 'hover:border-[#ffffff] hover:shadow-[#ffffff]/10',
      textColor: 'text-white'
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none"
    >
      <SectionHeader 
        number="02" 
        title="Technical & Creative Toolkit" 
        subtitle="Skills & Softwares" 
        gradientTitle
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Creative Competencies */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-purple/10 text-brand-purple rounded-xl">
              <Palette size={20} />
            </div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-white">Creative Capabilities</h3>
          </div>

          <div className="space-y-4">
            {creativeSkills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div key={idx} className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <IconComponent size={14} className="text-brand-purple" />
                      <span className="text-sm font-semibold text-white/90">{skill.name}</span>
                    </div>
                    <span className="text-xs font-bold text-brand-cyan">{skill.rating}%</span>
                  </div>
                  
                  {/* Gauge Tracker Bar */}
                  <div className="h-2 w-full rounded-full bg-white/[0.04] overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.rating}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Software Suite */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-cyan/10 text-brand-cyan rounded-xl">
              <Layers size={20} />
            </div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-white">Software Ecosystem</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softwareSkills.map((app, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group flex flex-col items-start p-5 rounded-2xl glass-card border border-white/5 transition-all duration-300 hover:scale-[1.02] cursor-default ${app.color}`}
              >
                <span className={`text-xs font-bold ${app.textColor} tracking-wider uppercase mb-1`}>
                  {app.level}
                </span>
                
                <h4 className="font-display font-bold text-base text-white group-hover:text-white transition-colors duration-300">
                  {app.name}
                </h4>
                
                <p className="text-xs text-text-muted mt-0.5 leading-normal">
                  {app.type}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
