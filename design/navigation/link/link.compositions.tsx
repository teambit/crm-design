import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';
import { Link } from './link.js';

export const BasicInternalLink = () => (
  <MemoryRouter initialEntries={['/']}>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-medium)' }}>
        <Link href="/profile">View User Profile</Link>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const BasicExternalLink = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-medium)' }}>
        <Link href="https://www.example.com" external>
          Visit Example.com (New Tab)
        </Link>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const ExternalLinkTargetSelf = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-medium)' }}>
        <Link href="https://www.example.com" external target="_self">
          Visit Example.com (Same Tab)
        </Link>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const LinkWithCustomStyling = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <style>{`
        .special-link {
          font-size: var(--typography-sizes-body-large);
          color: var(--colors-actions-create);
          font-weight: var(--typography-font-weight-bold);
        }
        .special-link:hover {
          color: var(--colors-primary-hover);
          text-decoration-color: var(--colors-primary-hover);
        }
        .special-link:focus {
          outline-color: var(--colors-actions-create);
        }
      `}</style>
      <div style={{ padding: 'var(--spacing-medium)' }}>
        <Link href="/special-offer" className="special-link">
          Check out our Special Offer!
        </Link>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const LinkWithOnClickHandler = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent navigation
    alert('Link clicked! Custom action executed.');
  };

  return (
    <MemoryRouter>
      <MyCrmTheme>
        <div style={{ padding: 'var(--spacing-medium)' }}>
          <Link href="/wont-navigate" onClick={handleClick}>
            Click Me (Custom Action, No Navigation)
          </Link>
        </div>
      </MyCrmTheme>
    </MemoryRouter>
  );
};