import type { Meta, StoryObj } from '@storybook/html-vite';
import { fn } from 'storybook/test';
import type { ButtonProps } from './Button';
import { createButton } from './Button';

const meta = {
  title: 'Aural UI/Button',
  tags: ['autodocs'],
  render: (args) => {
    const button = createButton(args);
    // Initialize Lucide icons if needed
    if (args.icon || args.loading) {
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
      }, 0);
    }
    return button;
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Button variant type',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name (e.g., "plus", "download")',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only button (no text)',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onClick: { action: 'onClick' },
  },
  args: {
    onClick: fn(),
    variant: 'primary',
    size: 'md',
    label: 'Button',
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// Basic Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    label: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    label: 'Large Button',
  },
};

// With Icons
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    label: 'Add Item',
    icon: 'plus',
  },
};

export const WithDownloadIcon: Story = {
  args: {
    variant: 'secondary',
    label: 'Download',
    icon: 'download',
  },
};

export const WithDeleteIcon: Story = {
  args: {
    variant: 'danger',
    label: 'Delete',
    icon: 'trash-2',
  },
};

// Icon-Only Buttons
export const IconOnlySmall: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    label: 'Search',
    icon: 'search',
    iconOnly: true,
  },
};

export const IconOnlyMedium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Heart',
    icon: 'heart',
    iconOnly: true,
  },
};

export const IconOnlyLarge: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    label: 'Star',
    icon: 'star',
    iconOnly: true,
  },
};

export const IconOnlySettings: Story = {
  args: {
    variant: 'secondary',
    label: 'Settings',
    icon: 'settings',
    iconOnly: true,
  },
};

export const IconOnlyDelete: Story = {
  args: {
    variant: 'danger',
    label: 'Delete',
    icon: 'trash-2',
    iconOnly: true,
  },
};

export const IconOnlyMore: Story = {
  args: {
    variant: 'ghost',
    label: 'More',
    icon: 'more-vertical',
    iconOnly: true,
  },
};

// States
export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    label: 'Loading',
    loading: true,
  },
};

export const LoadingSecondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Processing',
    loading: true,
  },
};
