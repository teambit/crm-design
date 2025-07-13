import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './spinner.js';
import styles from './spinner.module.scss';

describe('Spinner', () => {
  it('should render the spinner with default props', () => {
    const { container } = render(<Spinner />);
    const spinnerElement = container.querySelector(`.${styles.spinner}`);
    expect(spinnerElement).toBeInTheDocument();
  });

  it('should render the spinner with the specified size', () => {
    const { container } = render(<Spinner size="large" />);
    const spinnerElement = container.querySelector(`.${styles.spinner}`);
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass(styles.large);
  });

  it('should render the spinner with text', () => {
    const { container } = render(<Spinner text="Loading..." />);
    const textElement = container.querySelector(`.${styles.text}`);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('Loading...');
  });
});