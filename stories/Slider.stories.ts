import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Slider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Slider Component

Interactive control for selecting a value from a continuous range. Perfect for adjustments like volume, brightness, or any value that needs visual feedback.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-slider">
  <div class="aural-slider__label-row">
    <label class="aural-slider__label">Volume</label>
    <span class="aural-slider__value">50</span>
  </div>
  <input type="range" class="aural-slider__input" min="0" max="100" value="50">
</div>
\`\`\`

**React:**
\`\`\`jsx
const [value, setValue] = useState(50);
<div className="aural-slider">
  <div className="aural-slider__label-row">
    <label className="aural-slider__label">Volume</label>
    <span className="aural-slider__value">{value}</span>
  </div>
  <input type="range" className="aural-slider__input"
    min="0" max="100" value={value}
    onChange={(e) => setValue(Number(e.target.value))} />
</div>
\`\`\`

**Vue:**
\`\`\`vue
<div class="aural-slider">
  <div class="aural-slider__label-row">
    <label class="aural-slider__label">Volume</label>
    <span class="aural-slider__value">{{ value }}</span>
  </div>
  <input type="range" class="aural-slider__input"
    min="0" max="100" v-model="value" />
</div>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Slider label text'
    },
    value: {
      control: 'number',
      description: 'Current slider value'
    },
    min: {
      control: 'number',
      description: 'Minimum value'
    },
    max: {
      control: 'number',
      description: 'Maximum value'
    },
    step: {
      control: 'number',
      description: 'Step increment'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    showValue: {
      control: 'boolean',
      description: 'Show current value'
    },
    showLabels: {
      control: 'boolean',
      description: 'Show min/max labels'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Slider size'
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      description: 'Color variant'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create slider with live value updates
function createSlider(args: any): HTMLElement {
  const container = document.createElement('div');
  container.style.padding = '2rem';
  container.style.maxWidth = '500px';

  const sliderWrapper = document.createElement('div');
  const sizeClass = args.size && args.size !== 'md' ? ` aural-slider--${args.size}` : '';
  const colorClass = args.color && args.color !== 'primary' ? ` aural-slider--${args.color}` : '';
  sliderWrapper.className = `aural-slider${sizeClass}${colorClass}`;

  // Generate unique ID for accessibility
  const sliderId = `slider-${Math.random().toString(36).substr(2, 9)}`;

  // Label row
  if (args.label || args.showValue) {
    const labelRow = document.createElement('div');
    labelRow.className = 'aural-slider__label-row';

    if (args.label) {
      const label = document.createElement('label');
      label.className = 'aural-slider__label';
      label.textContent = args.label;
      label.htmlFor = sliderId;
      labelRow.appendChild(label);
    }

    if (args.showValue) {
      const valueSpan = document.createElement('span');
      valueSpan.className = 'aural-slider__value';
      valueSpan.textContent = String(args.value || 0);
      labelRow.appendChild(valueSpan);
    }

    sliderWrapper.appendChild(labelRow);
  }

  // Slider input
  const input = document.createElement('input');
  input.id = sliderId;
  input.type = 'range';
  input.className = 'aural-slider__input';
  input.min = String(args.min || 0);
  input.max = String(args.max || 100);
  input.value = String(args.value || 50);
  input.step = String(args.step || 1);

  // ARIA attributes
  input.setAttribute('role', 'slider');
  input.setAttribute('aria-valuemin', String(args.min || 0));
  input.setAttribute('aria-valuemax', String(args.max || 100));
  input.setAttribute('aria-valuenow', String(args.value || 50));
  input.setAttribute('aria-label', args.label || 'Slider');

  if (args.disabled) {
    input.disabled = true;
  }

  // Live value update
  if (args.showValue) {
    input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const valueSpan = sliderWrapper.querySelector('.aural-slider__value');
      if (valueSpan) {
        valueSpan.textContent = target.value;
      }
      input.setAttribute('aria-valuenow', target.value);
    });
  }

  sliderWrapper.appendChild(input);

  // Min/Max labels
  if (args.showLabels) {
    const labelsWrapper = document.createElement('div');
    labelsWrapper.className = 'slider-range-labels';
    labelsWrapper.style.cssText = `
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      color: var(--color-text-tertiary);
      margin-top: 0.5rem;
    `;

    const minLabel = document.createElement('span');
    minLabel.textContent = String(args.min || 0);
    labelsWrapper.appendChild(minLabel);

    const maxLabel = document.createElement('span');
    maxLabel.textContent = String(args.max || 100);
    labelsWrapper.appendChild(maxLabel);

    sliderWrapper.appendChild(labelsWrapper);
  }

  container.appendChild(sliderWrapper);
  return container;
}

export const Default: Story = {
  render: (args) => createSlider(args),
  args: {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: true,
    showLabels: false,
    size: 'md',
    color: 'primary'
  }
};

export const WithValue: Story = {
  render: (args) => createSlider(args),
  args: {
    label: 'Brightness',
    value: 75,
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
    showLabels: false,
    size: 'md',
    color: 'primary'
  }
};

export const WithLabels: Story = {
  render: (args) => createSlider(args),
  args: {
    label: 'Temperature',
    value: 22,
    min: 10,
    max: 35,
    step: 1,
    showValue: true,
    showLabels: true,
    size: 'md',
    color: 'primary'
  }
};

export const WithSteps: Story = {
  render: (args) => createSlider(args),
  args: {
    label: 'Rating',
    value: 3,
    min: 1,
    max: 5,
    step: 1,
    showValue: true,
    showLabels: true,
    size: 'md',
    color: 'primary'
  }
};

export const Disabled: Story = {
  render: (args) => createSlider(args),
  args: {
    label: 'Disabled Slider',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    showValue: true,
    showLabels: false,
    size: 'md',
    color: 'primary'
  }
};

export const Colors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';
    container.style.maxWidth = '500px';

    const colors = [
      { color: 'primary', label: 'Primary', value: 65 },
      { color: 'success', label: 'Success', value: 75 },
      { color: 'warning', label: 'Warning', value: 60 },
      { color: 'danger', label: 'Danger', value: 45 }
    ];

    colors.forEach(({ color, label, value }) => {
      const slider = createSlider({
        label,
        value,
        min: 0,
        max: 100,
        step: 1,
        showValue: true,
        color,
        size: 'md'
      });
      slider.style.padding = '0';
      container.appendChild(slider);
    });

    return container;
  }
};

export const Small: Story = {
  render: (args) => createSlider(args),
  args: {
    label: 'Small Slider',
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
    size: 'sm',
    color: 'primary'
  }
};

export const Large: Story = {
  render: (args) => createSlider(args),
  args: {
    label: 'Large Slider',
    value: 70,
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
    size: 'lg',
    color: 'primary'
  }
};

export const VolumeControl: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';

    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'aural-slider';

    const labelRow = document.createElement('div');
    labelRow.className = 'aural-slider__label-row';

    const label = document.createElement('label');
    label.className = 'aural-slider__label';
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '0.5rem';

    // Volume icon SVG
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('width', '16');
    icon.setAttribute('height', '16');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('stroke-width', '2');
    icon.setAttribute('aria-hidden', 'true');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '11 5 6 9 2 9 2 15 6 15 11 19 11 5');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07');

    icon.appendChild(polygon);
    icon.appendChild(path);

    label.appendChild(icon);
    label.appendChild(document.createTextNode('Volume'));
    labelRow.appendChild(label);

    const valueSpan = document.createElement('span');
    valueSpan.className = 'aural-slider__value';
    valueSpan.textContent = '70%';
    labelRow.appendChild(valueSpan);

    sliderWrapper.appendChild(labelRow);

    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'aural-slider__input';
    input.min = '0';
    input.max = '100';
    input.value = '70';
    input.setAttribute('aria-label', 'Volume control');

    input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      valueSpan.textContent = target.value + '%';
    });

    sliderWrapper.appendChild(input);
    container.appendChild(sliderWrapper);

    return container;
  }
};

export const PriceRange: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';

    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'aural-slider';

    const labelRow = document.createElement('div');
    labelRow.className = 'aural-slider__label-row';

    const label = document.createElement('label');
    label.className = 'aural-slider__label';
    label.textContent = 'Maximum Price';
    labelRow.appendChild(label);

    const valueSpan = document.createElement('span');
    valueSpan.className = 'aural-slider__value';
    valueSpan.textContent = '$500';
    labelRow.appendChild(valueSpan);

    sliderWrapper.appendChild(labelRow);

    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'aural-slider__input';
    input.min = '0';
    input.max = '1000';
    input.value = '500';
    input.step = '50';
    input.setAttribute('aria-label', 'Maximum price');

    input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      valueSpan.textContent = '$' + target.value;
    });

    sliderWrapper.appendChild(input);

    // Min/Max labels
    const labelsWrapper = document.createElement('div');
    labelsWrapper.style.cssText = `
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      color: var(--color-text-tertiary);
      margin-top: 0.5rem;
    `;

    const minLabel = document.createElement('span');
    minLabel.textContent = '$0';
    labelsWrapper.appendChild(minLabel);

    const maxLabel = document.createElement('span');
    maxLabel.textContent = '$1000';
    labelsWrapper.appendChild(maxLabel);

    sliderWrapper.appendChild(labelsWrapper);
    container.appendChild(sliderWrapper);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const sliderWrapper = document.createElement('div');
      const sizeClass = args.size && args.size !== 'md' ? ` aural-slider--${args.size}` : '';
      const colorClass = args.color && args.color !== 'primary' ? ` aural-slider--${args.color}` : '';
      sliderWrapper.className = `aural-slider${sizeClass}${colorClass}`;

      const labelRow = document.createElement('div');
      labelRow.className = 'aural-slider__label-row';

      const label = document.createElement('label');
      label.className = 'aural-slider__label';
      label.textContent = args.label || 'Slider';
      labelRow.appendChild(label);

      if (args.showValue) {
        const valueSpan = document.createElement('span');
        valueSpan.className = 'aural-slider__value';
        valueSpan.textContent = String(args.value || 50);
        labelRow.appendChild(valueSpan);
      }

      sliderWrapper.appendChild(labelRow);

      const input = document.createElement('input');
      input.type = 'range';
      input.className = 'aural-slider__input';
      input.min = String(args.min || 0);
      input.max = String(args.max || 100);
      input.value = String(args.value || 50);
      input.step = String(args.step || 1);
      input.setAttribute('aria-label', args.label || 'Slider');

      if (args.disabled) {
        input.disabled = true;
      }

      if (args.showValue) {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          const valueSpan = sliderWrapper.querySelector('.aural-slider__value');
          if (valueSpan) {
            valueSpan.textContent = target.value;
          }
        });
      }

      sliderWrapper.appendChild(input);

      return sliderWrapper;
    });
  },
  args: {
    label: 'Volume',
    value: 65,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'primary'
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Slider label'
    },
    value: {
      control: 'number',
      description: 'Current value'
    },
    min: {
      control: 'number',
      description: 'Minimum value'
    },
    max: {
      control: 'number',
      description: 'Maximum value'
    },
    step: {
      control: 'number',
      description: 'Step increment'
    },
    showValue: {
      control: 'boolean',
      description: 'Show value'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size'
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      description: 'Color'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  }
};
