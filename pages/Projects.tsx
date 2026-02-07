import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { ProjectCategory, ProjectStatus } from '../types';

export const Projects: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Read URL parameters from hero search
  const locationParam = searchParams.get('location');
  const typeParam = searchParams.get('type');

  useEffect(() => {
    // If type parameter exists, set it as the category filter
    if (typeParam && Object.values(ProjectCategory).includes(typeParam as ProjectCategory)) {
      setCategoryFilter(typeParam);
    }
  }, [typeParam]);

  const categories = ['All', ...Object.values(ProjectCategory)];
  const statuses = ['All', ...Object.values(ProjectStatus)];

  // Filter by category
  let filteredProjects = categoryFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === categoryFilter);

  // Filter by status
  if (statusFilter !== 'All') {
    filteredProjects = filteredProjects.filter(p => p.status === statusFilter);
  }

  // Further filter by location if provided
  if (locationParam) {
    filteredProjects = filteredProjects.filter(p =>
      p.location.toLowerCase().includes(locationParam.toLowerCase())
    );
  }

  return (
    <Layout>
      <div className="bg-brand-dark pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Discover our portfolio of completed and ongoing developments, ranging from luxury villas to state-of-the-art commercial hubs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  categoryFilter === cat
                    ? 'bg-brand-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary hover:text-brand-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filters */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Filter by Status</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  statusFilter === status
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-green-600 hover:text-green-600'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
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
