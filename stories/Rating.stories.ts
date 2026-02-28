import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Rating',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Rating Component

A star rating component for collecting feedback and displaying ratings. Supports interactive rating input, read-only display, half-star ratings, and custom icons.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-rating" data-rating="4">
  <div class="aural-rating__stars">
    <button class="aural-rating__star aural-rating__star--filled" data-value="1" aria-label="Rate 1 star">
      <svg class="aural-rating__star-icon" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    </button>
    <!-- Repeat for stars 2-5 -->
  </div>
  <span class="aural-rating__value">4.0</span>
</div>
\`\`\`

**React:**
\`\`\`jsx
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

<div className="aural-rating" data-rating={rating}>
  <div className="aural-rating__stars">
    {[...Array(5)].map((_, i) => (
      <button
        key={i}
        className={\`aural-rating__star \${i < (hover || rating) ? 'aural-rating__star--filled' : 'aural-rating__star--empty'}\`}
        data-value={i + 1}
        aria-label={\`Rate \${i + 1} star\${i === 0 ? '' : 's'}\`}
        onMouseEnter={() => setHover(i + 1)}
        onMouseLeave={() => setHover(0)}
        onClick={() => setRating(i + 1)}
      >
        <svg className="aural-rating__star-icon" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </button>
    ))}
  </div>
  <span className="aural-rating__value">{rating.toFixed(1)}</span>
</div>
\`\`\`

**Vue:**
\`\`\`vue
<script setup>
const rating = ref(0);
const hover = ref(0);
</script>

<template>
  <div class="aural-rating" :data-rating="rating">
    <div class="aural-rating__stars">
      <button
        v-for="i in 5"
        :key="i"
        :class="['aural-rating__star', i <= (hover || rating) ? 'aural-rating__star--filled' : 'aural-rating__star--empty']"
        :data-value="i"
        :aria-label="\`Rate \${i} star\${i === 1 ? '' : 's'}\`"
        @mouseenter="hover = i"
        @mouseleave="hover = 0"
        @click="rating = i"
      >
        <svg class="aural-rating__star-icon" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </button>
    </div>
    <span class="aural-rating__value">{{ rating.toFixed(1) }}</span>
  </div>
</template>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'Current rating value'
    },
    max: {
      control: { type: 'number', min: 3, max: 10, step: 1 },
      description: 'Maximum rating value'
    },
    readonly: {
      control: 'boolean',
      description: 'Read-only display mode'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    allowHalf: {
      control: 'boolean',
      description: 'Allow half-star ratings'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Rating size'
    },
    showValue: {
      control: 'boolean',
      description: 'Show numeric value'
    },
    showCount: {
      control: 'boolean',
      description: 'Show review count'
    },
    count: {
      control: { type: 'number', min: 0 },
      description: 'Number of reviews'
    },
    icon: {
      control: 'select',
      options: ['star', 'heart'],
      description: 'Icon type'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'error'],
      description: 'Color variant'
    }
  }
};

export default meta;
type Story = StoryObj;

// Star SVG paths
const STAR_PATH = 'M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2';
const HEART_PATH = 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z';

// Helper function to create rating component
function createRating(args: any) {
  const container = document.createElement('div');
  const classes = ['aural-rating'];

  if (args.readonly) classes.push('aural-rating--readonly');
  if (args.disabled) classes.push('aural-rating--disabled');
  if (args.size && args.size !== 'md') classes.push(`aural-rating--${args.size}`);
  if (args.color && args.color !== 'default') classes.push(`aural-rating--${args.color}`);
  if (args.icon === 'heart') classes.push('aural-rating--heart');

  container.className = classes.join(' ');
  container.setAttribute('data-rating', String(args.value || 0));

  const starsContainer = document.createElement('div');
  starsContainer.className = 'aural-rating__stars';

  const max = args.max || 5;
  const value = args.value || 0;
  const iconPath = args.icon === 'heart' ? HEART_PATH : STAR_PATH;
  const iconType = args.icon === 'heart' ? 'heart' : 'star';

  // Create stars
  for (let i = 1; i <= max; i++) {
    const starElement = args.readonly ? document.createElement('span') : document.createElement('button');

    // Determine star state
    let starClass = 'aural-rating__star';
    if (args.allowHalf && i - 0.5 === value) {
      starClass += ' aural-rating__star--half';
    } else if (i <= value) {
      starClass += ' aural-rating__star--filled';
    } else {
      starClass += ' aural-rating__star--empty';
    }

    starElement.className = starClass;
    starElement.setAttribute('data-value', String(i));

    if (!args.readonly) {
      starElement.setAttribute('aria-label', `Rate ${i} ${iconType}${i === 1 ? '' : 's'}`);
      starElement.setAttribute('tabindex', '0');

      if (args.disabled) {
        (starElement as HTMLButtonElement).disabled = true;
      }
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'aural-rating__star-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'currentColor');

    // Handle half stars
    if (args.allowHalf && i - 0.5 === value) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      gradient.setAttribute('id', `half-fill-${i}`);

      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '50%');
      stop1.setAttribute('stop-color', 'var(--color-warning)');

      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '50%');
      stop2.setAttribute('stop-color', 'var(--color-border-medium)');

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      defs.appendChild(gradient);
      svg.appendChild(defs);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      path.setAttribute('points', iconPath);
      path.setAttribute('fill', `url(#half-fill-${i})`);
      svg.appendChild(path);
    } else {
      const path = document.createElementNS('http://www.w3.org/2000/svg', args.icon === 'heart' ? 'path' : 'polygon');
      if (args.icon === 'heart') {
        path.setAttribute('d', iconPath);
      } else {
        path.setAttribute('points', iconPath);
      }
      svg.appendChild(path);
    }

    starElement.appendChild(svg);
    starsContainer.appendChild(starElement);
  }

  container.appendChild(starsContainer);

  // Add value display
  if (args.showValue) {
    const valueSpan = document.createElement('span');
    valueSpan.className = 'aural-rating__value';
    valueSpan.textContent = (value || 0).toFixed(1);
    container.appendChild(valueSpan);
  }

  // Add count display
  if (args.showCount && args.count !== undefined) {
    const countSpan = document.createElement('span');
    countSpan.className = 'aural-rating__count';
    countSpan.textContent = `(${args.count.toLocaleString()})`;
    container.appendChild(countSpan);
  }

  // Add interactivity for non-readonly ratings
  if (!args.readonly && !args.disabled) {
    let currentValue = value;
    const stars = starsContainer.querySelectorAll('.aural-rating__star');

    stars.forEach((star, index) => {
      const starValue = index + 1;

      star.addEventListener('mouseenter', () => {
        updateStars(starValue);
      });

      star.addEventListener('click', () => {
        currentValue = starValue;
        container.setAttribute('data-rating', String(currentValue));
        if (args.showValue) {
          const valueDisplay = container.querySelector('.aural-rating__value');
          if (valueDisplay) {
            valueDisplay.textContent = currentValue.toFixed(1);
          }
        }
      });
    });

    container.addEventListener('mouseleave', () => {
      updateStars(currentValue);
    });

    function updateStars(hoverValue: number) {
      stars.forEach((star, index) => {
        star.classList.remove('aural-rating__star--filled', 'aural-rating__star--empty');
        if (index < hoverValue) {
          star.classList.add('aural-rating__star--filled');
        } else {
          star.classList.add('aural-rating__star--empty');
        }
      });
    }
  }

  return container;
}

export const Default: Story = {
  render: (args) => createRating(args),
  args: {
    value: 0,
    max: 5,
    readonly: false,
    disabled: false,
    allowHalf: false,
    size: 'md',
    showValue: true,
    showCount: false,
    count: 0,
    icon: 'star',
    color: 'default'
  }
};

export const HalfStars: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.padding = 'var(--space-4)';

    const ratings = [3.5, 4.5];
    ratings.forEach(rating => {
      container.appendChild(createRating({
        ...args,
        value: rating,
        readonly: true,
        allowHalf: true,
        showValue: true
      }));
    });

    return container;
  },
  args: {
    max: 5,
    icon: 'star',
    size: 'md'
  }
};

export const ReadOnly: Story = {
  render: (args) => createRating(args),
  args: {
    value: 4.5,
    max: 5,
    readonly: true,
    allowHalf: true,
    size: 'md',
    showValue: true,
    showCount: true,
    count: 1234,
    icon: 'star',
    color: 'default'
  }
};

export const Disabled: Story = {
  render: (args) => createRating(args),
  args: {
    value: 3,
    max: 5,
    readonly: false,
    disabled: true,
    size: 'md',
    showValue: true,
    icon: 'star',
    color: 'default'
  }
};

export const CustomIcon: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.padding = 'var(--space-4)';

    // Star rating
    const starRating = createRating({
      ...args,
      value: 4,
      icon: 'star',
      readonly: true,
      showValue: true
    });
    const starLabel = document.createElement('div');
    starLabel.style.fontSize = 'var(--text-sm)';
    starLabel.style.color = 'var(--color-text-secondary)';
    starLabel.textContent = 'Stars';

    const starContainer = document.createElement('div');
    starContainer.appendChild(starLabel);
    starContainer.appendChild(starRating);
    container.appendChild(starContainer);

    // Heart rating
    const heartRating = createRating({
      ...args,
      value: 5,
      icon: 'heart',
      readonly: true,
      showValue: false
    });
    const heartLabel = document.createElement('div');
    heartLabel.style.fontSize = 'var(--text-sm)';
    heartLabel.style.color = 'var(--color-text-secondary)';
    heartLabel.textContent = 'Favorite';

    const heartContainer = document.createElement('div');
    heartContainer.appendChild(heartLabel);
    heartContainer.appendChild(heartRating);
    container.appendChild(heartContainer);

    return container;
  },
  args: {
    max: 5,
    size: 'md'
  }
};

export const WithCount: Story = {
  render: (args) => createRating(args),
  args: {
    value: 4.3,
    max: 5,
    readonly: true,
    allowHalf: true,
    size: 'md',
    showValue: true,
    showCount: true,
    count: 12845,
    icon: 'star',
    color: 'default'
  }
};

export const Small: Story = {
  render: (args) => createRating(args),
  args: {
    value: 3,
    max: 5,
    readonly: true,
    size: 'sm',
    showValue: true,
    showCount: true,
    count: 45,
    icon: 'star',
    color: 'default'
  }
};

export const Large: Story = {
  render: (args) => createRating(args),
  args: {
    value: 5,
    max: 5,
    readonly: false,
    size: 'lg',
    showValue: true,
    icon: 'star',
    color: 'default'
  }
};

export const ReviewForm: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    container.style.padding = 'var(--space-6)';
    container.style.background = 'var(--color-bg-secondary)';
    container.style.borderRadius = 'var(--radius-md)';
    container.style.border = '1px solid var(--color-border-subtle)';

    const title = document.createElement('h3');
    title.textContent = 'Write a Review';
    title.style.margin = '0 0 var(--space-4) 0';
    title.style.fontSize = 'var(--text-lg)';
    title.style.fontWeight = 'var(--font-semibold)';
    title.style.color = 'var(--color-text-primary)';
    container.appendChild(title);

    const label = document.createElement('label');
    label.textContent = 'Your Rating';
    label.style.display = 'block';
    label.style.marginBottom = 'var(--space-2)';
    label.style.fontSize = 'var(--text-sm)';
    label.style.fontWeight = 'var(--font-medium)';
    label.style.color = 'var(--color-text-secondary)';
    container.appendChild(label);

    const rating = createRating({
      value: 0,
      max: 5,
      readonly: false,
      size: 'lg',
      showValue: true,
      icon: 'star',
      color: 'default'
    });
    container.appendChild(rating);

    const textarea = document.createElement('textarea');
    textarea.className = 'input';
    textarea.placeholder = 'Tell us about your experience...';
    textarea.style.marginTop = 'var(--space-4)';
    textarea.style.width = '100%';
    textarea.style.minHeight = '100px';
    textarea.style.padding = 'var(--space-3)';
    textarea.style.fontSize = 'var(--text-base)';
    textarea.style.borderRadius = 'var(--radius-md)';
    textarea.style.border = '1px solid var(--color-border-medium)';
    textarea.style.background = 'var(--color-bg-primary)';
    textarea.style.color = 'var(--color-text-primary)';
    container.appendChild(textarea);

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Submit Review';
    button.style.marginTop = 'var(--space-4)';
    container.appendChild(button);

    return container;
  }
};

export const ProductRating: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.padding = 'var(--space-6)';
    container.style.background = 'var(--color-bg-primary)';
    container.style.borderRadius = 'var(--radius-md)';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = 'var(--space-4)';

    const title = document.createElement('h3');
    title.textContent = 'Customer Reviews';
    title.style.margin = '0';
    title.style.fontSize = 'var(--text-lg)';
    title.style.fontWeight = 'var(--font-semibold)';
    title.style.color = 'var(--color-text-primary)';
    header.appendChild(title);

    const overallRating = createRating({
      value: 4.3,
      max: 5,
      readonly: true,
      allowHalf: true,
      size: 'md',
      showValue: true,
      showCount: true,
      count: 1234,
      icon: 'star',
      color: 'default'
    });
    header.appendChild(overallRating);

    container.appendChild(header);

    // Rating breakdown
    const breakdown = [
      { stars: 5, count: 850, percentage: 69 },
      { stars: 4, count: 234, percentage: 19 },
      { stars: 3, count: 98, percentage: 8 },
      { stars: 2, count: 37, percentage: 3 },
      { stars: 1, count: 15, percentage: 1 }
    ];

    breakdown.forEach(item => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--space-3)';
      row.style.marginBottom = 'var(--space-2)';

      const starLabel = document.createElement('span');
      starLabel.textContent = `${item.stars} star`;
      starLabel.style.fontSize = 'var(--text-sm)';
      starLabel.style.color = 'var(--color-text-secondary)';
      starLabel.style.width = '50px';
      row.appendChild(starLabel);

      const progressBar = document.createElement('div');
      progressBar.style.flex = '1';
      progressBar.style.height = '8px';
      progressBar.style.background = 'var(--color-bg-tertiary)';
      progressBar.style.borderRadius = 'var(--radius-full)';
      progressBar.style.overflow = 'hidden';

      const progressFill = document.createElement('div');
      progressFill.style.height = '100%';
      progressFill.style.width = `${item.percentage}%`;
      progressFill.style.background = 'var(--color-warning)';
      progressBar.appendChild(progressFill);
      row.appendChild(progressBar);

      const count = document.createElement('span');
      count.textContent = String(item.count);
      count.style.fontSize = 'var(--text-sm)';
      count.style.color = 'var(--color-text-secondary)';
      count.style.width = '50px';
      count.style.textAlign = 'right';
      row.appendChild(count);

      container.appendChild(row);
    });

    return container;
  }
};

export const ColorVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.padding = 'var(--space-4)';

    const variants = [
      { color: 'default', label: 'Default', value: 4 },
      { color: 'primary', label: 'Primary', value: 4 },
      { color: 'success', label: 'Success', value: 5 },
      { color: 'error', label: 'Error', value: 2 }
    ];

    variants.forEach(variant => {
      const wrapper = document.createElement('div');

      const label = document.createElement('div');
      label.textContent = variant.label;
      label.style.fontSize = 'var(--text-sm)';
      label.style.color = 'var(--color-text-secondary)';
      label.style.marginBottom = 'var(--space-2)';
      wrapper.appendChild(label);

      const rating = createRating({
        value: variant.value,
        max: 5,
        readonly: true,
        size: 'md',
        showValue: true,
        icon: 'star',
        color: variant.color
      });
      wrapper.appendChild(rating);

      container.appendChild(wrapper);
    });

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => createRating(args));
  },
  args: {
    value: 4,
    max: 5,
    readonly: true,
    allowHalf: false,
    size: 'md',
    showValue: true,
    showCount: false,
    icon: 'star',
    color: 'default'
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'Current rating value'
    },
    max: {
      control: { type: 'number', min: 3, max: 10, step: 1 },
      description: 'Maximum rating value'
    },
    readonly: {
      control: 'boolean',
      description: 'Read-only display mode'
    },
    allowHalf: {
      control: 'boolean',
      description: 'Allow half-star ratings'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Rating size'
    },
    showValue: {
      control: 'boolean',
      description: 'Show numeric value'
    },
    showCount: {
      control: 'boolean',
      description: 'Show review count'
    },
    icon: {
      control: 'select',
      options: ['star', 'heart'],
      description: 'Icon type'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'error'],
      description: 'Color variant'
    }
  }
};
