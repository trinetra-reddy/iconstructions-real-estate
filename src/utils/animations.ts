import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if mobile device
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Get animation config based on user preferences and device
export const getAnimationConfig = () => {
  if (shouldReduceMotion()) {
    return {
      duration: 0,
      ease: 'none',
      stagger: 0
    };
  }
  
  if (isMobile()) {
    return {
      duration: 0.5, // 30% faster on mobile
      ease: 'power2.out',
      stagger: 0.1
    };
  }
  
  return {
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15
  };
};

// Fade in up animation
export const fadeInUp = (element: HTMLElement | string, delay = 0) => {
  const config = getAnimationConfig();
  gsap.from(element, {
    y: config.duration === 0 ? 0 : 30,
    opacity: 0,
    duration: config.duration,
    delay,
    ease: config.ease
  });
};

// Stagger fade in up for multiple elements
export const staggerFadeInUp = (elements: string, containerDelay = 0) => {
  const config = getAnimationConfig();
  gsap.from(elements, {
    y: config.duration === 0 ? 0 : 50,
    opacity: 0,
    duration: config.duration,
    stagger: config.stagger,
    delay: containerDelay,
    ease: config.ease
  });
};

// Counter animation for stats
export const animateCounter = (
  element: HTMLElement,
  endValue: number,
  suffix = '+',
  duration = 2
) => {
  const config = getAnimationConfig();

  if (config.duration === 0) {
    element.textContent = endValue + suffix;
    return;
  }

  // Set initial value to 0
  element.textContent = '0' + suffix;

  // Animate to the end value
  gsap.to(element, {
    textContent: endValue,
    duration: duration,
    ease: 'power2.out',
    snap: { textContent: 1 },
    onUpdate: function() {
      const current = Math.ceil(parseFloat(this.targets()[0].textContent));
      this.targets()[0].textContent = current + suffix;
    }
  });
};

// Scroll-triggered animation
export const scrollTriggerAnimation = (
  trigger: string | HTMLElement,
  elements: string,
  options = {}
) => {
  const config = getAnimationConfig();

  // If reduced motion or no duration, don't animate
  if (config.duration === 0) {
    return;
  }

  // Use fromTo for better control
  gsap.fromTo(elements,
    {
      y: 50,
      opacity: 0,
      visibility: 'visible' // Ensure elements are visible
    },
    {
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        once: true, // Only play once to avoid re-hiding
        ...options
      },
      y: 0,
      opacity: 1,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease
    }
  );
};

// Parallax effect (desktop only)
export const parallaxEffect = (element: string, yDistance = -50) => {
  if (isMobile() || shouldReduceMotion()) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    },
    y: yDistance,
    ease: 'none'
  });
};

// Scale in animation
export const scaleIn = (element: HTMLElement | string, delay = 0) => {
  const config = getAnimationConfig();
  gsap.from(element, {
    scale: config.duration === 0 ? 1 : 0.8,
    opacity: 0,
    duration: config.duration === 0 ? 0 : 0.6,
    delay,
    ease: 'back.out(1.7)'
  });
};

// Rotate and fade in (for cards)
export const rotateFadeIn = (elements: string, staggerDelay = 0.12) => {
  const config = getAnimationConfig();
  gsap.from(elements, {
    rotation: config.duration === 0 ? 0 : 5,
    y: config.duration === 0 ? 0 : 50,
    opacity: 0,
    duration: config.duration,
    stagger: staggerDelay,
    ease: config.ease
  });
};

// Cleanup function to kill all ScrollTriggers
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

