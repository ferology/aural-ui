<template>
  <div :class="progressClasses">
    <div
      :class="barClasses"
      role="progressbar"
      :aria-valuenow="value"
      :aria-valuemin="0"
      :aria-valuemax="max"
      :style="{ width: `${percentage}%` }"
    >
      <span v-if="showLabel" class="progress-label">{{ Math.round(percentage) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value */
  max?: number;
  /** Progress variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Progress size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Show percentage label */
  showLabel?: boolean;
  /** Striped pattern */
  striped?: boolean;
  /** Animated stripes */
  animated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  max: 100,
  variant: 'default',
  size: 'md',
  className: '',
  showLabel: false,
  striped: false,
  animated: false
});

const percentage = computed(() =>
  Math.min(Math.max((props.value / props.max) * 100, 0), 100)
);

const progressClasses = computed(() => {
  const classes = ['progress', `progress-${props.size}`];

  if (props.className) {
    classes.push(props.className);
  }

  return classes.join(' ');
});

const barClasses = computed(() => {
  const classes = ['progress-bar'];

  if (props.variant !== 'default') {
    classes.push(`progress-bar-${props.variant}`);
  }

  if (props.striped) {
    classes.push('progress-bar-striped');
  }

  if (props.animated) {
    classes.push('progress-bar-animated');
  }

  return classes.join(' ');
});
</script>
