import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './badge.module.scss';

export type BadgeVariant = 'filled' | 'outlined' | 'subtle';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';

export type BadgeProps = {
  /**
   * The text to display within the badge
   */
  label: string;
  
  /**
   * Optional icon to display before the label
   */
  icon?: ReactNode;
  
  /**
   * Visual style of the badge
   */
  variant?: BadgeVariant;
  
  /**
   * Size of the badge
   */
  size?: BadgeSize;
  
  /**
   * Color scheme of the badge
   */
  color?: BadgeColor;
  
  /**
   * Custom class name for additional styling
   */
  className?: string;
  
  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
};

export function Badge({
  label,
  icon,
  variant = 'filled',
  size = 'medium',
  color = 'primary',
  className,
  style
}: BadgeProps) {
  
  const badgeClasses = classNames(
    styles.badge,
    styles[variant],
    styles[size],
    styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
    className
  );

  return (
    <span className={badgeClasses} style={style}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </span>
  );
}