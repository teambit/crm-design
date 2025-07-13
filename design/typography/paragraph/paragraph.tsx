import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './paragraph.module.scss';

export type ParagraphProps = {
  /**
   * The HTML element to render the paragraph as
   * @default 'p'
   */
  element?: 'p' | 'div' | 'span';

  /**
   * The content of the paragraph
   */
  children: ReactNode;

  /**
   * Custom class name to override styles
   */
  className?: string;

  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
};

export function Paragraph({
  element = 'p',
  children,
  className,
  style,
}: ParagraphProps) {
  const Component = element as keyof React.JSX.IntrinsicElements;

  return (
    <Component 
      className={classNames(styles.paragraph, className)} 
      style={style}
    >
      {children}
    </Component>
  );
}