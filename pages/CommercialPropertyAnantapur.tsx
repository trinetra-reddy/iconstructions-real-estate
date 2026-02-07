import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Building2, TrendingUp, Store, CheckCircle, Award, Phone, Mail, ArrowRight, Star, Sparkles, IndianRupee, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CommercialPropertyAnantapur: React.FC = () => {
  // Filter for commercial properties in Anantapur
  const commercialProjects = PROJECTS.filter(p =>
    p.location?.toLowerCase().includes('anantapur') &&
    p.type?.toLowerCase().includes('commercial')
  );

  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in commercial properties in Anantapur. Can you help me?";
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
            <span className="text-brand-primary">Commercial Properties</span>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Business Investment</span>
              <Sparkles className="w-5 h-5 text-brand-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="italic text-brand-primary">Commercial Properties</span> in Anantapur
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Invest in RERA approved commercial spaces - Shops, offices, showrooms, and retail spaces in prime Anantapur locations with high footfall.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">RERA Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Store className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">Prime Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <TrendingUp className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">High ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Why Invest in <span className="italic text-brand-primary">Commercial Properties?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <IndianRupee className="w-8 h-8" />, title: 'High Rental Yield', description: '6-10% annual rental income guaranteed' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Capital Appreciation', description: '15-20% annual property value growth' },
              { icon: <Briefcase className="w-8 h-8" />, title: 'Business Ready', description: 'Ready-to-use spaces with all amenities' },
              { icon: <Store className="w-8 h-8" />, title: 'Prime Locations', description: 'High footfall areas, main roads' }
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
              Our <span className="italic text-brand-primary">Commercial Projects</span>
            </h2>
          </div>

          {commercialProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercialProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">Commercial projects coming soon in prime Anantapur locations. Contact us for pre-launch offers.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300">
                Get Pre-Launch Offers
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
              Commercial Space Types
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: 'Retail Shops', size: '200-500 sq.ft', price: '₹30-80 Lakhs', features: ['Ground Floor', 'High Footfall', 'Parking Available', 'Main Road Facing'] },
              { type: 'Office Spaces', size: '500-2000 sq.ft', price: '₹50 Lakhs - 2 Cr', features: ['AC Provision', 'Lift Access', 'Parking', 'IT Infrastructure'] },
              { type: 'Showrooms', size: '1000-5000 sq.ft', price: '₹1-5 Crores', features: ['Corner Plots', 'Wide Frontage', 'Ample Parking', 'Premium Locations'] }
            ].map((config, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-8 rounded-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">{config.type}</h3>
                <p className="text-brand-primary font-bold text-xl mb-4">{config.price}</p>
                <p className="text-gray-300 mb-6">Area: {config.size}</p>
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
            Start Your <span className="italic text-brand-primary">Business Investment</span> Today
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us for commercial property options, rental yields, and investment guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              WhatsApp: +91 96666 22090
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <Mail className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

