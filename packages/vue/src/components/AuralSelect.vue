<template>
  <div
    :id="id"
    ref="selectRef"
    :class="['select-custom', className]"
    @keydown="handleKeyDown"
  >
    <button
      type="button"
      class="select-trigger"
      @click="handleToggle"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :disabled="disabled"
    >
      <span>{{ selectedLabel || placeholder }}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        :class="['select-arrow', { 'select-arrow-open': isOpen }]"
      >
        <path d="M5 7l5 5 5-5H5z" />
      </svg>
    </button>

    <div
      class="select-dropdown"
      role="listbox"
      :hidden="!isOpen"
    >
      <div v-if="searchable" class="select-search">
        <input
          ref="searchInputRef"
          type="text"
          class="select-search-input"
          placeholder="Search..."
          v-model="searchTerm"
          @click.stop
        />
      </div>

      <div class="select-options">
        <div
          v-for="option in filteredOptions"
          :key="option.value"
          class="select-option"
          role="option"
          :aria-selected="option.value === modelValue"
          :data-value="option.value"
          :data-disabled="option.disabled || undefined"
          :tabindex="option.disabled ? -1 : 0"
          @click="!option.disabled && handleSelect(option.value)"
          @keydown="handleOptionKeyDown($event, option)"
        >
          {{ option.label }}
        </div>
        <div v-if="filteredOptions.length === 0" class="select-no-options">
          No options found
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface Props {
  /** Unique identifier */
  id: string;
  /** Select options */
  options: SelectOption[];
  /** Selected value */
  modelValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Search/filter capability */
  searchable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option',
  className: '',
  disabled: false,
  searchable: false
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const selectRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);
const isOpen = ref(false);
const searchTerm = ref('');

const selectedOption = computed(() =>
  props.options.find(opt => opt.value === props.modelValue)
);

const selectedLabel = computed(() => selectedOption.value?.label);

const filteredOptions = computed(() => {
  if (props.searchable && searchTerm.value) {
    return props.options.filter(opt =>
      opt.label.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }
  return props.options;
});

watch(isOpen, async (newValue) => {
  // @ts-ignore
  if (typeof window.Aural === 'undefined') return;

  if (newValue) {
    // @ts-ignore
    window.Aural.openSelect(props.id);
    if (props.searchable) {
      await nextTick();
      searchInputRef.value?.focus();
    }
  } else {
    // @ts-ignore
    window.Aural.closeSelect(props.id);
  }
});

const handleToggle = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
    searchTerm.value = '';
  }
};

const handleSelect = (value: string) => {
  // @ts-ignore
  if (typeof window.Aural !== 'undefined') {
    // @ts-ignore
    window.Aural.selectOption(props.id, value);
  }
  emit('update:modelValue', value);
  isOpen.value = false;
  searchTerm.value = '';
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    isOpen.value = false;
    searchTerm.value = '';
  }
};

const handleOptionKeyDown = (e: KeyboardEvent, option: SelectOption) => {
  if ((e.key === 'Enter' || e.key === ' ') && !option.disabled) {
    e.preventDefault();
    handleSelect(option.value);
  }
};

const handleClickOutside = (e: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isOpen.value = false;
    searchTerm.value = '';
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
