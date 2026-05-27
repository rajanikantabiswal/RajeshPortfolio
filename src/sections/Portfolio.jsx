import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Social Media Creative",
    "Logo Design",
    "Business Card Design",
    "Identity Card Design",
    "Flyer Design",
    "Dangler Creative",
    "Printed Materials",
    "Standee Design",
    "Newspaper Advertisement",
    "Hoarding Design",
    "Motion Graphics",
    "Video Editing",
  ];

  // Filter projects depending on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (projectId) => {
    // Navigate via hash router trigger
    window.location.hash = `#project-${projectId}`;
  };

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
      <div className="flex justify-start md:justify-center items-center flex-wrap pb-6 mb-12 gap-3 no-scrollbar scroll-smooth">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border cursor-pointer
              ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-brand-purple to-[#a855f7] border-transparent text-white shadow-md shadow-brand-purple/20"
                  : "bg-white/[0.02] border-white/5 text-text-muted hover:text-white hover:bg-white/5 hover:border-white/10"
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
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
