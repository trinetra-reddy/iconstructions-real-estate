import React from 'react';
import { MapPin, ArrowRight, Home, Maximize } from 'lucide-react';
import { Project } from '../types';
import {Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary">
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-200">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            onError={(e) => {
              console.error(`Failed to load image for ${project.title}:`, project.image);
              setImageError(true);
            }}
            loading="lazy"
            crossOrigin="anonymous"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-light to-gray-100">
            <div className="text-center p-8">
              <Home className="w-20 h-20 text-brand-primary mx-auto mb-4 opacity-50" />
              <p className="text-brand-dark font-serif text-lg mb-2">{project.title}</p>
              <p className="text-gray-500 text-xs">Image unavailable</p>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
            project.status === 'COMPLETED' ? 'bg-green-500/90 text-white' :
            project.status === 'ONGOING' ? 'bg-blue-500/90 text-white' :
            'bg-orange-500/90 text-white'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Price Tag */}
        {project.priceStart && (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Starting From</p>
            <p className="text-xl font-bold text-brand-primary">{project.priceStart}</p>
          </div>
        )}

        {/* Quick View Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-brand-dark p-3 rounded-full hover:bg-brand-primary hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-brand-primary uppercase tracking-widest font-bold mb-3">
           <span className="bg-brand-light px-2 py-1 rounded">{project.category}</span>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
          {project.title}
        </h3>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1 text-brand-primary" />
          {project.location}
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="text-xs text-brand-primary font-bold">+{project.features.length - 3} more</span>
            )}
          </div>
        )}

        {/* CTA */}
        <Link to={`/projects/${project.id}`}>
          <button className="w-full py-3 border-2 border-gray-200 rounded-full text-sm font-bold uppercase tracking-wide text-brand-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 flex items-center justify-center gap-2">
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};