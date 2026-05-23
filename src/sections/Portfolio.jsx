import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, User, Layout, ExternalLink, X, Film, Play } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

// Portfolio asset imports
import imgLogo from '../assets/portfolio_logo.png';
import imgSocial from '../assets/portfolio_social.png';
import imgPackaging from '../assets/portfolio_packaging.png';
import imgVideo from '../assets/portfolio_video.png';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    'All',
    'Social Media Creative',
    'Logo Design',
    'Business Card Design',
    'Identity Card Design',
    'Flyer Design',
    'Dangler Creative',
    'Printed Materials',
    'Standee Design',
    'Newspaper Advertisement',
    'Hoarding Design',
    'Motion Graphics',
    'Video Editing'
  ];

  const projects = [
    {
      id: 1,
      title: 'Arundhati Royal Heritage Campaign',
      category: 'Social Media Creative',
      image: imgSocial,
      tools: ['Adobe Photoshop', 'Canva'],
      isVideo: false,
      year: '2025',
      client: 'Arundhati Jewellers Pvt. Ltd.',
      description: 'A premium social media grid campaign featuring rich traditional gold jewelry. Modeled with high-contrast luxury photography and cybernetic background gradients to appeal to modern elite buyers.'
    },
    {
      id: 2,
      title: 'EmerTech RND Logo Branding',
      category: 'Logo Design',
      image: imgLogo,
      tools: ['Adobe Illustrator'],
      isVideo: false,
      year: '2023',
      client: 'EmerTech Solutions',
      description: 'A sleek, minimalist luxury gold logo emblem designed on a heavy matte paper surface, capturing innovation, technology, and engineering precision.'
    },
    {
      id: 3,
      title: 'Luxury Cosmetics Box Mockup',
      category: 'Printed Materials',
      image: imgPackaging,
      tools: ['Adobe Photoshop', 'CorelDRAW'],
      isVideo: false,
      year: '2024',
      client: 'Elixir Organics',
      description: 'Sophisticated matte black packaging design embellished with premium gold leaf details and custom luxury floral graphics, optimized for high-end retail displays.'
    },
    {
      id: 4,
      title: 'Cyberpunk Kinetic Motion Poster',
      category: 'Motion Graphics',
      image: imgVideo,
      tools: ['Adobe After Effects', 'Premiere Pro'],
      isVideo: true,
      year: '2025',
      client: 'Apex Esports Club',
      description: 'An adrenaline-fueled promotional motion poster sequence utilizing advanced tracking, 3D typography layers, and synchronized ambient bass beats.'
    },
    {
      id: 5,
      title: 'Awwwards Agency Brand Identity',
      category: 'Business Card Design',
      image: imgLogo,
      tools: ['Adobe Illustrator', 'Photoshop'],
      isVideo: false,
      year: '2024',
      client: 'Vertex Design Lab',
      description: 'Elegant dual-sided business card layout with custom metallic silver printing, featuring blind debossing on high-density black linen stock.'
    },
    {
      id: 6,
      title: 'Grand Exhibition Opening Banner',
      category: 'Standee Design',
      image: imgSocial,
      tools: ['CorelDRAW', 'Adobe Illustrator'],
      isVideo: false,
      year: '2025',
      client: 'Arundhati Jewellers Pvt. Ltd.',
      description: 'A 6x3 feet luxury showroom standee layout, featuring premium crop marks, sharp vector fonts, and high-fidelity product placement graphics.'
    },
    {
      id: 7,
      title: 'National Launch Newspaper Print Ad',
      category: 'Newspaper Advertisement',
      image: imgPackaging,
      tools: ['Adobe Photoshop', 'CorelDRAW'],
      isVideo: false,
      year: '2024',
      client: 'Arundhati Jewellers Pvt. Ltd.',
      description: 'Full-page regional newspaper advertisement layout, optimized with precise CMYK settings and rich ink density for premium newsprint media.'
    },
    {
      id: 8,
      title: 'Highway Electronic Billboard Hoarding',
      category: 'Hoarding Design',
      image: imgSocial,
      tools: ['Adobe Illustrator', 'CorelDRAW'],
      isVideo: false,
      year: '2024',
      client: 'SmartCity Infrastructure',
      description: 'Large-scale vector outdoor hoarding canvas, specifically structured with extreme typographic readability guidelines for high-speed highway motorists.'
    },
    {
      id: 9,
      title: 'Cinema Montage Short Film sequence',
      category: 'Video Editing',
      image: imgVideo,
      tools: ['Adobe Premiere Pro', 'CapCut'],
      isVideo: true,
      year: '2025',
      client: 'Driftwood Productions',
      description: 'Cinematic visual sequence featuring advanced color grading, sound design overlays, speed-ramping, and elegant custom text titles.'
    },
    {
      id: 10,
      title: 'Luminous Store Hanging Dangler',
      category: 'Dangler Creative',
      image: imgSocial,
      tools: ['Adobe Illustrator', 'CorelDRAW'],
      isVideo: false,
      year: '2025',
      client: 'Arundhati Jewellers Pvt. Ltd.',
      description: 'A double-sided visual circular dangler structure, displaying festival greetings, high-fidelity ornaments, and detailed corporate design branding.'
    },
    {
      id: 11,
      title: 'Arundhati Staff Identity Card',
      category: 'Identity Card Design',
      image: imgLogo,
      tools: ['Adobe Illustrator', 'CorelDRAW'],
      isVideo: false,
      year: '2024',
      client: 'Arundhati Jewellers Pvt. Ltd.',
      description: 'Modern, clean employee identity card layout featuring QR codes, high-resolution portrait framing, and distinct corporate color codes.'
    },
    {
      id: 12,
      title: 'Modern Product Catalog Brochure',
      category: 'Flyer Design',
      image: imgPackaging,
      tools: ['Adobe Photoshop', 'Illustrator', 'CorelDRAW'],
      isVideo: false,
      year: '2023',
      client: 'EmerTech Solutions',
      description: 'A multi-page square fold brochure showcasing high-end industrial tech components, featuring beautiful layouts and premium typography.'
    }
  ];

  // Filter projects depending on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="portfolio" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none"
    >
      <SectionHeader 
        number="04" 
        title="Visual Masterpieces Showcase" 
        subtitle="Filterable Portfolio" 
        gradientTitle
        align="center"
      />

      {/* Horizontal Category Navigation Bar */}
      <div className="flex justify-start md:justify-center items-center overflow-x-auto pb-6 mb-12 gap-3 no-scrollbar scroll-smooth">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border cursor-pointer
              ${selectedCategory === cat 
                ? 'bg-gradient-to-r from-brand-purple to-[#a855f7] border-transparent text-white shadow-md shadow-brand-purple/20' 
                : 'bg-white/[0.02] border-white/5 text-text-muted hover:text-white hover:bg-white/5 hover:border-white/10'
              }
            `}
            data-hover
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              tools={project.tools}
              isVideo={project.isVideo}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Case Study Popup Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full z-[999] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
          >
            {/* Modal Glass Container */}
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl rounded-3xl glass-card border border-white/10 overflow-hidden my-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button Anchor */}
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 z-20 bg-black/60 hover:bg-brand-purple text-white p-2 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                data-hover
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Media Column */}
                <div className="lg:col-span-7 bg-zinc-950 aspect-[4/3] lg:aspect-auto lg:min-h-[500px] relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover"
                  />
                  {activeProject.isVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-2xl shadow-brand-purple/50 border border-white/10 cursor-pointer"
                        data-hover
                      >
                        <Play size={24} fill="currentColor" className="ml-1" />
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* Right Text Details Column */}
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between text-left space-y-6">
                  
                  {/* Category Tag */}
                  <div>
                    <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
                      {activeProject.category}
                    </span>
                    <h3 className="font-display font-black text-2xl md:text-3xl text-white mt-2 leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>

                  {/* Project Bio */}
                  <div className="space-y-4">
                    <p className="text-sm text-text-muted leading-relaxed">
                      {activeProject.description}
                    </p>

                    {/* Metadata specs */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4 my-2">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-brand-purple" />
                        <div>
                          <p className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Client</p>
                          <p className="text-xs font-semibold text-white/95">{activeProject.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-brand-cyan" />
                        <div>
                          <p className="text-[9px] text-text-muted font-bold uppercase tracking-wider">Timeline</p>
                          <p className="text-xs font-semibold text-white/95">{activeProject.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Software used */}
                  <div>
                    <h4 className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-2.5">
                      Software Employed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tools.map((tool, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-white/5 text-white/80 border border-white/5 px-3 py-1 rounded-full font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Portfolio;
