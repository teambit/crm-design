import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';
import { Heading } from './heading.js';

export const BasicHeadings = () => (
  <MyCrmTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <Heading level={1}>Main Title (H1)</Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          This is a paragraph following an H1 heading. It provides context or an introduction to the section.
        </p>
        <Heading level={2}>Section Title (H2)</Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          This paragraph sits under an H2, typically used for major sections within a page.
        </p>
        <Heading level={3}>Subsection Title (H3)</Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          H3 headings are for subsections. This text elaborates on the H3 content.
        </p>
        <Heading level={4}>Minor Heading (H4)</Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          H4 can be used for finer-grained topics or specific points.
        </p>
        <Heading level={5}>Small Heading (H5)</Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          H5 headings are less common but can be useful for very specific details.
        </p>
        <Heading level={6}>Tiny Heading (H6)</Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          H6 is the smallest heading, often used for footnotes or auxiliary information.
        </p>
      </div>
    </MemoryRouter>
  </MyCrmTheme>
);

export const HeadingsWithVisualLevels = () => (
  <MyCrmTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <Heading level={1} visualLevel={3}>
          Semantic H1, Visual H3
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          This heading is semantically an H1 for SEO and structure, but it looks like an H3.
        </p>
        <Heading level={2} visualLevel={5}>
          Semantic H2, Visual H5
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          Here, a semantically important H2 is styled to be less prominent, like an H5.
        </p>
        <Heading level={4} visualLevel={1}>
          Semantic H4, Visual H1
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          This is a less important H4 heading, but it's styled to look like a main title (H1).
        </p>
      </div>
    </MemoryRouter>
  </MyCrmTheme>
);

export const HeadingsWithVariants = () => (
  <MyCrmTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <Heading level={1} variant="display">
          Display H1: Welcome to Our CRM
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          The 'display' variant is ideal for prominent, marketing-style headings.
        </p>
        <Heading level={2} variant="display">
          Display H2: Key Features
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          Larger and more stylized than default headings.
        </p>
        <Heading level={3} variant="display">
          Display H3: Contact Management
        </Heading>
         <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          Even smaller display headings maintain a distinct style.
        </p>
        <Heading level={4} variant="body">
          Body H4: User Profile Details
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          The 'body' variant integrates headings more closely with paragraph text styles.
        </p>
        <Heading level={5} variant="body">
          Body H5: Preferences
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          This variant makes H5 headings appear like styled body text.
        </p>
         <Heading level={6} variant="body">
          Body H6: Notification Settings
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          H6 with body variant, suitable for subtle section labels.
        </p>
      </div>
    </MemoryRouter>
  </MyCrmTheme>
);

export const HeadingsWithCustomClassAndStyle = () => (
  <MyCrmTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)' }}>
        <Heading
          level={2}
          className="custom-heading-class"
          style={{ color: 'var(--colors-primary-default)', borderBottom: '2px solid var(--colors-primary-default)', paddingBottom: 'var(--spacing-xs)' }}
        >
          Custom Styled H2
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          This H2 heading has a custom class for additional CSS rules (if defined elsewhere)
          and inline styles for a primary color and a bottom border.
        </p>
        <Heading
          level={3}
          visualLevel={1}
          variant="display"
          style={{ textShadow: '2px 2px var(--colors-surface-tertiary)'}}
        >
          Complex Custom Heading
        </Heading>
        <p style={{ margin: 'var(--spacing-small) 0', color: 'var(--colors-text-secondary)' }}>
          A semantic H3, visually an H1, with display variant and custom text shadow.
        </p>
      </div>
    </MemoryRouter>
  </MyCrmTheme>
);