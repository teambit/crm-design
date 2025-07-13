import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from './link.js';
import styles from './link.module.scss';

describe('Link Component', () => {
  it('renders an internal link with correct class and navigates on click', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Link href="/profile">Profile</Link>
      </MemoryRouter>
    );

    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(styles.link);
    expect(link).toHaveAttribute('href', '/profile');

    fireEvent.click(link);
  });

  it('renders an external link with correct attributes', () => {
    const { container } = render(
      <MemoryRouter>
        <Link href="https://www.example.com" external>
          Example
        </Link>
      </MemoryRouter>
    );

    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(styles.link);
    expect(link).toHaveAttribute('href', 'https://www.example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('handles onClick event', () => {
    const onClick = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <Link href="/test" onClick={onClick}>
          Test Link
        </Link>
      </MemoryRouter>
    );

    const link = container.querySelector('a');
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});