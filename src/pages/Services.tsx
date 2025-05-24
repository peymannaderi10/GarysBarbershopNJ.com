import { useEffect, useRef, useState } from "react";
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
}

const allServices: ServiceItem[] = [
  // Haircuts
  {
    id: 1,
    name: "Regular Haircut",
    description: "Traditional haircut with clippers and scissors including a hot towel neck shave.",
    price: "$40",
    duration: "30 min",
    category: "haircuts"
  },
  {
    id: 2,
    name: "Specialty Haircut",
    description: "Premium haircut service for fades, flat tops, and mohawks with extra attention to detail.",
    price: "$40",
    duration: "45 min",
    category: "haircuts"
  },
  {
    id: 3,
    name: "Boy's Haircut",
    description: "Haircut service for children 10 years of age and under.",
    price: "$35",
    duration: "25 min",
    category: "haircuts"
  },
  {
    id: 4,
    name: "Senior Haircut",
    description: "Haircut service for clients 62 years and older.",
    price: "$30",
    duration: "30 min",
    category: "haircuts"
  },
  {
    id: 5,
    name: "Line Up",
    description: "Quick shape up service to keep your hairline looking fresh and clean.",
    price: "$20",
    duration: "15 min",
    category: "haircuts"
  },
  // Beard Services
  {
    id: 6,
    name: "Beard Trim",
    description: "Shape and define your beard with precision trimming and styling.",
    price: "$25",
    duration: "20 min",
    category: "beards"
  },
  {
    id: 7,
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towels and premium products.",
    price: "$25",
    duration: "30 min",
    category: "beards"
  },
  {
    id: 8,
    name: "Eyebrows",
    description: "Trim and razor service to shape and clean up eyebrows.",
    price: "$5",
    duration: "10 min",
    category: "beards"
  },
  // Specialty Services
  {
    id: 9,
    name: "Haircut & Beard Combo",
    description: "Our signature haircut combined with a professional beard trim.",
    price: "$50",
    duration: "45 min",
    category: "specialty"
  },
  {
    id: 10,
    name: "Head Shave",
    description: "Clean head shave with straight razor and hot towel treatment.",
    price: "$40",
    duration: "30 min",
    category: "haircuts"
  },
  {
    id: 11,
    name: "Designs/Graphics",
    description: "Custom hair designs and graphics tailored to your style.",
    price: "$5 & up",
    duration: "15-30 min",
    category: "specialty"
  },
  {
    id: 12,
    name: "Hair Wash",
    description: "Refreshing hair wash service with premium products.",
    price: "$10",
    duration: "15 min",
    category: "specialty"
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
  
  return (
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
                  onClick={() => window.open("https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services", "_blank")}
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
                If this is your first visit to Gary's Barbershop, please arrive 10 minutes early to discuss your preferences and expectations with your barber.
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
            Book your appointment online and experience the best barbershop in Maple Shade.
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
  );
};

export default Services;
