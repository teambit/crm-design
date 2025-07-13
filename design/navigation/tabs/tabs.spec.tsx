import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Tabs } from './tabs.js';
import type { TabItemType } from './tab-item-type.js';
import styles from './tabs.module.scss';

const tabItems: TabItemType[] = [
  { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
  { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
];

describe('Tabs', () => {
  it('should render the tabs component with the first tab active by default', () => {
    const { container } = render(
      <MemoryRouter>
        <Tabs items={tabItems} />
      </MemoryRouter>
    );

    const tab1 = container.querySelector(`[data-tab-id="tab1"]`);
    const tab2 = container.querySelector(`[data-tab-id="tab2"]`);
    const content1 = container.querySelector(`[aria-labelledby="tab1"]`);
    const content2 = container.querySelector(`[aria-labelledby="tab2"]`);

    expect(tab1).toHaveClass(styles.active);
    expect(tab2).not.toHaveClass(styles.active);
    expect(content1).not.toHaveAttribute('hidden');
    expect(content2).toHaveAttribute('hidden');
  });

  it('should switch tabs when a different tab is clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Tabs items={tabItems} />
      </MemoryRouter>
    );

    const tab2Button = container.querySelector(`[data-tab-id="tab2"]`);
    fireEvent.click(tab2Button as Element);

    const tab1 = container.querySelector(`[data-tab-id="tab1"]`);
    const tab2 = container.querySelector(`[data-tab-id="tab2"]`);
    const content1 = container.querySelector(`[aria-labelledby="tab1"]`);
    const content2 = container.querySelector(`[aria-labelledby="tab2"]`);

    expect(tab1).not.toHaveClass(styles.active);
    expect(tab2).toHaveClass(styles.active);
    expect(content1).toHaveAttribute('hidden');
    expect(content2).not.toHaveAttribute('hidden');
  });

  it('should allow external control of active tab', () => {
    const { container } = render(
      <MemoryRouter>
        <Tabs items={tabItems} activeTabId="tab2" />
      </MemoryRouter>
    );

    const tab1 = container.querySelector(`[data-tab-id="tab1"]`);
    const tab2 = container.querySelector(`[data-tab-id="tab2"]`);
    const content1 = container.querySelector(`[aria-labelledby="tab1"]`);
    const content2 = container.querySelector(`[aria-labelledby="tab2"]`);

    expect(tab1).not.toHaveClass(styles.active);
    expect(tab2).toHaveClass(styles.active);
    expect(content1).toHaveAttribute('hidden');
    expect(content2).not.toHaveAttribute('hidden');
  });
});