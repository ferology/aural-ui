import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Switch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Switch Component

iOS-style toggle switches for binary on/off options. Provide immediate visual feedback for settings and feature toggles.
See the **Documentation** tab for complete examples, best practices, and framework-specific code.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<label class="switch">
  <input type="checkbox" class="switch__input" role="switch" checked>
  <div class="switch__track">
    <div class="switch__thumb"></div>
  </div>
  <span class="switch__label">Enable notifications</span>
</label>
\`\`\`

**React:**
\`\`\`jsx
const [enabled, setEnabled] = useState(false);

<label className="switch">
  <input
    type="checkbox"
    className="switch__input"
    role="switch"
    checked={enabled}
    onChange={(e) => setEnabled(e.target.checked)}
  />
  <div className="switch__track">
    <div className="switch__thumb"></div>
  </div>
  <span className="switch__label">Enable notifications</span>
</label>
\`\`\`

**Vue:**
\`\`\`vue
<label class="switch">
  <input
    type="checkbox"
    class="switch__input"
    role="switch"
    v-model="enabled"
  />
  <div class="switch__track">
    <div class="switch__thumb"></div>
  </div>
  <span class="switch__label">Enable notifications</span>
</label>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Switch label text'
    },
    checked: {
      control: 'boolean',
      description: 'Checked state (on/off)'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size'
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position relative to switch'
    },
    description: {
      control: 'text',
      description: 'Optional description text below the label'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant for semantic meaning'
    }
  }
};

export default meta;
type Story = StoryObj;

// Unique ID generator for label association
let idCounter = 0;
const generateId = () => `switch-${Date.now()}-${idCounter++}`;

export const Default: Story = {
  render: (args) => {
    const id = generateId();
    const label = document.createElement('label');
    label.className = 'switch';

    // Add size class
    if (args.size && args.size !== 'md') {
      label.classList.add(`switch-${args.size}`);
    }

    // Add variant class
    if (args.variant && args.variant !== 'default') {
      label.classList.add(`switch-${args.variant}`);
    }

    // Add description class
    if (args.description) {
      label.classList.add('switch-with-description');
    }

    // Add label position class
    if (args.labelPosition === 'left') {
      label.classList.add('switch-label-left');
    }

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'switch__input';
    input.id = id;
    input.checked = args.checked || false;
    input.disabled = args.disabled || false;

    // Add ARIA attributes
    input.setAttribute('role', 'switch');
    input.setAttribute('aria-checked', args.checked ? 'true' : 'false');

    if (args.label) {
      input.setAttribute('aria-labelledby', `${id}-label`);
    }

    if (args.description) {
      const descId = `${id}-desc`;
      input.setAttribute('aria-describedby', descId);
    }

    // Update aria-checked on change
    input.addEventListener('change', () => {
      input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
    });

    const track = document.createElement('div');
    track.className = 'switch__track';

    const thumb = document.createElement('div');
    thumb.className = 'switch__thumb';
    track.appendChild(thumb);

    const labelSpan = document.createElement('span');
    labelSpan.className = 'switch__label';
    labelSpan.id = `${id}-label`;
    labelSpan.textContent = args.label;

    if (args.description) {
      const desc = document.createElement('span');
      desc.className = 'switch__description';
      desc.id = `${id}-desc`;
      desc.textContent = args.description;
      labelSpan.appendChild(desc);
    }

    label.appendChild(input);
    label.appendChild(track);
    if (args.label) {
      label.appendChild(labelSpan);
    }

    return label;
  },
  args: {
    label: 'Enable notifications',
    checked: false,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    description: '',
    variant: 'default'
  }
};

export const Checked: Story = {
  ...Default,
  args: {
    label: 'Dark mode',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
};

export const Disabled: Story = {
  ...Default,
  args: {
    label: 'Disabled switch',
    checked: false,
    disabled: true,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
};

export const DisabledChecked: Story = {
  ...Default,
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
};

export const WithLabel: Story = {
  ...Default,
  args: {
    label: 'Auto-save',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
};

export const WithDescription: Story = {
  ...Default,
  args: {
    label: 'Email notifications',
    description: 'Receive email updates about your account activity',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    variant: 'default'
  }
};

export const LabelLeft: Story = {
  ...Default,
  args: {
    label: 'Label on left',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'left',
    variant: 'default'
  }
};

export const Small: Story = {
  ...Default,
  args: {
    label: 'Small switch',
    checked: true,
    disabled: false,
    size: 'sm',
    labelPosition: 'right',
    variant: 'default'
  }
};

export const Large: Story = {
  ...Default,
  args: {
    label: 'Large switch',
    checked: true,
    disabled: false,
    size: 'lg',
    labelPosition: 'right',
    variant: 'default'
  }
};

export const AllStates: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    `;

    const states = [
      { label: 'Off (unchecked)', checked: false, disabled: false },
      { label: 'On (checked)', checked: true, disabled: false },
      { label: 'Disabled off', checked: false, disabled: true },
      { label: 'Disabled on', checked: true, disabled: true }
    ];

    states.forEach(state => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = state.checked;
      input.disabled = state.disabled;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', state.checked ? 'true' : 'false');
      input.setAttribute('aria-labelledby', `${id}-label`);

      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });

      const track = document.createElement('div');
      track.className = 'switch__track';

      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);

      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = `${id}-label`;
      labelSpan.textContent = state.label;

      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      container.appendChild(label);
    });

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      align-items: flex-start;
    `;

    const sizes = [
      { size: 'sm', label: 'Small switch' },
      { size: 'md', label: 'Medium switch (default)' },
      { size: 'lg', label: 'Large switch' }
    ];

    sizes.forEach(item => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';

      if (item.size !== 'md') {
        label.classList.add(`switch-${item.size}`);
      }

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = true;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', 'true');
      input.setAttribute('aria-labelledby', `${id}-label`);

      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });

      const track = document.createElement('div');
      track.className = 'switch__track';

      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);

      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = `${id}-label`;
      labelSpan.textContent = item.label;

      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      container.appendChild(label);
    });

    return container;
  }
};

export const ColorVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      max-width: 400px;
    `;

    const variants = [
      { variant: 'primary', label: 'Primary' },
      { variant: 'success', label: 'Success' },
      { variant: 'warning', label: 'Warning' },
      { variant: 'error', label: 'Error' },
      { variant: 'info', label: 'Info' }
    ];

    variants.forEach(item => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';

      if (item.variant) {
        label.classList.add(`switch-${item.variant}`);
      }

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = true;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', 'true');
      input.setAttribute('aria-labelledby', `${id}-label`);

      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });

      const track = document.createElement('div');
      track.className = 'switch__track';

      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);

      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = `${id}-label`;
      labelSpan.textContent = item.label;

      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      container.appendChild(label);
    });

    return container;
  }
};

export const SettingsPanel: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
      max-width: 500px;
    `;

    // Privacy section
    const privacySection = document.createElement('div');
    const privacyTitle = document.createElement('h3');
    privacyTitle.textContent = 'Privacy';
    privacyTitle.style.cssText = `
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 1rem 0;
    `;
    privacySection.appendChild(privacyTitle);

    const privacyOptions = [
      { label: 'Public profile', description: 'Allow others to view your profile', checked: true },
      { label: 'Show online status', description: 'Display when you\'re active', checked: false }
    ];

    const privacyContainer = document.createElement('div');
    privacyContainer.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';

    privacyOptions.forEach(option => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch switch-with-description';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = option.checked;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', option.checked ? 'true' : 'false');
      input.setAttribute('aria-labelledby', `${id}-label`);
      input.setAttribute('aria-describedby', `${id}-desc`);

      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });

      const track = document.createElement('div');
      track.className = 'switch__track';

      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);

      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = `${id}-label`;
      labelSpan.textContent = option.label;

      const desc = document.createElement('span');
      desc.className = 'switch__description';
      desc.id = `${id}-desc`;
      desc.textContent = option.description;
      labelSpan.appendChild(desc);

      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      privacyContainer.appendChild(label);
    });

    privacySection.appendChild(privacyContainer);
    container.appendChild(privacySection);

    // Divider
    const divider = document.createElement('div');
    divider.style.cssText = 'border-top: 1px solid var(--color-border-subtle);';
    container.appendChild(divider);

    // Features section
    const featuresSection = document.createElement('div');
    const featuresTitle = document.createElement('h3');
    featuresTitle.textContent = 'Features';
    featuresTitle.style.cssText = `
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 1rem 0;
    `;
    featuresSection.appendChild(featuresTitle);

    const featuresOptions = [
      { label: 'Dark mode', description: 'Use dark theme across the app', checked: true },
      { label: 'Auto-play videos', description: 'Videos start automatically', checked: false }
    ];

    const featuresContainer = document.createElement('div');
    featuresContainer.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';

    featuresOptions.forEach(option => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch switch-with-description';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = option.checked;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', option.checked ? 'true' : 'false');
      input.setAttribute('aria-labelledby', `${id}-label`);
      input.setAttribute('aria-describedby', `${id}-desc`);

      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });

      const track = document.createElement('div');
      track.className = 'switch__track';

      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);

      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = `${id}-label`;
      labelSpan.textContent = option.label;

      const desc = document.createElement('span');
      desc.className = 'switch__description';
      desc.id = `${id}-desc`;
      desc.textContent = option.description;
      labelSpan.appendChild(desc);

      label.appendChild(input);
      label.appendChild(track);
      label.appendChild(labelSpan);
      featuresContainer.appendChild(label);
    });

    featuresSection.appendChild(featuresContainer);
    container.appendChild(featuresSection);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const id = generateId();
      const label = document.createElement('label');
      label.className = 'switch';

      if (args.size && args.size !== 'md') {
        label.classList.add(`switch-${args.size}`);
      }

      if (args.variant && args.variant !== 'default') {
        label.classList.add(`switch-${args.variant}`);
      }

      if (args.description) {
        label.classList.add('switch-with-description');
      }

      if (args.labelPosition === 'left') {
        label.classList.add('switch-label-left');
      }

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'switch__input';
      input.id = id;
      input.checked = args.checked || false;
      input.disabled = args.disabled || false;
      input.setAttribute('role', 'switch');
      input.setAttribute('aria-checked', args.checked ? 'true' : 'false');

      if (args.label) {
        input.setAttribute('aria-labelledby', `${id}-label`);
      }

      if (args.description) {
        input.setAttribute('aria-describedby', `${id}-desc`);
      }

      input.addEventListener('change', () => {
        input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
      });

      const track = document.createElement('div');
      track.className = 'switch__track';

      const thumb = document.createElement('div');
      thumb.className = 'switch__thumb';
      track.appendChild(thumb);

      const labelSpan = document.createElement('span');
      labelSpan.className = 'switch__label';
      labelSpan.id = `${id}-label`;
      labelSpan.textContent = args.label;

      if (args.description) {
        const desc = document.createElement('span');
        desc.className = 'switch__description';
        desc.id = `${id}-desc`;
        desc.textContent = args.description;
        labelSpan.appendChild(desc);
      }

      label.appendChild(input);
      label.appendChild(track);
      if (args.label) {
        label.appendChild(labelSpan);
      }

      return label;
    });
  },
  args: {
    label: 'Dark mode',
    checked: true,
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    description: '',
    variant: 'default'
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Switch label text'
    },
    checked: {
      control: 'boolean',
      description: 'Checked state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size'
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position'
    },
    description: {
      control: 'text',
      description: 'Optional description text'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant'
    }
  }
};
