import React from 'react';
import classNames from 'classnames';
import styles from './spinner.module.scss';

export type SpinnerProps = {
  /**
   * Optional class name for styling
   */
  className?: string;
  
  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
  
  /**
   * Size of the spinner (small, medium, large)
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Color variant of the spinner
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'light';
  
  /**
   * Shows text below the spinner
   */
  text?: string;
  
  /**
   * Aria label for accessibility
   * @default 'Loading'
   */
  ariaLabel?: string;
};

export function Spinner({
  className,
  style,
  size = 'medium',
  variant = 'primary',
  text,
  ariaLabel = 'Loading',
}: SpinnerProps) {
  return (
    <div 
      className={classNames(styles.container, className)} 
      style={style}
      role="status"
      aria-label={ariaLabel}
    >
      <div
        className={classNames(
          styles.spinner,
          styles[size],
          styles[variant]
        )}
      >
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      
      {text && <div className={styles.text}>{text}</div>}
    </div>
  );
}