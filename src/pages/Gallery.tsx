import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import ParallaxSection from "@/components/ParallaxSection";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery1.JPG",
    alt: "Gary's Barbershop interior and styling",
    title: "Our Professional Space"
  },
  // Placeholder images for future use
  { id: 2, src: "", alt: "Professional haircut in progress" },
  { id: 3, src: "", alt: "Classic barber tools and equipment" },
  { id: 4, src: "", alt: "Client receiving premium service" },
  { id: 5, src: "", alt: "Modern barbershop atmosphere" },
  { id: 6, src: "", alt: "Precision beard trimming" },
  { id: 7, src: "", alt: "Traditional hot towel service" },
  { id: 8, src: "", alt: "Satisfied customer results" },
  { id: 9, src: "", alt: "Professional barber at work" },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState<{[key: number]: boolean}>({});
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-id'));
          if (entry.isIntersecting) {
            setVisibleImages(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const openModal = (image: GalleryImage) => {
    if (image.src) {
      setSelectedImage(image);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Gary's Barbershop | Maple Shade, NJ</title>
        <meta name="description" content="Browse our gallery showcasing Gary's Barbershop in Maple Shade, NJ. See our professional workspace, quality work, and satisfied customers." />
        <meta name="keywords" content="Gary's Barbershop gallery, barbershop photos, Maple Shade barber, haircut gallery, professional barbershop" />
        <meta property="og:title" content="Gallery - Gary's Barbershop" />
        <meta property="og:description" content="Browse our gallery showcasing Gary's Barbershop in Maple Shade, NJ." />
        <meta property="og:image" content="/images/gallery1.JPG" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <main className="min-h-screen pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <ParallaxSection
          bgImage="/images/galleryBanner.jpg"
          height="400px"
          bgPosition="bottom"
          mobileHeight="300px"
          ariaLabel="Gallery Hero Image"
          parallaxIntensity={0.6}
          overlayOpacity={0.55}
        >
          <div className="flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl md:text-8xl font-bold mb-3 md:mb-4 animate-fade-in-up text-white">Our Gallery</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Take a look at our work!
              </p>
            </div>
          </div>
        </ParallaxSection>
        
        {/* Gallery Section */}
        <section className="py-10 md:py-16 bg-white" aria-labelledby="gallery-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="gallery-heading" className="section-heading">Our Work & Space</h2>
              <p className="section-subheading">
                See the craftsmanship and atmosphere that defines Gary's Barbershop
              </p>
            </div>
            
            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  ref={(el) => (imageRefs.current[index] = el)}
                  data-id={image.id}
                  className={`break-inside-avoid transition-all duration-700 ${
                    visibleImages[image.id] 
                      ? "opacity-100 transform translate-y-0" 
                      : "opacity-0 transform translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {image.src ? (
                    <div 
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() => openModal(image)}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-lg shadow-md bg-barber-light border-2 border-dashed border-barber-primary/30">
                      <div className="aspect-[4/5] flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 mx-auto mb-4 bg-barber-primary/10 rounded-full flex items-center justify-center">
                            <svg 
                              className="w-8 h-8 text-barber-primary" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-barber-primary font-medium text-sm">Coming Soon</p>
                          <p className="text-gray-500 text-xs mt-1">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-10 md:py-16 bg-barber-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-barber-primary mb-4">Ready to Experience Our Service?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Book your appointment today and become part of our gallery of satisfied customers.
            </p>
            <button 
              className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white border border-barber-primary px-8 py-3 rounded-md font-medium transition-colors duration-300"
              onClick={() => window.open("https://book.squareup.com/appointments/a1a1vs0akopii2/location/1XT9J9JGTM29G/services", "_blank")}
            >
              Book Your Appointment
            </button>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 py-16 px-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center">
            <div className="relative">
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-3 right-3 text-white hover:text-gray-300 z-10 bg-black bg-opacity-60 rounded-full p-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                aria-label="Close image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Gary's Barbershop Gallery",
        "description": "Photo gallery showcasing Gary's Barbershop in Maple Shade, NJ",
        "url": "https://garsbarbershop.com/gallery",
        "image": "/images/gallery1.JPG",
        "author": {
          "@type": "Organization",
          "name": "Gary's Barbershop"
        }
      })}} />
    </>
  );
};

export default Gallery; 