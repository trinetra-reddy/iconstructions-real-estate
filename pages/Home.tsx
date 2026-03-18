import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Building2,
  HardHat,
  ChevronDown,
  Quote,
  Home as HomeIcon,
  KeyRound,
  Coins,
  Play,
  Plus,
  Minus,
  Award,
  ChevronRight,
  MessageCircle,
  Phone,
  Volume2,
  VolumeX
} from 'lucide-react';
import { gsap } from 'gsap';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { CustomCursor } from '../components/CustomCursor';
import { PROJECTS, SERVICES, TESTIMONIALS, FAQS, TEAM_MEMBERS, STATS } from '../constants';
import {
  buttonPrimary,
  buttonSecondary,
  buttonWhatsApp,
  buttonOutline,
  buttonFilterPillActive,
  buttonFilterPillInactive,
  buttonIcon
} from '../styles/designSystem';
import {
  getAnimationConfig,
  animateCounter,
  cleanupScrollTriggers
} from '../src/utils/animations';
import {
  brickByBrickReveal,
  foundationToRoof,
  hammerSnap,
  craneLift,
  cementPour,
  tileLaying,
  scaffoldingReveal
} from '../src/utils/constructionAnimations';

// Icon mapping for Services
const ServiceIconMap: any = {
  'Home': HomeIcon,
  'HardHat': HardHat,
  'Building2': Building2,
  'KeyRound': KeyRound,
  'Coins': Coins
};

export const Home: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeFloorPlan, setActiveFloorPlan] = useState<string>('Paradise');
  const [propertyFilter, setPropertyFilter] = useState<string>('All Properties');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [categoryIndex, setCategoryIndex] = useState<number>(0);

  // Refs for hero section animations
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroSubtextRef = useRef<HTMLParagraphElement>(null);
  const heroCTARef = useRef<HTMLDivElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const heroBadgesRef = useRef<HTMLDivElement>(null);

  // Refs for all sections - construction animations
  const statsBarRef = useRef<HTMLElement>(null);
  const introSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const categoriesSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const locationsSectionRef = useRef<HTMLElement>(null);
  const floorPlansSectionRef = useRef<HTMLElement>(null);
  const testimonialsSectionRef = useRef<HTMLElement>(null);
  const faqsSectionRef = useRef<HTMLElement>(null);
  const teamSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  // 🏗️ CONSTRUCTION-THEMED HERO ANIMATIONS
  useEffect(() => {
    const config = getAnimationConfig();
    if (config.duration === 0) return;

    console.log('🏗️ Initializing construction-themed animations...');

    // Master timeline with construction theme
    const masterTL = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => console.log('🏗️ Construction animations complete!')
    });

    // Timeline labels
    masterTL.addLabel('foundation', 0);
    masterTL.addLabel('structure', 0.3);
    masterTL.addLabel('walls', 0.8);
    masterTL.addLabel('details', 1.5);
    masterTL.addLabel('finishing', 2);

    // 🧱 1. BADGES - Brick-by-Brick Build (CONSTRUCTION THEME)
    if (heroBadgesRef.current) {
      const badges = heroBadgesRef.current.querySelectorAll('.hero-badge');

      console.log(`🧱 Building ${badges.length} trust badges brick-by-brick...`);

      // Brick-by-brick reveal
      masterTL.add(
        brickByBrickReveal(badges, {
          duration: 0.8,
          stagger: 0.15,
          delay: 0
        }),
        'foundation'
      );
    }

    // 🏗️ 2. CATEGORY TEXT - Foundation Build (CONSTRUCTION THEME)
    const categoryText = document.querySelector('.hero-category');
    if (categoryText) {
      console.log('🏗️ Building category foundation...');

      masterTL.add(
        foundationToRoof(categoryText, {
          duration: 1,
          delay: 0
        }),
        'foundation+=0.3'
      );
    }

    // 🔨 3. HERO HEADING - Hammer Snap Build (CONSTRUCTION IMPACT)
    if (heroHeadingRef.current) {
      const heading = heroHeadingRef.current;

      console.log('🔨 Hammering heading into place...');

      // Split text into words while preserving HTML
      const splitHeading = () => {
        const walker = document.createTreeWalker(
          heading,
          NodeFilter.SHOW_TEXT,
          null
        );

        const textNodes: Node[] = [];
        let node: Node | null;
        while ((node = walker.nextNode())) {
          if (node.textContent?.trim()) {
            textNodes.push(node);
          }
        }

        textNodes.forEach(textNode => {
          const text = textNode.textContent || '';
          const words = text.split(' ').filter(w => w.trim());
          const fragment = document.createDocumentFragment();

          words.forEach((word, i) => {
            const span = document.createElement('span');
            span.className = 'hero-word';
            span.style.display = 'inline-block';
            span.style.whiteSpace = 'nowrap';
            span.textContent = word;
            fragment.appendChild(span);

            if (i < words.length - 1) {
              fragment.appendChild(document.createTextNode(' '));
            }
          });

          textNode.parentNode?.replaceChild(fragment, textNode);
        });
      };

      splitHeading();

      const words = heading.querySelectorAll('.hero-word');

      // Hammer snap animation - words snap into place like hammering nails
      masterTL.add(
        hammerSnap(words, {
          duration: 0.7,
          stagger: 0.08,
          delay: 0
        }),
        'structure'
      );
    }

    // 🧱 4. SUBTEXT - Cement Pour Effect (CONSTRUCTION THEME)
    if (heroSubtextRef.current) {
      console.log('🧱 Pouring cement for subtext...');

      masterTL.add(
        cementPour(heroSubtextRef.current, {
          duration: 1.2,
          delay: 0
        }),
        'walls'
      );
    }

    // 🏗️ 5. CTA BUTTONS - Crane Lift Effect (CONSTRUCTION THEME)
    if (heroCTARef.current) {
      const buttons = heroCTARef.current.querySelectorAll('a');

      console.log(`🏗️ Lifting ${buttons.length} CTA buttons with crane...`);

      masterTL.add(
        craneLift(buttons, {
          duration: 1.2,
          stagger: 0.2,
          delay: 0
        }),
        'details'
      );
    }

    // 🏗️ 6. STATS CARD - Foundation Build with Counter (CONSTRUCTION PROGRESS)
    if (heroStatsRef.current) {
      const statsCard = heroStatsRef.current;

      console.log('🏗️ Building stats foundation...');

      masterTL.add(
        foundationToRoof(statsCard, {
          duration: 1,
          delay: 0
        }),
        'details+=0.3'
      );

      // Animate stat numbers with counter (construction progress)
      const statNumbers = statsCard.querySelectorAll('.stat-number');
      statNumbers.forEach((stat, index) => {
        const element = stat as HTMLElement;
        const valueText = element.getAttribute('data-value') || '0';
        const suffix = element.getAttribute('data-suffix') || '';
        const numericValue = parseInt(valueText.replace(/\D/g, ''));

        setTimeout(() => {
          console.log(`📊 Counting construction progress: ${numericValue}${suffix}`);
          animateCounter(element, numericValue, suffix, 2.5);
        }, 2000 + index * 250);
      });
    }

    // Cleanup
    return () => {
      masterTL.kill();
      cleanupScrollTriggers();
    };
  }, []);



  // 🎬 EXPERT-LEVEL SCROLL ANIMATIONS - PARALLAX & REVEALS
  useEffect(() => {
    const config = getAnimationConfig();
    if (config.duration === 0) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const scrollAnimations: any[] = [];

      // 🎯 1. VIDEO BACKGROUND - Multi-layer Parallax (DEPTH)
      const videoElement = videoRef.current;
      if (videoElement) {
        const videoTL = gsap.timeline({
          scrollTrigger: {
            trigger: videoElement,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
            // markers: true // Enable for debugging
          }
        });

        videoTL
          .to(videoElement, {
            y: 200,
            scale: 1.15,
            ease: 'none'
          })
          .to(videoElement, {
            opacity: 0.3,
            ease: 'none'
          }, 0);

        scrollAnimations.push(videoTL);
      }

      // 🧱 2. SERVICES SECTION - Brick-by-Brick Build (CONSTRUCTION THEME)
      if (servicesSectionRef.current) {
        const serviceCards = servicesSectionRef.current.querySelectorAll('.service-card');

        if (serviceCards.length > 0) {
          console.log(`🧱 Building ${serviceCards.length} service cards brick-by-brick...`);

          const servicesTL = gsap.timeline({
            scrollTrigger: {
              trigger: servicesSectionRef.current,
              start: 'top 75%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          // Brick-by-brick reveal for service cards
          servicesTL.add(
            brickByBrickReveal(serviceCards, {
              duration: 0.9,
              stagger: 0.15,
              delay: 0
            })
          );

          scrollAnimations.push(servicesTL);
        }
      }

      // 🏗️ 3. PROJECTS SECTION - Tile Laying Pattern (CONSTRUCTION THEME)
      if (projectsSectionRef.current) {
        const projectCards = projectsSectionRef.current.querySelectorAll('.project-card-wrapper');

        if (projectCards.length > 0) {
          console.log(`🏗️ Laying ${projectCards.length} project tiles...`);

          const projectsTL = gsap.timeline({
            scrollTrigger: {
              trigger: projectsSectionRef.current,
              start: 'top 70%',
              end: 'top 25%',
              toggleActions: 'play none none reverse'
            }
          });

          // Tile laying pattern - projects appear like laying tiles
          projectsTL.add(
            tileLaying(projectCards, {
              duration: 0.8,
              delay: 0
            })
          );

          scrollAnimations.push(projectsTL);
        }
      }

      // 🏗️ 4. SECTION HEADINGS - Foundation Build (CONSTRUCTION THEME)
      const sectionHeadings = document.querySelectorAll('h2');
      console.log(`🏗️ Building ${sectionHeadings.length} section headings...`);

      sectionHeadings.forEach((heading) => {
        const headingTL = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        });

        // Foundation to roof build for headings
        headingTL.add(
          foundationToRoof(heading, {
            duration: 1,
            delay: 0
          })
        );

        scrollAnimations.push(headingTL);
      });

      // 🧱 5. TESTIMONIALS SECTION - Brick-by-Brick Cards (CONSTRUCTION THEME)
      if (testimonialsSectionRef.current) {
        const testimonialCards = testimonialsSectionRef.current.querySelectorAll('.testimonial-card');

        if (testimonialCards.length > 0) {
          console.log(`🧱 Building ${testimonialCards.length} testimonial cards brick-by-brick...`);

          const testimonialsTL = gsap.timeline({
            scrollTrigger: {
              trigger: testimonialsSectionRef.current,
              start: 'top 75%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          // Brick-by-brick reveal for testimonial cards
          testimonialsTL.add(
            brickByBrickReveal(testimonialCards, {
              duration: 0.8,
              stagger: 0.12,
              delay: 0
            })
          );

          scrollAnimations.push(testimonialsTL);
        }
      }

      // 🏗️ 6. STATS BAR - Foundation Build (CONSTRUCTION THEME)
      if (statsBarRef.current) {
        const statItems = statsBarRef.current.querySelectorAll('.stat-item');

        if (statItems.length > 0) {
          console.log(`🏗️ Building ${statItems.length} stat items...`);

          const statsTL = gsap.timeline({
            scrollTrigger: {
              trigger: statsBarRef.current,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse'
            }
          });

          statsTL.add(
            hammerSnap(statItems, {
              duration: 0.6,
              stagger: 0.1,
              delay: 0
            })
          );

          scrollAnimations.push(statsTL);
        }
      }

      // 🧱 7. INTRO SECTION - Cement Pour (CONSTRUCTION THEME)
      if (introSectionRef.current) {
        const introContent = introSectionRef.current.querySelectorAll('.intro-content, p, .intro-image');

        if (introContent.length > 0) {
          console.log(`🧱 Pouring cement for intro section...`);

          introContent.forEach((element) => {
            const introTL = gsap.timeline({
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
              }
            });

            introTL.add(
              cementPour(element, {
                duration: 1,
                delay: 0
              })
            );

            scrollAnimations.push(introTL);
          });
        }
      }

      // 🏗️ 8. CATEGORIES SECTION - Tile Laying (CONSTRUCTION THEME)
      if (categoriesSectionRef.current) {
        const categoryCards = categoriesSectionRef.current.querySelectorAll('.category-card, .bg-white.rounded-lg');

        if (categoryCards.length > 0) {
          console.log(`🏗️ Laying ${categoryCards.length} category tiles...`);

          const categoriesTL = gsap.timeline({
            scrollTrigger: {
              trigger: categoriesSectionRef.current,
              start: 'top 70%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          categoriesTL.add(
            tileLaying(categoryCards, {
              duration: 0.7,
              delay: 0
            })
          );

          scrollAnimations.push(categoriesTL);
        }
      }

      // 🏗️ 9. LOCATIONS SECTION - Crane Lift (CONSTRUCTION THEME)
      if (locationsSectionRef.current) {
        const locationCards = locationsSectionRef.current.querySelectorAll('.location-card, .group');

        if (locationCards.length > 0) {
          console.log(`🏗️ Lifting ${locationCards.length} location cards with crane...`);

          const locationsTL = gsap.timeline({
            scrollTrigger: {
              trigger: locationsSectionRef.current,
              start: 'top 70%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          locationsTL.add(
            craneLift(locationCards, {
              duration: 1,
              stagger: 0.15,
              delay: 0
            })
          );

          scrollAnimations.push(locationsTL);
        }
      }

      // 🧱 10. FLOOR PLANS SECTION - Brick-by-Brick (CONSTRUCTION THEME)
      if (floorPlansSectionRef.current) {
        const floorPlanElements = floorPlansSectionRef.current.querySelectorAll('.floor-plan-item, .bg-white');

        if (floorPlanElements.length > 0) {
          console.log(`🧱 Building ${floorPlanElements.length} floor plan elements...`);

          const floorPlansTL = gsap.timeline({
            scrollTrigger: {
              trigger: floorPlansSectionRef.current,
              start: 'top 75%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          floorPlansTL.add(
            brickByBrickReveal(floorPlanElements, {
              duration: 0.8,
              stagger: 0.1,
              delay: 0
            })
          );

          scrollAnimations.push(floorPlansTL);
        }
      }

      // 🔨 11. FAQs SECTION - Hammer Snap (CONSTRUCTION THEME)
      if (faqsSectionRef.current) {
        const faqItems = faqsSectionRef.current.querySelectorAll('.faq-item, .border-b');

        if (faqItems.length > 0) {
          console.log(`🔨 Hammering ${faqItems.length} FAQ items into place...`);

          const faqsTL = gsap.timeline({
            scrollTrigger: {
              trigger: faqsSectionRef.current,
              start: 'top 75%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          faqsTL.add(
            hammerSnap(faqItems, {
              duration: 0.6,
              stagger: 0.08,
              delay: 0
            })
          );

          scrollAnimations.push(faqsTL);
        }
      }

      // 🏗️ 12. TEAM SECTION - Crane Lift (CONSTRUCTION THEME)
      if (teamSectionRef.current) {
        const teamCards = teamSectionRef.current.querySelectorAll('.team-card, .text-center');

        if (teamCards.length > 0) {
          console.log(`🏗️ Lifting ${teamCards.length} team members with crane...`);

          const teamTL = gsap.timeline({
            scrollTrigger: {
              trigger: teamSectionRef.current,
              start: 'top 70%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          teamTL.add(
            craneLift(teamCards, {
              duration: 1.1,
              stagger: 0.15,
              delay: 0
            })
          );

          scrollAnimations.push(teamTL);
        }
      }

      // 🧱 13. CONTACT SECTION - Foundation Build (CONSTRUCTION THEME)
      if (contactSectionRef.current) {
        const contactElements = contactSectionRef.current.querySelectorAll('.contact-item, h2, p, a');

        if (contactElements.length > 0) {
          console.log(`🧱 Building contact section foundation...`);

          const contactTL = gsap.timeline({
            scrollTrigger: {
              trigger: contactSectionRef.current,
              start: 'top 75%',
              end: 'top 40%',
              toggleActions: 'play none none reverse'
            }
          });

          contactTL.add(
            foundationToRoof(contactSectionRef.current, {
              duration: 1.2,
              delay: 0
            })
          );

          scrollAnimations.push(contactTL);
        }
      }

      console.log(`🏗️ Created ${scrollAnimations.length} construction-themed scroll animations!`);
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      cleanupScrollTriggers();
    };
  }, []);

  // Filter projects based on selected filter
  const getFilteredProjects = () => {
    if (propertyFilter === 'All Properties') {
      return PROJECTS.slice(0, 3);
    } else if (propertyFilter === 'Residential') {
      return PROJECTS.filter(p => p.category === 'Residential');
    } else if (propertyFilter === 'Commercial') {
      return PROJECTS.filter(p => p.category === 'Commercial');
    } else if (propertyFilter === 'Villa') {
      return PROJECTS.filter(p => p.category === 'Luxury Villa');
    } else if (propertyFilter === 'Completed') {
      return PROJECTS.filter(p => p.status === 'Completed');
    } else if (propertyFilter === 'Ongoing') {
      return PROJECTS.filter(p => p.status === 'Ongoing');
    }
    return PROJECTS.slice(0, 3);
  };

  const featuredProjects = getFilteredProjects();

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const floorPlans: any = {
    'Paradise': '/images/Luxury-villas.jpg',
    'Deluxe': '/images/residential-apartments.jpg',
    'Penthouse': '/images/premium-plots.jpg'
  };

  return (
    <Layout>
      {/* 1. Hero Section - Construction-Focused with Video Background */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden max-w-full bg-black">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster="/images/construction-site.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/Iconstruction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85 z-10" />

        {/* Mute/Unmute Button */}
        <button
          onClick={() => {
            setIsMuted(!isMuted);
            if (videoRef.current) {
              videoRef.current.muted = !isMuted;
            }
          }}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 p-3 sm:p-4 bg-white/25 hover:bg-white/40 backdrop-blur-md rounded-full transition-all duration-300 group border-2 border-white/40 hover:border-white/60 shadow-lg hover:shadow-xl"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-125 transition-transform duration-200" />
          ) : (
            <Volume2 className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-125 transition-transform duration-200" />
          )}
        </button>

        <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Trust Badges - Construction Focused with Enhanced Styling */}
          <div ref={heroBadgesRef} className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-4 sm:mb-6 flex-wrap">
            <div className="hero-badge flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 cursor-default">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">Licensed & Certified</span>
            </div>
            <div className="hero-badge flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 cursor-default">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">500+ Projects Completed</span>
            </div>
            <div className="hero-badge flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 cursor-default">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">On-Time Delivery</span>
            </div>
          </div>

          <p className="hero-category text-[10px] sm:text-xs md:text-sm font-medium tracking-wide sm:tracking-wider uppercase mb-4 sm:mb-6 text-white font-bold" style={{ textShadow: '2px 3px 8px rgba(0,0,0,1), 0px 0px 20px rgba(0,0,0,0.8)' }}>
            RESIDENTIAL • COMMERCIAL • CONSTRUCTION SERVICES
          </p>

          {/* Decorative Accent Line */}
          <div className="w-16 h-0.5 mx-auto mb-6 bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />

          <h1 ref={heroHeadingRef} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 sm:mb-6 leading-tight px-2" style={{ textShadow: '4px 8px 20px rgba(0,0,0,1), 0px 0px 30px rgba(0,0,0,0.9)' }}>
            We Build Your
            <br />
            <span className="italic">Dream Home</span>
          </h1>
          <p ref={heroSubtextRef} className="text-sm sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto font-semibold leading-relaxed px-2" style={{ textShadow: '3px 5px 15px rgba(0,0,0,1), 0px 0px 25px rgba(0,0,0,0.8)' }}>
            End-to-end residential and commercial construction services with structural precision, transparent pricing, and on-time project delivery.
          </p>

          {/* Construction-Focused CTAs */}
          <div ref={heroCTARef} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/contact"
              className={buttonPrimary}
            >
              Get Free Construction Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
            <Link
              to="/projects"
              className={buttonSecondary}
            >
              View Our Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Construction Impact Stats Card - Glassmorphism */}
        <div ref={heroStatsRef} className="absolute bottom-20 right-8 md:right-20 z-20 bg-white/85 backdrop-blur-xl p-6 shadow-2xl shadow-white/10 rounded-lg hidden md:block max-w-xs border border-white/30 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300">
          <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Our Construction Impact</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-xs text-gray-600 uppercase tracking-wider">Projects Completed</span>
              <span className="stat-number text-2xl font-bold text-black" data-value="500" data-suffix="+">0+</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-xs text-gray-600 uppercase tracking-wider">Years Experience</span>
              <span className="stat-number text-2xl font-bold text-black" data-value="10" data-suffix="+">0+</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-xs text-gray-600 uppercase tracking-wider">Sq.Ft Constructed</span>
              <span className="stat-number text-2xl font-bold text-black" data-value="25" data-suffix="L+">0L+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 uppercase tracking-wider">Client Satisfaction</span>
              <span className="stat-number text-2xl font-bold text-black" data-value="98" data-suffix="%">0%</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in">
          <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">Scroll to explore</span>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </section>

      {/* 2. Stats Bar - Quick Trust Signals */}
      <section ref={statsBarRef} className="py-6 sm:py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-item text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-1">{stat.value}</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Intro / About Section - Enhanced */}
      <section ref={introSectionRef} className="py-12 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
            {/* Left Content */}
            <div className="intro-content">
              <span className="text-gray-600 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4 block">About iConstructions</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-black mb-6 sm:mb-8 leading-tight sm:leading-none">
                Building <span className="italic text-gray-600">Trust</span> Through <br className="hidden sm:block" />
                Quality & Transparency
              </h2>
              <p className="intro-content text-gray-600 mb-6 leading-relaxed text-base sm:text-lg font-light">
                Since 2008, we've been transforming the real estate landscape in Anantapur and beyond. Our commitment to quality construction, transparent pricing, and timely delivery has made us the preferred choice for over 500 families.
              </p>

              <div className="mb-10">
                 <h3 className="font-serif text-xl mb-6 text-black">Why Choose Us</h3>
                 <ul className="space-y-4">
                   {[
                     { title: 'RERA Certified Projects', desc: 'All projects registered with RERA & DTCP approved' },
                     { title: 'Vastu-Compliant Designs', desc: 'Traditional Vastu principles with modern architecture' },
                     { title: 'On-Time Delivery', desc: '98% projects delivered on schedule' },
                     { title: 'Bank Loan Assistance', desc: 'Tie-ups with SBI, HDFC, ICICI, Axis Bank' }
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 group">
                       <div className="mt-1 p-2 bg-gray-100 rounded-full group-hover:bg-black transition-colors">
                         <CheckCircle className="w-4 h-4 text-black group-hover:text-white" />
                       </div>
                       <div>
                         <p className="font-bold text-black mb-1">{item.title}</p>
                         <p className="text-sm text-gray-500">{item.desc}</p>
                       </div>
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="https://wa.me/919347244397?text=Hi%2C%20I'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%20your%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonWhatsApp}
                >
                  <MessageCircle className="w-4 h-4" />
                  Schedule a Meeting
                </a>
              </div>
            </div>

            {/* Right Images - Enhanced */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/image6.jpg" className="mt-12 rounded-lg w-full h-64 object-cover shadow-lg hover:shadow-2xl transition-shadow" alt="Modern Vastu compliant interior design for 3BHK apartments in Anantapur" loading="lazy" />
                <img src="/images/image7.jpg" className="rounded-lg w-full h-80 object-cover shadow-lg hover:shadow-2xl transition-shadow" alt="Luxury villa exterior architecture in Anantapur by iConstructions" loading="lazy" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
                 <div className="border-2 border-black rounded-full p-8 w-32 h-32 flex items-center justify-center text-center bg-gray-50">
                    <div>
                      <p className="font-serif text-black text-2xl font-bold">15+</p>
                      <p className="text-[10px] text-black uppercase tracking-widest mt-1">Years</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section - Enhanced with CTAs */}
      <section ref={servicesSectionRef} className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-black mt-3 px-4">
              <span className="italic font-serif text-gray-600">Comprehensive</span> Real Estate <br className="hidden sm:block" />
              Solutions for Every Need
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-4">
              From finding your dream home to investment consulting, we provide end-to-end services with complete transparency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = ServiceIconMap[service.iconName] || HomeIcon;
              return (
                <Link
                  key={idx}
                  to="/services"
                  className="service-card bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer border border-transparent hover:border-black block"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-black mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-black">Learn More</span>
                    <ArrowRight className="w-3 h-3 text-black transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/services" className={buttonPrimary}>
              View All Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Explore Categories */}
      <section ref={categoriesSectionRef} className="py-12 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
            <div>
               <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Categories</span>
               <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2">
                 <span className="italic text-gray-600">Explore</span> Our full range <br className="hidden sm:block" />
                 of property opportunities
               </h2>
            </div>
            <div className="flex gap-2 hidden sm:flex">
               <button
                 onClick={() => setCategoryIndex(prev => prev > 0 ? prev - 1 : 5)}
                 className={buttonIcon}
                 aria-label="Previous category"
               >
                 <ChevronRight className="rotate-180 w-5 h-5" />
               </button>
               <button
                 onClick={() => setCategoryIndex(prev => prev < 5 ? prev + 1 : 0)}
                 className={buttonIcon}
                 aria-label="Next category"
               >
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Commercial Spaces", img: "/images/commercial.jpg", link: "/projects?type=Commercial" },
              { title: "Residential Apartments", img: "/images/residential-apartments.jpg", link: "/projects?type=Residential" },
              { title: "Luxury Villas", img: "/images/Luxury-villas.jpg", link: "/projects?type=Villa" },
              { title: "Gated Communities", img: "/images/Gated-community.jpg", link: "/projects" },
              { title: "Premium Plots", img: "/images/premium-plots.jpg", link: "/projects" },
              { title: "Investment Properties", img: "/images/invest-in-property.jpg", link: "/projects" }
            ].slice(categoryIndex, categoryIndex + 3).map((cat, i) => (
              <Link
                key={i}
                to={cat.link}
                className="group relative h-[280px] sm:h-[400px] overflow-hidden rounded-sm cursor-pointer"
              >
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center">
                   <h3 className="text-white font-serif text-base sm:text-xl">{cat.title}</h3>
                   <div className="bg-white/20 backdrop-blur p-2 rounded-full group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                     <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                   </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-12">
            <Link to="/projects" className={buttonPrimary}>
              Browse All Categories <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Featured Properties - Enhanced with Filters */}
      <section ref={projectsSectionRef} className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Featured Properties</span>
            <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 mb-4 px-4">
              <span className="italic text-gray-600">Handpicked</span> Properties <br className="hidden sm:block" />
              For Your Dream Lifestyle
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Explore our carefully curated selection of premium properties across Anantapur, Hyderabad, and Amaravati.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            {['All Properties', 'Residential', 'Commercial', 'Villa', 'Completed', 'Ongoing'].map((filter) => (
              <button
                key={filter}
                onClick={() => setPropertyFilter(filter)}
                className={propertyFilter === filter ? buttonFilterPillActive : buttonFilterPillInactive}
              >
                {filter}
              </button>
            ))}
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
              {featuredProjects.map(project => (
                <div key={project.id} className="project-card-wrapper">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <p className="text-lg sm:text-xl text-gray-500">No properties found for this filter.</p>
              <button
                onClick={() => setPropertyFilter('All Properties')}
                className={`${buttonPrimary} mt-4`}
              >
                View All Properties
              </button>
            </div>
          )}

          <div className="flex justify-center">
            <Link
              to="/projects"
              className={buttonPrimary}
            >
              View All Properties
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>



      {/* 6.5 Properties by Location - NEW SEO SECTION */}
      <section ref={locationsSectionRef} className="py-12 sm:py-24 bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-white text-xs tracking-wider sm:tracking-widest uppercase font-bold">Explore by Location</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 px-4">
              Find Properties in <span className="italic text-gray-300">Your City</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
              Discover RERA approved residential, commercial, and luxury properties across Andhra Pradesh and Telangana
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { city: 'Anantapur', url: '/properties-in-anantapur', projects: '12+ Projects', image: '/images/image5.jpg' },
              { city: 'Hyderabad', url: '/properties-in-hyderabad', projects: '8+ Projects', image: '/images/image3.jpg' },
              { city: 'Kurnool', url: '/properties-in-kurnool', projects: 'Coming Soon', image: '/images/image4.jpg' },
              { city: 'Kadapa', url: '/properties-in-kadapa', projects: 'Coming Soon', image: '/images/image7.jpg' }
            ].map((location, index) => (
              <Link
                key={index}
                to={location.url}
                className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={location.image}
                    alt={`Properties in ${location.city}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-1 sm:mb-2 group-hover:text-white transition-colors">
                    {location.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">{location.projects}</p>
                  <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-bold">
                    View Properties
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 px-4">Browse by Property Type</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
              <Link
                to="/villas-in-anantapur"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-lg text-white hover:text-black font-medium transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <HomeIcon className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Luxury Villas</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all flex-shrink-0" />
              </Link>
              <Link
                to="/flats-in-anantapur"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-lg text-white hover:text-black font-medium transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">2BHK & 3BHK Flats</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all flex-shrink-0" />
              </Link>
              <Link
                to="/commercial-property-anantapur"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-lg text-white hover:text-black font-medium transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Commercial Spaces</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Floor Plans / Infrastructure */}
      <section ref={floorPlansSectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-xs tracking-widest uppercase">Floor Plans</span>
            <h2 className="text-4xl font-serif text-black mt-2">
              <span className="italic text-gray-600">Modern</span> Infrastructure & <br />
              thoughtful living spaces
            </h2>
          </div>

          <div className="flex justify-center gap-3 sm:gap-6 mb-12 flex-wrap px-4">
            {Object.keys(floorPlans).map((plan) => (
              <button
                key={plan}
                onClick={() => setActiveFloorPlan(plan)}
                className={activeFloorPlan === plan ? buttonFilterPillActive : buttonFilterPillInactive}
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
               <h3 className="text-2xl font-serif text-black mb-2">{activeFloorPlan} Suite</h3>
               <p className="text-gray-700 text-sm mb-4">A spacious and well-balanced layout offering comfort, natural light, and efficient room planning—ideal for families.</p>
               <div className="grid grid-cols-2 gap-4 text-xs font-bold text-gray-600 uppercase">
                 <span>• 12x12 Sq Ft Rooms</span>
                 <span>• 2 Built-in Shelves</span>
                 <span>• 4 Large Windows</span>
                 <span>• Modern Kitchen</span>
               </div>
               <div className="mt-6 flex items-center gap-2 text-black font-bold text-xs uppercase tracking-widest group cursor-pointer">
                 <span>View 3D Video</span>
                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials - Enhanced with Verification */}
      <section ref={testimonialsSectionRef} className="py-12 sm:py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10 sm:mb-16">
             <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Client Reviews</span>
             <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 px-4">
               <span className="italic text-gray-600">Real Stories</span> From <br className="hidden sm:block"/> Our Happy Clients
             </h2>
             <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto px-4">
               Don't just take our word for it. Here's what our clients have to say about their experience with iConstructions.
             </p>
           </div>

           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="testimonial-card bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-100">
                 <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-black/10 absolute top-4 sm:top-6 right-4 sm:right-6" />

                 {/* Rating */}
                 <div className="flex text-black mb-3 sm:mb-4">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />)}
                 </div>

                 <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">"{t.content}"</p>

                 <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 gap-2">
                   <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                     <img src={t.image} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-300 flex-shrink-0" />
                     <div className="min-w-0">
                       <h4 className="font-bold text-black text-xs sm:text-sm truncate">{t.name}</h4>
                       <p className="text-[10px] sm:text-xs text-gray-600 truncate">{t.role}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-1 bg-black px-1.5 sm:px-2 py-1 rounded-full flex-shrink-0">
                     <CheckCircle className="w-3 h-3 text-white" />
                     <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase whitespace-nowrap">Verified</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>

           {/* Trust Indicators */}
           <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">4.9/5</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Average Rating</p>
             </div>
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">500+</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Happy Clients</p>
             </div>
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">98%</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Satisfaction Rate</p>
             </div>
             <div>
               <p className="text-2xl sm:text-3xl font-serif text-black mb-1 sm:mb-2">100%</p>
               <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wider">Verified Reviews</p>
             </div>
           </div>
         </div>
      </section>

      {/* 9. FAQs & Awards Split Section */}
      <section ref={faqsSectionRef} className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-10 sm:gap-20">

             {/* FAQs */}
             <div>
               <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">FAQs</span>
               <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 mb-6 sm:mb-10">
                 <span className="italic text-gray-600">Have</span> Questions <br/> in your mind?
               </h2>

               <div className="space-y-3 sm:space-y-4">
                 {FAQS.map((faq, index) => (
                   <div key={index} className="faq-item border-b border-gray-100 pb-3 sm:pb-4">
                     <button
                       className="w-full flex justify-between items-start gap-3 py-2 text-left"
                       onClick={() => toggleAccordion(index)}
                     >
                       <span className="font-serif text-sm sm:text-lg text-black flex-1">{faq.question}</span>
                       {activeAccordion === index ? <Minus className="w-4 h-4 text-black flex-shrink-0 mt-1" /> : <Plus className="w-4 h-4 text-gray-600 flex-shrink-0 mt-1" />}
                     </button>
                     <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40 mt-3 sm:mt-4' : 'max-h-0'}`}>
                       <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Image/Visual for FAQ */}
             <div className="relative h-full min-h-[250px] sm:min-h-[400px] order-first lg:order-last">
                <img src="/images/image9.jpg" alt="RERA approved residential property architecture in Anantapur - FAQ section" className="w-full h-full object-cover rounded-sm" loading="lazy" />
             </div>
           </div>
        </div>
      </section>

      {/* 11. Team Section */}
      <section ref={teamSectionRef} className="py-12 sm:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10 sm:mb-16">
             <span className="text-gray-600 text-xs tracking-wider sm:tracking-widest uppercase">Our Team</span>
             <h2 className="text-2xl sm:text-4xl font-serif text-black mt-2 px-4">
               <span className="italic text-gray-600">The People</span> Who make our <br className="hidden sm:block"/> real estate work
             </h2>
           </div>

           <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="team-card group text-center">
                  <div className="relative overflow-hidden mb-4 sm:mb-6 rounded-full w-48 h-48 sm:w-64 sm:h-64 mx-auto border-4 border-gray-200 shadow-xl">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-black">{member.name}</h3>
                  <p className="text-gray-600 text-xs uppercase tracking-widest font-bold mt-1">{member.role}</p>

                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className={`${buttonOutline} mt-3 sm:mt-4 inline-flex`}
                    >
                      <Phone className="w-3 h-3" />
                      {member.phone}
                    </a>
                  )}
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* 13. Pre-Footer Contact - Enhanced */}
      <section ref={contactSectionRef} className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-black via-black to-gray-900 relative overflow-hidden">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('/images/image10.jpg')` }} />

         {/* Decorative Elements */}
         <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl" />

         <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
           <div className="text-center mb-8 sm:mb-12">
             <span className="text-white text-xs tracking-wider sm:tracking-widest uppercase">Get Started</span>
             <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mt-3 mb-4 px-4">
               <span className="italic text-gray-300">Ready</span> To Find Your <br className="hidden sm:block"/> Dream Property?
             </h2>
             <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
               Schedule a free consultation with our real estate experts. We'll help you find the perfect property that matches your needs and budget.
             </p>
           </div>

           <div className="bg-white p-6 sm:p-8 md:p-12 shadow-2xl rounded-xl">
             <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
               {/* Contact Info */}
               <div>
                 <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 sm:mb-6">Contact Information</h3>

                 <div className="space-y-4 sm:space-y-6">
                   <div className="flex items-start gap-3 sm:gap-4">
                     <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                       <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                     </div>
                     <div className="min-w-0">
                       <p className="font-bold text-black mb-1 text-sm sm:text-base">Office Address</p>
                       <p className="text-gray-600 text-xs sm:text-sm">Shop no. 2nd floor, Sampada Women's Complex, Bellary - Uravakonda Rd, Ganesha Nagar, Ananthapur, Andhra Pradesh 515004</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-3 sm:gap-4">
                     <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                       <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-black font-bold">@</div>
                     </div>
                     <div className="min-w-0">
                       <p className="font-bold text-black mb-1 text-sm sm:text-base">Email Us</p>
                       <a
                         href="mailto:hello@iconstructions.in"
                         className="text-gray-600 text-xs sm:text-sm hover:text-black transition-colors block truncate"
                       >
                         hello@iconstructions.in
                       </a>
                       <a
                         href="mailto:sales@iconstructions.com"
                         className="text-gray-600 text-xs sm:text-sm hover:text-black transition-colors block truncate"
                       >
                         sales@iconstructions.com
                       </a>
                     </div>
                   </div>

                   <div className="flex items-start gap-3 sm:gap-4">
                     <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                       <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                     </div>
                     <div className="min-w-0">
                       <p className="font-bold text-black mb-1 text-sm sm:text-base">Office Hours</p>
                       <p className="text-gray-600 text-xs sm:text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                       <p className="text-gray-600 text-xs sm:text-sm">Sunday: By Appointment</p>
                     </div>
                   </div>
                 </div>

                 {/* Trust Badges */}
                 <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                   <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Certified & Trusted</p>
                   <div className="flex flex-wrap gap-2 sm:gap-4">
                     <div className="flex items-center gap-1.5 sm:gap-2 bg-black px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                       <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                       <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">RERA Certified</span>
                     </div>
                     <div className="flex items-center gap-1.5 sm:gap-2 bg-black px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                       <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                       <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">ISO 9001:2015</span>
                     </div>
                   </div>
                 </div>
               </div>

               {/* WhatsApp Contact */}
               <div>
                 <h3 className="text-xl sm:text-2xl font-serif text-black mb-3 sm:mb-4">Get Instant Response</h3>
                 <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                   Chat with us on WhatsApp for immediate assistance!
                 </p>

                 <div className="space-y-3">
                   {/* Primary WhatsApp Button */}
                   <a
                     href="https://wa.me/919347244397?text=Hi%2C%20I'm%20interested%20in%20your%20properties.%20Can%20you%20help%20me%3F"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonWhatsApp}
                   >
                     <MessageCircle className="w-5 h-5" />
                     Chat on WhatsApp
                   </a>

                   {/* Quick Action Buttons */}
                   <a
                     href="https://wa.me/919347244397?text=Hi%2C%20I'd%20like%20to%20schedule%20a%20site%20visit.%20When%20are%20you%20available%3F"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonOutline}
                   >
                     📅 Schedule Site Visit
                   </a>

                   <a
                     href="https://wa.me/919347244397?text=Hi%2C%20I'd%20like%20to%20get%20the%20price%20list%20and%20floor%20plans."
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonOutline}
                   >
                     📥 Get Price List & Floor Plans
                   </a>

                   <a
                     href="tel:+919347244397"
                     className={buttonOutline}
                   >
                     📞 Call Now
                   </a>
                 </div>

                 <p className="text-xs text-gray-500 text-center mt-4">
                   ⚡ Average response time: Under 5 minutes
                 </p>
               </div>
             </div>
           </div>
         </div>
      </section>
    </Layout>
  );
};