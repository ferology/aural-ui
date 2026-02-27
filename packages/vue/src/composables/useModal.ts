import { ref } from 'vue';

export interface UseModalReturn {
  /** Current open state */
  isOpen: Ref<boolean>;
  /** Open the modal */
  open: () => void;
  /** Close the modal */
  close: () => void;
  /** Toggle the modal */
  toggle: () => void;
}

/**
 * useModal Composable
 *
 * Manages modal open/close state with convenient methods.
 *
 * @param initialOpen - Initial open state (default: false)
 * @returns Modal state and control methods
 *
 * @example
 * ```vue
 * <script setup>
 * import { useModal } from '@aural-ui/vue';
 *
 * const modal = useModal();
 * </script>
 *
 * <template>
 *   <button @click="modal.open">Open Modal</button>
 *   <AuralModal v-model="modal.isOpen.value" id="my-modal">
 *     Content
 *   </AuralModal>
 * </template>
 * ```
 */
export function useModal(initialOpen = false): UseModalReturn {
  const isOpen = ref(initialOpen);

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
  };

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    open,
    close,
    toggle
  };
}
