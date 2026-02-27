<template>
  <div>
    <div
      :class="['aural-drawer-backdrop', { 'aural-drawer-backdrop--open': modelValue }]"
      @click="handleClose"
    />
    <div
      :id="id"
      :class="['aural-drawer', `aural-drawer--${position}`, className]"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title ? `${id}-title` : undefined"
    >
      <div v-if="title" class="aural-drawer__header">
        <h2 :id="`${id}-title`" class="aural-drawer__title">
          {{ title }}
        </h2>
        <button
          v-if="showCloseButton"
          type="button"
          class="aural-drawer__close"
          @click="handleClose"
          aria-label="Close drawer"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="aural-drawer__body">
        <slot />
      </div>

      <div v-if="$slots.footer" class="aural-drawer__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue';

export interface Props {
  /** Unique identifier */
  id: string;
  /** Controls drawer visibility */
  modelValue: boolean;
  /** Drawer title */
  title?: string;
  /** Drawer position */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /** Additional CSS classes */
  className?: string;
  /** Show close button */
  showCloseButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'right',
  className: '',
  showCloseButton: true
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const handleClose = () => {
  emit('update:modelValue', false);
};

watch(() => props.modelValue, (isOpen) => {
  // @ts-ignore
  if (typeof window.Aural === 'undefined') return;

  if (isOpen) {
    // @ts-ignore
    window.Aural.openDrawer(props.id);
  } else {
    // @ts-ignore
    window.Aural.closeDrawer(props.id);
  }
});

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    handleClose();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>
