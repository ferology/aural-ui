<template>
  <div class="popover-wrapper" ref="wrapperRef">
    <div
      :id="triggerId"
      data-popover-trigger
      @click="handleToggle"
    >
      <slot name="trigger" />
    </div>
    <div
      :class="['popover', `popover-${position}`, { 'popover-show': isOpen }, className]"
      :hidden="!isOpen"
      role="dialog"
      :aria-labelledby="triggerId"
    >
      <button
        v-if="showCloseButton"
        type="button"
        class="popover-close"
        @click="handleClose"
        aria-label="Close popover"
      >
        &times;
      </button>
      <div class="popover-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from 'vue';

export interface Props {
  /** Unique identifier */
  id: string;
  /** Controls popover visibility */
  modelValue?: boolean;
  /** Popover position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Show close button */
  showCloseButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
  className: '',
  showCloseButton: true
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const wrapperRef = ref<HTMLElement | null>(null);
const internalIsOpen = ref(false);
const isControlled = computed(() => props.modelValue !== undefined);
const isOpen = computed(() => isControlled.value ? props.modelValue : internalIsOpen.value);
const triggerId = computed(() => `${props.id}-trigger`);

const handleToggle = () => {
  if (isControlled.value) {
    emit('update:modelValue', !props.modelValue);
  } else {
    internalIsOpen.value = !internalIsOpen.value;
  }
};

const handleClose = () => {
  if (isControlled.value) {
    emit('update:modelValue', false);
  } else {
    internalIsOpen.value = false;
  }
};

watch(isOpen, (newValue) => {
  // @ts-ignore
  if (typeof window.Aural === 'undefined') return;

  if (newValue) {
    // @ts-ignore
    window.Aural.showPopover(triggerId.value);
  } else {
    // @ts-ignore
    window.Aural.hidePopover(triggerId.value);
  }
});

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    handleClose();
  }
};

const handleClickOutside = (e: MouseEvent) => {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    handleClose();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  document.removeEventListener('click', handleClickOutside);
});
</script>
