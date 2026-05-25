import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Video,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import Button from "../components/Button";
import profileImg from "../assets/hero.webp";
import portfolioPdf from "../assets/docs/RajeshBhuiyaPortfolio.pdf";
import resumePdf from "../assets/docs/RajeshBhuiyaResume.pdf";

const Hero = () => {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        {/* Left Content Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles size={12} className="animate-spin-slow text-brand-cyan" />
            <span>Creative Studio // Portfolio 2026</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]"
            >
              Rajesh Bhuiya
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient-purple-cyan tracking-tight"
            >
              Graphic Designer & Video Editor
            </motion.h2>
          </div>

          {/* Short Intro */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-muted max-w-xl font-normal leading-relaxed"
          >
            Creative and detail-oriented Graphic Designer with{" "}
            <strong className="text-white">7+ years of experience</strong> in
            branding, social media creatives, print media, motion graphics, and
            video editing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              variant="primary"
              href={portfolioPdf}
              download
              icon={ArrowRight}
            >
              View Portfolio
            </Button>
            <Button variant="secondary" onClick={() => handleScroll("contact")}>
              Hire Me
            </Button>
            <Button variant="glass" href={resumePdf} download icon={Download}>
              Resume
            </Button>
          </motion.div>

          {/* Core Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 pt-8 border-t border-white/5"
          >
            <div>
              <p className="font-display text-2xl md:text-3xl font-black text-white">
                7+
              </p>
              <p className="text-xs text-text-muted tracking-wider uppercase">
                Years Exp
              </p>
            </div>
            <div className="border-l border-white/10" />
            <div>
              <p className="font-display text-2xl md:text-3xl font-black text-white">
                500+
              </p>
              <p className="text-xs text-text-muted tracking-wider uppercase">
                Projects done
              </p>
            </div>
            <div className="border-l border-white/10" />
            <div>
              <p className="font-display text-2xl md:text-3xl font-black text-white">
                100%
              </p>
              <p className="text-xs text-text-muted tracking-wider uppercase">
                Happy Clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Graphic/Portrait Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Spinning Neon Glowing Ring Backdrops */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-purple via-transparent to-brand-cyan opacity-40 blur-xl animate-spin-slow pointer-events-none" />

            {/* Layered Decorative Grid Mask frames */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 scale-105 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl border border-brand-cyan/20 rotate-3 scale-95 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl border border-brand-purple/20 -rotate-3 scale-100 pointer-events-none animate-pulse" />

            {/* Profile Frame Box */}
            <div className="w-full h-full rounded-3xl overflow-hidden glass-card p-2 border border-white/10 relative">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-900 relative">
                <img
                  src={profileImg}
                  alt="Rajesh Bhuiya Profile"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Micro-Overlay elements */}
                <div className="absolute bottom-4 left-4 right-4 glass-card px-3 py-2 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">
                      Available for Hire
                    </span>
                  </div>
                  <span className="text-[9px] text-brand-cyan font-bold uppercase tracking-wider">
                    Bhubaneswar, IN
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Visual Creative Tags */}
            {/* Motion Graphics Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-3 rounded-2xl border border-white/10 flex items-center gap-2 shadow-xl"
            >
              <div className="p-1.5 bg-brand-purple/20 text-brand-purple rounded-lg">
                <Video size={16} />
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">
                Video Editor
              </span>
            </motion.div>

            {/* Graphic Design Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-10 glass-card p-3 rounded-2xl border border-white/10 flex items-center gap-2 shadow-xl"
            >
              <div className="p-1.5 bg-brand-cyan/20 text-brand-cyan rounded-lg">
                <ImageIcon size={16} />
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">
                Graphic Designer
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
