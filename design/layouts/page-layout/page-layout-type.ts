export type PageLayoutType = {
  /**
   * The title of the page to be displayed in the browser tab
   */
  title: string;
  
  /**
   * Optional description meta tag for SEO
   */
  description?: string;
  
  /**
   * Optional keywords meta tag for SEO
   */
  keywords?: string;
  
  /**
   * Optional canonical URL for SEO
   */
  canonicalUrl?: string;
  
  /**
   * Optional page sections to be used for navigation tabs
   */
  sections?: {
    id: string;
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
  }[];
  
  /**
   * Optional breadcrumb items for page navigation
   */
  breadcrumbs?: {
    label: string;
    path?: string;
  }[];
};