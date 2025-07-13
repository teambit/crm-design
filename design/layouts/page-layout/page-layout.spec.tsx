import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageLayout } from './page-layout.js';
import type { PageLayoutType } from './page-layout-type.js';
import styles from './page-layout.module.scss';

describe('PageLayout', () => {
  it('should render the page title', () => {
    const pageDetails: PageLayoutType = {
      title: 'Test Page',
    };

    const { container } = render(
      <MemoryRouter>
        <PageLayout page={pageDetails}>
          <div>Test Content</div>
        </PageLayout>
      </MemoryRouter>
    );

    const titleElement = container.querySelector(`.${styles.pageTitle}`);
    expect(titleElement?.textContent).toBe('Test Page');
  });

  it('should render the page content', () => {
    const pageDetails: PageLayoutType = {
      title: 'Test Page',
    };

    const { container } = render(
      <MemoryRouter>
        <PageLayout page={pageDetails}>
          <div data-testid="content">Test Content</div>
        </PageLayout>
      </MemoryRouter>
    );

    const contentElement = container.querySelector('[data-testid="content"]');
    expect(contentElement?.textContent).toBe('Test Content');
  });

  it('should render breadcrumbs when provided', () => {
    const pageDetails: PageLayoutType = {
      title: 'Test Page',
      breadcrumbs: [{ label: 'Home', path: '/' }, { label: 'Current' }],
    };

    const { container } = render(
      <MemoryRouter>
        <PageLayout page={pageDetails}>
          <div>Test Content</div>
        </PageLayout>
      </MemoryRouter>
    );

    const breadcrumbItems = container.querySelectorAll(`.${styles.breadcrumbItem}`);
    expect(breadcrumbItems.length).toBe(2);
  });
});