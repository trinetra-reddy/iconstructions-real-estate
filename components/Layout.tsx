import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Linkedin, Facebook, MapPin, Building2 } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-1.5 rounded-sm">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
                iConstructions
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary font-semibold">Real Estate</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-primary ${
                  location.pathname === link.path ? 'text-brand-primary' : 'text-gray-300'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-primary hover:bg-amber-700 text-white px-5 py-2 rounded text-sm font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-brand-dark z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24 px-6`}
      >
        <div className="flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-serif font-medium ${
                location.pathname === link.path ? 'text-brand-primary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-gray-800">
            <Link
              to="/contact"
              className="block w-full text-center bg-brand-primary text-white py-3 rounded font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand-primary p-1.5 rounded-sm">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-serif font-bold">iConstructions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building dreams with precision and passion. We deliver premium real estate solutions and architectural excellence across Andhra Pradesh and Telangana.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-brand-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-brand-primary">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Development</li>
              <li>Interior Design</li>
              <li>Renovation & Remodeling</li>
              <li>Property Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-brand-primary">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Plot 42, Jubilee Enclave, Hitech City, Hyderabad, 500081</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-primary shrink-0" />
                <span>hello@iconstructions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} iConstructions Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
