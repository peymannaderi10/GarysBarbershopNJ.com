import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import floatingCircleAnimation from "./lottie/floating-circle.json";

interface LottieAnimationDividerProps {
  className?: string;
}

const LottieAnimationDivider: React.FC<LottieAnimationDividerProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative h-24 bg-white ${className}`}
      aria-hidden="true"
    >
      {/* Top-left animation */}
      <div
        className={`absolute top-0 left-0 w-24 h-24 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ display: prefersReducedMotion ? 'none' : 'block' }}
      >
        <Lottie
          animationData={floatingCircleAnimation}
          loop={true}
          autoplay={isVisible}
        />
      </div>

      {/* Bottom-right animation */}
      <div
        className={`absolute bottom-0 right-0 w-24 h-24 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          display: prefersReducedMotion ? 'none' : 'block',
          transform: "rotate(180deg)"
        }}
      >
        <Lottie
          animationData={floatingCircleAnimation}
          loop={true}
          autoplay={isVisible}
        />
      </div>
    </div>
  );
};

export default LottieAnimationDivider; 