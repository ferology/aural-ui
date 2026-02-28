import type { Meta, StoryObj } from '@storybook/html';

interface TimePickerArgs {
  label: string;
  format: '12h' | '24h';
  size: 'sm' | 'default' | 'lg';
  disabled: boolean;
  placeholder: string;
  minuteStep: number;
  showNowButton: boolean;
  defaultValue: string;
  id: string;
}

const meta: Meta<TimePickerArgs> = {
  title: 'Forms/Time Picker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Select time with hours and minutes. Supports 12-hour and 24-hour formats with intuitive scrollable lists and keyboard input. Perfect for scheduling, appointments, or any time selection needs.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the time picker',
    },
    format: {
      control: 'select',
      options: ['12h', '24h'],
      description: 'Time format (12-hour or 24-hour)',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Size variant of the time picker',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the time picker is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    minuteStep: {
      control: 'number',
      description: 'Step interval for minutes (e.g., 1, 5, 15, 30)',
    },
    showNowButton: {
      control: 'boolean',
      description: 'Whether to show the "Now" button',
    },
    defaultValue: {
      control: 'text',
      description: 'Default time value',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the time picker',
    },
  },
};

export default meta;
type Story = StoryObj<TimePickerArgs>;

const createTimePicker = (args: TimePickerArgs) => {
  const is24Hour = args.format === '24h';
  const sizeClass = args.size === 'default' ? '' : ` aural-time-picker--${args.size}`;
  const disabledClass = args.disabled ? ' aural-time-picker--disabled' : '';
  const formatClass = is24Hour ? ' aural-time-picker--24h' : '';
  const placeholder = args.placeholder || (is24Hour ? '--:--' : '--:-- --');

  const template = `
    <div class="aural-time-picker${sizeClass}${disabledClass}${formatClass}" id="${args.id}" ${args.minuteStep !== 1 ? `data-step="${args.minuteStep}"` : ''}>
      ${args.label ? `<label class="aural-time-picker__label">${args.label}</label>` : ''}
      <div class="aural-time-picker__input-wrapper">
        <input
          type="text"
          class="aural-time-picker__input"
          placeholder="${placeholder}"
          readonly
          aria-label="${args.label || 'Select time'}"
          ${args.disabled ? 'disabled' : ''}
        >
        <button
          type="button"
          class="aural-time-picker__toggle"
          aria-label="Open time picker"
          ${args.disabled ? 'disabled' : ''}
        >
          <i data-lucide="clock"></i>
        </button>
      </div>
      ${!args.disabled ? `
      <div class="aural-time-picker__dropdown">
        <div class="aural-time-picker__selectors">
          <div class="aural-time-picker__selector">
            <div class="aural-time-picker__selector-label">Hour</div>
            <div class="aural-time-picker__list" data-type="hour"></div>
          </div>
          <div class="aural-time-picker__selector">
            <div class="aural-time-picker__selector-label">Minute</div>
            <div class="aural-time-picker__list" data-type="minute"></div>
          </div>
          ${!is24Hour ? `
          <div class="aural-time-picker__selector">
            <div class="aural-time-picker__selector-label">Period</div>
            <div class="aural-time-picker__period">
              <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
              <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
            </div>
          </div>
          ` : ''}
        </div>
        ${args.showNowButton ? `
        <div class="aural-time-picker__now">
          <button type="button" class="aural-time-picker__now-btn">
            <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
            Now
          </button>
        </div>
        ` : ''}
        <div class="aural-time-picker__actions">
          <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
          <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
        </div>
      </div>
      ` : ''}
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = template;

  // Initialize Lucide icons
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, 0);

  // Initialize time picker
  setTimeout(() => {
    if (window.Aural?.initTimePicker) {
      window.Aural.initTimePicker();
    }
  }, 100);

  return container;
};

/**
 * Basic 12-hour time picker with AM/PM selector
 */
export const Basic: Story = {
  args: {
    label: 'Select Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-basic',
  },
  render: (args) => createTimePicker(args),
};

/**
 * 24-hour format time picker (common in many regions)
 */
export const TwentyFourHour: Story = {
  args: {
    label: 'Meeting Time',
    format: '24h',
    size: 'default',
    disabled: false,
    placeholder: '--:--',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-24h',
  },
  render: (args) => createTimePicker(args),
};

/**
 * Small size variant
 */
export const Small: Story = {
  args: {
    label: 'Small Time Picker',
    format: '12h',
    size: 'sm',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-small',
  },
  render: (args) => createTimePicker(args),
};

/**
 * Large size variant
 */
export const Large: Story = {
  args: {
    label: 'Large Time Picker',
    format: '12h',
    size: 'lg',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-large',
  },
  render: (args) => createTimePicker(args),
};

/**
 * 5-minute intervals for quick selection
 */
export const FiveMinuteStep: Story = {
  args: {
    label: 'Quick Selection',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 5,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-5min',
  },
  render: (args) => createTimePicker(args),
};

/**
 * 15-minute intervals for appointments
 */
export const FifteenMinuteStep: Story = {
  args: {
    label: 'Appointment Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 15,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-15min',
  },
  render: (args) => createTimePicker(args),
};

/**
 * 30-minute intervals for scheduling
 */
export const ThirtyMinuteStep: Story = {
  args: {
    label: 'Schedule Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 30,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-30min',
  },
  render: (args) => createTimePicker(args),
};

/**
 * Without "Now" button for specific time entry
 */
export const WithoutNowButton: Story = {
  args: {
    label: 'Select Specific Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: false,
    defaultValue: '',
    id: 'time-picker-no-now',
  },
  render: (args) => createTimePicker(args),
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Unavailable Time',
    format: '12h',
    size: 'default',
    disabled: true,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-disabled',
  },
  render: (args) => createTimePicker(args),
};

/**
 * Time range picker for meetings/events
 */
export const TimeRange: Story = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="max-width: 500px;">
        <div style="background: var(--color-bg-tertiary); padding: var(--space-6); border-radius: var(--radius-lg);">
          <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Schedule Meeting</h3>
          <div style="display: grid; gap: var(--space-4);">
            <div class="aural-time-picker" id="time-picker-start">
              <label class="aural-time-picker__label">Start Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Meeting start time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker" id="time-picker-end">
              <label class="aural-time-picker__label">End Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Meeting end time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" style="margin-top: var(--space-2);">Schedule Meeting</button>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);

    return container;
  },
};

/**
 * Alarm clock pattern with toggle
 */
export const AlarmClock: Story = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="max-width: 400px;">
        <div style="border: 1px solid var(--color-border-subtle); padding: var(--space-6); border-radius: var(--radius-lg);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4);">
            <div>
              <h3 style="margin: 0; color: var(--color-text-primary); font-size: var(--text-lg);">Daily Alarm</h3>
              <p style="margin: var(--space-1) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">Wake up time</p>
            </div>
            <div class="aural-switch">
              <input type="checkbox" id="alarm-switch" checked>
              <label for="alarm-switch"></label>
            </div>
          </div>
          <div class="aural-time-picker aural-time-picker--lg" id="time-picker-alarm">
            <div class="aural-time-picker__input-wrapper">
              <input
                type="text"
                class="aural-time-picker__input"
                placeholder="--:-- --"
                readonly
                aria-label="Alarm time"
                style="text-align: center; font-size: var(--text-2xl); font-weight: var(--font-semibold);"
              >
              <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                <i data-lucide="clock"></i>
              </button>
            </div>
            <div class="aural-time-picker__dropdown">
              <div class="aural-time-picker__selectors">
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Hour</div>
                  <div class="aural-time-picker__list" data-type="hour"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Minute</div>
                  <div class="aural-time-picker__list" data-type="minute"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Period</div>
                  <div class="aural-time-picker__period">
                    <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                    <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                  </div>
                </div>
              </div>
              <div class="aural-time-picker__actions">
                <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);

    return container;
  },
};

/**
 * Inline/Embedded style without dropdown
 */
export const InlineStyle: Story = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="max-width: 600px;">
        <div style="background: var(--color-bg-tertiary); padding: var(--space-6); border-radius: var(--radius-lg);">
          <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Set Appointment Time</h3>
          <div class="aural-time-picker aural-time-picker--open" id="time-picker-inline" style="position: relative;">
            <label class="aural-time-picker__label">Select Time</label>
            <div class="aural-time-picker__input-wrapper">
              <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Select time">
              <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                <i data-lucide="clock"></i>
              </button>
            </div>
            <div class="aural-time-picker__dropdown" style="position: static; box-shadow: none; border: 1px solid var(--color-border-subtle); margin-top: var(--space-4);">
              <div class="aural-time-picker__selectors">
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Hour</div>
                  <div class="aural-time-picker__list" data-type="hour"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Minute</div>
                  <div class="aural-time-picker__list" data-type="minute"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Period</div>
                  <div class="aural-time-picker__period">
                    <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                    <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                  </div>
                </div>
              </div>
              <div class="aural-time-picker__now">
                <button type="button" class="aural-time-picker__now-btn">
                  <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
                  Now
                </button>
              </div>
              <div class="aural-time-picker__actions">
                <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);

    return container;
  },
};

/**
 * Size comparison showing all variants
 */
export const SizeComparison: Story = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="display: grid; gap: var(--space-6);">
        <div class="aural-time-picker aural-time-picker--sm" id="time-picker-compare-sm">
          <label class="aural-time-picker__label">Small</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Small time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>

        <div class="aural-time-picker" id="time-picker-compare-default">
          <label class="aural-time-picker__label">Default</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Default time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>

        <div class="aural-time-picker aural-time-picker--lg" id="time-picker-compare-lg">
          <label class="aural-time-picker__label">Large</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Large time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);

    return container;
  },
};

/**
 * Theme comparison showing time picker across all themes
 */
export const ThemeComparison: Story = {
  render: () => {
    const themes = ['dark', 'light', 'neon', 'prismatic', 'minimal', 'warm', 'kinetic'];

    const container = document.createElement('div');
    container.innerHTML = `
      <div style="display: grid; gap: var(--space-8);">
        ${themes.map((theme, index) => `
          <div style="padding: var(--space-6); background: var(--color-bg-secondary); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg); text-transform: capitalize;">${theme} Theme</h3>
            <div class="aural-time-picker" id="time-picker-theme-${index}">
              <label class="aural-time-picker__label">Select Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Select time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__now">
                  <button type="button" class="aural-time-picker__now-btn">
                    <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
                    Now
                  </button>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);

    return container;
  },
};
