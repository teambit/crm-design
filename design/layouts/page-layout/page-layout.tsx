import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tabs } from '@my-crm/design.navigation.tabs';
import type { PageLayoutType } from './page-layout-type.js';
import styles from './page-layout.module.scss';

export type PageLayoutProps = {
  /**
   * The main content of the page.
   * Not rendered if 'sections' are provided in the 'page' prop.
   */
  children?: React.ReactNode;
  
  /**
   * Page metadata and configuration
   */
  page: PageLayoutType;
  
  /**
   * Optional CSS class to apply to the root element
   */
  className?: string;
  
  /**
   * Optional CSS class to apply to the content area
   */
  contentClassName?: string;
  
  /**
   * Optional CSS styles to apply to the root element
   */
  style?: React.CSSProperties;
};

export function PageLayout({
  children,
  page,
  className,
  contentClassName,
  style
}: PageLayoutProps) {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    sections,
    breadcrumbs
  } = page;

  const tabItems = sections?.map(section => ({
    id: section.id,
    label: section.label,
    icon: section.icon,
    content: section.content
  }));

  return (
    <div className={classNames(styles.pageLayout, className)} style={style}>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>

      <main className={styles.mainContent}>
        <div className={classNames(styles.contentArea, contentClassName)}>
          <div className={styles.header}>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb">
                <ol className={styles.breadcrumbs}>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={`breadcrumb-${index}`} className={styles.breadcrumbItem}>
                      {crumb.path ? (
                        <Link to={crumb.path} className={styles.breadcrumbLink}>
                          {crumb.label}
                        </Link>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            
            <h1 className={styles.pageTitle}>{title}</h1>
            {description && <p className={styles.pageDescription}>{description}</p>}
          </div>
          
          {sections && sections.length > 0 && tabItems ? (
            <div className={styles.tabsContainer}>
              <Tabs items={tabItems} variant="underlined" />
            </div>
          ) : (
            <div className={styles.pageContent}>{children}</div>
          )}
        </div>
      </main>
    </div>
  );
}