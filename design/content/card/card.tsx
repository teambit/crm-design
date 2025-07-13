import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

/**
 * Card variant types for different visual styles
 */
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';

export type CardProps = {
  /**
   * The main content of the card
   */
  children?: ReactNode;
  
  /**
   * Optional title for the card
   */
  title?: string;
  
  /**
   * Visual style variant of the card
   * @default 'default'
   */
  variant?: CardVariant;
  
  /**
   * Optional header content
   */
  header?: ReactNode;
  
  /**
   * Optional footer content
   */
  footer?: ReactNode;
  
  /**
   * Optional image URL to display at the top of the card
   */
  image?: string;
  
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  
  /**
   * Whether the card has interactive hover and focus states
   * @default false
   */
  interactive?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
};

export function Card({ 
  children,
  title,
  variant = 'default',
  header,
  footer,
  image,
  imageAlt = 'Card image',
  interactive = false,
  className,
  style
}: CardProps) {
  return (
    <div 
      className={classNames(
        styles.card,
        styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        { [styles.interactive]: interactive },
        className
      )}
      style={style}
    >
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>
      )}
      
      {(header || title) && (
        <div className={styles.header}>
          {header || (title && <h3 className={styles.title}>{title}</h3>)}
        </div>
      )}
      
      {children && <div className={styles.content}>{children}</div>}
      
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}