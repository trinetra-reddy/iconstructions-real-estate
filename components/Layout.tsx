import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Linkedin, Facebook, MapPin, Building2, MessageCircle, Clock, Award, Send, ArrowRight, Twitter, Youtube } from 'lucide-react';
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

  // Determine if we should use solid background based on route
  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !scrolled;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        shouldBeTransparent
          ? 'bg-brand-dark backdrop-blur-lg shadow-lg py-5'
          : 'bg-brand-dark backdrop-blur-lg shadow-2xl py-4 border-b border-brand-primary/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Enhanced */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              shouldBeTransparent
                ? 'bg-brand-primary/90 group-hover:bg-brand-primary'
                : 'bg-brand-primary group-hover:scale-110'
            }`}>
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors">
                iConstructions
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-primary font-bold">Real Estate</span>
            </div>
          </Link>

          {/* Desktop Nav - Enhanced */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group ${
                  location.pathname === link.path
                    ? 'text-brand-primary bg-brand-primary/10'
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name.toUpperCase()}
                {/* Active indicator */}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full" />
                )}
              </Link>
            ))}

            {/* CTA Button - Enhanced */}
            <Link
              to="/contact"
              className="ml-4 relative px-6 py-2.5 bg-gradient-to-r from-brand-primary to-amber-600 hover:from-amber-600 hover:to-brand-primary text-white rounded-lg text-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-brand-primary/50 hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            {/* Phone Number - Quick Access */}
            <a
              href="tel:+919666622090"
              className="ml-2 flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-brand-primary transition-colors border border-gray-700 hover:border-brand-primary rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+91 96666 22090</span>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+919666622090"
              className="text-white hover:text-brand-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-primary transition-colors focus:outline-none p-2 hover:bg-white/10 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Enhanced */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark z-[100] pt-20 px-6 overflow-y-auto">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col space-y-2 pb-8">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-serif font-medium py-3 px-5 rounded-xl transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-brand-primary bg-brand-primary/10 border-l-4 border-brand-primary'
                    : 'text-white hover:text-brand-primary hover:bg-white/5 hover:translate-x-2'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6 border-t border-gray-800 mt-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-brand-primary to-amber-600 text-white py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-brand-primary/50 transition-all duration-300"
              >
                Get a Quote
              </Link>

              {/* Quick Contact in Mobile Menu */}
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+919666622090"
                  className="flex items-center justify-center gap-3 text-gray-300 hover:text-brand-primary transition-colors py-2.5 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 96666 22090</span>
                </a>
                <a
                  href="mailto:hello@iconstructions.com"
                  className="flex items-center justify-center gap-3 text-gray-300 hover:text-brand-primary transition-colors py-2.5 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@iconstructions.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 mb-4">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">Stay Updated</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                Get Exclusive <span className="italic text-brand-primary">Property Updates</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Subscribe to our newsletter for the latest property launches, investment opportunities, and real estate insights in Andhra Pradesh & Telangana.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-brand-primary hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">

            {/* Company Info - Larger Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-brand-primary p-2 rounded-sm">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold tracking-tight">iConstructions</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-primary font-semibold">Real Estate</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Building dreams with precision and passion. We deliver premium real estate solutions and architectural excellence across Andhra Pradesh and Telangana.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/5 border border-gray-800 rounded-lg px-3 py-2">
                  <Award className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs text-gray-300">RERA Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-gray-800 rounded-lg px-3 py-2">
                  <Award className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs text-gray-300">15+ Years</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-gray-800 rounded-lg px-3 py-2">
                  <Award className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs text-gray-300">500+ Families</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-brand-primary border border-gray-800 hover:border-brand-primary rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-brand-primary border border-gray-800 hover:border-brand-primary rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-brand-primary border border-gray-800 hover:border-brand-primary rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-brand-primary border border-gray-800 hover:border-brand-primary rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-brand-primary border border-gray-800 hover:border-brand-primary rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <Youtube className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Properties by Location - NEW SEO SECTION */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Properties by Location</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/properties-in-anantapur" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Properties in Anantapur
                  </Link>
                </li>
                <li>
                  <Link to="/properties-in-hyderabad" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Properties in Hyderabad
                  </Link>
                </li>
                <li>
                  <Link to="/properties-in-kurnool" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Properties in Kurnool
                  </Link>
                </li>
                <li>
                  <Link to="/properties-in-kadapa" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Properties in Kadapa
                  </Link>
                </li>
                <li>
                  <Link to="/villas-in-anantapur" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Villas in Anantapur
                  </Link>
                </li>
                <li>
                  <Link to="/flats-in-anantapur" className="text-gray-400 hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    Flats in Anantapur
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                    <MapPin className="w-4 h-4 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Office Address</p>
                    <p className="text-sm text-gray-300">Plot 42, Jubilee Enclave, Hitech City, Hyderabad, 500081</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                    <Phone className="w-4 h-4 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone Number</p>
                    <a
                      href="https://wa.me/919666622090"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-brand-primary transition-colors"
                    >
                      +91 96666 22090
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                    <Mail className="w-4 h-4 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
                    <a
                      href="mailto:hello@iconstructions.com"
                      className="text-sm text-gray-300 hover:text-brand-primary transition-colors"
                    >
                      hello@iconstructions.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                    <Clock className="w-4 h-4 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Working Hours</p>
                    <p className="text-sm text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} <span className="text-brand-primary font-semibold">iConstructions Real Estate</span>. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6 text-xs text-gray-500">
                <Link to="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link>
                <Link to="#" className="hover:text-brand-primary transition-colors">RERA Compliance</Link>
                <Link to="#" className="hover:text-brand-primary transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>

          {/* Design & Development Credit */}
          <div className="pt-6 border-t border-gray-800/50 mt-6">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-1">
                Design and Development by{' '}
                <a
                  href="https://ananthadigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary font-bold hover:text-amber-500 transition-colors"
                >
                  Anantha Web Solutions Pvt Ltd
                </a>
              </p>
              <p className="text-xs text-gray-500">
                Software Development & Marketing Services:{' '}
                <a
                  href="tel:+919963789858"
                  className="text-brand-primary font-bold hover:text-amber-500 transition-colors"
                >
                  +91 99637 89858
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in your properties. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
