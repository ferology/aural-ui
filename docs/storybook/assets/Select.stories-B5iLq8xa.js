const W={title:"Components/Select",tags:["autodocs"],parameters:{docs:{description:{component:`
# Select Component

Custom-styled dropdown menus for choosing from a single option with support for validation states, sizes, and option grouping.

Use Select when users need to choose from 5+ options where only one selection is allowed. For 2-4 options, consider using Radio buttons for better scannability. For searchable lists with 20+ items, use Combobox to reduce scrolling and improve findability.

Select components provide a familiar interface for single-choice decisions like country selection, timezone settings, or category filtering. They support both native browser dropdowns (for better mobile experience) and custom-styled dropdowns (for consistent branding).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div>
  <label for="country-select" class="form-label">Country</label>
  <div class="select">
    <select id="country-select">
      <option value="">Select a country...</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="GB">United Kingdom</option>
    </select>
  </div>
  <div class="helper-text">Choose your country or region</div>
</div>

<script>
  window.Aural?.initSelects();
<\/script>
\`\`\`

**React:**
\`\`\`jsx
import { useEffect, useState } from 'react';

function CountrySelect() {
  const [country, setCountry] = useState('');

  useEffect(() => {
    window.Aural?.initSelects();
  }, []);

  return (
    <div>
      <label htmlFor="country-select" className="form-label">Country</label>
      <div className="select">
        <select
          id="country-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select a country...</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
        </select>
      </div>
      <div className="helper-text">Choose your country or region</div>
    </div>
  );
}
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div>
    <label for="country-select" class="form-label">Country</label>
    <div class="select">
      <select id="country-select" v-model="country">
        <option value="">Select a country...</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="GB">United Kingdom</option>
      </select>
    </div>
    <div class="helper-text">Choose your country or region</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: ''
    };
  },
  mounted() {
    window.Aural?.initSelects();
  }
};
<\/script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';
  let country = '';

  onMount(() => {
    window.Aural?.initSelects();
  });
<\/script>

<div>
  <label for="country-select" class="form-label">Country</label>
  <div class="select">
    <select id="country-select" bind:value={country}>
      <option value="">Select a country...</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="GB">United Kingdom</option>
    </select>
  </div>
  <div class="helper-text">Choose your country or region</div>
</div>
\`\`\`

## Accessibility

- **Always associate labels**: Use \`<label for="select-id">\` to connect labels with select elements for screen reader support
- **Use semantic HTML**: Prefer native \`<select>\` elements when possible for built-in keyboard navigation and ARIA support
- **Provide placeholder options**: Use a first option like "Select a country..." to indicate purpose and prevent accidental submissions
- **Validation states**: Add \`aria-invalid="true"\` for error states and \`aria-describedby\` to link helper text
- **Keyboard navigation**: Native selects support Arrow keys (up/down), Enter (open/close), Escape (close), and type-ahead search
- **Focus visibility**: Ensure focus rings are visible with \`:focus-visible\` styles (2px outline with 2px offset)
- **Helper text**: Link descriptive text with \`aria-describedby\` to provide context for screen reader users
- **Option groups**: Use \`<optgroup>\` to organize related options, improving scannability for screen readers
- **Required fields**: Mark required selects with \`required\` attribute and indicate visually with asterisk or label text

## Usage Guidelines

- **When to use:**
  - Choosing from 5-15 options where only one selection is needed
  - Form fields with predefined choices (country, state, category)
  - Settings and preferences (timezone, language, date format)
  - Filtering or sorting options in data tables

- **When NOT to use:**
  - 2-4 options: Use Radio buttons instead for better visibility
  - 20+ searchable options: Use Combobox for type-ahead filtering
  - Multiple selections: Use MultiSelect or Checkbox group
  - Actions/commands: Use Dropdown menu instead

- **Best practices:**
  - Order options logically (alphabetical, most common first, or grouped by category)
  - Use clear, concise option labels (avoid truncation)
  - Provide a default placeholder option ("Select...") to indicate no selection
  - Include helper text to clarify what the selection affects
  - Group related options with \`<optgroup>\` for long lists (e.g., countries by region)
  - For mobile: Native selects provide better UX with native OS pickers
  - For desktop: Custom selects offer consistent branding and styling

- **Mobile considerations:**
  - Native selects automatically use OS-native pickers (better touch interaction)
  - Ensure 44px minimum touch target height (default size meets WCAG requirements)
  - Test with actual devices to verify dropdown behavior
  - Consider custom selects only when branding is critical

- **Validation:**
  - Show error state (\`.select-error\`) when validation fails
  - Display clear error messages below the select with \`.helper-text.error\`
  - Add success state (\`.select-success\`) to confirm valid selections in multi-step forms
  - Use \`required\` attribute to enforce selection before form submission
        `.trim()}}},argTypes:{size:{control:"select",options:["sm","default","lg"],description:"Select size: sm (compact, 36px height), default (standard, 44px height), lg (prominent, 52px height)"},state:{control:"select",options:["default","error","success"],description:"Validation state: default (neutral), error (invalid input with red border), success (valid input with green border)"},disabled:{control:"boolean",description:"Disabled state prevents interaction and applies muted styling with 50% opacity"},placeholder:{control:"text",description:'First option text that indicates purpose (e.g., "Select a country...") - should describe what to select'},label:{control:"text",description:"Label text displayed above the select, should be associated with select via htmlFor/for attribute"},helperText:{control:"text",description:"Helper or error text displayed below select, linked via aria-describedby for accessibility"},grouped:{control:"boolean",description:"Whether options are organized into groups using <optgroup> elements for better organization"}}},o={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.innerHTML=`
      <div>
        <label class="form-label">Default Select</label>
        <div class="select">
          <select>
            <option>Default select</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
          </select>
        </div>
      </div>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects()},100),e}},t={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.innerHTML=`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Small Select</label>
          <div class="select select-sm">
            <select>
              <option>Small select</option>
              <option>Apple</option>
              <option>Banana</option>
              <option>Cherry</option>
            </select>
          </div>
        </div>
        <div>
          <label class="form-label">Default Select</label>
          <div class="select">
            <select>
              <option>Default select</option>
              <option>Apple</option>
              <option>Banana</option>
              <option>Cherry</option>
            </select>
          </div>
        </div>
        <div>
          <label class="form-label">Large Select</label>
          <div class="select select-lg">
            <select>
              <option>Large select</option>
              <option>Apple</option>
              <option>Banana</option>
              <option>Cherry</option>
            </select>
          </div>
        </div>
      </div>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects()},100),e}},i={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.innerHTML=`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Disabled Select</label>
          <div class="select">
            <select disabled>
              <option>Disabled select</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
        <div>
          <label class="form-label">Error State</label>
          <div class="select select-error">
            <select>
              <option value="">Select an option...</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div class="helper-text error">Please select a valid option</div>
        </div>
        <div>
          <label class="form-label">Success State</label>
          <div class="select select-success">
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div class="helper-text success">Selection confirmed</div>
        </div>
      </div>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects()},100),e}},n={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.innerHTML=`
      <div>
        <label class="form-label">Choose a programming language</label>
        <div class="select">
          <select>
            <option value="">Select a language...</option>
            <optgroup label="Frontend">
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>HTML/CSS</option>
            </optgroup>
            <optgroup label="Backend">
              <option>Python</option>
              <option>Ruby</option>
              <option>Go</option>
              <option>Java</option>
            </optgroup>
            <optgroup label="Systems">
              <option>Rust</option>
              <option>C++</option>
              <option>C</option>
            </optgroup>
          </select>
        </div>
      </div>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects()},100),e}},l={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="400px";const c=document.createElement("style");return c.textContent=`
      .select-with-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
      }

      .select-with-icon .icon-left {
        position: absolute;
        left: var(--space-3);
        pointer-events: none;
        color: var(--color-text-secondary);
        z-index: 1;
      }

      .select-with-icon .select {
        flex: 1;
      }

      .select-with-icon .select select {
        padding-left: var(--space-10);
      }
    `,e.appendChild(c),e.innerHTML+=`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Choose Payment Method</label>
          <div class="select-with-icon">
            <i data-lucide="credit-card" class="icon-left" width="16" height="16"></i>
            <div class="select">
              <select>
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
                <option>Cryptocurrency</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label class="form-label">Select Currency</label>
          <div class="select-with-icon">
            <i data-lucide="dollar-sign" class="icon-left" width="16" height="16"></i>
            <div class="select">
              <select>
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
                <option>JPY - Japanese Yen</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects(),typeof lucide<"u"&&lucide.createIcons()},100),e}},a={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.innerHTML=`
      <div>
        <label class="form-label">Country</label>
        <div class="select">
          <select>
            <option value="">Select a country...</option>
            <optgroup label="North America">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="MX">Mexico</option>
            </optgroup>
            <optgroup label="Europe">
              <option value="GB">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="ES">Spain</option>
              <option value="IT">Italy</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="JP">Japan</option>
              <option value="CN">China</option>
              <option value="IN">India</option>
              <option value="KR">South Korea</option>
            </optgroup>
            <optgroup label="Oceania">
              <option value="AU">Australia</option>
              <option value="NZ">New Zealand</option>
            </optgroup>
          </select>
        </div>
        <div class="helper-text">Select your country or region</div>
      </div>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects()},100),e}},s={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="400px",e.innerHTML=`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Timezone</label>
          <div class="select">
            <select>
              <option value="">Select timezone...</option>
              <option value="UTC-12:00">(GMT-12:00) International Date Line West</option>
              <option value="UTC-11:00">(GMT-11:00) Midway Island</option>
              <option value="UTC-10:00">(GMT-10:00) Hawaii</option>
              <option value="UTC-09:00">(GMT-09:00) Alaska</option>
              <option value="UTC-08:00">(GMT-08:00) Pacific Time (US & Canada)</option>
              <option value="UTC-07:00">(GMT-07:00) Mountain Time (US & Canada)</option>
              <option value="UTC-06:00">(GMT-06:00) Central Time (US & Canada)</option>
              <option value="UTC-05:00" selected>(GMT-05:00) Eastern Time (US & Canada)</option>
              <option value="UTC+00:00">(GMT+00:00) London</option>
              <option value="UTC+01:00">(GMT+01:00) Paris</option>
              <option value="UTC+09:00">(GMT+09:00) Tokyo</option>
            </select>
          </div>
          <div class="helper-text">Your timezone affects when you receive notifications</div>
        </div>
        <div>
          <label class="form-label">Date Format</label>
          <div class="select">
            <select>
              <option value="MM/DD/YYYY">MM/DD/YYYY (US)</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY (EU)</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
              <option value="DD.MM.YYYY">DD.MM.YYYY (DE)</option>
            </select>
          </div>
          <div class="helper-text">Choose how dates are displayed throughout the app</div>
        </div>
      </div>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects()},100),e}},r={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="500px",e.innerHTML=`
      <form>
        <div class="flex flex-col gap-4">
          <div>
            <label class="form-label">Full Name</label>
            <input type="text" class="input" placeholder="John Doe" />
          </div>
          <div>
            <label class="form-label">Account Type</label>
            <div class="select">
              <select required>
                <option value="">Select account type...</option>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
            <div class="helper-text">Choose the type of account you want to create</div>
          </div>
          <div>
            <label class="form-label">Subscription Plan</label>
            <div class="select">
              <select required>
                <option value="">Select a plan...</option>
                <option value="free">Free - $0/month</option>
                <option value="pro">Pro - $19/month</option>
                <option value="team">Team - $49/month</option>
                <option value="enterprise">Enterprise - Custom</option>
              </select>
            </div>
          </div>
          <div>
            <label class="form-label">Country</label>
            <div class="select">
              <select required>
                <option value="">Select country...</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div class="flex gap-2">
            <button type="submit" class="btn btn-primary">Create Account</button>
            <button type="button" class="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </form>
    `,setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initSelects()},100),e}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.innerHTML = \`
      <div>
        <label class="form-label">Default Select</label>
        <div class="select">
          <select>
            <option>Default select</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
          </select>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);
    return container;
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,m,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.innerHTML = \`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Small Select</label>
          <div class="select select-sm">
            <select>
              <option>Small select</option>
              <option>Apple</option>
              <option>Banana</option>
              <option>Cherry</option>
            </select>
          </div>
        </div>
        <div>
          <label class="form-label">Default Select</label>
          <div class="select">
            <select>
              <option>Default select</option>
              <option>Apple</option>
              <option>Banana</option>
              <option>Cherry</option>
            </select>
          </div>
        </div>
        <div>
          <label class="form-label">Large Select</label>
          <div class="select select-lg">
            <select>
              <option>Large select</option>
              <option>Apple</option>
              <option>Banana</option>
              <option>Cherry</option>
            </select>
          </div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);
    return container;
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,y,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.innerHTML = \`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Disabled Select</label>
          <div class="select">
            <select disabled>
              <option>Disabled select</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
        <div>
          <label class="form-label">Error State</label>
          <div class="select select-error">
            <select>
              <option value="">Select an option...</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div class="helper-text error">Please select a valid option</div>
        </div>
        <div>
          <label class="form-label">Success State</label>
          <div class="select select-success">
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div class="helper-text success">Selection confirmed</div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);
    return container;
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,S,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.innerHTML = \`
      <div>
        <label class="form-label">Choose a programming language</label>
        <div class="select">
          <select>
            <option value="">Select a language...</option>
            <optgroup label="Frontend">
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>HTML/CSS</option>
            </optgroup>
            <optgroup label="Backend">
              <option>Python</option>
              <option>Ruby</option>
              <option>Go</option>
              <option>Java</option>
            </optgroup>
            <optgroup label="Systems">
              <option>Rust</option>
              <option>C++</option>
              <option>C</option>
            </optgroup>
          </select>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);
    return container;
  }
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,x,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';

    // Add custom styles for icon support
    const style = document.createElement('style');
    style.textContent = \`
      .select-with-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
      }

      .select-with-icon .icon-left {
        position: absolute;
        left: var(--space-3);
        pointer-events: none;
        color: var(--color-text-secondary);
        z-index: 1;
      }

      .select-with-icon .select {
        flex: 1;
      }

      .select-with-icon .select select {
        padding-left: var(--space-10);
      }
    \`;
    container.appendChild(style);
    container.innerHTML += \`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Choose Payment Method</label>
          <div class="select-with-icon">
            <i data-lucide="credit-card" class="icon-left" width="16" height="16"></i>
            <div class="select">
              <select>
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
                <option>Cryptocurrency</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label class="form-label">Select Currency</label>
          <div class="select-with-icon">
            <i data-lucide="dollar-sign" class="icon-left" width="16" height="16"></i>
            <div class="select">
              <select>
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
                <option>JPY - Japanese Yen</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
      // Initialize Lucide icons if available
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
    return container;
  }
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var M,U,A;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.innerHTML = \`
      <div>
        <label class="form-label">Country</label>
        <div class="select">
          <select>
            <option value="">Select a country...</option>
            <optgroup label="North America">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="MX">Mexico</option>
            </optgroup>
            <optgroup label="Europe">
              <option value="GB">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="ES">Spain</option>
              <option value="IT">Italy</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="JP">Japan</option>
              <option value="CN">China</option>
              <option value="IN">India</option>
              <option value="KR">South Korea</option>
            </optgroup>
            <optgroup label="Oceania">
              <option value="AU">Australia</option>
              <option value="NZ">New Zealand</option>
            </optgroup>
          </select>
        </div>
        <div class="helper-text">Select your country or region</div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);
    return container;
  }
}`,...(A=(U=a.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var Y,D,E;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    container.innerHTML = \`
      <div class="flex flex-col gap-4">
        <div>
          <label class="form-label">Timezone</label>
          <div class="select">
            <select>
              <option value="">Select timezone...</option>
              <option value="UTC-12:00">(GMT-12:00) International Date Line West</option>
              <option value="UTC-11:00">(GMT-11:00) Midway Island</option>
              <option value="UTC-10:00">(GMT-10:00) Hawaii</option>
              <option value="UTC-09:00">(GMT-09:00) Alaska</option>
              <option value="UTC-08:00">(GMT-08:00) Pacific Time (US & Canada)</option>
              <option value="UTC-07:00">(GMT-07:00) Mountain Time (US & Canada)</option>
              <option value="UTC-06:00">(GMT-06:00) Central Time (US & Canada)</option>
              <option value="UTC-05:00" selected>(GMT-05:00) Eastern Time (US & Canada)</option>
              <option value="UTC+00:00">(GMT+00:00) London</option>
              <option value="UTC+01:00">(GMT+01:00) Paris</option>
              <option value="UTC+09:00">(GMT+09:00) Tokyo</option>
            </select>
          </div>
          <div class="helper-text">Your timezone affects when you receive notifications</div>
        </div>
        <div>
          <label class="form-label">Date Format</label>
          <div class="select">
            <select>
              <option value="MM/DD/YYYY">MM/DD/YYYY (US)</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY (EU)</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
              <option value="DD.MM.YYYY">DD.MM.YYYY (DE)</option>
            </select>
          </div>
          <div class="helper-text">Choose how dates are displayed throughout the app</div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);
    return container;
  }
}`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var G,L,P;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';
    container.innerHTML = \`
      <form>
        <div class="flex flex-col gap-4">
          <div>
            <label class="form-label">Full Name</label>
            <input type="text" class="input" placeholder="John Doe" />
          </div>
          <div>
            <label class="form-label">Account Type</label>
            <div class="select">
              <select required>
                <option value="">Select account type...</option>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
            <div class="helper-text">Choose the type of account you want to create</div>
          </div>
          <div>
            <label class="form-label">Subscription Plan</label>
            <div class="select">
              <select required>
                <option value="">Select a plan...</option>
                <option value="free">Free - $0/month</option>
                <option value="pro">Pro - $19/month</option>
                <option value="team">Team - $49/month</option>
                <option value="enterprise">Enterprise - Custom</option>
              </select>
            </div>
          </div>
          <div>
            <label class="form-label">Country</label>
            <div class="select">
              <select required>
                <option value="">Select country...</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div class="flex gap-2">
            <button type="submit" class="btn btn-primary">Create Account</button>
            <button type="button" class="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </form>
    \`;
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initSelects();
      }
    }, 100);
    return container;
  }
}`,...(P=(L=r.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const B=["Default","Sizes","States","WithGroups","WithIcon","CountrySelector","WithHelperText","FormIntegration"];export{a as CountrySelector,o as Default,r as FormIntegration,t as Sizes,i as States,n as WithGroups,s as WithHelperText,l as WithIcon,B as __namedExportsOrder,W as default};
