import { useRef, useEffect, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  bgImage: string;
  children: ReactNode;
  bgPosition?: string;
  bgSize?: string;
  height?: string;
  mobileHeight?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  ariaLabel?: string;
  parallaxIntensity?: number;
}

const ParallaxSection = ({
  bgImage,
  children,
  bgPosition = "center",
  bgSize = "cover",
  height = "500px",
  mobileHeight,
  overlay = true,
  overlayColor = "#000000",
  overlayOpacity = 0.5,
  ariaLabel,
  parallaxIntensity = 0.4,
}: ParallaxSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for mobile and reduced motion preference
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

  useEffect(() => {
    // Only apply parallax effect on desktop and when reduced motion is not preferred
    if (isMobile || prefersReducedMotion) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, prefersReducedMotion]);

  useEffect(() => {
    // Only apply parallax effect on desktop and when reduced motion is not preferred
    if (parallaxRef.current && !isMobile && !prefersReducedMotion) {
      const elementTop = parallaxRef.current.getBoundingClientRect().top + window.scrollY;
      const elementCenter = elementTop + parallaxRef.current.offsetHeight / 2;
      const windowCenter = window.scrollY + window.innerHeight / 2;
      const distance = windowCenter - elementCenter;
      const parallaxFactor = distance * parallaxIntensity;
      
      parallaxRef.current.style.backgroundPositionY = `calc(${bgPosition} + ${parallaxFactor}px)`;
    }
  }, [scrollY, bgPosition, isMobile, prefersReducedMotion, parallaxIntensity]);

  const currentHeight = isMobile && mobileHeight ? mobileHeight : height;

  return (
    <section 
      ref={parallaxRef}
      className="relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: bgPosition,
        backgroundSize: bgSize,
        // Don't use fixed attachment on mobile for better performance
        backgroundAttachment: isMobile || prefersReducedMotion ? "scroll" : "fixed",
        height: currentHeight,
      }}
      role="region"
      aria-label={ariaLabel}
    >
      {overlay && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
};

export default ParallaxSection;
