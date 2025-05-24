import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
      const yPos = -scrollY * 0.3;
      parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
  }, [scrollY]);

  return (
    <div className="relative h-[100vh] overflow-hidden flex items-center">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-barber-dark"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
            height: '130%', // Add extra height for parallax effect
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div 
          className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Look Sharp. Feel Confident.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Expert cuts & styling in Maple Shade, NJ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white text-lg px-8 py-6"
              onClick={() => window.open("https://squareup.com/appointments", "_blank")}
            >
              Book Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-barber-primary border-barber-primary hover:bg-barber-primary hover:text-white text-lg px-8 py-6"
              onClick={() => window.location.href = "/services"}
            >
              Services
            </Button>
          </div>
          <div className="mt-12 text-gray-300">
            <div className="flex justify-center items-center space-x-3">
              <div className="flex">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400">
                    {star}
                  </span>
                ))}
              </div>
              <span>4.84 on Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
