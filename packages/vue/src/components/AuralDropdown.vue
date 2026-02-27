<template>
  <div
    :id="id"
    :class="`dropdown ${className}`"
    ref="dropdownRef"
  >
    <div class="dropdown-trigger">
      <slot name="trigger" :toggle="toggle" :isOpen="modelValue" />
    </div>

    <div
      :class="`dropdown-menu ${align === 'right' ? 'dropdown-menu-right' : ''}`"
      :hidden="!modelValue"
    >
      <template v-if="items">
        <template v-for="(item, index) in items" :key="index">
          <a
            v-if="item.href"
            :href="item.href"
            :class="`dropdown-item ${item.disabled ? 'disabled' : ''}`"
            @click="handleItemClick(item, $event)"
          >
            <span v-if="item.icon" class="dropdown-icon">
              {{ item.icon }}
            </span>
            {{ item.label }}
          </a>
          <button
            v-else
            type="button"
            :class="`dropdown-item ${item.disabled ? 'disabled' : ''}`"
            :disabled="item.disabled"
            @click="handleItemClick(item)"
          >
            <span v-if="item.icon" class="dropdown-icon">
              {{ item.icon }}
            </span>
            {{ item.label }}
          </button>
          <div v-if="item.divider" class="dropdown-divider" />
        </template>
      </template>
      <slot v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

export interface DropdownItem {
  label: string;
  onClick?: () => void;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  href?: string;
}

export interface Props {
  id: string;
  modelValue: boolean;
  items?: DropdownItem[];
  align?: 'left' | 'right';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  align: 'left',
  className: ''
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const dropdownRef = ref<HTMLElement | null>(null);

// Sync with Aural
watch(() => props.modelValue, (isOpen) => {
  if (typeof window.Aural === 'undefined') return;

  if (isOpen) {
    window.Aural.openDropdown(props.id);
  } else {
    window.Aural.closeDropdown(props.id);
  }
});

const toggle = () => {
  emit('update:modelValue', !props.modelValue);
};

const close = () => {
  emit('update:modelValue', false);
};

const handleItemClick = (item: DropdownItem, event?: Event) => {
  if (item.disabled) {
    event?.preventDefault();
    return;
  }
  item.onClick?.();
  close();
};

// Click outside to close
const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    close();
  }
};

// Escape key to close
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    close();
  }
};

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
  }
});

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscape);
  }
});
</script>
