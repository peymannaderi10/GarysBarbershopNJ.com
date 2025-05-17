import { useEffect } from "react";
import ParallaxSection from "@/components/ParallaxSection";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
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
              Answers to common questions about our services and policies
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-barber-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-barber-primary mb-2">Do I need an appointment?</h3>
              <p className="text-gray-600">
                Yes, Gary's Barbershop operates by appointment only. This allows us to provide personalized attention to each client without long wait times.
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
              <h3 className="text-xl font-bold text-barber-primary mb-2">Do you offer gift certificates?</h3>
              <p className="text-gray-600">
                Yes, gift certificates are available for purchase in-store and make perfect gifts for any occasion.
              </p>
            </div>
            
            <div className="bg-barber-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-barber-primary mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, all major credit/debit cards, and mobile payment apps such as Apple Pay, Google Pay, and Venmo.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-barber-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the best haircut in Maple Shade. Book online now or contact us with any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-barber-button hover:bg-barber-button/90 text-white"
              onClick={() => window.open("https://squareup.com/appointments", "_blank")}
            >
              Book an Appointment
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = "tel:(856) 414-1015"}
            >
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
