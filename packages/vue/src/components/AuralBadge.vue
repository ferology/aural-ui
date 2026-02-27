<template>
  <span :class="badgeClasses">
    <slot v-if="!dot" />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  /** Badge variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Pill shape */
  pill?: boolean;
  /** Dot style (no text) */
  dot?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  className: '',
  pill: false,
  dot: false
});

const badgeClasses = computed(() => {
  const classes = ['badge'];

  if (props.variant !== 'default') {
    classes.push(`badge-${props.variant}`);
  }

  if (props.size !== 'md') {
    classes.push(`badge-${props.size}`);
  }

  if (props.pill) {
    classes.push('badge-pill');
  }

  if (props.dot) {
    classes.push('badge-dot');
  }

  if (props.className) {
    classes.push(props.className);
  }

  return classes.join(' ');
});
</script>
