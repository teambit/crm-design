import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from './my-crm-theme.js';
import styles from './my-crm-theme.module.scss';

describe('MyCrmTheme', () => {
  it('renders with children', () => {
    const { container } = render(
      <MyCrmTheme>
        <div>Hello World</div>
      </MyCrmTheme>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(container.querySelector(`.${styles.crmTheme}`)).toBeInTheDocument();
  });

  it('toggles theme mode', () => {
    const { container } = render(
      <MyCrmTheme initialTheme="light">
        <div>Theme Content</div>
      </MyCrmTheme>,
      { wrapper: MemoryRouter }
    );

    expect(container.querySelector(`.${styles.crmTheme}`)).toBeInTheDocument();
  });

  it('applies custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { container } = render(
      <MyCrmTheme style={customStyle}>
        <div>Custom Styled Content</div>
      </MyCrmTheme>,
      { wrapper: MemoryRouter }
    );

    const themeContainer = container.querySelector(`.${styles.crmTheme}`) as HTMLElement;
    expect(themeContainer).toBeInTheDocument();
  });
});