import React from 'react';

export interface DividerProps {
  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Divider variant */
  variant?: 'solid' | 'dashed' | 'dotted';
  /** Text to display in divider */
  children?: React.ReactNode;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Divider Component
 *
 * Visual separator with optional text.
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider>OR</Divider>
 * <Divider orientation="vertical" />
 * ```
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  children,
  align = 'center',
  className = ''
}) => {
  const dividerClasses = [
    'divider',
    `divider-${orientation}`,
    `divider-${variant}`,
    children ? `divider-with-text divider-text-${align}` : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  if (children && orientation === 'horizontal') {
    return (
      <div className={dividerClasses} role="separator">
        <span className="divider-text">{children}</span>
      </div>
    );
  }

  return <hr className={dividerClasses} role="separator" />;
};
