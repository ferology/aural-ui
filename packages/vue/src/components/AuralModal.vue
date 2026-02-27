<template>
  <div
    :id="id"
    class="modal-overlay"
    :class="className"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="title ? `${id}-title` : undefined"
  >
    <div :class="`modal modal-${size}`">
      <div v-if="title || showCloseButton" class="modal-header">
        <h2 v-if="title" :id="`${id}-title`" class="modal-title">
          {{ title }}
        </h2>
        <button
          v-if="showCloseButton"
          type="button"
          class="modal-close"
          @click="handleClose"
          aria-label="Close modal"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <slot />
      </div>

      <div v-if="$slots.footer" class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue';

export interface Props {
  /** Unique identifier for the modal */
  id: string;
  /** Controls modal visibility */
  modelValue: boolean;
  /** Modal title */
  title?: string;
  /** Additional CSS classes */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Show close button */
  showCloseButton?: boolean;
  /** Prevent closing on backdrop click */
  disableBackdropClose?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: 'md',
  showCloseButton: true,
  disableBackdropClose: false
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'close': [];
}>();

// Sync modelValue with Aural modal state
watch(() => props.modelValue, (isOpen) => {
  if (typeof window.Aural === 'undefined') {
    console.warn('Aural is not loaded. Modal will not function correctly.');
    return;
  }

  if (isOpen) {
    window.Aural.openModal(props.id);
  } else {
    window.Aural.closeModal(props.id);
  }
});

const handleClose = () => {
  emit('update:modelValue', false);
  emit('close');
};

// Handle Escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    handleClose();
  }
};

// Handle backdrop click
const handleBackdropClick = (e: MouseEvent) => {
  if (props.disableBackdropClose) return;

  const target = e.target as HTMLElement;
  if (target.classList.contains('modal-overlay')) {
    handleClose();
  }
};

// Add event listeners when mounted
if (typeof document !== 'undefined') {
  document.addEventListener('keydown', handleEscape);
  document.addEventListener('click', handleBackdropClick);
}

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('keydown', handleEscape);
    document.removeEventListener('click', handleBackdropClick);
  }
});
</script>
