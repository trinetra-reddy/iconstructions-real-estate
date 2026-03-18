import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { ProjectCategory, ProjectStatus } from '../types';
import {
  buttonFilterPillActive,
  buttonFilterPillInactive,
  buttonPrimary
} from '../styles/designSystem';
import {
  hammerSnap,
  tileLaying
} from '../src/utils/constructionAnimations';
import { usePremiumHeroAnimations } from '../src/hooks/usePageAnimations';

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // 🎬 PREMIUM HERO ANIMATIONS
  const { heroRef, headingRef, subtextRef } = usePremiumHeroAnimations();
  const categoryFiltersRef = useRef<HTMLDivElement>(null);
  const statusFiltersRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  // Read URL parameters from hero search
  const locationParam = searchParams.get('location');
  const typeParam = searchParams.get('type');

  useEffect(() => {
    // If type parameter exists, set it as the category filter
    if (typeParam && Object.values(ProjectCategory).includes(typeParam as ProjectCategory)) {
      setCategoryFilter(typeParam);
    }
  }, [typeParam]);

  // 🏗️ FILTER ANIMATIONS
  useEffect(() => {
    console.log('🏗️ Initializing Projects page filter animations...');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Category filters - Hammer snap
    if (categoryFiltersRef.current) {
      const buttons = categoryFiltersRef.current.querySelectorAll('button');
      if (buttons.length > 0) {
        tl.add(
          hammerSnap(buttons, {
            duration: 0.5,
            stagger: 0.05,
            delay: 0
          }),
          1.5
        );
      }
    }

    // Status filters - Hammer snap
    if (statusFiltersRef.current) {
      const buttons = statusFiltersRef.current.querySelectorAll('button');
      if (buttons.length > 0) {
        tl.add(
          hammerSnap(buttons, {
            duration: 0.5,
            stagger: 0.05,
            delay: 0
          }),
          1.8
        );
      }
    }

    return () => {
      tl.kill();
    };
  }, []);

  // 🏗️ Animate project grid when filter changes
  useEffect(() => {
    if (projectsGridRef.current) {
      const cards = projectsGridRef.current.querySelectorAll('.project-card-wrapper');

      if (cards.length > 0) {
        console.log(`🏗️ Laying ${cards.length} project tiles...`);

        tileLaying(cards, {
          duration: 0.6,
          delay: 0
        });
      }
    }
  }, [categoryFilter, statusFilter]);

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
      {/* Hero Section */}
      <section ref={heroRef} className="bg-black pt-32 pb-16 sm:pb-20 md:pb-24 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 ref={headingRef} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ textShadow: '3px 6px 16px rgba(0,0,0,0.95)' }}>
            Our Projects
          </h1>
          <p ref={subtextRef} className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto px-2 leading-relaxed" style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.8)' }}>
            Discover our portfolio of completed and ongoing developments, ranging from luxury villas to state-of-the-art commercial hubs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Category Filters */}
        <div ref={categoryFiltersRef} className="mb-10 sm:mb-12">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 sm:mb-8 text-center">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={categoryFilter === cat ? buttonFilterPillActive : buttonFilterPillInactive}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filters */}
        <div ref={statusFiltersRef} className="mb-12 sm:mb-16">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 sm:mb-8 text-center">Filter by Status</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={statusFilter === status ? buttonFilterPillActive : buttonFilterPillInactive}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div ref={projectsGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 md:py-24">
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-10 font-light">No projects found in this category.</p>
            <Link
              to="/projects"
              className={buttonPrimary}
            >
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};
