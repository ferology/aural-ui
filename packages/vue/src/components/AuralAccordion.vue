<template>
  <div :class="`accordion ${allowMultiple ? 'accordion-always-open' : ''} ${className}`">
    <div
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      class="accordion-item"
    >
      <button
        type="button"
        class="accordion-header"
        :aria-expanded="isExpanded(item.id)"
        :aria-controls="`panel-${item.id}`"
        @click="toggleItem(item.id)"
      >
        <slot :name="`header-${item.id}`">
          {{ item.header }}
        </slot>
        <span class="accordion-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        :id="`panel-${item.id}`"
        class="accordion-panel"
        role="region"
        :aria-labelledby="item.id"
        :hidden="!isExpanded(item.id)"
      >
        <slot :name="`content-${item.id}`">
          {{ item.content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

export interface AccordionItem {
  id: string;
  header: string;
  content?: any;
  defaultExpanded?: boolean;
}

export interface Props {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  expandedItems?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  allowMultiple: false,
  className: ''
});

const emit = defineEmits<{
  'update:expandedItems': [value: string[]];
  'change': [expandedItems: string[]];
}>();

// Determine if controlled
const isControlled = computed(() => props.expandedItems !== undefined);

// Internal state
const internalExpandedItems = ref<string[]>(
  props.items.filter(item => item.defaultExpanded).map(item => item.id)
);

const expandedItems = computed(() =>
  isControlled.value ? props.expandedItems! : internalExpandedItems.value
);

const isExpanded = (itemId: string) => {
  return expandedItems.value.includes(itemId);
};

const toggleItem = (itemId: string) => {
  const currentlyExpanded = isExpanded(itemId);
  let newExpandedItems: string[];

  if (currentlyExpanded) {
    // Collapse
    newExpandedItems = expandedItems.value.filter(id => id !== itemId);
  } else {
    // Expand
    if (props.allowMultiple) {
      newExpandedItems = [...expandedItems.value, itemId];
    } else {
      newExpandedItems = [itemId];
    }
  }

  if (!isControlled.value) {
    internalExpandedItems.value = newExpandedItems;
  }
  emit('update:expandedItems', newExpandedItems);
  emit('change', newExpandedItems);
};

// Sync with Aural
watch(expandedItems, (items) => {
  if (typeof window.Aural === 'undefined') return;

  props.items.forEach(item => {
    if (items.includes(item.id)) {
      window.Aural.openAccordion(item.id);
    } else {
      window.Aural.closeAccordion(item.id);
    }
  });
}, { immediate: true });
</script>
