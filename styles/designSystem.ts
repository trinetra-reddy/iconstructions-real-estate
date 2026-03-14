/**
 * iConstructions Real Estate - Design System
 * 
 * A comprehensive design system ensuring visual consistency across the entire website.
 * All buttons, interactive elements, and UI components follow these standardized patterns.
 * 
 * Design Principles:
 * - Premium & Professional: Sophisticated black & white palette
 * - Consistent: Predictable patterns across all sections
 * - Accessible: WCAG AA+ compliant, touch-friendly on mobile
 * - Responsive: Adapts elegantly from mobile to desktop
 */

// ============================================================================
// DESIGN TOKENS
// ============================================================================

export const designTokens = {
  // Spacing
  spacing: {
    buttonPaddingMobile: 'px-6 py-3',
    buttonPaddingDesktop: 'sm:px-8 sm:py-4',
    buttonPaddingLarge: 'px-10 py-4',
    iconButtonPadding: 'p-3',
  },
  
  // Typography
  typography: {
    buttonText: 'text-sm font-bold uppercase tracking-wide',
    buttonTextSmall: 'text-xs font-bold uppercase tracking-widest',
  },
  
  // Border Radius
  radius: {
    button: 'rounded-full',
    card: 'rounded-lg',
    icon: 'rounded-lg',
  },
  
  // Transitions
  transitions: {
    standard: 'transition-all duration-300',
    fast: 'transition-all duration-200',
  },
  
  // Shadows
  shadows: {
    button: 'shadow-lg',
    buttonHover: 'hover:shadow-xl',
  },
};

// ============================================================================
// BUTTON VARIANTS
// ============================================================================

/**
 * PRIMARY BUTTON
 * Use for: Main CTAs, most important actions
 * Examples: "View All Properties", "Contact Us", "Search"
 */
export const buttonPrimary = `
  ${designTokens.spacing.buttonPaddingMobile}
  ${designTokens.spacing.buttonPaddingDesktop}
  ${designTokens.typography.buttonText}
  ${designTokens.radius.button}
  ${designTokens.transitions.standard}
  ${designTokens.shadows.button}
  bg-black text-white border border-white/20
  hover:bg-gray-900 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/50
  group inline-flex items-center justify-center gap-2
  w-full sm:w-auto
`.trim().replace(/\s+/g, ' ');

/**
 * SECONDARY BUTTON (White/Light)
 * Use for: Alternative primary actions
 * Examples: "View All Properties" (on dark backgrounds)
 */
export const buttonSecondary = `
  ${designTokens.spacing.buttonPaddingMobile}
  ${designTokens.spacing.buttonPaddingDesktop}
  ${designTokens.typography.buttonText}
  ${designTokens.radius.button}
  ${designTokens.transitions.standard}
  ${designTokens.shadows.button}
  bg-white text-black border border-white/30
  hover:bg-gray-100 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-white/30
  group inline-flex items-center justify-center gap-2
  w-full sm:w-auto
`.trim().replace(/\s+/g, ' ');

/**
 * WHATSAPP BUTTON
 * Use for: WhatsApp CTAs (maintains green branding)
 * Examples: "Schedule Visit", "Chat on WhatsApp"
 */
export const buttonWhatsApp = `
  ${designTokens.spacing.buttonPaddingMobile}
  ${designTokens.spacing.buttonPaddingDesktop}
  ${designTokens.typography.buttonText}
  ${designTokens.radius.button}
  ${designTokens.transitions.standard}
  ${designTokens.shadows.button}
  bg-green-500 text-white border-2 border-green-400
  hover:bg-green-600
  flex items-center justify-center gap-2
  w-full sm:w-auto
`.trim().replace(/\s+/g, ' ');

/**
 * OUTLINE BUTTON
 * Use for: Secondary actions, less prominent CTAs
 * Examples: "Learn More", "View Details", Quick action buttons
 */
export const buttonOutline = `
  ${designTokens.spacing.buttonPaddingMobile}
  px-6 py-3
  ${designTokens.typography.buttonText}
  ${designTokens.radius.button}
  ${designTokens.transitions.standard}
  bg-white text-black border-2 border-gray-300
  hover:bg-black hover:text-white hover:border-black
  flex items-center justify-center gap-2
  w-full sm:w-auto
`.trim().replace(/\s+/g, ' ');

/**
 * FILTER PILL BUTTON
 * Use for: Filter/category selection
 * Examples: Property filters, category tabs
 *
 * Active: Solid black background with white text (clearly selected)
 * Inactive: Transparent background with black border and text (outline style)
 */
export const buttonFilterPill = `
  px-4 sm:px-6 py-2 sm:py-3
  ${designTokens.typography.buttonTextSmall}
  ${designTokens.radius.button}
  ${designTokens.transitions.standard}
  border-2
  flex items-center justify-center gap-2
`.trim().replace(/\s+/g, ' ');

export const buttonFilterPillActive = `${buttonFilterPill} bg-black text-white border-black shadow-lg hover:shadow-xl hover:scale-105`;
export const buttonFilterPillInactive = `${buttonFilterPill} bg-transparent text-black border-black hover:bg-black/5 hover:scale-105`;

/**
 * ICON BUTTON (Navigation arrows, etc.)
 * Use for: Icon-only buttons
 * Examples: Carousel navigation, close buttons
 */
export const buttonIcon = `
  ${designTokens.spacing.iconButtonPadding}
  ${designTokens.radius.icon}
  ${designTokens.transitions.standard}
  border-2 border-gray-300
  hover:bg-black hover:text-white hover:border-black
  flex items-center justify-center
`.trim().replace(/\s+/g, ' ');

