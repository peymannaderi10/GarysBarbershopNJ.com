import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
}

const allServices: Service[] = [
  {
    id: 1,
    name: "Regular Haircut",
    description: "Traditional haircut with clippers and scissors including a hot towel neck shave.",
    price: "$40",
    duration: "30 min"
  },
  {
    id: 3,
    name: "Haircut & Beard Combo",
    description: "Our signature haircut combined with a professional beard trim.",
    price: "$50",
    duration: "45 min"
  },
  {
    id: 4,
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towels and premium products.",
    price: "$25",
    duration: "30 min"
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState<{ [key: number]: boolean }>({});
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-id'));
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    
    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section id="services" className="py-20 bg-barber-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            Professional grooming services tailored to enhance your look and confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceRefs.current[index] = el)}
              data-id={service.id}
              className={cn(
                "bg-white p-6 rounded-lg shadow-md hover-scale",
                "transform transition-all duration-500",
                isVisible[service.id] 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-16"
              )}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
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
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.location.href = "/services"}
                  className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white border border-barber-primary"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
