const ja={title:"Components/Stats Card",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error"],description:"Semantic color variant",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:"The label describing the metric"},value:{control:"text",description:"The main value/metric to display"},icon:{control:"text",description:'Lucide icon name (e.g., "dollar-sign", "users")'},hasIcon:{control:"boolean",description:"Whether to show an icon"},hasTrend:{control:"boolean",description:"Whether to show trend indicator"},trendDirection:{control:"select",options:["up","down","neutral"],description:"Trend direction"},trendValue:{control:"text",description:"Trend percentage/value"},description:{control:"text",description:"Footer description text"},hasProgress:{control:"boolean",description:"Whether to show progress bar"},progressValue:{control:{type:"range",min:0,max:100,step:1},description:"Progress bar percentage (0-100)"}},parameters:{docs:{description:{component:`
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
<\/script>
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
<\/script>

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
        `.trim()}}}},s={args:{label:"Page Views",value:"124.5K",description:"Last 30 days",hasIcon:!1,hasTrend:!1,hasProgress:!1,variant:"default"},render:a=>html`
    <div
      class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${a.description}</span>
      </div>
    </div>
  `},r={args:{label:"Total Revenue",value:"$45,231",description:"This month",icon:"dollar-sign",hasIcon:!0,hasTrend:!1,hasProgress:!1,variant:"primary"},render:a=>html`
    <div
      class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${a.icon}" aria-hidden="true"></i>
              </div>
            `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${a.description}</span>
      </div>
    </div>
  `},t={args:{label:"Active Users",value:"8,492",description:"vs last week",icon:"users",hasIcon:!0,hasTrend:!0,trendDirection:"up",trendValue:"8.1%",hasProgress:!1,variant:"success"},render:a=>html`
    <div
      class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${a.icon}" aria-hidden="true"></i>
              </div>
            `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasTrend||a.description?html`
            <div class="aural-stats-card__footer">
              ${a.hasTrend?html`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--${a.trendDirection}"
                    >
                      <i
                        data-lucide="${a.trendDirection==="up"?"trending-up":a.trendDirection==="down"?"trending-down":"minus"}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      ${a.trendValue}
                    </span>
                  `:""}
              ${a.description?html` <span class="aural-stats-card__description">${a.description}</span> `:""}
            </div>
          `:""}
    </div>
  `},d={args:{label:"Customer Loss",value:"127",description:"vs yesterday",icon:"trending-down",hasIcon:!0,hasTrend:!0,trendDirection:"down",trendValue:"3.2%",hasProgress:!1,variant:"warning"},render:a=>html`
    <div
      class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${a.icon}" aria-hidden="true"></i>
              </div>
            `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasTrend||a.description?html`
            <div class="aural-stats-card__footer">
              ${a.hasTrend?html`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--${a.trendDirection}"
                    >
                      <i
                        data-lucide="${a.trendDirection==="up"?"trending-up":a.trendDirection==="down"?"trending-down":"minus"}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      ${a.trendValue}
                    </span>
                  `:""}
              ${a.description?html` <span class="aural-stats-card__description">${a.description}</span> `:""}
            </div>
          `:""}
    </div>
  `},e={args:{label:"Error Rate",value:"2.3%",description:"no change",icon:"alert-circle",hasIcon:!0,hasTrend:!0,trendDirection:"neutral",trendValue:"0.0%",hasProgress:!1,variant:"error"},render:a=>html`
    <div
      class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${a.icon}" aria-hidden="true"></i>
              </div>
            `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasTrend||a.description?html`
            <div class="aural-stats-card__footer">
              ${a.hasTrend?html`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--${a.trendDirection}"
                    >
                      <i
                        data-lucide="${a.trendDirection==="up"?"trending-up":a.trendDirection==="down"?"trending-down":"minus"}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      ${a.trendValue}
                    </span>
                  `:""}
              ${a.description?html` <span class="aural-stats-card__description">${a.description}</span> `:""}
            </div>
          `:""}
    </div>
  `},i={args:{label:"Storage Used",value:"67.8 GB",description:"of 100 GB total",icon:"hard-drive",hasIcon:!0,hasTrend:!1,hasProgress:!0,progressValue:67.8,variant:"primary"},render:a=>html`
    <div
      class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
              <div class="aural-stats-card__icon">
                <i data-lucide="${a.icon}" aria-hidden="true"></i>
              </div>
            `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasProgress?html`
            <div class="aural-stats-card__progress">
              <div
                class="aural-stats-card__progress-bar"
                style="width: ${a.progressValue}%"
                role="progressbar"
                aria-valuenow="${a.progressValue}"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          `:""}
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${a.description}</span>
      </div>
    </div>
  `},n={render:()=>html`
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
  `},l={render:()=>html`
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
  `},c={render:()=>html`
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
  `},o={render:()=>html`
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
  `},u={render:()=>html`
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
  `},v={render:()=>html`
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
  `},_={render:()=>html`
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
  `},p={render:()=>html`
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
  `},h={render:()=>html`
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
  `},m={render:()=>html`
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
  `,parameters:{docs:{description:{story:"View how stats cards appear across all themes. Use the theme switcher in the toolbar to compare."}}}};var g,f,b,y,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Page Views',
    value: '124.5K',
    description: 'Last 30 days',
    hasIcon: false,
    hasTrend: false,
    hasProgress: false,
    variant: 'default'
  },
  render: args => html\`
    <div
      class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">\${args.description}</span>
      </div>
    </div>
  \`
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Basic stats card with just a label, value, and description.",...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var $,x,P,T,S;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Total Revenue',
    value: '$45,231',
    description: 'This month',
    icon: 'dollar-sign',
    hasIcon: true,
    hasTrend: false,
    hasProgress: false,
    variant: 'primary'
  },
  render: args => html\`
    <div
      class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
              <div class="aural-stats-card__icon">
                <i data-lucide="\${args.icon}" aria-hidden="true"></i>
              </div>
            \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">\${args.description}</span>
      </div>
    </div>
  \`
}`,...(P=(x=r.parameters)==null?void 0:x.docs)==null?void 0:P.source},description:{story:"Stats card with an icon for visual categorization.",...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var V,U,C,D,I;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    variant: 'success'
  },
  render: args => html\`
    <div
      class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
              <div class="aural-stats-card__icon">
                <i data-lucide="\${args.icon}" aria-hidden="true"></i>
              </div>
            \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasTrend || args.description ? html\`
            <div class="aural-stats-card__footer">
              \${args.hasTrend ? html\`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--\${args.trendDirection}"
                    >
                      <i
                        data-lucide="\${args.trendDirection === 'up' ? 'trending-up' : args.trendDirection === 'down' ? 'trending-down' : 'minus'}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      \${args.trendValue}
                    </span>
                  \` : ''}
              \${args.description ? html\` <span class="aural-stats-card__description">\${args.description}</span> \` : ''}
            </div>
          \` : ''}
    </div>
  \`
}`,...(C=(U=t.parameters)==null?void 0:U.docs)==null?void 0:C.source},description:{story:"Stats card with an upward trend indicator showing positive growth.",...(I=(D=t.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var k,W,R,N,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    variant: 'warning'
  },
  render: args => html\`
    <div
      class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
              <div class="aural-stats-card__icon">
                <i data-lucide="\${args.icon}" aria-hidden="true"></i>
              </div>
            \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasTrend || args.description ? html\`
            <div class="aural-stats-card__footer">
              \${args.hasTrend ? html\`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--\${args.trendDirection}"
                    >
                      <i
                        data-lucide="\${args.trendDirection === 'up' ? 'trending-up' : args.trendDirection === 'down' ? 'trending-down' : 'minus'}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      \${args.trendValue}
                    </span>
                  \` : ''}
              \${args.description ? html\` <span class="aural-stats-card__description">\${args.description}</span> \` : ''}
            </div>
          \` : ''}
    </div>
  \`
}`,...(R=(W=d.parameters)==null?void 0:W.docs)==null?void 0:R.source},description:{story:"Stats card with a downward trend indicator showing decline.",...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.description}}};var E,L,B,G,F;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    variant: 'error'
  },
  render: args => html\`
    <div
      class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
              <div class="aural-stats-card__icon">
                <i data-lucide="\${args.icon}" aria-hidden="true"></i>
              </div>
            \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasTrend || args.description ? html\`
            <div class="aural-stats-card__footer">
              \${args.hasTrend ? html\`
                    <span
                      class="aural-stats-card__trend aural-stats-card__trend--\${args.trendDirection}"
                    >
                      <i
                        data-lucide="\${args.trendDirection === 'up' ? 'trending-up' : args.trendDirection === 'down' ? 'trending-down' : 'minus'}"
                        class="aural-stats-card__trend-icon"
                        aria-hidden="true"
                      ></i>
                      \${args.trendValue}
                    </span>
                  \` : ''}
              \${args.description ? html\` <span class="aural-stats-card__description">\${args.description}</span> \` : ''}
            </div>
          \` : ''}
    </div>
  \`
}`,...(B=(L=e.parameters)==null?void 0:L.docs)==null?void 0:B.source},description:{story:"Stats card with a neutral trend indicator showing no change.",...(F=(G=e.parameters)==null?void 0:G.docs)==null?void 0:F.description}}};var H,j,M,O,K;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Storage Used',
    value: '67.8 GB',
    description: 'of 100 GB total',
    icon: 'hard-drive',
    hasIcon: true,
    hasTrend: false,
    hasProgress: true,
    progressValue: 67.8,
    variant: 'primary'
  },
  render: args => html\`
    <div
      class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}"
    >
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
              <div class="aural-stats-card__icon">
                <i data-lucide="\${args.icon}" aria-hidden="true"></i>
              </div>
            \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasProgress ? html\`
            <div class="aural-stats-card__progress">
              <div
                class="aural-stats-card__progress-bar"
                style="width: \${args.progressValue}%"
                role="progressbar"
                aria-valuenow="\${args.progressValue}"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          \` : ''}
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">\${args.description}</span>
      </div>
    </div>
  \`
}`,...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source},description:{story:"Stats card with a progress bar showing completion or usage percentage.",...(K=(O=i.parameters)==null?void 0:O.docs)==null?void 0:K.description}}};var z,q,Q,J,X;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(Q=(q=n.parameters)==null?void 0:q.docs)==null?void 0:Q.source},description:{story:"Primary variant - used for default metrics and brand-related data.",...(X=(J=n.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};var Y,Z,aa,sa,ra;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(aa=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:aa.source},description:{story:"Success variant - used for positive metrics, growth, and achievements.",...(ra=(sa=l.parameters)==null?void 0:sa.docs)==null?void 0:ra.description}}};var ta,da,ea,ia,na;c.parameters={...c.parameters,docs:{...(ta=c.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(ea=(da=c.parameters)==null?void 0:da.docs)==null?void 0:ea.source},description:{story:"Warning variant - used for cautionary metrics and approaching limits.",...(na=(ia=c.parameters)==null?void 0:ia.docs)==null?void 0:na.description}}};var la,ca,oa,ua,va;o.parameters={...o.parameters,docs:{...(la=o.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(oa=(ca=o.parameters)==null?void 0:ca.docs)==null?void 0:oa.source},description:{story:"Error variant - used for negative metrics, errors, and critical issues.",...(va=(ua=o.parameters)==null?void 0:ua.docs)==null?void 0:va.description}}};var _a,pa,ha,ma,ga;u.parameters={...u.parameters,docs:{...(_a=u.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(ha=(pa=u.parameters)==null?void 0:pa.docs)==null?void 0:ha.source},description:{story:"All semantic color variants displayed together for comparison.",...(ga=(ma=u.parameters)==null?void 0:ma.docs)==null?void 0:ga.description}}};var fa,ba,ya,wa,$a;v.parameters={...v.parameters,docs:{...(fa=v.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(ya=(ba=v.parameters)==null?void 0:ba.docs)==null?void 0:ya.source},description:{story:`Dashboard grid showing multiple stats cards in a responsive layout.
This is a common pattern for analytics dashboards.`,...($a=(wa=v.parameters)==null?void 0:wa.docs)==null?void 0:$a.description}}};var xa,Pa,Ta,Sa,Va;_.parameters={..._.parameters,docs:{...(xa=_.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(Ta=(Pa=_.parameters)==null?void 0:Pa.docs)==null?void 0:Ta.source},description:{story:"Loading state with skeleton placeholder.",...(Va=(Sa=_.parameters)==null?void 0:Sa.docs)==null?void 0:Va.description}}};var Ua,Ca,Da,Ia,ka;p.parameters={...p.parameters,docs:{...(Ua=p.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(Da=(Ca=p.parameters)==null?void 0:Ca.docs)==null?void 0:Da.source},description:{story:"Multiple stats cards with progress bars showing resource usage.",...(ka=(Ia=p.parameters)==null?void 0:Ia.docs)==null?void 0:ka.description}}};var Wa,Ra,Na,Aa,Ea;h.parameters={...h.parameters,docs:{...(Wa=h.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(Na=(Ra=h.parameters)==null?void 0:Ra.docs)==null?void 0:Na.source},description:{story:"Large featured cards for highlighting key metrics on a dashboard.",...(Ea=(Aa=h.parameters)==null?void 0:Aa.docs)==null?void 0:Ea.description}}};var La,Ba,Ga,Fa,Ha;m.parameters={...m.parameters,docs:{...(La=m.parameters)==null?void 0:La.docs,source:{originalSource:`{
  render: () => html\`
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
  \`,
  parameters: {
    docs: {
      description: {
        story: 'View how stats cards appear across all themes. Use the theme switcher in the toolbar to compare.'
      }
    }
  }
}`,...(Ga=(Ba=m.parameters)==null?void 0:Ba.docs)==null?void 0:Ga.source},description:{story:`Compare how the stats card appears across all available themes.
Useful for ensuring consistent appearance and accessibility.`,...(Ha=(Fa=m.parameters)==null?void 0:Fa.docs)==null?void 0:Ha.description}}};const Ma=["Basic","WithIcon","WithTrendUp","WithTrendDown","WithTrendNeutral","WithProgress","VariantPrimary","VariantSuccess","VariantWarning","VariantError","AllVariants","DashboardGrid","Loading","WithProgressBars","FeaturedCards","ThemeComparison"];export{u as AllVariants,s as Basic,v as DashboardGrid,h as FeaturedCards,_ as Loading,m as ThemeComparison,o as VariantError,n as VariantPrimary,l as VariantSuccess,c as VariantWarning,r as WithIcon,i as WithProgress,p as WithProgressBars,d as WithTrendDown,e as WithTrendNeutral,t as WithTrendUp,Ma as __namedExportsOrder,ja as default};
