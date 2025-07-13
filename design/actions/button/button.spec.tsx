import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Button } from './button.js';
import styles from './button.module.scss';

describe('Button', () => {
  it('should render with children', () => {
    const { container } = render(
      <Button>Click me</Button>
    );
    expect(container.querySelector(`.${styles.button}`)).toHaveTextContent('Click me');
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Button onClick={onClick}>Click me</Button>
    );
    const button = container.querySelector(`.${styles.button}`);
    fireEvent.click(button as HTMLButtonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render as a link when href is provided', () => {
    const { container } = render(
      <MemoryRouter>
        <Button href="/test">Click me</Button>
      </MemoryRouter>
    );
    const link = container.querySelector(`.${styles.button}`);
    expect(link).toBeInTheDocument();
    expect((link as HTMLAnchorElement).getAttribute('href')).toBe('/test');
  });
});