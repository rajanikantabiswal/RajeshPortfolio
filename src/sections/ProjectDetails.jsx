import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Send,
  Briefcase,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetails = ({ projectId }) => {
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  const totalProjects = projects.length;
  // Next project logic (looping back to 1)
  const nextProjectIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(nextProjectIndex + 1) % totalProjects];

  const handleOpenWhatsApp = () => {
    const phoneNumber = "917978528177"; // country code without +
    const message = encodeURIComponent(
      `Hi Rajesh, I just saw your project "${project.title}" on your portfolio and I would love to discuss a similar project with you!`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none">
      {/* 1. Header Navigation */}
      <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-12">
        <a
          href="#portfolio"
          className="group inline-flex items-center gap-2 text-xs font-bold tracking-wider text-text-muted hover:text-white uppercase transition-colors"
          data-hover
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio Showcase</span>
        </a>
        <span className="text-[10px] font-black tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1.5 rounded-full border border-brand-purple/20">
          Project {project.id} of {totalProjects}
        </span>
      </div>

      {/* 2. Hero Header Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden mb-12 aspect-[21/9] md:aspect-[3/1] bg-zinc-950 border border-white/5 shadow-2xl"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
        {/* Glowing Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Absolute Banner Title info */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 text-left">
          <span className="text-[10px] md:text-xs font-black tracking-widest text-brand-cyan uppercase">
            {project.category}
          </span>
          <h1 className="font-display font-black text-2xl md:text-4xl lg:text-5xl text-white mt-2 leading-tight">
            {project.title}
          </h1>
        </div>
      </motion.div>

      {/* 3. Main Detail Columns layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Column: Vertical Image List Gallery */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="text-left space-y-2">
            <h3 className="text-xs font-black tracking-widest text-brand-cyan uppercase">
              Creative Gallery
            </h3>
            <p className="text-xs text-text-muted">
              Click any image to enlarge and explore pixel-perfect details.
            </p>
          </div>

          <div className="space-y-6">
            {project.gallery && project.gallery.map((imgUrl, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/5 cursor-zoom-in"
                onClick={() => setLightboxImageIndex(index)}
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Glowing Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-0 border border-brand-purple/0 group-hover:border-brand-purple/30 rounded-2xl transition-all duration-300 pointer-events-none" />
                
                {/* Micro Action Hover badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold tracking-wider text-white">
                  Enlarge Design
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Sticky Metadata Sidebar Panel */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-6 md:p-8 space-y-6 text-left shadow-2xl border border-white/10 relative overflow-hidden"
          >
            {/* Ambient Background Glowing Orb */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase">
                Project Overview
              </span>
              <h2 className="font-display font-black text-2xl text-white mt-1">
                Concept & Strategy
              </h2>
            </div>

            <p className="text-sm text-text-muted leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Project Specs Table */}
            <div className="border-t border-b border-white/5 py-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 text-brand-purple">
                  <User size={14} />
                </div>
                <div>
                  <p className="text-[9px] text-text-muted font-black uppercase tracking-wider">
                    Client & Brand
                  </p>
                  <p className="text-xs font-semibold text-white/95 mt-0.5">
                    {project.client}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 text-brand-cyan">
                  <Calendar size={14} />
                </div>
                <div>
                  <p className="text-[9px] text-text-muted font-black uppercase tracking-wider">
                    Timeline Year
                  </p>
                  <p className="text-xs font-semibold text-white/95 mt-0.5">
                    {project.year}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 text-brand-purple">
                  <Briefcase size={14} />
                </div>
                <div>
                  <p className="text-[9px] text-text-muted font-black uppercase tracking-wider">
                    Services / Discipline
                  </p>
                  <p className="text-xs font-semibold text-white/95 mt-0.5">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Deliverables Section */}
            {project.deliverables && (
              <div className="space-y-3">
                <h4 className="text-[10px] text-text-muted font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Layers size={11} className="text-brand-purple" />
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 size={13} className="text-brand-cyan mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Software employed */}
            <div className="space-y-2.5">
              <h4 className="text-[10px] text-text-muted font-black uppercase tracking-widest">
                Software Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/5 text-white/90 border border-white/5 px-3.5 py-1.5 rounded-full font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Dynamic CTA button */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-display font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-lg shadow-brand-purple/15 hover:shadow-brand-purple/25 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              data-hover
            >
              <Send size={12} />
              <span>Discuss Similar Project</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* 4. Infinite Loop Navigation Showcase at bottom */}
      <div className="mt-24 pt-12 border-t border-white/5 text-left">
        <span className="text-[10px] font-black tracking-widest text-brand-purple uppercase">
          Infinite Discoveries
        </span>
        <h3 className="font-display font-black text-2xl text-white mt-1 mb-8">
          Next Masterpiece
        </h3>

        <motion.a
          href={`#project-${nextProject.id}`}
          whileHover={{ y: -4 }}
          className="group relative block rounded-3xl overflow-hidden h-40 md:h-52 bg-zinc-950 border border-white/5 shadow-xl"
          data-hover
        >
          <img
            src={nextProject.image}
            alt={nextProject.title}
            className="w-full h-full object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-70"
          />
          {/* Cover gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

          {/* Absolute content banner */}
          <div className="absolute inset-y-0 left-6 md:left-10 flex flex-col justify-center">
            <span className="text-[9px] font-black tracking-widest text-brand-cyan uppercase">
              {nextProject.category}
            </span>
            <h4 className="font-display font-black text-xl md:text-3xl text-white mt-1 group-hover:text-brand-cyan transition-colors">
              {nextProject.title}
            </h4>
            
            <div className="flex items-center gap-1.5 text-xs text-white/60 font-semibold mt-3 group-hover:text-white transition-colors">
              <span>View Case Study</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.a>
      </div>

      {/* 5. Lightbox Modal Overlay View */}
      <AnimatePresence>
        {lightboxImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setLightboxImageIndex(null)}
          >
            {/* Top Close Bar button */}
            <button
              onClick={() => setLightboxImageIndex(null)}
              className="absolute top-5 right-5 z-[10000] bg-black/60 hover:bg-brand-purple text-white p-2.5 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              data-hover
            >
              <X size={20} />
            </button>

            {/* Gallery Left arrow trigger */}
            <button
              onClick={handlePrevLightbox}
              className="absolute left-4 z-[10000] bg-black/60 hover:bg-brand-purple text-white p-3 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              data-hover
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image display container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.gallery[lightboxImageIndex]}
                alt={`${project.title} Zoom View ${lightboxImageIndex + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              
              {/* Bottom Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white/90">
                {lightboxImageIndex + 1} / {project.gallery.length}
              </div>
            </motion.div>

            {/* Gallery Right arrow trigger */}
            <button
              onClick={handleNextLightbox}
              className="absolute right-4 z-[10000] bg-black/60 hover:bg-brand-purple text-white p-3 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              data-hover
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetails;
