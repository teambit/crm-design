import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@my-crm/design.navigation.link';
import classNames from 'classnames';
import styles from './tabs.module.scss';
import type { TabItemType } from './tab-item-type.js';

export type TabsProps = {
  /**
   * The array of tab items to display
   */
  items: TabItemType[];

  /**
   * The active tab id - if controlled externally
   */
  activeTabId?: string;

  /**
   * Callback fired when a tab is selected
   */
  onTabChange?: (tabId: string) => void;

  /**
   * Optional custom class name
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;

  /**
   * Position of the tabs
   */
  position?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Variant of the tabs styling
   */
  variant?: 'filled' | 'outlined' | 'underlined';

  /**
   * Whether to distribute tabs evenly across full width
   */
  fullWidth?: boolean;

  /**
   * Whether the content should be lazy loaded only when a tab is selected
   */
  lazyLoad?: boolean;
};

export function Tabs({
  items = [],
  activeTabId,
  onTabChange,
  className,
  style,
  position = 'top',
  variant = 'underlined',
  fullWidth = false,
  lazyLoad = true,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string | undefined>(activeTabId || (items.length ? items[0].id : undefined));
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeIndicatorRef = useRef<HTMLDivElement>(null);
  const [renderedTabs, setRenderedTabs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (activeTabId !== undefined && activeTabId !== activeTab) {
      setActiveTab(activeTabId);
    }
  }, [activeTabId, activeTab]);

  useEffect(() => {
    if (activeTab && lazyLoad) {
      setRenderedTabs(prev => ({
        ...prev,
        [activeTab]: true,
      }));
    }
  }, [activeTab, lazyLoad]);

  useEffect(() => {
    if (!lazyLoad) {
      const initialRenderedTabs: Record<string, boolean> = {};
      items.forEach(item => {
        initialRenderedTabs[item.id] = true;
      });
      setRenderedTabs(initialRenderedTabs);
    }
  }, [items, lazyLoad]);

  useEffect(() => {
    updateActiveIndicator();
  }, [activeTab, items, position, variant]);

  const updateActiveIndicator = () => {
    if (!activeTab || !tabsRef.current || !activeIndicatorRef.current) return;
    
    const activeTabElement = tabsRef.current.querySelector(`[data-tab-id="${activeTab}"]`) as HTMLElement;
    if (!activeTabElement) return;
    
    const tabsRect = tabsRef.current.getBoundingClientRect();
    const activeTabRect = activeTabElement.getBoundingClientRect();
    
    if (position === 'top' || position === 'bottom') {
      activeIndicatorRef.current.style.width = `${activeTabRect.width}px`;
      activeIndicatorRef.current.style.height = '2px';
      activeIndicatorRef.current.style.left = `${activeTabRect.left - tabsRect.left}px`;
      activeIndicatorRef.current.style.top = position === 'top' ? 'auto' : '0';
      activeIndicatorRef.current.style.bottom = position === 'top' ? '0' : 'auto';
      activeIndicatorRef.current.style.transform = 'none';
    } else {
      activeIndicatorRef.current.style.width = '2px';
      activeIndicatorRef.current.style.height = `${activeTabRect.height}px`;
      activeIndicatorRef.current.style.left = position === 'left' ? 'auto' : '0';
      activeIndicatorRef.current.style.right = position === 'left' ? '0' : 'auto';
      activeIndicatorRef.current.style.top = `${activeTabRect.top - tabsRect.top}px`;
      activeIndicatorRef.current.style.transform = 'none';
    }
  };

  const handleTabClick = (tabId: string) => {
    if (activeTab !== tabId) {
      setActiveTab(tabId);
      if (onTabChange) {
        onTabChange(tabId);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(tabId);
    }
  };

  const shouldRenderTab = (tabId: string) => {
    return !lazyLoad || renderedTabs[tabId];
  };

  return (
    <div 
      className={classNames(
        styles.tabsContainer, 
        styles[`position${position.charAt(0).toUpperCase() + position.slice(1)}`],
        className
      )} 
      style={style}
    >
      <div 
        className={classNames(
          styles.tabList, 
          styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
          { [styles.fullWidth]: fullWidth }
        )} 
        role="tablist"
        ref={tabsRef}
      >
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={classNames(
                styles.tabItem,
                { [styles.active]: isActive }
              )}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              data-tab-id={tab.id}
              onClick={() => handleTabClick(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, tab.id)}
            >
              {tab.link ? (
                <Link 
                  href={tab.link} 
                  className={styles.tabLink}
                  onClick={(e) => {
                    if (!tab.navigateOnClick) {
                      e.preventDefault();
                      handleTabClick(tab.id);
                    }
                  }}
                >
                  {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
                  <span className={styles.tabLabel}>{tab.label}</span>
                </Link>
              ) : (
                <div className={styles.tabContent}>
                  {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
                  <span className={styles.tabLabel}>{tab.label}</span>
                </div>
              )}
              {tab.badge && <span className={styles.tabBadge}>{tab.badge}</span>}
            </div>
          );
        })}
        {variant === 'underlined' && <div ref={activeIndicatorRef} className={styles.activeIndicator} />}
      </div>
      
      <div className={styles.tabPanels}>
        {items.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            aria-labelledby={tab.id}
            hidden={activeTab !== tab.id}
            className={classNames(
              styles.tabPanel,
              { [styles.activePanel]: activeTab === tab.id }
            )}
          >
            {shouldRenderTab(tab.id) && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}