import React, { useState } from 'react';

export interface AlertProps {
  /** Alert content */
  children: React.ReactNode;
  /** Alert variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Alert title */
  title?: string;
  /** Additional CSS classes */
  className?: string;
  /** Show close button */
  closable?: boolean;
  /** Callback when closed */
  onClose?: () => void;
  /** Icon to display */
  icon?: React.ReactNode;
}

/**
 * Alert Component
 *
 * Contextual feedback message.
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!">
 *   Your changes have been saved.
 * </Alert>
 * <Alert variant="error" closable>
 *   Something went wrong.
 * </Alert>
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  title,
  className = '',
  closable = false,
  onClose,
  icon
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const alertClasses = [
    'alert',
    `alert-${variant}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={alertClasses} role="alert">
      {icon && <div className="alert-icon">{icon}</div>}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {closable && (
        <button
          type="button"
          className="alert-close"
          onClick={handleClose}
          aria-label="Close alert"
        >
          &times;
        </button>
      )}
    </div>
  );
};
