import { useState, useCallback } from 'react';

export interface UseDropdownReturn {
  /** Current open state */
  isOpen: boolean;
  /** Open the dropdown */
  open: () => void;
  /** Close the dropdown */
  close: () => void;
  /** Toggle the dropdown */
  toggle: () => void;
}

/**
 * useDropdown Hook
 *
 * Manages dropdown open/close state with convenient methods.
 *
 * @param initialOpen - Initial open state (default: false)
 * @returns Dropdown state and control methods
 *
 * @example
 * ```tsx
 * const dropdown = useDropdown();
 *
 * <Dropdown
 *   id="my-dropdown"
 *   isOpen={dropdown.isOpen}
 *   onClose={dropdown.close}
 *   trigger={<button onClick={dropdown.toggle}>Menu</button>}
 *   items={menuItems}
 * />
 * ```
 */
export function useDropdown(initialOpen = false): UseDropdownReturn {
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
