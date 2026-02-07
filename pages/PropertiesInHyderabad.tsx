import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { MapPin, TrendingUp, Building2, CheckCircle, Award, Phone, Mail, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertiesInHyderabad: React.FC = () => {
  const hyderabadProjects = PROJECTS.filter(p =>
    p.location?.toLowerCase().includes('hyderabad')
  );

  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in properties in Hyderabad. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-primary">Properties in Hyderabad</span>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">IT Hub</span>
              <Sparkles className="w-5 h-5 text-brand-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Properties for Sale in <span className="italic text-brand-primary">Hyderabad</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover premium properties in Hyderabad's IT corridor - Hitech City, Gachibowli, and Madhapur. 
              RERA approved projects with world-class amenities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">RERA Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">Prime Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Star className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">IT Corridor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy in Hyderabad */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Why Invest in <span className="italic text-brand-primary">Hyderabad?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin className="w-8 h-8" />, title: 'IT Hub', description: 'Home to Google, Microsoft, Amazon, and 1000+ IT companies' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'High ROI', description: '12-15% annual appreciation in prime areas' },
              { icon: <Building2 className="w-8 h-8" />, title: 'Infrastructure', description: 'Metro, ORR, Airport connectivity' },
              { icon: <Star className="w-8 h-8" />, title: 'Lifestyle', description: 'World-class malls, schools, hospitals' }
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

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Our Projects in <span className="italic text-brand-primary">Hyderabad</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hyderabadProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Invest in <span className="italic text-brand-primary">Hyderabad?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us for expert guidance on Hyderabad real estate investments.
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

