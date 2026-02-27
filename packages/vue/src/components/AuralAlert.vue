<template>
  <div v-if="isVisible" :class="alertClasses" role="alert">
    <div v-if="$slots.icon" class="alert-icon">
      <slot name="icon" />
    </div>
    <div class="alert-content">
      <div v-if="title" class="alert-title">{{ title }}</div>
      <div class="alert-message">
        <slot />
      </div>
    </div>
    <button
      v-if="closable"
      type="button"
      class="alert-close"
      @click="handleClose"
      aria-label="Close alert"
    >
      &times;
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

export interface Props {
  /** Alert variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Alert title */
  title?: string;
  /** Additional CSS classes */
  className?: string;
  /** Show close button */
  closable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  className: '',
  closable: false
});

const emit = defineEmits<{
  close: [];
}>();

const isVisible = ref(true);

const alertClasses = computed(() => {
  const classes = ['alert', `alert-${props.variant}`];

  if (props.className) {
    classes.push(props.className);
  }

  return classes.join(' ');
});

const handleClose = () => {
  isVisible.value = false;
  emit('close');
};
</script>
