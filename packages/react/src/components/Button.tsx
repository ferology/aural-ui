import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'link';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Loading state */
  loading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Icon before text */
  iconBefore?: React.ReactNode;
  /** Icon after text */
  iconAfter?: React.ReactNode;
}

/**
 * Button Component
 *
 * Accessible button with multiple variants and states.
 * Thin wrapper around Aural UI button styles.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click Me
 * </Button>
 *
 * <Button variant="secondary" size="sm" loading>
 *   Loading...
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      iconBefore,
      iconAfter,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = size !== 'md' ? `btn-${size}` : '';
    const fullWidthClass = fullWidth ? 'btn-block' : '';
    const loadingClass = loading ? 'btn-loading' : '';

    const classes = [
      baseClass,
      variantClass,
      sizeClass,
      fullWidthClass,
      loadingClass,
      className
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="btn-spinner" aria-hidden="true">
            <span className="spinner-dot"></span>
            <span className="spinner-dot"></span>
            <span className="spinner-dot"></span>
          </span>
        )}
        {!loading && iconBefore && (
          <span className="btn-icon-before">{iconBefore}</span>
        )}
        {children}
        {!loading && iconAfter && (
          <span className="btn-icon-after">{iconAfter}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
