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
      <div className="bg-gray-50 py-4 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="flex items-center gap-2 text-brand-primary hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <img 
              src={images[activeImage]} 
              alt={project.title}
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="flex gap-4 mt-4">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer transition-all ${
                    activeImage === idx ? 'ring-4 ring-brand-primary' : 'opacity-60 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-24">
            <div className="mb-6">
              <p className="text-3xl font-bold text-brand-dark mb-2">{project.price}</p>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                project.status === 'Ready to Move' ? 'bg-green-100 text-green-700' :
                project.status === 'Under Construction' ? 'bg-blue-100 text-blue-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {project.status}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+${whatsappNumber}`}
                className="w-full py-3 bg-brand-primary hover:bg-brand-dark text-white rounded-full font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:hello@iconstructions.com"
                className="w-full py-3 border-2 border-gray-200 hover:border-brand-primary text-brand-dark hover:text-brand-primary rounded-full font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                ⚡ Average response time: Under 5 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Title & Location */}
            <div className="mb-8">
              <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">{project.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-brand-primary" />
                <span className="text-lg">{project.location}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.features.map((feature, idx) => {
                  const [value, label] = feature.split(' ');
                  const Icon = label.includes('BHK') ? Bed :
                              label.includes('Bath') ? Bath :
                              label.includes('Sq') ? Square : Car;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <p className="text-2xl font-bold text-brand-dark">{value}</p>
                      <p className="text-sm text-gray-600">{label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">About This Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.title} is a premium {project.category.toLowerCase()} development located in the heart of {project.location}.
                This exceptional property offers modern amenities, superior construction quality, and a lifestyle that combines comfort with luxury.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Designed with attention to detail, every aspect of this property reflects our commitment to excellence.
                From spacious layouts to world-class amenities, {project.title} is where your dream home becomes reality.
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                    <amenity.icon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-sm text-gray-700">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-brand-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Why Choose {project.title}?</h2>
              <div className="space-y-4">
                {[
                  'Prime location with excellent connectivity',
                  'World-class amenities and facilities',
                  'Superior construction quality with premium materials',
                  'Vastu-compliant designs for positive energy',
                  'Transparent pricing with no hidden costs',
                  'Trusted developer with 15+ years of experience'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Project Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-brand-dark">{project.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-brand-dark">{project.status}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold text-brand-dark">{project.location}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Price</span>
                  <span className="font-semibold text-brand-dark">{project.price}</span>
                </div>
              </div>
            </div>

            {/* Schedule Visit */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-dark rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Schedule a Site Visit</h3>
              <p className="text-white/80 text-sm mb-4">
                Experience the property firsthand. Book your visit today!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white text-brand-primary rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
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

