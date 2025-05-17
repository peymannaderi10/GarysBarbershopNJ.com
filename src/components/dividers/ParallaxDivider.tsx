import React, { useRef, useEffect, useState } from "react";

interface ParallaxDividerProps {
  className?: string;
}

const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ 
  className = ""
}) => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (!prefersReducedMotion) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (parallaxRef.current && !prefersReducedMotion) {
      const yPos = -(scrollY * 0.2);
      parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
  }, [scrollY, prefersReducedMotion]);

  return (
    <section className={`relative h-52 md:h-64 lg:h-80 overflow-hidden ${className}`}>
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e752b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: prefersReducedMotion ? 'none' : 'translate3d(0, 0, 0)',
        }}
      />
      <div className="absolute inset-0 bg-barber-primary/70 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Experience Barbering Excellence</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Quality, style, and service that exceeds expectations
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxDivider; 