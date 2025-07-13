import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Spinner } from './spinner.js';

export const DefaultSpinner = () => {
  return (
    <MemoryRouter>
      <Spinner />
    </MemoryRouter>
  );
};

export const SpinnersOfDifferentSizes = () => {
  return (
    <MemoryRouter>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-medium)' }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
    </MemoryRouter>
  );
};

export const SpinnersOfDifferentVariants = () => {
  return (
    <MemoryRouter>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-medium)' }}>
        <Spinner variant="primary" />
        <Spinner variant="secondary" />
        <div style={{ backgroundColor: 'var(--colors-text-primary)', padding: 'var(--spacing-small)', borderRadius: 'var(--borders-radius-small)' }}>
          <Spinner variant="light" />
        </div>
      </div>
    </MemoryRouter>
  );
};

export const SpinnerWithLoadingText = () => {
  return (
    <MemoryRouter>
      <Spinner text="Loading data..." />
    </MemoryRouter>
  );
};

export const LargeSpinnerWithCustomTextAndPrimaryColor = () => {
  return (
    <MemoryRouter>
      <Spinner
        size="large"
        variant="primary"
        text="Processing your request, please wait..."
        ariaLabel="Processing request"
      />
    </MemoryRouter>
  );
};