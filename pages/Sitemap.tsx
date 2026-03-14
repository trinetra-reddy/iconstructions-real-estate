import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Map } from 'lucide-react';

export const Sitemap: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-8 h-8 text-brand-highlight" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Sitemap</h1>
            </div>
            <p className="text-gray-600 text-lg">Navigate through all pages and sections of iConstructions Real Estate</p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Pages */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 pb-3 border-b-2 border-brand-highlight">Main Pages</h2>
              <ul className="space-y-3">
                <li><Link to="/" className="text-brand-highlight hover:text-brand-dark transition-colors">Home</Link></li>
                <li><Link to="/projects" className="text-brand-highlight hover:text-brand-dark transition-colors">Projects</Link></li>
                <li><Link to="/services" className="text-brand-highlight hover:text-brand-dark transition-colors">Services</Link></li>
                <li><Link to="/interior-design" className="text-brand-highlight hover:text-brand-dark transition-colors">Interior Design</Link></li>
                <li><Link to="/contact" className="text-brand-highlight hover:text-brand-dark transition-colors">Contact Us</Link></li>
              </ul>
            </section>

            {/* Properties by Location */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 pb-3 border-b-2 border-brand-highlight">Properties by Location</h2>
              <ul className="space-y-3">
                <li><Link to="/properties-anantapur" className="text-brand-highlight hover:text-brand-dark transition-colors">Properties in Anantapur</Link></li>
                <li><Link to="/properties-hyderabad" className="text-brand-highlight hover:text-brand-dark transition-colors">Properties in Hyderabad</Link></li>
                <li><Link to="/properties-kurnool" className="text-brand-highlight hover:text-brand-dark transition-colors">Properties in Kurnool</Link></li>
                <li><Link to="/properties-kadapa" className="text-brand-highlight hover:text-brand-dark transition-colors">Properties in Kadapa</Link></li>
              </ul>
            </section>

            {/* Property Types */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 pb-3 border-b-2 border-brand-highlight">Property Types</h2>
              <ul className="space-y-3">
                <li><Link to="/flats-anantapur" className="text-brand-highlight hover:text-brand-dark transition-colors">Flats & Apartments</Link></li>
                <li><Link to="/villas-anantapur" className="text-brand-highlight hover:text-brand-dark transition-colors">Luxury Villas</Link></li>
                <li><Link to="/commercial-anantapur" className="text-brand-highlight hover:text-brand-dark transition-colors">Commercial Properties</Link></li>
              </ul>
            </section>

            {/* Legal & Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 pb-3 border-b-2 border-brand-highlight">Legal & Compliance</h2>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-brand-highlight hover:text-brand-dark transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-brand-highlight hover:text-brand-dark transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/rera-compliance" className="text-brand-highlight hover:text-brand-dark transition-colors">RERA Compliance</Link></li>
                <li><Link to="/sitemap" className="text-brand-highlight hover:text-brand-dark transition-colors">Sitemap</Link></li>
              </ul>
            </section>
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 bg-brand-light rounded-lg">
            <h3 className="text-xl font-bold text-brand-dark mb-4">Quick Links</h3>
            <p className="text-gray-700 mb-4">
              For more information about our projects, services, or to schedule a site visit, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> hello@iconstructions.in</p>
              <p><strong>Phone:</strong> +91 93472 44397</p>
              <p><strong>Address:</strong> Shop no. 2nd floor, Sampada Women's Complex, Bellary - Uravakonda Rd, Ganesha Nagar, Ananthapur, Andhra Pradesh 515004</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

