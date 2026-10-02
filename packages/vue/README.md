# @aural-ui/vue

Vue 3 components and composables for Aural UI design system.

## Installation

```bash
npm install @aural-ui/vue @aural-ui/core
```

## Usage

### Import CSS

```ts
// In your main.ts
import '@aural-ui/core/css';
import '@aural-ui/core/themes/dark.css'; // or any theme
```

### Components

#### Modal

```vue
<script setup>
import { ref } from 'vue';
import { AuralModal } from '@aural-ui/vue';

const isOpen = ref(false);
</script>

<template>
  <button @click="isOpen = true">Open Modal</button>

  <AuralModal id="my-modal" v-model="isOpen" title="Confirm Action">
    <p>Are you sure you want to continue?</p>

    <template #footer>
      <button @click="isOpen = false">Cancel</button>
      <button class="btn btn-primary" @click="handleConfirm">Confirm</button>
    </template>
  </AuralModal>
</template>
```

#### Button

```vue
<script setup>
import { AuralButton } from '@aural-ui/vue';
</script>

<template>
  <AuralButton variant="primary" @click="handleClick"> Click Me </AuralButton>

  <AuralButton variant="secondary" size="lg" :loading="true"> Loading... </AuralButton>
</template>
```

### Composables

#### useModal

```vue
<script setup>
import { useModal, AuralModal } from '@aural-ui/vue';

const modal = useModal();
</script>

<template>
  <button @click="modal.open">Open Modal</button>

  <AuralModal v-model="modal.isOpen.value" id="my-modal"> Content </AuralModal>
</template>
```

#### useToast

```vue
<script setup>
import { useToast } from '@aural-ui/vue';

const toast = useToast();
</script>

<template>
  <button @click="toast.success('Saved successfully!')">Save</button>

  <button @click="toast.error('Failed to save', 'Error')">Error</button>

  <button
    @click="
      toast.showToast({
        message: 'Custom notification',
        type: 'warning',
        duration: 3000,
      })
    "
  >
    Custom Toast
  </button>
</template>
```

## Components Available

- ✅ **AuralModal** - Accessible dialog with focus trapping
- ✅ **AuralButton** - Button with variants and states
- 🚧 **AuralDropdown** - Coming soon
- 🚧 **AuralTabs** - Coming soon

## Composables Available

- ✅ **useModal** - Modal state management
- ✅ **useToast** - Toast notifications
- 🚧 **useDropdown** - Coming soon

## License

MIT
