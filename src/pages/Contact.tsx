import { useEffect } from "react";
import SEO from "@/components/SEO";
import ParallaxSection from "@/components/ParallaxSection";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured Data for Contact Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Gary's Barbershop",
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
        "latitude": "39.9525",
        "longitude": "-75.0294"
      },
      "telephone": "(856) 414-1015",
      "url": "https://garsbarbershop.com",
      "openingHours": [
        "Mo-Fr 09:00-19:00",
        "Sa 08:00-17:00",
        "Su 10:00-15:00"
      ],
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card"]
    }
  };
  
  return (
    <>
      <SEO
        title="Contact Gary's Barbershop | Location, Hours & Appointment Booking | Maple Shade, NJ"
        description="Contact Gary's Barbershop in Maple Shade, NJ. Located at 12 E Main St. Call (856) 414-1015 or book online. Appointment-only barbershop with 34+ years experience. Get directions, hours, and FAQ answers."
        keywords="Gary's Barbershop contact, Maple Shade barbershop location, book appointment, (856) 414-1015, 12 E Main St Maple Shade NJ, barbershop hours, appointment booking"
        canonicalUrl="/contact"
        ogImage="https://images.unsplash.com/photo-1587909209111-5097ee578ec3"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <ParallaxSection
          bgImage="https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          height="400px"
        >
          <div className="flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up text-white">Contact Us</h1>
              <p className="text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Get in touch or visit our barbershop in Maple Shade, NJ
              </p>
            </div>
          </div>
        </ParallaxSection>
        
        {/* Contact Section */}
        <section className="py-16 bg-barber-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Map */}
              <div className="animate-fade-in-up">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <iframe 
                    title="Gary's Barbershop Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.032307229758!2d-75.02936842394836!3d39.952484971942556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c8fe24a3e871%3A0x49d7606af9e170f5!2s12%20E%20Main%20St%2C%20Maple%20Shade%2C%20NJ%2008052!5e0!3m2!1sen!2sus!4v1684678291377!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    className="min-h-[400px]"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="section-subheading">
                Answers to common questions about our services and policies. Check out our <a href="/services" className="text-barber-primary hover:underline">services and pricing</a> for more details.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-barber-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-barber-primary mb-2">Do I need an appointment?</h3>
                <p className="text-gray-600">
                  Yes, Gary's Barbershop operates by appointment only. This allows us to provide personalized attention to each client without long wait times. Learn more <a href="/about" className="text-barber-primary hover:underline">about our philosophy</a>.
                </p>
              </div>
              
              <div className="bg-barber-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-barber-primary mb-2">How do I schedule an appointment?</h3>
                <p className="text-gray-600">
                  You can book an appointment through our online booking system via Square, by calling us at (856) 414-1015, or in person during business hours.
                </p>
              </div>
              
              <div className="bg-barber-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-barber-primary mb-2">What if I need to cancel my appointment?</h3>
                <p className="text-gray-600">
                  We request at least 24 hours' notice for cancellations. This allows us to offer the time slot to another client. Frequent no-shows may result in prepayment requirements for future bookings.
                </p>
              </div>
              
              <div className="bg-barber-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-barber-primary mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept cash, all major credit/debit cards. See our full <a href="/services" className="text-barber-primary hover:underline">services and pricing</a> page for detailed information.
                </p>
              </div>
              
              <div className="bg-barber-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-barber-primary mb-2">What can I expect during my visit?</h3>
                <p className="text-gray-600">
                  Gary provides personalized service with 34+ years of experience. Check out our <a href="/gallery" className="text-barber-primary hover:underline">gallery</a> to see examples of our work and read <a href="/reviews" className="text-barber-primary hover:underline">customer reviews</a> to learn about other clients' experiences.
                </p>
              </div>
              
              <div className="bg-barber-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-barber-primary mb-2">How do I prepare for my appointment?</h3>
                <p className="text-gray-600">
                  Come with clean, dry hair and have a general idea of the style you want. For style inspiration, check out our guides on <a href="/blogs/choosing-right-haircut-face-shape" className="text-barber-primary hover:underline">choosing the right haircut for your face shape</a> or browse our <a href="/blogs/beard-grooming-guide" className="text-barber-primary hover:underline">complete beard grooming guide</a>. Gary will work with you to achieve the perfect cut for your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
