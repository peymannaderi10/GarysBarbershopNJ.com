import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Scissors, Award, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import WaveDivider from "@/components/dividers/WaveDivider";
import DiagonalDivider from "@/components/dividers/DiagonalDivider";
import ShapeDivider from "@/components/dividers/ShapeDivider";

const Index = () => {
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    // Observer for feature cards with enhanced animations
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-feature');
        }
      });
    }, observerOptions);
    
    const featureElements = whyChooseUsRef.current?.querySelectorAll('.feature-animation');
    featureElements?.forEach(el => featureObserver.observe(el));
    
    // Observer for review animations
    const reviewObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-review');
        }
      });
    }, observerOptions);
    
    const reviewElements = reviewsRef.current?.querySelectorAll('.review-animation');
    reviewElements?.forEach(el => reviewObserver.observe(el));
    
    return () => {
      featureObserver.disconnect();
      reviewObserver.disconnect();
    };
  }, []);

  // Structured Data for Homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gary's Barber Shop",
    "image": "https://garsbarbershop.com/images/gallery1.JPG",
    "description": "Premier Barber Shop in Maple Shade, NJ offering professional haircuts, beard trims, hot towel shaves, and styling services. Expert barbers with years of experience.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Maple Shade",
      "addressRegion": "NJ",
      "postalCode": "08052",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.9526",
      "longitude": "-74.9915"
    },
    "telephone": "(856) 555-0123",
    "url": "https://garsbarbershop.com",
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 08:00-17:00",
      "Su 10:00-15:00"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Barber Shop Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Haircut",
            "description": "Professional men's haircuts and styling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beard Trim",
            "description": "Precision beard trimming and shaping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hot Towel Shave",
            "description": "Traditional hot towel shave experience"
          }
        }
      ]
    }
  };
  
  return (
    <>
      <SEO
        title="Gary's Barber Shop | Premier Barber Services in Maple Shade, NJ | Professional Haircuts & Styling"
        description="Experience the best Barber Shop in Maple Shade, NJ. Gary's Barber Shop offers professional haircuts, beard trims, hot towel shaves, and styling services. Expert barbers with 30+ years experience. Book your appointment today!"
        keywords="Barber Shop Maple Shade NJ, professional haircuts, beard trim, hot towel shave, men's grooming, barber services, hair styling, traditional Barber Shop, Gary's Barber Shop"
        canonicalUrl="/"
        ogImage="/images/hero.jpg"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen overflow-x-hidden">
        <Hero />
        
        {/* Wave divider between Hero and Why Choose Us */}
        <WaveDivider topColor="transparent" bottomColor="#ffffff" className="h-24 -mt-24 relative z-10" />
        
        {/* Why Choose Us Section */}
        <section className="py-24 bg-white" ref={whyChooseUsRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-heading">Why Choose Us?</h2>
              <p className="section-subheading">
                Experience the difference at Gary's Barber Shop
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="feature-animation float-animation opacity-0 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-barber-primary/10 rounded-full flex items-center justify-center">
                  <Scissors className="h-8 w-8 text-barber-primary" />
                </div>
                <h3 className="text-xl font-bold text-barber-primary text-center mb-4">Expert Craftsmanship</h3>
                <p className="text-gray-600 text-center">
                  Our barbers have years of professional experience and are fully certified to deliver precision cuts and styles. <a href="/about" className="text-barber-primary hover:underline">Learn more about our team</a>.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="feature-animation scale-animation opacity-0 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-barber-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-barber-primary" />
                </div>
                <h3 className="text-xl font-bold text-barber-primary text-center mb-4">Premium Experience</h3>
                <p className="text-gray-600 text-center">
                  From hot towel shaves to complimentary beverages, we elevate your grooming experience beyond the ordinary. <a href="/services" className="text-barber-primary hover:underline">View our services</a>.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="feature-animation rotate-animation opacity-0 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-barber-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-barber-primary" />
                </div>
                <h3 className="text-xl font-bold text-barber-primary text-center mb-4">Convenience</h3>
                <p className="text-gray-600 text-center">
                  Our online booking system makes scheduling easy, and our punctual service respects your valuable time. <a href="/contact" className="text-barber-primary hover:underline">Contact us</a> for more information.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Diagonal divider between Why Choose Us and Services */}
        <DiagonalDivider />
        
        <Services />
        
        {/* Shape divider between Services and Reviews */}
        <ShapeDivider />
        
        {/* What Our Clients Say Section */}
        <section className="py-20 bg-barber-light" ref={reviewsRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-heading">What Our Clients Say</h2>
              <p className="section-subheading">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Review Column */}
              <div className="space-y-6">
                {/* Review Card 1 */}
                <div className="review-animation slide-left-animation bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    "High quality! Mr. Gary takes his time and makes sure that your cut is exactly what you asked for. Definitely make an appointment. It takes no time to book, and guarantees your spot. But I will say that this was my first experience with Mr. Gary and I haven't had a high quality haircut like this in a long time. Definitely earned a customer for life. Go see him, you won't be disappointed!"
                  </blockquote>
                  <p className="font-semibold text-barber-primary">— Stanley Leak (Local Guide)</p>
                  <p className="text-sm text-gray-500">July 15, 2024</p>
                </div>
                
                {/* Review Card 2 */}
                <div className="review-animation fade-up-animation bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{ transitionDelay: "0.3s" }}>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    "Gary has been my barber since I was 3yrs old, my father's and brothers barber as well... I am now 33 and he now cuts my kids hair... best around, always a good environment for kids and adults."
                  </blockquote>
                  <p className="font-semibold text-barber-primary">— Brian Walker</p>
                  <p className="text-sm text-gray-500">November 23, 2024</p>
                </div>
                
                <div className="review-animation fade-up-animation text-center mt-6" style={{ transitionDelay: "0.5s" }}>
                  <Button 
                    className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white border border-barber-primary"
                    onClick={() => window.location.href = "/reviews"}
                  >
                    View All Reviews
                  </Button>
                </div>
              </div>
              
              {/* Image Column */}
              <div className="review-animation slide-right-animation">
                <div className="relative overflow-hidden rounded-lg shadow-xl h-full max-h-[600px]">
                  <img 
                      src="/images/homepageRating.JPG" 
                    alt="Satisfied client at Gary's Barber Shop showing 5-star Google rating" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 lg:translate-y-[-20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-primary/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-2xl font-bold">4.8+ Star Rating</p>
                      <p className="text-white/80">Based on Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Book Now CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-barber-primary mb-4">Ready for a Fresh Look?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Book your appointment today and experience the best haircut in Maple Shade. Visit our <a href="/gallery" className="text-barber-primary hover:underline">gallery</a> to see our work or <a href="/contact" className="text-barber-primary hover:underline">contact us</a> for more information.
              </p>
              <Button 
                size="lg"
                className="bg-barber-primary hover:bg-barber-secondary text-white px-8 py-6 text-lg"
                onClick={() => window.open("https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services", "_blank")}
              >
                Book Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
