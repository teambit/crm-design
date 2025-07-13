import React from 'react';
import { render } from '@testing-library/react';
import { Flex } from './flex.js';
import styles from './flex.module.scss';

describe('Flex', () => {
  it('should render children', () => {
    const { container } = render(
      <Flex>
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>
    );
    expect(container.querySelector('div')?.textContent).toBe('Child 1Child 2');
  });

  it('should apply direction class', () => {
    const { container } = render(<Flex direction="column" />);
    expect(container.querySelector('div')?.classList.contains(styles.column)).toBe(true);
  });

  it('should apply justify content class', () => {
    const { container } = render(<Flex justifyContent="space-between" />);
    expect(container.querySelector('div')?.classList.contains(styles.justifyBetween)).toBe(true);
  });
});