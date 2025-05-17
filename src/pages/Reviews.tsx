import { useEffect } from "react";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load SociableKit script
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.defer = true;
    script.async = true;
    
    // Clean up function to remove the script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://widgets.sociablekit.com/google-reviews/widget.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="400px"
      >
        <div className="flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up text-white">Customer Reviews</h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              See what our clients have to say about their experience at Gary's Barbershop
            </p>
            <div className="mt-6 flex justify-center items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    {star}
                  </span>
                ))}
              </div>
              <span className="text-xl font-semibold">4.84 on Google Reviews</span>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* SociableKit Google Reviews Widget */}
      <section className="py-16 bg-barber-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* SociableKit Widget */}
            <div className="sk-ww-google-reviews" data-embed-id="25557924"></div>
          </div>
        </div>
      </section>
      
      {/* Write A Review Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-barber-primary mb-4">Love Your Experience?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We appreciate your feedback! If you enjoyed your visit to Gary's Barbershop, please consider leaving us a review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white"
              onClick={() => window.open("https://g.page/r/GarsBarberShop/review", "_blank")}
            >
              Leave a Google Review
            </Button>
            <Button 
              className="bg-barber-button hover:bg-barber-button/90 text-white"
              onClick={() => window.open("https://www.facebook.com/GarsBarberShop/reviews/", "_blank")}
            >
              Leave a Facebook Review
            </Button>
          </div>
        </div>
      </section>
      
      {/* Book Now CTA */}
      <section className="py-16 bg-barber-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and see why our clients consistently rate us 4.8+ stars.
          </p>
          <Button 
            size="lg"
            className="bg-barber-button hover:bg-barber-button/90 text-white px-8"
            onClick={() => window.open("https://squareup.com/appointments", "_blank")}
          >
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
