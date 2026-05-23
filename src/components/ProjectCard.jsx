import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Play } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  category, 
  image, 
  tools = [], 
  isVideo = false,
  onClick 
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl glass-card border border-white/5 cursor-pointer aspect-[4/3] md:aspect-[16/11]"
      onClick={onClick}
    >
      {/* Zoomable Project Image */}
      <div className="w-full h-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          loading="lazy"
        />
      </div>

      {/* Dark Ambient Vignette Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

      {/* Glowing Border Stroke on Card Hover */}
      <div className="absolute inset-0 border border-brand-purple/0 group-hover:border-brand-purple/40 rounded-2xl transition-all duration-300 pointer-events-none" />

      {/* Video Indicator (Play Badge) */}
      {isVideo && (
        <div className="absolute top-4 right-4 bg-brand-purple text-white p-2 rounded-full shadow-lg shadow-brand-purple/30 z-10 transition-transform duration-300 group-hover:scale-110">
          <Play size={16} fill="currentColor" />
        </div>
      )}

      {/* Slide-Up Visual Content Details */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        {/* Category Tag */}
        <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase mb-1.5">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-display font-bold text-lg md:text-xl text-white mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Tools Badges (e.g., Photoshop, After Effects) */}
        <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          {tools.map((tool, idx) => (
            <span 
              key={idx} 
              className="text-[9px] font-semibold bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/5"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Interaction Action CTA Indicator */}
        <div className="flex items-center gap-2 text-xs font-semibold text-white/95 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <Eye size={14} className="text-brand-purple" />
          <span>{isVideo ? 'Play Motion Reel' : 'View Full Design'}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
