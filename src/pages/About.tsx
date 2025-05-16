
import { useEffect, useRef, useState } from "react";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";

interface StoryItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

const storyItems: StoryItem[] = [
  {
    id: 1,
    year: "2010",
    title: "The Beginning",
    description: "Gar's Barbershop was founded with a simple mission: to provide exceptional grooming services in a welcoming environment."
  },
  {
    id: 2,
    year: "2013",
    title: "Growing Reputation",
    description: "After three years of hard work and dedication, Gar's Barbershop became known as one of the premier barbershops in Maple Shade."
  },
  {
    id: 3,
    year: "2016",
    title: "Expansion",
    description: "Due to increasing demand, we expanded our space and services to accommodate our growing clientele."
  },
  {
    id: 4,
    year: "2020",
    title: "Adapting & Improving",
    description: "During challenging times, we implemented innovative safety measures and an appointment system to ensure the best experience for our clients."
  },
  {
    id: 5,
    year: "Present",
    title: "Continuing Excellence",
    description: "Today, we continue our commitment to quality, community, and craftsmanship, maintaining our reputation as Maple Shade's premier barbershop."
  }
];

const About = () => {
  const [visibleItems, setVisibleItems] = useState<{[key: number]: boolean}>({});
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-id'));
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="400px"
      >
        <div className="flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A tradition of excellence in men's grooming since 2010
            </p>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Story</h2>
            <p className="section-subheading">
              From our humble beginnings to becoming Maple Shade's premier barbershop
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {storyItems.map((item, index) => (
              <div 
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                data-id={item.id}
                className={`flex mb-12 transition-all duration-700 ${
                  visibleItems[item.id] 
                    ? "opacity-100 transform translate-x-0" 
                    : "opacity-0 transform translate-x-24"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mr-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-barber-accent text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < storyItems.length - 1 && (
                      <div className="w-1 bg-barber-accent/20 flex-grow mt-2"></div>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-1 text-barber-accent font-semibold">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-barber-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Philosophy Section */}
      <section className="py-16 bg-barber-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-barber-primary mb-4">Our Philosophy</h2>
                <p className="text-gray-600 mb-4">
                  At Gar's Barbershop, we believe that a great haircut is more than just a service—it's an experience. We take pride in our craft and are dedicated to helping you look and feel your best.
                </p>
                <p className="text-gray-600 mb-4">
                  Our approach combines traditional barbering techniques with modern styles to deliver results that are both classic and contemporary.
                </p>
                <p className="text-gray-600">
                  We value the relationships we build with our clients, and many have been with us since we first opened our doors. We're not just a barbershop; we're a community fixture that's proud to serve Maple Shade.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1622286342548-796395d7ccad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="Barbershop interior" 
                  className="rounded-lg shadow-xl hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Meet Our Skilled Team</h2>
            <p className="section-subheading">
              Experienced professionals dedicated to helping you look your best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-barber-light p-6 rounded-lg text-center hover-scale">
              <div className="mb-4 relative overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1620574504614-8826dcf4a469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="Gar - Owner & Master Barber" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-barber-primary">Gar</h3>
              <p className="text-barber-accent font-medium">Owner & Master Barber</p>
              <p className="mt-2 text-gray-600">
                With over 20 years of experience, Gar brings unmatched skill and precision to every haircut.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-barber-light p-6 rounded-lg text-center hover-scale">
              <div className="mb-4 relative overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="Mike - Senior Barber" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-barber-primary">Mike</h3>
              <p className="text-barber-accent font-medium">Senior Barber</p>
              <p className="mt-2 text-gray-600">
                Specializing in classic cuts and hot towel shaves, Mike's attention to detail is second to none.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-barber-light p-6 rounded-lg text-center hover-scale">
              <div className="mb-4 relative overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="James - Barber" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-barber-primary">James</h3>
              <p className="text-barber-accent font-medium">Barber</p>
              <p className="mt-2 text-gray-600">
                James excels at contemporary styles and is known for his impeccable beard grooming techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1585747860715-2ba37e752b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        height="350px"
        overlayOpacity={0.7}
      >
        <div className="flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your appointment today and see why we're Maple Shade's preferred barbershop.
            </p>
            <Button 
              size="lg"
              className="bg-barber-accent hover:bg-barber-accent/90 text-white"
              onClick={() => window.open("https://squareup.com/appointments", "_blank")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default About;
