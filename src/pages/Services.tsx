import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: "haircuts" | "beards" | "specialty";
  bookingUrl: string;
}

const allServices: ServiceItem[] = [
  // Haircuts
  {
    id: 1,
    name: "Men's Haircut",
    description: "Traditional haircut with clippers and scissors including a hot towel neck shave.",
    price: "$40",
    duration: "30 min",
    category: "haircuts",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/NWNL6XNAZP5QWTTGPA4MWYSB"
  },
  {
    id: 2,
    name: "Senior Haircut",
    description: "Traditional haircut with clippers and scissors for clients 62 years and older.",
    price: "$30",
    duration: "30 min",
    category: "haircuts",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/3EMY6RDAX54BC2VWM3EFRTWZ"
  },
  {
    id: 3,
    name: "Shape Up",
    description: "Quick shape up service to keep your hairline looking fresh and clean.",
    price: "Price Varies",
    duration: "30 min",
    category: "haircuts",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/HK5AIVTW6A745DBGGN7ZMDIL"
  },
  // Beard Services
  {
    id: 4,
    name: "Beard Trim",
    description: "Shape and define your beard with precision trimming and styling.",
    price: "Price Varies",
    duration: "30 min",
    category: "beards",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/ZM7Y66KYBXMJ63UD7RGJ7BWA"
  },
  {
    id: 5,
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towels and premium products.",
    price: "$25",
    duration: "30 min",
    category: "beards",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/FQJJIDWSWJY2KI7JDRXBXQTH"
  },
  {
      id: 6,
    name: "Haircut, Beard & Eyebrows Combo",
    description: "Complete grooming package including haircut, beard trim, and eyebrow shaping with razor service.",
    price: "$55",
    duration: "1 hour",
    category: "beards",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/7I5AIVBIXYC4ULRIBOGLWXBH"
  },
  // Specialty Services
  {
    id: 7,
    name: "Haircut & Beard Combo",
    description: "Our signature haircut combined with a professional beard trim.",
    price: "$50",
    duration: "45 min",
    category: "specialty",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/GMUCHER6YAB6TIUOUVUNSA6R"
  },
  {
    id: 8,
    name: "Haircut & Wash",
    description: "Refreshing hair wash service with premium products.",
    price: "$50",
    duration: "30 min",
    category: "specialty",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/RARYTPLZYJWZSC6LFGRORCRV"
  },
  {
    id: 9,
    name: "Womens Haircut",
    description: "women's haircut service with precision cutting and styling.",
    price: "Price Varies",
    duration: "35 min",
    category: "specialty",
    bookingUrl: "https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services/FUVB2ADNPTHOUIODZ6N7C6YP"
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "haircuts" | "beards" | "specialty">("all");
  const [visibleServices, setVisibleServices] = useState<{[key: number]: boolean}>({});
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-id'));
          if (entry.isIntersecting) {
            setVisibleServices(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeCategory]);
  
  const filteredServices = activeCategory === "all" 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);
  
  // Structured Data for Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gary's Barber Shop",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Maple Shade",
        "addressRegion": "NJ"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Barber Shop Services",
      "itemListElement": allServices.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        "price": service.price,
        "priceCurrency": "USD"
      }))
    }
  };
  
  return (
    <>
      <SEO
        title="Services & Pricing - Gary's Barber Shop | Professional Haircuts, Beard Trims & Hot Towel Shaves | Maple Shade, NJ"
        description="Explore Gary's Barber Shop services in Maple Shade, NJ. Professional haircuts ($40), beard trims ($25), hot towel shaves ($25), specialty cuts, and more. Expert barber with 34+ years experience. Book your appointment today!"
        keywords="Barber Shop services Maple Shade, haircut prices NJ, beard trim, hot towel shave, professional barber services, men's grooming, specialty haircuts, bald fade, Gary's Barber Shop pricing"
        canonicalUrl="/services"
        ogImage="/images/garyBanner4.jpg"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <ParallaxSection
          bgImage="/images/garyBanner4.jpg"
          height="400px"
          mobileHeight="300px"
          bgPosition="top"
          parallaxIntensity={0.6}
          overlayOpacity={0.55}
        >
          <div className="flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-8xl font-bold mb-4 animate-fade-in-up text-white">Our Services</h1>
              <p className="text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Services tailored for your confidence</p>
            </div>
          </div>
        </ParallaxSection>
        
        {/* Services Section */}
        <section className="py-16 bg-barber-light">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg ${
                    activeCategory === "all" 
                      ? "bg-barber-primary text-white" 
                      : "bg-white hover:bg-barber-primary/10 text-gray-700"
                  }`}
                  onClick={() => setActiveCategory("all")}
                >
                  All Services
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                    activeCategory === "haircuts" 
                      ? "bg-barber-primary text-white" 
                      : "bg-white hover:bg-barber-primary/10 text-gray-700"
                  }`}
                  onClick={() => setActiveCategory("haircuts")}
                >
                  Haircuts
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 ${
                    activeCategory === "beards" 
                      ? "bg-barber-primary text-white" 
                      : "bg-white hover:bg-barber-primary/10 text-gray-700"
                  }`}
                  onClick={() => setActiveCategory("beards")}
                >
                  Facial Grooming
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 rounded-r-lg ${
                    activeCategory === "specialty" 
                      ? "bg-barber-primary text-white" 
                      : "bg-white hover:bg-barber-primary/10 text-gray-700"
                  }`}
                  onClick={() => setActiveCategory("specialty")}
                >
                  Specialty
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  data-id={service.id}
                  className={cn(
                    "bg-white p-6 rounded-lg shadow-md hover-scale",
                    "transform transition-all duration-500",
                    visibleServices[service.id] 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-16"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-barber-primary">{service.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-barber-accent font-semibold text-lg">{service.price}</span>
                      <span className="text-gray-500 text-sm">{service.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    className="w-full bg-barber-primary hover:bg-barber-primary/90"
                    onClick={() => window.open(service.bookingUrl, "_blank")}
                  >
                    Book Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Information */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-barber-primary mb-4">Additional Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Terms & Policies</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Please arrive 5 minutes before your appointment time</li>
                    <li>24-hour cancellation notice required</li>
                    <li>Late arrivals may result in shortened service time</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Payment Methods</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Cash</li>
                    <li>Credit/Debit Cards</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-barber-light p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">First Time Client?</h4>
                <p className="text-gray-700 mb-4">
                  If this is your first visit to Gary's Barber Shop, please arrive 10 minutes early to discuss your preferences and expectations with your barber. Learn more <a href="/about" className="text-barber-primary hover:underline">about our experienced team</a> and see examples of our work in our <a href="/gallery" className="text-barber-primary hover:underline">gallery</a>.
                </p>
                <p className="text-gray-700 mb-4">
                  For tips on maintaining your haircut between visits, check out our guide on <a href="/blogs/how-to-maintain-your-haircut" className="text-barber-primary hover:underline">how to maintain your haircut between visits</a> or learn about <a href="/blogs/choosing-right-haircut-face-shape" className="text-barber-primary hover:underline">choosing the right haircut for your face shape</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-barber-light text-barber-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for a Great Haircut?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your appointment online and experience the best Barber Shop in Maple Shade. Read our <a href="/reviews" className="text-barber-primary hover:underline">customer reviews</a> or <a href="/contact" className="text-barber-primary hover:underline">contact us</a> for more information.
            </p>
            <Button 
              size="lg"
              className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white border border-barber-primary"
              onClick={() => window.open("https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services", "_blank")}
            >
              Book an Appointment
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
