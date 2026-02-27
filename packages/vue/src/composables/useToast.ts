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
 * useToast Composable
 *
 * Provides methods to show toast notifications.
 * Wraps the vanilla Aural.showToast API.
 *
 * @returns Toast control methods
 *
 * @example
 * ```vue
 * <script setup>
 * import { useToast } from '@aural-ui/vue';
 *
 * const toast = useToast();
 * </script>
 *
 * <template>
 *   <button @click="toast.success('Saved!')">
 *     Save
 *   </button>
 * </template>
 * ```
 */
export function useToast(): UseToastReturn {
  const showToast = (options: ShowToastOptions | string) => {
    if (typeof window.Aural === 'undefined') {
      console.warn('Aural is not loaded. Toast will not function correctly.');
      return;
    }

    if (typeof options === 'string') {
      window.Aural.showToast(options);
    } else {
      const { message, type = 'info', title = null, duration = 5000 } = options;
      window.Aural.showToast(message, type, title, duration);
    }
  };

  const success = (message: string, title?: string) => {
    showToast({ message, type: 'success', title });
  };

  const error = (message: string, title?: string) => {
    showToast({ message, type: 'error', title });
  };

  const warning = (message: string, title?: string) => {
    showToast({ message, type: 'warning', title });
  };

  const info = (message: string, title?: string) => {
    showToast({ message, type: 'info', title });
  };

  return {
    showToast,
    success,
    error,
    warning,
    info
  };
}
