import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";
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

  // Structured Data for Reviews Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gary's Barber Shop",
    "image": "https://garsbarbershop.com/images/bannerReview.jpg",
    "url": "https://garsbarbershop.com",
    "telephone": "(856) 414-1015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 E Main St",
      "addressLocality": "Maple Shade",
      "addressRegion": "NJ",
      "postalCode": "08052",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.95,
      "longitude": -74.99
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150+"
    }
  };
  
  return (
    <>
      <SEO
        title="Customer Reviews - Gary's Barber Shop | 4.8+ Star Rating | Maple Shade, NJ"
        description="Read authentic customer reviews for Gary's Barber Shop in Maple Shade, NJ. With a 4.8+ star Google rating, customers love our professional haircuts, friendly service, and expert barber Gary with 34+ years experience."
        keywords="Gary's Barber Shop reviews, customer testimonials, Google reviews, Barber Shop ratings, Maple Shade barber reviews, professional haircut reviews, 4.8 star Barber Shop"
        canonicalUrl="/reviews"
        ogImage="/images/bannerReview.jpg"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <ParallaxSection
          bgImage="/images/bannerReview.jpg"
          height="400px"
          mobileHeight="300px"
          ariaLabel="Customer Reviews Hero"
          parallaxIntensity={0.6}
          overlayOpacity={0.55}
        >
          <div className="flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl md:text-8xl font-bold mb-3 md:mb-4 animate-fade-in-up text-white">Customer Reviews</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Let our clients tell you about their experience
              </p>
              <div className="mt-4 md:mt-6 flex justify-center items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400 text-xl md:text-2xl">
                      {star}
                    </span>
                  ))}
                </div>
                <span className="text-lg md:text-xl font-semibold">{rating}/5 on Google Reviews</span>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* SociableKit Google Reviews Widget */}
        <section className="py-10 md:py-16 bg-barber-light" aria-labelledby="reviews-heading">
          <div className="sr-only" id="reviews-heading">Google Reviews</div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <GoogleReviews />
            </div>
          </div>
        </section>
        
        {/* Write A Review Section */}
        <section className="py-10 md:py-16 bg-white" aria-labelledby="write-review-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="write-review-heading" className="text-2xl md:text-3xl font-bold text-barber-primary mb-3 md:mb-4">Love Your Experience?</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              We appreciate your feedback! If you enjoyed your visit to Gary's Barber Shop, please consider leaving us a review. Check out our <a href="/services" className="text-barber-primary hover:underline">services</a> or <a href="/about" className="text-barber-primary hover:underline">learn more about our team</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white border border-barber-primary"
                onClick={() => window.open("https://g.page/r/GarsBarberShop/review", "_blank")}
              >
                Leave a Google Review
              </Button>
              <Button 
                variant="outline"
                className="border-barber-primary text-barber-primary hover:bg-barber-primary hover:text-white"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Reviews;
