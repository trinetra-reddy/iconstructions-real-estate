import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  foundationToRoof,
  hammerSnap,
  brickByBrickReveal,
  craneLift,
  tileLaying,
  cementPour
} from '../utils/constructionAnimations';

gsap.registerPlugin(ScrollTrigger);

/**
 * 🎬 PREMIUM HERO ANIMATIONS - HOME PAGE QUALITY
 * Split text, staggered badges, elastic animations
 */
export const usePremiumHeroAnimations = () => {
  const heroRef = useRef<HTMLElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('🎬 Initializing PREMIUM hero animations...');

    const masterTL = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => console.log('🎬 Premium hero animations complete!')
    });

    // 1. Category badge - Slide in with glow
    if (categoryRef.current) {
      masterTL.fromTo(categoryRef.current,
        {
          opacity: 0,
          y: -30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(2)'
        },
        0
      );
    }

    // 2. Heading - Split text word-by-word reveal
    if (headingRef.current) {
      const heading = headingRef.current;

      // Split into words
      const text = heading.textContent || '';
      const words = text.split(' ');
      heading.innerHTML = '';

      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        span.style.whiteSpace = 'nowrap';
        span.textContent = word;
        heading.appendChild(span);

        if (i < words.length - 1) {
          heading.appendChild(document.createTextNode(' '));
        }
      });

      const wordElements = heading.querySelectorAll('span');

      masterTL.fromTo(wordElements,
        {
          opacity: 0,
          y: 100,
          rotationX: -90,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power4.out'
        },
        0.3
      );
    }

    // 3. Subtext - Blur fade with slide
    if (subtextRef.current) {
      masterTL.fromTo(subtextRef.current,
        {
          opacity: 0,
          y: 40,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out'
        },
        0.8
      );
    }

    // 4. Badges - 3D flip with elastic bounce
    if (badgesRef.current) {
      const badges = badgesRef.current.querySelectorAll('.hero-badge, .trust-badge');

      if (badges.length > 0) {
        gsap.set(badges, {
          transformPerspective: 1000,
          transformStyle: 'preserve-3d'
        });

        masterTL.fromTo(badges,
          {
            scale: 0,
            opacity: 0,
            rotationY: -180,
            z: -100
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            z: 0,
            duration: 1,
            stagger: {
              each: 0.12,
              from: 'center',
              ease: 'power2.out'
            },
            ease: 'back.out(2)'
          },
          1.2
        );

        // Add continuous float
        badges.forEach((badge, i) => {
          gsap.to(badge, {
            y: -8,
            duration: 2 + (i * 0.3),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 2 + (i * 0.2)
          });
        });
      }
    }

    // 5. CTA buttons - Elastic bounce
    if (ctaRef.current) {
      const buttons = ctaRef.current.querySelectorAll('a, button');

      if (buttons.length > 0) {
        masterTL.fromTo(buttons,
          {
            scale: 0,
            opacity: 0,
            y: 50
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'elastic.out(1, 0.6)'
          },
          1.5
        );
      }
    }

    return () => {
      masterTL.kill();
    };
  }, []);

  return { heroRef, categoryRef, headingRef, subtextRef, badgesRef, ctaRef };
};

/**
 * 🏗️ REUSABLE PAGE ANIMATIONS HOOK
 * Apply construction-themed animations to any page
 */
export const usePageAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('🏗️ Initializing page animations...');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Hero section - Foundation build
    if (heroRef.current) {
      tl.add(
        foundationToRoof(heroRef.current, {
          duration: 0.9,
          delay: 0
        }),
        0
      );
    }

    // Content section - Cement pour
    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll('section, .content-section');

      sections.forEach((section) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        }).add(
          cementPour(section, {
            duration: 0.8,
            delay: 0
          })
        );
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { heroRef, contentRef };
};

/**
 * 🏗️ ANIMATE CARDS ON SCROLL
 * Brick-by-brick reveal for card grids
 */
export const useCardAnimations = (selector: string = '.card, .project-card-wrapper') => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(selector);
      
      if (cards.length > 0) {
        console.log(`🧱 Building ${cards.length} cards brick-by-brick...`);
        
        gsap.timeline({
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        }).add(
          brickByBrickReveal(cards, {
            duration: 0.7,
            stagger: 0.12,
            delay: 0
          })
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);

  return gridRef;
};

/**
 * 🏗️ ANIMATE LIST ITEMS
 * Hammer snap for lists, FAQs, features
 */
export const useListAnimations = (selector: string = '.list-item') => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const items = listRef.current.querySelectorAll(selector);
      
      if (items.length > 0) {
        console.log(`🔨 Hammering ${items.length} items into place...`);
        
        gsap.timeline({
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        }).add(
          hammerSnap(items, {
            duration: 0.6,
            stagger: 0.08,
            delay: 0
          })
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);

  return listRef;
};

/**
 * 🏗️ ANIMATE STATS/BADGES
 * Crane lift for stats, badges, highlights
 */
export const useStatsAnimations = (selector: string = '.stat-item, .badge') => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statsRef.current) {
      const items = statsRef.current.querySelectorAll(selector);
      
      if (items.length > 0) {
        console.log(`🏗️ Lifting ${items.length} stats with crane...`);
        
        gsap.timeline({
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          }
        }).add(
          craneLift(items, {
            duration: 0.9,
            stagger: 0.12,
            delay: 0
          })
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);

  return statsRef;
};

