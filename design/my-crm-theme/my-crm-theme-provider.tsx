import { createTheme } from '@bitdesign/sparks.sparks-theme';
import { MyCrmThemeSchema, myCrmTokens } from './my-crm-tokens.js';

/**
 * Creating and declaring the CRM theme.
 * Define the theme schema as a type variable for proper type completions.
 */
export const MyCrmThemeProvider = createTheme<MyCrmThemeSchema>({
  tokens: myCrmTokens,
});

/**
 * A React hook for contextual access to design tokens
 * from components.
 */
export const { useTheme } = MyCrmThemeProvider;