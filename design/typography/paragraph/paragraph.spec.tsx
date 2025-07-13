import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph } from './paragraph.js';
import styles from './paragraph.module.scss';

describe('Paragraph Component', () => {
  it('should render a paragraph with default props', () => {
    const { container } = render(<Paragraph>Hello, world!</Paragraph>);
    const paragraphElement = container.querySelector(`.${styles.paragraph}`);
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent('Hello, world!');
  });

  it('should render a paragraph with a custom element', () => {
    const { container } = render(<Paragraph element="div">This is a div.</Paragraph>);
    const divElement = container.querySelector(`.${styles.paragraph}`);
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent('This is a div.');
  });

  it('should render a paragraph with custom class names', () => {
    const { container } = render(<Paragraph className="custom-class">Custom Class Paragraph</Paragraph>);
    const paragraphElement = container.querySelector(`.${styles.paragraph}`);
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveClass('custom-class');
  });
});