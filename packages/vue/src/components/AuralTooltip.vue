<template>
  <div class="tooltip-wrapper">
    <div
      :id="triggerId"
      ref="triggerRef"
      data-tooltip-trigger
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
    >
      <slot />
    </div>
    <div
      :class="['tooltip', `tooltip-${position}`, { 'tooltip-show': isVisible }, className]"
      role="tooltip"
    >
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, computed } from 'vue';

export interface Props {
  /** Tooltip content */
  content: string;
  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Delay before showing (ms) */
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  className: '',
  delay: 0
});

const triggerRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const triggerId = computed(() => `tooltip-trigger-${Math.random().toString(36).substr(2, 9)}`);
let timeoutId: NodeJS.Timeout | null = null;

const showTooltip = () => {
  if (props.delay > 0) {
    timeoutId = setTimeout(() => {
      isVisible.value = true;
      // @ts-ignore
      if (typeof window.Aural !== 'undefined') {
        // @ts-ignore
        window.Aural.showTooltip(triggerId.value);
      }
    }, props.delay);
  } else {
    isVisible.value = true;
    // @ts-ignore
    if (typeof window.Aural !== 'undefined') {
      // @ts-ignore
      window.Aural.showTooltip(triggerId.value);
    }
  }
};

const hideTooltip = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  isVisible.value = false;
  // @ts-ignore
  if (typeof window.Aural !== 'undefined') {
    // @ts-ignore
    window.Aural.hideTooltip(triggerId.value);
  }
};

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>
