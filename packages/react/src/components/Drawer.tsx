import React, { useEffect, useRef } from 'react';

export interface DrawerProps {
  /** Unique identifier */
  id: string;
  /** Controls drawer visibility */
  isOpen: boolean;
  /** Callback when drawer requests to close */
  onClose: () => void;
  /** Drawer title */
  title?: string;
  /** Drawer position */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /** Drawer content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Show close button */
  showCloseButton?: boolean;
  /** Footer content */
  footer?: React.ReactNode;
}

/**
 * Drawer Component
 *
 * Sliding panel from edge of screen.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Drawer
 *   id="my-drawer"
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   position="right"
 *   title="Settings"
 * >
 *   <p>Drawer content</p>
 * </Drawer>
 * ```
 */
export const Drawer: React.FC<DrawerProps> = ({
  id,
  isOpen,
  onClose,
  title,
  position = 'right',
  children,
  className = '',
  showCloseButton = true,
  footer
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    if (typeof window.Aural === 'undefined') return;

    if (isOpen) {
      // @ts-ignore
      window.Aural.openDrawer(id);
    } else {
      // @ts-ignore
      window.Aural.closeDrawer(id);
    }
  }, [isOpen, id]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`aural-drawer-backdrop ${isOpen ? 'aural-drawer-backdrop--open' : ''}`}
        onClick={onClose}
      />
      <div
        ref={drawerRef}
        id={id}
        className={`aural-drawer aural-drawer--${position} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${id}-title` : undefined}
      >
        {title && (
          <div className="aural-drawer__header">
            <h2 id={`${id}-title`} className="aural-drawer__title">
              {title}
            </h2>
            {showCloseButton && (
              <button
                type="button"
                className="aural-drawer__close"
                onClick={onClose}
                aria-label="Close drawer"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            )}
          </div>
        )}

        <div className="aural-drawer__body">
          {children}
        </div>

        {footer && (
          <div className="aural-drawer__footer">
            {footer}
          </div>
        )}
      </div>
    </>
  );
};
