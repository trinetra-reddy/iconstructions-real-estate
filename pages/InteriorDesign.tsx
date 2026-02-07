import React, { useState, useEffect, useRef } from 'react';
import { Layout } from '../components/Layout';
import {
  INTERIOR_SERVICES,
  INTERIOR_PORTFOLIO,
  ONGOING_INTERIOR_PROJECTS,
  DESIGN_STYLES
} from '../constants';
import {
  Home,
  ChefHat,
  Bed,
  Sofa,
  Briefcase,
  Store,
  Compass,
  Crown,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
  Users,
  Clock,
  Target,
  X,
  Calendar,
  MapPin,
  TrendingUp,
  Send,
  Palette,
  Lightbulb,
  Ruler,
  Package
} from 'lucide-react';

// Icon mapping for interior services
const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-10 h-10" />,
  ChefHat: <ChefHat className="w-10 h-10" />,
  Bed: <Bed className="w-10 h-10" />,
  Sofa: <Sofa className="w-10 h-10" />,
  Briefcase: <Briefcase className="w-10 h-10" />,
  Store: <Store className="w-10 h-10" />,
  Compass: <Compass className="w-10 h-10" />,
  Crown: <Crown className="w-10 h-10" />
};

// Custom hook for scroll animations
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

export const InteriorDesign: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const servicesAnimation = useScrollAnimation();
  const portfolioAnimation = useScrollAnimation();
  const ongoingAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const stylesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const whatsappNumber = "919666622090";
  const whatsappMessage = "Hi, I'm interested in your interior design services. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Portfolio categories
  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office'];

  // Filter portfolio by category
  const filteredPortfolio = selectedCategory === 'All'
    ? INTERIOR_PORTFOLIO
    : INTERIOR_PORTFOLIO.filter(item => item.category === selectedCategory);

  // Auto-play process step animations
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % 6); // 6 steps total
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Smooth scroll to portfolio section
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = portfolioSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section - Full Page */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Interior Design Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Premium Interior Design</span>
            <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Transform Your <span className="italic text-brand-primary">Space</span><br />
            Into a Masterpiece
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Award-winning interior design services that blend aesthetics with functionality. From concept to completion, we create spaces that inspire and delight.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-10">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Award className="w-6 h-6 text-brand-primary" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">500+</p>
                <p className="text-gray-400 text-xs">Interiors Designed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Users className="w-6 h-6 text-brand-primary" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">15+</p>
                <p className="text-gray-400 text-xs">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Target className="w-6 h-6 text-brand-primary" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">Award</p>
                <p className="text-gray-400 text-xs">Winning Designs</p>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-amber-600 hover:from-amber-600 hover:to-brand-primary text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-brand-primary/50 hover:scale-105 flex items-center gap-3"
            >
              <Send className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Schedule Design Consultation
            </a>
            <a
              href="#portfolio"
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 cursor-pointer"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <div
        ref={servicesAnimation.ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-3 mb-4">
            Comprehensive <span className="italic text-brand-primary">Interior Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From residential to commercial spaces, we offer end-to-end interior design services tailored to your vision and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERIOR_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary cursor-pointer transform hover:-translate-y-2 ${
                servicesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative mb-4 p-4 bg-gradient-to-br from-brand-primary to-amber-600 rounded-xl text-white inline-block group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.iconName]}
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-sm text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 text-brand-primary font-bold text-sm group-hover:gap-3 transition-all"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio/Gallery Section - Enhanced Background */}
      <div
        id="portfolio"
        ref={portfolioAnimation.ref}
        className="bg-gradient-to-b from-white via-gray-50 to-white py-24 relative"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-3 mb-4">
              Design <span className="italic text-brand-primary">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our collection of completed projects showcasing diverse styles and exceptional craftsmanship.
            </p>

            {/* Category Filters - Enhanced Contrast */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-brand-primary to-amber-600 text-white shadow-xl shadow-brand-primary/30 scale-105'
                      : 'bg-brand-dark text-white border-2 border-brand-dark hover:border-brand-primary hover:bg-brand-primary/10 hover:scale-105 shadow-md'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  portfolioAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setLightboxImage(item.image)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-bold text-brand-primary mb-1">{item.category} • {item.year}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{item.description}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Static Info */}
                <div className="p-4">
                  <p className="text-xs font-bold text-brand-primary mb-1">{item.style} Style</p>
                  <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Portfolio"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Ongoing Projects Section */}
      <div
        ref={ongoingAnimation.ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">In Progress</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-3 mb-4">
            Current <span className="italic text-brand-primary">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a peek at our ongoing interior design projects and see the transformation in action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ONGOING_INTERIOR_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary ${
                ongoingAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-brand-primary text-white px-4 py-2 rounded-full text-xs font-bold">
                  {project.progress}% Complete
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-700">Progress</span>
                    <span className="text-xs font-bold text-brand-primary">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-brand-primary to-amber-600 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Status & Completion */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm font-bold text-gray-700">{project.status}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{project.completion}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Process Section - Enhanced with Auto-Playing Animations */}
      <div
        ref={processAnimation.ref}
        className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-24 relative overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
              Our Design <span className="italic text-brand-primary">Process</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              A systematic approach from concept to completion, ensuring your vision becomes reality.
            </p>

            {/* Animation Control */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all border border-white/20"
            >
              {isPaused ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Play Animation
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                  </svg>
                  Pause Animation
                </>
              )}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'Understanding your needs, preferences, budget, and lifestyle requirements.',
                icon: <Users className="w-8 h-8" />,
                details: 'Free initial consultation • Site visit • Requirement analysis'
              },
              {
                step: '02',
                title: 'Concept Design',
                desc: 'Creating mood boards, color schemes, and initial design concepts.',
                icon: <Palette className="w-8 h-8" />,
                details: 'Mood boards • Color palettes • Style selection'
              },
              {
                step: '03',
                title: '3D Visualization',
                desc: 'Photorealistic 3D renders and virtual walkthroughs of your space.',
                icon: <Lightbulb className="w-8 h-8" />,
                details: '3D renders • Virtual tours • Design revisions'
              },
              {
                step: '04',
                title: 'Material Selection',
                desc: 'Curating premium materials, finishes, furniture, and accessories.',
                icon: <Package className="w-8 h-8" />,
                details: 'Material samples • Vendor coordination • Budget optimization'
              },
              {
                step: '05',
                title: 'Execution',
                desc: 'Professional execution with quality control and timeline management.',
                icon: <Ruler className="w-8 h-8" />,
                details: 'Site supervision • Quality checks • Progress updates'
              },
              {
                step: '06',
                title: 'Handover',
                desc: 'Final inspection, styling, and handover of your dream space.',
                icon: <Award className="w-8 h-8" />,
                details: 'Final styling • Documentation • Warranty support'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border-2 transition-all duration-700 ${
                  activeProcessStep === idx
                    ? 'border-brand-primary bg-gradient-to-br from-brand-primary/20 to-amber-600/20 shadow-2xl shadow-brand-primary/50 scale-105 -translate-y-2'
                    : 'border-white/10 hover:border-brand-primary/50 hover:bg-white/10 hover:scale-102 hover:-translate-y-1'
                } ${processAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Active Indicator Glow */}
                {activeProcessStep === idx && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-amber-600 rounded-2xl opacity-20 blur-xl animate-pulse" />
                )}

                {/* Step Number */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-500 ${
                  activeProcessStep === idx
                    ? 'bg-gradient-to-br from-brand-primary to-amber-600 scale-125 shadow-2xl shadow-brand-primary/50'
                    : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:bg-gradient-to-br group-hover:from-brand-primary/70 group-hover:to-amber-600/70 group-hover:scale-110'
                }`}>
                  {item.step}
                </div>

                {/* Icon */}
                <div className={`mb-6 p-4 rounded-xl inline-block transition-all duration-500 ${
                  activeProcessStep === idx
                    ? 'bg-gradient-to-br from-brand-primary to-amber-600 text-white scale-110 shadow-lg shadow-brand-primary/50'
                    : 'bg-gradient-to-br from-brand-primary/20 to-amber-600/20 text-brand-primary group-hover:bg-gradient-to-br group-hover:from-brand-primary/40 group-hover:to-amber-600/40 group-hover:scale-110 group-hover:shadow-md'
                }`}>
                  {item.icon}
                </div>

                {/* Content */}
                <h4 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                  activeProcessStep === idx ? 'text-brand-primary' : 'text-white group-hover:text-brand-primary'
                }`}>
                  {item.title}
                </h4>
                <p className={`mb-4 leading-relaxed transition-colors duration-500 ${
                  activeProcessStep === idx ? 'text-white' : 'text-gray-300 group-hover:text-gray-100'
                }`}>
                  {item.desc}
                </p>
                <p className={`text-xs italic border-t pt-4 transition-all duration-500 ${
                  activeProcessStep === idx
                    ? 'text-gray-200 border-white/30'
                    : 'text-gray-400 border-white/10 group-hover:text-gray-300 group-hover:border-white/20'
                }`}>
                  {item.details}
                </p>

                {/* Active Step Label */}
                {activeProcessStep === idx && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-brand-primary to-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      Active Step
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {[0, 1, 2, 3, 4, 5].map((step) => (
              <button
                key={step}
                onClick={() => {
                  setActiveProcessStep(step);
                  setIsPaused(true);
                }}
                className={`transition-all duration-500 rounded-full ${
                  activeProcessStep === step
                    ? 'w-12 h-3 bg-gradient-to-r from-brand-primary to-amber-600'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to step ${step + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Style Showcase Section */}
      <div
        ref={stylesAnimation.ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Design Styles</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-3 mb-4">
            Explore Our <span className="italic text-brand-primary">Signature Styles</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From modern minimalism to traditional elegance, we master diverse design aesthetics to match your personality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_STYLES.map((style, index) => (
            <div
              key={style.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                stylesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Style Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2">{style.name}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {style.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 group-hover:border-brand-primary group-hover:text-brand-primary transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        ref={ctaAnimation.ref}
        className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-24 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${ctaAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Sparkles className="w-12 h-12 text-brand-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Transform <br />
              <span className="italic text-brand-primary">Your Space?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a free design consultation with our expert interior designers. Let's bring your vision to life with creativity, precision, and passion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-gradient-to-r from-brand-primary to-amber-600 hover:from-amber-600 hover:to-brand-primary text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-brand-primary/50 hover:scale-105 flex items-center gap-3"
              >
                <Send className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                Get Free Consultation
              </a>
              <a
                href="tel:+919666622090"
                className="px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center gap-3"
              >
                <Clock className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
