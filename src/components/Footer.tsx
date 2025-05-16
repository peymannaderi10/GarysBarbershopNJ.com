
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-barber-primary text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <h1 className="font-heading text-2xl font-bold text-white">
                Gar's <span className="text-barber-accent">Barbershop</span>
              </h1>
            </Link>
            <p className="text-barber-secondary mb-4">
              Premier barbershop in Maple Shade offering high-quality haircuts by appointment.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-barber-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-barber-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-barber-secondary hover:text-barber-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-barber-secondary hover:text-barber-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-barber-secondary hover:text-barber-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-barber-secondary hover:text-barber-accent transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-barber-secondary hover:text-barber-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-barber-secondary">
                <span>Friday</span>
                <span>9 AM–7 PM</span>
              </li>
              <li className="flex justify-between text-barber-secondary">
                <span>Saturday</span>
                <span>9 AM–4 PM</span>
              </li>
              <li className="flex justify-between text-barber-secondary">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between text-barber-secondary">
                <span>Monday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between text-barber-secondary">
                <span>Tuesday</span>
                <span>9 AM–3 PM</span>
              </li>
              <li className="flex justify-between text-barber-secondary">
                <span>Wednesday</span>
                <span>9 AM–7 PM</span>
              </li>
              <li className="flex justify-between text-barber-secondary">
                <span>Thursday</span>
                <span>9 AM–7 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start space-x-3 text-barber-secondary">
                <span className="mt-1"><Phone size={16} /></span>
                <span>(856) 414-1015</span>
              </p>
              <p className="flex items-start space-x-3 text-barber-secondary">
                <span className="mt-1"><Mail size={16} /></span>
                <span>info@garsbarbershop.com</span>
              </p>
              <p className="text-barber-secondary">
                12 E Main St, Maple Shade, NJ 08052
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-barber-secondary">
          <p>&copy; {currentYear} Gar's Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
