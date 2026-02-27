import { ref } from 'vue';

export interface UseDropdownReturn {
  /** Current open state */
  isOpen: Ref<boolean>;
  /** Open the dropdown */
  open: () => void;
  /** Close the dropdown */
  close: () => void;
  /** Toggle the dropdown */
  toggle: () => void;
}

/**
 * useDropdown Composable
 *
 * Manages dropdown open/close state with convenient methods.
 *
 * @param initialOpen - Initial open state (default: false)
 * @returns Dropdown state and control methods
 *
 * @example
 * ```vue
 * <script setup>
 * import { useDropdown } from '@aural-ui/vue';
 *
 * const dropdown = useDropdown();
 * </script>
 *
 * <template>
 *   <AuralDropdown v-model="dropdown.isOpen.value" id="my-dropdown">
 *     <template #trigger="{ toggle }">
 *       <button @click="toggle">Menu</button>
 *     </template>
 *     <div>Content</div>
 *   </AuralDropdown>
 * </template>
 * ```
 */
export function useDropdown(initialOpen = false): UseDropdownReturn {
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
