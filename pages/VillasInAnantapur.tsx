import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Home as HomeIcon, TrendingUp, Building2, CheckCircle, Award, Phone, Mail, ArrowRight, Star, Sparkles, Trees, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VillasInAnantapur: React.FC = () => {
  // Filter for villas in Anantapur
  const villaProjects = PROJECTS.filter(p =>
    p.location?.toLowerCase().includes('anantapur') &&
    (p.type?.toLowerCase().includes('villa') || p.title?.toLowerCase().includes('villa'))
  );

  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in luxury villas in Anantapur. Can you help me?";
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
            <span className="text-brand-primary">Villas</span>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Luxury Living</span>
              <Sparkles className="w-5 h-5 text-brand-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Luxury <span className="italic text-brand-primary">Villas</span> in Anantapur
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover premium RERA approved independent villas with modern amenities, Vastu compliance, and spacious layouts in prime Anantapur locations.
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
                <Star className="w-5 h-5 text-brand-primary" />
                <span className="text-white font-medium">Gated Communities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              Why Choose <span className="italic text-brand-primary">Villas</span> in Anantapur?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HomeIcon className="w-8 h-8" />, title: 'Independent Living', description: 'Complete privacy with your own compound' },
              { icon: <Trees className="w-8 h-8" />, title: 'Spacious Layouts', description: '2000-4000 sq.ft with gardens & parking' },
              { icon: <Car className="w-8 h-8" />, title: 'Premium Amenities', description: 'Clubhouse, swimming pool, 24/7 security' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'High Appreciation', description: '12-15% annual value growth' }
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
              Our <span className="italic text-brand-primary">Villa Projects</span> in Anantapur
            </h2>
            <p className="text-gray-600 text-lg">3BHK & 4BHK luxury villas with modern architecture</p>
          </div>

          {villaProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {villaProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">Our villa projects are coming soon. Contact us to get early bird offers and exclusive pricing.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300">
                Get Early Bird Offers
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-dark to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Own Your <span className="italic text-brand-primary">Dream Villa?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us for site visits, floor plans, and exclusive villa offers in Anantapur.
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

