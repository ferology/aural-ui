import React from 'react';

export interface SpinnerProps {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Spinner variant */
  variant?: 'primary' | 'secondary' | 'white';
  /** Additional CSS classes */
  className?: string;
  /** Screen reader label */
  label?: string;
}

/**
 * Spinner Component
 *
 * Loading indicator.
 *
 * @example
 * ```tsx
 * <Spinner size="lg" variant="primary" label="Loading..." />
 * ```
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  className = '',
  label = 'Loading...'
}) => {
  const spinnerClasses = [
    'spinner',
    `spinner-${size}`,
    `spinner-${variant}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={spinnerClasses} role="status" aria-label={label}>
      <svg className="spinner-svg" viewBox="0 0 50 50">
        <circle
          className="spinner-circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
};
