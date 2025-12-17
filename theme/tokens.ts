/**
 * Design Tokens
 * =============
 * This is the single source of truth for all design values in the application.
 * 
 * How it works:
 * - These tokens are used by the Ant Design theme configuration (theme/themeConfig.ts)
 * - They are also displayed on the Demo page for reference
 * - Changing values here updates the entire application consistently
 * 
 * For AI-assisted workflows:
 * - Update token values in this file
 * - The theme config imports from here
 * - All UI components inherit the new values automatically
 * 
 * Guidelines:
 * - Keep tokens simple and opinionated
 * - Avoid over-abstraction
 * - Use semantic names where helpful (e.g., layout.page, layout.section)
 */

// ============================================================================
// COLOUR TOKENS
// ============================================================================

/**
 * Primary Colour Palette — Warm Coral/Terracotta
 * Used for: Primary actions, links, focus states, active elements
 * 
 * Inspired by warm, earthy tones that feel approachable and grounded.
 */
export const primary = {
  50: '#fef7f4',
  100: '#fdeee8',
  200: '#facfc0',
  300: '#f5ab8f',
  400: '#eb8a64',
  500: '#E07B54', // Base primary — warm coral
  600: '#c9694a',
  700: '#a85640',
  800: '#874436',
  900: '#5c2e26',
} as const

/**
 * Secondary Colour Palette — Horizon Red
 * Used for: Gradients, accents, highlights
 * 
 * Rich red that creates a beautiful sunset gradient with the primary coral.
 */
export const secondary = {
  50: '#fff5f5',
  100: '#ffe3e3',
  200: '#ffc9c9',
  300: '#ffa8a8',
  400: '#fa6b6b',
  500: '#F03E3E', // Base secondary — horizon red
  600: '#e03131',
  700: '#c92a2a',
  800: '#b02525',
  900: '#962020',
} as const

/**
 * Tertiary Colour Palette — Warm Teal/Jade (Formerly Secondary)
 * Used for: Success states, positive actions, confirmations
 * 
 * Warm teal that complements the coral primary.
 */
export const tertiary = {
  50: '#edf8f6',
  100: '#d5f0eb',
  200: '#a8e0d6',
  300: '#74cbbf',
  400: '#4ab5a6',
  500: '#2D8B7A', // Base tertiary — warm teal
  600: '#267566',
  700: '#1f5f53',
  800: '#184a41',
  900: '#10342e',
} as const

/**
 * Neutral/Grey Colour Palette — Warm Tint
 * Used for: Text, borders, backgrounds, disabled states
 * 
 * Warm-tinted neutrals (not cool/blue grays) for a softer, more inviting feel.
 * - Use 700+ for body text
 * - Use 500+ for secondary/helper text
 */
export const neutral = {
  50: '#faf9f7',  // Warm off-white
  100: '#f5f3f0', // Warm light gray
  200: '#e8e5e1', // Warm border color
  300: '#d6d2cc', // Warm disabled
  400: '#a8a29e', // Muted text
  500: '#78716c', // Helper text (minimum for readability)
  600: '#57534e', // Secondary text
  700: '#44403c', // Body text
  800: '#292524', // Headings
  900: '#1c1917', // High emphasis
} as const

/**
 * Semantic Colours — Warm Variants
 * Used for: Feedback states (info, success, warning, error)
 */
export const semantic = {
  info: {
    light: '#f0f7ff',
    base: '#3b82f6',
    dark: '#1d4ed8',
  },
  success: {
    light: '#ecfdf5',
    base: '#2D8B7A', // Uses tertiary teal for cohesion
    dark: '#1f5f53',
  },
  warning: {
    light: '#fffbeb',
    base: '#f59e0b',
    dark: '#b45309',
  },
  error: {
    light: '#fef5f3',
    base: '#d94a3d',   // Warmer red, closer to brand coral
    dark: '#b83a2f',
  },
} as const

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Font Family
 * 
 * Plus Jakarta Sans: Modern, warm, excellent readability.
 * Pairs well with our earthy color palette.
 */
export const fontFamily = {
  base: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  heading: "'Outfit', sans-serif",
  mono: "'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
} as const

/**
 * Font Sizes (in pixels)
 * 
 * Updated for better readability:
 * - Base increased from 14px to 15px
 * - Small text uses 13px (readable but clearly secondary)
 */
export const fontSize = {
  xs: 12,
  sm: 13,
  base: 15, // Slightly larger for better readability
  lg: 16,
  xl: 18,
  '2xl': 22,
  '3xl': 26,
  '4xl': 32,
} as const

/**
 * Font Weights
 * 
 * Headings use medium (500) for confident but not heavy feel
 */
export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

/**
 * Line Heights
 */
export const lineHeight = {
  tight: 1.3,
  base: 1.5,
  relaxed: 1.7,
} as const

/**
 * Heading Styles
 * 
 * Headings are confident but not heavy:
 * - H1-H2 use semibold (600)
 * - H3-H5 use medium (500)
 */
export const headings = {
  h1: { fontSize: fontSize['4xl'], fontWeight: fontWeight.semibold, lineHeight: lineHeight.tight },
  h2: { fontSize: fontSize['3xl'], fontWeight: fontWeight.semibold, lineHeight: lineHeight.tight },
  h3: { fontSize: fontSize['2xl'], fontWeight: fontWeight.medium, lineHeight: lineHeight.base },
  h4: { fontSize: fontSize.xl, fontWeight: fontWeight.medium, lineHeight: lineHeight.base },
  h5: { fontSize: fontSize.lg, fontWeight: fontWeight.medium, lineHeight: lineHeight.base },
} as const

// ============================================================================
// SPACING TOKENS
// ============================================================================

/**
 * Spacing Scale (in pixels)
 * Based on 4px base unit (Ant Design uses 4px grid)
 * 
 * Use semantic names (xs, sm, md, lg, xl) for consistency
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const

/**
 * Layout Tokens
 * 
 * Semantic spacing for common layout patterns.
 * Use these instead of magic values for consistent layouts.
 */
export const layout = {
  /** Padding inside the main content area */
  pagePadding: 24,
  /** Gap between major sections on a page */
  sectionGap: 24,
  /** Gap between cards or content blocks */
  cardGap: 16,
  /** Padding inside cards */
  cardPadding: 24,
  /** Gap between form fields or list items */
  itemGap: 12,
  /** Header height */
  headerHeight: 64,
  /** Sidebar width (expanded) */
  sidebarWidth: 220,
  /** Sidebar width (collapsed) */
  sidebarCollapsedWidth: 64,
} as const

// ============================================================================
// SHAPE TOKENS
// ============================================================================

/**
 * Border Radius
 * 
 * Slightly larger radii for a softer, warmer feel.
 * Use sm for small elements, md for cards/inputs, lg for modals
 */
export const borderRadius = {
  none: 0,
  sm: 6,
  md: 10, // Default for most components — slightly rounder
  lg: 14,
  xl: 20,
  full: 9999,
} as const

/**
 * Shadows — Warm tinted
 * 
 * Using warm brown tint instead of pure black for softer appearance.
 */
export const shadow = {
  sm: '0 1px 2px 0 rgba(41, 37, 36, 0.05)',
  base: '0 2px 8px rgba(41, 37, 36, 0.08)',
  md: '0 4px 12px rgba(41, 37, 36, 0.10)',
  lg: '0 8px 24px rgba(41, 37, 36, 0.12)',
} as const

// ============================================================================
// EXPORTS FOR THEME CONFIG
// ============================================================================

/**
 * Consolidated tokens object for easy import
 */
export const tokens = {
  colors: {
    primary,
    secondary,
    tertiary,
    neutral,
    semantic,
  },
  typography: {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    headings,
  },
  spacing,
  layout,
  shape: {
    borderRadius,
    shadow,
  },
} as const

export default tokens
