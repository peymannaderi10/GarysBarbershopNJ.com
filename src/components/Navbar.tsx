
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-barber-light shadow-lg py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={cn(
            "font-heading text-2xl md:text-3xl font-bold transition-colors duration-300",
            scrolled ? "text-barber-primary" : "text-white"
          )}>
            Gary's <span className={cn(
              "transition-colors duration-300",
              scrolled ? "text-barber-secondary" : "text-white"
            )}>Barbershop</span>
          </h1>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-md font-medium transition-colors duration-300",
                scrolled 
                  ? "text-barber-primary hover:text-barber-secondary" 
                  : "text-white hover:text-barber-light/80",
                location.pathname === link.path && (scrolled ? "text-barber-secondary" : "text-barber-light/80")
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className={cn(
              "ml-4 transition-colors duration-300",
              scrolled
                ? "bg-barber-primary hover:bg-barber-secondary text-white"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/30"
            )}
            onClick={() => window.open("https://squareup.com/appointments", "_blank")}
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "text-2xl",
              scrolled ? "text-barber-primary" : "text-white"
            )}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-barber-primary flex flex-col justify-center items-center transition-all duration-300 md:hidden",
          isOpen 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xl font-medium text-white hover:text-barber-light/80 transition-colors",
                location.pathname === link.path && "text-barber-light/80"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="mt-4 bg-white/10 hover:bg-white/20 text-white border border-white/30"
            onClick={() => window.open("https://squareup.com/appointments", "_blank")}
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
