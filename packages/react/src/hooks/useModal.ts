import { useState, useCallback } from 'react';

export interface UseModalReturn {
  /** Current open state */
  isOpen: boolean;
  /** Open the modal */
  open: () => void;
  /** Close the modal */
  close: () => void;
  /** Toggle the modal */
  toggle: () => void;
}

/**
 * useModal Hook
 *
 * Manages modal open/close state with convenient methods.
 *
 * @param initialOpen - Initial open state (default: false)
 * @returns Modal state and control methods
 *
 * @example
 * ```tsx
 * const modal = useModal();
 *
 * <button onClick={modal.open}>Open Modal</button>
 * <Modal id="my-modal" isOpen={modal.isOpen} onClose={modal.close}>
 *   Content
 * </Modal>
 * ```
 */
export function useModal(initialOpen = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle
  };
}
