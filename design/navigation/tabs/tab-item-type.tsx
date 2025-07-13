import type { ReactNode } from 'react';

export type TabItemType = {
  /**
   * Unique identifier for the tab
   */
  id: string;
  
  /**
   * The displayed label for the tab
   */
  label: string;
  
  /**
   * Optional icon to display before the label
   */
  icon?: ReactNode;
  
  /**
   * Content to be displayed when the tab is active
   */
  content: ReactNode;
  
  /**
   * Optional badge to display on the tab (e.g., notification count)
   */
  badge?: ReactNode;
  
  /**
   * Optional link for the tab. If provided, the tab will render as a Link component
   */
  link?: string;
  
  /**
   * Whether to navigate to the link when clicked. 
   * If false, it will just activate the tab without navigation.
   */
  navigateOnClick?: boolean;
  
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
};