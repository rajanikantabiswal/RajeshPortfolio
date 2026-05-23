import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position of mouse for outer ring
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Position of mouse for inner dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring animations for trailing effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile or has touch capability
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px circle
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);     // Center the 8px circle
      dotY.set(e.clientY - 4);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Track all interactive elements for hover scaling
    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, input, select, textarea, [data-hover]');
      targets.forEach((elem) => {
        elem.addEventListener('mouseenter', () => setHovered(true));
        elem.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    addHoverListeners();

    // Re-bind listener on DOM changes (e.g. category filters)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [isMobile, cursorX, cursorY, visible, dotX, dotY]);

  if (isMobile || !visible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-purple pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0)',
          borderColor: hovered ? '#22d3ee' : '#8b5cf6',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
      {/* Inner Pin Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-cyan pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
