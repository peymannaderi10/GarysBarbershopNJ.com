
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
}: ParallaxSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (parallaxRef.current) {
      const elementTop = parallaxRef.current.getBoundingClientRect().top + window.scrollY;
      const elementCenter = elementTop + parallaxRef.current.offsetHeight / 2;
      const windowCenter = window.scrollY + window.innerHeight / 2;
      const distance = windowCenter - elementCenter;
      const parallaxFactor = distance * 0.2;
      
      parallaxRef.current.style.backgroundPositionY = `calc(${bgPosition} + ${parallaxFactor}px)`;
    }
  }, [scrollY, bgPosition]);

  return (
    <div 
      ref={parallaxRef}
      className="relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: bgPosition,
        backgroundSize: bgSize,
        backgroundAttachment: "fixed",
        height,
      }}
    >
      {overlay && (
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default ParallaxSection;
