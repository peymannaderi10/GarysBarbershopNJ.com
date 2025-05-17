import React, { useRef, useEffect } from "react";

interface ShapeDividerProps {
  className?: string;
}

const ShapeDivider: React.FC<ShapeDividerProps> = ({ className = "" }) => {
  const dividerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const shapes = dividerRef.current?.querySelectorAll('.shape');
          shapes?.forEach((shape, index) => {
            setTimeout(() => {
              shape.classList.add('animate-shape');
            }, index * 150);
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
  }, []);

  return (
    <div 
      ref={dividerRef}
      className={`relative py-12 overflow-hidden bg-gradient-to-b from-white to-barber-light ${className}`}
      aria-hidden="true"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Left decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-barber-primary/20 to-transparent" />
          
          {/* Center shapes */}
          <div className="flex space-x-2 px-6 relative">
            <div className="shape w-3 h-3 bg-barber-primary rounded-full opacity-0 transform translate-y-4" />
            <div className="shape w-5 h-5 bg-barber-secondary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: "0.2s" }} />
            <div className="shape w-8 h-8 bg-barber-primary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: "0.4s" }} />
            <div className="shape w-5 h-5 bg-barber-secondary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: "0.6s" }} />
            <div className="shape w-3 h-3 bg-barber-primary rounded-full opacity-0 transform translate-y-4" style={{ animationDelay: "0.8s" }} />
          </div>
          
          {/* Right decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-barber-primary/20 to-transparent" />
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
        <div className="shape w-16 h-16 rounded-full border-2 border-barber-primary/10 opacity-0 transform scale-0" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="absolute top-1/4 right-1/4">
        <div className="shape w-12 h-12 rounded-full border-2 border-barber-secondary/10 opacity-0 transform scale-0" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="absolute bottom-1/4 left-1/3">
        <div className="shape w-10 h-10 rounded-full border-2 border-barber-primary/10 opacity-0 transform scale-0" style={{ animationDelay: "0.7s" }} />
      </div>
      <div className="absolute bottom-1/2 right-1/3">
        <div className="shape w-14 h-14 rounded-full border-2 border-barber-secondary/10 opacity-0 transform scale-0" style={{ animationDelay: "0.9s" }} />
      </div>
    </div>
  );
};

export default ShapeDivider; 