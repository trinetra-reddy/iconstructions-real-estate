import React from 'react';
import { Layout } from '../components/Layout';
import { MapPin, Phone, Mail, Clock, Send, Navigation, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in your properties. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Office location coordinates (Hitech City, Hyderabad)
  const officeAddress = "Plot 42, Jubilee Enclave, Hitech City, Hyderabad, Telangana 500081";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Hitech+City+Hyderabad+Telangana+500081";
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3614!2d78.3808!3d17.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjYiTiA3OMKwMjInNTEuMSJF!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <Layout>
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark pt-32 pb-20 text-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Get In Touch</span>
            <Sparkles className="w-5 h-5 text-brand-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Let's Build Your <span className="italic text-brand-primary">Dream</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            Have a project in mind? Visit our office or connect with us instantly. We're here to bring your vision to life with expertise and dedication.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info - Enhanced */}
          <div>
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Visit Our <span className="italic text-brand-primary">Office</span>
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Our headquarters is located in the heart of Hyderabad's IT corridor. We welcome you to visit us for a coffee and a detailed walkthrough of our portfolio.
            </p>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-primary to-amber-600 p-4 rounded-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">Head Office</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Plot 42, Jubilee Enclave, Hitech City,<br />
                      Hyderabad, Telangana 500081
                    </p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-primary hover:text-amber-600 font-semibold text-sm transition-colors group/link"
                    >
                      <Navigation className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-primary to-amber-600 p-4 rounded-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">Call Us</h4>
                    <a
                      href="tel:+919666622090"
                      className="text-gray-600 hover:text-brand-primary transition-colors block text-lg font-semibold"
                    >
                      +91 96666 22090
                    </a>
                    <p className="text-gray-500 text-xs mt-1">Available Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-primary to-amber-600 p-4 rounded-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">Email Us</h4>
                    <a
                      href="mailto:hello@iconstructions.com"
                      className="text-gray-600 hover:text-brand-primary transition-colors block font-semibold"
                    >
                      hello@iconstructions.com
                    </a>
                    <p className="text-gray-500 text-xs mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-primary to-amber-600 p-4 rounded-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-2 text-lg">Working Hours</h4>
                    <p className="text-gray-600 font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact Options */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Get Instant Response</h3>
            <p className="text-gray-600 mb-8">
              Chat with us on WhatsApp for immediate assistance. Our team is available to answer all your queries!
            </p>

            <div className="space-y-4">
              {/* Primary WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to schedule a site visit. When are you available?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-light hover:bg-brand-primary/10 text-brand-dark font-semibold py-3 px-4 rounded-lg border-2 border-brand-primary/20 hover:border-brand-primary transition-all flex items-center justify-between group"
                >
                  <span>📅 Schedule Site Visit</span>
                  <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to get the price list and floor plans for your projects.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-light hover:bg-brand-primary/10 text-brand-dark font-semibold py-3 px-4 rounded-lg border-2 border-brand-primary/20 hover:border-brand-primary transition-all flex items-center justify-between group"
                >
                  <span>📥 Get Price List & Floor Plans</span>
                  <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'm interested in investing in your properties. Can you provide more details?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-light hover:bg-brand-primary/10 text-brand-dark font-semibold py-3 px-4 rounded-lg border-2 border-brand-primary/20 hover:border-brand-primary transition-all flex items-center justify-between group"
                >
                  <span>💰 Investment Opportunities</span>
                  <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help with construction/interior design services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-light hover:bg-brand-primary/10 text-brand-dark font-semibold py-3 px-4 rounded-lg border-2 border-brand-primary/20 hover:border-brand-primary transition-all flex items-center justify-between group"
                >
                  <span>🏗️ Construction Services</span>
                  <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  ⚡ Average response time: <span className="font-bold text-brand-dark">Under 5 minutes</span>
                </p>
                <p className="text-xs text-gray-400">
                  🔒 Your privacy is important to us. We never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section - Premium */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Find Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
              Our <span className="italic text-brand-primary">Location</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Located in the heart of Hyderabad's tech hub, we're easily accessible from all major areas of the city.
            </p>
          </div>

          {/* Map Container with Premium Design */}
          <div className="relative group">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-amber-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

            {/* Map Frame */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
              {/* Map Embed */}
              <div className="relative w-full h-[500px] md:h-[600px]">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="iConstructions Office Location - Hitech City, Hyderabad"
                  className="w-full h-full"
                />
              </div>

              {/* Overlay Info Card */}
              <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-brand-primary to-amber-600 p-3 rounded-lg text-white shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-dark text-lg mb-2">iConstructions Real Estate</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Plot 42, Jubilee Enclave, Hitech City,<br />
                      Hyderabad, Telangana 500081
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-primary hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:gap-3 shadow-lg"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:gap-3 shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        Chat Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Buttons Below Map */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-brand-dark rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary text-center"
            >
              <div className="bg-brand-light group-hover:bg-brand-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Navigation className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-brand-dark group-hover:text-white mb-2 transition-colors">Navigate to Office</h3>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm transition-colors">Open in Google Maps</p>
            </a>

            <a
              href="tel:+919666622090"
              className="group bg-white hover:bg-brand-dark rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary text-center"
            >
              <div className="bg-brand-light group-hover:bg-brand-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Phone className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-brand-dark group-hover:text-white mb-2 transition-colors">Call Before Visit</h3>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm transition-colors">+91 96666 22090</p>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-green-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-400 text-center"
            >
              <div className="bg-brand-light group-hover:bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Send className="w-8 h-8 text-green-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-brand-dark group-hover:text-white mb-2 transition-colors">Chat on WhatsApp</h3>
              <p className="text-gray-600 group-hover:text-white text-sm transition-colors">Instant Response</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
