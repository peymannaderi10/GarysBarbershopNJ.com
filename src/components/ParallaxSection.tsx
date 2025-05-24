import { useRef, useEffect, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  bgImage: string;
  children: ReactNode;
  bgPosition?: string;
  bgSize?: string;
  height?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  ariaLabel?: string;
  enableMobileParallax?: boolean;
}

const ParallaxSection = ({
  bgImage,
  children,
  bgPosition = "center",
  bgSize = "cover",
  height = "500px",
  overlay = true,
  overlayColor = "#000000",
  overlayOpacity = 0.5,
  ariaLabel,
  enableMobileParallax = false,
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
    const handleScroll = () => {
      // Only update scrollY if parallax should be active
      if (!((isMobile && !enableMobileParallax) || prefersReducedMotion)) {
        setScrollY(window.scrollY);
      }
    };

    // Always set up the scroll listener immediately
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, prefersReducedMotion, enableMobileParallax]);

  useEffect(() => {
    // Apply parallax effect when: not on mobile OR enableMobileParallax is true, AND reduced motion is not preferred
    if (parallaxRef.current && !((isMobile && !enableMobileParallax) || prefersReducedMotion)) {
      // Simplified parallax calculation that works from the start
      const parallaxFactor = scrollY * 0.5; // Simpler calculation
      
      // Handle different bgPosition formats
      if (bgPosition.includes('%')) {
        // For percentage-based positions like "center 55%"
        const [horizontal, vertical] = bgPosition.split(' ');
        const verticalPercent = vertical || 'center';
        parallaxRef.current.style.backgroundPosition = `${horizontal} calc(${verticalPercent} - ${parallaxFactor}px)`;
      } else {
        // For keyword positions like "top", "center", "bottom"
        parallaxRef.current.style.backgroundPositionY = `calc(${bgPosition} - ${parallaxFactor}px)`;
      }
    }
  }, [scrollY, bgPosition, isMobile, prefersReducedMotion, enableMobileParallax]);

  return (
    <section 
      ref={parallaxRef}
      className="relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: bgPosition,
        backgroundSize: bgSize,
        // Use fixed attachment when parallax is enabled, scroll otherwise
        backgroundAttachment: ((isMobile && !enableMobileParallax) || prefersReducedMotion) ? "scroll" : "fixed",
        height,
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
