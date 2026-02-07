import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-brand-dark pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Have a project in mind? Let's discuss how we can bring your vision to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2 block">Get In Touch</span>
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">
              Visit Our Office
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our headquarters is located in the heart of Hyderabad's IT corridor. We welcome you to visit us for a coffee and a detailed walkthrough of our portfolio.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded text-brand-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Head Office</h4>
                  <p className="text-gray-600 text-sm">Plot 42, Jubilee Enclave, Hitech City,<br />Hyderabad, Telangana 500081</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded text-brand-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">+91 40 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded text-brand-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm">sales@iconstructions.com</p>
                  <p className="text-gray-600 text-sm">support@iconstructions.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded text-brand-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Send a Message</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">Thank you!</h4>
                <p>Your inquiry has been received. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-sm underline hover:text-green-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select 
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option>Buying a Property</option>
                    <option>Construction Services</option>
                    <option>Interior Design</option>
                    <option>Investment Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full bg-brand-primary text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-amber-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formStatus === 'submitting' ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
