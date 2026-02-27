import { useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ShowToastOptions {
  /** Toast message */
  message: string;
  /** Toast type/variant */
  type?: ToastType;
  /** Optional title (defaults to type name) */
  title?: string | null;
  /** Auto-dismiss duration in ms (0 = no auto-dismiss) */
  duration?: number;
}

export interface UseToastReturn {
  /** Show a toast notification */
  showToast: (options: ShowToastOptions | string) => void;
  /** Show a success toast */
  success: (message: string, title?: string) => void;
  /** Show an error toast */
  error: (message: string, title?: string) => void;
  /** Show a warning toast */
  warning: (message: string, title?: string) => void;
  /** Show an info toast */
  info: (message: string, title?: string) => void;
}

/**
 * useToast Hook
 *
 * Provides methods to show toast notifications.
 * Wraps the vanilla Aural.showToast API.
 *
 * @returns Toast control methods
 *
 * @example
 * ```tsx
 * const toast = useToast();
 *
 * <button onClick={() => toast.success('Saved!')}>
 *   Save
 * </button>
 *
 * <button onClick={() => toast.showToast({
 *   message: 'Custom toast',
 *   type: 'warning',
 *   duration: 3000
 * })}>
 *   Show Custom Toast
 * </button>
 * ```
 */
export function useToast(): UseToastReturn {
  const showToast = useCallback((options: ShowToastOptions | string) => {
    // @ts-ignore - Aural is loaded globally
    if (typeof window.Aural === 'undefined') {
      console.warn('Aural is not loaded. Toast will not function correctly.');
      return;
    }

    if (typeof options === 'string') {
      // @ts-ignore
      window.Aural.showToast(options);
    } else {
      const { message, type = 'info', title = null, duration = 5000 } = options;
      // @ts-ignore
      window.Aural.showToast(message, type, title, duration);
    }
  }, []);

  const success = useCallback((message: string, title?: string) => {
    showToast({ message, type: 'success', title });
  }, [showToast]);

  const error = useCallback((message: string, title?: string) => {
    showToast({ message, type: 'error', title });
  }, [showToast]);

  const warning = useCallback((message: string, title?: string) => {
    showToast({ message, type: 'warning', title });
  }, [showToast]);

  const info = useCallback((message: string, title?: string) => {
    showToast({ message, type: 'info', title });
  }, [showToast]);

  return {
    showToast,
    success,
    error,
    warning,
    info
  };
}
