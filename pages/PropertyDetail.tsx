import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PROJECTS } from '../constants';
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  Building2,
  Trees,
  Dumbbell,
  Waves,
  Shield,
  Zap
} from 'lucide-react';
import {
  buttonPrimary,
  buttonWhatsApp,
  buttonOutline
} from '../styles/designSystem';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);

  // Find the project by ID
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
            <Link to="/projects" className="px-6 py-3 bg-brand-primary text-white rounded-full hover:bg-brand-dark transition-colors">
              Back to Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappNumber = "919666622090";
  const whatsappMessage = `Hi, I'm interested in ${project.title} in ${project.location}. Can you provide more details?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Sample images (in real app, project would have multiple images)
  const images = [project.image, project.image, project.image];

  // Sample amenities
  const amenities = [
    { icon: Waves, label: 'Swimming Pool' },
    { icon: Dumbbell, label: 'Fitness Center' },
    { icon: Trees, label: 'Landscaped Gardens' },
    { icon: Shield, label: '24/7 Security' },
    { icon: Car, label: 'Covered Parking' },
    { icon: Zap, label: 'Power Backup' },
    { icon: Building2, label: 'Club House' },
    { icon: Trees, label: 'Children\'s Play Area' }
  ];

  return (
    <Layout>
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 py-6 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-dark font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <img
              src={images[activeImage]}
              alt={project.title}
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="flex gap-4 mt-6">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg cursor-pointer transition-all ${
                    activeImage === idx ? 'ring-4 ring-brand-primary shadow-md' : 'opacity-60 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-fit sticky top-28">
            <div className="mb-8">
              <p className="text-4xl font-bold text-brand-dark mb-3">{project.price}</p>
              <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${
                project.status === 'Ready to Move' ? 'bg-green-100 text-green-800' :
                project.status === 'Under Construction' ? 'bg-blue-100 text-blue-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {project.status}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonWhatsApp} py-3 sm:py-4`}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+${whatsappNumber}`}
                className={`${buttonPrimary} py-3 sm:py-4`}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:hello@iconstructions.in"
                className={`${buttonOutline} py-3 sm:py-4`}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center font-medium">
                ⚡ Average response time: Under 5 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            {/* Title & Location */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark mb-6">{project.title}</h1>
              <div className="flex items-center gap-3 text-brand-dark font-semibold text-lg">
                <MapPin className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 mb-12">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {project.features.map((feature, idx) => {
                  const [value, label] = feature.split(' ');
                  const Icon = label.includes('BHK') ? Bed :
                              label.includes('Bath') ? Bath :
                              label.includes('Sq') ? Square : Car;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-brand-primary/15 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-brand-primary" />
                      </div>
                      <p className="text-2xl font-bold text-brand-dark mb-2">{value}</p>
                      <p className="text-sm font-medium text-gray-700">{label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">About This Property</h2>
              <p className="text-gray-800 leading-relaxed mb-5 text-lg">
                {project.title} is a premium {project.category.toLowerCase()} development located in the heart of {project.location}.
                This exceptional property offers modern amenities, superior construction quality, and a lifestyle that combines comfort with luxury.
              </p>
              <p className="text-gray-800 leading-relaxed text-lg">
                Designed with attention to detail, every aspect of this property reflects our commitment to excellence.
                From spacious layouts to world-class amenities, {project.title} is where your dream home becomes reality.
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-200 hover:border-brand-primary hover:shadow-md transition-all">
                    <amenity.icon className="w-6 h-6 text-brand-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">Why Choose {project.title}?</h2>
              <div className="space-y-5">
                {[
                  'Prime location with excellent connectivity',
                  'World-class amenities and facilities',
                  'Superior construction quality with premium materials',
                  'Vastu-compliant designs for positive energy',
                  'Transparent pricing with no hidden costs',
                  'Trusted developer with 15+ years of experience'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Project Information</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Category</span>
                  <span className="font-semibold text-brand-dark">{project.category}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Status</span>
                  <span className="font-semibold text-brand-dark">{project.status}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Location</span>
                  <span className="font-semibold text-brand-dark text-right">{project.location}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">Price</span>
                  <span className="font-bold text-brand-primary text-lg">{project.price}</span>
                </div>
              </div>
            </div>

            {/* Schedule Visit */}
            <div className="bg-black rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-3">Schedule a Site Visit</h3>
              <p className="text-white/90 text-base mb-6 leading-relaxed">
                Experience the property firsthand. Book your visit today!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

