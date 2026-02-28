import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Color Picker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Color Picker Component

A comprehensive color selection component with visual pickers, multiple input modes (HEX/RGB/HSL), preset colors, and alpha channel support.

Perfect for design tools, theme customizers, and any application requiring precise color selection.

See the **Documentation** tab for complete framework examples and accessibility guidelines.
        `.trim()
      }
    }
  },
  argTypes: {
    value: {
      control: 'color',
      description: 'Current color value'
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'hsl'],
      description: 'Color format for input/output'
    },
    showAlpha: {
      control: 'boolean',
      description: 'Show alpha/opacity control'
    },
    showInput: {
      control: 'boolean',
      description: 'Show manual text input'
    },
    showPresets: {
      control: 'boolean',
      description: 'Show preset color swatches'
    },
    compact: {
      control: 'boolean',
      description: 'Use compact variant'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create color picker HTML
function createColorPicker(args: any): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = 'padding: 2rem; max-width: 320px;';

  const picker = document.createElement('div');
  picker.className = `aural-color-picker${args.compact ? ' aural-color-picker--compact' : ''}`;
  if (args.disabled) {
    picker.classList.add('aural-color-picker--disabled');
  }

  // Generate unique ID for this instance
  const pickerId = `color-picker-${Math.random().toString(36).substr(2, 9)}`;
  picker.id = pickerId;

  // Preview with swatch and value display
  const preview = document.createElement('div');
  preview.className = 'aural-color-picker__preview';

  const swatch = document.createElement('div');
  swatch.className = 'aural-color-picker__swatch';
  swatch.setAttribute('role', 'img');
  swatch.setAttribute('aria-label', `Current color: ${args.value || '#F00054'}`);

  const swatchColor = document.createElement('div');
  swatchColor.className = 'aural-color-picker__swatch-color';
  swatchColor.style.background = args.value || '#F00054';
  swatch.appendChild(swatchColor);

  const valueInput = document.createElement('input');
  valueInput.type = 'text';
  valueInput.className = 'aural-color-picker__value';
  valueInput.value = args.value || '#F00054';
  valueInput.readOnly = true;
  valueInput.setAttribute('aria-label', 'Color value');

  preview.appendChild(swatch);
  if (args.showInput !== false) {
    preview.appendChild(valueInput);
  }

  picker.appendChild(preview);

  // Color canvas for saturation/lightness selection
  const canvas = document.createElement('div');
  canvas.className = 'aural-color-picker__canvas';
  canvas.setAttribute('role', 'slider');
  canvas.setAttribute('aria-label', 'Select saturation and lightness');
  canvas.setAttribute('tabindex', '0');

  const saturation = document.createElement('div');
  saturation.className = 'aural-color-picker__saturation';

  const lightness = document.createElement('div');
  lightness.className = 'aural-color-picker__lightness';

  const cursor = document.createElement('div');
  cursor.className = 'aural-color-picker__cursor';
  cursor.setAttribute('aria-hidden', 'true');

  canvas.appendChild(saturation);
  canvas.appendChild(lightness);
  canvas.appendChild(cursor);

  picker.appendChild(canvas);

  // Hue slider
  const hue = document.createElement('div');
  hue.className = 'aural-color-picker__hue';
  hue.setAttribute('role', 'slider');
  hue.setAttribute('aria-label', 'Select hue');
  hue.setAttribute('aria-valuemin', '0');
  hue.setAttribute('aria-valuemax', '360');
  hue.setAttribute('aria-valuenow', '340');
  hue.setAttribute('tabindex', '0');

  const hueHandle = document.createElement('div');
  hueHandle.className = 'aural-color-picker__hue-handle';
  hueHandle.setAttribute('aria-hidden', 'true');

  hue.appendChild(hueHandle);
  picker.appendChild(hue);

  // Alpha slider (if enabled)
  if (args.showAlpha) {
    const alpha = document.createElement('div');
    alpha.className = 'aural-color-picker__alpha';
    alpha.setAttribute('role', 'slider');
    alpha.setAttribute('aria-label', 'Select opacity');
    alpha.setAttribute('aria-valuemin', '0');
    alpha.setAttribute('aria-valuemax', '100');
    alpha.setAttribute('aria-valuenow', '100');
    alpha.setAttribute('tabindex', '0');

    const alphaGradient = document.createElement('div');
    alphaGradient.className = 'aural-color-picker__alpha-gradient';

    const alphaHandle = document.createElement('div');
    alphaHandle.className = 'aural-color-picker__alpha-handle';
    alphaHandle.setAttribute('aria-hidden', 'true');

    alpha.appendChild(alphaGradient);
    alpha.appendChild(alphaHandle);
    picker.appendChild(alpha);
  }

  // Format mode toggle buttons
  if (!args.compact) {
    const modes = document.createElement('div');
    modes.className = 'aural-color-picker__modes';
    modes.setAttribute('role', 'tablist');
    modes.setAttribute('aria-label', 'Color format');

    const formats = ['hex', 'rgb', 'hsl'];
    formats.forEach((format, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `aural-color-picker__mode${args.format === format ? ' aural-color-picker__mode--active' : ''}`;
      button.setAttribute('data-mode', format);
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', args.format === format ? 'true' : 'false');
      button.textContent = format.toUpperCase();
      button.disabled = args.disabled || false;
      modes.appendChild(button);
    });

    picker.appendChild(modes);

    // Input fields based on format
    const inputs = document.createElement('div');
    inputs.className = 'aural-color-picker__inputs';
    inputs.setAttribute('data-mode', args.format);
    inputs.setAttribute('role', 'tabpanel');

    if (args.format === 'hex') {
      const group = document.createElement('div');
      group.className = 'aural-color-picker__input-group';

      const label = document.createElement('label');
      label.className = 'aural-color-picker__input-label';
      label.textContent = 'Hex';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-color-picker__input';
      input.value = (args.value || '#F00054').replace('#', '');
      input.maxLength = 6;
      input.disabled = args.disabled || false;
      input.setAttribute('aria-label', 'Hexadecimal color value');

      label.appendChild(input);
      group.appendChild(label);
      inputs.appendChild(group);
    } else if (args.format === 'rgb') {
      inputs.classList.add('aural-color-picker__inputs--rgba');

      const channels = args.showAlpha
        ? [{ name: 'R', value: '240' }, { name: 'G', value: '0' }, { name: 'B', value: '84' }, { name: 'A', value: '100' }]
        : [{ name: 'R', value: '240' }, { name: 'G', value: '0' }, { name: 'B', value: '84' }];

      channels.forEach(channel => {
        const group = document.createElement('div');
        group.className = 'aural-color-picker__input-group';

        const label = document.createElement('label');
        label.className = 'aural-color-picker__input-label';
        label.textContent = channel.name;

        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'aural-color-picker__input';
        input.value = channel.value;
        input.min = '0';
        input.max = channel.name === 'A' ? '100' : '255';
        input.disabled = args.disabled || false;
        input.setAttribute('aria-label', `${channel.name === 'R' ? 'Red' : channel.name === 'G' ? 'Green' : channel.name === 'B' ? 'Blue' : 'Alpha'} value`);

        label.appendChild(input);
        group.appendChild(label);
        inputs.appendChild(group);
      });
    } else if (args.format === 'hsl') {
      inputs.classList.add('aural-color-picker__inputs--hsla');

      const channels = args.showAlpha
        ? [{ name: 'H', value: '340' }, { name: 'S', value: '100' }, { name: 'L', value: '47' }, { name: 'A', value: '100' }]
        : [{ name: 'H', value: '340' }, { name: 'S', value: '100' }, { name: 'L', value: '47' }];

      channels.forEach(channel => {
        const group = document.createElement('div');
        group.className = 'aural-color-picker__input-group';

        const label = document.createElement('label');
        label.className = 'aural-color-picker__input-label';
        label.textContent = channel.name;

        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'aural-color-picker__input';
        input.value = channel.value;
        input.min = '0';
        input.max = channel.name === 'H' ? '360' : '100';
        input.disabled = args.disabled || false;
        input.setAttribute('aria-label', `${channel.name === 'H' ? 'Hue' : channel.name === 'S' ? 'Saturation' : channel.name === 'L' ? 'Lightness' : 'Alpha'} value`);

        label.appendChild(input);
        group.appendChild(label);
        inputs.appendChild(group);
      });
    }

    picker.appendChild(inputs);
  }

  // Preset colors (if enabled)
  if (args.showPresets !== false && !args.compact) {
    const presets = document.createElement('div');
    presets.className = 'aural-color-picker__presets';

    const presetLabel = document.createElement('div');
    presetLabel.className = 'aural-color-picker__preset-label';
    presetLabel.textContent = 'Presets';

    const presetGrid = document.createElement('div');
    presetGrid.className = 'aural-color-picker__preset-grid';
    presetGrid.setAttribute('role', 'group');
    presetGrid.setAttribute('aria-label', 'Preset colors');

    const presetColors = [
      { color: '#f00054', name: 'Brand Pink' },
      { color: '#22c55e', name: 'Green' },
      { color: '#3b82f6', name: 'Blue' },
      { color: '#f59e0b', name: 'Amber' },
      { color: '#ef4444', name: 'Red' },
      { color: '#8b5cf6', name: 'Violet' },
      { color: '#ec4899', name: 'Pink' },
      { color: '#14b8a6', name: 'Teal' }
    ];

    presetColors.forEach((preset, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'aural-color-picker__preset';
      button.setAttribute('aria-label', `Select ${preset.name} color: ${preset.color}`);
      button.disabled = args.disabled || false;

      if (args.value === preset.color) {
        button.classList.add('aural-color-picker__preset--active');
        button.setAttribute('aria-pressed', 'true');
      }

      const presetColor = document.createElement('div');
      presetColor.className = 'aural-color-picker__preset-color';
      presetColor.style.background = preset.color;
      presetColor.setAttribute('aria-hidden', 'true');

      button.appendChild(presetColor);
      presetGrid.appendChild(button);
    });

    presets.appendChild(presetLabel);
    presets.appendChild(presetGrid);
    picker.appendChild(presets);
  }

  container.appendChild(picker);
  return container;
}

export const Default: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
};

export const WithAlpha: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
};

export const HexFormat: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#3B82F6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
};

export const RgbFormat: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#22C55E',
    format: 'rgb',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
};

export const HslFormat: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F59E0B',
    format: 'hsl',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
};

export const Compact: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#8B5CF6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: true,
    disabled: false
  }
};

export const WithPresets: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
};

export const Disabled: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#EC4899',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: true
  }
};

export const ThemePicker: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const title = document.createElement('h3');
    title.textContent = 'Theme Customizer';
    title.style.cssText = 'margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600;';

    const grid = document.createElement('div');
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;';

    const colors = [
      { label: 'Primary Color', value: '#F00054', name: 'primary' },
      { label: 'Background', value: '#1A1A1A', name: 'background' },
      { label: 'Text Color', value: '#FFFFFF', name: 'text' }
    ];

    colors.forEach(color => {
      const group = document.createElement('div');

      const label = document.createElement('label');
      label.style.cssText = 'display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;';
      label.textContent = color.label;

      const picker = createColorPicker({
        value: color.value,
        format: 'hex',
        showAlpha: false,
        showInput: true,
        showPresets: false,
        compact: true,
        disabled: false
      });

      group.appendChild(label);
      group.appendChild(picker);
      grid.appendChild(group);
    });

    container.appendChild(title);
    container.appendChild(grid);
    return container;
  }
};

export const BrandColors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 400px;';

    const title = document.createElement('h3');
    title.textContent = 'Brand Color Palette';
    title.style.cssText = 'margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;';

    const description = document.createElement('p');
    description.textContent = 'Select from approved brand colors or create custom colors for your design.';
    description.style.cssText = 'margin: 0 0 1.5rem 0; color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.5;';

    const picker = createColorPicker({
      value: '#F00054',
      format: 'hex',
      showAlpha: false,
      showInput: true,
      showPresets: true,
      compact: false,
      disabled: false
    });

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(picker);
    return container;
  }
};

export const AllFormats: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 1000px;';

    const formats = [
      { format: 'hex', label: 'HEX Format', value: '#F00054' },
      { format: 'rgb', label: 'RGB Format', value: '#22C55E' },
      { format: 'hsl', label: 'HSL Format', value: '#3B82F6' }
    ];

    formats.forEach(({ format, label, value }) => {
      const section = document.createElement('div');

      const heading = document.createElement('h4');
      heading.textContent = label;
      heading.style.cssText = 'margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;';

      const picker = createColorPicker({
        value,
        format: format as 'hex' | 'rgb' | 'hsl',
        showAlpha: true,
        showInput: true,
        showPresets: false,
        compact: false,
        disabled: false
      });

      section.appendChild(heading);
      section.appendChild(picker);
      container.appendChild(section);
    });

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      return createColorPicker(args);
    });
  },
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  },
  argTypes: {
    value: {
      control: 'color',
      description: 'Current color value'
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'hsl'],
      description: 'Color format'
    },
    showAlpha: {
      control: 'boolean',
      description: 'Show alpha control'
    },
    showInput: {
      control: 'boolean',
      description: 'Show text input'
    },
    showPresets: {
      control: 'boolean',
      description: 'Show preset swatches'
    },
    compact: {
      control: 'boolean',
      description: 'Compact variant'
    }
  }
};
