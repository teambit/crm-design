import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';
import { Button } from './button.js';
import { Link } from '@my-crm/design.navigation.link'; // Imported for context, not direct use unless needed for complex scenarios

const containerStyle: React.CSSProperties = {
  padding: 'var(--spacing-medium)',
  display: 'flex',
  gap: 'var(--spacing-default)',
  flexWrap: 'wrap',
  alignItems: 'center',
  backgroundColor: 'var(--colors-surface-background)', // Ensure background for visibility if theme changes
};

export const PrimaryButton = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={containerStyle}>
        <Button appearance="primary" onClick={() => alert('Primary Button Clicked!')}>
          Primary Button
        </Button>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const SecondaryButton = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={containerStyle}>
        <Button appearance="secondary" onClick={() => alert('Secondary Button Clicked!')}>
          Secondary Button
        </Button>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const TertiaryButton = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={containerStyle}>
        <Button appearance="tertiary" onClick={() => alert('Tertiary Button Clicked!')}>
          Tertiary Button
        </Button>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const AllButtonAppearances = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={containerStyle}>
        <Button appearance="primary" onClick={() => alert('Primary Clicked')}>
          Primary Action
        </Button>
        <Button appearance="secondary" onClick={() => alert('Secondary Clicked')}>
          Secondary Action
        </Button>
        <Button appearance="tertiary" onClick={() => alert('Tertiary Clicked')}>
          Tertiary Action
        </Button>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);


export const DisabledButtons = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={containerStyle}>
        <Button appearance="primary" disabled>
          Disabled Primary
        </Button>
        <Button appearance="secondary" disabled>
          Disabled Secondary
        </Button>
        <Button appearance="tertiary" disabled>
          Disabled Tertiary
        </Button>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const ButtonAsLink = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={containerStyle}>
        <Button href="/dashboard" appearance="primary">
          Go to Dashboard (Internal)
        </Button>
        <Button href="https://www.example.com" external appearance="secondary">
          Visit Example.com (External)
        </Button>
        <Button href="/settings" appearance="tertiary" disabled>
          Disabled Link Button
        </Button>
      </div>
      <div style={{...containerStyle, marginTop: 'var(--spacing-small)'}}>
        <p>For demonstration, the internal link "Go to Dashboard" would navigate to "/dashboard" within this app.</p>
        <p>Current path for router context: <Link href="/">Current (Root)</Link></p>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const ButtonWithCustomStyleAndClass = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <style>{`
        .custom-button-class {
          box-shadow: var(--effects-shadows-large);
          text-transform: uppercase;
        }
      `}</style>
      <div style={containerStyle}>
        <Button
          appearance="primary"
          onClick={() => alert('Styled Button Clicked!')}
          style={{ borderRadius: 'var(--borders-radius-circle)', padding: '0 var(--spacing-large)' }}
        >
          Custom Style
        </Button>
        <Button
          appearance="secondary"
          className="custom-button-class"
          onClick={() => alert('Classy Button Clicked!')}
        >
          Custom Class
        </Button>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);