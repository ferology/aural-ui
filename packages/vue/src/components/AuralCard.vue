<template>
  <div :class="cardClasses" @click="handleClick">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  /** Card variant */
  variant?: 'default' | 'bordered' | 'elevated';
  /** Hoverable effect */
  hoverable?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hoverable: false,
  className: ''
});

const emit = defineEmits<{
  click: [];
}>();

const cardClasses = computed(() => {
  const classes = ['card'];

  if (props.variant !== 'default') {
    classes.push(`card-${props.variant}`);
  }

  if (props.hoverable) {
    classes.push('card-hoverable');
  }

  if (props.className) {
    classes.push(props.className);
  }

  return classes.join(' ');
});

const handleClick = () => {
  emit('click');
};
</script>
