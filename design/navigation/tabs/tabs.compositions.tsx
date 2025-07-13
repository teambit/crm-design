import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';
import { Tabs } from './tabs.js';
import type { TabItemType } from './tab-item-type.js';

const commonTabItems: TabItemType[] = [
  {
    id: 'profile',
    label: 'Profile',
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>User Profile Information. Update your personal details here.</div>,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Main Dashboard. View your key performance indicators and recent activity.</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Application Settings. Customize preferences and configurations.</div>,
  },
];

export const BasicUnderlinedTabs = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <Tabs items={commonTabItems} />
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

const iconTabItems: TabItemType[] = [
  {
    id: 'inbox',
    label: 'Inbox',
    icon: <span role="img" aria-label="inbox" style={{ fontSize: 'var(--typography-sizes-body-large)' }}>📨</span>,
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Your messages and notifications.</div>,
    badge: '3',
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: <span role="img" aria-label="calendar" style={{ fontSize: 'var(--typography-sizes-body-large)' }}>📅</span>,
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Your schedule and upcoming events.</div>,
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: <span role="img" aria-label="tasks" style={{ fontSize: 'var(--typography-sizes-body-large)' }}>✔️</span>,
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Manage your to-do list.</div>,
    badge: <span style={{ backgroundColor: 'var(--colors-status-negative-default)', color: 'var(--colors-text-inverse)', padding: '2px 6px', borderRadius: 'var(--borders-radius-small)'}}>Urgent</span>,
  },
];

export const FilledTabsWithIconsAndBadges = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <Tabs items={iconTabItems} variant="filled" />
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

const linkTabItems: TabItemType[] = [
  {
    id: 'home-link',
    label: 'Home (Navigates)',
    link: '/home',
    navigateOnClick: true,
    icon: <span role="img" aria-label="home" style={{ fontSize: 'var(--typography-sizes-body-large)' }}>🏠</span>,
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Content for Home. This tab uses Link to navigate.</div>,
  },
  {
    id: 'docs-no-nav',
    label: 'Docs (No Navigate)',
    link: '/documentation',
    navigateOnClick: false,
    icon: <span role="img" aria-label="documentation" style={{ fontSize: 'var(--typography-sizes-body-large)' }}>📚</span>,
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Content for Docs. This tab activates but does not navigate via Link.</div>,
  },
  {
    id: 'support',
    label: 'Support (No Link)',
    icon: <span role="img" aria-label="support" style={{ fontSize: 'var(--typography-sizes-body-large)' }}>헬</span>,
    content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Support Page Content. Standard tab behavior.</div>,
  },
];

export const OutlinedTabsWithLinks = () => (
  <MemoryRouter initialEntries={['/initial']}>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <p style={{ marginBottom: 'var(--spacing-small)', color: 'var(--colors-text-secondary)'}}>
          <em>Select tabs to see behavior. 'Home' tab will attempt navigation if Link component is active.</em>
        </p>
        <Tabs items={linkTabItems} variant="outlined" />
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);


const verticalTabItems: TabItemType[] = [
  { id: 'general', label: 'General Settings', content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>General application settings and preferences.</div> },
  { id: 'account', label: 'Account Details', content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Manage your account information, password, and security.</div> },
  { id: 'notifications', label: 'Notifications', content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>Configure notification preferences for email and in-app alerts.</div> },
  { id: 'billing', label: 'Billing', content: <div style={{ padding: 'var(--spacing-medium)', border: '1px dashed var(--colors-divider)' }}>View invoices and manage payment methods.</div> },
];

export const LeftPositionedTabs = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)', height: '350px' }}>
        <Tabs items={verticalTabItems} position="left" />
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const ControlledAndFullWidthTabs = () => {
  const [currentTab, setCurrentTab] = useState<string>(commonTabItems[0].id);

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

  const buttonStyle = (isActive: boolean): React.CSSProperties => ({
    marginRight: 'var(--spacing-small)',
    padding: 'var(--spacing-xs) var(--spacing-small)',
    cursor: 'var(--interactions-cursor-pointer)',
    border: '1px solid var(--colors-divider)',
    borderRadius: 'var(--borders-radius-small)',
    backgroundColor: isActive ? 'var(--colors-primary-default)' : 'var(--colors-surface-secondary)',
    color: isActive ? 'var(--colors-text-inverse)' : 'var(--colors-text-primary)',
    fontWeight: isActive ? 'var(--typography-font-weight-medium)' : 'var(--typography-font-weight-regular)',
  });

  return (
    <MemoryRouter>
      <MyCrmTheme>
        <div style={{ padding: 'var(--spacing-large)' }}>
          <div style={{ marginBottom: 'var(--spacing-medium)', display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-small)' }}>
            {commonTabItems.map(tab => (
              <button
                key={`btn-${tab.id}`}
                onClick={() => setCurrentTab(tab.id)}
                style={buttonStyle(currentTab === tab.id)}
                aria-pressed={currentTab === tab.id}
              >
                Activate {tab.label}
              </button>
            ))}
          </div>
          <Tabs
            items={commonTabItems}
            activeTabId={currentTab}
            onTabChange={handleTabChange}
            fullWidth={true}
            variant="underlined"
          />
        </div>
      </MyCrmTheme>
    </MemoryRouter>
  );
};