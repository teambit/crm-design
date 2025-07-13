import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './flex.module.scss';
import type { FlexDirectionType } from './flex-direction-type.js';
import type { FlexWrapType } from './flex-wrap-type.js';
import type { FlexJustifyType } from './flex-justify-type.js';
import type { FlexAlignType } from './flex-align-type.js';
import type { FlexAlignContentType } from './flex-align-content-type.js';

export type FlexProps = {
  /**
   * The content to be rendered inside the flex container.
   */
  children?: ReactNode;

  /**
   * The direction in which to lay out the flex items.
   * @default 'row'
   */
  direction?: FlexDirectionType;

  /**
   * Whether to wrap flex items onto multiple lines.
   * @default 'nowrap'
   */
  wrap?: FlexWrapType;

  /**
   * How to distribute space along the main axis.
   * @default 'flex-start'
   */
  justifyContent?: FlexJustifyType;

  /**
   * How to align items along the cross axis.
   * @default 'stretch'
   */
  alignItems?: FlexAlignType;

  /**
   * How to distribute space between and around content items along the cross-axis when there are multiple lines.
   */
  alignContent?: FlexAlignContentType;

  /**
   * The gap between flex items (in CSS units).
   */
  gap?: string;

  /**
   * The row gap between flex items (in CSS units).
   */
  rowGap?: string;

  /**
   * The column gap between flex items (in CSS units).
   */
  columnGap?: string;
  
  /**
   * Custom CSS class name.
   */
  className?: string;
  
  /**
   * Custom inline styles for the flex container.
   */
  style?: CSSProperties;
  
  /**
   * The HTML element to render the flex container as.
   * @default 'div'
   */
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * A flexible layout component for arranging elements in rows and columns.
 * Provides a simple API to control the flexbox properties.
 */
export function Flex({
  children,
  direction = 'row',
  wrap = 'nowrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  alignContent,
  gap,
  rowGap,
  columnGap,
  className,
  style,
  as = 'div'
}: FlexProps) {
  const Component = as;
  
  // Map direction values to corresponding CSS class names
  const directionClass = {
    'row': styles.row,
    'column': styles.column,
    'row-reverse': styles.rowReverse,
    'column-reverse': styles.columnReverse
  }[direction];
  
  // Map wrap values to corresponding CSS class names
  const wrapClass = {
    'wrap': styles.wrap,
    'nowrap': styles.nowrap,
    'wrap-reverse': styles.wrapReverse
  }[wrap];
  
  // Map justify-content values to corresponding CSS class names
  const justifyClass = {
    'flex-start': styles.justifyStart,
    'flex-end': styles.justifyEnd,
    'center': styles.justifyCenter,
    'space-between': styles.justifyBetween,
    'space-around': styles.justifyAround,
    'space-evenly': styles.justifyEvenly
  }[justifyContent];
  
  // Map align-items values to corresponding CSS class names
  const alignClass = {
    'flex-start': styles.alignStart,
    'flex-end': styles.alignEnd,
    'center': styles.alignCenter,
    'stretch': styles.alignStretch,
    'baseline': styles.alignBaseline
  }[alignItems];
  
  // Map align-content values to corresponding CSS class names (if provided)
  const contentClass = alignContent ? {
    'flex-start': styles.contentStart,
    'flex-end': styles.contentEnd,
    'center': styles.contentCenter,
    'stretch': styles.contentStretch,
    'space-between': styles.contentBetween,
    'space-around': styles.contentAround,
    'space-evenly': styles.contentEvenly
  }[alignContent] : undefined;
  
  // Create merged inline styles with gap properties
  const inlineStyles: CSSProperties = {
    ...(gap ? { gap } : {}),
    ...(rowGap ? { rowGap } : {}),
    ...(columnGap ? { columnGap } : {}),
    ...style
  };

  return (
    <Component
      className={classNames(
        styles.flex,
        directionClass,
        wrapClass,
        justifyClass,
        alignClass,
        contentClass,
        className
      )}
      style={inlineStyles}
    >
      {children}
    </Component>
  );
}