<template>
  <div v-if="hasSlot && orientation === 'horizontal'" :class="dividerClasses" role="separator">
    <span class="divider-text">
      <slot />
    </span>
  </div>
  <hr v-else :class="dividerClasses" role="separator" />
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

export interface Props {
  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Divider variant */
  variant?: 'solid' | 'dashed' | 'dotted';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  variant: 'solid',
  align: 'center',
  className: ''
});

const slots = useSlots();
const hasSlot = computed(() => !!slots.default);

const dividerClasses = computed(() => {
  const classes = [
    'divider',
    `divider-${props.orientation}`,
    `divider-${props.variant}`
  ];

  if (hasSlot.value) {
    classes.push('divider-with-text', `divider-text-${props.align}`);
  }

  if (props.className) {
    classes.push(props.className);
  }

  return classes.join(' ');
});
</script>
