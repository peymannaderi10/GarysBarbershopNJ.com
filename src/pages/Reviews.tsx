import { useEffect, useRef, useState } from "react";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";

// TypeScript declaration for window.sociablekit
declare global {
  interface Window {
    sociablekit?: {
      initSocialFeed: () => void;
      widgets: Array<unknown>;
    };
  }
}

// Create a GoogleReviews component that will use SociableKit
const GoogleReviews = () => {
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (!isScriptLoaded.current) {
      isScriptLoaded.current = true;

      // Create and append the script
      const script = document.createElement('script');
      script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Initialize once the script loads
      script.onload = () => {
        // Clean up any existing widgets before re-initializing
        if (window.sociablekit) {
          window.sociablekit.widgets = [];
          window.sociablekit.initSocialFeed();
        }
      };

      // Clean up
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div 
      ref={reviewsContainerRef}
      className="sk-ww-google-reviews" 
      data-embed-id="25557924"
    ></div>
  );
};

const Reviews = () => {
  const [rating, setRating] = useState<string>("4.8");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Function to get rating from SociableKit widget
    const getRating = () => {
      const ratingElement = document.querySelector('.sk-badge__value');
      if (ratingElement) {
        const newRating = ratingElement.textContent || "4.8";
        setRating(newRating);
      }
    };

    // Initial check
    getRating();

    // Check periodically until we find the rating
    const interval = setInterval(() => {
      getRating();
    }, 1000);

    // Clean up interval after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
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
              <span className="text-xl font-semibold">{rating}/5 on Google Reviews</span>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* SociableKit Google Reviews Widget */}
      <section className="py-16 bg-barber-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <GoogleReviews />
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
            Book your appointment today and see why our clients consistently rate us {rating}/5 stars.
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
