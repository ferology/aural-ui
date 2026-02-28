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

// Helper function to create color picker HTML following the exact docs structure
function createColorPicker(args: any): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = 'padding: 2rem; max-width: 320px;';

  const picker = document.createElement('div');
  picker.className = 'aural-color-picker';

  if (args.compact) {
    picker.classList.add('aural-color-picker--compact');
  }
  if (args.disabled) {
    picker.classList.add('aural-color-picker--disabled');
  }

  // Generate unique ID for this instance
  const pickerId = `color-picker-${Math.random().toString(36).substr(2, 9)}`;
  picker.id = pickerId;

  // Preview section: swatch + value display
  const preview = document.createElement('div');
  preview.className = 'aural-color-picker__preview';

  const swatch = document.createElement('div');
  swatch.className = 'aural-color-picker__swatch';

  const swatchColor = document.createElement('div');
  swatchColor.className = 'aural-color-picker__swatch-color';
  swatch.appendChild(swatchColor);

  const valueInput = document.createElement('input');
  valueInput.type = 'text';
  valueInput.className = 'aural-color-picker__value';
  valueInput.value = args.value || '#F00054';
  valueInput.readOnly = true;

  preview.appendChild(swatch);
  if (args.showInput !== false) {
    preview.appendChild(valueInput);
  }

  picker.appendChild(preview);

  // Canvas section: saturation/lightness/cursor
  const canvas = document.createElement('div');
  canvas.className = 'aural-color-picker__canvas';

  const saturation = document.createElement('div');
  saturation.className = 'aural-color-picker__saturation';

  const lightness = document.createElement('div');
  lightness.className = 'aural-color-picker__lightness';

  const cursor = document.createElement('div');
  cursor.className = 'aural-color-picker__cursor';

  canvas.appendChild(saturation);
  canvas.appendChild(lightness);
  canvas.appendChild(cursor);

  picker.appendChild(canvas);

  // Hue slider
  const hue = document.createElement('div');
  hue.className = 'aural-color-picker__hue';

  const hueHandle = document.createElement('div');
  hueHandle.className = 'aural-color-picker__hue-handle';

  hue.appendChild(hueHandle);
  picker.appendChild(hue);

  // Alpha slider (if enabled)
  if (args.showAlpha) {
    const alpha = document.createElement('div');
    alpha.className = 'aural-color-picker__alpha';

    const alphaGradient = document.createElement('div');
    alphaGradient.className = 'aural-color-picker__alpha-gradient';

    const alphaHandle = document.createElement('div');
    alphaHandle.className = 'aural-color-picker__alpha-handle';

    alpha.appendChild(alphaGradient);
    alpha.appendChild(alphaHandle);
    picker.appendChild(alpha);
  }

  // Format mode toggle buttons (not in compact mode)
  if (!args.compact) {
    const modes = document.createElement('div');
    modes.className = 'aural-color-picker__modes';

    const formats = ['hex', 'rgb', 'hsl'];
    formats.forEach((format) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'aural-color-picker__mode';

      if (args.format === format) {
        button.classList.add('aural-color-picker__mode--active');
      }

      button.setAttribute('data-mode', format);
      button.textContent = format.toUpperCase();
      button.disabled = args.disabled || false;
      modes.appendChild(button);
    });

    picker.appendChild(modes);

    // Input fields based on format
    const inputs = document.createElement('div');
    inputs.className = 'aural-color-picker__inputs';
    inputs.setAttribute('data-mode', args.format);

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

      group.appendChild(label);
      group.appendChild(input);
      inputs.appendChild(group);
    } else if (args.format === 'rgb') {
      inputs.classList.add('aural-color-picker__inputs--rgba');

      const channels = args.showAlpha
        ? [{ name: 'R', value: '240', max: '255' }, { name: 'G', value: '0', max: '255' }, { name: 'B', value: '84', max: '255' }, { name: 'A', value: '100', max: '100' }]
        : [{ name: 'R', value: '240', max: '255' }, { name: 'G', value: '0', max: '255' }, { name: 'B', value: '84', max: '255' }];

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
        input.max = channel.max;
        input.disabled = args.disabled || false;

        group.appendChild(label);
        group.appendChild(input);
        inputs.appendChild(group);
      });
    } else if (args.format === 'hsl') {
      inputs.classList.add('aural-color-picker__inputs--hsla');

      const channels = args.showAlpha
        ? [{ name: 'H', value: '340', max: '360' }, { name: 'S', value: '100', max: '100' }, { name: 'L', value: '47', max: '100' }, { name: 'A', value: '100', max: '100' }]
        : [{ name: 'H', value: '340', max: '360' }, { name: 'S', value: '100', max: '100' }, { name: 'L', value: '47', max: '100' }];

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
        input.max = channel.max;
        input.disabled = args.disabled || false;

        group.appendChild(label);
        group.appendChild(input);
        inputs.appendChild(group);
      });
    }

    picker.appendChild(inputs);
  }

  // Preset colors (if enabled and not compact)
  if (args.showPresets !== false && !args.compact) {
    const presets = document.createElement('div');
    presets.className = 'aural-color-picker__presets';

    const presetLabel = document.createElement('div');
    presetLabel.className = 'aural-color-picker__preset-label';
    presetLabel.textContent = 'Presets';

    const presetGrid = document.createElement('div');
    presetGrid.className = 'aural-color-picker__preset-grid';

    const presetColors = ['#f00054', '#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'];

    presetColors.forEach((color, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'aural-color-picker__preset';
      button.disabled = args.disabled || false;

      if (args.value === color) {
        button.classList.add('aural-color-picker__preset--active');
      }

      const presetColor = document.createElement('div');
      presetColor.className = 'aural-color-picker__preset-color';
      presetColor.style.background = color;

      button.appendChild(presetColor);
      presetGrid.appendChild(button);
    });

    presets.appendChild(presetLabel);
    presets.appendChild(presetGrid);
    picker.appendChild(presets);
  }

  container.appendChild(picker);

  // Initialize the color picker with Aural.initColorPicker if available
  setTimeout(() => {
    if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initColorPicker) {
      (window as any).Aural.initColorPicker(pickerId, {
        color: args.value || '#F00054',
        alpha: args.showAlpha || false,
        mode: args.format || 'hex',
        presets: args.showPresets !== false ? ['#f00054', '#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'] : undefined,
        compact: args.compact || false,
        onChange: (color: string) => console.log('Color changed:', color)
      });
    }
  }, 0);

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

export const FullFeatured: Story = {
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

export const WithAlpha: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: false,
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
      { label: 'Primary Color', value: '#F00054' },
      { label: 'Background', value: '#1A1A1A' },
      { label: 'Text Color', value: '#FFFFFF' }
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

export const WithRecentColors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 320px;';

    const picker = document.createElement('div');
    picker.className = 'aural-color-picker';
    picker.id = 'color-picker-recent';

    // Preview
    const preview = document.createElement('div');
    preview.className = 'aural-color-picker__preview';

    const swatch = document.createElement('div');
    swatch.className = 'aural-color-picker__swatch';
    const swatchColor = document.createElement('div');
    swatchColor.className = 'aural-color-picker__swatch-color';
    swatch.appendChild(swatchColor);

    const valueInput = document.createElement('input');
    valueInput.type = 'text';
    valueInput.className = 'aural-color-picker__value';
    valueInput.value = '#8B5CF6';
    valueInput.readOnly = true;

    preview.appendChild(swatch);
    preview.appendChild(valueInput);
    picker.appendChild(preview);

    // Canvas
    const canvas = document.createElement('div');
    canvas.className = 'aural-color-picker__canvas';
    const saturation = document.createElement('div');
    saturation.className = 'aural-color-picker__saturation';
    const lightness = document.createElement('div');
    lightness.className = 'aural-color-picker__lightness';
    const cursor = document.createElement('div');
    cursor.className = 'aural-color-picker__cursor';
    canvas.appendChild(saturation);
    canvas.appendChild(lightness);
    canvas.appendChild(cursor);
    picker.appendChild(canvas);

    // Hue
    const hue = document.createElement('div');
    hue.className = 'aural-color-picker__hue';
    const hueHandle = document.createElement('div');
    hueHandle.className = 'aural-color-picker__hue-handle';
    hue.appendChild(hueHandle);
    picker.appendChild(hue);

    // Presets
    const presets = document.createElement('div');
    presets.className = 'aural-color-picker__presets';

    const presetLabel = document.createElement('div');
    presetLabel.className = 'aural-color-picker__preset-label';
    presetLabel.textContent = 'Presets';

    const presetGrid = document.createElement('div');
    presetGrid.className = 'aural-color-picker__preset-grid';

    const presetColors = ['#f00054', '#22c55e', '#3b82f6', '#f59e0b'];
    presetColors.forEach(color => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      const presetColor = document.createElement('div');
      presetColor.className = 'aural-color-picker__preset-color';
      presetColor.style.background = color;
      button.appendChild(presetColor);
      presetGrid.appendChild(button);
    });

    presets.appendChild(presetLabel);
    presets.appendChild(presetGrid);
    picker.appendChild(presets);

    // Recent colors
    const recent = document.createElement('div');
    recent.className = 'aural-color-picker__recent';

    const recentLabel = document.createElement('div');
    recentLabel.className = 'aural-color-picker__recent-label';
    recentLabel.textContent = 'Recent';

    const recentGrid = document.createElement('div');
    recentGrid.className = 'aural-color-picker__recent-grid';

    const recentColors = ['#8b5cf6', '#ec4899', '#14b8a6', '#ef4444'];
    recentColors.forEach(color => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      const recentColor = document.createElement('div');
      recentColor.className = 'aural-color-picker__preset-color';
      recentColor.style.background = color;
      button.appendChild(recentColor);
      recentGrid.appendChild(button);
    });

    recent.appendChild(recentLabel);
    recent.appendChild(recentGrid);
    picker.appendChild(recent);

    container.appendChild(picker);

    // Initialize
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initColorPicker) {
        (window as any).Aural.initColorPicker('color-picker-recent', {
          color: '#8B5CF6',
          presets: presetColors,
          recentColors: true,
          onChange: (color: string) => console.log('Recent picker color changed:', color)
        });
      }
    }, 0);

    return container;
  }
};

export const PopoverTrigger: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; position: relative;';

    const trigger = document.createElement('button');
    trigger.className = 'aural-color-picker-trigger';
    trigger.id = 'color-trigger';

    const triggerSwatch = document.createElement('div');
    triggerSwatch.className = 'aural-color-picker-trigger__swatch';
    triggerSwatch.style.setProperty('--color-value', '#EC4899');

    const triggerLabel = document.createElement('span');
    triggerLabel.className = 'aural-color-picker-trigger__label';
    triggerLabel.textContent = 'Choose Color';

    trigger.appendChild(triggerSwatch);
    trigger.appendChild(triggerLabel);

    const popover = document.createElement('div');
    popover.className = 'aural-color-picker-popover';
    popover.id = 'color-popover';

    const picker = createColorPicker({
      value: '#EC4899',
      format: 'hex',
      showAlpha: false,
      showInput: true,
      showPresets: false,
      compact: false,
      disabled: false
    });

    popover.appendChild(picker.firstChild as HTMLElement);

    container.appendChild(trigger);
    container.appendChild(popover);

    // Add click handler
    setTimeout(() => {
      trigger.addEventListener('click', () => {
        popover.classList.toggle('aural-color-picker-popover--open');
      });

      document.addEventListener('click', (e) => {
        if (!trigger.contains(e.target as Node) && !popover.contains(e.target as Node)) {
          popover.classList.remove('aural-color-picker-popover--open');
        }
      });
    }, 0);

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
  }
};
