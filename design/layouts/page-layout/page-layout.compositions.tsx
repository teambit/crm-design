import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';
import { PageLayout } from './page-layout.js';
import type { PageLayoutType } from './page-layout-type.js';

const commonPageStyles: React.CSSProperties = {
  padding: '20px',
  border: '1px solid var(--colors-divider)',
  borderRadius: 'var(--borders-radius-medium)',
  backgroundColor: 'var(--colors-surface-secondary)',
  color: 'var(--colors-text-primary)',
  minHeight: '200px',
};

const iconStyle: React.CSSProperties = {
  fontSize: 'var(--typography-sizes-body-large)',
  marginRight: 'var(--spacing-xs)',
};

export const BasicDashboardPage = () => {
  const pageDetails: PageLayoutType = {
    title: 'Dashboard Overview',
  };

  return (
    <MemoryRouter>
      <MyCrmTheme>
        <PageLayout page={pageDetails}>
          <div style={commonPageStyles}>
            <h2 style={{ fontSize: 'var(--typography-sizes-heading-h3)', color: 'var(--colors-text-emphasis)'}}>Welcome to Your Dashboard</h2>
            <p style={{ fontSize: 'var(--typography-sizes-body-medium)', lineHeight: 'var(--typography-line-height-base)' }}>
              This is the main content area for the dashboard. You can find summaries,
              quick links, and important notifications here.
            </p>
            <button
              style={{
                padding: 'var(--spacing-small) var(--spacing-default)',
                backgroundColor: 'var(--colors-primary-default)',
                color: 'var(--colors-text-inverse)',
                border: 'none',
                borderRadius: 'var(--borders-radius-small)',
                cursor: 'var(--interactions-cursor-pointer)',
                marginTop: 'var(--spacing-medium)',
              }}
            >
              View Reports
            </button>
          </div>
        </PageLayout>
      </MyCrmTheme>
    </MemoryRouter>
  );
};

export const CustomerDetailsPageWithSeoAndBreadcrumbs = () => {
  const pageDetails: PageLayoutType = {
    title: 'Customer Profile - Jane Doe',
    description: 'View and manage customer details for Jane Doe, including contact information, order history, and support tickets.',
    keywords: 'crm, customer, profile, jane doe, details, contacts, orders',
    canonicalUrl: 'https://example.com/crm/customers/jane-doe',
    breadcrumbs: [
      { label: 'CRM Home', path: '/crm' },
      { label: 'Customers', path: '/crm/customers' },
      { label: 'Jane Doe' },
    ],
  };

  return (
    <MemoryRouter initialEntries={['/crm/customers/jane-doe']}>
      <MyCrmTheme>
        <PageLayout page={pageDetails}>
          <div style={commonPageStyles}>
            <h3 style={{ fontSize: 'var(--typography-sizes-heading-h4)', color: 'var(--colors-text-primary)'}}>Contact Information</h3>
            <p>Email: jane.doe@example.com</p>
            <p>Phone: (555) 123-4567</p>
            <h3 style={{ fontSize: 'var(--typography-sizes-heading-h4)', color: 'var(--colors-text-primary)', marginTop: 'var(--spacing-medium)'}}>Recent Activity</h3>
            <p>Last contacted: 2023-10-26</p>
            <p>Next follow-up: 2023-11-10</p>
          </div>
        </PageLayout>
      </MyCrmTheme>
    </MemoryRouter>
  );
};

export const SettingsPageWithTabs = () => {
  const pageDetails: PageLayoutType = {
    title: 'Application Settings',
    description: 'Configure general settings, user roles, and integration preferences for the CRM application.',
    breadcrumbs: [
      { label: 'Dashboard', path: '/' },
      { label: 'Settings' },
    ],
    sections: [
      {
        id: 'general',
        label: 'General',
        icon: <span style={iconStyle} role="img" aria-label="settings">⚙️</span>,
        content: (
          <div style={commonPageStyles}>
            <h4 style={{ fontSize: 'var(--typography-sizes-heading-h5)', color: 'var(--colors-text-primary)'}}>General Application Settings</h4>
            <p>Configure application name, logo, and default language.</p>
            <p>Timezone: (GMT-05:00) Eastern Time</p>
          </div>
        ),
      },
      {
        id: 'user-management',
        label: 'User Management',
        icon: <span style={iconStyle} role="img" aria-label="users">👥</span>,
        content: (
          <div style={commonPageStyles}>
            <h4 style={{ fontSize: 'var(--typography-sizes-heading-h5)', color: 'var(--colors-text-primary)'}}>Manage Users and Roles</h4>
            <p>Add new users, assign roles, and manage permissions.</p>
            <p>Current active users: 25</p>
          </div>
        ),
      },
      {
        id: 'integrations',
        label: 'Integrations',
        icon: <span style={iconStyle} role="img" aria-label="integrations">🔗</span>,
        content: (
          <div style={commonPageStyles}>
            <h4 style={{ fontSize: 'var(--typography-sizes-heading-h5)', color: 'var(--colors-text-primary)'}}>Connect External Services</h4>
            <p>Manage integrations with email marketing platforms, accounting software, etc.</p>
            <p>Connected: Mailchimp, QuickBooks</p>
          </div>
        ),
      },
      {
        id: 'billing',
        label: 'Billing',
        icon: <span style={iconStyle} role="img" aria-label="billing">💳</span>,
        content: (
          <div style={commonPageStyles}>
            <h4 style={{ fontSize: 'var(--typography-sizes-heading-h5)', color: 'var(--colors-text-primary)'}}>Subscription and Payment</h4>
            <p>View your current plan, update payment methods, and download invoices.</p>
            <p>Plan: Premium Tier</p>
          </div>
        ),
      },
    ],
  };

  return (
    <MemoryRouter initialEntries={['/settings']}>
      <MyCrmTheme>
        <PageLayout page={pageDetails}>
          {/* Content is handled by the sections prop */}
        </PageLayout>
      </MyCrmTheme>
    </MemoryRouter>
  );
};