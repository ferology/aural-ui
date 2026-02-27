<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="btn-spinner" aria-hidden="true">
      <span class="spinner-dot"></span>
      <span class="spinner-dot"></span>
      <span class="spinner-dot"></span>
    </span>
    <span v-if="!loading && $slots.iconBefore" class="btn-icon-before">
      <slot name="iconBefore" />
    </span>
    <slot />
    <span v-if="!loading && $slots.iconAfter" class="btn-icon-after">
      <slot name="iconAfter" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'link';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Loading state */
  loading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  fullWidth: false,
  disabled: false
});

const buttonClasses = computed(() => {
  const classes = ['btn', `btn-${props.variant}`];

  if (props.size !== 'md') {
    classes.push(`btn-${props.size}`);
  }

  if (props.fullWidth) {
    classes.push('btn-block');
  }

  if (props.loading) {
    classes.push('btn-loading');
  }

  return classes.join(' ');
});
</script>
