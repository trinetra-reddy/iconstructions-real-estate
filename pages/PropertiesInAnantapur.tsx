import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import {
  MapPin,
  TrendingUp,
  Building2,
  Home as HomeIcon,
  CheckCircle,
  Award,
  Phone,
  Mail,
  ArrowRight,
  Star,
  IndianRupee,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertiesInAnantapur: React.FC = () => {
  // Filter projects in Anantapur
  const anantapurProjects = PROJECTS.filter(p =>
    p.location?.toLowerCase().includes('anantapur')
  );

  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in properties in Anantapur. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-primary">Properties in Anantapur</span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Prime Location</span>
              <Sparkles className="w-5 h-5 text-brand-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Properties for Sale in <span className="italic text-brand-primary">Anantapur</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover RERA approved residential apartments, luxury villas, and commercial properties in Anantapur. 
              15+ years of excellence, 500+ happy families, and transparent pricing.
            </p>

            {/* Trust Badges */}
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
                <Star className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">500+ Happy Families</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy in Anantapur Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2 block">Investment Opportunity</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Why Buy Property in <span className="italic text-brand-primary">Anantapur?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Anantapur, the largest district in Andhra Pradesh, is emerging as a prime real estate destination 
              with excellent connectivity and growing infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Strategic Location',
                description: 'NH 44 connectivity to Bangalore (200 km) & Hyderabad (350 km)'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Growing Economy',
                description: 'Smart City initiatives, IT parks, and industrial growth'
              },
              {
                icon: <IndianRupee className="w-8 h-8" />,
                title: 'Affordable Prices',
                description: '40-60% lower than Tier-1 cities with high ROI potential'
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Infrastructure',
                description: 'New airport, metro rail (proposed), and modern amenities'
              }
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

      {/* Our Projects in Anantapur */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2 block">Featured Properties</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Our Projects in <span className="italic text-brand-primary">Anantapur</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our RERA approved residential, commercial, and villa projects in prime locations across Anantapur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {anantapurProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Invest in <span className="italic text-brand-primary">Anantapur?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us today for a free consultation and site visit. Our experts are ready to help you find your dream property.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              WhatsApp: +91 96666 22090
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
