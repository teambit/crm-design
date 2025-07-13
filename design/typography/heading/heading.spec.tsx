import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from './heading.js';
import styles from './heading.module.scss';

describe('Heading Component', () => {
  it('should render the correct heading level', () => {
    const { container } = render(<Heading level={1}>Test Heading</Heading>);
    const headingElement = container.querySelector('h1');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Test Heading');
  });

  it('should apply the correct styles based on visual level', () => {
    const { container } = render(<Heading level={2} visualLevel={4}>Test Heading</Heading>);
    const headingElement = container.querySelector('h2');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass(styles.heading);
    expect(headingElement).toHaveClass(styles.h4);
  });

  it('should apply the correct variant styles', () => {
    const { container } = render(<Heading level={3} variant="display">Test Heading</Heading>);
    const headingElement = container.querySelector('h3');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass(styles.display);
  });
});