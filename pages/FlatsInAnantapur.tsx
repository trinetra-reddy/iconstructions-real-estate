import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Building2, TrendingUp, Shield, CheckCircle, Award, Phone, Mail, ArrowRight, Star, Sparkles, IndianRupee, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FlatsInAnantapur: React.FC = () => {
  // Filter for apartments/flats in Anantapur
  const flatProjects = PROJECTS.filter(p =>
    p.location?.toLowerCase().includes('anantapur') &&
    (p.type?.toLowerCase().includes('residential') ||
     p.type?.toLowerCase().includes('apartment') ||
     p.title?.toLowerCase().includes('apartment'))
  );

  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in 2BHK/3BHK flats in Anantapur. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties-in-anantapur" className="hover:text-brand-primary transition-colors">Properties in Anantapur</Link>
            <span>/</span>
            <span className="text-brand-primary">Flats & Apartments</span>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Affordable Housing</span>
              <Sparkles className="w-5 h-5 text-brand-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              2BHK & 3BHK <span className="italic text-brand-primary">Flats</span> in Anantapur
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find your perfect home with RERA approved 2BHK and 3BHK apartments in Anantapur. Modern amenities, Vastu compliant, and affordable pricing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">RERA Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">Vastu Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <IndianRupee className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">Bank Loan Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Why Buy <span className="italic text-brand-primary">Flats</span> in Anantapur?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <IndianRupee className="w-8 h-8" />, title: 'Affordable Pricing', description: '₹25-45 lakhs for 2BHK, ₹35-60 lakhs for 3BHK' },
              { icon: <Shield className="w-8 h-8" />, title: 'Gated Security', description: '24/7 security, CCTV, intercom facilities' },
              { icon: <Users className="w-8 h-8" />, title: 'Community Living', description: 'Parks, clubhouse, children play area' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Easy Resale', description: 'High demand, good rental income potential' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="text-brand-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Our <span className="italic text-brand-primary">Apartment Projects</span> in Anantapur
            </h2>
            <p className="text-gray-600 text-lg">Ready to move & under construction flats</p>
          </div>

          {flatProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flatProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">Explore all our residential projects in Anantapur.</p>
              <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
              Popular Flat Configurations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: '2BHK Flats', size: '900-1200 sq.ft', price: '₹25-45 Lakhs', features: ['2 Bedrooms', '2 Bathrooms', 'Living + Dining', 'Balcony'] },
              { type: '3BHK Flats', size: '1200-1600 sq.ft', price: '₹35-60 Lakhs', features: ['3 Bedrooms', '2-3 Bathrooms', 'Living + Dining', '1-2 Balconies'] },
              { type: '3BHK Premium', size: '1600-2000 sq.ft', price: '₹60-85 Lakhs', features: ['3 Bedrooms + Study', '3 Bathrooms', 'Spacious Living', 'Multiple Balconies'] }
            ].map((config, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-8 rounded-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">{config.type}</h3>
                <p className="text-brand-primary font-bold text-xl mb-4">{config.price}</p>
                <p className="text-gray-300 mb-6">Built-up Area: {config.size}</p>
                <ul className="space-y-2">
                  {config.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-dark to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Find Your <span className="italic text-brand-primary">Perfect Flat</span> Today
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us for floor plans, pricing, and site visits. Bank loan assistance available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              WhatsApp: +91 96666 22090
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <Mail className="w-5 h-5" />
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

