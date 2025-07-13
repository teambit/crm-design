import { render } from '@testing-library/react';
import { Badge } from './badge.js';
import styles from './badge.module.scss';

describe('Badge Component', () => {
  it('should render the badge with the provided label', () => {
    const { getByText } = render(<Badge label="Test Badge" />);
    expect(getByText('Test Badge')).toBeInTheDocument();
  });

  it('should apply the correct color class based on the color prop', () => {
    const { container } = render(<Badge label="Primary Badge" color="primary" />);
    expect(container.querySelector(`.${styles.colorPrimary}`)).toBeInTheDocument();
  });

  it('should apply the correct size class based on the size prop', () => {
    const { container } = render(<Badge label="Small Badge" size="small" />);
    expect(container.querySelector(`.${styles.small}`)).toBeInTheDocument();
  });
});