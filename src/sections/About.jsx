import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  Calendar,
  Award,
  Target,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import brandingImg from "../assets/portfolio_social.webp";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const About = () => {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const details = [
    {
      icon: MapPin,
      label: "Location",
      value: "Bhubaneswar, Odisha",
      copyValue: "Bhubaneswar, Odisha",
      color: "text-brand-purple",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 79785 28177",
      copyValue: "7978528177",
      color: "text-brand-cyan",
    },
    {
      icon: Phone,
      label: "Alternate Phone",
      value: "+91 90404 36548",
      copyValue: "9040436548",
      color: "text-brand-cyan",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rajeshbhuiya@gmail.com",
      copyValue: "rajeshbhuiya@gmail.com",
      color: "text-brand-gold",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: "@swift_rajesh",
      copyValue: "swift_rajesh",
      color: "text-pink-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none"
    >
      <SectionHeader
        number="01"
        title="About My Creative Journey"
        subtitle="Who is Rajesh Bhuiya"
        gradientTitle
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Creative Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] glass-card border border-white/5 p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                src={brandingImg}
                alt="Rajesh Bhuiya Graphic Workspace"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Artistic Grid overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70" />
            </div>

            {/* Glowing Corner Badge */}
            <div className="absolute top-6 left-6 glass-card px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="p-2 bg-brand-purple/20 text-brand-purple rounded-xl">
                <Award size={20} className="animate-pulse" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm leading-none">
                  7+ Years
                </p>
                <p className="text-[10px] text-text-muted mt-0.5 font-semibold">
                  Of Excellence
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Narrative and details Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 text-left space-y-8"
        >
          {/* Headline Bio */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Crafting visual narratives that connect and convert.
            </h3>
            <p className="text-text-muted leading-relaxed text-base md:text-lg">
              Hello! I am <strong className="text-white">Rajesh Bhuiya</strong>,
              a passionate Graphic Designer and Video Editor based in
              Bhubaneswar, Odisha. I specialize in branding, social media
              creatives, print media, motion graphics, and marketing visuals.
            </p>
            <p className="text-text-muted leading-relaxed text-base">
              With more than{" "}
              <strong className="text-white">
                7 years of industry experience
              </strong>
              , I help brands and organizations create impactful visual
              communication, beautiful packaging aesthetics, and premium video
              editing. My goal is to combine design fundamentals with modern
              digital trends to bring ideas to life.
            </p>
          </div>

          {/* Details copy-on-click list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.map((item, idx) => {
              const Icon = item.icon;
              const isCopied = copiedText === item.label;

              return (
                <div
                  key={idx}
                  onClick={() => copyToClipboard(item.copyValue, item.label)}
                  className="group flex items-center justify-between p-4 rounded-2xl glass-card-interactive border border-white/5 cursor-pointer"
                  data-hover
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl bg-white/[0.03] ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-white mt-0.5 line-clamp-1">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  {/* Copy Feedback Icon overlay */}
                  <div className="text-text-muted hover:text-white p-1 ml-2 transition-colors duration-200">
                    <AnimatePresence mode="wait">
                      {isCopied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="text-brand-cyan"
                        >
                          <Check size={16} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ opacity: 0.4 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <Copy
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
