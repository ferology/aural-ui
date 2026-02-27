import React, { useEffect, useRef } from 'react';

export interface ModalProps {
  /** Unique identifier for the modal */
  id: string;
  /** Controls modal visibility */
  isOpen: boolean;
  /** Callback when modal requests to close (Escape key, backdrop click, close button) */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Show close button */
  showCloseButton?: boolean;
  /** Prevent closing on backdrop click */
  disableBackdropClose?: boolean;
  /** Footer content */
  footer?: React.ReactNode;
}

/**
 * Modal Component
 *
 * Accessible dialog component with focus trapping and keyboard support.
 * Wraps the vanilla Aural.openModal/closeModal API.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Modal
 *   id="my-modal"
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Confirm Action"
 * >
 *   <p>Are you sure?</p>
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  onClose,
  title,
  children,
  className = '',
  size = 'md',
  showCloseButton = true,
  disableBackdropClose = false,
  footer
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync isOpen prop with Aural modal state
  useEffect(() => {
    // @ts-ignore - Aural is loaded globally
    if (typeof window.Aural === 'undefined') {
      console.warn('Aural is not loaded. Modal will not function correctly.');
      return;
    }

    if (isOpen) {
      // @ts-ignore
      window.Aural.openModal(id);
    } else {
      // @ts-ignore
      window.Aural.closeModal(id);
    }
  }, [isOpen, id]);

  // Handle Escape key and backdrop clicks
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleBackdropClick = (e: MouseEvent) => {
      if (disableBackdropClose) return;

      const target = e.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      modalRef.current?.addEventListener('click', handleBackdropClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      modalRef.current?.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, onClose, disableBackdropClose]);

  return (
    <div
      ref={modalRef}
      id={id}
      className={`modal-overlay ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <div className={`modal modal-${size}`}>
        {title && (
          <div className="modal-header">
            <h2 id={`${id}-title`} className="modal-title">
              {title}
            </h2>
            {showCloseButton && (
              <button
                type="button"
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            )}
          </div>
        )}

        <div className="modal-body">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
