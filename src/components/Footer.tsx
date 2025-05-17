import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-barber-primary text-white pt-12 md:pt-16 pb-8 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent" aria-label="Go to home page">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-white">
                Gary's Barbershop
              </h2>
            </Link>
            <p className="text-white mb-4">
              Premier barbershop in Maple Shade offering high-quality haircuts by appointment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-barber-accent transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-barber-accent transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <nav className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-white hover:text-barber-accent transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-white hover:text-barber-accent transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white hover:text-barber-accent transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/reviews" 
                  className="text-white hover:text-barber-accent transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white hover:text-barber-accent transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-white">
                <span>Friday</span>
                <span>9 AM–7 PM</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Saturday</span>
                <span>9 AM–4 PM</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Monday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Tuesday</span>
                <span>9 AM–3 PM</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Wednesday</span>
                <span>9 AM–7 PM</span>
              </li>
              <li className="flex justify-between text-white">
                <span>Thursday</span>
                <span>9 AM–7 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <address className="col-span-1 not-italic">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start space-x-3 text-white">
                <span className="mt-1"><Phone size={16} aria-hidden="true" /></span>
                <a 
                  href="tel:+18564141015"
                  className="hover:text-barber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                >
                  (856) 414-1015
                </a>
              </p>
              <p className="flex items-start space-x-3 text-white">
                <span className="mt-1"><Mail size={16} aria-hidden="true" /></span>
                <a 
                  href="mailto:info@garsbarbershop.com"
                  className="hover:text-barber-accent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-accent"
                >
                  info@garsbarbershop.com
                </a>
              </p>
              <p className="text-white">
                12 E Main St, Maple Shade, NJ 08052
              </p>
            </div>
          </address>
        </div>
        
        <div className="border-t border-gray-700 mt-8 md:mt-10 pt-6 md:pt-8 text-center text-white">
          <p>&copy; {currentYear} Gary's Barbershop. All rights reserved.</p>
        </div>
      </div>

      {/* Add structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BarberShop",
        "name": "Gary's Barbershop",
        "url": "https://garsbarbershop.com",
        "logo": "https://garsbarbershop.com/logo.png",
        "image": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
        "telephone": "+18564141015",
        "email": "info@garsbarbershop.com",
        "description": "Premier barbershop in Maple Shade offering high-quality haircuts by appointment.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 E Main St",
          "addressLocality": "Maple Shade",
          "addressRegion": "NJ",
          "postalCode": "08052",
          "addressCountry": "US"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday"],
            "opens": "00:00",
            "closes": "00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Tuesday"],
            "opens": "09:00",
            "closes": "15:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "16:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "00:00",
            "closes": "00:00"
          }
        ]
      })}} />
    </footer>
  );
};

export default Footer;
