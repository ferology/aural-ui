<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="inputId" class="label">
      {{ label }}
    </label>

    <div class="input-wrapper">
      <span v-if="$slots.iconBefore" class="input-icon input-icon-before" aria-hidden="true">
        <slot name="iconBefore" />
      </span>

      <input
        :id="inputId"
        :class="inputClasses"
        :value="modelValue"
        :aria-invalid="error ? 'true' : 'false'"
        :aria-describedby="error ? errorId : helperText ? helperTextId : undefined"
        @input="handleInput"
        v-bind="$attrs"
      />

      <span v-if="$slots.iconAfter" class="input-icon input-icon-after" aria-hidden="true">
        <slot name="iconAfter" />
      </span>
    </div>

    <p v-if="error" :id="errorId" class="form-error" role="alert">
      {{ error }}
    </p>

    <p v-else-if="helperText" :id="helperTextId" class="form-helper">
      {{ helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  modelValue?: string | number;
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  inputSize: 'md',
  fullWidth: false
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
const helperTextId = computed(() => `${inputId.value}-helper`);
const errorId = computed(() => `${inputId.value}-error`);

const inputClasses = computed(() => {
  const classes = ['input'];

  if (props.inputSize !== 'md') {
    classes.push(`input-${props.inputSize}`);
  }

  if (props.error) {
    classes.push('input-error');
  }

  if (props.success) {
    classes.push('input-success');
  }

  return classes.join(' ');
});

const wrapperClasses = computed(() => {
  const classes = ['form-group'];

  if (props.fullWidth) {
    classes.push('w-full');
  }

  return classes.join(' ');
});

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<script lang="ts">
// Disable attribute inheritance since we're applying attrs to input, not root div
export default {
  inheritAttrs: false
};
</script>
