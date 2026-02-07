import React from 'react';
import { Layout } from '../components/Layout';
import { SERVICES } from '../constants';
import { Home, Palette, ClipboardCheck, Ruler, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  ClipboardCheck: <ClipboardCheck className="w-8 h-8" />,
  Ruler: <Ruler className="w-8 h-8" />
};

export const Services: React.FC = () => {
  return (
    <Layout>
      <div className="bg-brand-dark pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Expertise</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Comprehensive real estate and construction solutions tailored to meet global standards.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex gap-6 group">
              <div className="shrink-0">
                <div className="w-16 h-16 bg-brand-light rounded-lg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  {iconMap[service.iconName]}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a href="/contact" className="inline-flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors">
                  REQUEST SERVICE <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 bg-brand-light rounded-2xl p-8 md:p-16">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">How We Work</span>
            <h2 className="text-3xl font-serif font-bold text-brand-dark mt-2">Our Construction Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10" />
            
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision & requirements.' },
              { step: '02', title: 'Design & Plan', desc: 'Architectural blueprints & 3D visualizations.' },
              { step: '03', title: 'Construction', desc: 'Execution with premium materials & supervision.' },
              { step: '04', title: 'Handover', desc: 'Quality checks & key delivery.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-brand-light pt-4">
                 <div className="w-16 h-16 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center text-xl font-bold text-brand-dark mx-auto mb-6 shadow-lg">
                   {item.step}
                 </div>
                 <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                 <p className="text-sm text-gray-600 px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
