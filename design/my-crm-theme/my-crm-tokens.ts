/**
 * CRM application tokens theme.
 * Includes all tokens in this object.
 */
export function myCrmTokens() {
  const tokens = {
    /**
     * Color Palette
     */
    colors: {
      primary: {
        default: '#1976d2', // Main brand color (professional blue) 
        hover: '#1565c0', // Brand color for hover states
        active: '#0d47a1', // Brand color for active states
      },
      secondary: {
        default: '#f5f5f5', // Brand accent color (subtle contrast)
        hover: '#e0e0e0', // Brand accent hover color
        active: '#bdbdbd', // Brand accent active color
      },
      surface: {
        background: '#f8f9fa', // Default background color (light, airy)
        primary: '#ffffff', // Primary content surface (clean, crisp)
        secondary: '#f3f4f6', // Secondary surface (subtle differentiation)
        tertiary: '#e9ecef', // Tertiary surface for cards, etc.
      },
      text: {
        primary: '#212121', // Main text color (high contrast)
        secondary: '#757575', // Secondary text (subtle emphasis)
        inverse: '#ffffff', // Text on dark backgrounds (clear readability)
        muted: '#9e9e9e', // Additional muted text color
        emphasis: '#0d47a1', // Text color for emphasis
      },
      status: {
        positive: { default: '#4caf50', subtle: '#e8f5e9' }, // Success state (green)
        negative: { default: '#f44336', subtle: '#ffebee' }, // Error state (red)
        warning: { default: '#ff9800', subtle: '#fff3e0' }, // Warning state (orange)
        info: { default: '#2196f3', subtle: '#e3f2fd' }, // Information state (blue)
        neutral: { default: '#9e9e9e', subtle: '#f5f5f5' }, // Neutral state (gray)
      },
      actions: {
        create: '#4caf50', // Create action color
        edit: '#2196f3', // Edit action color
        delete: '#f44336', // Delete action color
        archive: '#ff9800', // Archive action color
      },
      overlay: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay (modals, etc.)
      divider: '#e0e0e0', // Divider color
    },

    borders: {
      default: {
        color: '#e0e0e0', // Subtle border color (clean separation)
        width: '1px', // Default border width
        style: 'solid', // Default border style
      },
      focus: {
        color: '#1976d2', // Focus indicator (matches primary)
        width: '2px',
        style: 'solid',
        offset: '2px', 
      },
      radius: {
        small: '4px', // For small elements (e.g., input fields)
        medium: '8px', // For standard elements (e.g., buttons, cards)
        large: '12px', // For larger elements (e.g., modals)
        circle: '50%', // For circular elements (e.g., avatars)
      },
    },

    /**
     * Typography System
     */
    typography: {
      fontFamily: "'Inter', system-ui, sans-serif", // Modern, professional typeface
      sizes: {
        display: { large: '48px', medium: '40px', small: '32px' },
        heading: {
          h1: '28px',
          h2: '24px',
          h3: '20px',
          h4: '18px',
          h5: '16px',
          h6: '14px',
        },
        body: { large: '16px', medium: '14px', default: '14px', small: '12px' },
        caption: { default: '12px', small: '11px' },
        label: { default: '14px', small: '12px' },
      },
      lineHeight: {
        base: '1.5', // Comfortable reading experience
        heading: '1.3', // Tighter leading for headings
        compact: '1.2', // Extra tight for specific elements
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
      },
      letterSpacing: {
        tight: '-0.01em', // For headings
        normal: '0',
        wide: '0.01em', // For specific elements
      },
    },

    /**
     * Spacing & Layout
     */
    spacing: {
      xxs: '2px',
      xs: '4px',
      small: '8px',
      default: '16px',
      medium: '24px',
      large: '32px',
      xl: '48px',
      xxl: '64px',
    },

    layout: {
      /**
       * Maximum width size for pages
       */
      maxPageWidth: '1440px',

      /**
       * Content width for centered layouts
       */
      contentWidth: '1200px',

      /**
       * Sidebar width for app layout
       */
      sidebarWidth: '260px',
      
      /**
       * Compact sidebar width for app layout
       */
      sidebarCompactWidth: '72px',

      /**
       * Spacing between columns or elements
       */
      gutter: '24px',

      /**
       * Header height
       */
      headerHeight: '64px',
      
      /**
       * Toolbar height
       */
      toolbarHeight: '48px',
    },

    /**
     * Visual Effects
     */
    effects: {
      shadows: {
        none: 'none',
        xs: '0px 1px 2px rgba(0, 0, 0, 0.05)', // Extra small shadow
        small: '0px 2px 4px rgba(0, 0, 0, 0.08)',
        medium: '0px 4px 6px rgba(0, 0, 0, 0.12)',
        large: '0px 8px 16px rgba(0, 0, 0, 0.16)',
        xLarge: '0px 12px 24px rgba(0, 0, 0, 0.2)', // Extra large shadow
        inset: 'inset 0px 1px 2px rgba(0, 0, 0, 0.08)', // Inset shadow for depth
        raised: '0px 4px 12px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.08)', // Raised effect
      },
      opacity: { 
        disabled: '0.5', 
        hover: '0.8', 
        faint: '0.2', 
        semiOpaque: '0.7',
        overlay: '0.45',
      },
      gradients: {
        primary: 'linear-gradient(to right, #1976d2, #42a5f5)',
        secondary: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
        radial: 'radial-gradient(circle, #1976d2, #0d47a1)', // Radial gradient example
      },
      blur: {
        small: 'blur(4px)',
        medium: 'blur(8px)',
        large: 'blur(16px)',
      },
    },    

    /**
     * Interaction & Motion
     */
    interactions: {
      cursor: { 
        pointer: 'pointer', 
        disabled: 'not-allowed', 
        text: 'text', 
        grab: 'grab', 
        grabbing: 'grabbing',
        move: 'move',
      },
      zIndex: { 
        base: '1', 
        dropdown: '50',
        sticky: '100', 
        modal: '1000', 
        tooltip: '1500', 
        overlay: '2000',
      },
      transitions: {
        duration: { 
          instant: '0.1s',
          fast: '0.2s', 
          medium: '0.3s', 
          slow: '0.5s', 
          verySlow: '0.8s',
        },
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'ease-out',
          easeIn: 'ease-in',
          spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Spring-like easing
          snappy: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)', // Quick start, gentle stop
        },
        property: {
          all: 'all',
          transform: 'transform',
          opacity: 'opacity',
          color: 'color',
          shadow: 'box-shadow',
          background: 'background-color',
          border: 'border-color',
        },
      },
      hoverEffect: {
        scale: 'scale(1.02)', // Slight scale on hover
        translateY: 'translateY(-2px)', // Slight vertical lift on hover
        shadow: '0px 6px 12px rgba(0, 0, 0, 0.12)', // Enhanced shadow on hover
      },
    },
  };

  return tokens;
}

/**
 * Use tokens from this schema as css variables in your components.
 * For example, use surfaceColor as css variable --surface-color
 */
export type MyCrmThemeSchema = ReturnType<typeof myCrmTokens>;