<template>
  <div :class="`tabs ${className}`">
    <div
      :class="`tabs-list tabs-${variant}`"
      role="tablist"
      aria-label="Tabs"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :id="`tab-${tab.id}`"
        type="button"
        role="tab"
        :class="`tab ${activeTab === tab.id ? 'tab-active' : ''}`"
        :aria-selected="activeTab === tab.id"
        :aria-controls="`panel-${tab.id}`"
        :tabindex="activeTab === tab.id ? 0 : -1"
        :disabled="tab.disabled"
        @click="handleTabClick(tab.id, tab.disabled)"
        @keydown="handleKeyDown($event, index)"
      >
        <span v-if="tab.icon" class="tab-icon">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>
    </div>

    <div class="tabs-content">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :id="`panel-${tab.id}`"
        role="tabpanel"
        :aria-labelledby="`tab-${tab.id}`"
        :hidden="activeTab !== tab.id"
        tabindex="0"
      >
        <slot :name="`tab-${tab.id}`">
          {{ tab.content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

export interface Tab {
  id: string;
  label: string;
  content?: any;
  disabled?: boolean;
  icon?: string;
}

export interface Props {
  tabs: Tab[];
  modelValue?: string;
  defaultActiveTab?: string;
  variant?: 'underline' | 'pills' | 'boxed';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'underline',
  className: ''
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'change': [tabId: string];
}>();

// Determine if controlled
const isControlled = computed(() => props.modelValue !== undefined);

// Internal state
const internalActiveTab = ref(
  props.defaultActiveTab || props.tabs[0]?.id || ''
);

const activeTab = computed(() =>
  isControlled.value ? props.modelValue : internalActiveTab.value
);

// Sync with Aural
watch(activeTab, (newTab) => {
  if (typeof window.Aural === 'undefined') return;
  window.Aural.switchTab(`tab-${newTab}`, `panel-${newTab}`);
});

const handleTabClick = (tabId: string, disabled?: boolean) => {
  if (disabled) return;

  if (!isControlled.value) {
    internalActiveTab.value = tabId;
  }
  emit('update:modelValue', tabId);
  emit('change', tabId);
};

const handleKeyDown = (e: KeyboardEvent, currentIndex: number) => {
  let newIndex = currentIndex;

  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      newIndex = currentIndex > 0 ? currentIndex - 1 : props.tabs.length - 1;
      break;
    case 'ArrowRight':
      e.preventDefault();
      newIndex = currentIndex < props.tabs.length - 1 ? currentIndex + 1 : 0;
      break;
    case 'Home':
      e.preventDefault();
      newIndex = 0;
      break;
    case 'End':
      e.preventDefault();
      newIndex = props.tabs.length - 1;
      break;
    default:
      return;
  }

  // Skip disabled tabs
  while (props.tabs[newIndex]?.disabled && newIndex !== currentIndex) {
    if (e.key === 'ArrowLeft' || e.key === 'End') {
      newIndex = newIndex > 0 ? newIndex - 1 : props.tabs.length - 1;
    } else {
      newIndex = newIndex < props.tabs.length - 1 ? newIndex + 1 : 0;
    }
  }

  if (!props.tabs[newIndex]?.disabled) {
    handleTabClick(props.tabs[newIndex].id);
    const tabElement = document.getElementById(`tab-${props.tabs[newIndex].id}`);
    tabElement?.focus();
  }
};
</script>
