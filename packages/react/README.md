# @aural-ui/react

React components and hooks for Aural UI design system.

## Installation

```bash
npm install @aural-ui/react @aural-ui/core
```

## Usage

### Import CSS

```tsx
// In your main App.tsx or index.tsx
import '@aural-ui/core/css';
import '@aural-ui/core/themes/dark.css'; // or any theme
```

### Components

#### Modal

```tsx
import { Modal, useModal } from '@aural-ui/react';

function App() {
  const modal = useModal();

  return (
    <>
      <button onClick={modal.open}>Open Modal</button>

      <Modal
        id="my-modal"
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Confirm Action"
        footer={
          <>
            <button onClick={modal.close}>Cancel</button>
            <button className="btn btn-primary" onClick={handleConfirm}>
              Confirm
            </button>
          </>
        }
      >
        <p>Are you sure you want to continue?</p>
      </Modal>
    </>
  );
}
```

#### Button

```tsx
import { Button } from '@aural-ui/react';

<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

<Button variant="secondary" size="lg" loading>
  Loading...
</Button>
```

### Hooks

#### useToast

```tsx
import { useToast } from '@aural-ui/react';

function App() {
  const toast = useToast();

  return (
    <>
      <button onClick={() => toast.success('Saved successfully!')}>
        Save
      </button>

      <button onClick={() => toast.error('Failed to save', 'Error')}>
        Error
      </button>

      <button onClick={() => toast.showToast({
        message: 'Custom notification',
        type: 'warning',
        duration: 3000
      })}>
        Custom Toast
      </button>
    </>
  );
}
```

## Components Available

- ✅ **Modal** - Accessible dialog with focus trapping
- ✅ **Button** - Button with variants and states
- 🚧 **Dropdown** - Coming soon
- 🚧 **Tabs** - Coming soon
- 🚧 **More components** - In development

## Hooks Available

- ✅ **useModal** - Modal state management
- ✅ **useToast** - Toast notifications
- 🚧 **useCarousel** - Coming soon

## License

MIT
