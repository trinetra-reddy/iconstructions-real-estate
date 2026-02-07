import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Object.values(ProjectCategory)];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <Layout>
      <div className="bg-brand-dark pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Discover our portfolio of completed and ongoing developments, ranging from luxury villas to state-of-the-art commercial hubs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-brand-primary text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
