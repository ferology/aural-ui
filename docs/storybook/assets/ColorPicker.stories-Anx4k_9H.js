import{c as Re}from"./createThemeGrid-DWAncU4Q.js";const Le={title:"Components/Forms/Color Picker",tags:["autodocs"],parameters:{docs:{description:{component:`
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
<\/script>
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
<\/script>
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
<\/script>

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
        `.trim()}}},argTypes:{value:{control:"color",description:'Current color value in any valid format (HEX like "#F00054", RGB like "rgb(240, 0, 84)", or HSL like "hsl(340, 100%, 47%)")'},format:{control:"select",options:["hex","rgb","hsl"],description:"Color format for display and input: hex (6-char like #F00054), rgb (0-255 per channel), hsl (hue 0-360, saturation/lightness 0-100%)"},showAlpha:{control:"boolean",description:"Show alpha/opacity slider control (0-100%) for transparency support, adds fourth channel to RGB/HSL formats"},showInput:{control:"boolean",description:"Show manual text input fields for entering precise color values by typing (HEX code or RGB/HSL channels)"},showPresets:{control:"boolean",description:"Show preset color swatch buttons for quick selection of commonly used brand or theme colors"},compact:{control:"boolean",description:"Use compact variant (hides format toggles and input fields, shows only canvas/sliders and presets for space-constrained layouts)"},disabled:{control:"boolean",description:"Disabled state prevents all interaction and applies muted styling with 50% opacity and disabled cursor"}}};let M=0;function h(e){const t=document.createElement("div");t.style.cssText="padding: 2rem; max-width: 320px;";const a=document.createElement("div");a.className="aural-color-picker",e.compact&&a.classList.add("aural-color-picker--compact"),e.disabled&&a.classList.add("aural-color-picker--disabled");const u=`color-picker-${Math.random().toString(36).substr(2,9)}`;a.id=u;const s=document.createElement("div");s.className="aural-color-picker__preview";const c=document.createElement("div");c.className="aural-color-picker__swatch";const d=document.createElement("div");d.className="aural-color-picker__swatch-color",c.appendChild(d);const v=document.createElement("input");v.type="text",v.className="aural-color-picker__value",v.value=e.value||"#F00054",v.readOnly=!0,v.setAttribute("aria-label","Selected color value"),s.appendChild(c),e.showInput!==!1&&s.appendChild(v),a.appendChild(s);const g=document.createElement("div");g.className="aural-color-picker__canvas";const w=document.createElement("div");w.className="aural-color-picker__saturation";const k=document.createElement("div");k.className="aural-color-picker__lightness";const x=document.createElement("div");x.className="aural-color-picker__cursor",g.appendChild(w),g.appendChild(k),g.appendChild(x),a.appendChild(g);const b=document.createElement("div");b.className="aural-color-picker__hue";const _=document.createElement("div");if(_.className="aural-color-picker__hue-handle",b.appendChild(_),a.appendChild(b),e.showAlpha){const p=document.createElement("div");p.className="aural-color-picker__alpha";const f=document.createElement("div");f.className="aural-color-picker__alpha-gradient";const i=document.createElement("div");i.className="aural-color-picker__alpha-handle",p.appendChild(f),p.appendChild(i),a.appendChild(p)}if(!e.compact){const p=document.createElement("div");p.className="aural-color-picker__modes",["hex","rgb","hsl"].forEach(m=>{const o=document.createElement("button");o.type="button",o.className="aural-color-picker__mode",e.format===m&&o.classList.add("aural-color-picker__mode--active"),o.setAttribute("data-mode",m),o.textContent=m.toUpperCase(),o.disabled=e.disabled||!1,p.appendChild(o)}),a.appendChild(p);const i=document.createElement("div");if(i.className="aural-color-picker__inputs",i.setAttribute("data-mode",e.format),e.format==="hex"){const m=document.createElement("div");m.className="aural-color-picker__input-group";const o=document.createElement("label");o.className="aural-color-picker__input-label",o.textContent="Hex";const l=document.createElement("input");l.id=`color-picker-input-${++M}`,o.htmlFor=l.id,l.type="text",l.className="aural-color-picker__input",l.value=(e.value||"#F00054").replace("#",""),l.maxLength=6,l.disabled=e.disabled||!1,m.appendChild(o),m.appendChild(l),i.appendChild(m)}else e.format==="rgb"?(i.classList.add("aural-color-picker__inputs--rgba"),(e.showAlpha?[{name:"R",value:"240",max:"255"},{name:"G",value:"0",max:"255"},{name:"B",value:"84",max:"255"},{name:"A",value:"100",max:"100"}]:[{name:"R",value:"240",max:"255"},{name:"G",value:"0",max:"255"},{name:"B",value:"84",max:"255"}]).forEach(o=>{const l=document.createElement("div");l.className="aural-color-picker__input-group";const n=document.createElement("label");n.className="aural-color-picker__input-label",n.textContent=o.name;const r=document.createElement("input");r.id=`color-picker-input-${++M}`,n.htmlFor=r.id,r.type="number",r.className="aural-color-picker__input",r.value=o.value,r.min="0",r.max=o.max,r.disabled=e.disabled||!1,l.appendChild(n),l.appendChild(r),i.appendChild(l)})):e.format==="hsl"&&(i.classList.add("aural-color-picker__inputs--hsla"),(e.showAlpha?[{name:"H",value:"340",max:"360"},{name:"S",value:"100",max:"100"},{name:"L",value:"47",max:"100"},{name:"A",value:"100",max:"100"}]:[{name:"H",value:"340",max:"360"},{name:"S",value:"100",max:"100"},{name:"L",value:"47",max:"100"}]).forEach(o=>{const l=document.createElement("div");l.className="aural-color-picker__input-group";const n=document.createElement("label");n.className="aural-color-picker__input-label",n.textContent=o.name;const r=document.createElement("input");r.id=`color-picker-input-${++M}`,n.htmlFor=r.id,r.type="number",r.className="aural-color-picker__input",r.value=o.value,r.min="0",r.max=o.max,r.disabled=e.disabled||!1,l.appendChild(n),l.appendChild(r),i.appendChild(l)}));a.appendChild(i)}if(e.showPresets!==!1&&!e.compact){const p=document.createElement("div");p.className="aural-color-picker__presets";const f=document.createElement("div");f.className="aural-color-picker__preset-label",f.textContent="Presets";const i=document.createElement("div");i.className="aural-color-picker__preset-grid",["#f00054","#22c55e","#3b82f6","#f59e0b","#ef4444","#8b5cf6","#ec4899","#14b8a6"].forEach(o=>{const l=document.createElement("button");l.type="button",l.className="aural-color-picker__preset",l.disabled=e.disabled||!1,l.setAttribute("aria-label",`Select preset color: ${o}`),e.value===o&&l.classList.add("aural-color-picker__preset--active");const n=document.createElement("div");n.className="aural-color-picker__preset-color",n.style.background=o,l.appendChild(n),i.appendChild(l)}),p.appendChild(f),p.appendChild(i),a.appendChild(p)}return t.appendChild(a),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initColorPicker&&window.Aural.initColorPicker(u,{color:e.value||"#F00054",alpha:e.showAlpha||!1,mode:e.format||"hex",presets:e.showPresets!==!1?["#f00054","#22c55e","#3b82f6","#f59e0b","#ef4444","#8b5cf6","#ec4899","#14b8a6"]:void 0,compact:e.compact||!1,onChange:p=>console.log("Color changed:",p)})},0),t}const y={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1}},E={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!0,showInput:!0,showPresets:!0,compact:!1,disabled:!1}},P={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},S={render:e=>h(e),args:{value:"#3B82F6",format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},F={render:e=>h(e),args:{value:"#22C55E",format:"rgb",showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},A={render:e=>h(e),args:{value:"#F59E0B",format:"hsl",showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},N={render:e=>h(e),args:{value:"#8B5CF6",format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!0,disabled:!1}},R={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1}},H={render:e=>h(e),args:{value:"#EC4899",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!0}},L={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const t=document.createElement("h3");t.textContent="Theme Customizer",t.style.cssText="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600;";const a=document.createElement("div");return a.style.cssText="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;",[{label:"Primary Color",value:"#F00054"},{label:"Background",value:"#1A1A1A"},{label:"Text Color",value:"#FFFFFF"}].forEach(s=>{const c=document.createElement("div"),d=document.createElement("label");d.style.cssText="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;",d.textContent=s.label;const v=h({value:s.value,format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!0,disabled:!1});c.appendChild(d),c.appendChild(v),a.appendChild(c)}),e.appendChild(t),e.appendChild(a),e}},T={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 400px;";const t=document.createElement("h3");t.textContent="Brand Color Palette",t.style.cssText="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;";const a=document.createElement("p");a.textContent="Select from approved brand colors or create custom colors for your design.",a.style.cssText="margin: 0 0 1.5rem 0; color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.5;";const u=h({value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1});return e.appendChild(t),e.appendChild(a),e.appendChild(u),e}},B={render:()=>{const e=document.createElement("div");return e.style.cssText="padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 1000px;",[{format:"hex",label:"HEX Format",value:"#F00054"},{format:"rgb",label:"RGB Format",value:"#22C55E"},{format:"hsl",label:"HSL Format",value:"#3B82F6"}].forEach(({format:a,label:u,value:s})=>{const c=document.createElement("div"),d=document.createElement("h4");d.textContent=u,d.style.cssText="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;";const v=h({value:s,format:a,showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1});c.appendChild(d),c.appendChild(v),e.appendChild(c)}),e}},I={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 320px;";const t=document.createElement("div");t.className="aural-color-picker",t.id="color-picker-recent";const a=document.createElement("div");a.className="aural-color-picker__preview";const u=document.createElement("div");u.className="aural-color-picker__swatch";const s=document.createElement("div");s.className="aural-color-picker__swatch-color",u.appendChild(s);const c=document.createElement("input");c.type="text",c.className="aural-color-picker__value",c.value="#8B5CF6",c.readOnly=!0,c.setAttribute("aria-label","Selected color value"),a.appendChild(u),a.appendChild(c),t.appendChild(a);const d=document.createElement("div");d.className="aural-color-picker__canvas";const v=document.createElement("div");v.className="aural-color-picker__saturation";const g=document.createElement("div");g.className="aural-color-picker__lightness";const w=document.createElement("div");w.className="aural-color-picker__cursor",d.appendChild(v),d.appendChild(g),d.appendChild(w),t.appendChild(d);const k=document.createElement("div");k.className="aural-color-picker__hue";const x=document.createElement("div");x.className="aural-color-picker__hue-handle",k.appendChild(x),t.appendChild(k);const b=document.createElement("div");b.className="aural-color-picker__presets";const _=document.createElement("div");_.className="aural-color-picker__preset-label",_.textContent="Presets";const p=document.createElement("div");p.className="aural-color-picker__preset-grid";const f=["#f00054","#22c55e","#3b82f6","#f59e0b"];f.forEach(n=>{const r=document.createElement("button");r.className="aural-color-picker__preset",r.type="button",r.setAttribute("aria-label",`Select preset color: ${n}`);const C=document.createElement("div");C.className="aural-color-picker__preset-color",C.style.background=n,r.appendChild(C),p.appendChild(r)}),b.appendChild(_),b.appendChild(p),t.appendChild(b);const i=document.createElement("div");i.className="aural-color-picker__recent";const m=document.createElement("div");m.className="aural-color-picker__recent-label",m.textContent="Recent";const o=document.createElement("div");return o.className="aural-color-picker__recent-grid",["#8b5cf6","#ec4899","#14b8a6","#ef4444"].forEach(n=>{const r=document.createElement("button");r.className="aural-color-picker__preset",r.type="button",r.setAttribute("aria-label",`Select recent color: ${n}`);const C=document.createElement("div");C.className="aural-color-picker__preset-color",C.style.background=n,r.appendChild(C),o.appendChild(r)}),i.appendChild(m),i.appendChild(o),t.appendChild(i),e.appendChild(t),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initColorPicker&&window.Aural.initColorPicker("color-picker-recent",{color:"#8B5CF6",presets:f,recentColors:!0,onChange:n=>console.log("Recent picker color changed:",n)})},0),e}},$={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; position: relative;";const t=document.createElement("button");t.className="aural-color-picker-trigger",t.id="color-trigger";const a=document.createElement("div");a.className="aural-color-picker-trigger__swatch",a.style.setProperty("--color-value","#EC4899");const u=document.createElement("span");u.className="aural-color-picker-trigger__label",u.textContent="Choose Color",t.appendChild(a),t.appendChild(u);const s=document.createElement("div");s.className="aural-color-picker-popover",s.id="color-popover";const c=h({value:"#EC4899",format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!1,disabled:!1});return s.appendChild(c.firstChild),e.appendChild(t),e.appendChild(s),setTimeout(()=>{t.addEventListener("click",()=>{s.classList.toggle("aural-color-picker-popover--open")}),document.addEventListener("click",d=>{!t.contains(d.target)&&!s.contains(d.target)&&s.classList.remove("aural-color-picker-popover--open")})},0),e}},G={render:e=>Re(()=>h(e)),args:{value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1}};var X,U,z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
}`,...(z=(U=y.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var D,V,W;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
}`,...(W=(V=E.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var O,q,j;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(j=(q=P.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var Y,K,J;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#3B82F6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(J=(K=S.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,Z,ee;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#22C55E',
    format: 'rgb',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(ee=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F59E0B',
    format: 'hsl',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(te=(re=A.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,le,ne;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#8B5CF6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: true,
    disabled: false
  }
}`,...(ne=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,ce,ie;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
}`,...(ie=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,ue;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#EC4899',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: true
  }
}`,...(ue=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,ve;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const title = document.createElement('h3');
    title.textContent = 'Theme Customizer';
    title.style.cssText = 'margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600;';
    const grid = document.createElement('div');
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;';
    const colors = [{
      label: 'Primary Color',
      value: '#F00054'
    }, {
      label: 'Background',
      value: '#1A1A1A'
    }, {
      label: 'Text Color',
      value: '#FFFFFF'
    }];
    colors.forEach(color => {
      const group = document.createElement('div');
      const label = document.createElement('label');
      label.style.cssText = 'display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;';
      label.textContent = color.label;
      const picker = createColorPicker({
        value: color.value,
        format: 'hex',
        showAlpha: false,
        showInput: true,
        showPresets: false,
        compact: true,
        disabled: false
      });
      group.appendChild(label);
      group.appendChild(picker);
      grid.appendChild(group);
    });
    container.appendChild(title);
    container.appendChild(grid);
    return container;
  }
}`,...(ve=(he=L.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,ge,be;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 400px;';
    const title = document.createElement('h3');
    title.textContent = 'Brand Color Palette';
    title.style.cssText = 'margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;';
    const description = document.createElement('p');
    description.textContent = 'Select from approved brand colors or create custom colors for your design.';
    description.style.cssText = 'margin: 0 0 1.5rem 0; color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.5;';
    const picker = createColorPicker({
      value: '#F00054',
      format: 'hex',
      showAlpha: false,
      showInput: true,
      showPresets: true,
      compact: false,
      disabled: false
    });
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(picker);
    return container;
  }
}`,...(be=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Ce,ke,_e;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 1000px;';
    const formats = [{
      format: 'hex',
      label: 'HEX Format',
      value: '#F00054'
    }, {
      format: 'rgb',
      label: 'RGB Format',
      value: '#22C55E'
    }, {
      format: 'hsl',
      label: 'HSL Format',
      value: '#3B82F6'
    }];
    formats.forEach(({
      format,
      label,
      value
    }) => {
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
        disabled: false
      });
      section.appendChild(heading);
      section.appendChild(picker);
      container.appendChild(section);
    });
    return container;
  }
}`,...(_e=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:_e.source}}};var we,xe,ye;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    valueInput.setAttribute('aria-label', 'Selected color value');
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
    presetColors.forEach(color => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      button.type = 'button';
      button.setAttribute('aria-label', \`Select preset color: \${color}\`);
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
    recentColors.forEach(color => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      button.type = 'button';
      button.setAttribute('aria-label', \`Select recent color: \${color}\`);
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
      if (typeof (window as unknown as {
        Aural?: {
          initColorPicker?: (id: string, config: unknown) => void;
        };
      }).Aural !== 'undefined' && (window as unknown as {
        Aural: {
          initColorPicker: (id: string, config: unknown) => void;
        };
      }).Aural.initColorPicker) {
        (window as unknown as {
          Aural: {
            initColorPicker: (id: string, config: unknown) => void;
          };
        }).Aural.initColorPicker('color-picker-recent', {
          color: '#8B5CF6',
          presets: presetColors,
          recentColors: true,
          onChange: (color: string) => console.log('Recent picker color changed:', color)
        });
      }
    }, 0);
    return container;
  }
}`,...(ye=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Ee,Pe,Se;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
      disabled: false
    });
    popover.appendChild(picker.firstChild as HTMLElement);
    container.appendChild(trigger);
    container.appendChild(popover);

    // Add click handler
    setTimeout(() => {
      trigger.addEventListener('click', () => {
        popover.classList.toggle('aural-color-picker-popover--open');
      });
      document.addEventListener('click', e => {
        if (!trigger.contains(e.target as Node) && !popover.contains(e.target as Node)) {
          popover.classList.remove('aural-color-picker-popover--open');
        }
      });
    }, 0);
    return container;
  }
}`,...(Se=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var Fe,Ae,Ne;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => {
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
    disabled: false
  }
}`,...(Ne=(Ae=G.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};const Te=["Default","FullFeatured","WithAlpha","HexFormat","RgbFormat","HslFormat","Compact","WithPresets","Disabled","ThemePicker","BrandColors","AllFormats","WithRecentColors","PopoverTrigger","ThemeComparison"];export{B as AllFormats,T as BrandColors,N as Compact,y as Default,H as Disabled,E as FullFeatured,S as HexFormat,A as HslFormat,$ as PopoverTrigger,F as RgbFormat,G as ThemeComparison,L as ThemePicker,P as WithAlpha,R as WithPresets,I as WithRecentColors,Te as __namedExportsOrder,Le as default};
