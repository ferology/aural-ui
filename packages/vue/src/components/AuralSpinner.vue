<template>
  <div :class="spinnerClasses" role="status" :aria-label="label">
    <svg class="spinner-svg" viewBox="0 0 50 50">
      <circle
        class="spinner-circle"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </svg>
    <span class="sr-only">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Spinner variant */
  variant?: 'primary' | 'secondary' | 'white';
  /** Additional CSS classes */
  className?: string;
  /** Screen reader label */
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  className: '',
  label: 'Loading...'
});

const spinnerClasses = computed(() => {
  const classes = [
    'spinner',
    `spinner-${props.size}`,
    `spinner-${props.variant}`
  ];

  if (props.className) {
    classes.push(props.className);
  }

  return classes.join(' ');
});
</script>
