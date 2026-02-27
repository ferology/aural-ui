<template>
  <div :class="avatarClasses">
    <img v-if="src" :src="src" :alt="alt" class="avatar-image" />
    <span v-else-if="initials" class="avatar-initials">{{ initials }}</span>
    <span v-else class="avatar-placeholder">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    </span>
    <span v-if="status" :class="['avatar-status', `avatar-status-${status}`]" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  /** Avatar image source */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Initials to display */
  initials?: string;
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Avatar shape */
  shape?: 'circle' | 'square' | 'rounded';
  /** Additional CSS classes */
  className?: string;
  /** Status indicator */
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  size: 'md',
  shape: 'circle',
  className: ''
});

const avatarClasses = computed(() => {
  const classes = [
    'avatar',
    `avatar-${props.size}`,
    `avatar-${props.shape}`
  ];

  if (props.status) {
    classes.push('avatar-with-status');
  }

  if (props.className) {
    classes.push(props.className);
  }

  return classes.join(' ');
});
</script>
