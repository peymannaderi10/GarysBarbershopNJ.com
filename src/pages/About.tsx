import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
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
    description: "Gary's Barbershop was founded with a simple mission: to provide exceptional grooming services in a welcoming environment."
  },
  {
    id: 2,
    year: "2013",
    title: "Growing Reputation",
    description: "After three years of hard work and dedication, Gary's Barbershop became known as one of the premier barbershops in Maple Shade."
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
  const garyRef = useRef<HTMLDivElement>(null);
  const [garyVisible, setGaryVisible] = useState(false);
  
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
    
    // Gary section observer
    const garyObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setGaryVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (garyRef.current) {
      garyObserver.observe(garyRef.current);
    }
    
    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (garyRef.current) {
        garyObserver.unobserve(garyRef.current);
      }
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <title>About Gary's Barbershop | Maple Shade, NJ</title>
        <meta name="description" content="Learn the story of Gary's Barbershop in Maple Shade, NJ. From our founding in 2010 to today, discover our dedication to quality haircuts and exceptional service." />
        <meta name="keywords" content="Gary's Barbershop, barbershop history, Maple Shade barber, men's grooming, barber story" />
        <meta property="og:title" content="About Gary's Barbershop" />
        <meta property="og:description" content="Learn the story of Gary's Barbershop in Maple Shade, NJ. From our founding in 2010 to today, discover our dedication to quality haircuts and exceptional service." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621605815971-fbc98d665033" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <main className="min-h-screen pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <ParallaxSection
          bgImage="/images/garyBannerAbout.JPG"
          height="400px"
          mobileHeight="300px"
          ariaLabel="About Us Hero Image"
          parallaxIntensity={0.6}
          overlayOpacity={0.55}
        >
          <div className="flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl md:text-8xl font-bold mb-3 md:mb-4 animate-fade-in-up text-white">About Us</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Excellence in men's grooming since 2010
              </p>
            </div>
          </div>
        </ParallaxSection>
        
        {/* Our Story Section */}
        <section className="py-10 md:py-16 bg-white overflow-x-hidden" aria-labelledby="our-story-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="our-story-heading" className="section-heading">Our Story</h2>
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
                  className={`flex mb-8 md:mb-12 transition-all duration-700 ${
                    visibleItems[item.id] 
                      ? "opacity-100 transform translate-x-0" 
                      : "opacity-0 transform translate-x-24"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mr-4 md:mr-8">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-barber-primary text-white flex items-center justify-center font-bold text-sm md:text-base">
                        {index + 1}
                      </div>
                      {index < storyItems.length - 1 && (
                        <div className="w-1 bg-barber-button/20 flex-grow mt-2"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-barber-accent font-semibold text-sm md:text-base">
                      {item.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-barber-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Meet Gary Section */}
        <section className="py-10 md:py-16 bg-barber-light overflow-x-hidden" aria-labelledby="meet-gary-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="meet-gary-heading" className="section-heading">Meet Gary</h2>
              <p className="section-subheading">
                The master barber behind every exceptional cut and style
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto" ref={garyRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div 
                  className={`relative overflow-hidden rounded-lg mx-auto w-full max-w-sm md:max-w-md h-80 md:h-96 hover-scale transition-all duration-1000 ${
                    garyVisible 
                      ? "opacity-100 transform translate-x-0" 
                      : "opacity-0 transform -translate-x-24"
                  }`}
                >
                  <img 
                    src="/images/meetGary.JPG" 
                    alt="Gary - Owner & Master Barber" 
                    className="object-cover w-full h-full rounded-lg shadow-xl"
                    width="600"
                    height="600"
                    loading="lazy"
                  />
                </div>
                
                <div 
                  className={`bg-white p-6 md:p-8 rounded-lg transition-all duration-1000 ${
                    garyVisible 
                      ? "opacity-100 transform translate-x-0" 
                      : "opacity-0 transform translate-x-24"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <p className="text-barber-accent font-medium mb-4">Owner & Master Barber</p>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">
                    With over 20 years of experience, Gary brings unmatched skill and precision to every haircut. His journey in barbering began with a passion for helping people look and feel their best.
                  </p>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">
                    Specializing in classic cuts, modern styles, and hot towel shaves, Gary's attention to detail and personalized approach keeps clients coming back year after year.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    As a one-man operation, Gary takes pride in providing consistent, high-quality service where every client receives his full attention and expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-10 md:py-16 bg-white" aria-labelledby="philosophy-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div>
                  <h2 id="philosophy-heading" className="text-2xl md:text-3xl font-bold text-barber-primary mb-4">Our Philosophy</h2>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    At Gary's Barbershop, we believe that a great haircut is more than just a service, it's an experience. We take pride in our craft and are dedicated to helping you look and feel your best.
                  </p>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    Our approach combines traditional barbering techniques with modern styles to deliver results that are both classic and contemporary.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    We value the relationships we build with our clients, and many have been with us since we first opened our doors. We're not just a barbershop; we're a community fixture that's proud to serve Maple Shade.
                  </p>
                </div>
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img 
                    src="/images/philosphy.JPG" 
                    alt="Gary's Barbershop interior" 
                    className="object-cover w-full h-full rounded-lg shadow-xl hover-scale"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BarberShop",
        "name": "Gary's Barbershop",
        "image": "/images/meetGary.JPG",
        "url": "https://garsbarbershop.com/about",
        "telephone": "+18564141015",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 E Main St",
          "addressLocality": "Maple Shade",
          "addressRegion": "NJ",
          "postalCode": "08052",
          "addressCountry": "US"
        },
        "founder": {
          "@type": "Person",
          "name": "Gary",
          "jobTitle": "Master Barber"
        },
        "foundingDate": "2010",
        "description": "Gary's Barbershop provides exceptional grooming services in a welcoming environment. From classic cuts to modern styles, we take pride in our craft."
      })}} />
    </>
  );
};

export default About;
