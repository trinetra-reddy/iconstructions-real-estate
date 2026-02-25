import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Building2,
  HardHat,
  ChevronDown,
  Quote,
  Home as HomeIcon,
  KeyRound,
  Coins,
  Play,
  Plus,
  Minus,
  Award,
  ChevronRight,
  MessageCircle,
  Phone
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS, SERVICES, TESTIMONIALS, FAQS, TEAM_MEMBERS, STATS } from '../constants';
import {
  buttonPrimary,
  buttonSecondary,
  buttonWhatsApp,
  buttonOutline,
  buttonFilterPillActive,
  buttonFilterPillInactive,
  buttonIcon
} from '../styles/designSystem';

// Icon mapping for Services
const ServiceIconMap: any = {
  'Home': HomeIcon,
  'HardHat': HardHat,
  'Building2': Building2,
  'KeyRound': KeyRound,
  'Coins': Coins
};

export const Home: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeFloorPlan, setActiveFloorPlan] = useState<string>('Paradise');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPropertyType, setSearchPropertyType] = useState('');
  const [propertyFilter, setPropertyFilter] = useState<string>('All Properties');
  const [categoryIndex, setCategoryIndex] = useState<number>(0);

  // Filter projects based on selected filter
  const getFilteredProjects = () => {
    if (propertyFilter === 'All Properties') {
      return PROJECTS.slice(0, 3);
    } else if (propertyFilter === 'Residential') {
      return PROJECTS.filter(p => p.category === 'Residential');
    } else if (propertyFilter === 'Commercial') {
      return PROJECTS.filter(p => p.category === 'Commercial');
    } else if (propertyFilter === 'Villa') {
      return PROJECTS.filter(p => p.category === 'Luxury Villa');
    } else if (propertyFilter === 'Completed') {
      return PROJECTS.filter(p => p.status === 'Completed');
    } else if (propertyFilter === 'Ongoing') {
      return PROJECTS.filter(p => p.status === 'Ongoing');
    }
    return PROJECTS.slice(0, 3);
  };

  const featuredProjects = getFilteredProjects();

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSearch = () => {
    // Build query parameters
    const params = new URLSearchParams();
    if (searchLocation) params.append('location', searchLocation);
    if (searchPropertyType) params.append('type', searchPropertyType);

    // Navigate to projects page with filters
    window.location.href = `/projects?${params.toString()}`;
  };

  const floorPlans: any = {
    'Paradise': '/images/Luxury-villas.jpg',
    'Deluxe': '/images/residential-apartments.jpg',
    'Penthouse': '/images/premium-plots.jpg'
  };

  return (
    <Layout>
      {/* 1. Hero Section - Enhanced with Search & Trust Signals */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden max-w-full">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10" />
          <img
            src="/images/Luxury-villas.jpg"
            alt="Luxury RERA approved residential property in Anantapur - iConstructions Real Estate"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>

        <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-4 sm:mb-6 animate-fade-in flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">RERA Certified</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">Vastu Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">500+ Happy Families</span>
            </div>
          </div>

          <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide sm:tracking-wider uppercase mb-4 sm:mb-6 text-gray-300 animate-fade-in">
            ANANTAPUR • HYDERABAD • VIJAYAWADA
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-4 sm:mb-6 leading-tight animate-fade-in-up px-2" style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.8)' }}>
            Find Your Dream <br />
            <span className="italic text-gray-200">Property Today</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100 px-2" style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.8)' }}>
            Premium residential and commercial developments with transparent pricing, legal clarity, and expert guidance.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8 animate-fade-in-up delay-150">
            <div className="bg-white rounded-2xl sm:rounded-full p-3 sm:p-2 shadow-2xl flex flex-col md:flex-row gap-3 sm:gap-2">
              <div className="flex-1 flex items-center px-3 sm:px-4 py-2.5 sm:py-2 md:border-r border-gray-200 rounded-xl md:rounded-none bg-gray-50 md:bg-transparent">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Location (e.g., Anantapur, Hyderabad)"
                  aria-label="Search by location"
                  className="w-full outline-none text-gray-700 text-xs sm:text-sm bg-transparent"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="flex-1 flex items-center px-3 sm:px-4 py-2.5 sm:py-2 md:border-r border-gray-200 rounded-xl md:rounded-none bg-gray-50 md:bg-transparent">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 flex-shrink-0" />
                <select
                  className="w-full outline-none text-gray-700 text-xs sm:text-sm bg-transparent"
                  aria-label="Select property type"
                  value={searchPropertyType}
                  onChange={(e) => setSearchPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>
              <button
                onClick={handleSearch}
                className={buttonPrimary}
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up delay-200 px-4">
             <Link
              to="/projects"
              className={buttonSecondary}
            >
              View All Properties
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
            <a
              href="https://wa.me/919347244397?text=Hi%2C%20I'd%20like%20to%20schedule%20a%20site%20visit.%20When%20are%20you%20available%3F"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonWhatsApp}
            >
              <MessageCircle className="w-4 h-4" />
              Schedule Visit
            </a>
          </div>
        </div>

        {/* Enhanced Stats Badge */}
        <div className="absolute bottom-20 right-8 md:right-20 z-20 bg-white p-6 shadow-2xl rounded-lg hidden md:block animate-fade-in delay-300 max-w-xs border border-gray-200">
          <div className="flex items-center justify-between mb-4">
             <div>
               <span className="text-xs text-gray-600 uppercase tracking-wider">Client Satisfaction</span>
               <div className="flex items-baseline gap-1 mt-1">
                 <span className="text-4xl font-serif text-black">98</span>
                 <span className="text-xl text-black">%</span>
               </div>
             </div>
             <div className="flex flex-col gap-1">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-black text-black" />)}
             </div>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-black">25 Lakh+</p>
              <p className="text-[10px] text-gray-700 uppercase tracking-wider">Sq.Ft Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">500+</p>
              <p className="text-[10px] text-gray-700 uppercase tracking-wider">Happy Families</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* 2. Stats Bar - Quick Trust Signals */}
      <section className="py-6 sm:py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-1">{stat.value}</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Intro / About Section - Enhanced */}
      <section className="py-12 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="text-gray-600 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4 block">About iConstructions</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-black mb-6 sm:mb-8 leading-tight sm:leading-none">
                Building <span className="italic text-gray-600">Trust</span> Through <br className="hidden sm:block" />
                Quality & Transparency
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg font-light">
                Since 2008, we've been transforming the real estate landscape in Anantapur and beyond. Our commitment to quality construction, transparent pricing, and timely delivery has made us the preferred choice for over 500 families.
              </p>

              <div className="mb-10">
                 <h3 className="font-serif text-xl mb-6 text-black">Why Choose Us</h3>
                 <ul className="space-y-4">
                   {[
                     { title: 'RERA Certified Projects', desc: 'All projects registered with RERA & DTCP approved' },
                     { title: 'Vastu-Compliant Designs', desc: 'Traditional Vastu principles with modern architecture' },
                     { title: 'On-Time Delivery', desc: '98% projects delivered on schedule' },
                     { title: 'Bank Loan Assistance', desc: 'Tie-ups with SBI, HDFC, ICICI, Axis Bank' }
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 group">
                       <div className="mt-1 p-2 bg-gray-100 rounded-full group-hover:bg-black transition-colors">
                         <CheckCircle className="w-4 h-4 text-black group-hover:text-white" />
                       </div>
                       <div>
                         <p className="font-bold text-black mb-1">{item.title}</p>
                         <p className="text-sm text-gray-500">{item.desc}</p>
                       </div>
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="https://wa.me/919347244397?text=Hi%2C%20I'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%20your%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonWhatsApp}
                >
                  <MessageCircle className="w-4 h-4" />
                  Schedule a Meeting
                </a>
              </div>
            </div>

            {/* Right Images - Enhanced */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/image6.jpg" className="mt-12 rounded-lg w-full h-64 object-cover shadow-lg hover:shadow-2xl transition-shadow" alt="Modern Vastu compliant interior design for 3BHK apartments in Anantapur" loading="lazy" />
                <img src="/images/image7.jpg" className="rounded-lg w-full h-80 object-cover shadow-lg hover:shadow-2xl transition-shadow" alt="Luxury villa exterior architecture in Anantapur by iConstructions" loading="lazy" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
                 <div className="border-2 border-black rounded-full p-8 w-32 h-32 flex items-center justify-center text-center bg-gray-50">
                    <div>
                      <p className="font-serif text-black text-2xl font-bold">15+</p>
                      <p className="text-[10px] text-black uppercase tracking-widest mt-1">Years</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section - Enhanced with CTAs */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-black mt-3 px-4">
              <span className="italic font-serif text-gray-600">Comprehensive</span> Real Estate <br className="hidden sm:block" />
              Solutions for Every Need
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-4">
              From finding your dream home to investment consulting, we provide end-to-end services with complete transparency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = ServiceIconMap[service.iconName] || HomeIcon;
              return (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer border border-transparent hover:border-black">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-black mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-black">Learn More</span>
                    <ArrowRight className="w-3 h-3 text-black transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/services" className={buttonPrimary}>
              View All Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Explore Categories */}
      <section className="py-12 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
            <div>
               <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Categories</span>
               <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2">
                 <span className="italic text-gray-600">Explore</span> Our full range <br className="hidden sm:block" />
                 of property opportunities
               </h2>
            </div>
            <div className="flex gap-2 hidden sm:flex">
               <button
                 onClick={() => setCategoryIndex(prev => prev > 0 ? prev - 1 : 5)}
                 className={buttonIcon}
                 aria-label="Previous category"
               >
                 <ChevronRight className="rotate-180 w-5 h-5" />
               </button>
               <button
                 onClick={() => setCategoryIndex(prev => prev < 5 ? prev + 1 : 0)}
                 className={buttonIcon}
                 aria-label="Next category"
               >
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Commercial Spaces", img: "/images/commercial.jpg", link: "/projects?type=Commercial" },
              { title: "Residential Apartments", img: "/images/residential-apartments.jpg", link: "/projects?type=Residential" },
              { title: "Luxury Villas", img: "/images/Luxury-villas.jpg", link: "/projects?type=Villa" },
              { title: "Gated Communities", img: "/images/Gated-community.jpg", link: "/projects" },
              { title: "Premium Plots", img: "/images/premium-plots.jpg", link: "/projects" },
              { title: "Investment Properties", img: "/images/invest-in-property.jpg", link: "/projects" }
            ].slice(categoryIndex, categoryIndex + 3).map((cat, i) => (
              <Link
                key={i}
                to={cat.link}
                className="group relative h-[280px] sm:h-[400px] overflow-hidden rounded-sm cursor-pointer"
              >
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center">
                   <h3 className="text-white font-serif text-base sm:text-xl">{cat.title}</h3>
                   <div className="bg-white/20 backdrop-blur p-2 rounded-full group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                     <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                   </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-12">
            <Link to="/projects" className={buttonPrimary}>
              Browse All Categories <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Featured Properties - Enhanced with Filters */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Featured Properties</span>
            <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 mb-4 px-4">
              <span className="italic text-gray-600">Handpicked</span> Properties <br className="hidden sm:block" />
              For Your Dream Lifestyle
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Explore our carefully curated selection of premium properties across Anantapur, Hyderabad, and Amaravati.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            {['All Properties', 'Residential', 'Commercial', 'Villa', 'Completed', 'Ongoing'].map((filter) => (
              <button
                key={filter}
                onClick={() => setPropertyFilter(filter)}
                className={propertyFilter === filter ? buttonFilterPillActive : buttonFilterPillInactive}
              >
                {filter}
              </button>
            ))}
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <p className="text-lg sm:text-xl text-gray-500">No properties found for this filter.</p>
              <button
                onClick={() => setPropertyFilter('All Properties')}
                className={`${buttonPrimary} mt-4`}
              >
                View All Properties
              </button>
            </div>
          )}

          <div className="flex justify-center">
            <Link
              to="/projects"
              className={buttonPrimary}
            >
              View All Properties
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Video Experience Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('/images/Luxury-villas.jpg')` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <button aria-label="Watch our real estate project video" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-black mb-6 sm:mb-8 hover:scale-110 transition-transform duration-300 mx-auto">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-current ml-1" />
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic mb-2 sm:mb-4">Experience Our Professional</h2>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif">Real Estate Approach</h2>
        </div>
      </section>

      {/* 6.5 Properties by Location - NEW SEO SECTION */}
      <section className="py-12 sm:py-24 bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-white text-xs tracking-wider sm:tracking-widest uppercase font-bold">Explore by Location</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 px-4">
              Find Properties in <span className="italic text-gray-300">Your City</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
              Discover RERA approved residential, commercial, and luxury properties across Andhra Pradesh and Telangana
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { city: 'Anantapur', url: '/properties-in-anantapur', projects: '12+ Projects', image: '/images/image2.jpg' },
              { city: 'Hyderabad', url: '/properties-in-hyderabad', projects: '8+ Projects', image: '/images/image3.jpg' },
              { city: 'Kurnool', url: '/properties-in-kurnool', projects: 'Coming Soon', image: '/images/image4.jpg' },
              { city: 'Kadapa', url: '/properties-in-kadapa', projects: 'Coming Soon', image: '/images/image5.jpg' }
            ].map((location, index) => (
              <Link
                key={index}
                to={location.url}
                className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={location.image}
                    alt={`Properties in ${location.city}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-1 sm:mb-2 group-hover:text-white transition-colors">
                    {location.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">{location.projects}</p>
                  <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-bold">
                    View Properties
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 px-4">Browse by Property Type</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
              <Link
                to="/villas-in-anantapur"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-lg text-white hover:text-black font-medium transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <HomeIcon className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Luxury Villas</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all flex-shrink-0" />
              </Link>
              <Link
                to="/flats-in-anantapur"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-lg text-white hover:text-black font-medium transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">2BHK & 3BHK Flats</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all flex-shrink-0" />
              </Link>
              <Link
                to="/commercial-property-anantapur"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-lg text-white hover:text-black font-medium transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Commercial Spaces</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Floor Plans / Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-xs tracking-widest uppercase">Floor Plans</span>
            <h2 className="text-4xl font-serif text-black mt-2">
              <span className="italic text-gray-600">Modern</span> Infrastructure & <br />
              thoughtful living spaces
            </h2>
          </div>

          <div className="flex justify-center gap-3 sm:gap-6 mb-12 flex-wrap px-4">
            {Object.keys(floorPlans).map((plan) => (
              <button
                key={plan}
                onClick={() => setActiveFloorPlan(plan)}
                className={activeFloorPlan === plan ? buttonFilterPillActive : buttonFilterPillInactive}
              >
                {plan}
              </button>
            ))}
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gray-100 aspect-[16/9]">
            <img
              src={floorPlans[activeFloorPlan]}
              alt={`${activeFloorPlan} Floor Plan`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 bg-white p-8 max-w-sm m-8 rounded-lg shadow-lg hidden md:block">
               <h3 className="text-2xl font-serif text-black mb-2">{activeFloorPlan} Suite</h3>
               <p className="text-gray-700 text-sm mb-4">A spacious and well-balanced layout offering comfort, natural light, and efficient room planning—ideal for families.</p>
               <div className="grid grid-cols-2 gap-4 text-xs font-bold text-gray-600 uppercase">
                 <span>• 12x12 Sq Ft Rooms</span>
                 <span>• 2 Built-in Shelves</span>
                 <span>• 4 Large Windows</span>
                 <span>• Modern Kitchen</span>
               </div>
               <div className="mt-6 flex items-center gap-2 text-black font-bold text-xs uppercase tracking-widest group cursor-pointer">
                 <span>View 3D Video</span>
                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials - Enhanced with Verification */}
      <section className="py-12 sm:py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10 sm:mb-16">
             <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Client Reviews</span>
             <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 px-4">
               <span className="italic text-gray-600">Real Stories</span> From <br className="hidden sm:block"/> Our Happy Clients
             </h2>
             <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-4">
               Don't just take our word for it. Here's what our clients have to say about their experience with iConstructions.
             </p>
           </div>

           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-100">
                 <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-black/10 absolute top-4 sm:top-6 right-4 sm:right-6" />

                 {/* Rating */}
                 <div className="flex text-black mb-3 sm:mb-4">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />)}
                 </div>

                 <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">"{t.content}"</p>

                 <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 gap-2">
                   <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                     <img src={t.image} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-300 flex-shrink-0" />
                     <div className="min-w-0">
                       <h4 className="font-bold text-black text-xs sm:text-sm truncate">{t.name}</h4>
                       <p className="text-[10px] sm:text-xs text-gray-600 truncate">{t.role}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-1 bg-green-50 px-1.5 sm:px-2 py-1 rounded-full flex-shrink-0">
                     <CheckCircle className="w-3 h-3 text-green-600" />
                     <span className="text-[9px] sm:text-[10px] font-bold text-green-600 uppercase whitespace-nowrap">Verified</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>

           {/* Trust Indicators */}
           <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">4.9/5</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Average Rating</p>
             </div>
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">500+</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Happy Clients</p>
             </div>
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">98%</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Satisfaction Rate</p>
             </div>
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">100%</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Verified Reviews</p>
             </div>
           </div>
         </div>
      </section>

      {/* 9. FAQs & Awards Split Section */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-10 sm:gap-20">

             {/* FAQs */}
             <div>
               <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">FAQs</span>
               <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 mb-6 sm:mb-10">
                 <span className="italic text-gray-600">Have</span> Questions <br/> in your mind?
               </h2>

               <div className="space-y-3 sm:space-y-4">
                 {FAQS.map((faq, index) => (
                   <div key={index} className="border-b border-gray-100 pb-3 sm:pb-4">
                     <button
                       className="w-full flex justify-between items-start gap-3 py-2 text-left"
                       onClick={() => toggleAccordion(index)}
                     >
                       <span className="font-serif text-sm sm:text-lg text-black flex-1">{faq.question}</span>
                       {activeAccordion === index ? <Minus className="w-4 h-4 text-black flex-shrink-0 mt-1" /> : <Plus className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />}
                     </button>
                     <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 mt-3 sm:mt-4' : 'max-h-0'}`}>
                       <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Image/Visual for FAQ */}
             <div className="relative h-full min-h-[250px] sm:min-h-[400px] order-first lg:order-last">
                <img src="/images/image9.jpg" alt="RERA approved residential property architecture in Anantapur - FAQ section" className="w-full h-full object-cover rounded-sm" loading="lazy" />
             </div>
           </div>
        </div>
      </section>

      {/* 11. Team Section */}
      <section className="py-12 sm:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10 sm:mb-16">
             <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Our Team</span>
             <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 px-4">
               <span className="italic text-gray-600">The People</span> Who make our <br className="hidden sm:block"/> real estate work
             </h2>
           </div>

           <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="group text-center">
                  <div className="relative overflow-hidden mb-4 sm:mb-6 rounded-full w-48 h-48 sm:w-64 sm:h-64 mx-auto border-4 border-gray-200 shadow-xl">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-black">{member.name}</h3>
                  <p className="text-gray-600 text-xs uppercase tracking-widest font-bold mt-1">{member.role}</p>

                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className={`${buttonOutline} mt-3 sm:mt-4 inline-flex`}
                    >
                      <Phone className="w-3 h-3" />
                      {member.phone}
                    </a>
                  )}
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* 13. Pre-Footer Contact - Enhanced */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-black via-black to-gray-900 relative overflow-hidden">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('/images/image10.jpg')` }} />

         {/* Decorative Elements */}
         <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl" />

         <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
           <div className="text-center mb-8 sm:mb-12">
             <span className="text-white text-xs tracking-wider sm:tracking-widest uppercase">Get Started</span>
             <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mt-3 mb-4 px-4">
               <span className="italic text-gray-300">Ready</span> To Find Your <br className="hidden sm:block"/> Dream Property?
             </h2>
             <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
               Schedule a free consultation with our real estate experts. We'll help you find the perfect property that matches your needs and budget.
             </p>
           </div>

           <div className="bg-white p-6 sm:p-8 md:p-12 shadow-2xl rounded-xl">
             <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
               {/* Contact Info */}
               <div>
                 <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 sm:mb-6">Contact Information</h3>

                 <div className="space-y-4 sm:space-y-6">
                   <div className="flex items-start gap-3 sm:gap-4">
                     <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                       <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                     </div>
                     <div className="min-w-0">
                       <p className="font-bold text-black mb-1 text-sm sm:text-base">Head Office</p>
                       <p className="text-gray-600 text-xs sm:text-sm">Plot 42, Jubilee Enclave, Hitech City, Hyderabad - 500081</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-3 sm:gap-4">
                     <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                       <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-black font-bold">@</div>
                     </div>
                     <div className="min-w-0">
                       <p className="font-bold text-black mb-1 text-sm sm:text-base">Email Us</p>
                       <a
                         href="mailto:hello@iconstructions.com"
                         className="text-gray-600 text-xs sm:text-sm hover:text-black transition-colors block truncate"
                       >
                         hello@iconstructions.com
                       </a>
                       <a
                         href="mailto:sales@iconstructions.com"
                         className="text-gray-600 text-xs sm:text-sm hover:text-black transition-colors block truncate"
                       >
                         sales@iconstructions.com
                       </a>
                     </div>
                   </div>

                   <div className="flex items-start gap-3 sm:gap-4">
                     <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                       <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                     </div>
                     <div className="min-w-0">
                       <p className="font-bold text-black mb-1 text-sm sm:text-base">Office Hours</p>
                       <p className="text-gray-600 text-xs sm:text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                       <p className="text-gray-600 text-xs sm:text-sm">Sunday: By Appointment</p>
                     </div>
                   </div>
                 </div>

                 {/* Trust Badges */}
                 <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                   <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Certified & Trusted</p>
                   <div className="flex flex-wrap gap-2 sm:gap-4">
                     <div className="flex items-center gap-1.5 sm:gap-2 bg-green-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                       <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                       <span className="text-[10px] sm:text-xs font-bold text-green-600 whitespace-nowrap">RERA Certified</span>
                     </div>
                     <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                       <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                       <span className="text-[10px] sm:text-xs font-bold text-blue-600 whitespace-nowrap">ISO 9001:2015</span>
                     </div>
                   </div>
                 </div>
               </div>

               {/* WhatsApp Contact */}
               <div>
                 <h3 className="text-xl sm:text-2xl font-serif text-black mb-3 sm:mb-4">Get Instant Response</h3>
                 <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                   Chat with us on WhatsApp for immediate assistance!
                 </p>

                 <div className="space-y-3">
                   {/* Primary WhatsApp Button */}
                   <a
                     href="https://wa.me/919347244397?text=Hi%2C%20I'm%20interested%20in%20your%20properties.%20Can%20you%20help%20me%3F"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonWhatsApp}
                   >
                     <MessageCircle className="w-5 h-5" />
                     Chat on WhatsApp
                   </a>

                   {/* Quick Action Buttons */}
                   <a
                     href="https://wa.me/919347244397?text=Hi%2C%20I'd%20like%20to%20schedule%20a%20site%20visit.%20When%20are%20you%20available%3F"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonOutline}
                   >
                     📅 Schedule Site Visit
                   </a>

                   <a
                     href="https://wa.me/919347244397?text=Hi%2C%20I'd%20like%20to%20get%20the%20price%20list%20and%20floor%20plans."
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonOutline}
                   >
                     📥 Get Price List & Floor Plans
                   </a>

                   <a
                     href="tel:+919347244397"
                     className={buttonOutline}
                   >
                     📞 Call Now
                   </a>
                 </div>

                 <p className="text-xs text-gray-500 text-center mt-4">
                   ⚡ Average response time: Under 5 minutes
                 </p>
               </div>
             </div>
           </div>
         </div>
      </section>
    </Layout>
  );
};