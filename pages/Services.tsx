import React, { useState, useEffect, useRef } from 'react';
import { Layout } from '../components/Layout';
import { SERVICES } from '../constants';
import {
  Home,
  Hammer,
  Building2,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
  Sparkles,
  Target,
  Shield,
  Zap
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-10 h-10" />,
  Hammer: <Hammer className="w-10 h-10" />,
  Building2: <Building2 className="w-10 h-10" />,
  TrendingUp: <TrendingUp className="w-10 h-10" />
};

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <Layout>
      {/* Enhanced Hero Section with Parallax Effect */}
      <div className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark pt-32 pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6 animate-fade-in">
            <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
            <span>/</span>
            <span className="text-brand-primary">Services</span>
          </div>

          {/* Main Heading with Stagger Animation */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">Premium Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Our <span className="italic text-brand-primary">Expertise</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate and construction solutions tailored to meet global standards with unmatched quality and precision.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-in delay-300">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-medium">500+ Projects</span>
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="flex items-center gap-2 text-white">
              <Award className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-medium">100% Legal Compliance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - Enhanced with Cards */}
      <div
        ref={servicesAnimation.ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary cursor-pointer transform hover:-translate-y-2 ${
                servicesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8 md:p-10">
                {/* Icon with Animation */}
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary transform transition-all duration-500 ${
                    activeService === service.id ? 'scale-110 rotate-6 bg-brand-primary text-white' : ''
                  }`}>
                    {iconMap[service.iconName]}
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary/20 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-4">
                    {getServiceFeatures(service.title).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-brand-primary transition-all duration-300 group-hover:gap-4"
                    >
                      REQUEST SERVICE
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section - New Addition */}
      <div
        ref={statsAnimation.ref}
        className="bg-brand-dark py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, value: '500+', label: 'Projects Completed' },
              { icon: <Users className="w-8 h-8" />, value: '1000+', label: 'Happy Clients' },
              { icon: <Award className="w-8 h-8" />, value: '15+', label: 'Years Experience' },
              { icon: <Zap className="w-8 h-8" />, value: '98%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`text-center group ${
                  statsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section - Enhanced */}
      <div
        ref={processAnimation.ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-4 py-2 rounded-full mb-4">
            <Clock className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Our Construction <span className="italic text-brand-primary">Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A streamlined, transparent approach ensuring quality at every step
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-brand-primary" style={{ top: '48px' }} />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'Understanding your vision & requirements.',
                icon: <Users className="w-6 h-6" />,
                details: 'Free site visit, budget planning, timeline discussion'
              },
              {
                step: '02',
                title: 'Design & Plan',
                desc: 'Architectural blueprints & 3D visualizations.',
                icon: <Building2 className="w-6 h-6" />,
                details: 'CAD drawings, 3D renders, material selection'
              },
              {
                step: '03',
                title: 'Construction',
                desc: 'Execution with premium materials & supervision.',
                icon: <Hammer className="w-6 h-6" />,
                details: 'Daily updates, quality checks, safety protocols'
              },
              {
                step: '04',
                title: 'Handover',
                desc: 'Quality checks & key delivery.',
                icon: <CheckCircle className="w-6 h-6" />,
                details: 'Final inspection, documentation, warranty'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative group ${
                  processAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary transform hover:-translate-y-2">
                  {/* Step Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-primary/80 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {item.step}
                    </div>
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 group-hover:text-white/50 transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-brand-dark mb-3 text-center group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Additional Details */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center italic">
                      {item.details}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector - Mobile */}
                {idx < 3 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-brand-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - New Addition */}
      <div
        ref={ctaAnimation.ref}
        className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto text-center px-4 ${
          ctaAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Build Your <span className="italic text-brand-primary">Dream Project?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss your vision and create something extraordinary together
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Helper function to get service-specific features
function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Property Buying': [
      'Prime location properties in Anantapur, Hyderabad & Vijayawada',
      'Legal verification & RERA compliance',
      'Transparent pricing with no hidden costs',
      'End-to-end documentation support'
    ],
    'Construction': [
      'Turnkey construction from foundation to finishing',
      'Premium quality materials & skilled workforce',
      'On-time delivery with milestone tracking',
      'Vastu-compliant architectural designs'
    ],
    'Development': [
      'Large-scale residential & commercial projects',
      'Modern amenities & sustainable infrastructure',
      'Strategic location selection & planning',
      'High ROI potential for investors'
    ],
    'Investment': [
      'Data-driven market analysis & insights',
      'Portfolio diversification strategies',
      'Long-term asset appreciation guidance',
      'Risk assessment & mitigation planning'
    ]
  };

  return features[title] || [];
}
