import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/DatePicker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A comprehensive calendar-based date selection component with month/year navigation, keyboard support, date restrictions, and customizable formats. Perfect for booking systems, forms, scheduling applications, and any interface requiring date input.'
      }
    }
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the date picker'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input'
    },
    defaultDate: {
      control: 'date',
      description: 'Default selected date'
    },
    minDate: {
      control: 'date',
      description: 'Minimum selectable date'
    },
    maxDate: {
      control: 'date',
      description: 'Maximum selectable date'
    },
    format: {
      control: 'select',
      options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD', 'MMMM DD, YYYY'],
      description: 'Date format'
    },
    disableWeekends: {
      control: 'boolean',
      description: 'Disable weekend selection'
    }
  }
};

export default meta;
type Story = StoryObj;

const calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
  <line x1="16" y1="2" x2="16" y2="6"></line>
  <line x1="8" y1="2" x2="8" y2="6"></line>
  <line x1="3" y1="10" x2="21" y2="10"></line>
</svg>`;

const chevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;

const chevronRight = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

const createDatePicker = (args: any) => {
  const container = document.createElement('div');
  container.className = 'story-container';
  container.style.padding = '2rem';
  container.style.minHeight = '500px';

  const datePicker = document.createElement('div');
  datePicker.id = args.id || 'date-picker-default';
  datePicker.className = 'aural-date-picker';

  const inputValue = args.defaultDate ?
    new Date(args.defaultDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) :
    '';

  datePicker.innerHTML = `
    <div class="aural-date-picker__input-wrapper">
      <input type="text" class="aural-date-picker__input" placeholder="${args.placeholder || 'Select date...'}" ${inputValue ? `value="${inputValue}"` : ''} readonly>
      <div class="aural-date-picker__icon">
        ${calendarIcon}
      </div>
    </div>
    <div class="aural-date-picker__calendar">
      <div class="aural-date-picker__header">
        <button class="aural-date-picker__nav-button" aria-label="Previous month">
          ${chevronLeft}
        </button>
        <div class="aural-date-picker__current-month">January 2026</div>
        <button class="aural-date-picker__nav-button" aria-label="Next month">
          ${chevronRight}
        </button>
      </div>
      <div class="aural-date-picker__weekdays">
        <div class="aural-date-picker__weekday">Su</div>
        <div class="aural-date-picker__weekday">Mo</div>
        <div class="aural-date-picker__weekday">Tu</div>
        <div class="aural-date-picker__weekday">We</div>
        <div class="aural-date-picker__weekday">Th</div>
        <div class="aural-date-picker__weekday">Fr</div>
        <div class="aural-date-picker__weekday">Sa</div>
      </div>
      <div class="aural-date-picker__days">
        <!-- Days rendered by JavaScript -->
      </div>
      <div class="aural-date-picker__footer">
        <button class="aural-date-picker__footer-button">Today</button>
        <button class="aural-date-picker__footer-button">Clear</button>
      </div>
    </div>
  `;

  container.appendChild(datePicker);

  // Initialize the date picker after a short delay to ensure DOM is ready
  setTimeout(() => {
    if (typeof window.Aural !== 'undefined' && window.Aural.initDatePicker) {
      const options: any = {
        format: args.format || 'MM/DD/YYYY',
        onChange: (date: Date) => console.log('Selected date:', date)
      };

      if (args.defaultDate) {
        options.defaultDate = new Date(args.defaultDate);
      }
      if (args.minDate) {
        options.minDate = new Date(args.minDate);
      }
      if (args.maxDate) {
        options.maxDate = new Date(args.maxDate);
      }
      if (args.disableWeekends) {
        options.disableWeekends = true;
      }

      window.Aural.initDatePicker(datePicker.id, options);
    }
  }, 100);

  return container;
};

export const Default: Story = {
  render: createDatePicker,
  args: {
    id: 'date-picker-default',
    placeholder: 'Select date...'
  }
};

export const WithPreselectedDate: Story = {
  render: createDatePicker,
  args: {
    id: 'date-picker-preselected',
    placeholder: 'Select date...',
    defaultDate: new Date(2026, 0, 26) // January 26, 2026
  }
};

export const WithDateRestrictions: Story = {
  render: createDatePicker,
  args: {
    id: 'date-picker-restricted',
    placeholder: 'Select date (Jan 15 - Feb 15, 2026)...',
    minDate: new Date(2026, 0, 15), // January 15, 2026
    maxDate: new Date(2026, 1, 15)  // February 15, 2026
  }
};

export const WithDisabledWeekends: Story = {
  render: createDatePicker,
  args: {
    id: 'date-picker-no-weekends',
    placeholder: 'Select weekday...',
    disableWeekends: true
  }
};

export const ISOFormat: Story = {
  render: createDatePicker,
  args: {
    id: 'date-picker-iso',
    placeholder: 'YYYY-MM-DD',
    format: 'YYYY-MM-DD',
    defaultDate: new Date(2026, 0, 26)
  }
};

export const EuropeanFormat: Story = {
  render: createDatePicker,
  args: {
    id: 'date-picker-eu',
    placeholder: 'DD/MM/YYYY',
    format: 'DD/MM/YYYY',
    defaultDate: new Date(2026, 0, 26)
  }
};

export const LongFormat: Story = {
  render: createDatePicker,
  args: {
    id: 'date-picker-long',
    placeholder: 'Month DD, YYYY',
    format: 'MMMM DD, YYYY',
    defaultDate: new Date(2026, 0, 26)
  }
};

export const DateRangePicker: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '500px';

    const datePicker = document.createElement('div');
    datePicker.id = args.id || 'date-range-picker';
    datePicker.className = 'aural-date-picker';

    datePicker.innerHTML = `
      <div class="aural-date-picker__input-wrapper">
        <input type="text" class="aural-date-picker__input" placeholder="Select date range..." readonly>
        <div class="aural-date-picker__icon">
          ${calendarIcon}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            ${chevronLeft}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            ${chevronRight}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days">
          <!-- Days rendered by JavaScript -->
        </div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    `;

    container.appendChild(datePicker);

    // Initialize the date range picker
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined' && window.Aural.initDateRangePicker) {
        window.Aural.initDateRangePicker(datePicker.id, {
          format: 'MM/DD/YYYY',
          separator: ' - ',
          onChange: (range: any) => console.log('Selected range:', range)
        });
      }
    }, 100);

    return container;
  },
  args: {
    id: 'date-range-picker'
  }
};

export const BookingPattern: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';

    // Check-in date picker
    const checkinWrapper = document.createElement('div');
    checkinWrapper.style.flex = '1';
    checkinWrapper.style.minWidth = '300px';

    const checkinLabel = document.createElement('label');
    checkinLabel.setAttribute('for', 'checkin-input');
    checkinLabel.style.display = 'block';
    checkinLabel.style.fontSize = 'var(--text-sm)';
    checkinLabel.style.fontWeight = 'var(--font-semibold)';
    checkinLabel.style.marginBottom = 'var(--space-2)';
    checkinLabel.textContent = 'Check-in Date';

    const checkinPicker = document.createElement('div');
    checkinPicker.id = 'date-picker-checkin';
    checkinPicker.className = 'aural-date-picker';
    checkinPicker.innerHTML = `
      <div class="aural-date-picker__input-wrapper">
        <input type="text" id="checkin-input" class="aural-date-picker__input" placeholder="Select check-in..." readonly>
        <div class="aural-date-picker__icon">
          ${calendarIcon}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            ${chevronLeft}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            ${chevronRight}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days"></div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    `;

    checkinWrapper.appendChild(checkinLabel);
    checkinWrapper.appendChild(checkinPicker);

    // Check-out date picker
    const checkoutWrapper = document.createElement('div');
    checkoutWrapper.style.flex = '1';
    checkoutWrapper.style.minWidth = '300px';

    const checkoutLabel = document.createElement('label');
    checkoutLabel.setAttribute('for', 'checkout-input');
    checkoutLabel.style.display = 'block';
    checkoutLabel.style.fontSize = 'var(--text-sm)';
    checkoutLabel.style.fontWeight = 'var(--font-semibold)';
    checkoutLabel.style.marginBottom = 'var(--space-2)';
    checkoutLabel.textContent = 'Check-out Date';

    const checkoutPicker = document.createElement('div');
    checkoutPicker.id = 'date-picker-checkout';
    checkoutPicker.className = 'aural-date-picker';
    checkoutPicker.innerHTML = `
      <div class="aural-date-picker__input-wrapper">
        <input type="text" id="checkout-input" class="aural-date-picker__input" placeholder="Select check-out..." readonly>
        <div class="aural-date-picker__icon">
          ${calendarIcon}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            ${chevronLeft}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            ${chevronRight}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days"></div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    `;

    checkoutWrapper.appendChild(checkoutLabel);
    checkoutWrapper.appendChild(checkoutPicker);

    container.appendChild(checkinWrapper);
    container.appendChild(checkoutWrapper);

    // Initialize the date pickers with linked behavior
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined' && window.Aural.initDatePicker) {
        let checkinDate: Date | null = null;

        const checkinPickerInstance = window.Aural.initDatePicker('date-picker-checkin', {
          minDate: new Date(),
          format: 'MM/DD/YYYY',
          onChange: (date: Date) => {
            checkinDate = date;
            // Update checkout minimum date to be after check-in
            if (checkoutPickerInstance && checkoutPickerInstance.setMinDate) {
              const nextDay = new Date(date.getTime() + 86400000); // +1 day
              checkoutPickerInstance.setMinDate(nextDay);
            }
            console.log('Check-in selected:', date);
          }
        });

        const checkoutPickerInstance = window.Aural.initDatePicker('date-picker-checkout', {
          minDate: new Date(),
          format: 'MM/DD/YYYY',
          onChange: (date: Date) => {
            console.log('Check-out selected:', date);
            if (checkinDate) {
              const duration = Math.ceil((date.getTime() - checkinDate.getTime()) / 86400000);
              console.log('Booking duration:', duration, 'days');
            }
          }
        });
      }
    }, 100);

    return container;
  }
};
