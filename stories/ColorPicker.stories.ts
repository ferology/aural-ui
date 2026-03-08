import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Forms/Color Picker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Color Picker Component

A comprehensive color selection interface with visual pickers, multiple color format support, preset swatches, and alpha channel controls.

Use Color Picker when users need to select or customize colors with precision, such as in design tools, theme editors, brand customizers, or any application requiring color input beyond basic palette selection. Unlike simple color swatches, Color Picker provides fine-grained control over hue, saturation, lightness, and opacity.

Color Picker components offer multiple interaction modes to suit different user preferences and technical contexts. Visual users can use the saturation/lightness canvas and hue slider for intuitive selection, while power users can input exact HEX, RGB, or HSL values for precision. Preset colors enable quick access to brand-approved palettes, and the alpha channel supports transparency for overlays and effects.

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-color-picker" id="my-color-picker">
  <!-- Preview section -->
  <div class="aural-color-picker__preview">
    <div class="aural-color-picker__swatch">
      <div class="aural-color-picker__swatch-color"></div>
    </div>
    <input
      type="text"
      class="aural-color-picker__value"
      value="#F00054"
      readonly
      aria-label="Selected color value"
    />
  </div>

  <!-- Color canvas for saturation/lightness -->
  <div class="aural-color-picker__canvas" role="slider" aria-label="Select color saturation and lightness" tabindex="0">
    <div class="aural-color-picker__saturation"></div>
    <div class="aural-color-picker__lightness"></div>
    <div class="aural-color-picker__cursor"></div>
  </div>

  <!-- Hue slider -->
  <div class="aural-color-picker__hue" role="slider" aria-label="Select hue" aria-valuemin="0" aria-valuemax="360" aria-valuenow="340" tabindex="0">
    <div class="aural-color-picker__hue-handle"></div>
  </div>

  <!-- Alpha slider (optional) -->
  <div class="aural-color-picker__alpha" role="slider" aria-label="Select opacity" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" tabindex="0">
    <div class="aural-color-picker__alpha-gradient"></div>
    <div class="aural-color-picker__alpha-handle"></div>
  </div>

  <!-- Format mode toggles -->
  <div class="aural-color-picker__modes" role="tablist">
    <button type="button" class="aural-color-picker__mode aural-color-picker__mode--active" role="tab" data-mode="hex">HEX</button>
    <button type="button" class="aural-color-picker__mode" role="tab" data-mode="rgb">RGB</button>
    <button type="button" class="aural-color-picker__mode" role="tab" data-mode="hsl">HSL</button>
  </div>

  <!-- Color input fields -->
  <div class="aural-color-picker__inputs" data-mode="hex">
    <div class="aural-color-picker__input-group">
      <label class="aural-color-picker__input-label">Hex</label>
      <input type="text" class="aural-color-picker__input" value="F00054" maxlength="6" aria-label="Hexadecimal color value" />
    </div>
  </div>

  <!-- Preset colors -->
  <div class="aural-color-picker__presets">
    <div class="aural-color-picker__preset-label">Presets</div>
    <div class="aural-color-picker__preset-grid" role="group" aria-label="Preset colors">
      <button type="button" class="aural-color-picker__preset" aria-label="Select preset color: Red">
        <div class="aural-color-picker__preset-color" style="background: #f00054;"></div>
      </button>
      <!-- More presets... -->
    </div>
  </div>
</div>

<script>
  window.Aural.initColorPicker('my-color-picker', {
    color: '#F00054',
    alpha: true,
    mode: 'hex',
    presets: ['#f00054', '#22c55e', '#3b82f6', '#f59e0b'],
    onChange: (color) => console.log('Color changed:', color)
  });
</script>
\`\`\`

**React:**
\`\`\`jsx
import { useState, useRef, useEffect } from 'react';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  format?: 'hex' | 'rgb' | 'hsl';
  showAlpha?: boolean;
  showPresets?: boolean;
  presets?: string[];
  compact?: boolean;
}

function ColorPicker({
  value,
  onChange,
  format = 'hex',
  showAlpha = false,
  showPresets = true,
  presets = ['#f00054', '#22c55e', '#3b82f6', '#f59e0b'],
  compact = false
}: ColorPickerProps) {
  const [currentColor, setCurrentColor] = useState(value);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);
  const [alpha, setAlpha] = useState(100);
  const [currentFormat, setCurrentFormat] = useState(format);

  const canvasRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const alphaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parse initial color and set HSL values
    // Implementation omitted for brevity
    updateColorFromHSL();
  }, []);

  const updateColorFromHSL = () => {
    let color;
    if (currentFormat === 'hex') {
      color = hslToHex(hue, saturation, lightness);
    } else if (currentFormat === 'rgb') {
      color = hslToRgb(hue, saturation, lightness, showAlpha ? alpha : undefined);
    } else {
      color = \`hsl(\${hue}, \${saturation}%, \${lightness}%\${showAlpha ? \`, \${alpha / 100}\` : ''})\`;
    }
    setCurrentColor(color);
    onChange(color);
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setSaturation(Math.round(x * 100));
    setLightness(Math.round((1 - y) * 100));
    updateColorFromHSL();
  };

  const handleHueChange = (e: React.MouseEvent) => {
    if (!hueRef.current) return;
    const rect = hueRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setHue(Math.round(x * 360));
    updateColorFromHSL();
  };

  const handleAlphaChange = (e: React.MouseEvent) => {
    if (!alphaRef.current || !showAlpha) return;
    const rect = alphaRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setAlpha(Math.round(x * 100));
    updateColorFromHSL();
  };

  const handlePresetClick = (presetColor: string) => {
    setCurrentColor(presetColor);
    onChange(presetColor);
    // Parse preset color to update HSL values
  };

  return (
    <div className={\`aural-color-picker \${compact ? 'aural-color-picker--compact' : ''}\`}>
      <div className="aural-color-picker__preview">
        <div className="aural-color-picker__swatch">
          <div className="aural-color-picker__swatch-color" style={{ background: currentColor }} />
        </div>
        <input
          type="text"
          className="aural-color-picker__value"
          value={currentColor}
          readOnly
          aria-label="Selected color value"
        />
      </div>

      <div
        ref={canvasRef}
        className="aural-color-picker__canvas"
        onClick={handleCanvasClick}
        role="slider"
        aria-label="Select color saturation and lightness"
        tabIndex={0}
      >
        <div className="aural-color-picker__saturation" />
        <div className="aural-color-picker__lightness" />
        <div className="aural-color-picker__cursor" />
      </div>

      <div
        ref={hueRef}
        className="aural-color-picker__hue"
        onClick={handleHueChange}
        role="slider"
        aria-label="Select hue"
        aria-valuemin="0"
        aria-valuemax="360"
        aria-valuenow={hue}
        tabIndex={0}
      >
        <div className="aural-color-picker__hue-handle" />
      </div>

      {showAlpha && (
        <div
          ref={alphaRef}
          className="aural-color-picker__alpha"
          onClick={handleAlphaChange}
          role="slider"
          aria-label="Select opacity"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={alpha}
          tabIndex={0}
        >
          <div className="aural-color-picker__alpha-gradient" />
          <div className="aural-color-picker__alpha-handle" />
        </div>
      )}

      {!compact && (
        <>
          <div className="aural-color-picker__modes" role="tablist">
            {['hex', 'rgb', 'hsl'].map((mode) => (
              <button
                key={mode}
                type="button"
                className={\`aural-color-picker__mode \${currentFormat === mode ? 'aural-color-picker__mode--active' : ''}\`}
                onClick={() => setCurrentFormat(mode as typeof currentFormat)}
                role="tab"
              >
                {mode.toUpperCase()}
              </button>
            ))}
          </div>

          {showPresets && (
            <div className="aural-color-picker__presets">
              <div className="aural-color-picker__preset-label">Presets</div>
              <div className="aural-color-picker__preset-grid" role="group" aria-label="Preset colors">
                {presets.map((preset, index) => (
                  <button
                    key={index}
                    type="button"
                    className="aural-color-picker__preset"
                    onClick={() => handlePresetClick(preset)}
                    aria-label={\`Select preset color: \${preset}\`}
                  >
                    <div className="aural-color-picker__preset-color" style={{ background: preset }} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Helper functions: hslToHex, hslToRgb, etc.
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div :class="['aural-color-picker', { 'aural-color-picker--compact': compact }]">
    <div class="aural-color-picker__preview">
      <div class="aural-color-picker__swatch">
        <div class="aural-color-picker__swatch-color" :style="{ background: currentColor }" />
      </div>
      <input
        type="text"
        class="aural-color-picker__value"
        :value="currentColor"
        readonly
        aria-label="Selected color value"
      />
    </div>

    <div
      ref="canvasRef"
      class="aural-color-picker__canvas"
      @click="handleCanvasClick"
      role="slider"
      aria-label="Select color saturation and lightness"
      tabindex="0"
    >
      <div class="aural-color-picker__saturation" />
      <div class="aural-color-picker__lightness" />
      <div class="aural-color-picker__cursor" />
    </div>

    <div
      ref="hueRef"
      class="aural-color-picker__hue"
      @click="handleHueChange"
      role="slider"
      aria-label="Select hue"
      aria-valuemin="0"
      aria-valuemax="360"
      :aria-valuenow="hue"
      tabindex="0"
    >
      <div class="aural-color-picker__hue-handle" />
    </div>

    <div
      v-if="showAlpha"
      ref="alphaRef"
      class="aural-color-picker__alpha"
      @click="handleAlphaChange"
      role="slider"
      aria-label="Select opacity"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="alpha"
      tabindex="0"
    >
      <div class="aural-color-picker__alpha-gradient" />
      <div class="aural-color-picker__alpha-handle" />
    </div>

    <div v-if="!compact" class="aural-color-picker__modes" role="tablist">
      <button
        v-for="mode in ['hex', 'rgb', 'hsl']"
        :key="mode"
        type="button"
        :class="['aural-color-picker__mode', { 'aural-color-picker__mode--active': currentFormat === mode }]"
        @click="currentFormat = mode"
        role="tab"
      >
        {{ mode.toUpperCase() }}
      </button>
    </div>

    <div v-if="showPresets && !compact" class="aural-color-picker__presets">
      <div class="aural-color-picker__preset-label">Presets</div>
      <div class="aural-color-picker__preset-grid" role="group" aria-label="Preset colors">
        <button
          v-for="(preset, index) in presets"
          :key="index"
          type="button"
          class="aural-color-picker__preset"
          @click="handlePresetClick(preset)"
          :aria-label="\`Select preset color: \${preset}\`"
        >
          <div class="aural-color-picker__preset-color" :style="{ background: preset }" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    format: { type: String, default: 'hex' },
    showAlpha: { type: Boolean, default: false },
    showPresets: { type: Boolean, default: true },
    presets: {
      type: Array,
      default: () => ['#f00054', '#22c55e', '#3b82f6', '#f59e0b']
    },
    compact: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      currentColor: this.modelValue,
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 100,
      currentFormat: this.format
    };
  },
  methods: {
    handleCanvasClick(e) {
      const rect = this.$refs.canvasRef.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      this.saturation = Math.round(x * 100);
      this.lightness = Math.round((1 - y) * 100);
      this.updateColorFromHSL();
    },
    handleHueChange(e) {
      const rect = this.$refs.hueRef.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      this.hue = Math.round(x * 360);
      this.updateColorFromHSL();
    },
    handleAlphaChange(e) {
      if (!this.showAlpha) return;
      const rect = this.$refs.alphaRef.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      this.alpha = Math.round(x * 100);
      this.updateColorFromHSL();
    },
    handlePresetClick(preset) {
      this.currentColor = preset;
      this.$emit('update:modelValue', preset);
    },
    updateColorFromHSL() {
      // Convert HSL to current format and emit
      let color;
      if (this.currentFormat === 'hex') {
        color = this.hslToHex(this.hue, this.saturation, this.lightness);
      } else if (this.currentFormat === 'rgb') {
        color = this.hslToRgb(this.hue, this.saturation, this.lightness, this.showAlpha ? this.alpha : undefined);
      } else {
        color = \`hsl(\${this.hue}, \${this.saturation}%, \${this.lightness}%\${this.showAlpha ? \`, \${this.alpha / 100}\` : ''})\`;
      }
      this.currentColor = color;
      this.$emit('update:modelValue', color);
    }
  },
  mounted() {
    // Parse initial color
    this.updateColorFromHSL();
  }
};
</script>
\`\`\`

**Svelte:**
\`\`\`svelte
<script>
  import { onMount } from 'svelte';

  export let value = '#F00054';
  export let format = 'hex';
  export let showAlpha = false;
  export let showPresets = true;
  export let presets = ['#f00054', '#22c55e', '#3b82f6', '#f59e0b'];
  export let compact = false;

  let currentColor = value;
  let hue = 0;
  let saturation = 100;
  let lightness = 50;
  let alpha = 100;
  let currentFormat = format;

  let canvasRef;
  let hueRef;
  let alphaRef;

  function handleCanvasClick(e) {
    const rect = canvasRef.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    saturation = Math.round(x * 100);
    lightness = Math.round((1 - y) * 100);
    updateColorFromHSL();
  }

  function handleHueChange(e) {
    const rect = hueRef.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    hue = Math.round(x * 360);
    updateColorFromHSL();
  }

  function handleAlphaChange(e) {
    if (!showAlpha) return;
    const rect = alphaRef.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    alpha = Math.round(x * 100);
    updateColorFromHSL();
  }

  function handlePresetClick(preset) {
    currentColor = preset;
    value = preset;
  }

  function updateColorFromHSL() {
    let color;
    if (currentFormat === 'hex') {
      color = hslToHex(hue, saturation, lightness);
    } else if (currentFormat === 'rgb') {
      color = hslToRgb(hue, saturation, lightness, showAlpha ? alpha : undefined);
    } else {
      color = \`hsl(\${hue}, \${saturation}%, \${lightness}%\${showAlpha ? \`, \${alpha / 100}\` : ''})\`;
    }
    currentColor = color;
    value = color;
  }

  onMount(() => {
    updateColorFromHSL();
  });
</script>

<div class="aural-color-picker" class:aural-color-picker--compact={compact}>
  <div class="aural-color-picker__preview">
    <div class="aural-color-picker__swatch">
      <div class="aural-color-picker__swatch-color" style="background: {currentColor}" />
    </div>
    <input
      type="text"
      class="aural-color-picker__value"
      bind:value={currentColor}
      readonly
      aria-label="Selected color value"
    />
  </div>

  <div
    bind:this={canvasRef}
    class="aural-color-picker__canvas"
    on:click={handleCanvasClick}
    role="slider"
    aria-label="Select color saturation and lightness"
    tabindex="0"
  >
    <div class="aural-color-picker__saturation" />
    <div class="aural-color-picker__lightness" />
    <div class="aural-color-picker__cursor" />
  </div>

  <div
    bind:this={hueRef}
    class="aural-color-picker__hue"
    on:click={handleHueChange}
    role="slider"
    aria-label="Select hue"
    aria-valuemin="0"
    aria-valuemax="360"
    aria-valuenow={hue}
    tabindex="0"
  >
    <div class="aural-color-picker__hue-handle" />
  </div>

  {#if showAlpha}
    <div
      bind:this={alphaRef}
      class="aural-color-picker__alpha"
      on:click={handleAlphaChange}
      role="slider"
      aria-label="Select opacity"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={alpha}
      tabindex="0"
    >
      <div class="aural-color-picker__alpha-gradient" />
      <div class="aural-color-picker__alpha-handle" />
    </div>
  {/if}

  {#if !compact}
    <div class="aural-color-picker__modes" role="tablist">
      {#each ['hex', 'rgb', 'hsl'] as mode}
        <button
          type="button"
          class="aural-color-picker__mode"
          class:aural-color-picker__mode--active={currentFormat === mode}
          on:click={() => (currentFormat = mode)}
          role="tab"
        >
          {mode.toUpperCase()}
        </button>
      {/each}
    </div>

    {#if showPresets}
      <div class="aural-color-picker__presets">
        <div class="aural-color-picker__preset-label">Presets</div>
        <div class="aural-color-picker__preset-grid" role="group" aria-label="Preset colors">
          {#each presets as preset, index}
            <button
              type="button"
              class="aural-color-picker__preset"
              on:click={() => handlePresetClick(preset)}
              aria-label="Select preset color: {preset}"
            >
              <div class="aural-color-picker__preset-color" style="background: {preset}" />
            </button>
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</div>
\`\`\`

## Accessibility

- **Use role="slider"**: Apply to canvas, hue slider, and alpha slider for screen reader identification as adjustable controls
- **Provide aria-label**: Clearly describe each slider's purpose ("Select hue", "Select opacity", "Select saturation and lightness")
- **Set aria-valuemin, aria-valuemax, aria-valuenow**: Announce current values and ranges for hue (0-360) and alpha (0-100)
- **Keyboard navigation**: Support Arrow keys to adjust hue/alpha (Left/Right), Enter to confirm, Tab to move between controls
- **Focus visibility**: Ensure all interactive elements have visible focus indicators (2px outline with 2px offset, high contrast)
- **Touch targets**: Make all buttons and sliders at least 44×44px for touch accessibility (handles, presets, mode toggles)
- **Color contrast for UI**: Ensure text labels and controls have sufficient contrast (4.5:1 minimum) against backgrounds
- **Avoid color-only communication**: Use labels and values, not just colors, to convey information (important for color blindness)
- **Format toggle accessibility**: Use role="tablist" and role="tab" for format mode buttons (HEX/RGB/HSL)
- **Preset button labels**: Provide descriptive aria-label for each preset ("Select preset color: #F00054" or brand name)
- **Live region updates**: Consider aria-live="polite" to announce color value changes for screen readers
- **Keyboard shortcuts**: Support common shortcuts like C to copy color value, P to cycle through presets
- **Alpha channel indication**: Clearly indicate when alpha/transparency is enabled with checkbox or toggle label
- **Contrast checking**: Optionally provide contrast ratio calculation against background for WCAG compliance
- **Reduced motion**: Respect prefers-reduced-motion for cursor animations and transitions

## Usage Guidelines

- **When to use:**
  - Design tools and graphic editors requiring precise color selection
  - Theme customizers and brand color configuration interfaces
  - Form fields for color input (accent colors, backgrounds, text colors)
  - CSS color property editors in developer tools or page builders
  - Marketing materials and banner creators with custom branding

- **When NOT to use:**
  - Simple color selection from predefined palette: Use Color Swatch component
  - Binary light/dark mode: Use Toggle or Radio buttons
  - Limited brand colors only: Use Dropdown or Button group with color swatches
  - Icon or image tinting with few options: Use preset buttons only (compact mode)

- **Best practices:**
  - Provide preset colors for commonly used brand/theme colors to speed up selection
  - Default to user's preferred format (HEX for web developers, RGB for designers)
  - Show real-time preview of the selected color on a contrasting background
  - Display the exact color value in the current format (HEX, RGB, HSL) for copying
  - Support copy-to-clipboard functionality for the color value
  - Validate input values and provide clear error feedback for invalid colors
  - Allow format switching without losing the current color selection
  - Consider recent colors list for quick access to previously used colors

- **Mobile considerations:**
  - Use larger touch targets for sliders (min 44×44px) and preset swatches (min 40×40px)
  - Consider compact mode for limited screen space (hides format toggles and inputs)
  - Test touch dragging on canvas and sliders for smooth interaction
  - Provide haptic feedback on selection for better tactile response
  - Use bottom sheet or modal pattern for picker to maximize available space

- **Color format guidance:**
  - HEX: Best for web development and CSS (6-character format, e.g., #F00054)
  - RGB: Best for digital design and precise channel control (0-255 per channel)
  - HSL: Best for color theory and intuitive adjustments (hue, saturation, lightness)
  - Alpha channel: Enable only when transparency is needed (adds complexity)
  - Provide format conversion automatically when user switches modes
        `.trim(),
      },
    },
  },
  argTypes: {
    value: {
      control: 'color',
      description:
        'Current color value in any valid format (HEX like "#F00054", RGB like "rgb(240, 0, 84)", or HSL like "hsl(340, 100%, 47%)")',
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'hsl'],
      description:
        'Color format for display and input: hex (6-char like #F00054), rgb (0-255 per channel), hsl (hue 0-360, saturation/lightness 0-100%)',
    },
    showAlpha: {
      control: 'boolean',
      description:
        'Show alpha/opacity slider control (0-100%) for transparency support, adds fourth channel to RGB/HSL formats',
    },
    showInput: {
      control: 'boolean',
      description:
        'Show manual text input fields for entering precise color values by typing (HEX code or RGB/HSL channels)',
    },
    showPresets: {
      control: 'boolean',
      description:
        'Show preset color swatch buttons for quick selection of commonly used brand or theme colors',
    },
    compact: {
      control: 'boolean',
      description:
        'Use compact variant (hides format toggles and input fields, shows only canvas/sliders and presets for space-constrained layouts)',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disabled state prevents all interaction and applies muted styling with 50% opacity and disabled cursor',
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper function to create color picker HTML following the exact docs structure
function createColorPicker(args: {
  value?: string;
  format?: string;
  showAlpha?: boolean;
  showInput?: boolean;
  showPresets?: boolean;
  compact?: boolean;
  disabled?: boolean;
}): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = 'padding: 2rem; max-width: 320px;';

  const picker = document.createElement('div');
  picker.className = 'aural-color-picker';

  if (args.compact) {
    picker.classList.add('aural-color-picker--compact');
  }
  if (args.disabled) {
    picker.classList.add('aural-color-picker--disabled');
  }

  // Generate unique ID for this instance
  const pickerId = `color-picker-${Math.random().toString(36).substr(2, 9)}`;
  picker.id = pickerId;

  // Preview section: swatch + value display
  const preview = document.createElement('div');
  preview.className = 'aural-color-picker__preview';

  const swatch = document.createElement('div');
  swatch.className = 'aural-color-picker__swatch';

  const swatchColor = document.createElement('div');
  swatchColor.className = 'aural-color-picker__swatch-color';
  swatch.appendChild(swatchColor);

  const valueInput = document.createElement('input');
  valueInput.type = 'text';
  valueInput.className = 'aural-color-picker__value';
  valueInput.value = args.value || '#F00054';
  valueInput.readOnly = true;

  preview.appendChild(swatch);
  if (args.showInput !== false) {
    preview.appendChild(valueInput);
  }

  picker.appendChild(preview);

  // Canvas section: saturation/lightness/cursor
  const canvas = document.createElement('div');
  canvas.className = 'aural-color-picker__canvas';

  const saturation = document.createElement('div');
  saturation.className = 'aural-color-picker__saturation';

  const lightness = document.createElement('div');
  lightness.className = 'aural-color-picker__lightness';

  const cursor = document.createElement('div');
  cursor.className = 'aural-color-picker__cursor';

  canvas.appendChild(saturation);
  canvas.appendChild(lightness);
  canvas.appendChild(cursor);

  picker.appendChild(canvas);

  // Hue slider
  const hue = document.createElement('div');
  hue.className = 'aural-color-picker__hue';

  const hueHandle = document.createElement('div');
  hueHandle.className = 'aural-color-picker__hue-handle';

  hue.appendChild(hueHandle);
  picker.appendChild(hue);

  // Alpha slider (if enabled)
  if (args.showAlpha) {
    const alpha = document.createElement('div');
    alpha.className = 'aural-color-picker__alpha';

    const alphaGradient = document.createElement('div');
    alphaGradient.className = 'aural-color-picker__alpha-gradient';

    const alphaHandle = document.createElement('div');
    alphaHandle.className = 'aural-color-picker__alpha-handle';

    alpha.appendChild(alphaGradient);
    alpha.appendChild(alphaHandle);
    picker.appendChild(alpha);
  }

  // Format mode toggle buttons (not in compact mode)
  if (!args.compact) {
    const modes = document.createElement('div');
    modes.className = 'aural-color-picker__modes';

    const formats = ['hex', 'rgb', 'hsl'];
    formats.forEach((format) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'aural-color-picker__mode';

      if (args.format === format) {
        button.classList.add('aural-color-picker__mode--active');
      }

      button.setAttribute('data-mode', format);
      button.textContent = format.toUpperCase();
      button.disabled = args.disabled || false;
      modes.appendChild(button);
    });

    picker.appendChild(modes);

    // Input fields based on format
    const inputs = document.createElement('div');
    inputs.className = 'aural-color-picker__inputs';
    inputs.setAttribute('data-mode', args.format);

    if (args.format === 'hex') {
      const group = document.createElement('div');
      group.className = 'aural-color-picker__input-group';

      const label = document.createElement('label');
      label.className = 'aural-color-picker__input-label';
      label.textContent = 'Hex';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'aural-color-picker__input';
      input.value = (args.value || '#F00054').replace('#', '');
      input.maxLength = 6;
      input.disabled = args.disabled || false;

      group.appendChild(label);
      group.appendChild(input);
      inputs.appendChild(group);
    } else if (args.format === 'rgb') {
      inputs.classList.add('aural-color-picker__inputs--rgba');

      const channels = args.showAlpha
        ? [
            { name: 'R', value: '240', max: '255' },
            { name: 'G', value: '0', max: '255' },
            { name: 'B', value: '84', max: '255' },
            { name: 'A', value: '100', max: '100' },
          ]
        : [
            { name: 'R', value: '240', max: '255' },
            { name: 'G', value: '0', max: '255' },
            { name: 'B', value: '84', max: '255' },
          ];

      channels.forEach((channel) => {
        const group = document.createElement('div');
        group.className = 'aural-color-picker__input-group';

        const label = document.createElement('label');
        label.className = 'aural-color-picker__input-label';
        label.textContent = channel.name;

        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'aural-color-picker__input';
        input.value = channel.value;
        input.min = '0';
        input.max = channel.max;
        input.disabled = args.disabled || false;

        group.appendChild(label);
        group.appendChild(input);
        inputs.appendChild(group);
      });
    } else if (args.format === 'hsl') {
      inputs.classList.add('aural-color-picker__inputs--hsla');

      const channels = args.showAlpha
        ? [
            { name: 'H', value: '340', max: '360' },
            { name: 'S', value: '100', max: '100' },
            { name: 'L', value: '47', max: '100' },
            { name: 'A', value: '100', max: '100' },
          ]
        : [
            { name: 'H', value: '340', max: '360' },
            { name: 'S', value: '100', max: '100' },
            { name: 'L', value: '47', max: '100' },
          ];

      channels.forEach((channel) => {
        const group = document.createElement('div');
        group.className = 'aural-color-picker__input-group';

        const label = document.createElement('label');
        label.className = 'aural-color-picker__input-label';
        label.textContent = channel.name;

        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'aural-color-picker__input';
        input.value = channel.value;
        input.min = '0';
        input.max = channel.max;
        input.disabled = args.disabled || false;

        group.appendChild(label);
        group.appendChild(input);
        inputs.appendChild(group);
      });
    }

    picker.appendChild(inputs);
  }

  // Preset colors (if enabled and not compact)
  if (args.showPresets !== false && !args.compact) {
    const presets = document.createElement('div');
    presets.className = 'aural-color-picker__presets';

    const presetLabel = document.createElement('div');
    presetLabel.className = 'aural-color-picker__preset-label';
    presetLabel.textContent = 'Presets';

    const presetGrid = document.createElement('div');
    presetGrid.className = 'aural-color-picker__preset-grid';

    const presetColors = [
      '#f00054',
      '#22c55e',
      '#3b82f6',
      '#f59e0b',
      '#ef4444',
      '#8b5cf6',
      '#ec4899',
      '#14b8a6',
    ];

    presetColors.forEach((color) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'aural-color-picker__preset';
      button.disabled = args.disabled || false;

      if (args.value === color) {
        button.classList.add('aural-color-picker__preset--active');
      }

      const presetColor = document.createElement('div');
      presetColor.className = 'aural-color-picker__preset-color';
      presetColor.style.background = color;

      button.appendChild(presetColor);
      presetGrid.appendChild(button);
    });

    presets.appendChild(presetLabel);
    presets.appendChild(presetGrid);
    picker.appendChild(presets);
  }

  container.appendChild(picker);

  // Initialize the color picker with Aural.initColorPicker if available
  setTimeout(() => {
    if (
      typeof (
        window as unknown as { Aural?: { initColorPicker?: (id: string, config: unknown) => void } }
      ).Aural !== 'undefined' &&
      (window as unknown as { Aural: { initColorPicker: (id: string, config: unknown) => void } })
        .Aural.initColorPicker
    ) {
      (
        window as unknown as { Aural: { initColorPicker: (id: string, config: unknown) => void } }
      ).Aural.initColorPicker(pickerId, {
        color: args.value || '#F00054',
        alpha: args.showAlpha || false,
        mode: args.format || 'hex',
        presets:
          args.showPresets !== false
            ? [
                '#f00054',
                '#22c55e',
                '#3b82f6',
                '#f59e0b',
                '#ef4444',
                '#8b5cf6',
                '#ec4899',
                '#14b8a6',
              ]
            : undefined,
        compact: args.compact || false,
        onChange: (color: string) => console.log('Color changed:', color),
      });
    }
  }, 0);

  return container;
}

export const Default: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false,
  },
};

export const FullFeatured: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false,
  },
};

export const WithAlpha: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false,
  },
};

export const HexFormat: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#3B82F6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false,
  },
};

export const RgbFormat: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#22C55E',
    format: 'rgb',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false,
  },
};

export const HslFormat: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F59E0B',
    format: 'hsl',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false,
  },
};

export const Compact: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#8B5CF6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: true,
    disabled: false,
  },
};

export const WithPresets: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => createColorPicker(args),
  args: {
    value: '#EC4899',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: true,
  },
};

export const ThemePicker: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';

    const title = document.createElement('h3');
    title.textContent = 'Theme Customizer';
    title.style.cssText = 'margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600;';

    const grid = document.createElement('div');
    grid.style.cssText =
      'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;';

    const colors = [
      { label: 'Primary Color', value: '#F00054' },
      { label: 'Background', value: '#1A1A1A' },
      { label: 'Text Color', value: '#FFFFFF' },
    ];

    colors.forEach((color) => {
      const group = document.createElement('div');

      const label = document.createElement('label');
      label.style.cssText =
        'display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;';
      label.textContent = color.label;

      const picker = createColorPicker({
        value: color.value,
        format: 'hex',
        showAlpha: false,
        showInput: true,
        showPresets: false,
        compact: true,
        disabled: false,
      });

      group.appendChild(label);
      group.appendChild(picker);
      grid.appendChild(group);
    });

    container.appendChild(title);
    container.appendChild(grid);
    return container;
  },
};

export const BrandColors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 400px;';

    const title = document.createElement('h3');
    title.textContent = 'Brand Color Palette';
    title.style.cssText = 'margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;';

    const description = document.createElement('p');
    description.textContent =
      'Select from approved brand colors or create custom colors for your design.';
    description.style.cssText =
      'margin: 0 0 1.5rem 0; color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.5;';

    const picker = createColorPicker({
      value: '#F00054',
      format: 'hex',
      showAlpha: false,
      showInput: true,
      showPresets: true,
      compact: false,
      disabled: false,
    });

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(picker);
    return container;
  },
};

export const AllFormats: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText =
      'padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 1000px;';

    const formats = [
      { format: 'hex', label: 'HEX Format', value: '#F00054' },
      { format: 'rgb', label: 'RGB Format', value: '#22C55E' },
      { format: 'hsl', label: 'HSL Format', value: '#3B82F6' },
    ];

    formats.forEach(({ format, label, value }) => {
      const section = document.createElement('div');

      const heading = document.createElement('h4');
      heading.textContent = label;
      heading.style.cssText = 'margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;';

      const picker = createColorPicker({
        value,
        format: format as 'hex' | 'rgb' | 'hsl',
        showAlpha: true,
        showInput: true,
        showPresets: false,
        compact: false,
        disabled: false,
      });

      section.appendChild(heading);
      section.appendChild(picker);
      container.appendChild(section);
    });

    return container;
  },
};

export const WithRecentColors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 320px;';

    const picker = document.createElement('div');
    picker.className = 'aural-color-picker';
    picker.id = 'color-picker-recent';

    // Preview
    const preview = document.createElement('div');
    preview.className = 'aural-color-picker__preview';

    const swatch = document.createElement('div');
    swatch.className = 'aural-color-picker__swatch';
    const swatchColor = document.createElement('div');
    swatchColor.className = 'aural-color-picker__swatch-color';
    swatch.appendChild(swatchColor);

    const valueInput = document.createElement('input');
    valueInput.type = 'text';
    valueInput.className = 'aural-color-picker__value';
    valueInput.value = '#8B5CF6';
    valueInput.readOnly = true;

    preview.appendChild(swatch);
    preview.appendChild(valueInput);
    picker.appendChild(preview);

    // Canvas
    const canvas = document.createElement('div');
    canvas.className = 'aural-color-picker__canvas';
    const saturation = document.createElement('div');
    saturation.className = 'aural-color-picker__saturation';
    const lightness = document.createElement('div');
    lightness.className = 'aural-color-picker__lightness';
    const cursor = document.createElement('div');
    cursor.className = 'aural-color-picker__cursor';
    canvas.appendChild(saturation);
    canvas.appendChild(lightness);
    canvas.appendChild(cursor);
    picker.appendChild(canvas);

    // Hue
    const hue = document.createElement('div');
    hue.className = 'aural-color-picker__hue';
    const hueHandle = document.createElement('div');
    hueHandle.className = 'aural-color-picker__hue-handle';
    hue.appendChild(hueHandle);
    picker.appendChild(hue);

    // Presets
    const presets = document.createElement('div');
    presets.className = 'aural-color-picker__presets';

    const presetLabel = document.createElement('div');
    presetLabel.className = 'aural-color-picker__preset-label';
    presetLabel.textContent = 'Presets';

    const presetGrid = document.createElement('div');
    presetGrid.className = 'aural-color-picker__preset-grid';

    const presetColors = ['#f00054', '#22c55e', '#3b82f6', '#f59e0b'];
    presetColors.forEach((color) => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      const presetColor = document.createElement('div');
      presetColor.className = 'aural-color-picker__preset-color';
      presetColor.style.background = color;
      button.appendChild(presetColor);
      presetGrid.appendChild(button);
    });

    presets.appendChild(presetLabel);
    presets.appendChild(presetGrid);
    picker.appendChild(presets);

    // Recent colors
    const recent = document.createElement('div');
    recent.className = 'aural-color-picker__recent';

    const recentLabel = document.createElement('div');
    recentLabel.className = 'aural-color-picker__recent-label';
    recentLabel.textContent = 'Recent';

    const recentGrid = document.createElement('div');
    recentGrid.className = 'aural-color-picker__recent-grid';

    const recentColors = ['#8b5cf6', '#ec4899', '#14b8a6', '#ef4444'];
    recentColors.forEach((color) => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      const recentColor = document.createElement('div');
      recentColor.className = 'aural-color-picker__preset-color';
      recentColor.style.background = color;
      button.appendChild(recentColor);
      recentGrid.appendChild(button);
    });

    recent.appendChild(recentLabel);
    recent.appendChild(recentGrid);
    picker.appendChild(recent);

    container.appendChild(picker);

    // Initialize
    setTimeout(() => {
      if (
        typeof (
          window as unknown as {
            Aural?: { initColorPicker?: (id: string, config: unknown) => void };
          }
        ).Aural !== 'undefined' &&
        (window as unknown as { Aural: { initColorPicker: (id: string, config: unknown) => void } })
          .Aural.initColorPicker
      ) {
        (
          window as unknown as { Aural: { initColorPicker: (id: string, config: unknown) => void } }
        ).Aural.initColorPicker('color-picker-recent', {
          color: '#8B5CF6',
          presets: presetColors,
          recentColors: true,
          onChange: (color: string) => console.log('Recent picker color changed:', color),
        });
      }
    }, 0);

    return container;
  },
};

export const PopoverTrigger: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; position: relative;';

    const trigger = document.createElement('button');
    trigger.className = 'aural-color-picker-trigger';
    trigger.id = 'color-trigger';

    const triggerSwatch = document.createElement('div');
    triggerSwatch.className = 'aural-color-picker-trigger__swatch';
    triggerSwatch.style.setProperty('--color-value', '#EC4899');

    const triggerLabel = document.createElement('span');
    triggerLabel.className = 'aural-color-picker-trigger__label';
    triggerLabel.textContent = 'Choose Color';

    trigger.appendChild(triggerSwatch);
    trigger.appendChild(triggerLabel);

    const popover = document.createElement('div');
    popover.className = 'aural-color-picker-popover';
    popover.id = 'color-popover';

    const picker = createColorPicker({
      value: '#EC4899',
      format: 'hex',
      showAlpha: false,
      showInput: true,
      showPresets: false,
      compact: false,
      disabled: false,
    });

    popover.appendChild(picker.firstChild as HTMLElement);

    container.appendChild(trigger);
    container.appendChild(popover);

    // Add click handler
    setTimeout(() => {
      trigger.addEventListener('click', () => {
        popover.classList.toggle('aural-color-picker-popover--open');
      });

      document.addEventListener('click', (e) => {
        if (!trigger.contains(e.target as Node) && !popover.contains(e.target as Node)) {
          popover.classList.remove('aural-color-picker-popover--open');
        }
      });
    }, 0);

    return container;
  },
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      return createColorPicker(args);
    });
  },
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false,
  },
};
