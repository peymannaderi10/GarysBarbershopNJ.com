import React, { useRef, useEffect, useState } from "react";

interface ShapeDividerProps {
  className?: string;
  id?: string;
}

const ShapeDivider: React.FC<ShapeDividerProps> = ({ className = "", id }) => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Check device and motion preferences
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };
    
    checkMobile();
    checkReducedMotion();
    
    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQueryList.addEventListener('change', checkReducedMotion);
    window.addEventListener("resize", checkMobile);
    
    return () => {
      mediaQueryList.removeEventListener('change', checkReducedMotion);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  
  // Animation observer
  useEffect(() => {
    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const shapes = dividerRef.current?.querySelectorAll('.shape');
          shapes?.forEach((shape, index) => {
            // Use shorter animation delay on mobile for better UX
            const delay = isMobile ? index * 100 : index * 150;
            setTimeout(() => {
              shape.classList.add('animate-shape');
            }, delay);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, [isMobile, prefersReducedMotion]);

  return (
    <div 
      ref={dividerRef}
      id={id}
      className={`relative py-8 md:py-12 overflow-hidden bg-gradient-to-b from-white to-barber-light ${className}`}
      role="separator"
      aria-hidden="true"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Left decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-barber-primary/20 to-transparent" />
          
          {/* Center shapes - fewer on mobile */}
          <div className="flex space-x-1 md:space-x-2 px-3 md:px-6 relative">
            <div className="shape w-2 h-2 md:w-3 md:h-3 bg-barber-primary rounded-full opacity-0 transform translate-y-4" />
            {!isMobile && (
              <div className="shape w-4 h-4 md:w-5 md:h-5 bg-barber-secondary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: "0.2s" }} />
            )}
            <div className="shape w-6 h-6 md:w-8 md:h-8 bg-barber-primary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: isMobile ? "0.2s" : "0.4s" }} />
            {!isMobile && (
              <div className="shape w-4 h-4 md:w-5 md:h-5 bg-barber-secondary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: "0.6s" }} />
            )}
            <div className="shape w-2 h-2 md:w-3 md:h-3 bg-barber-primary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: isMobile ? "0.4s" : "0.8s" }} />
          </div>
          
          {/* Right decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-barber-primary/20 to-transparent" />
        </div>
      </div>
      
      {/* Background decorative elements - fewer on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
            <div className="shape w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-barber-primary/10 opacity-0 transform scale-0" style={{ animationDelay: "0.3s" }} />
          </div>
          <div className="absolute top-1/4 right-1/4">
            <div className="shape w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-barber-secondary/10 opacity-0 transform scale-0" style={{ animationDelay: "0.5s" }} />
          </div>
        </>
      )}
      <div className="absolute bottom-1/4 left-1/3">
        <div className="shape w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-barber-primary/10 opacity-0 transform scale-0" style={{ animationDelay: isMobile ? "0.5s" : "0.7s" }} />
      </div>
      {!isMobile && (
        <div className="absolute bottom-1/2 right-1/3">
          <div className="shape w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-barber-secondary/10 opacity-0 transform scale-0" style={{ animationDelay: "0.9s" }} />
        </div>
      )}
    </div>
  );
};

export default ShapeDivider; 