import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

interface RangeSliderArgs {
  minValue: number;
  maxValue: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  showValues: boolean;
  showLabels: boolean;
  showLimits: boolean;
  showInputs: boolean;
  size: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'success' | 'warning' | 'error';
  minLabel: string;
  maxLabel: string;
  valuePrefix: string;
  valueSuffix: string;
  vertical: boolean;
}

const meta: Meta<RangeSliderArgs> = {
  title: 'Components/Forms/Range Slider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Range Slider Component

A dual-handle slider component for selecting minimum and maximum values from a range. Perfect for price filters, date ranges, and any scenario requiring bounded value selection.

## Features

- **Dual Handles**: Independent min/max value selection
- **Keyboard Accessible**: Full keyboard navigation support
- **Touch Friendly**: Optimized for mobile and touch devices
- **Multiple Sizes**: Small, Medium, and Large variants
- **Color Variants**: Primary, Success, Warning, and Error
- **Value Display**: Optional value labels and input fields
- **Vertical Orientation**: Support for vertical sliders
- **WCAG AAA Compliant**: Meets highest accessibility standards

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-range-slider">
  <div class="aural-range-slider__wrapper">
    <div class="aural-range-slider__track-bg"></div>
    <div class="aural-range-slider__track-fill"></div>
    <div class="aural-range-slider__handle aural-range-slider__handle--min"
         tabindex="0" role="slider" aria-label="Minimum value"
         aria-valuemin="0" aria-valuemax="100" aria-valuenow="25"></div>
    <div class="aural-range-slider__handle aural-range-slider__handle--max"
         tabindex="0" role="slider" aria-label="Maximum value"
         aria-valuemin="0" aria-valuemax="100" aria-valuenow="75"></div>
  </div>
  <div class="aural-range-slider__values">
    <div class="aural-range-slider__value">
      <span class="aural-range-slider__value-label">Min:</span>
      <span class="aural-range-slider__value-number">25</span>
    </div>
    <div class="aural-range-slider__value">
      <span class="aural-range-slider__value-label">Max:</span>
      <span class="aural-range-slider__value-number">75</span>
    </div>
  </div>
</div>
\`\`\`

**React:**
\`\`\`jsx
function RangeSlider({ min = 0, max = 100, values, onChange }) {
  const [range, setRange] = useState(values || [min, max]);

  const handleChange = (index, value) => {
    const newRange = [...range];
    newRange[index] = value;
    // Prevent handles from crossing
    if (index === 0 && value <= range[1]) {
      setRange(newRange);
      onChange?.(newRange);
    } else if (index === 1 && value >= range[0]) {
      setRange(newRange);
      onChange?.(newRange);
    }
  };

  return (
    <div className="aural-range-slider">
      <div className="aural-range-slider__wrapper">
        <div className="aural-range-slider__track-bg"></div>
        <div className="aural-range-slider__track-fill"></div>
        <div className="aural-range-slider__handle aural-range-slider__handle--min"
             tabindex="0" role="slider" aria-valuemin={min} aria-valuemax={max} aria-valuenow={range[0]}></div>
        <div className="aural-range-slider__handle aural-range-slider__handle--max"
             tabindex="0" role="slider" aria-valuemin={min} aria-valuemax={max} aria-valuenow={range[1]}></div>
      </div>
    </div>
  );
}
\`\`\`

**Vue 3:**
\`\`\`vue
<template>
  <div class="aural-range-slider">
    <div class="aural-range-slider__wrapper">
      <div class="aural-range-slider__track-bg" />
      <div
        class="aural-range-slider__track-fill"
        :style="fillStyle"
      />
      <div class="aural-range-slider__handle aural-range-slider__handle--min"
           tabindex="0" role="slider" :aria-valuenow="modelValue[0]"></div>
      <div class="aural-range-slider__handle aural-range-slider__handle--max"
           tabindex="0" role="slider" :aria-valuenow="modelValue[1]"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Array, default: () => [0, 100] },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 }
});

const fillStyle = computed(() => {
  const [start, end] = props.modelValue;
  return {
    left: \`\${(start / props.max) * 100}%\`,
    width: \`\${((end - start) / props.max) * 100}%\`
  };
});
</script>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    minValue: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current minimum value'
    },
    maxValue: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current maximum value'
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum possible value'
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum possible value'
    },
    step: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Step increment'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    showValues: {
      control: 'boolean',
      description: 'Show current values below slider'
    },
    showLabels: {
      control: 'boolean',
      description: 'Show labels on handles'
    },
    showLimits: {
      control: 'boolean',
      description: 'Show min/max limit labels'
    },
    showInputs: {
      control: 'boolean',
      description: 'Show number input fields'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Slider size'
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Color variant'
    },
    minLabel: {
      control: 'text',
      description: 'Label for minimum value'
    },
    maxLabel: {
      control: 'text',
      description: 'Label for maximum value'
    },
    valuePrefix: {
      control: 'text',
      description: 'Prefix for values (e.g., "$")'
    },
    valueSuffix: {
      control: 'text',
      description: 'Suffix for values (e.g., "°C")'
    },
    vertical: {
      control: 'boolean',
      description: 'Vertical orientation'
    }
  }
};

export default meta;
type Story = StoryObj<RangeSliderArgs>;

// Helper function to create range slider with correct Aural UI structure
const createRangeSlider = (args: Partial<RangeSliderArgs>) => {
  const container = document.createElement('div');
  const sizeClass = args.size && args.size !== 'md' ? `aural-range-slider--${args.size}` : '';
  const variantClass = args.variant && args.variant !== 'primary' ? `aural-range-slider--${args.variant}` : '';
  const verticalClass = args.vertical ? 'aural-range-slider--vertical' : '';

  container.className = `aural-range-slider ${sizeClass} ${variantClass} ${verticalClass}`.trim();

  if (args.disabled) {
    container.classList.add('aural-range-slider--disabled');
  }

  // Add input fields if requested
  if (args.showInputs) {
    const inputsContainer = document.createElement('div');
    inputsContainer.className = 'aural-range-slider__inputs';

    // Min input group
    const minInputGroup = document.createElement('div');
    minInputGroup.className = 'aural-range-slider__input-group';

    const minInputLabel = document.createElement('label');
    minInputLabel.className = 'aural-range-slider__input-label';
    minInputLabel.textContent = 'Min';
    minInputGroup.appendChild(minInputLabel);

    const minInputWrapper = document.createElement('div');
    minInputWrapper.className = 'input-number';

    const minInput = document.createElement('input');
    minInput.type = 'number';
    minInput.className = 'aural-range-slider__input';
    minInput.value = String(args.minValue || 25);
    minInput.min = String(args.min || 0);
    minInput.max = String(args.max || 100);
    if (args.disabled) minInput.disabled = true;
    minInputWrapper.appendChild(minInput);

    const minControls = document.createElement('div');
    minControls.className = 'input-number__controls';
    minControls.innerHTML = `
      <button type="button" class="input-number__button" data-action="increment" aria-label="Increment">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button type="button" class="input-number__button" data-action="decrement" aria-label="Decrement">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    `;
    minInputWrapper.appendChild(minControls);
    minInputGroup.appendChild(minInputWrapper);
    inputsContainer.appendChild(minInputGroup);

    // Max input group
    const maxInputGroup = document.createElement('div');
    maxInputGroup.className = 'aural-range-slider__input-group';

    const maxInputLabel = document.createElement('label');
    maxInputLabel.className = 'aural-range-slider__input-label';
    maxInputLabel.textContent = 'Max';
    maxInputGroup.appendChild(maxInputLabel);

    const maxInputWrapper = document.createElement('div');
    maxInputWrapper.className = 'input-number';

    const maxInput = document.createElement('input');
    maxInput.type = 'number';
    maxInput.className = 'aural-range-slider__input';
    maxInput.value = String(args.maxValue || 75);
    maxInput.min = String(args.min || 0);
    maxInput.max = String(args.max || 100);
    if (args.disabled) maxInput.disabled = true;
    maxInputWrapper.appendChild(maxInput);

    const maxControls = document.createElement('div');
    maxControls.className = 'input-number__controls';
    maxControls.innerHTML = `
      <button type="button" class="input-number__button" data-action="increment" aria-label="Increment">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button type="button" class="input-number__button" data-action="decrement" aria-label="Decrement">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    `;
    maxInputWrapper.appendChild(maxControls);
    maxInputGroup.appendChild(maxInputWrapper);
    inputsContainer.appendChild(maxInputGroup);

    container.appendChild(inputsContainer);
  }

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'aural-range-slider__wrapper';

  // Track background
  const trackBg = document.createElement('div');
  trackBg.className = 'aural-range-slider__track-bg';
  wrapper.appendChild(trackBg);

  // Track fill
  const trackFill = document.createElement('div');
  trackFill.className = 'aural-range-slider__track-fill';
  wrapper.appendChild(trackFill);

  // Min handle
  const minHandle = document.createElement('div');
  minHandle.className = 'aural-range-slider__handle aural-range-slider__handle--min';
  minHandle.tabIndex = args.disabled ? -1 : 0;
  minHandle.setAttribute('role', 'slider');
  minHandle.setAttribute('aria-label', args.minLabel || 'Minimum value');
  minHandle.setAttribute('aria-valuemin', String(args.min || 0));
  minHandle.setAttribute('aria-valuemax', String(args.max || 100));
  minHandle.setAttribute('aria-valuenow', String(args.minValue || 25));

  if (args.vertical) {
    minHandle.setAttribute('aria-orientation', 'vertical');
  }

  if (args.showLabels) {
    const minLabel = document.createElement('div');
    minLabel.className = 'aural-range-slider__label';
    minLabel.textContent = `${args.valuePrefix || ''}${args.minValue || 25}${args.valueSuffix || ''}`;
    minHandle.appendChild(minLabel);
  }

  wrapper.appendChild(minHandle);

  // Max handle
  const maxHandle = document.createElement('div');
  maxHandle.className = 'aural-range-slider__handle aural-range-slider__handle--max';
  maxHandle.tabIndex = args.disabled ? -1 : 0;
  maxHandle.setAttribute('role', 'slider');
  maxHandle.setAttribute('aria-label', args.maxLabel || 'Maximum value');
  maxHandle.setAttribute('aria-valuemin', String(args.min || 0));
  maxHandle.setAttribute('aria-valuemax', String(args.max || 100));
  maxHandle.setAttribute('aria-valuenow', String(args.maxValue || 75));

  if (args.vertical) {
    maxHandle.setAttribute('aria-orientation', 'vertical');
  }

  if (args.showLabels) {
    const maxLabel = document.createElement('div');
    maxLabel.className = 'aural-range-slider__label';
    maxLabel.textContent = `${args.valuePrefix || ''}${args.maxValue || 75}${args.valueSuffix || ''}`;
    maxHandle.appendChild(maxLabel);
  }

  wrapper.appendChild(maxHandle);
  container.appendChild(wrapper);

  // Update positions
  const minPercent = ((args.minValue || 25) - (args.min || 0)) / ((args.max || 100) - (args.min || 0)) * 100;
  const maxPercent = ((args.maxValue || 75) - (args.min || 0)) / ((args.max || 100) - (args.min || 0)) * 100;

  if (args.vertical) {
    minHandle.style.bottom = `${minPercent}%`;
    maxHandle.style.bottom = `${maxPercent}%`;
    trackFill.style.bottom = `${minPercent}%`;
    trackFill.style.height = `${maxPercent - minPercent}%`;
  } else {
    minHandle.style.left = `${minPercent}%`;
    maxHandle.style.left = `${maxPercent}%`;
    trackFill.style.left = `${minPercent}%`;
    trackFill.style.width = `${maxPercent - minPercent}%`;
  }

  // Show values
  if (args.showValues) {
    const valuesContainer = document.createElement('div');
    valuesContainer.className = 'aural-range-slider__values';

    const minValueDiv = document.createElement('div');
    minValueDiv.className = 'aural-range-slider__value';
    minValueDiv.innerHTML = `
      <span class="aural-range-slider__value-label">Min:</span>
      <span class="aural-range-slider__value-number">${args.valuePrefix || ''}${args.minValue || 25}${args.valueSuffix || ''}</span>
    `;

    const maxValueDiv = document.createElement('div');
    maxValueDiv.className = 'aural-range-slider__value';
    maxValueDiv.innerHTML = `
      <span class="aural-range-slider__value-label">Max:</span>
      <span class="aural-range-slider__value-number">${args.valuePrefix || ''}${args.maxValue || 75}${args.valueSuffix || ''}</span>
    `;

    valuesContainer.appendChild(minValueDiv);
    valuesContainer.appendChild(maxValueDiv);
    container.appendChild(valuesContainer);
  }

  // Show limits
  if (args.showLimits) {
    const limitsContainer = document.createElement('div');
    limitsContainer.className = 'aural-range-slider__limits';
    limitsContainer.innerHTML = `
      <span>${args.valuePrefix || ''}${args.min || 0}${args.valueSuffix || ''}</span>
      <span>${args.valuePrefix || ''}${args.max || 100}${args.valueSuffix || ''}</span>
    `;
    container.appendChild(limitsContainer);
  }

  return container;
};

export const Default: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 25,
    maxValue: 75,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum value',
    maxLabel: 'Maximum value',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  }
};

export const WithInputFields: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 30,
    maxValue: 80,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: false,
    showLabels: false,
    showLimits: false,
    showInputs: true,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum value',
    maxLabel: 'Maximum value',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with number input fields for precise value entry. Includes increment/decrement controls.'
      }
    }
  }
};

export const PriceRange: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 50,
    maxValue: 500,
    min: 0,
    max: 1000,
    step: 10,
    disabled: false,
    showValues: false,
    showLabels: true,
    showLimits: true,
    showInputs: true,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum price',
    maxLabel: 'Maximum price',
    valuePrefix: '$',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Price range filter commonly used in e-commerce applications. Shows currency formatting, input fields, and limit labels.'
      }
    }
  }
};

export const AgeRange: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 25,
    maxValue: 45,
    min: 18,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum age',
    maxLabel: 'Maximum age',
    valuePrefix: '',
    valueSuffix: ' years',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Age range selector with minimum age constraint. Useful for filtering content or search results.'
      }
    }
  }
};

export const TimeRange: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 9,
    maxValue: 17,
    min: 0,
    max: 24,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Start time',
    maxLabel: 'End time',
    valuePrefix: '',
    valueSuffix: ':00',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Time range selector for scheduling or filtering by time of day. Shows hours in 24-hour format.'
      }
    }
  }
};

export const TemperatureRange: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 18,
    maxValue: 26,
    min: 0,
    max: 40,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'success',
    minLabel: 'Minimum temperature',
    maxLabel: 'Maximum temperature',
    valuePrefix: '',
    valueSuffix: '°C',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Temperature range selector using success variant. Shows unit suffix formatting.'
      }
    }
  }
};

export const WithSteps: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 20,
    maxValue: 80,
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '%',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with step increments of 10. Useful for percentage-based selections.'
      }
    }
  }
};

export const Disabled: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 30,
    maxValue: 70,
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum value',
    maxLabel: 'Maximum value',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state prevents user interaction and reduces visual prominence.'
      }
    }
  }
};

export const WithLabels: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 15,
    maxValue: 85,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: false,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with labels on handles and min/max limit labels for better context.'
      }
    }
  }
};

export const Small: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 20,
    maxValue: 60,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'sm',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size variant for compact spaces or inline usage.'
      }
    }
  }
};

export const Large: Story = {
  render: (args) => createRangeSlider(args),
  args: {
    minValue: 30,
    maxValue: 80,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'lg',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size variant for emphasis or improved touch targets on mobile.'
      }
    }
  }
};

export const Vertical: Story = {
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; justify-content: center; align-items: center; min-height: 300px; padding: 2rem;';
    wrapper.appendChild(createRangeSlider(args));
    return wrapper;
  },
  args: {
    minValue: 30,
    maxValue: 70,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical orientation for height, elevation, or other naturally vertical measurements. Includes proper aria-orientation attribute.'
      }
    }
  }
};

export const ColorVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';

    const variants: Array<{ variant: 'primary' | 'success' | 'warning' | 'error'; label: string }> = [
      { variant: 'primary', label: 'Primary' },
      { variant: 'success', label: 'Success' },
      { variant: 'warning', label: 'Warning' },
      { variant: 'error', label: 'Error' }
    ];

    variants.forEach(({ variant, label }) => {
      const wrapper = document.createElement('div');

      const heading = document.createElement('div');
      heading.style.cssText = 'font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem; text-transform: capitalize;';
      heading.textContent = label;
      wrapper.appendChild(heading);

      const slider = createRangeSlider({
        minValue: 30,
        maxValue: 70,
        min: 0,
        max: 100,
        showValues: true,
        variant,
        size: 'md'
      });
      wrapper.appendChild(slider);

      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'All color variants: Primary (default), Success (positive), Warning (caution), and Error (danger).'
      }
    }
  }
};

export const SizeComparison: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';

    const sizes: Array<{ size: 'sm' | 'md' | 'lg'; label: string }> = [
      { size: 'sm', label: 'Small' },
      { size: 'md', label: 'Medium (Default)' },
      { size: 'lg', label: 'Large' }
    ];

    sizes.forEach(({ size, label }) => {
      const wrapper = document.createElement('div');

      const heading = document.createElement('div');
      heading.style.cssText = 'font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem;';
      heading.textContent = label;
      wrapper.appendChild(heading);

      const slider = createRangeSlider({
        minValue: 25,
        maxValue: 75,
        min: 0,
        max: 100,
        showValues: true,
        showLabels: true,
        size
      });
      wrapper.appendChild(slider);

      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all size variants: Small, Medium (default), and Large.'
      }
    }
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => createRangeSlider(args));
  },
  args: {
    minValue: 25,
    maxValue: 75,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'See how the Range Slider appears across all Aural UI themes. Use the controls to customize the slider and observe theme variations.'
      }
    }
  }
};
