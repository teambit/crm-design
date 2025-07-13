import { DeepPartial } from '@bitdesign/sparks.sparks-theme';
import { MyCrmThemeSchema } from './my-crm-tokens.js';

/**
 * Override tokens for the dark theme.
 * Overrides the default light theme tokens.
 */
export const darkThemeSchema: DeepPartial<MyCrmThemeSchema> = {
  colors: {
    primary: {
      default: '#42a5f5', // Lighter blue for dark mode
      hover: '#64b5f6', // Hover state
      active: '#90caf9', // Active state
    },
    secondary: {
      default: '#424242', // Darker secondary for dark mode
      hover: '#616161', // Hover state
      active: '#757575', // Active state
    },
    surface: {
      background: '#121212', // Dark background
      primary: '#1e1e1e', // Primary surface
      secondary: '#2d2d2d', // Secondary surface
      tertiary: '#333333', // Tertiary surface for cards
    },
    text: {
      primary: '#f5f5f5', // Light text for dark background
      secondary: '#bdbdbd', // Secondary text
      inverse: '#212121', // Inverse text (for light backgrounds)
      muted: '#9e9e9e', // Muted text
      emphasis: '#90caf9', // Emphasis text (matches primary)
    },
    status: {
      positive: { default: '#66bb6a', subtle: '#1e3620' },
      negative: { default: '#ef5350', subtle: '#3e1a18' },
      warning: { default: '#ffa726', subtle: '#3d2e16' },
      info: { default: '#42a5f5', subtle: '#172938' },
      neutral: { default: '#9e9e9e', subtle: '#2d2d2d' },
    },
    actions: {
      create: '#66bb6a', // Create action
      edit: '#42a5f5', // Edit action
      delete: '#ef5350', // Delete action
      archive: '#ffa726', // Archive action
    },
    overlay: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better contrast
    divider: '#424242', // Darker divider for contrast
  },
  borders: {
    default: {
      color: '#424242', // Darker border color for better visibility
      width: '1px',
      style: 'solid',
    },
    focus: {
      color: '#42a5f5', // Focus color matching primary
      width: '2px',
      style: 'solid',
      offset: '2px',
    },
  },
  effects: {
    shadows: {
      xs: '0px 1px 3px rgba(0, 0, 0, 0.2)',
      small: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      medium: '0px 4px 8px rgba(0, 0, 0, 0.3)',
      large: '0px 8px 16px rgba(0, 0, 0, 0.35)',
      xLarge: '0px 12px 24px rgba(0, 0, 0, 0.4)',
      inset: 'inset 0px 1px 3px rgba(0, 0, 0, 0.3)',
      raised: '0px 4px 12px rgba(0, 0, 0, 0.35), 0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
    gradients: {
      primary: 'linear-gradient(to right, #1976d2, #42a5f5)',
      secondary: 'linear-gradient(to bottom, #424242, #212121)',
      radial: 'radial-gradient(circle, #42a5f5, #1976d2)',
    },
  },
};