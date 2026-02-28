import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Button Component

Versatile button component with multiple variants, sizes, and states.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<button class="btn btn-primary">Click me</button>
\`\`\`

**React:**
\`\`\`jsx
<button className="btn btn-primary">Click me</button>
\`\`\`

**Vue:**
\`\`\`vue
<button class="btn btn-primary">Click me</button>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button text'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'],
      description: 'Button visual style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner'
    },
    icon: {
      control: 'text',
      description: 'Icon (emoji or text)'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: (args) => {
    const button = document.createElement('button');
    button.className = `btn btn-${args.variant} btn-${args.size}`;

    if (args.disabled) {
      button.disabled = true;
    }

    // ✅ Add proper ARIA attributes for loading state
    if (args.loading) {
      button.classList.add('btn-loading');
      button.disabled = true;
      button.setAttribute('aria-busy', 'true'); // ✅ Announce loading state
    }

    if (args.icon && args.label) {
      // ✅ Hide decorative icon from screen readers
      const iconSpan = document.createElement('span');
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = args.icon;
      button.appendChild(iconSpan);
      button.appendChild(document.createTextNode(' ' + args.label));
    } else if (args.loading) {
      // ✅ Loading state with hidden spinner
      const spinner = document.createElement('span');
      spinner.className = 'spinner';
      spinner.setAttribute('aria-hidden', 'true'); // ✅ Hide spinner from screen readers
      button.appendChild(spinner);
      button.appendChild(document.createTextNode(' ' + args.label));
    } else {
      button.textContent = args.label;
    }

    return button;
  },
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false
  }
};

export const Secondary: Story = {
  ...Primary,
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  }
};

export const Outline: Story = {
  ...Primary,
  args: {
    label: 'Outline Button',
    variant: 'outline',
    size: 'md'
  }
};

export const Ghost: Story = {
  ...Primary,
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md'
  }
};

export const Danger: Story = {
  ...Primary,
  args: {
    label: 'Delete',
    variant: 'danger',
    size: 'md',
    icon: '🗑️'
  }
};

export const Success: Story = {
  ...Primary,
  args: {
    label: 'Save',
    variant: 'success',
    size: 'md',
    icon: '✓'
  }
};

export const Small: Story = {
  ...Primary,
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'sm'
  }
};

export const Large: Story = {
  ...Primary,
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'lg'
  }
};

export const Disabled: Story = {
  ...Primary,
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
};

export const Loading: Story = {
  ...Primary,
  args: {
    label: 'Loading...',
    variant: 'primary',
    size: 'md',
    loading: true
  }
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    container.style.padding = '2rem';

    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'];

    variants.forEach(variant => {
      const button = document.createElement('button');
      button.className = `btn btn-${variant}`;
      button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      container.appendChild(button);
    });

    return container;
  }
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.alignItems = 'center';
    container.style.padding = '2rem';

    const sizes = ['sm', 'md', 'lg'];

    sizes.forEach(size => {
      const button = document.createElement('button');
      button.className = `btn btn-primary btn-${size}`;
      button.textContent = size.toUpperCase();
      container.appendChild(button);
    });

    return container;
  }
};

export const AllThemes: Story = {
  render: () => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.textContent = 'Primary Button';
      return button;
    });
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = `btn btn-${args.variant} btn-${args.size}`;

      if (args.disabled) {
        button.disabled = true;
      }

      if (args.loading) {
        button.classList.add('btn-loading');
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');

        const spinner = document.createElement('span');
        spinner.className = 'spinner';
        spinner.setAttribute('aria-hidden', 'true');
        button.appendChild(spinner);
        button.appendChild(document.createTextNode(' ' + args.label));
      } else if (args.icon) {
        const iconSpan = document.createElement('span');
        iconSpan.setAttribute('aria-hidden', 'true');
        iconSpan.textContent = args.icon;
        button.appendChild(iconSpan);
        button.appendChild(document.createTextNode(' ' + args.label));
      } else {
        button.textContent = args.label;
      }

      return button;
    });
  },
  args: {
    variant: 'primary',
    label: 'Button',
    size: 'md',
    loading: false,
    disabled: false,
    icon: ''
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'],
      description: 'Button style variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size'
    },
    label: {
      control: 'text',
      description: 'Button text'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    icon: {
      control: 'text',
      description: 'Icon (emoji or text)'
    }
  }
};
