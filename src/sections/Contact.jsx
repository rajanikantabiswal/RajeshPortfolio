import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, Sparkles, Loader2, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const InstagramIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
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

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate premium async server request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative select-none"
    >
      {/* Background glow orb locally */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none -z-10" />

      <SectionHeader 
        number="07" 
        title="Let's Build Something Legendary" 
        subtitle="Get In Touch" 
        gradientTitle
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
        
        {/* Left Side: Contact details & Social Connect */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 text-left space-y-8"
        >
          <div>
            <h3 className="font-display font-extrabold text-2xl text-white mb-3">
              Have an idea? Let's discuss.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              I am always excited to partner on branding projects, social media creative design campaigns, printed materials, and video post-production editing. Dropping a line is the first step to crafting high-fidelity design stories.
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5">
              <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Email Me</p>
                <a href="mailto:rajeshbhuiya@gmail.com" className="text-sm font-semibold text-white hover:text-brand-cyan transition-colors" data-hover>
                  rajeshbhuiya@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5">
              <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Phone</p>
                <a href="tel:7978528177" className="text-sm font-semibold text-white hover:text-brand-purple transition-colors" data-hover>
                  +91 79785 28177
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-white">
                  Bhubaneswar, Odisha, IN
                </p>
              </div>
            </div>
          </div>

          {/* Glowing social connect grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest">Connect Socially</h4>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/swift_rajesh" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-full glass-card hover:bg-brand-purple/15 text-white/70 hover:text-white border border-white/5 hover:border-brand-purple/40 flex items-center justify-center transition-all duration-300"
                data-hover
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full glass-card hover:bg-brand-cyan/15 text-white/70 hover:text-white border border-white/5 hover:border-brand-cyan/40 flex items-center justify-center transition-all duration-300"
                data-hover
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full glass-card hover:bg-brand-gold/15 text-white/70 hover:text-white border border-white/5 hover:border-brand-gold/40 flex items-center justify-center transition-all duration-300"
                data-hover
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

        </motion.div>

        {/* Right Side: Contact Form panel */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 w-full"
        >
          <div className="glass-card p-6 md:p-10 rounded-3xl border border-white/5 relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative text-left">
                      <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-purple rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative text-left">
                      <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-cyan rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="relative text-left">
                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-gold rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                      placeholder="Project details..."
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative text-left">
                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">Message *</label>
                    <textarea 
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.02] border border-white/5 focus:border-brand-purple rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] resize-none"
                      placeholder="Write details of your design project..."
                    />
                  </div>

                  {/* Submit Button Trigger */}
                  <div className="text-left pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-display font-semibold text-sm tracking-wide rounded-full overflow-hidden transition-all duration-300 cursor-pointer bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 border border-white/10 w-full sm:w-auto"
                      data-hover
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending Proposal...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <CheckCircle size={56} className="text-brand-cyan animate-pulse" />
                  <h3 className="font-display font-bold text-2xl text-white">Message Dispatched!</h3>
                  <p className="text-sm text-text-muted max-w-sm">
                    Thank you! Your creative briefing proposal has been successfully delivered. Rajesh will reach back to you within 24 hours.
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-[10px] text-brand-purple font-bold uppercase tracking-wider">
                    <Sparkles size={12} className="animate-spin-slow text-brand-cyan" />
                    <span>Creative collaboration pending</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
