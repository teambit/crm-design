import React, { ReactNode } from 'react';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';
import { Badge } from './badge.js';
import type { BadgeColor, BadgeSize, BadgeVariant } from './badge.js';

// Helper for layout and styling of composition sections
const CompositionRow = ({ title, children }: { title?: string, children: ReactNode }) => (
  <div style={{ 
    marginBottom: 'var(--spacing-large)', 
    padding: 'var(--spacing-default)', 
    border: 'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)', 
    borderRadius: 'var(--borders-radius-medium)' 
  }}>
    {title && <h3 style={{ 
      marginTop: 0, 
      marginBottom: 'var(--spacing-medium)', 
      fontSize: 'var(--typography-sizes-heading-h5)',
      fontWeight: 'var(--typography-font-weight-semi-bold)',
      color: 'var(--colors-text-emphasis)' 
    }}>{title}</h3>}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-small)', alignItems: 'center' }}>
      {children}
    </div>
  </div>
);

// Simple placeholder icon (Star icon)
const PlaceholderIcon = ({ size = 14, color = "currentColor" }: { size?: number, color?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'flex', alignItems: 'center' }} // Ensures icon aligns well if container has extra space
  >
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
  </svg>
);


export const OverviewBadges = () => (
  <MyCrmTheme>
    <CompositionRow title="Overview of Badge Styles">
      <Badge label="Primary" color="primary" variant="filled" />
      <Badge label="Secondary" color="secondary" variant="outlined" />
      <Badge label="Success" color="success" variant="subtle" />
      <Badge label="Warning" color="warning" variant="filled" size="small" icon={<PlaceholderIcon />} />
      <Badge label="Error" color="error" variant="outlined" size="large" icon={<PlaceholderIcon />} />
      <Badge label="Info" color="info" variant="subtle" icon={<PlaceholderIcon />} />
      <Badge label="Neutral" color="neutral" />
    </CompositionRow>
  </MyCrmTheme>
);

export const AllColorVariants = () => {
  const colors: BadgeColor[] = [
    'primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'
  ];
  const variants: BadgeVariant[] = ['filled', 'outlined', 'subtle'];

  return (
    <MyCrmTheme>
      {variants.map(variant => (
        <CompositionRow key={variant} title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Badges (All Colors)`}>
          {colors.map(color => (
            <Badge
              key={`${color}-${variant}`}
              label={`${color.charAt(0).toUpperCase() + color.slice(1)}`}
              color={color}
              variant={variant}
              size="medium"
            />
          ))}
        </CompositionRow>
      ))}
    </MyCrmTheme>
  );
};

export const AllSizeVariants = () => {
  const sizes: BadgeSize[] = ['small', 'medium', 'large'];
  const exampleBadgeDetails: Array<{color: BadgeColor, variant: BadgeVariant, labelPrefix: string}> = [
    { color: 'primary', variant: 'filled', labelPrefix: 'Lead' },
    { color: 'success', variant: 'outlined', labelPrefix: 'Active' },
    { color: 'info', variant: 'subtle', labelPrefix: 'New' },
  ];

  return (
    <MyCrmTheme>
      {exampleBadgeDetails.map(detail => (
         <CompositionRow key={`${detail.color}-${detail.variant}`} title={`${detail.labelPrefix} Badges - ${detail.variant.charAt(0).toUpperCase() + detail.variant.slice(1)} (All Sizes with Icon)`}>
          {sizes.map(size => (
            <Badge
              key={`${detail.color}-${detail.variant}-${size}`}
              label={`${detail.labelPrefix} ${size.charAt(0).toUpperCase() + size.slice(1)}`}
              color={detail.color}
              variant={detail.variant}
              size={size}
              icon={<PlaceholderIcon />}
            />
          ))}
        </CompositionRow>
      ))}
    </MyCrmTheme>
  );
};

export const IconUsageBadges = () => (
    <MyCrmTheme>
      <CompositionRow title="Badges with Icons - Common Use Cases">
        <Badge label="Task Complete" color="success" variant="filled" icon={<PlaceholderIcon />} />
        <Badge label="High Priority" color="error" variant="filled" size="small" icon={<PlaceholderIcon />} />
        <Badge label="Needs Review" color="warning" variant="outlined" size="medium" icon={<PlaceholderIcon />} />
        <Badge label="Information" color="info" variant="subtle" size="large" icon={<PlaceholderIcon />} />
        <Badge label="Archived Item" color="neutral" variant="filled" icon={<PlaceholderIcon />} />
        <Badge label="New Feature" color="primary" variant="subtle" size="small" icon={<PlaceholderIcon />} />
      </CompositionRow>
    </MyCrmTheme>
  );
