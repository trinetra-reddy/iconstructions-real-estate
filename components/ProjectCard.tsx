import React from 'react';
import { MapPin } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-6 aspect-[4/3] rounded-sm">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        
        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1">
            {project.status}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-xs text-brand-primary uppercase tracking-widest font-bold mb-2">
           <span>{project.category}</span>
           <span className="w-1 h-1 rounded-full bg-gray-300"></span>
           <div className="flex items-center text-gray-500">
             <MapPin className="h-3 w-3 mr-1" />
             {project.location.split(',')[0]} {/* Show only City/Area */}
           </div>
        </div>
        
        <h3 className="text-2xl font-serif text-brand-dark mb-3 group-hover:text-brand-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-2 max-w-sm mx-auto leading-relaxed">
          {project.description}
        </p>

        {/* Decorative Line */}
        <div className="h-px w-12 bg-gray-200 mt-6 group-hover:w-24 group-hover:bg-brand-primary transition-all duration-500"></div>
      </div>
    </div>
  );
};