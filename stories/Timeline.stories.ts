/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

declare const lucide: any;

const meta: Meta = {
  title: 'Components/Timeline',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Timeline Component

Display chronological sequences of events with clear visual progression and status indicators. Timelines help users understand the order and relationship of events over time.

Use timelines to show project milestones, order tracking, activity history, version history, or any sequence of events that benefits from chronological visualization.

## When to Use

- **Order tracking**: Show shipping status and package delivery progress
- **Project milestones**: Display project phases, sprints, and completion status
- **Activity feeds**: Show chronological user actions and system events
- **Process flows**: Visualize multi-step workflows and approval chains
- **Version history**: Display changelog or document revision history

## When NOT to Use

- **Non-chronological data**: Use lists or cards for unordered information
- **Complex workflows**: Use flowcharts for branching or conditional processes
- **Real-time updates**: Consider activity feeds or notification components
- **Small datasets**: For 2-3 items, simpler layouts may be more appropriate

## Framework Examples

### Vanilla HTML
\`\`\`html
<!-- Vertical timeline -->
<ol class="aural-timeline timeline-modern" role="list" aria-label="Project timeline">
  <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
    <time class="aural-timeline__time" datetime="2024-01-15">Jan 15, 2024</time>
    <div class="aural-timeline__content">
      <h3 class="aural-timeline__title">Project Started</h3>
      <p class="aural-timeline__description">Initial planning and setup</p>
      <span class="sr-only">Status: Completed</span>
    </div>
  </li>
  <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
    <div class="aural-timeline__time">In Progress</div>
    <div class="aural-timeline__content">
      <h3 class="aural-timeline__title">Development</h3>
      <p class="aural-timeline__description">Building core features</p>
      <span class="sr-only">Status: In Progress</span>
    </div>
  </li>
  <li class="aural-timeline__item" role="listitem">
    <div class="aural-timeline__time">Pending</div>
    <div class="aural-timeline__content">
      <h3 class="aural-timeline__title">Launch</h3>
      <p class="aural-timeline__description">Public release</p>
      <span class="sr-only">Status: Pending</span>
    </div>
  </li>
</ol>

<!-- Horizontal timeline -->
<div class="aural-timeline timeline-horizontal">
  <div class="aural-timeline__item aural-timeline__item--completed">
    <div class="aural-timeline__marker">
      <i data-lucide="check-circle" aria-hidden="true"></i>
    </div>
    <div class="aural-timeline__connector"></div>
    <div class="aural-timeline__content">
      <div class="aural-timeline__time">Step 1</div>
      <div class="aural-timeline__title">Setup</div>
    </div>
  </div>
</div>
\`\`\`

### React
\`\`\`jsx
interface TimelineItemProps {
  time: string;
  title: string;
  description?: string;
  status: 'completed' | 'active' | 'pending' | 'warning' | 'error';
  datetime?: string;
}

function TimelineItem({ time, title, description, status, datetime }: TimelineItemProps) {
  const statusText = {
    completed: 'Completed',
    active: 'In Progress',
    pending: 'Pending',
    warning: 'Warning',
    error: 'Error'
  }[status];

  return (
    <li className={\`aural-timeline__item aural-timeline__item--\${status}\`} role="listitem">
      {datetime ? (
        <time className="aural-timeline__time" dateTime={datetime}>{time}</time>
      ) : (
        <div className="aural-timeline__time">{time}</div>
      )}
      <div className="aural-timeline__content">
        <h3 className="aural-timeline__title">{title}</h3>
        {description && (
          <p className="aural-timeline__description">{description}</p>
        )}
        <span className="sr-only">Status: {statusText}</span>
      </div>
    </li>
  );
}

// Complete timeline component
interface TimelineProps {
  items: TimelineItemProps[];
  layout?: 'vertical' | 'horizontal' | 'compact';
  label?: string;
}

function Timeline({ items, layout = 'vertical', label = 'Timeline' }: TimelineProps) {
  const className = layout === 'vertical' ? 'timeline-modern' :
                    layout === 'horizontal' ? 'timeline-horizontal' :
                    'timeline-compact';

  const Element = layout === 'vertical' ? 'ol' : 'div';

  return (
    <Element className={\`aural-timeline \${className}\`} role="list" aria-label={label}>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </Element>
  );
}

// Usage
<Timeline
  items={[
    {
      time: 'Jan 15, 2024',
      datetime: '2024-01-15',
      title: 'Project Started',
      description: 'Initial planning completed',
      status: 'completed'
    },
    {
      time: 'Today',
      title: 'Development',
      description: 'Building features',
      status: 'active'
    }
  ]}
  layout="vertical"
  label="Project timeline"
/>
\`\`\`

### Vue
\`\`\`vue
<template>
  <component
    :is="layout === 'vertical' ? 'ol' : 'div'"
    :class="[\`aural-timeline\`, layoutClass]"
    role="list"
    :aria-label="label"
  >
    <component
      v-for="(item, index) in items"
      :key="index"
      :is="layout === 'vertical' ? 'li' : 'div'"
      :class="[\`aural-timeline__item\`, \`aural-timeline__item--\${item.status}\`]"
      role="listitem"
    >
      <time
        v-if="item.datetime"
        class="aural-timeline__time"
        :datetime="item.datetime"
      >
        {{ item.time }}
      </time>
      <div v-else class="aural-timeline__time">{{ item.time }}</div>

      <div class="aural-timeline__content">
        <h3 class="aural-timeline__title">{{ item.title }}</h3>
        <p v-if="item.description" class="aural-timeline__description">
          {{ item.description }}
        </p>
        <span class="sr-only">Status: {{ getStatusText(item.status) }}</span>
      </div>
    </component>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: { type: Array, required: true },
  layout: { type: String, default: 'vertical' },
  label: { type: String, default: 'Timeline' }
});

const layoutClass = computed(() => {
  return props.layout === 'vertical' ? 'timeline-modern' :
         props.layout === 'horizontal' ? 'timeline-horizontal' :
         'timeline-compact';
});

function getStatusText(status) {
  const statusMap = {
    completed: 'Completed',
    active: 'In Progress',
    pending: 'Pending',
    warning: 'Warning',
    error: 'Error'
  };
  return statusMap[status] || status;
}
</script>

<!-- Usage -->
<Timeline
  :items="[
    { time: 'Jan 15', datetime: '2024-01-15', title: 'Started', status: 'completed' },
    { time: 'Today', title: 'In Progress', status: 'active' }
  ]"
  layout="vertical"
  label="Project timeline"
/>
\`\`\`

### Svelte
\`\`\`svelte
<script>
  export let items = [];
  export let layout = 'vertical';
  export let label = 'Timeline';

  const layoutClass = layout === 'vertical' ? 'timeline-modern' :
                       layout === 'horizontal' ? 'timeline-horizontal' :
                       'timeline-compact';

  const elementTag = layout === 'vertical' ? 'ol' : 'div';

  function getStatusText(status) {
    const statusMap = {
      completed: 'Completed',
      active: 'In Progress',
      pending: 'Pending',
      warning: 'Warning',
      error: 'Error'
    };
    return statusMap[status] || status;
  }
</script>

<svelte:element
  this={elementTag}
  class="aural-timeline {layoutClass}"
  role="list"
  aria-label={label}
>
  {#each items as item}
    <svelte:element
      this={layout === 'vertical' ? 'li' : 'div'}
      class="aural-timeline__item aural-timeline__item--{item.status}"
      role="listitem"
    >
      {#if item.datetime}
        <time class="aural-timeline__time" datetime={item.datetime}>
          {item.time}
        </time>
      {:else}
        <div class="aural-timeline__time">{item.time}</div>
      {/if}

      <div class="aural-timeline__content">
        <h3 class="aural-timeline__title">{item.title}</h3>
        {#if item.description}
          <p class="aural-timeline__description">{item.description}</p>
        {/if}
        <span class="sr-only">Status: {getStatusText(item.status)}</span>
      </div>
    </svelte:element>
  {/each}
</svelte:element>
\`\`\`

## Accessibility

1. **Semantic HTML**: Use \`<ol>\` (ordered list) for vertical timelines with chronological order
2. **List semantics**: Timeline items use \`<li>\` elements with \`role="listitem"\`
3. **ARIA labels**: Timeline container has \`aria-label\` describing its purpose
4. **Time elements**: Use \`<time>\` with \`datetime\` attribute for machine-readable dates
5. **Heading hierarchy**: Timeline item titles use appropriate heading levels (h3 by default)
6. **Screen reader text**: Hidden text announces status (Completed, In Progress, Pending, etc.)
7. **Color independence**: Status conveyed through text and icons, not color alone
8. **Focus indicators**: Interactive timeline items have visible focus rings
9. **Keyboard navigation**: Navigate between items using Tab key
10. **Text alternatives**: Icons include \`aria-hidden="true"\` as they're decorative
11. **Responsive text**: Font sizes remain readable at all screen sizes
12. **Motion preferences**: Animations respect \`prefers-reduced-motion\` setting
13. **Landmarks**: Consider wrapping in \`<section>\` with descriptive label for long timelines
14. **Touch targets**: Ensure minimum 44×44px for interactive elements
15. **Contrast ratios**: Text meets WCAG AA standards (4.5:1 minimum)

## Usage Guidelines

### Best Practices

- **Clear timestamps**: Use consistent date/time formats throughout
- **Descriptive titles**: Make event titles scannable and descriptive
- **Status indicators**: Use color and icons together to show status
- **Chronological order**: Most recent events first (top) or last (bottom) consistently
- **Appropriate detail**: Balance detail level across all timeline items
- **Visual hierarchy**: Emphasize active/current events

### Layout Variants

**Vertical (Modern)**:
- Best for detailed information with descriptions
- Timestamps on the left, content on the right
- Ideal for desktop viewports and long timelines

**Horizontal**:
- Best for step-by-step processes (3-6 steps)
- Works well for onboarding flows and wizards
- Converts to vertical on mobile automatically

**Compact**:
- Best for activity feeds with many items
- Minimal spacing and smaller text
- Good for sidebars and narrow containers

### Status Indicators

- **Completed** (green): Successfully finished events
- **Active** (primary): Currently in progress
- **Pending** (neutral): Future or scheduled events
- **Warning** (orange): Needs attention or delayed
- **Error** (red): Failed or blocked events

### Mobile Considerations

- Vertical layout recommended for mobile devices
- Horizontal timelines convert to vertical on small screens (< 768px)
- Reduced padding and font sizes maintain readability
- Timestamps may stack above titles on narrow screens
- Touch-friendly spacing between items
- Icons remain visible but may scale smaller
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper function to initialize Lucide icons
const initIcons = () => {
  setTimeout(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 0);
};

export const VerticalTimeline: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Project timeline">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2023-12-15T14:30">Dec 15, 2023<br>2:30 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Project Initialized</h3>
            <p class="aural-timeline__description">Created repository and set up initial project structure</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2023-12-20T16:15">Dec 20, 2023<br>4:15 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Core Components Built</h3>
            <p class="aural-timeline__description">Implemented reusable components with accessibility support</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <div class="aural-timeline__time">In Progress</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Documentation & Testing</h3>
            <p class="aural-timeline__description">Writing guides and adding interactive examples</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Coming Soon</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Public Release v1.0</h3>
            <p class="aural-timeline__description">Official launch with npm package and documentation</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `;

    return container;
  },
};

export const WithTimestamps: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Order tracking timeline">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T10:30">Jan 15<br>10:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Placed</h3>
            <p class="aural-timeline__description">Order #12345 has been placed successfully. Payment confirmed.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T14:15">Jan 15<br>2:15 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Confirmed</h3>
            <p class="aural-timeline__description">Your order has been confirmed and is being prepared for shipment.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-18">Jan 18<br>Today</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Out for Delivery</h3>
            <p class="aural-timeline__description">Package is on the delivery truck and will arrive by 5:00 PM.</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Pending</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Delivered</h3>
            <p class="aural-timeline__description">Package will be delivered to your address.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `;

    return container;
  },
};

export const StatusVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <div class="aural-timeline timeline-modern">
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__time">Completed</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Completed Task</div>
            <div class="aural-timeline__description">Successfully completed with green indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active">
          <div class="aural-timeline__time">Active</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Active Task</div>
            <div class="aural-timeline__description">Currently in progress with primary color</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--warning">
          <div class="aural-timeline__time">Warning</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Warning Task</div>
            <div class="aural-timeline__description">Needs attention with warning indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--error">
          <div class="aural-timeline__time">Error</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Error Task</div>
            <div class="aural-timeline__description">Failed or blocked with error indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__time">Default</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Pending Task</div>
            <div class="aural-timeline__description">Future or pending event with neutral color</div>
          </div>
        </div>
      </div>
    `;

    return container;
  },
};

export const HorizontalTimeline: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    container.innerHTML = `
      <div class="aural-timeline timeline-horizontal">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="check-circle" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 1</div>
            <div class="aural-timeline__title">Account Created</div>
            <div class="aural-timeline__description">Signed up successfully</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="check-circle" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 2</div>
            <div class="aural-timeline__title">Email Verified</div>
            <div class="aural-timeline__description">Confirmation email sent</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active aural-timeline__item--primary">
          <div class="aural-timeline__marker">
            <i data-lucide="user" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 3</div>
            <div class="aural-timeline__title">Profile Setup</div>
            <div class="aural-timeline__description">Complete your profile</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="settings" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 4</div>
            <div class="aural-timeline__title">Preferences</div>
            <div class="aural-timeline__description">Set your preferences</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="rocket" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 5</div>
            <div class="aural-timeline__title">Get Started</div>
            <div class="aural-timeline__description">Ready to use</div>
          </div>
        </div>
      </div>
    `;

    initIcons();
    return container;
  },
};

export const CompactTimeline: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    container.innerHTML = `
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2 minutes ago</div>
            <div class="aural-timeline__title">Sarah Johnson joined the Design Team</div>
            <div class="aural-timeline__description">New team member as Senior Product Designer</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">15 minutes ago</div>
            <div class="aural-timeline__title">Pull Request Merged</div>
            <div class="aural-timeline__description">Feature/new-components merged into main by @johndoe</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">1 hour ago</div>
            <div class="aural-timeline__title">Build Warning</div>
            <div class="aural-timeline__description">CI/CD pipeline completed with 3 warnings</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Yesterday at 4:30 PM</div>
            <div class="aural-timeline__title">Documentation Updated</div>
            <div class="aural-timeline__description">API docs updated with new endpoints</div>
          </div>
        </div>
      </div>
    `;

    return container;
  },
};

export const ActivityFeed: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    container.innerHTML = `
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Just now</div>
            <div class="aural-timeline__title">New comment on "Feature Request: Dark Mode"</div>
            <div class="aural-timeline__description">@alex_dev: "Working on this now, will have a PR ready soon"</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">5 minutes ago</div>
            <div class="aural-timeline__title">Issue #142 closed</div>
            <div class="aural-timeline__description">Fixed navigation menu bug in mobile view</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">30 minutes ago</div>
            <div class="aural-timeline__title">Deployment to staging</div>
            <div class="aural-timeline__description">Version 2.4.0 deployed successfully</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2 hours ago</div>
            <div class="aural-timeline__title">Security update available</div>
            <div class="aural-timeline__description">3 npm packages need to be updated</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--error">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Yesterday at 11:45 AM</div>
            <div class="aural-timeline__title">Build failed</div>
            <div class="aural-timeline__description">Tests failed on production branch</div>
          </div>
        </div>
      </div>
    `;

    return container;
  },
};

export const OrderTracking: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Order tracking">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T10:30">Jan 15<br>10:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Placed</h3>
            <p class="aural-timeline__description">Order #ORD-2024-0123 placed successfully. Payment of $159.99 confirmed via credit card.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T14:20">Jan 15<br>2:20 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Confirmed</h3>
            <p class="aural-timeline__description">Seller confirmed order. Items are being prepared for shipment.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-16T09:00">Jan 16<br>9:00 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Package Shipped</h3>
            <p class="aural-timeline__description">Package shipped via FedEx. Tracking number: TRK987654321</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-17T08:30">Jan 17<br>8:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">In Transit</h3>
            <p class="aural-timeline__description">Package arrived at distribution center in Chicago, IL</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-18T07:15">Jan 18<br>7:15 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Out for Delivery</h3>
            <p class="aural-timeline__description">Package is on the delivery truck. Estimated arrival: Today by 5:00 PM</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Pending</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Delivered</h3>
            <p class="aural-timeline__description">Package will be delivered to 123 Main St, Apt 4B</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `;

    return container;
  },
};

export const ProjectMilestones: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';

    container.innerHTML = `
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Project milestones">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-10">Jan 10, 2024<br>Sprint 1</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Planning & Research</h3>
            <p class="aural-timeline__description">Completed user research, competitive analysis, and project requirements gathering. Created initial wireframes and design system foundation.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-24">Jan 24, 2024<br>Sprint 2</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Design & Prototyping</h3>
            <p class="aural-timeline__description">Finalized UI designs, created interactive prototypes, and conducted usability testing with 15 participants.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-02-07">Feb 7, 2024<br>Sprint 3</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Development Phase 1</h3>
            <p class="aural-timeline__description">Building core features: authentication, dashboard, and user profile. Currently 65% complete.</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Feb 21, 2024<br>Sprint 4</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Development Phase 2</h3>
            <p class="aural-timeline__description">Advanced features, integrations, and performance optimization.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Mar 6, 2024<br>Sprint 5</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Testing & QA</h3>
            <p class="aural-timeline__description">Comprehensive testing, bug fixes, and final polishing.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Mar 20, 2024<br>Release</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Launch v1.0</h3>
            <p class="aural-timeline__description">Public release with full documentation and support materials.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `;

    return container;
  },
};

export const WithIcons: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    container.innerHTML = `
      <div class="aural-timeline timeline-horizontal">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="user-plus" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Completed</div>
            <div class="aural-timeline__title">Sign Up</div>
            <div class="aural-timeline__description">Create account</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="mail-check" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Completed</div>
            <div class="aural-timeline__title">Verify Email</div>
            <div class="aural-timeline__description">Confirm address</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active aural-timeline__item--primary">
          <div class="aural-timeline__marker">
            <i data-lucide="credit-card" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Active</div>
            <div class="aural-timeline__title">Add Payment</div>
            <div class="aural-timeline__description">Enter card details</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="shield-check" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Pending</div>
            <div class="aural-timeline__title">Verify Identity</div>
            <div class="aural-timeline__description">Upload documents</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="party-popper" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Final</div>
            <div class="aural-timeline__title">All Set!</div>
            <div class="aural-timeline__description">Start using app</div>
          </div>
        </div>
      </div>
    `;

    initIcons();
    return container;
  },
};

export const MixedStates: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    container.innerHTML = `
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">9:00 AM</div>
            <div class="aural-timeline__title">Morning standup completed</div>
            <div class="aural-timeline__description">Team sync - all members present</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">11:30 AM</div>
            <div class="aural-timeline__title">Code review approved</div>
            <div class="aural-timeline__description">PR #234 merged to main branch</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2:15 PM</div>
            <div class="aural-timeline__title">Build completed with warnings</div>
            <div class="aural-timeline__description">3 ESLint warnings detected</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--error">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">3:45 PM</div>
            <div class="aural-timeline__title">Deployment failed</div>
            <div class="aural-timeline__description">Database migration error - rolled back</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">4:30 PM</div>
            <div class="aural-timeline__title">Investigating deployment issue</div>
            <div class="aural-timeline__description">DevOps team working on fix</div>
          </div>
        </div>
      </div>
    `;

    return container;
  },
};

export const AllLayouts: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '3rem';

    container.innerHTML = `
      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Modern (Vertical)</h3>
        <div class="aural-timeline timeline-modern" style="max-width: 800px;">
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__time">Jan 15</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Task Completed</div>
              <div class="aural-timeline__description">Successfully finished the task</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__time">Today</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">In Progress</div>
              <div class="aural-timeline__description">Working on implementation</div>
            </div>
          </div>
          <div class="aural-timeline__item">
            <div class="aural-timeline__time">Pending</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Next Step</div>
              <div class="aural-timeline__description">Upcoming milestone</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Horizontal</h3>
        <div class="aural-timeline timeline-horizontal">
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
            <div class="aural-timeline__marker">
              <i data-lucide="check" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 1</div>
              <div class="aural-timeline__title">Start</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__marker">
              <i data-lucide="loader" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 2</div>
              <div class="aural-timeline__title">Process</div>
            </div>
          </div>
          <div class="aural-timeline__item">
            <div class="aural-timeline__marker">
              <i data-lucide="flag" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 3</div>
              <div class="aural-timeline__title">Complete</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Compact</h3>
        <div class="aural-timeline timeline-compact" style="max-width: 600px;">
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">2 min ago</div>
              <div class="aural-timeline__title">User logged in</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">15 min ago</div>
              <div class="aural-timeline__title">Settings updated</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">1 hour ago</div>
              <div class="aural-timeline__title">Warning detected</div>
            </div>
          </div>
        </div>
      </div>
    `;

    initIcons();
    return container;
  },
};

export const ThemeComparison: Story = {
  render: () => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.style.padding = '1rem';

      container.innerHTML = `
        <div class="aural-timeline timeline-modern" style="max-width: 600px;">
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__time">Jan 15</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Completed</div>
              <div class="aural-timeline__description">Task finished successfully</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__time">Today</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">In Progress</div>
              <div class="aural-timeline__description">Currently working</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--warning">
            <div class="aural-timeline__time">Next</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Warning</div>
              <div class="aural-timeline__description">Needs attention</div>
            </div>
          </div>
        </div>
      `;

      return container;
    });
  },
};
