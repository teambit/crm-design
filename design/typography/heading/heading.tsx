import React from 'react';
import classNames from 'classnames';
import type { HeadingLevel } from './heading-type.js';
import styles from './heading.module.scss';

export type HeadingProps = {
  /**
   * Semantic heading level (h1-h6)
   */
  level: HeadingLevel;

  /**
   * Content of the heading
   */
  children: React.ReactNode;

  /**
   * Visual styling level that can differ from semantic level
   * Use for styling flexibility while maintaining semantic structure
   */
  visualLevel?: HeadingLevel;

  /**
   * Optional CSS class to apply custom styles
   */
  className?: string;

  /**
   * Additional style properties
   */
  style?: React.CSSProperties;

  /**
   * Visual style variation - use display for marketing content
   * and body for content areas
   */
  variant?: 'default' | 'display' | 'body';
};

export function Heading({
  level,
  children,
  visualLevel,
  className,
  style,
  variant = 'default',
}: HeadingProps) {
  const effectiveLevel = visualLevel || level;
  const Component = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Component
      className={classNames(
        styles.heading,
        styles[`h${effectiveLevel}`],
        variant !== 'default' && styles[variant],
        className
      )}
      style={style}
    >
      {children}
    </Component>
  );
}