import React, { forwardRef } from 'react';
import { Link } from '@my-crm/design.navigation.link';
import styles from './button.module.scss';
import { ButtonAppearance } from './button-appearance-type.js';

export type ButtonProps = {
  /**
   * The content to be displayed within the button
   */
  children: React.ReactNode;
  
  /**
   * Function to be called when the button is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  
  /**
   * Type of the button
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * URL to navigate to when the button is clicked (transforms to a Link component)
   */
  href?: string;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Specifies if the link points to an external resource (only relevant when href is provided)
   */
  external?: boolean;
  
  /**
   * Additional class name for styling
   */
  className?: string;
  
  /**
   * Visual style of the button
   */
  appearance?: ButtonAppearance;
  
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      onClick,
      type = 'button',
      href,
      disabled = false,
      external = false,
      className,
      appearance = 'primary',
      style,
    },
    ref
  ) => {
    const getButtonClassNames = () => {
      const classes = [styles.button];
      
      if (appearance && styles[appearance]) {
        classes.push(styles[appearance]);
      }
      
      if (disabled) {
        classes.push(styles.disabled);
      }
      
      if (className) {
        classes.push(className);
      }
      
      return classes.filter(Boolean).join(' ');
    };

    const buttonClassNames = getButtonClassNames();

    // If href is provided, render as a Link component
    if (href) {
      return (
        <Link
          href={disabled ? '#' : href} // Pass '#' for disabled links to prevent navigation but maintain link appearance
          external={external}
          onClick={(e) => {
            if (disabled) {
              e.preventDefault();
              return;
            }
            if (onClick) {
              onClick(e);
            }
          }}
          className={buttonClassNames}
          ref={ref as React.Ref<HTMLAnchorElement>}
          style={style}
          // For ARIA: a disabled link might still be focusable.
          // CSS `pointer-events: none` on `styles.disabled` handles click blocking.
          // Consider aria-disabled if Link component supports it.
          aria-disabled={disabled} 
        >
          {children}
        </Link>
      );
    }

    // Otherwise, render as a button element
    return (
      <button
        type={type}
        className={buttonClassNames}
        onClick={onClick}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        style={style}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';