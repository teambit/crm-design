import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './card.js';
import styles from './card.module.scss';

describe('Card Component', () => {
  it('should render the card with children', () => {
    const { container } = render(
      <Card>
        <div>Hello World</div>
      </Card>
    );
    expect(container.querySelector(`.${styles.content}`)).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should render the card with a title', () => {
    render(<Card title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should apply interactive styles when interactive is true', () => {
    const { container } = render(<Card interactive />);
    expect(container.querySelector(`.${styles.interactive}`)).toBeInTheDocument();
  });
});