import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/DateRangePicker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Date Range Picker Component

Select a date range with start and end dates using a visual calendar interface. Perfect for filtering data, booking ranges, or scheduling period selections.

See the **DateRangePicker.mdx** documentation for framework-specific examples (React, Vue, Svelte).

## Features

- Dual input fields for start and end dates
- Visual calendar with range highlighting
- Quick preset ranges (Today, Last 7 Days, etc.)
- Single or dual calendar view
- Min/max date restrictions
- Keyboard navigation support
- Full ARIA attributes for accessibility
- Responsive design for mobile and desktop

## Basic Usage

**Vanilla HTML:**
\`\`\`html
<div class="aural-date-range-picker" id="date-range-1">
  <div class="aural-date-range-picker__input-wrapper">
    <div class="aural-date-range-picker__inputs">
      <input type="text" class="aural-date-range-picker__input"
             placeholder="Start date" readonly aria-label="Start date">
      <span class="aural-date-range-picker__separator">to</span>
      <input type="text" class="aural-date-range-picker__input"
             placeholder="End date" readonly aria-label="End date">
    </div>
    <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
  </div>
  <div class="aural-date-range-picker__dropdown">
    <div class="aural-date-range-picker__calendars">
      <div class="aural-date-range-picker__calendar">
        <div class="aural-date-range-picker__calendar-header">
          <button class="aural-date-range-picker__nav-button" data-action="prev" aria-label="Previous month">
            <i data-lucide="chevron-left"></i>
          </button>
          <div class="aural-date-range-picker__month-label">January 2026</div>
          <button class="aural-date-range-picker__nav-button" data-action="next" aria-label="Next month">
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
        <div class="aural-date-range-picker__weekdays">
          <div class="aural-date-range-picker__weekday">Su</div>
          <div class="aural-date-range-picker__weekday">Mo</div>
          <div class="aural-date-range-picker__weekday">Tu</div>
          <div class="aural-date-range-picker__weekday">We</div>
          <div class="aural-date-range-picker__weekday">Th</div>
          <div class="aural-date-range-picker__weekday">Fr</div>
          <div class="aural-date-range-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-range-picker__days"></div>
      </div>
    </div>
    <div class="aural-date-range-picker__footer">
      <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
      <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
    </div>
  </div>
</div>

<script>
  // Initialize after Aural UI loads
  window.Aural?.initDateRangePicker('#date-range-1');
</script>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the date range picker'
    },
    startPlaceholder: {
      control: 'text',
      description: 'Placeholder text for start date input'
    },
    endPlaceholder: {
      control: 'text',
      description: 'Placeholder text for end date input'
    },
    showPresets: {
      control: 'boolean',
      description: 'Show quick preset ranges'
    },
    dualCalendar: {
      control: 'boolean',
      description: 'Show two calendars side by side'
    }
  }
};

export default meta;
type Story = StoryObj;

const createDateRangePicker = (args: any) => {
  const container = document.createElement('div');
  container.className = 'story-container';
  container.style.padding = '2rem';
  container.style.minHeight = '600px';

  const datePicker = document.createElement('div');
  datePicker.id = args.id || 'date-range-picker';
  datePicker.className = 'aural-date-range-picker';

  let dropdownContent = '';

  if (args.showPresets) {
    dropdownContent = `
      <div style="display: flex; gap: var(--space-4);">
        <div class="aural-date-range-picker__presets">
          <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
          <div class="aural-date-range-picker__preset-list">
            <button class="aural-date-range-picker__preset-button" data-preset="today">Today</button>
            <button class="aural-date-range-picker__preset-button" data-preset="yesterday">Yesterday</button>
            <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
            <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
            <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
            <button class="aural-date-range-picker__preset-button" data-preset="lastMonth">Last Month</button>
          </div>
        </div>
        <div class="aural-date-range-picker__calendars">
          ${createCalendar(0)}
        </div>
      </div>`;
  } else if (args.dualCalendar) {
    dropdownContent = `
      <div class="aural-date-range-picker__calendars">
        ${createCalendar(0)}
        ${createCalendar(1)}
      </div>`;
  } else {
    dropdownContent = `
      <div class="aural-date-range-picker__calendars">
        ${createCalendar(0)}
      </div>`;
  }

  datePicker.innerHTML = `
    <div class="aural-date-range-picker__input-wrapper">
      <div class="aural-date-range-picker__inputs">
        <input type="text" class="aural-date-range-picker__input"
               placeholder="${args.startPlaceholder || 'Start date'}"
               readonly aria-label="${args.startPlaceholder || 'Start date'}">
        <span class="aural-date-range-picker__separator">to</span>
        <input type="text" class="aural-date-range-picker__input"
               placeholder="${args.endPlaceholder || 'End date'}"
               readonly aria-label="${args.endPlaceholder || 'End date'}">
      </div>
      <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
    </div>
    <div class="aural-date-range-picker__dropdown">
      ${dropdownContent}
      <div class="aural-date-range-picker__footer">
        <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
        <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
      </div>
    </div>
  `;

  container.appendChild(datePicker);

  // Initialize Lucide icons
  setTimeout(() => {
    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
  }, 0);

  // Initialize the date range picker
  setTimeout(() => {
    if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initDateRangePicker) {
      const options: any = {
        onChange: (range: any) => console.log('Selected range:', range)
      };

      if (args.startDate) options.startDate = new Date(args.startDate);
      if (args.endDate) options.endDate = new Date(args.endDate);
      if (args.minDate) options.minDate = new Date(args.minDate);
      if (args.maxDate) options.maxDate = new Date(args.maxDate);
      if (args.maxRange) options.maxRange = args.maxRange;

      (window as any).Aural.initDateRangePicker('#' + datePicker.id, options);
    }
  }, 100);

  return container;
};

function createCalendar(index: number) {
  return `
    <div class="aural-date-range-picker__calendar">
      <div class="aural-date-range-picker__calendar-header">
        <button class="aural-date-range-picker__nav-button" data-action="prev" ${index === 1 ? 'disabled' : ''} aria-label="Previous month">
          <i data-lucide="chevron-left"></i>
        </button>
        <div class="aural-date-range-picker__month-label">January 2026</div>
        <button class="aural-date-range-picker__nav-button" data-action="next${index === 1 ? '2' : ''}" ${index === 0 && index !== 0 ? 'disabled' : ''} aria-label="Next month">
          <i data-lucide="chevron-right"></i>
        </button>
      </div>
      <div class="aural-date-range-picker__weekdays">
        <div class="aural-date-range-picker__weekday">Su</div>
        <div class="aural-date-range-picker__weekday">Mo</div>
        <div class="aural-date-range-picker__weekday">Tu</div>
        <div class="aural-date-range-picker__weekday">We</div>
        <div class="aural-date-range-picker__weekday">Th</div>
        <div class="aural-date-range-picker__weekday">Fr</div>
        <div class="aural-date-range-picker__weekday">Sa</div>
      </div>
      <div class="aural-date-range-picker__days"></div>
    </div>`;
}

export const Basic: Story = {
  render: createDateRangePicker,
  args: {
    id: 'date-range-basic',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false
  }
};

export const WithPreselectedRange: Story = {
  render: createDateRangePicker,
  args: {
    id: 'date-range-preselected',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false,
    startDate: new Date(2026, 0, 20), // January 20, 2026
    endDate: new Date(2026, 0, 27)    // January 27, 2026
  }
};

export const WithPresets: Story = {
  render: createDateRangePicker,
  args: {
    id: 'date-range-presets',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: true,
    dualCalendar: false
  }
};

export const DualCalendarView: Story = {
  render: createDateRangePicker,
  args: {
    id: 'date-range-dual',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: true
  }
};

export const WithDateRestrictions: Story = {
  render: createDateRangePicker,
  args: {
    id: 'date-range-restricted',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false,
    minDate: new Date(2026, 0, 1),  // January 1, 2026
    maxDate: new Date(2026, 2, 31)  // March 31, 2026
  }
};

export const WithMaxRangeLimit: Story = {
  render: createDateRangePicker,
  args: {
    id: 'date-range-max-range',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false,
    maxRange: 30 // Maximum 30 days
  }
};

export const BookingPattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';

    const bookingCard = document.createElement('div');
    bookingCard.style.background = 'var(--color-bg-tertiary)';
    bookingCard.style.padding = 'var(--space-6)';
    bookingCard.style.borderRadius = 'var(--radius-lg)';
    bookingCard.style.maxWidth = '500px';

    const title = document.createElement('h3');
    title.textContent = 'Select Your Stay';
    title.style.margin = '0 0 var(--space-4) 0';
    title.style.color = 'var(--color-text-primary)';
    title.style.fontSize = 'var(--text-lg)';

    const datePicker = document.createElement('div');
    datePicker.id = 'date-range-booking';
    datePicker.className = 'aural-date-range-picker';
    datePicker.innerHTML = `
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Check-in" readonly aria-label="Check-in date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Check-out" readonly aria-label="Check-out date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div class="aural-date-range-picker__calendars">
          ${createCalendar(0)}
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    `;

    const durationDisplay = document.createElement('div');
    durationDisplay.style.marginTop = 'var(--space-4)';
    durationDisplay.style.padding = 'var(--space-3)';
    durationDisplay.style.background = 'var(--color-bg-primary)';
    durationDisplay.style.borderRadius = 'var(--radius-md)';
    durationDisplay.style.display = 'flex';
    durationDisplay.style.justifyContent = 'space-between';
    durationDisplay.style.alignItems = 'center';
    durationDisplay.innerHTML = `
      <span style="color: var(--color-text-secondary); font-size: var(--text-sm);">Duration:</span>
      <span style="color: var(--color-primary); font-weight: var(--font-semibold);" id="duration-booking">0 nights</span>
    `;

    bookingCard.appendChild(title);
    bookingCard.appendChild(datePicker);
    bookingCard.appendChild(durationDisplay);
    container.appendChild(bookingCard);

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    // Initialize with booking logic
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initDateRangePicker) {
        (window as any).Aural.initDateRangePicker('#date-range-booking', {
          minDate: new Date(),
          onChange: (range: any) => {
            if (range.start && range.end) {
              const days = Math.ceil((range.end.getTime() - range.start.getTime()) / (1000 * 60 * 60 * 24));
              const durationEl = document.getElementById('duration-booking');
              if (durationEl) {
                durationEl.textContent = `${days} night${days !== 1 ? 's' : ''}`;
              }
            }
          }
        });
      }
    }, 100);

    return container;
  }
};

export const AnalyticsDashboardPattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';

    const wrapper = document.createElement('div');

    const filterRow = document.createElement('div');
    filterRow.style.display = 'flex';
    filterRow.style.alignItems = 'center';
    filterRow.style.gap = 'var(--space-3)';
    filterRow.style.marginBottom = 'var(--space-4)';

    const label = document.createElement('label');
    label.textContent = 'Date Range:';
    label.style.fontWeight = 'var(--font-semibold)';
    label.style.color = 'var(--color-text-primary)';

    const datePicker = document.createElement('div');
    datePicker.id = 'date-range-analytics';
    datePicker.className = 'aural-date-range-picker';
    datePicker.style.flex = '1';
    datePicker.innerHTML = `
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Start date" readonly aria-label="Start date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="End date" readonly aria-label="End date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div style="display: flex; gap: var(--space-4);">
          <div class="aural-date-range-picker__presets">
            <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
            <div class="aural-date-range-picker__preset-list">
              <button class="aural-date-range-picker__preset-button" data-preset="today">Today</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
            </div>
          </div>
          <div class="aural-date-range-picker__calendars">
            ${createCalendar(0)}
          </div>
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    `;

    const statsCard = document.createElement('div');
    statsCard.style.padding = 'var(--space-4)';
    statsCard.style.background = 'var(--color-bg-tertiary)';
    statsCard.style.borderRadius = 'var(--radius-md)';
    statsCard.style.textAlign = 'center';
    statsCard.innerHTML = `
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-2);">Total Views</div>
      <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-primary);">12,458</div>
    `;

    filterRow.appendChild(label);
    filterRow.appendChild(datePicker);
    wrapper.appendChild(filterRow);
    wrapper.appendChild(statsCard);
    container.appendChild(wrapper);

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    // Initialize
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initDateRangePicker) {
        (window as any).Aural.initDateRangePicker('#date-range-analytics', {
          onChange: (range: any) => console.log('Analytics range:', range)
        });
      }
    }, 100);

    return container;
  }
};

export const ReportFilterPattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';

    const reportCard = document.createElement('div');
    reportCard.style.border = '1px solid var(--color-border-subtle)';
    reportCard.style.padding = 'var(--space-6)';
    reportCard.style.borderRadius = 'var(--radius-lg)';
    reportCard.style.maxWidth = '600px';

    const title = document.createElement('h3');
    title.textContent = 'Generate Report';
    title.style.margin = '0 0 var(--space-6) 0';
    title.style.color = 'var(--color-text-primary)';
    title.style.fontSize = 'var(--text-xl)';

    const fieldWrapper = document.createElement('div');
    fieldWrapper.style.display = 'grid';
    fieldWrapper.style.gap = 'var(--space-4)';

    const fieldLabel = document.createElement('label');
    fieldLabel.textContent = 'Report Period';
    fieldLabel.style.display = 'block';
    fieldLabel.style.fontWeight = 'var(--font-medium)';
    fieldLabel.style.color = 'var(--color-text-primary)';
    fieldLabel.style.marginBottom = 'var(--space-2)';

    const datePicker = document.createElement('div');
    datePicker.id = 'date-range-report';
    datePicker.className = 'aural-date-range-picker';
    datePicker.innerHTML = `
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Start date" readonly aria-label="Start date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="End date" readonly aria-label="End date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div style="display: flex; gap: var(--space-4);">
          <div class="aural-date-range-picker__presets">
            <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
            <div class="aural-date-range-picker__preset-list">
              <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
              <button class="aural-date-range-picker__preset-button" data-preset="lastMonth">Last Month</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisQuarter">This Quarter</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisYear">This Year</button>
            </div>
          </div>
          <div class="aural-date-range-picker__calendars">
            ${createCalendar(0)}
          </div>
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    `;

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.style.marginTop = 'var(--space-2)';
    button.innerHTML = `
      <i data-lucide="download" style="width: 16px; height: 16px; margin-right: var(--space-2);"></i>
      Generate Report
    `;

    const fieldDiv = document.createElement('div');
    fieldDiv.appendChild(fieldLabel);
    fieldDiv.appendChild(datePicker);

    fieldWrapper.appendChild(fieldDiv);
    fieldWrapper.appendChild(button);
    reportCard.appendChild(title);
    reportCard.appendChild(fieldWrapper);
    container.appendChild(reportCard);

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    // Initialize
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initDateRangePicker) {
        (window as any).Aural.initDateRangePicker('#date-range-report', {
          onChange: (range: any) => console.log('Report range:', range)
        });
      }
    }, 100);

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const datePicker = document.createElement('div');
      datePicker.className = 'aural-date-range-picker';
      datePicker.style.margin = '0 auto';
      datePicker.style.maxWidth = '400px';

      datePicker.innerHTML = `
        <div class="aural-date-range-picker__input-wrapper">
          <div class="aural-date-range-picker__inputs">
            <input type="text" class="aural-date-range-picker__input"
                   placeholder="${args.startPlaceholder || 'Start date'}"
                   readonly aria-label="${args.startPlaceholder || 'Start date'}">
            <span class="aural-date-range-picker__separator">to</span>
            <input type="text" class="aural-date-range-picker__input"
                   placeholder="${args.endPlaceholder || 'End date'}"
                   readonly aria-label="${args.endPlaceholder || 'End date'}">
          </div>
          <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
        </div>
      `;

      // Initialize Lucide icons
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
      }, 0);

      return datePicker;
    });
  },
  args: {
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date'
  },
  argTypes: {
    startPlaceholder: {
      control: 'text',
      description: 'Placeholder text for start date input'
    },
    endPlaceholder: {
      control: 'text',
      description: 'Placeholder text for end date input'
    }
  }
};
