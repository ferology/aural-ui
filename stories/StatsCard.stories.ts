import type { Meta, StoryObj } from '@storybook/html';

/**
 * Stats Cards are used to display key metrics, performance indicators, and statistical data with visual emphasis.
 *
 * They support various features including:
 * - Icons for visual categorization
 * - Trend indicators (up/down/neutral)
 * - Semantic color variants (primary, success, warning, error)
 * - Progress bars for metrics with limits
 * - Responsive grid layouts for dashboards
 *
 * ## HTML Structure
 *
 * ```html
 * <div class="aural-stats-card aural-stats-card--{variant}">
 *   <div class="aural-stats-card__header">
 *     <span class="aural-stats-card__label">Label</span>
 *     <div class="aural-stats-card__icon">
 *       <i data-lucide="icon-name" aria-hidden="true"></i>
 *     </div>
 *   </div>
 *   <div class="aural-stats-card__value">Value</div>
 *   <div class="aural-stats-card__progress">
 *     <div class="aural-stats-card__progress-bar" style="width: X%"
 *          role="progressbar" aria-valuenow="X" aria-valuemin="0" aria-valuemax="100"></div>
 *   </div>
 *   <div class="aural-stats-card__footer">
 *     <span class="aural-stats-card__trend aural-stats-card__trend--{direction}">
 *       <i data-lucide="trend-icon" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
 *       Percentage
 *     </span>
 *     <span class="aural-stats-card__description">Description</span>
 *   </div>
 * </div>
 * ```
 *
 * ## Accessibility
 *
 * - All decorative icons use `aria-hidden="true"`
 * - Progress bars include proper ARIA attributes (`role="progressbar"`, `aria-valuenow`, etc.)
 * - Semantic color variants don't rely solely on color
 * - Text labels provide context for all metrics
 */
const meta: Meta = {
  title: 'Components/Stats Card',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Semantic color variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'The label describing the metric',
    },
    value: {
      control: 'text',
      description: 'The main value/metric to display',
    },
    icon: {
      control: 'text',
      description: 'Lucide icon name (e.g., "dollar-sign", "users")',
    },
    hasIcon: {
      control: 'boolean',
      description: 'Whether to show an icon',
    },
    hasTrend: {
      control: 'boolean',
      description: 'Whether to show trend indicator',
    },
    trendDirection: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
      description: 'Trend direction',
    },
    trendValue: {
      control: 'text',
      description: 'Trend percentage/value',
    },
    description: {
      control: 'text',
      description: 'Footer description text',
    },
    hasProgress: {
      control: 'boolean',
      description: 'Whether to show progress bar',
    },
    progressValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress bar percentage (0-100)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# Stats Card Component

Statistical data cards for displaying key metrics, trends, and performance indicators with visual emphasis. Perfect for dashboards, analytics, and reporting interfaces.

Stats cards present numerical data in a visually appealing, scannable format with optional trend indicators, progress bars, and semantic colors to convey meaning at a glance.

## When to Use

- **Dashboard metrics**: Display KPIs like revenue, user count, conversion rates
- **Performance indicators**: Show system metrics like CPU usage, memory, uptime
- **Comparison data**: Present before/after or period-over-period comparisons
- **Progress tracking**: Display completion percentages with visual progress bars
- **Status overview**: Quick glance at system or project health

## When NOT to Use

- **Detailed data tables**: Use Table component for tabular data
- **Time series charts**: Use Chart components for trends over time
- **Text-heavy content**: Use Card or Article components
- **Navigation**: Use navigation components, not stats cards

## Framework Examples

### Vanilla HTML
\`\`\`html
<!-- Basic stats card -->
<div class="aural-stats-card">
  <div class="aural-stats-card__header">
    <span class="aural-stats-card__label">Total Users</span>
  </div>
  <div class="aural-stats-card__value">1,284</div>
  <div class="aural-stats-card__footer">
    <span class="aural-stats-card__description">Last 30 days</span>
  </div>
</div>

<!-- Stats card with trend -->
<div class="aural-stats-card aural-stats-card--success">
  <div class="aural-stats-card__header">
    <span class="aural-stats-card__label">Revenue</span>
    <div class="aural-stats-card__icon">
      <i data-lucide="dollar-sign" aria-hidden="true"></i>
    </div>
  </div>
  <div class="aural-stats-card__value">$45,231</div>
  <div class="aural-stats-card__footer">
    <span class="aural-stats-card__trend aural-stats-card__trend--up">
      <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
      12.5%
    </span>
    <span class="aural-stats-card__description">vs last month</span>
  </div>
</div>

<!-- Stats card with progress bar -->
<div class="aural-stats-card aural-stats-card--primary">
  <div class="aural-stats-card__header">
    <span class="aural-stats-card__label">Storage Used</span>
    <div class="aural-stats-card__icon">
      <i data-lucide="hard-drive" aria-hidden="true"></i>
    </div>
  </div>
  <div class="aural-stats-card__value">67.8 GB</div>
  <div class="aural-stats-card__progress">
    <div class="aural-stats-card__progress-bar"
         style="width: 68%"
         role="progressbar"
         aria-valuenow="68"
         aria-valuemin="0"
         aria-valuemax="100"></div>
  </div>
  <div class="aural-stats-card__footer">
    <span class="aural-stats-card__description">of 100 GB</span>
  </div>
</div>
\`\`\`

### React
\`\`\`jsx
interface StatsCardProps {
  label: string;
  value: string | number;
  description?: string;
  icon?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
  };
  progress?: number; // 0-100
}

function StatsCard({
  label,
  value,
  description,
  icon,
  variant = 'default',
  trend,
  progress
}: StatsCardProps) {
  const trendIcon = trend?.direction === 'up' ? 'trending-up' :
                    trend?.direction === 'down' ? 'trending-down' : 'minus';

  return (
    <div className={\`aural-stats-card \${variant !== 'default' ? \`aural-stats-card--\${variant}\` : ''}\`}>
      <div className="aural-stats-card__header">
        <span className="aural-stats-card__label">{label}</span>
        {icon && (
          <div className="aural-stats-card__icon">
            <i data-lucide={icon} aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="aural-stats-card__value">{value}</div>

      {progress !== undefined && (
        <div className="aural-stats-card__progress">
          <div
            className="aural-stats-card__progress-bar"
            style={{ width: \`\${progress}%\` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      )}

      {(trend || description) && (
        <div className="aural-stats-card__footer">
          {trend && (
            <span className={\`aural-stats-card__trend aural-stats-card__trend--\${trend.direction}\`}>
              <i data-lucide={trendIcon} className="aural-stats-card__trend-icon" aria-hidden="true" />
              {trend.value}
            </span>
          )}
          {description && (
            <span className="aural-stats-card__description">{description}</span>
          )}
        </div>
      )}
    </div>
  );
}

// Usage
<StatsCard
  label="Total Revenue"
  value="$45,231"
  icon="dollar-sign"
  variant="primary"
  trend={{ direction: 'up', value: '12.5%' }}
  description="vs last month"
/>
\`\`\`

### Vue
\`\`\`vue
<template>
  <div :class="[\`aural-stats-card\`, variant !== 'default' && \`aural-stats-card--\${variant}\`]">
    <div class="aural-stats-card__header">
      <span class="aural-stats-card__label">{{ label }}</span>
      <div v-if="icon" class="aural-stats-card__icon">
        <i :data-lucide="icon" aria-hidden="true" />
      </div>
    </div>

    <div class="aural-stats-card__value">{{ value }}</div>

    <div v-if="progress !== undefined" class="aural-stats-card__progress">
      <div
        class="aural-stats-card__progress-bar"
        :style="{ width: \`\${progress}%\` }"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>

    <div v-if="trend || description" class="aural-stats-card__footer">
      <span
        v-if="trend"
        :class="[\`aural-stats-card__trend\`, \`aural-stats-card__trend--\${trend.direction}\`]"
      >
        <i :data-lucide="trendIcon" class="aural-stats-card__trend-icon" aria-hidden="true" />
        {{ trend.value }}
      </span>
      <span v-if="description" class="aural-stats-card__description">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  description: String,
  icon: String,
  variant: { type: String, default: 'default' },
  trend: Object,
  progress: Number
});

const trendIcon = computed(() => {
  if (!props.trend) return '';
  return props.trend.direction === 'up' ? 'trending-up' :
         props.trend.direction === 'down' ? 'trending-down' : 'minus';
});
</script>
\`\`\`

### Svelte
\`\`\`svelte
<script>
  export let label;
  export let value;
  export let description = '';
  export let icon = '';
  export let variant = 'default';
  export let trend = null;
  export let progress = undefined;

  $: trendIcon = trend?.direction === 'up' ? 'trending-up' :
                 trend?.direction === 'down' ? 'trending-down' : 'minus';
</script>

<div class="aural-stats-card" class:aural-stats-card--{variant}={variant !== 'default'}>
  <div class="aural-stats-card__header">
    <span class="aural-stats-card__label">{label}</span>
    {#if icon}
      <div class="aural-stats-card__icon">
        <i data-lucide={icon} aria-hidden="true" />
      </div>
    {/if}
  </div>

  <div class="aural-stats-card__value">{value}</div>

  {#if progress !== undefined}
    <div class="aural-stats-card__progress">
      <div
        class="aural-stats-card__progress-bar"
        style="width: {progress}%"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  {/if}

  {#if trend || description}
    <div class="aural-stats-card__footer">
      {#if trend}
        <span class="aural-stats-card__trend aural-stats-card__trend--{trend.direction}">
          <i data-lucide={trendIcon} class="aural-stats-card__trend-icon" aria-hidden="true" />
          {trend.value}
        </span>
      {/if}
      {#if description}
        <span class="aural-stats-card__description">{description}</span>
      {/if}
    </div>
  {/if}
</div>
\`\`\`

## Accessibility

1. **Descriptive labels**: Clear labels describe what each metric represents
2. **Semantic HTML**: Proper use of div and span elements with meaningful class names
3. **Icon accessibility**: Decorative icons use \`aria-hidden="true"\`
4. **Progress bars**: Include proper ARIA attributes (role, valuenow, valuemin, valuemax)
5. **Color independence**: Meaning conveyed through icons and text, not color alone
6. **Contrast ratios**: Text meets WCAG AA standards (4.5:1 minimum, 3:1 for large text)
7. **Responsive text**: Font sizes scale appropriately on all devices
8. **Trend indicators**: Both icon and text convey trend direction
9. **Hover effects**: Visual feedback respects prefers-reduced-motion
10. **Readable values**: Large, clear numbers for easy scanning
11. **Context provided**: Description text provides context for metrics
12. **Variant meaning**: Color variants have semantic meaning (success = green, error = red)
13. **Focus indicators**: Interactive cards show focus rings when keyboard navigable
14. **Screen reader friendly**: All meaningful content accessible to screen readers
15. **Value formatting**: Numbers formatted for readability (1,284 not 1284)

## Usage Guidelines

### Best Practices

- **Clear labels**: Use descriptive, concise labels (2-4 words maximum)
- **Formatted values**: Format numbers with commas, currency symbols, units
- **Meaningful trends**: Show trend percentage with comparison period
- **Consistent variants**: Use color variants consistently across dashboard
- **Grid layouts**: Display stats cards in responsive grids for comparison
- **Action context**: Provide context in description (vs last month, of total, etc.)

### Semantic Variants

- **Primary** (\`aural-stats-card--primary\`): Default metrics, brand-related data
- **Success** (\`aural-stats-card--success\`): Positive metrics, growth, achievements
- **Warning** (\`aural-stats-card--warning\`): Caution metrics, approaching limits
- **Error** (\`aural-stats-card--error\`): Negative metrics, errors, issues
- **Default**: Neutral metrics without specific sentiment

### Trend Indicators

- **Up** (\`aural-stats-card__trend--up\`): Positive growth (green)
- **Down** (\`aural-stats-card__trend--down\`): Decline or decrease (red)
- **Neutral** (\`aural-stats-card__trend--neutral\`): No change (gray)

### Dashboard Grid Pattern

\`\`\`css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
}
\`\`\`

### Mobile Considerations

- Cards stack vertically on mobile (< 640px)
- Font sizes remain readable on small screens
- Icons scale appropriately
- Touch targets meet minimum 44×44px for interactive cards
- Progress bars visible and legible
- Horizontal layout converts to vertical on narrow screens
- Footer content may wrap on small screens
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Basic stats card with just a label, value, and description.
 */
export const Basic: Story = {
  args: {
    label: 'Page Views',
    value: '124.5K',
    description: 'Last 30 days',
    hasIcon: false,
    hasTrend: false,
    hasProgress: false,
    variant: 'default',
  },
  render: (args) => html`
    <div
      class="aural-stats-card${args.variant !== 'default'
        ? ` aural-stats-card--${args.variant}`
        : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${args.label}</span>
      </div>
      <div class="aural-stats-card__value">${args.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${args.description}</span>
      </div>
    </div>
  `,
};

/**
 * Stats card with an icon for visual categorization.
 */
export const WithIcon: Story = {
  args: {
    label: 'Total Revenue',
    value: '$45,231',
    description: 'This month',
    icon: 'dollar-sign',
    hasIcon: true,
    hasTrend: false,
    hasProgress: false,
    variant: 'primary',
  },
  render: (args) => html`
    <div
      class="aural-stats-card${args.variant !== 'default'
        ? ` aural-stats-card--${args.variant}`
        : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${args.label}</span>
        ${args.hasIcon
          ? html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${args.icon}" aria-hidden="true"></i>
              </div>
            `
          : ''}
      </div>
      <div class="aural-stats-card__value">${args.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${args.description}</span>
      </div>
    </div>
  `,
};

/**
 * Stats card with an upward trend indicator showing positive growth.
 */
export const WithTrendUp: Story = {
  args: {
    label: 'Active Users',
    value: '8,492',
    description: 'vs last week',
    icon: 'users',
    hasIcon: true,
    hasTrend: true,
    trendDirection: 'up',
    trendValue: '8.1%',
    hasProgress: false,
    variant: 'success',
  },
  render: (args) => html`
    <div
      class="aural-stats-card${args.variant !== 'default'
        ? ` aural-stats-card--${args.variant}`
        : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${args.label}</span>
        ${args.hasIcon
          ? html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${args.icon}" aria-hidden="true"></i>
              </div>
            `
          : ''}
      </div>
      <div class="aural-stats-card__value">${args.value}</div>
      ${args.hasTrend || args.description
        ? html`
            <div class="aural-stats-card__footer">
              ${args.hasTrend
                ? html`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--${args.trendDirection}"
                    >
                      <i
                        data-lucide="${args.trendDirection === 'up'
                          ? 'trending-up'
                          : args.trendDirection === 'down'
                            ? 'trending-down'
                            : 'minus'}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      ${args.trendValue}
                    </span>
                  `
                : ''}
              ${args.description
                ? html` <span class="aural-stats-card__description">${args.description}</span> `
                : ''}
            </div>
          `
        : ''}
    </div>
  `,
};

/**
 * Stats card with a downward trend indicator showing decline.
 */
export const WithTrendDown: Story = {
  args: {
    label: 'Customer Loss',
    value: '127',
    description: 'vs yesterday',
    icon: 'trending-down',
    hasIcon: true,
    hasTrend: true,
    trendDirection: 'down',
    trendValue: '3.2%',
    hasProgress: false,
    variant: 'warning',
  },
  render: (args) => html`
    <div
      class="aural-stats-card${args.variant !== 'default'
        ? ` aural-stats-card--${args.variant}`
        : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${args.label}</span>
        ${args.hasIcon
          ? html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${args.icon}" aria-hidden="true"></i>
              </div>
            `
          : ''}
      </div>
      <div class="aural-stats-card__value">${args.value}</div>
      ${args.hasTrend || args.description
        ? html`
            <div class="aural-stats-card__footer">
              ${args.hasTrend
                ? html`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--${args.trendDirection}"
                    >
                      <i
                        data-lucide="${args.trendDirection === 'up'
                          ? 'trending-up'
                          : args.trendDirection === 'down'
                            ? 'trending-down'
                            : 'minus'}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      ${args.trendValue}
                    </span>
                  `
                : ''}
              ${args.description
                ? html` <span class="aural-stats-card__description">${args.description}</span> `
                : ''}
            </div>
          `
        : ''}
    </div>
  `,
};

/**
 * Stats card with a neutral trend indicator showing no change.
 */
export const WithTrendNeutral: Story = {
  args: {
    label: 'Error Rate',
    value: '2.3%',
    description: 'no change',
    icon: 'alert-circle',
    hasIcon: true,
    hasTrend: true,
    trendDirection: 'neutral',
    trendValue: '0.0%',
    hasProgress: false,
    variant: 'error',
  },
  render: (args) => html`
    <div
      class="aural-stats-card${args.variant !== 'default'
        ? ` aural-stats-card--${args.variant}`
        : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${args.label}</span>
        ${args.hasIcon
          ? html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${args.icon}" aria-hidden="true"></i>
              </div>
            `
          : ''}
      </div>
      <div class="aural-stats-card__value">${args.value}</div>
      ${args.hasTrend || args.description
        ? html`
            <div class="aural-stats-card__footer">
              ${args.hasTrend
                ? html`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--${args.trendDirection}"
                    >
                      <i
                        data-lucide="${args.trendDirection === 'up'
                          ? 'trending-up'
                          : args.trendDirection === 'down'
                            ? 'trending-down'
                            : 'minus'}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      ${args.trendValue}
                    </span>
                  `
                : ''}
              ${args.description
                ? html` <span class="aural-stats-card__description">${args.description}</span> `
                : ''}
            </div>
          `
        : ''}
    </div>
  `,
};

/**
 * Stats card with a progress bar showing completion or usage percentage.
 */
export const WithProgress: Story = {
  args: {
    label: 'Storage Used',
    value: '67.8 GB',
    description: 'of 100 GB total',
    icon: 'hard-drive',
    hasIcon: true,
    hasTrend: false,
    hasProgress: true,
    progressValue: 67.8,
    variant: 'primary',
  },
  render: (args) => html`
    <div
      class="aural-stats-card${args.variant !== 'default'
        ? ` aural-stats-card--${args.variant}`
        : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${args.label}</span>
        ${args.hasIcon
          ? html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${args.icon}" aria-hidden="true"></i>
              </div>
            `
          : ''}
      </div>
      <div class="aural-stats-card__value">${args.value}</div>
      ${args.hasProgress
        ? html`
            <div class="aural-stats-card__progress">
              <div
                class="aural-stats-card__progress-bar"
                style="width: ${args.progressValue}%"
                role="progressbar"
                aria-valuenow="${args.progressValue}"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          `
        : ''}
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${args.description}</span>
      </div>
    </div>
  `,
};

/**
 * Primary variant - used for default metrics and brand-related data.
 */
export const VariantPrimary: Story = {
  render: () => html`
    <div class="aural-stats-card aural-stats-card--primary">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Total Revenue</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="dollar-sign" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">$45,231</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Primary variant</span>
      </div>
    </div>
  `,
};

/**
 * Success variant - used for positive metrics, growth, and achievements.
 */
export const VariantSuccess: Story = {
  render: () => html`
    <div class="aural-stats-card aural-stats-card--success">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Active Users</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="users" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">8,492</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Success variant</span>
      </div>
    </div>
  `,
};

/**
 * Warning variant - used for cautionary metrics and approaching limits.
 */
export const VariantWarning: Story = {
  render: () => html`
    <div class="aural-stats-card aural-stats-card--warning">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Pending Orders</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="clock" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">127</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Warning variant</span>
      </div>
    </div>
  `,
};

/**
 * Error variant - used for negative metrics, errors, and critical issues.
 */
export const VariantError: Story = {
  render: () => html`
    <div class="aural-stats-card aural-stats-card--error">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Error Rate</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="alert-circle" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">2.3%</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Error variant</span>
      </div>
    </div>
  `,
};

/**
 * All semantic color variants displayed together for comparison.
 */
export const AllVariants: Story = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-6);"
    >
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Total Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="dollar-sign" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$45,231</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Primary variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Active Users</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="users" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">8,492</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Success variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Pending Orders</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="clock" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">127</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Warning variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--error">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Error Rate</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="alert-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">2.3%</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Error variant</span>
        </div>
      </div>
    </div>
  `,
};

/**
 * Dashboard grid showing multiple stats cards in a responsive layout.
 * This is a common pattern for analytics dashboards.
 */
export const DashboardGrid: Story = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-6);"
    >
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Total Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="dollar-sign" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$45,231</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i
              data-lucide="trending-up"
              class="aural-stats-card__trend-icon"
              aria-hidden="true"
            ></i>
            12.5%
          </span>
          <span class="aural-stats-card__description">vs last month</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Active Users</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="users" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">8,492</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i
              data-lucide="trending-up"
              class="aural-stats-card__trend-icon"
              aria-hidden="true"
            ></i>
            8.1%
          </span>
          <span class="aural-stats-card__description">vs last week</span>
        </div>
      </div>

      <div class="aural-stats-card">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Page Views</span>
        </div>
        <div class="aural-stats-card__value">124.5K</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Last 30 days</span>
        </div>
      </div>

      <div class="aural-stats-card">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Conversions</span>
        </div>
        <div class="aural-stats-card__value">3,842</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Last 30 days</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">CPU Usage</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="cpu" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">72%</div>
        <div class="aural-stats-card__progress">
          <div
            class="aural-stats-card__progress-bar"
            style="width: 72%"
            role="progressbar"
            aria-valuenow="72"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">High load detected</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Project Completion</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="check-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">85%</div>
        <div class="aural-stats-card__progress">
          <div
            class="aural-stats-card__progress-bar"
            style="width: 85%"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">17 of 20 tasks done</span>
        </div>
      </div>
    </div>
  `,
};

/**
 * Loading state with skeleton placeholder.
 */
export const Loading: Story = {
  render: () => html`
    <div class="aural-stats-card">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Loading...</span>
        <div class="aural-stats-card__icon">
          <i
            data-lucide="loader-2"
            aria-hidden="true"
            style="animation: spin 1s linear infinite;"
          ></i>
        </div>
      </div>
      <div class="aural-stats-card__value" style="opacity: 0.5;">---</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Fetching data...</span>
      </div>
    </div>
    <style>
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    </style>
  `,
};

/**
 * Multiple stats cards with progress bars showing resource usage.
 */
export const WithProgressBars: Story = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-6);"
    >
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Storage Used</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="hard-drive" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">67.8 GB</div>
        <div class="aural-stats-card__progress">
          <div
            class="aural-stats-card__progress-bar"
            style="width: 67.8%"
            role="progressbar"
            aria-valuenow="67.8"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">of 100 GB total</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Project Completion</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="check-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">85%</div>
        <div class="aural-stats-card__progress">
          <div
            class="aural-stats-card__progress-bar"
            style="width: 85%"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">17 of 20 tasks done</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">CPU Usage</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="cpu" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">72%</div>
        <div class="aural-stats-card__progress">
          <div
            class="aural-stats-card__progress-bar"
            style="width: 72%"
            role="progressbar"
            aria-valuenow="72"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">High load detected</span>
        </div>
      </div>
    </div>
  `,
};

/**
 * Large featured cards for highlighting key metrics on a dashboard.
 */
export const FeaturedCards: Story = {
  render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);"
    >
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Monthly Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="trending-up" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$124,590</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="arrow-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            18.2% increase
          </span>
          <span class="aural-stats-card__description">from last month</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">New Customers</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="user-plus" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">1,284</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="arrow-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            24% increase
          </span>
          <span class="aural-stats-card__description">from last month</span>
        </div>
      </div>
    </div>
  `,
};

/**
 * Compare how the stats card appears across all available themes.
 * Useful for ensuring consistent appearance and accessibility.
 */
export const ThemeComparison: Story = {
  render: () => html`
    <div style="display: grid; gap: var(--space-8);">
      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">
          Primary Variant
        </h3>
        <div class="aural-stats-card aural-stats-card--primary">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Total Revenue</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="dollar-sign" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">$45,231</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--up">
              <i
                data-lucide="trending-up"
                class="aural-stats-card__trend-icon"
                aria-hidden="true"
              ></i>
              12.5%
            </span>
            <span class="aural-stats-card__description">vs last month</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">
          Success Variant
        </h3>
        <div class="aural-stats-card aural-stats-card--success">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Active Users</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="users" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">8,492</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--up">
              <i
                data-lucide="trending-up"
                class="aural-stats-card__trend-icon"
                aria-hidden="true"
              ></i>
              8.1%
            </span>
            <span class="aural-stats-card__description">vs last week</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">
          Warning Variant
        </h3>
        <div class="aural-stats-card aural-stats-card--warning">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">CPU Usage</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="cpu" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">72%</div>
          <div class="aural-stats-card__progress">
            <div
              class="aural-stats-card__progress-bar"
              style="width: 72%"
              role="progressbar"
              aria-valuenow="72"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__description">High load detected</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">
          Error Variant
        </h3>
        <div class="aural-stats-card aural-stats-card--error">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Error Rate</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="alert-circle" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">2.3%</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--neutral">
              <i data-lucide="minus" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              0.0%
            </span>
            <span class="aural-stats-card__description">no change</span>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'View how stats cards appear across all themes. Use the theme switcher in the toolbar to compare.',
      },
    },
  },
};
