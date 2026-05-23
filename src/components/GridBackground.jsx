import React, { useEffect, useState } from 'react';

const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to percentages
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#030303] overflow-hidden">
      {/* Dynamic Grid Mesh Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radiant Glow Orbs */}
      {/* Purple Orb */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-brand-purple/20 blur-[120px] transition-all duration-[2000ms] ease-out animate-float-slow"
        style={{
          top: `${20 + (mousePosition.y * 0.15)}%`,
          left: `${15 + (mousePosition.x * 0.15)}%`,
        }}
      />

      {/* Cyan Orb */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-brand-cyan/15 blur-[140px] transition-all duration-[2500ms] ease-out animate-float-medium"
        style={{
          bottom: `${10 - (mousePosition.y * 0.15)}%`,
          right: `${10 - (mousePosition.x * 0.15)}%`,
        }}
      />

      {/* Gold Orb for highlights */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-[110px] transition-all duration-[3000ms] ease-out animate-float-fast"
        style={{
          top: `${50 + (mousePosition.y * 0.08)}%`,
          right: `${30 + (mousePosition.x * 0.08)}%`,
        }}
      />

      {/* Subtly moving diagonal lines */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030303]/40 to-[#030303] pointer-events-none" />
    </div>
  );
};

export default GridBackground;
