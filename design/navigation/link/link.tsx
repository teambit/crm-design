import React, { forwardRef } from 'react';
import { Link as RouterLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import styles from './link.module.scss';

export type LinkProps = {
  /**
   * URL or path to link to
   */
  href: string;
  /**
   * Indicates if the link points to an external resource
   */
  external?: boolean;
  /**
   * Link content
   */
  children: React.ReactNode;
  /**
   * Target attribute for the link
   */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /**
   * Relationship attribute for the link
   */
  rel?: string;
  /**
   * Click event handler
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /**
   * Additional class name for styling
   */
  className?: string;
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, external = false, children, target, rel, onClick, className, style }, ref) => {
    const isExternal = external || href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    const externalLinkProps = isExternal ? {
      target: target || '_blank',
      rel: rel || 'noopener noreferrer'
    } : {};

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(event);
      }
    };

    if (isExternal) {
      return (
        <a 
          ref={ref}
          href={href}
          className={classNames(styles.link, className)}
          onClick={handleClick}
          style={style}
          {...externalLinkProps}
        >
          {children}
        </a>
      );
    }

    return (
      <RouterLink
        ref={ref}
        to={href}
        className={classNames(styles.link, className)}
        onClick={handleClick}
        style={style}
        target={target}
        rel={rel}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';

// Re-export React Router hooks
export { useLocation, useNavigate, useParams, useSearchParams };