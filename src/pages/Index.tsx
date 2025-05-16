
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      <Services />
      
      {/* About Section */}
      <section className="py-20 bg-barber-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Gary's Barbershop</h2>
            <p className="text-xl mb-8">
              With over 15 years of experience in the industry, we pride ourselves on delivering exceptional haircuts and grooming services in a relaxed, welcoming environment.
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-barber-primary"
              onClick={() => window.location.href = "/about"}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Parallax Testimonial Section */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        height="400px"
        overlayOpacity={0.7}
      >
        <div className="flex items-center justify-center h-full">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-3xl font-bold mb-6">What Our Clients Say</h3>
              <blockquote className="text-xl italic mb-6">
                "Gary's is the only place I trust for my haircuts. Professional service and consistently great results every time."
              </blockquote>
              <p className="text-lg font-semibold">— Mike S.</p>
              <Button 
                className="mt-6 bg-barber-accent hover:bg-barber-accent/90"
                onClick={() => window.location.href = "/reviews"}
              >
                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Book Now CTA */}
      <section className="py-16 bg-barber-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-barber-primary mb-4">Ready for a Fresh Look?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Book your appointment today and experience the best haircut in Maple Shade.
            </p>
            <Button 
              size="lg"
              className="bg-barber-accent hover:bg-barber-accent/90 text-white px-8 py-6 text-lg"
              onClick={() => window.open("https://squareup.com/appointments", "_blank")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
