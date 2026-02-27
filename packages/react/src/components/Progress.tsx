import React from 'react';

export interface ProgressProps {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value */
  max?: number;
  /** Progress variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Progress size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Show percentage label */
  showLabel?: boolean;
  /** Striped pattern */
  striped?: boolean;
  /** Animated stripes */
  animated?: boolean;
}

/**
 * Progress Component
 *
 * Progress bar indicator.
 *
 * @example
 * ```tsx
 * <Progress value={75} variant="success" showLabel />
 * <Progress value={50} striped animated />
 * ```
 */
export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  className = '',
  showLabel = false,
  striped = false,
  animated = false
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const progressClasses = [
    'progress',
    `progress-${size}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const barClasses = [
    'progress-bar',
    variant !== 'default' ? `progress-bar-${variant}` : '',
    striped ? 'progress-bar-striped' : '',
    animated ? 'progress-bar-animated' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={progressClasses}>
      <div
        className={barClasses}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        style={{ width: `${percentage}%` }}
      >
        {showLabel && <span className="progress-label">{Math.round(percentage)}%</span>}
      </div>
    </div>
  );
};
