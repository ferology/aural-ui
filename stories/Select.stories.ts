import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Custom select dropdown with keyboard navigation and search capability.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '300px';

    const selectId = 'select-default';

    const selectWrapper = document.createElement('div');
    selectWrapper.id = selectId;
    selectWrapper.className = 'select-custom';

    selectWrapper.innerHTML = `
      <button class="select-trigger" aria-expanded="false" aria-haspopup="listbox">
        <span>Select an option</span>
        <span class="select-arrow">▼</span>
      </button>
      <div class="select-dropdown" role="listbox" hidden>
        <div
          class="select-option"
          role="option"
          data-value="1"
          tabindex="0"
        >
          Option 1
        </div>
        <div
          class="select-option"
          role="option"
          data-value="2"
          tabindex="0"
        >
          Option 2
        </div>
        <div
          class="select-option"
          role="option"
          data-value="3"
          tabindex="0"
        >
          Option 3
        </div>
        <div
          class="select-option"
          role="option"
          data-value="4"
          tabindex="0"
        >
          Option 4
        </div>
      </div>
    `;

    container.appendChild(selectWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);

    return container;
  }
};

export const WithGroups: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';

    const selectId = 'select-groups';

    const selectWrapper = document.createElement('div');
    selectWrapper.id = selectId;
    selectWrapper.className = 'select-custom';

    selectWrapper.innerHTML = `
      <button class="select-trigger" aria-expanded="false">
        <span>Select a fruit</span>
        <span class="select-arrow">▼</span>
      </button>
      <div class="select-dropdown" hidden>
        <div style="padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; color: var(--color-text-secondary); text-transform: uppercase;">
          Citrus
        </div>
        <div class="select-option" data-value="orange">🍊 Orange</div>
        <div class="select-option" data-value="lemon">🍋 Lemon</div>
        <div class="select-option" data-value="lime">🍋 Lime</div>

        <div style="padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; color: var(--color-text-secondary); text-transform: uppercase; margin-top: 0.5rem;">
          Berries
        </div>
        <div class="select-option" data-value="strawberry">🍓 Strawberry</div>
        <div class="select-option" data-value="blueberry">🫐 Blueberry</div>
        <div class="select-option" data-value="raspberry">🍒 Raspberry</div>

        <div style="padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; color: var(--color-text-secondary); text-transform: uppercase; margin-top: 0.5rem;">
          Tropical
        </div>
        <div class="select-option" data-value="mango">🥭 Mango</div>
        <div class="select-option" data-value="pineapple">🍍 Pineapple</div>
        <div class="select-option" data-value="banana">🍌 Banana</div>
      </div>
    `;

    container.appendChild(selectWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);

    return container;
  }
};

export const WithSearch: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '400px';

    const selectId = 'select-search';

    const selectWrapper = document.createElement('div');
    selectWrapper.id = selectId;
    selectWrapper.className = 'select-custom select-searchable';

    selectWrapper.innerHTML = `
      <button class="select-trigger" aria-expanded="false">
        <span>Select a country</span>
        <span class="select-arrow">▼</span>
      </button>
      <div class="select-dropdown" hidden>
        <div class="select-search" style="padding: 0.5rem; border-bottom: 1px solid var(--color-border);">
          <input
            type="text"
            class="input input-sm"
            placeholder="Search..."
            onclick="event.stopPropagation()"
          />
        </div>
        <div class="select-options">
          <div class="select-option" data-value="us">🇺🇸 United States</div>
          <div class="select-option" data-value="uk">🇬🇧 United Kingdom</div>
          <div class="select-option" data-value="ca">🇨🇦 Canada</div>
          <div class="select-option" data-value="au">🇦🇺 Australia</div>
          <div class="select-option" data-value="de">🇩🇪 Germany</div>
          <div class="select-option" data-value="fr">🇫🇷 France</div>
          <div class="select-option" data-value="it">🇮🇹 Italy</div>
          <div class="select-option" data-value="es">🇪🇸 Spain</div>
          <div class="select-option" data-value="jp">🇯🇵 Japan</div>
          <div class="select-option" data-value="cn">🇨🇳 China</div>
        </div>
      </div>
    `;

    container.appendChild(selectWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);

    return container;
  }
};

export const WithDisabledOptions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '300px';

    const selectId = 'select-disabled';

    const selectWrapper = document.createElement('div');
    selectWrapper.id = selectId;
    selectWrapper.className = 'select-custom';

    selectWrapper.innerHTML = `
      <button class="select-trigger" aria-expanded="false">
        <span>Select a plan</span>
        <span class="select-arrow">▼</span>
      </button>
      <div class="select-dropdown" hidden>
        <div class="select-option" data-value="free">
          Free - $0/month
        </div>
        <div class="select-option" data-value="basic">
          Basic - $9/month
        </div>
        <div class="select-option" data-value="pro">
          Pro - $29/month
        </div>
        <div
          class="select-option select-option-disabled"
          data-value="enterprise"
          data-disabled="true"
          style="opacity: 0.5; cursor: not-allowed;"
        >
          Enterprise - Contact Sales
        </div>
      </div>
    `;

    container.appendChild(selectWrapper);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);

    return container;
  }
};

export const InFormGroup: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.style.minHeight = '350px';

    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.className = 'label';
    label.textContent = 'Choose your role';
    formGroup.appendChild(label);

    const selectWrapper = document.createElement('div');
    selectWrapper.id = 'select-form';
    selectWrapper.className = 'select-custom';

    selectWrapper.innerHTML = `
      <button class="select-trigger" aria-expanded="false">
        <span>Select a role</span>
        <span class="select-arrow">▼</span>
      </button>
      <div class="select-dropdown" hidden>
        <div class="select-option" data-value="developer">👨‍💻 Developer</div>
        <div class="select-option" data-value="designer">🎨 Designer</div>
        <div class="select-option" data-value="manager">👔 Manager</div>
        <div class="select-option" data-value="other">🤷 Other</div>
      </div>
    `;

    formGroup.appendChild(selectWrapper);

    const helperText = document.createElement('p');
    helperText.className = 'form-helper';
    helperText.textContent = 'This helps us personalize your experience';
    formGroup.appendChild(helperText);

    container.appendChild(formGroup);

    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);

    return container;
  }
};
