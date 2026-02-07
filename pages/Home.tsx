import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  MapPin, 
  Building2, 
  Hammer,
  ChevronDown,
  Quote,
  Home as HomeIcon,
  TrendingUp,
  Play,
  Plus,
  Minus,
  Award,
  ChevronRight
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS, SERVICES, TESTIMONIALS, FAQS, AWARDS, TEAM_MEMBERS } from '../constants';

// Icon mapping for Services
const ServiceIconMap: any = {
  'Home': HomeIcon,
  'Hammer': Hammer,
  'Building2': Building2,
  'TrendingUp': TrendingUp
};

export const Home: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeFloorPlan, setActiveFloorPlan] = useState<string>('Paradise');
  const featuredProjects = PROJECTS.slice(0, 3);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const floorPlans: any = {
    'Paradise': 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop',
    'Deluxe': 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=1600&auto=format&fit=crop',
    'Penthouse': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop'
  };

  return (
    <Layout>
      {/* 1. Hero Section - Cinematic */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>

        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6 text-brand-primary/90 animate-fade-in">
            Anantapur • Hyderabad • Amaravati
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight animate-fade-in-up">
            Your Smarter <br />
            <span className="italic text-brand-primary">Property Decisions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
            Premium residential and commercial developments designed for the modern elite. Experience the pinnacle of construction excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-200">
             <Link 
              to="/projects" 
              className="px-10 py-4 bg-white text-brand-dark hover:bg-brand-primary hover:text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-full"
            >
              Browse Properties
            </Link>
          </div>
        </div>
        
        {/* Floating Satisfaction Badge */}
        <div className="absolute bottom-20 right-8 md:right-20 z-20 bg-white p-6 shadow-2xl rounded-sm hidden md:block animate-fade-in delay-300 max-w-xs">
          <div className="flex items-start justify-between mb-2">
             <span className="text-xs text-gray-400 uppercase tracking-wider">Client Satisfaction</span>
             <span className="text-4xl font-serif text-brand-primary">98%</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-2">
             Premium residential and commercial properties tailored to your lifestyle and investment goals.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* 2. Intro / About Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="text-gray-400 text-sm tracking-widest uppercase mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-8 leading-none">
                Guiding <span className="italic text-brand-primary">Smart</span> <br />
                property decisions
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                We are a professional real estate business dedicated to helping clients buy, sell, and invest in properties with confidence. Our team combines local market knowledge with transparent processes.
              </p>
              
              <div className="mb-10">
                 <h3 className="font-serif text-xl mb-4 text-brand-dark">Our Business Advantages</h3>
                 <ul className="space-y-3">
                   {['Trusted Market Expertise', 'Local & Regional Market Knowledge', 'Clear Pricing and Documentation'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-600">
                       <CheckCircle className="w-5 h-5 text-brand-primary" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="flex items-center gap-6">
                <Link to="/contact" className="px-8 py-3 bg-brand-light text-brand-dark hover:bg-brand-dark hover:text-white transition-colors rounded-full text-sm font-bold uppercase tracking-wide">
                  More About Us
                </Link>
                <div className="flex items-center gap-3">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Signature" className="w-12 h-12 rounded-full grayscale object-cover" />
                   <div>
                     <p className="text-xs font-bold text-brand-dark uppercase">Michael Anderson</p>
                     <p className="text-[10px] text-gray-500 uppercase tracking-widest">Managing Director</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" className="mt-12 rounded-sm w-full h-64 object-cover" alt="Interior" />
                <img src="https://images.unsplash.com/photo-1600596542815-2a4d9fbea40d?q=80&w=800&auto=format&fit=crop" className="rounded-sm w-full h-80 object-cover" alt="Exterior" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl">
                 <div className="border border-brand-primary rounded-full p-8 w-32 h-32 flex items-center justify-center text-center">
                    <span className="font-serif text-brand-primary text-xs uppercase tracking-widest leading-relaxed">
                      Real<br/>Estate<br/>Agency
                    </span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section - Circular Icons */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gray-400 text-xs tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-3">
              <span className="italic font-serif">Professional</span> Services designed <br />
              for your property goals
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = ServiceIconMap[service.iconName] || HomeIcon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-20 h-20 mx-auto bg-brand-light rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-brand-dark group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-brand-dark mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Explore Categories */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
               <span className="text-gray-400 text-xs tracking-widest uppercase">Categories</span>
               <h2 className="text-4xl font-serif text-brand-dark mt-2">
                 <span className="italic">Explore</span> Our full range <br />
                 of property opportunities
               </h2>
            </div>
            <div className="flex gap-2">
               <button className="p-3 border border-gray-200 rounded-full hover:bg-brand-dark hover:text-white transition-colors"><ChevronRight className="rotate-180 w-5 h-5" /></button>
               <button className="p-3 border border-gray-200 rounded-full hover:bg-brand-dark hover:text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Commercial Spaces", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
              { title: "Residential Apartments", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop" },
              { title: "Luxury Villas", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop" }
            ].map((cat, i) => (
              <div key={i} className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                   <h3 className="text-white font-serif text-xl">{cat.title}</h3>
                   <div className="bg-white/20 backdrop-blur p-2 rounded-full group-hover:bg-white group-hover:text-brand-dark text-white transition-all">
                     <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-colors">
              Browse All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured Properties */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gray-400 text-xs tracking-widest uppercase">Featured List</span>
            <h2 className="text-4xl font-serif text-brand-dark mt-2">
              <span className="italic">Featured</span> Properties you'll love
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Video Experience Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-primary mb-8 hover:scale-110 transition-transform duration-300 mx-auto">
            <Play className="w-8 h-8 fill-current ml-1" />
          </button>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Experience Our Professional</h2>
          <h2 className="text-4xl md:text-6xl font-serif">Real Estate Approach</h2>
        </div>
      </section>

      {/* 7. Floor Plans / Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gray-400 text-xs tracking-widest uppercase">Floor Plans</span>
            <h2 className="text-4xl font-serif text-brand-dark mt-2">
              <span className="italic">Modern</span> Infrastructure & <br />
              thoughtful living spaces
            </h2>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {Object.keys(floorPlans).map((plan) => (
              <button
                key={plan}
                onClick={() => setActiveFloorPlan(plan)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  activeFloorPlan === plan ? 'bg-brand-dark text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
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
               <h3 className="text-2xl font-serif text-brand-dark mb-2">{activeFloorPlan} Suite</h3>
               <p className="text-gray-500 text-sm mb-4">A spacious and well-balanced layout offering comfort, natural light, and efficient room planning—ideal for families.</p>
               <div className="grid grid-cols-2 gap-4 text-xs font-bold text-gray-600 uppercase">
                 <span>• 12x12 Sq Ft Rooms</span>
                 <span>• 2 Built-in Shelves</span>
                 <span>• 4 Large Windows</span>
                 <span>• Modern Kitchen</span>
               </div>
               <button className="mt-6 flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest">
                 View 3D Video <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials - Refined */}
      <section className="py-24 bg-brand-light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <span className="text-gray-400 text-xs tracking-widest uppercase">Testimonial</span>
             <h2 className="text-4xl font-serif text-brand-dark mt-2">
               <span className="italic">Proven</span> Results through <br/> client satisfaction
             </h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-white p-8 rounded-sm shadow-sm relative">
                 <Quote className="w-10 h-10 text-brand-primary/20 absolute top-6 right-6" />
                 <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.content}"</p>
                 <div className="flex items-center gap-4">
                   <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                   <div>
                     <h4 className="font-serif font-bold text-brand-dark">{t.name}</h4>
                     <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                   </div>
                 </div>
                 <div className="mt-4 flex text-brand-primary">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* 9. FAQs & Awards Split Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20">
             
             {/* FAQs */}
             <div>
               <span className="text-gray-400 text-xs tracking-widest uppercase">FAQs</span>
               <h2 className="text-4xl font-serif text-brand-dark mt-2 mb-10">
                 <span className="italic">Have</span> Questions <br/> in your mind?
               </h2>
               
               <div className="space-y-4">
                 {FAQS.map((faq, index) => (
                   <div key={index} className="border-b border-gray-100 pb-4">
                     <button 
                       className="w-full flex justify-between items-center py-2 text-left"
                       onClick={() => toggleAccordion(index)}
                     >
                       <span className="font-serif text-lg text-brand-dark">{faq.question}</span>
                       {activeAccordion === index ? <Minus className="w-4 h-4 text-brand-primary" /> : <Plus className="w-4 h-4 text-gray-400" />}
                     </button>
                     <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                       <p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Image/Visual for FAQ */}
             <div className="relative h-full min-h-[400px]">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover rounded-sm" />
             </div>
           </div>
        </div>
      </section>

      {/* 10. Awards Section - Dark */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-primary text-xs tracking-widest uppercase">Awards</span>
            <h2 className="text-4xl font-serif mt-2">
              <span className="italic">Awards</span> And industry <br/> recognition for excellence
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
             {AWARDS.map((award, idx) => (
               <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-6 group hover:pl-4 transition-all duration-300 cursor-default">
                 <div className="flex items-center gap-8">
                    <span className="text-gray-500 font-mono text-sm">{award.year}</span>
                    <span className="font-serif text-xl group-hover:text-brand-primary transition-colors">{award.title}</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest text-gray-400">{award.status}</span>
                    <ArrowRight className="w-4 h-4 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </div>
             ))}
          </div>

          <div className="flex justify-center gap-12 mt-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {[1, 2, 3, 4].map((_, i) => (
               <Award key={i} className="w-16 h-16 text-brand-primary" />
             ))}
          </div>
        </div>
      </section>

      {/* 11. Team Section */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <span className="text-gray-400 text-xs tracking-widest uppercase">Our Team</span>
             <h2 className="text-4xl font-serif text-brand-dark mt-2">
               <span className="italic">The People</span> Who make our <br/> real estate work
             </h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="group text-center">
                  <div className="relative overflow-hidden mb-6 rounded-full w-64 h-64 mx-auto border-4 border-white shadow-xl">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-brand-dark">{member.name}</h3>
                  <p className="text-brand-primary text-xs uppercase tracking-widest font-bold mt-1">{member.role}</p>
                  
                  <button className="mt-4 px-6 py-2 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                    View Profile
                  </button>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* 12. Pre-Footer Contact */}
      <section className="py-32 bg-gray-100 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577086664693-894553052526?q=80&w=2000&auto=format&fit=crop')` }} />
         
         <div className="max-w-5xl mx-auto px-4 relative z-10">
           <div className="bg-white p-12 md:p-16 shadow-2xl rounded-sm flex flex-col md:flex-row items-center justify-between gap-12">
             <div>
               <span className="text-gray-400 text-xs tracking-widest uppercase">Contact</span>
               <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-2 leading-none">
                 <span className="italic">Get in Touch</span> With our <br/> real estate experts
               </h2>
               
               <div className="mt-8 space-y-2">
                 <div className="flex items-center gap-3">
                   <MapPin className="w-5 h-5 text-brand-primary" />
                   <p className="text-gray-600">Plot 42, Jubilee Enclave, Hitech City, Hyderabad</p>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 flex items-center justify-center text-brand-primary">@</div>
                   <p className="text-gray-600">hello@iconstructions.com</p>
                 </div>
               </div>
             </div>

             <form className="w-full md:w-96 space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-primary outline-none transition-colors" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-primary outline-none transition-colors" />
                <textarea rows={3} placeholder="Message" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-primary outline-none transition-colors" />
                <button className="w-full py-4 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors">Submit Now</button>
             </form>
           </div>
         </div>
      </section>
    </Layout>
  );
};