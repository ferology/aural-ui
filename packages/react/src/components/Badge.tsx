import React from 'react';

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Badge variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Pill shape */
  pill?: boolean;
  /** Dot style (no text) */
  dot?: boolean;
}

/**
 * Badge Component
 *
 * Small status indicator or label.
 *
 * @example
 * ```tsx
 * <Badge variant="success">New</Badge>
 * <Badge dot variant="error" />
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  pill = false,
  dot = false
}) => {
  const badgeClasses = [
    'badge',
    variant !== 'default' ? `badge-${variant}` : '',
    size !== 'md' ? `badge-${size}` : '',
    pill ? 'badge-pill' : '',
    dot ? 'badge-dot' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={badgeClasses}>
      {!dot && children}
    </span>
  );
};
