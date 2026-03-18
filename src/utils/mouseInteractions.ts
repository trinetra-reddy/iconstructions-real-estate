import { gsap } from 'gsap';

// Check if device supports hover (not touch device)
export const isHoverDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
};

// Mouse position tracker
export class MouseTracker {
  private static instance: MouseTracker;
  public x: number = 0;
  public y: number = 0;
  public targetX: number = 0;
  public targetY: number = 0;
  private listeners: Array<(x: number, y: number) => void> = [];

  private constructor() {
    if (typeof window !== 'undefined' && isHoverDevice()) {
      this.init();
    }
  }

  static getInstance(): MouseTracker {
    if (!MouseTracker.instance) {
      MouseTracker.instance = new MouseTracker();
    }
    return MouseTracker.instance;
  }

  private init() {
    console.log('MouseTracker: Initializing...');

    // Set initial position to center
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.targetX = this.x;
    this.targetY = this.y;

    window.addEventListener('mousemove', this.handleMouseMove);
    this.startRAF();

    console.log('MouseTracker: Initialized at', this.x, this.y);
  }

  private handleMouseMove = (e: MouseEvent) => {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
  };

  private startRAF = () => {
    const update = () => {
      // Smooth interpolation
      this.x += (this.targetX - this.x) * 0.15;
      this.y += (this.targetY - this.y) * 0.15;

      // Notify listeners
      this.listeners.forEach(listener => listener(this.x, this.y));

      requestAnimationFrame(update);
    };
    update();
  };

  public subscribe(callback: (x: number, y: number) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  public destroy() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    this.listeners = [];
  }
}

// 🧲 ENHANCED Magnetic effect for buttons - STANDOUT VERSION
export const createMagneticEffect = (
  element: HTMLElement,
  strength: number = 0.5,
  radius: number = 150
) => {
  if (!isHoverDevice()) return () => {};

  const tracker = MouseTracker.getInstance();
  let isHovering = false;
  let animationFrame: number;

  const handleMouseEnter = () => {
    isHovering = true;

    // Enhanced hover effect with rotation
    gsap.to(element, {
      scale: 1.1,
      rotationZ: 2,
      duration: 0.5,
      ease: 'back.out(2)',
      overwrite: 'auto'
    });

    // Add glow effect
    gsap.to(element, {
      boxShadow: '0 10px 40px rgba(251, 191, 36, 0.4)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    isHovering = false;

    // Elastic return with rotation
    gsap.to(element, {
      x: 0,
      y: 0,
      scale: 1,
      rotationZ: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto'
    });

    // Remove glow
    gsap.to(element, {
      boxShadow: '',
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const updatePosition = () => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = tracker.x - centerX;
    const deltaY = tracker.y - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < radius) {
      // Calculate pull with easing
      const pullStrength = 1 - (distance / radius);
      const pullX = deltaX * strength * pullStrength;
      const pullY = deltaY * strength * pullStrength;

      gsap.to(element, {
        x: pullX,
        y: pullY,
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    } else if (!isHovering) {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }

    animationFrame = requestAnimationFrame(updatePosition);
  };

  const unsubscribe = tracker.subscribe(() => {
    // Position updates handled by RAF
  });

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Start RAF loop
  animationFrame = requestAnimationFrame(updatePosition);

  return () => {
    cancelAnimationFrame(animationFrame);
    unsubscribe();
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
    gsap.killTweensOf(element);
  };
};

// 🎯 ENHANCED Parallax mouse tracking - NOTICEABLE VERSION
export const createParallaxEffect = (
  element: HTMLElement,
  strength: number = 0.05
) => {
  if (!isHoverDevice()) return () => {};

  const tracker = MouseTracker.getInstance();
  let animationFrame: number;

  const updateParallax = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (tracker.x - centerX) * strength;
    const deltaY = (tracker.y - centerY) * strength;

    // Add slight rotation for depth
    const rotateX = (tracker.y - centerY) * strength * 0.5;
    const rotateY = (tracker.x - centerX) * strength * 0.5;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      rotationX: -rotateX,
      rotationY: rotateY,
      duration: 1.2,
      ease: 'power2.out',
      overwrite: 'auto'
    });

    animationFrame = requestAnimationFrame(updateParallax);
  };

  const unsubscribe = tracker.subscribe(() => {
    // Updates handled by RAF
  });

  // Start RAF loop
  animationFrame = requestAnimationFrame(updateParallax);

  return () => {
    cancelAnimationFrame(animationFrame);
    unsubscribe();
    gsap.killTweensOf(element);
  };
};

// 🎪 ENHANCED 3D tilt effect - IMPRESSIVE VERSION
export const create3DTiltEffect = (
  element: HTMLElement,
  maxTilt: number = 20
) => {
  if (!isHoverDevice()) return () => {};

  // Set 3D properties
  gsap.set(element, {
    transformPerspective: 1200,
    transformStyle: 'preserve-3d'
  });

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    // Add depth with z-translation
    const translateZ = 20;

    gsap.to(element, {
      rotationX: rotateX,
      rotationY: rotateY,
      z: translateZ,
      scale: 1.02,
      duration: 0.6,
      ease: 'power2.out',
      transformPerspective: 1200,
      overwrite: 'auto'
    });

    // Add shine effect
    const shineX = ((x / rect.width) * 100);
    const shineY = ((y / rect.height) * 100);

    element.style.background = `
      radial-gradient(
        circle at ${shineX}% ${shineY}%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      ),
      ${getComputedStyle(element).background}
    `;
  };

  const handleMouseEnter = () => {
    gsap.to(element, {
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      rotationX: 0,
      rotationY: 0,
      z: 0,
      scale: 1,
      boxShadow: '',
      duration: 1,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto'
    });

    // Remove shine
    element.style.background = '';
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
    gsap.killTweensOf(element);
  };
};

