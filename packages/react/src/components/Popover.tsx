import React, { useRef, useState, useEffect } from 'react';

export interface PopoverProps {
  /** Unique identifier */
  id: string;
  /** Controls popover visibility */
  isOpen?: boolean;
  /** Callback when popover requests to close */
  onClose?: () => void;
  /** Trigger element */
  trigger: React.ReactElement;
  /** Popover content */
  children: React.ReactNode;
  /** Popover position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Show close button */
  showCloseButton?: boolean;
}

/**
 * Popover Component
 *
 * Floating content container triggered by click.
 *
 * @example
 * ```tsx
 * <Popover
 *   id="my-popover"
 *   trigger={<button>Open</button>}
 *   position="bottom"
 * >
 *   <div>Popover content</div>
 * </Popover>
 * ```
 */
export const Popover: React.FC<PopoverProps> = ({
  id,
  isOpen: controlledIsOpen,
  onClose,
  trigger,
  children,
  position = 'bottom',
  className = '',
  showCloseButton = true
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerId = `${id}-trigger`;

  const handleToggle = () => {
    if (isControlled) {
      onClose?.();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const handleClose = () => {
    if (isControlled) {
      onClose?.();
    } else {
      setInternalIsOpen(false);
    }
  };

  useEffect(() => {
    // @ts-ignore
    if (typeof window.Aural === 'undefined') return;

    if (isOpen) {
      // @ts-ignore
      window.Aural.showPopover(triggerId);
    } else {
      // @ts-ignore
      window.Aural.hidePopover(triggerId);
    }
  }, [isOpen, triggerId]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.closest('.popover-wrapper')?.contains(e.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Clone trigger and add click handler
  const triggerElement = React.cloneElement(trigger, {
    id: triggerId,
    'data-popover-trigger': true,
    onClick: (e: React.MouseEvent) => {
      handleToggle();
      trigger.props.onClick?.(e);
    }
  });

  return (
    <div className="popover-wrapper" ref={popoverRef}>
      {triggerElement}
      <div
        className={`popover popover-${position} ${isOpen ? 'popover-show' : ''} ${className}`}
        hidden={!isOpen}
        role="dialog"
        aria-labelledby={triggerId}
      >
        {showCloseButton && (
          <button
            type="button"
            className="popover-close"
            onClick={handleClose}
            aria-label="Close popover"
          >
            &times;
          </button>
        )}
        <div className="popover-content">
          {children}
        </div>
      </div>
    </div>
  );
};
