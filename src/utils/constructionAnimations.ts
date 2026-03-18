import { gsap } from 'gsap';

/**
 * 🏗️ CONSTRUCTION-THEMED GSAP ANIMATIONS
 * Animations that visually communicate "building" and "construction"
 */

// 🧱 BRICK-BY-BRICK BUILD EFFECT
// Elements appear in a staggered pattern like laying bricks
export const brickByBrickReveal = (
  elements: NodeListOf<Element> | Element[],
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
  } = {}
) => {
  const { duration = 0.8, stagger = 0.12, delay = 0 } = options;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 60,
      scaleY: 0,
      transformOrigin: 'bottom center',
      clipPath: 'inset(100% 0% 0% 0%)'
    },
    {
      opacity: 1,
      y: 0,
      scaleY: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      duration,
      stagger: {
        each: stagger,
        from: 'start',
        ease: 'power2.out'
      },
      ease: 'power3.out',
      delay
    }
  );
};

// 🏗️ FOUNDATION TO ROOF BUILD
// Elements build from bottom to top like constructing a building
export const foundationToRoof = (
  element: Element,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) => {
  const { duration = 1.2, delay = 0 } = options;

  return gsap.fromTo(
    element,
    {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 0
    },
    {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      duration,
      ease: 'power2.inOut',
      delay
    }
  );
};

// 📐 BLUEPRINT LINE DRAWING
// Lines draw in like architectural blueprints
export const blueprintDraw = (
  element: Element,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) => {
  const { duration = 1.5, delay = 0 } = options;

  const tl = gsap.timeline({ delay });

  // Draw border lines
  tl.fromTo(
    element,
    {
      '--border-width': '0%'
    },
    {
      '--border-width': '100%',
      duration,
      ease: 'power1.inOut'
    }
  );

  // Fade in content
  tl.fromTo(
    element,
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    },
    '-=0.5'
  );

  return tl;
};

// 🏗️ SCAFFOLDING GRID REVEAL
// Grid pattern appears first, then content fills in
export const scaffoldingReveal = (
  container: Element,
  items: NodeListOf<Element> | Element[],
  options: {
    duration?: number;
    stagger?: number;
  } = {}
) => {
  const { duration = 0.6, stagger = 0.08 } = options;

  const tl = gsap.timeline();

  // Show grid/scaffolding
  tl.fromTo(
    container,
    {
      opacity: 0,
      scale: 0.9
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    }
  );

  // Fill in items
  tl.fromTo(
    items,
    {
      opacity: 0,
      scale: 0.8,
      y: 30
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration,
      stagger: {
        each: stagger,
        grid: 'auto',
        from: 'start',
        ease: 'power2.out'
      },
      ease: 'back.out(1.5)'
    },
    '-=0.2'
  );

  return tl;
};

// 🔨 HAMMER/SNAP INTO PLACE
// Elements snap into position with impact (like hammering a nail)
export const hammerSnap = (
  elements: NodeListOf<Element> | Element[],
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
  } = {}
) => {
  const { duration = 0.6, stagger = 0.1, delay = 0 } = options;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: -50,
      scale: 1.2,
      rotation: -5
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration,
      stagger: {
        each: stagger,
        ease: 'power2.out'
      },
      ease: 'back.out(3)',
      delay
    }
  );
};

// 🏗️ CRANE LIFT EFFECT
// Elements swing in from above like being lifted by a crane
export const craneLift = (
  elements: NodeListOf<Element> | Element[],
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
  } = {}
) => {
  const { duration = 1.2, stagger = 0.15, delay = 0 } = options;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: -200,
      x: -50,
      rotation: -15,
      transformOrigin: 'top center'
    },
    {
      opacity: 1,
      y: 0,
      x: 0,
      rotation: 0,
      duration,
      stagger: {
        each: stagger,
        ease: 'power2.out'
      },
      ease: 'elastic.out(1, 0.6)',
      delay
    }
  );
};

// 🧱 CEMENT POUR EFFECT
// Smooth fill from bottom to top like pouring concrete
export const cementPour = (
  element: Element,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) => {
  const { duration = 1.5, delay = 0 } = options;

  return gsap.fromTo(
    element,
    {
      clipPath: 'inset(100% 0% 0% 0%)',
      opacity: 0
    },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      duration,
      ease: 'power1.inOut',
      delay
    }
  );
};

// 🏗️ TILE LAYING PATTERN
// Elements appear in a pattern like laying tiles
export const tileLaying = (
  elements: NodeListOf<Element> | Element[],
  options: {
    duration?: number;
    delay?: number;
  } = {}
) => {
  const { duration = 0.7, delay = 0 } = options;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      scale: 0,
      rotation: 45
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration,
      stagger: {
        each: 0.08,
        grid: 'auto',
        from: 'random',
        ease: 'power2.out'
      },
      ease: 'back.out(2)',
      delay
    }
  );
};
