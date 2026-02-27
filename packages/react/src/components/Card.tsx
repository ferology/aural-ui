import React from 'react';

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card header */
  header?: React.ReactNode;
  /** Card footer */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Card variant */
  variant?: 'default' | 'bordered' | 'elevated';
  /** Hoverable effect */
  hoverable?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Card Component
 *
 * Content container with optional header and footer.
 *
 * @example
 * ```tsx
 * <Card
 *   header={<h3>Card Title</h3>}
 *   footer={<button>Action</button>}
 *   hoverable
 * >
 *   <p>Card content</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  className = '',
  variant = 'default',
  hoverable = false,
  onClick
}) => {
  const cardClasses = [
    'card',
    variant !== 'default' ? `card-${variant}` : '',
    hoverable ? 'card-hoverable' : '',
    onClick ? 'cursor-pointer' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
