import { ReactNode, useCallback, useState } from 'react';
import classNames from 'classnames';
import { MyCrmThemeProvider } from './my-crm-theme-provider.js';
import { MyCrmThemeSchema } from './my-crm-tokens.js';
import { ThemeContext, ThemeContextValue, ThemeMode } from './theme-controller.js';
import { themeOptions } from './theme-options.js';
import styles from './my-crm-theme.module.scss';
import { DeepPartial } from '@bitdesign/sparks.sparks-theme';

export type MyCrmThemeProps = {
  /**
   * A root ReactNode for the component tree 
   * applied with the theme.
   */
  children?: ReactNode;

  /**
   * Inject a class name to override to the theme.
   * This allows people to affect your theme.
   */
  className?: string;

  /**
   * Override tokens in the schema
   */
  overrides?: DeepPartial<MyCrmThemeSchema>;

  /**
   * Preset of the theme.
   */
  initialTheme?: ThemeMode;

  /**
   * Style tags to include.
   */
  style?: React.CSSProperties;
};

/**
 * A theme for CRM applications.
 * It provides tokens, fonts and general styling for all components.
 * Supports both light and dark modes with professional color palettes.
 */
export function MyCrmTheme({ children, initialTheme = 'light', className, style, ...rest }: MyCrmThemeProps) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(initialTheme);
  const themePreset = themeOptions[themeMode];

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }, []);

  const themeContextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
    setThemeMode,
  };
  
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MyCrmThemeProvider.ThemeProvider
        className={classNames(styles.crmTheme, className)}
        overrides={themePreset}
        style={style}
        {...rest}
      >
        {children}
      </MyCrmThemeProvider.ThemeProvider>
    </ThemeContext.Provider>
  );
}