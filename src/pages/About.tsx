import { useEffect, useRef, useState } from "react";
import SEO from "@/components/SEO";
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
    year: "1988",
    title: "The Inspiration",
    description: "In 10th grade, Gary watched a friend buy a pair of clippers and start making good money cutting hair. Inspired by this, Gary saved up money from his job at a thrift store to buy his own clippers and began his barbering journey."
  },
  {
    id: 2,
    year: "1991",
    title: "Formal Training",
    description: "Gary enrolled at Gordon Phillips Hair School where he earned his barbering certification, laying the foundation for what would become a 34-year career in the craft."
  },
  {
    id: 3,
    year: "1992",
    title: "Klippers is Born",
    description: "Gary opened 'Klippers' at the Pennsauken Mart, an indoor flea market. The name came from his oldest client, Anthony Thompson, who has been with Gary since day one and continues to visit today."
  },
  {
    id: 4,
    year: "2003",
    title: "A New Chapter",
    description: "When the Pennsauken Mart was torn down for apartments, Gary chose to stay in the area and opened Gary's Barber Shop in Maple Shade, bringing his loyal clientele to a new home."
  },
  {
    id: 5,
    year: "Present",
    title: "34 Years Strong",
    description: "Today, Gary continues perfecting his craft in a freshly renovated shop with Baltimore Ravens purple and gray theme, serving his community with the same dedication and skill that has kept clients like Anthony coming back for over three decades."
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

  // Structured Data for About Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Gary's Barber Shop",
      "founder": {
        "@type": "Person",
        "name": "Gary",
        "jobTitle": "Master Barber",
        "description": "Professional barber with 34+ years of experience, specializing in bald fades and crisp lineups"
      },
      "foundingDate": "1992",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Maple Shade",
        "addressRegion": "NJ"
      },
      "description": "Gary's Barber Shop has been serving the community since 1992, starting as Klippers at Pennsauken Mart and moving to Maple Shade in 2003. Specializing in professional men's grooming with 34+ years of experience."
    }
  };
  
  return (
    <>
      <SEO
        title="About Gary's Barber Shop | Master Barber with 34+ Years Experience | Maple Shade, NJ"
        description="Meet Gary, master barber with 34+ years experience serving Maple Shade, NJ. From Klippers at Pennsauken Mart in 1992 to Gary's Barber Shop since 2003. Specializing in bald fades, crisp lineups, and traditional barbering."
        keywords="Gary's Barber Shop about, master barber Maple Shade, 34 years experience, barbershop history, Klippers Pennsauken Mart, professional barber, bald fade specialist, traditional barbering"
        canonicalUrl="/about"
        ogImage="/images/garyBannerAbout.JPG"
        structuredData={structuredData}
      />
      
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
                Excellence in men's grooming since 1992
              </p>
            </div>
          </div>
        </ParallaxSection>
        
        {/* Our Story Section */}
        <section className="py-10 md:py-16 bg-white" aria-labelledby="our-story-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="our-story-heading" className="section-heading">Our Story</h2>
              <p className="section-subheading">
                34 years of experience from Pennsauken Mart to Maple Shade. Check out our <a href="/services" className="text-barber-primary hover:underline">professional services</a> and see our work in the <a href="/gallery" className="text-barber-primary hover:underline">gallery</a>.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Timeline */}
                <div className="max-w-4xl">
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
                
                {/* Klippers Photo */}
                <div className="lg:sticky lg:top-24">
                  <div className="bg-barber-light/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-barber-primary mb-3 text-center">The Original Klippers</h3>
                    <div className="relative overflow-hidden rounded-lg shadow-xl hover-scale">
                      <img 
                        src="/images/Klippers.JPG" 
                        alt="Gary holding his original Klippers Barber Shop sign from Pennsauken Mart" 
                        className="w-full h-auto rounded-lg"
                        width="600"
                        height="800"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 text-sm text-gray-600 text-center">
                      Gary with his original "Klippers" sign from the Pennsauken Mart era (1992-2003). The name was suggested by his loyal client Anthony Thompson, who still visits today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet Gary Section */}
        <section className="py-10 md:py-16 bg-barber-light" aria-labelledby="meet-gary-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="meet-gary-heading" className="section-heading">Meet Gary</h2>
              <p className="section-subheading">
                The master barber with 34 years of experience and a passion for perfect fades
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto" ref={garyRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div 
                  className={`relative overflow-hidden rounded-lg mx-auto w-full max-w-sm md:max-w-md h-96 md:h-[35rem] hover-scale transition-all duration-1000 ${
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
                  <p className="text-barber-accent font-medium mb-4">Owner & Master Barber - 34 Years Experience</p>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">
                    Gary's barbering journey began in 10th grade when he was inspired by a friend who made good money cutting hair. After saving up from his thrift store job for his first clippers, Gary knew he'd found his calling.
                  </p>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">
                    Trained at Gordon Phillips Hair School in 1991, Gary started "Klippers" at the Pennsauken Mart in 1992. When the mart was demolished in 2003, he brought his loyal clientele to Maple Shade, where he's been serving the community ever since.
                  </p>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">
                    Specializing in bald fades - his personal favorite - Gary takes pride in creating smooth, clean transitions and crisp lineups. His oldest client, Anthony Thompson, has been coming since 1992 and even suggested the original "Klippers" name.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Known for his sports knowledge, friendly personality, and spotless shop, Gary operates by appointment only to ensure each client gets his full, dedicated attention without any waiting.
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
                    At Gary's Barber Shop, we believe a great haircut comes down to three things: a blurry fade, a crisp lineup, and having a laugh while you're in the chair.
                  </p>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    Gary approaches each new client by carefully assessing their hair texture, previous style, head shape, and styling preferences. Whether you use product or prefer a natural look, he'll work with you to create the perfect cut for your lifestyle. <a href="/services" className="text-barber-primary hover:underline">Explore our services</a> to see what we offer.
                  </p>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    After 34 years in the business, Gary stays current with trends through hair shows, conventions, and staying connected with the barbering community. He cuts all hair types and handles everyone from kids to seniors with the same friendly, professional approach.
                  </p>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    Gary's commitment to excellence is reflected in his ongoing education and connection to the professional barbering community. Read our expert guides on <a href="/blogs/choosing-right-haircut-face-shape" className="text-barber-primary hover:underline">choosing the right haircut for your face shape</a> and <a href="/blogs/beard-grooming-guide" className="text-barber-primary hover:underline">complete beard grooming techniques</a>.
                  </p>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    This recently renovated shop, featuring Baltimore Ravens purple and gray colors, provides a trusted place where the Maple Shade community knows they'll always get exceptional haircuts in a pleasant, clean atmosphere - and right on time for their appointment. <a href="/contact" className="text-barber-primary hover:underline">Contact us</a> to schedule your visit or read our <a href="/reviews" className="text-barber-primary hover:underline">customer reviews</a>.
                  </p>
                  <Button 
                    className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white border border-barber-primary"
                    onClick={() => window.open("https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services", "_blank")}
                  >
                    Book Your Appointment
                  </Button>
                </div>
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img 
                    src="/images/philosphy.JPG" 
                    alt="Gary's Barber Shop interior showing professional workspace and Baltimore Ravens themed decor" 
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
    </>
  );
};

export default About;
