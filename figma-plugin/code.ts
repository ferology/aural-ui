/**
 * Aural UI Design System - Figma Plugin
 *
 * A comprehensive Figma plugin that generates all 61+ components of the
 * Aural UI design system. Creates color styles, typography, spacing,
 * effects, and complete component frames.
 *
 * @module AuralFigmaPlugin
 * @version 1.0.0
 *
 * Features:
 * - Color palette generation with semantic colors
 * - Typography scale with multiple weights
 * - Spacing scale visualization
 * - Shadow/effect styles
 * - Form components (buttons, inputs, checkboxes, etc.)
 * - Data display components (cards, tables, badges, etc.)
 * - Navigation components (tabs, breadcrumbs, pagination, etc.)
 * - Overlay components (modals, toasts, drawers, etc.)
 *
 * Usage:
 * Run the plugin from Figma's plugin menu and select components to generate.
 */

// ========================================
// DESIGN TOKENS
// Core values for colors, spacing, typography, and radii
// ========================================

const tokens = {
  colors: {
    neutral: {
      "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4",
      "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040",
      "800": "#262626", "900": "#171717", "950": "#0a0a0a"
    },
    primary: {
      "50": "#edfdf7", "100": "#d3fae8", "200": "#aaf4d5", "300": "#71e9bb",
      "400": "#5ebd8f", "500": "#4da77a", "600": "#3d8a64", "700": "#326d51",
      "800": "#2a5842", "900": "#244837", "950": "#11281f"
    },
    secondary: {
      "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9",
      "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490",
      "800": "#155e75", "900": "#164e63", "950": "#083344"
    },
    success: {
      "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac",
      "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d",
      "800": "#166534", "900": "#14532d", "950": "#052e16"
    },
    warning: {
      "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d",
      "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309",
      "800": "#92400e", "900": "#78350f", "950": "#451a03"
    },
    error: {
      "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5",
      "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c",
      "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a"
    },
    info: {
      "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd",
      "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8",
      "800": "#1e40af", "900": "#1e3a8a", "950": "#172554"
    },
    purple: {
      "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe",
      "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce",
      "800": "#6b21a8", "900": "#581c87", "950": "#3b0764"
    },
    pink: {
      "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4",
      "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d",
      "800": "#9d174d", "900": "#831843", "950": "#500724"
    }
  },
  spacing: {
    "0": 0, "1": 4, "2": 8, "3": 12, "4": 16, "5": 20, "6": 24, "7": 28,
    "8": 32, "10": 40, "12": 48, "14": 56, "16": 64, "20": 80, "24": 96,
    "32": 128, "40": 160, "48": 192, "64": 256
  },
  typography: {
    fontSizes: {
      "xs": 12, "sm": 14, "base": 16, "lg": 18, "xl": 20,
      "2xl": 24, "3xl": 30, "4xl": 36, "5xl": 48, "6xl": 60
    },
    fontWeights: {
      "normal": 400, "medium": 500, "semibold": 600, "bold": 700
    }
  },
  radii: {
    "none": 0, "sm": 4, "md": 6, "lg": 8, "xl": 12, "2xl": 16, "3xl": 24, "full": 9999
  }
};

// Helpers
function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}

async function loadFonts(): Promise<void> {
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
}

function createComponentFrame(name: string, bgColor: string = '#ffffff'): FrameNode {
  const frame = figma.createFrame();
  frame.name = name;
  frame.layoutMode = 'VERTICAL';
  frame.paddingTop = 48;
  frame.paddingBottom = 48;
  frame.paddingLeft = 48;
  frame.paddingRight = 48;
  frame.itemSpacing = 24;
  frame.fills = [{ type: 'SOLID', color: hexToRgb(bgColor) }];
  return frame;
}

function addTitle(frame: FrameNode, text: string): void {
  const title = figma.createText();
  title.characters = text;
  title.fontSize = 32;
  title.fontName = { family: "Inter", style: "Bold" };
  frame.appendChild(title);
}

function addSubtitle(frame: FrameNode, text: string): void {
  const subtitle = figma.createText();
  subtitle.characters = text;
  subtitle.fontSize = 14;
  subtitle.fontName = { family: "Inter", style: "Regular" };
  subtitle.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  frame.appendChild(subtitle);
}

function finalizeFrame(frame: FrameNode): void {
  frame.primaryAxisSizingMode = 'AUTO';
  frame.counterAxisSizingMode = 'AUTO';
  frame.x = figma.viewport.center.x - frame.width / 2;
  frame.y = figma.viewport.center.y - frame.height / 2;
  figma.currentPage.selection = [frame];
  figma.viewport.scrollAndZoomIntoView([frame]);
}

// Color & Typography generators
async function createColorStyle(name: string, hex: string): Promise<PaintStyle> {
  const style = figma.createPaintStyle();
  style.name = name;
  style.paints = [{ type: 'SOLID', color: hexToRgb(hex) }];
  return style;
}

async function generateColors(): Promise<void> {
  figma.notify('Generating color styles...');
  let count = 0;
  for (const [colorName, shades] of Object.entries(tokens.colors)) {
    for (const [shade, hex] of Object.entries(shades as Record<string, string>)) {
      await createColorStyle(`Aural/${colorName}/${shade}`, hex);
      count++;
    }
  }
  figma.notify(`Created ${count} color styles!`);
}

async function generateColorSwatches(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Colors');
  addTitle(frame, 'Aural UI Color System');

  for (const [colorName, shades] of Object.entries(tokens.colors)) {
    const paletteFrame = figma.createFrame();
    paletteFrame.name = colorName;
    paletteFrame.layoutMode = 'VERTICAL';
    paletteFrame.itemSpacing = 8;
    paletteFrame.fills = [];

    const label = figma.createText();
    label.characters = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    label.fontSize = 18;
    label.fontName = { family: "Inter", style: "Semi Bold" };
    paletteFrame.appendChild(label);

    const swatchesRow = figma.createFrame();
    swatchesRow.name = `${colorName}-swatches`;
    swatchesRow.layoutMode = 'HORIZONTAL';
    swatchesRow.itemSpacing = 4;
    swatchesRow.fills = [];

    for (const [shade, hex] of Object.entries(shades as Record<string, string>)) {
      const swatch = figma.createFrame();
      swatch.name = `${colorName}-${shade}`;
      swatch.resize(64, 64);
      swatch.cornerRadius = 8;
      swatch.fills = [{ type: 'SOLID', color: hexToRgb(hex) }];

      const shadeLabel = figma.createText();
      shadeLabel.characters = shade;
      shadeLabel.fontSize = 10;
      shadeLabel.fontName = { family: "Inter", style: "Regular" };
      shadeLabel.fills = [{ type: 'SOLID', color: parseInt(shade) >= 500 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 } }];
      shadeLabel.x = 8;
      shadeLabel.y = 8;
      swatch.appendChild(shadeLabel);
      swatchesRow.appendChild(swatch);
    }

    paletteFrame.appendChild(swatchesRow);
    frame.appendChild(paletteFrame);
  }

  finalizeFrame(frame);
  figma.notify('Color swatches generated!');
}

async function generateTypography(): Promise<void> {
  figma.notify('Generating typography styles...');
  let count = 0;
  for (const [sizeName, size] of Object.entries(tokens.typography.fontSizes)) {
    for (const [weightName, weight] of Object.entries(tokens.typography.fontWeights)) {
      const style = figma.createTextStyle();
      style.name = `Aural/text-${sizeName}/${weightName}`;
      style.fontSize = size;
      await figma.loadFontAsync({ family: "Inter", style: weight >= 600 ? "Semi Bold" : "Regular" });
      style.fontName = {
        family: "Inter",
        style: weight >= 700 ? "Bold" : weight >= 600 ? "Semi Bold" : weight >= 500 ? "Medium" : "Regular"
      };
      count++;
    }
  }
  figma.notify(`Created ${count} text styles!`);
}

async function generateTypographyShowcase(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Typography');
  addTitle(frame, 'Aural UI Typography');

  const sizes = Object.entries(tokens.typography.fontSizes).reverse();
  for (const [sizeName, size] of sizes) {
    const row = figma.createFrame();
    row.layoutMode = 'HORIZONTAL';
    row.itemSpacing = 24;
    row.fills = [];
    row.counterAxisAlignItems = 'CENTER';

    const label = figma.createText();
    label.characters = `text-${sizeName} (${size}px)`;
    label.fontSize = 12;
    label.fontName = { family: "Inter", style: "Regular" };
    label.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    label.resize(120, label.height);
    row.appendChild(label);

    const sample = figma.createText();
    sample.characters = 'The quick brown fox jumps over the lazy dog';
    sample.fontSize = size;
    sample.fontName = { family: "Inter", style: "Regular" };
    row.appendChild(sample);
    frame.appendChild(row);
  }

  finalizeFrame(frame);
  figma.notify('Typography showcase generated!');
}

async function generateSpacing(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Spacing');
  addTitle(frame, 'Aural UI Spacing Scale');

  for (const [name, value] of Object.entries(tokens.spacing)) {
    if (value === 0) continue;
    const row = figma.createFrame();
    row.layoutMode = 'HORIZONTAL';
    row.itemSpacing = 16;
    row.fills = [];
    row.counterAxisAlignItems = 'CENTER';

    const label = figma.createText();
    label.characters = `space-${name} (${value}px)`;
    label.fontSize = 12;
    label.fontName = { family: "Inter", style: "Regular" };
    label.resize(120, label.height);
    row.appendChild(label);

    const bar = figma.createRectangle();
    bar.resize(Math.min(value, 400), 24);
    bar.cornerRadius = 4;
    bar.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['400']) }];
    row.appendChild(bar);
    frame.appendChild(row);
  }

  finalizeFrame(frame);
  figma.notify('Spacing scale generated!');
}

async function generateEffects(): Promise<void> {
  figma.notify('Generating effect styles...');
  const shadows = [
    { name: 'shadow-xs', y: 1, blur: 2, opacity: 0.05 },
    { name: 'shadow-sm', y: 1, blur: 3, opacity: 0.1 },
    { name: 'shadow-md', y: 4, blur: 6, opacity: 0.1 },
    { name: 'shadow-lg', y: 10, blur: 15, opacity: 0.1 },
    { name: 'shadow-xl', y: 20, blur: 25, opacity: 0.1 },
    { name: 'shadow-2xl', y: 25, blur: 50, opacity: 0.25 }
  ];

  for (const s of shadows) {
    const style = figma.createEffectStyle();
    style.name = `Aural/${s.name}`;
    style.effects = [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: s.opacity },
      offset: { x: 0, y: s.y },
      radius: s.blur,
      spread: 0,
      visible: true,
      blendMode: 'NORMAL'
    }];
  }

  figma.notify('Created 6 effect styles!');
}

// ============================================
// FORM COMPONENTS
// Interactive form elements and inputs
// ============================================

/**
 * Generate button components with variants and sizes
 * Creates Primary, Secondary, Ghost, Success, Warning, and Error variants
 * in small, medium, and large sizes.
 */
async function generateButtons(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Buttons');
  addTitle(frame, 'Buttons');
  addSubtitle(frame, 'Primary actions and interactions');

  const variants = [
    { name: 'Primary', bg: tokens.colors.primary['500'], text: '#ffffff' },
    { name: 'Secondary', bg: '#f3f4f6', text: '#374151' },
    { name: 'Ghost', bg: 'transparent', text: tokens.colors.primary['500'], border: tokens.colors.primary['500'] },
    { name: 'Success', bg: tokens.colors.success['500'], text: '#ffffff' },
    { name: 'Warning', bg: tokens.colors.warning['500'], text: '#ffffff' },
    { name: 'Error', bg: tokens.colors.error['500'], text: '#ffffff' }
  ];

  const sizes = [
    { name: 'sm', height: 32, paddingX: 12, fontSize: 14 },
    { name: 'md', height: 40, paddingX: 16, fontSize: 14 },
    { name: 'lg', height: 48, paddingX: 24, fontSize: 16 }
  ];

  for (const variant of variants) {
    const section = figma.createFrame();
    section.layoutMode = 'VERTICAL';
    section.itemSpacing = 12;
    section.fills = [];

    const label = figma.createText();
    label.characters = variant.name;
    label.fontSize = 16;
    label.fontName = { family: "Inter", style: "Semi Bold" };
    section.appendChild(label);

    const row = figma.createFrame();
    row.layoutMode = 'HORIZONTAL';
    row.itemSpacing = 16;
    row.fills = [];
    row.counterAxisAlignItems = 'CENTER';

    for (const size of sizes) {
      const btn = figma.createFrame();
      btn.name = `btn-${variant.name.toLowerCase()}-${size.name}`;
      btn.layoutMode = 'HORIZONTAL';
      btn.primaryAxisAlignItems = 'CENTER';
      btn.counterAxisAlignItems = 'CENTER';
      btn.paddingLeft = size.paddingX;
      btn.paddingRight = size.paddingX;
      btn.resize(btn.width, size.height);
      btn.cornerRadius = 6;

      if (variant.bg === 'transparent') {
        btn.fills = [];
        btn.strokes = [{ type: 'SOLID', color: hexToRgb(variant.border!) }];
        btn.strokeWeight = 1;
      } else {
        btn.fills = [{ type: 'SOLID', color: hexToRgb(variant.bg) }];
      }

      const text = figma.createText();
      text.characters = `Button ${size.name.toUpperCase()}`;
      text.fontSize = size.fontSize;
      text.fontName = { family: "Inter", style: "Medium" };
      text.fills = [{ type: 'SOLID', color: hexToRgb(variant.text) }];
      btn.appendChild(text);
      btn.primaryAxisSizingMode = 'AUTO';
      row.appendChild(btn);
    }

    section.appendChild(row);
    frame.appendChild(section);
  }

  finalizeFrame(frame);
  figma.notify('Buttons generated!');
}

async function generateInputs(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Inputs');
  addTitle(frame, 'Text Inputs');
  addSubtitle(frame, 'Form input fields with various states');

  const states = [
    { name: 'Default', borderColor: '#d1d5db' },
    { name: 'Focus', borderColor: tokens.colors.primary['500'] },
    { name: 'Error', borderColor: tokens.colors.error['500'] },
    { name: 'Disabled', borderColor: '#e5e7eb', bg: '#f9fafb' }
  ];

  for (const state of states) {
    const section = figma.createFrame();
    section.layoutMode = 'VERTICAL';
    section.itemSpacing = 8;
    section.fills = [];

    const label = figma.createText();
    label.characters = state.name;
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Medium" };
    section.appendChild(label);

    const input = figma.createFrame();
    input.layoutMode = 'HORIZONTAL';
    input.counterAxisAlignItems = 'CENTER';
    input.paddingLeft = 12;
    input.paddingRight = 12;
    input.resize(280, 40);
    input.cornerRadius = 6;
    input.fills = [{ type: 'SOLID', color: hexToRgb(state.bg || '#ffffff') }];
    input.strokes = [{ type: 'SOLID', color: hexToRgb(state.borderColor) }];
    input.strokeWeight = state.name === 'Focus' ? 2 : 1;

    const placeholder = figma.createText();
    placeholder.characters = state.name === 'Disabled' ? 'Disabled input' : 'Enter text...';
    placeholder.fontSize = 14;
    placeholder.fontName = { family: "Inter", style: "Regular" };
    placeholder.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    input.appendChild(placeholder);
    section.appendChild(input);
    frame.appendChild(section);
  }

  finalizeFrame(frame);
  figma.notify('Inputs generated!');
}

async function generateCheckboxes(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Checkboxes');
  addTitle(frame, 'Checkboxes');
  addSubtitle(frame, 'Selection controls for multiple options');

  const states = [
    { name: 'Unchecked', checked: false },
    { name: 'Checked', checked: true },
    { name: 'Indeterminate', indeterminate: true },
    { name: 'Disabled', checked: false, disabled: true }
  ];

  for (const state of states) {
    const row = figma.createFrame();
    row.layoutMode = 'HORIZONTAL';
    row.itemSpacing = 12;
    row.fills = [];
    row.counterAxisAlignItems = 'CENTER';

    const checkbox = figma.createFrame();
    checkbox.resize(20, 20);
    checkbox.cornerRadius = 4;

    if (state.checked || state.indeterminate) {
      checkbox.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];

      if (state.checked) {
        const check = figma.createText();
        check.characters = '✓';
        check.fontSize = 14;
        check.fontName = { family: "Inter", style: "Bold" };
        check.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        check.x = 3;
        check.y = 1;
        checkbox.appendChild(check);
      } else {
        const line = figma.createRectangle();
        line.resize(10, 2);
        line.x = 5;
        line.y = 9;
        line.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        checkbox.appendChild(line);
      }
    } else {
      checkbox.fills = [{ type: 'SOLID', color: hexToRgb(state.disabled ? '#f3f4f6' : '#ffffff') }];
      checkbox.strokes = [{ type: 'SOLID', color: hexToRgb(state.disabled ? '#d1d5db' : '#9ca3af') }];
      checkbox.strokeWeight = 2;
    }

    row.appendChild(checkbox);

    const label = figma.createText();
    label.characters = state.name;
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Regular" };
    label.fills = [{ type: 'SOLID', color: hexToRgb(state.disabled ? '#9ca3af' : '#374151') }];
    row.appendChild(label);
    frame.appendChild(row);
  }

  finalizeFrame(frame);
  figma.notify('Checkboxes generated!');
}

async function generateRadioButtons(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Radio Buttons');
  addTitle(frame, 'Radio Buttons');
  addSubtitle(frame, 'Single selection from multiple options');

  const options = ['Option 1 (Selected)', 'Option 2', 'Option 3'];

  for (let i = 0; i < options.length; i++) {
    const row = figma.createFrame();
    row.layoutMode = 'HORIZONTAL';
    row.itemSpacing = 12;
    row.fills = [];
    row.counterAxisAlignItems = 'CENTER';

    const radio = figma.createEllipse();
    radio.resize(20, 20);
    radio.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['500'] : '#ffffff') }];
    radio.strokes = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['500'] : '#9ca3af') }];
    radio.strokeWeight = 2;

    if (i === 0) {
      const inner = figma.createEllipse();
      inner.resize(8, 8);
      inner.x = 6;
      inner.y = 6;
      inner.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

      const container = figma.createFrame();
      container.resize(20, 20);
      container.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
      container.cornerRadius = 10;
      container.appendChild(inner);
      row.appendChild(container);
    } else {
      row.appendChild(radio);
    }

    const label = figma.createText();
    label.characters = options[i];
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Regular" };
    row.appendChild(label);
    frame.appendChild(row);
  }

  finalizeFrame(frame);
  figma.notify('Radio buttons generated!');
}

async function generateSwitches(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Switches');
  addTitle(frame, 'Toggle Switches');
  addSubtitle(frame, 'On/off controls for settings');

  const states = [
    { name: 'Off', on: false },
    { name: 'On', on: true },
    { name: 'Disabled Off', on: false, disabled: true },
    { name: 'Disabled On', on: true, disabled: true }
  ];

  for (const state of states) {
    const row = figma.createFrame();
    row.layoutMode = 'HORIZONTAL';
    row.itemSpacing = 12;
    row.fills = [];
    row.counterAxisAlignItems = 'CENTER';

    const toggle = figma.createFrame();
    toggle.resize(44, 24);
    toggle.cornerRadius = 12;
    toggle.fills = [{ type: 'SOLID', color: hexToRgb(
      state.disabled ? '#e5e7eb' : (state.on ? tokens.colors.primary['500'] : '#d1d5db')
    )}];

    const knob = figma.createEllipse();
    knob.resize(20, 20);
    knob.x = state.on ? 22 : 2;
    knob.y = 2;
    knob.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    knob.effects = [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.1 },
      offset: { x: 0, y: 1 },
      radius: 2,
      spread: 0,
      visible: true,
      blendMode: 'NORMAL'
    }];
    toggle.appendChild(knob);
    row.appendChild(toggle);

    const label = figma.createText();
    label.characters = state.name;
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Regular" };
    label.fills = [{ type: 'SOLID', color: hexToRgb(state.disabled ? '#9ca3af' : '#374151') }];
    row.appendChild(label);
    frame.appendChild(row);
  }

  finalizeFrame(frame);
  figma.notify('Switches generated!');
}

async function generateSelects(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Selects');
  addTitle(frame, 'Select Dropdowns');
  addSubtitle(frame, 'Single selection from a list');

  const select = figma.createFrame();
  select.layoutMode = 'HORIZONTAL';
  select.primaryAxisAlignItems = 'SPACE_BETWEEN';
  select.counterAxisAlignItems = 'CENTER';
  select.paddingLeft = 12;
  select.paddingRight = 12;
  select.resize(280, 40);
  select.cornerRadius = 6;
  select.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  select.strokes = [{ type: 'SOLID', color: hexToRgb('#d1d5db') }];
  select.strokeWeight = 1;

  const text = figma.createText();
  text.characters = 'Select an option...';
  text.fontSize = 14;
  text.fontName = { family: "Inter", style: "Regular" };
  text.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
  select.appendChild(text);

  const arrow = figma.createText();
  arrow.characters = '▼';
  arrow.fontSize = 10;
  arrow.fontName = { family: "Inter", style: "Regular" };
  arrow.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  select.appendChild(arrow);

  frame.appendChild(select);

  // Dropdown options
  const dropdown = figma.createFrame();
  dropdown.layoutMode = 'VERTICAL';
  dropdown.resize(280, dropdown.height);
  dropdown.cornerRadius = 6;
  dropdown.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  dropdown.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  dropdown.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 4 },
    radius: 6,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  const options = ['Option 1', 'Option 2 (selected)', 'Option 3'];
  for (let i = 0; i < options.length; i++) {
    const option = figma.createFrame();
    option.layoutMode = 'HORIZONTAL';
    option.counterAxisAlignItems = 'CENTER';
    option.paddingLeft = 12;
    option.paddingRight = 12;
    option.paddingTop = 10;
    option.paddingBottom = 10;
    option.resize(280, option.height);
    option.fills = [{ type: 'SOLID', color: hexToRgb(i === 1 ? tokens.colors.primary['50'] : '#ffffff') }];

    const optText = figma.createText();
    optText.characters = options[i];
    optText.fontSize = 14;
    optText.fontName = { family: "Inter", style: i === 1 ? "Medium" : "Regular" };
    optText.fills = [{ type: 'SOLID', color: hexToRgb(i === 1 ? tokens.colors.primary['700'] : '#374151') }];
    option.appendChild(optText);
    option.primaryAxisSizingMode = 'AUTO';
    dropdown.appendChild(option);
  }
  dropdown.primaryAxisSizingMode = 'AUTO';

  frame.appendChild(dropdown);
  finalizeFrame(frame);
  figma.notify('Selects generated!');
}

async function generateSliders(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Sliders');
  addTitle(frame, 'Sliders');
  addSubtitle(frame, 'Range selection controls');

  // Single slider
  const sliderContainer = figma.createFrame();
  sliderContainer.layoutMode = 'VERTICAL';
  sliderContainer.itemSpacing = 8;
  sliderContainer.fills = [];

  const sliderLabel = figma.createText();
  sliderLabel.characters = 'Volume: 60%';
  sliderLabel.fontSize = 14;
  sliderLabel.fontName = { family: "Inter", style: "Medium" };
  sliderContainer.appendChild(sliderLabel);

  const track = figma.createFrame();
  track.resize(280, 8);
  track.cornerRadius = 4;
  track.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];

  const fill = figma.createRectangle();
  fill.resize(168, 8);
  fill.cornerRadius = 4;
  fill.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  track.appendChild(fill);

  const thumb = figma.createEllipse();
  thumb.resize(20, 20);
  thumb.x = 158;
  thumb.y = -6;
  thumb.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  thumb.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  thumb.strokeWeight = 2;
  thumb.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 2 },
    radius: 4,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];
  track.appendChild(thumb);

  sliderContainer.appendChild(track);
  frame.appendChild(sliderContainer);

  finalizeFrame(frame);
  figma.notify('Sliders generated!');
}

async function generateRating(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Rating');
  addTitle(frame, 'Rating');
  addSubtitle(frame, 'Star-based rating component');

  const ratingRow = figma.createFrame();
  ratingRow.layoutMode = 'HORIZONTAL';
  ratingRow.itemSpacing = 4;
  ratingRow.fills = [];

  for (let i = 0; i < 5; i++) {
    const star = figma.createText();
    star.characters = '★';
    star.fontSize = 24;
    star.fontName = { family: "Inter", style: "Regular" };
    star.fills = [{ type: 'SOLID', color: hexToRgb(i < 3 ? tokens.colors.warning['400'] : '#d1d5db') }];
    ratingRow.appendChild(star);
  }

  const ratingText = figma.createText();
  ratingText.characters = '  3.0 / 5.0';
  ratingText.fontSize = 14;
  ratingText.fontName = { family: "Inter", style: "Medium" };
  ratingText.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
  ratingRow.appendChild(ratingText);

  frame.appendChild(ratingRow);
  finalizeFrame(frame);
  figma.notify('Rating generated!');
}

// ============================================
// DATA DISPLAY COMPONENTS
// Components for presenting data and content
// ============================================

/**
 * Generate badge components with semantic color variants
 * Creates Default, Primary, Success, Warning, Error, and Info badges.
 */
async function generateBadges(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Badges');
  addTitle(frame, 'Badges');
  addSubtitle(frame, 'Status indicators and labels');

  const variants = [
    { name: 'Default', bg: tokens.colors.neutral['100'], text: tokens.colors.neutral['700'] },
    { name: 'Primary', bg: tokens.colors.primary['100'], text: tokens.colors.primary['700'] },
    { name: 'Success', bg: tokens.colors.success['100'], text: tokens.colors.success['700'] },
    { name: 'Warning', bg: tokens.colors.warning['100'], text: tokens.colors.warning['700'] },
    { name: 'Error', bg: tokens.colors.error['100'], text: tokens.colors.error['700'] },
    { name: 'Info', bg: tokens.colors.info['100'], text: tokens.colors.info['700'] }
  ];

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 12;
  row.fills = [];

  for (const variant of variants) {
    const badge = figma.createFrame();
    badge.layoutMode = 'HORIZONTAL';
    badge.primaryAxisAlignItems = 'CENTER';
    badge.counterAxisAlignItems = 'CENTER';
    badge.paddingLeft = 10;
    badge.paddingRight = 10;
    badge.paddingTop = 4;
    badge.paddingBottom = 4;
    badge.cornerRadius = 9999;
    badge.fills = [{ type: 'SOLID', color: hexToRgb(variant.bg) }];

    const text = figma.createText();
    text.characters = variant.name;
    text.fontSize = 12;
    text.fontName = { family: "Inter", style: "Medium" };
    text.fills = [{ type: 'SOLID', color: hexToRgb(variant.text) }];
    badge.appendChild(text);
    badge.primaryAxisSizingMode = 'AUTO';
    badge.counterAxisSizingMode = 'AUTO';
    row.appendChild(badge);
  }

  frame.appendChild(row);
  finalizeFrame(frame);
  figma.notify('Badges generated!');
}

async function generateCards(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Cards', '#f3f4f6');
  addTitle(frame, 'Cards');
  addSubtitle(frame, 'Content containers with various styles');

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 24;
  row.fills = [];

  const sizes = [
    { name: 'sm', padding: 16, width: 240 },
    { name: 'md', padding: 24, width: 320 },
    { name: 'lg', padding: 32, width: 400 }
  ];

  for (const size of sizes) {
    const card = figma.createFrame();
    card.layoutMode = 'VERTICAL';
    card.paddingTop = size.padding;
    card.paddingBottom = size.padding;
    card.paddingLeft = size.padding;
    card.paddingRight = size.padding;
    card.itemSpacing = 12;
    card.resize(size.width, 180);
    card.cornerRadius = 12;
    card.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    card.effects = [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.1 },
      offset: { x: 0, y: 4 },
      radius: 6,
      spread: 0,
      visible: true,
      blendMode: 'NORMAL'
    }];

    const title = figma.createText();
    title.characters = `Card ${size.name.toUpperCase()}`;
    title.fontSize = 18;
    title.fontName = { family: "Inter", style: "Semi Bold" };
    card.appendChild(title);

    const desc = figma.createText();
    desc.characters = 'This is a sample card with configurable padding.';
    desc.fontSize = 14;
    desc.fontName = { family: "Inter", style: "Regular" };
    desc.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    desc.resize(size.width - size.padding * 2, desc.height);
    desc.textAutoResize = 'HEIGHT';
    card.appendChild(desc);
    card.primaryAxisSizingMode = 'AUTO';
    row.appendChild(card);
  }

  frame.appendChild(row);
  finalizeFrame(frame);
  figma.notify('Cards generated!');
}

async function generateTables(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Tables');
  addTitle(frame, 'Tables');
  addSubtitle(frame, 'Data tables with sorting and selection');

  const table = figma.createFrame();
  table.layoutMode = 'VERTICAL';
  table.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  table.cornerRadius = 8;
  table.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  table.strokeWeight = 1;

  const headers = ['Name', 'Email', 'Role', 'Status'];
  const rows = [
    ['John Doe', 'john@example.com', 'Admin', 'Active'],
    ['Jane Smith', 'jane@example.com', 'User', 'Active'],
    ['Bob Wilson', 'bob@example.com', 'User', 'Inactive']
  ];

  // Header row
  const headerRow = figma.createFrame();
  headerRow.layoutMode = 'HORIZONTAL';
  headerRow.paddingTop = 12;
  headerRow.paddingBottom = 12;
  headerRow.fills = [{ type: 'SOLID', color: hexToRgb('#f9fafb') }];

  for (const header of headers) {
    const cell = figma.createFrame();
    cell.layoutMode = 'HORIZONTAL';
    cell.paddingLeft = 16;
    cell.paddingRight = 16;
    cell.resize(150, cell.height);
    cell.fills = [];

    const text = figma.createText();
    text.characters = header;
    text.fontSize = 12;
    text.fontName = { family: "Inter", style: "Semi Bold" };
    text.fills = [{ type: 'SOLID', color: hexToRgb('#6b7280') }];
    cell.appendChild(text);
    cell.primaryAxisSizingMode = 'AUTO';
    headerRow.appendChild(cell);
  }
  headerRow.primaryAxisSizingMode = 'AUTO';
  table.appendChild(headerRow);

  // Data rows
  for (const row of rows) {
    const dataRow = figma.createFrame();
    dataRow.layoutMode = 'HORIZONTAL';
    dataRow.paddingTop = 12;
    dataRow.paddingBottom = 12;
    dataRow.fills = [];

    for (let i = 0; i < row.length; i++) {
      const cell = figma.createFrame();
      cell.layoutMode = 'HORIZONTAL';
      cell.paddingLeft = 16;
      cell.paddingRight = 16;
      cell.resize(150, cell.height);
      cell.fills = [];

      if (i === 3) {
        // Status badge
        const badge = figma.createFrame();
        badge.layoutMode = 'HORIZONTAL';
        badge.paddingLeft = 8;
        badge.paddingRight = 8;
        badge.paddingTop = 2;
        badge.paddingBottom = 2;
        badge.cornerRadius = 9999;
        badge.fills = [{ type: 'SOLID', color: hexToRgb(row[i] === 'Active' ? tokens.colors.success['100'] : tokens.colors.neutral['100']) }];

        const badgeText = figma.createText();
        badgeText.characters = row[i];
        badgeText.fontSize = 12;
        badgeText.fontName = { family: "Inter", style: "Medium" };
        badgeText.fills = [{ type: 'SOLID', color: hexToRgb(row[i] === 'Active' ? tokens.colors.success['700'] : tokens.colors.neutral['600']) }];
        badge.appendChild(badgeText);
        badge.primaryAxisSizingMode = 'AUTO';
        badge.counterAxisSizingMode = 'AUTO';
        cell.appendChild(badge);
      } else {
        const text = figma.createText();
        text.characters = row[i];
        text.fontSize = 14;
        text.fontName = { family: "Inter", style: i === 0 ? "Medium" : "Regular" };
        text.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? '#111827' : '#6b7280') }];
        cell.appendChild(text);
      }
      cell.primaryAxisSizingMode = 'AUTO';
      dataRow.appendChild(cell);
    }
    dataRow.primaryAxisSizingMode = 'AUTO';
    table.appendChild(dataRow);
  }
  table.primaryAxisSizingMode = 'AUTO';

  frame.appendChild(table);
  finalizeFrame(frame);
  figma.notify('Tables generated!');
}

async function generateProgress(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Progress');
  addTitle(frame, 'Progress Indicators');
  addSubtitle(frame, 'Progress bars and circular indicators');

  // Progress bars
  const percentages = [25, 50, 75, 100];
  for (const pct of percentages) {
    const container = figma.createFrame();
    container.layoutMode = 'VERTICAL';
    container.itemSpacing = 4;
    container.fills = [];

    const label = figma.createText();
    label.characters = `${pct}%`;
    label.fontSize = 12;
    label.fontName = { family: "Inter", style: "Medium" };
    container.appendChild(label);

    const track = figma.createFrame();
    track.resize(280, 8);
    track.cornerRadius = 4;
    track.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];

    const fill = figma.createRectangle();
    fill.resize(280 * pct / 100, 8);
    fill.cornerRadius = 4;
    fill.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
    track.appendChild(fill);

    container.appendChild(track);
    frame.appendChild(container);
  }

  finalizeFrame(frame);
  figma.notify('Progress indicators generated!');
}

async function generateAvatars(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Avatars');
  addTitle(frame, 'Avatars');
  addSubtitle(frame, 'User profile images and initials');

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 16;
  row.fills = [];

  const sizes = [
    { name: 'sm', size: 32, fontSize: 12 },
    { name: 'md', size: 40, fontSize: 14 },
    { name: 'lg', size: 48, fontSize: 16 },
    { name: 'xl', size: 64, fontSize: 20 }
  ];

  for (const s of sizes) {
    const avatar = figma.createFrame();
    avatar.resize(s.size, s.size);
    avatar.cornerRadius = s.size / 2;
    avatar.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];

    const initials = figma.createText();
    initials.characters = 'JD';
    initials.fontSize = s.fontSize;
    initials.fontName = { family: "Inter", style: "Semi Bold" };
    initials.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    initials.x = (s.size - initials.width) / 2;
    initials.y = (s.size - initials.height) / 2;
    avatar.appendChild(initials);
    row.appendChild(avatar);
  }

  frame.appendChild(row);
  finalizeFrame(frame);
  figma.notify('Avatars generated!');
}

async function generateTooltips(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Tooltips');
  addTitle(frame, 'Tooltips');
  addSubtitle(frame, 'Contextual information on hover');

  const positions = ['Top', 'Right', 'Bottom', 'Left'];

  for (const pos of positions) {
    const tooltip = figma.createFrame();
    tooltip.layoutMode = 'HORIZONTAL';
    tooltip.paddingLeft = 12;
    tooltip.paddingRight = 12;
    tooltip.paddingTop = 8;
    tooltip.paddingBottom = 8;
    tooltip.cornerRadius = 6;
    tooltip.fills = [{ type: 'SOLID', color: hexToRgb('#1f2937') }];

    const text = figma.createText();
    text.characters = `Tooltip ${pos}`;
    text.fontSize = 12;
    text.fontName = { family: "Inter", style: "Medium" };
    text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    tooltip.appendChild(text);
    tooltip.primaryAxisSizingMode = 'AUTO';
    tooltip.counterAxisSizingMode = 'AUTO';
    frame.appendChild(tooltip);
  }

  finalizeFrame(frame);
  figma.notify('Tooltips generated!');
}

async function generateChips(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Chips');
  addTitle(frame, 'Chips');
  addSubtitle(frame, 'Tags and filter chips');

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 8;
  row.fills = [];

  const chipLabels = ['React', 'Vue', 'Angular', 'Svelte'];

  for (const label of chipLabels) {
    const chip = figma.createFrame();
    chip.layoutMode = 'HORIZONTAL';
    chip.itemSpacing = 6;
    chip.paddingLeft = 12;
    chip.paddingRight = 12;
    chip.paddingTop = 6;
    chip.paddingBottom = 6;
    chip.cornerRadius = 16;
    chip.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['100']) }];

    const text = figma.createText();
    text.characters = label;
    text.fontSize = 13;
    text.fontName = { family: "Inter", style: "Medium" };
    text.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['700']) }];
    chip.appendChild(text);

    const close = figma.createText();
    close.characters = '×';
    close.fontSize = 14;
    close.fontName = { family: "Inter", style: "Medium" };
    close.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
    chip.appendChild(close);

    chip.primaryAxisSizingMode = 'AUTO';
    chip.counterAxisSizingMode = 'AUTO';
    row.appendChild(chip);
  }

  frame.appendChild(row);
  finalizeFrame(frame);
  figma.notify('Chips generated!');
}

async function generateSpinner(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Spinner');
  addTitle(frame, 'Loading Spinners');
  addSubtitle(frame, 'Loading state indicators');

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 24;
  row.fills = [];

  const sizes = [16, 24, 32, 48];

  for (const size of sizes) {
    const spinner = figma.createEllipse();
    spinner.resize(size, size);
    spinner.fills = [];
    spinner.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
    spinner.strokeWeight = size / 8;
    spinner.arcData = { startingAngle: 0, endingAngle: 4.7, innerRadius: 0.7 };
    row.appendChild(spinner);
  }

  frame.appendChild(row);
  finalizeFrame(frame);
  figma.notify('Spinners generated!');
}

async function generateSkeleton(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Skeleton');
  addTitle(frame, 'Skeleton Loaders');
  addSubtitle(frame, 'Content placeholder animations');

  const card = figma.createFrame();
  card.layoutMode = 'HORIZONTAL';
  card.itemSpacing = 16;
  card.paddingTop = 16;
  card.paddingBottom = 16;
  card.paddingLeft = 16;
  card.paddingRight = 16;
  card.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  card.cornerRadius = 8;

  // Avatar skeleton
  const avatarSkeleton = figma.createEllipse();
  avatarSkeleton.resize(48, 48);
  avatarSkeleton.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  card.appendChild(avatarSkeleton);

  // Text skeletons
  const textGroup = figma.createFrame();
  textGroup.layoutMode = 'VERTICAL';
  textGroup.itemSpacing = 8;
  textGroup.fills = [];

  const line1 = figma.createRectangle();
  line1.resize(200, 16);
  line1.cornerRadius = 4;
  line1.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  textGroup.appendChild(line1);

  const line2 = figma.createRectangle();
  line2.resize(150, 16);
  line2.cornerRadius = 4;
  line2.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  textGroup.appendChild(line2);

  card.appendChild(textGroup);
  frame.appendChild(card);
  finalizeFrame(frame);
  figma.notify('Skeleton loaders generated!');
}

async function generateTimeline(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Timeline');
  addTitle(frame, 'Timeline');
  addSubtitle(frame, 'Vertical event timeline');

  const events = [
    { title: 'Order placed', desc: 'Your order has been confirmed', time: '2 hours ago' },
    { title: 'Processing', desc: 'Order is being prepared', time: '1 hour ago' },
    { title: 'Shipped', desc: 'Package is on its way', time: '30 min ago' }
  ];

  for (let i = 0; i < events.length; i++) {
    const item = figma.createFrame();
    item.layoutMode = 'HORIZONTAL';
    item.itemSpacing = 16;
    item.fills = [];

    // Dot and line
    const dotContainer = figma.createFrame();
    dotContainer.layoutMode = 'VERTICAL';
    dotContainer.itemSpacing = 0;
    dotContainer.resize(24, 80);
    dotContainer.fills = [];

    const dot = figma.createEllipse();
    dot.resize(12, 12);
    dot.x = 6;
    dot.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
    dotContainer.appendChild(dot);

    if (i < events.length - 1) {
      const line = figma.createRectangle();
      line.resize(2, 60);
      line.x = 11;
      line.y = 16;
      line.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
      dotContainer.appendChild(line);
    }

    item.appendChild(dotContainer);

    // Content
    const content = figma.createFrame();
    content.layoutMode = 'VERTICAL';
    content.itemSpacing = 4;
    content.fills = [];

    const title = figma.createText();
    title.characters = events[i].title;
    title.fontSize = 14;
    title.fontName = { family: "Inter", style: "Semi Bold" };
    content.appendChild(title);

    const desc = figma.createText();
    desc.characters = events[i].desc;
    desc.fontSize = 13;
    desc.fontName = { family: "Inter", style: "Regular" };
    desc.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
    content.appendChild(desc);

    const time = figma.createText();
    time.characters = events[i].time;
    time.fontSize = 12;
    time.fontName = { family: "Inter", style: "Regular" };
    time.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    content.appendChild(time);

    item.appendChild(content);
    frame.appendChild(item);
  }

  finalizeFrame(frame);
  figma.notify('Timeline generated!');
}

async function generateStatsCards(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Stats Cards', '#f3f4f6');
  addTitle(frame, 'Stats Cards');
  addSubtitle(frame, 'Metric display with trends');

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 16;
  row.fills = [];

  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', up: true },
    { label: 'Active Users', value: '2,345', change: '+8.2%', up: true },
    { label: 'Bounce Rate', value: '24.5%', change: '-3.1%', up: false }
  ];

  for (const stat of stats) {
    const card = figma.createFrame();
    card.layoutMode = 'VERTICAL';
    card.itemSpacing = 8;
    card.paddingTop = 20;
    card.paddingBottom = 20;
    card.paddingLeft = 20;
    card.paddingRight = 20;
    card.cornerRadius = 12;
    card.resize(180, card.height);
    card.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    card.effects = [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.05 },
      offset: { x: 0, y: 2 },
      radius: 4,
      spread: 0,
      visible: true,
      blendMode: 'NORMAL'
    }];

    const label = figma.createText();
    label.characters = stat.label;
    label.fontSize = 13;
    label.fontName = { family: "Inter", style: "Medium" };
    label.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
    card.appendChild(label);

    const value = figma.createText();
    value.characters = stat.value;
    value.fontSize = 28;
    value.fontName = { family: "Inter", style: "Bold" };
    card.appendChild(value);

    const change = figma.createText();
    change.characters = `${stat.up ? '↑' : '↓'} ${stat.change}`;
    change.fontSize = 13;
    change.fontName = { family: "Inter", style: "Medium" };
    change.fills = [{ type: 'SOLID', color: hexToRgb(stat.up ? tokens.colors.success['500'] : tokens.colors.error['500']) }];
    card.appendChild(change);

    card.primaryAxisSizingMode = 'AUTO';
    row.appendChild(card);
  }

  frame.appendChild(row);
  finalizeFrame(frame);
  figma.notify('Stats cards generated!');
}

// ============ NAVIGATION COMPONENTS ============

async function generateTabs(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Tabs');
  addTitle(frame, 'Tabs');
  addSubtitle(frame, 'Navigation between views');

  const tabsContainer = figma.createFrame();
  tabsContainer.layoutMode = 'HORIZONTAL';
  tabsContainer.fills = [];
  tabsContainer.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  tabsContainer.strokeWeight = 1;
  tabsContainer.strokeAlign = 'INSIDE';

  const tabs = ['Overview', 'Analytics', 'Reports', 'Settings'];

  for (let i = 0; i < tabs.length; i++) {
    const tab = figma.createFrame();
    tab.layoutMode = 'HORIZONTAL';
    tab.paddingLeft = 16;
    tab.paddingRight = 16;
    tab.paddingTop = 12;
    tab.paddingBottom = 12;
    tab.fills = [];

    const text = figma.createText();
    text.characters = tabs[i];
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: i === 0 ? "Semi Bold" : "Medium" };
    text.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['600'] : '#6b7280') }];
    tab.appendChild(text);

    if (i === 0) {
      tab.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
      tab.strokeWeight = 2;
      tab.strokeAlign = 'INSIDE';
    }

    tab.primaryAxisSizingMode = 'AUTO';
    tabsContainer.appendChild(tab);
  }

  frame.appendChild(tabsContainer);
  finalizeFrame(frame);
  figma.notify('Tabs generated!');
}

async function generateBreadcrumbs(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Breadcrumbs');
  addTitle(frame, 'Breadcrumbs');
  addSubtitle(frame, 'Navigation path indicator');

  const breadcrumbs = figma.createFrame();
  breadcrumbs.layoutMode = 'HORIZONTAL';
  breadcrumbs.itemSpacing = 8;
  breadcrumbs.fills = [];

  const items = ['Home', 'Products', 'Electronics', 'Smartphones'];

  for (let i = 0; i < items.length; i++) {
    const item = figma.createText();
    item.characters = items[i];
    item.fontSize = 14;
    item.fontName = { family: "Inter", style: i === items.length - 1 ? "Medium" : "Regular" };
    item.fills = [{ type: 'SOLID', color: hexToRgb(i === items.length - 1 ? '#111827' : tokens.colors.primary['600']) }];
    breadcrumbs.appendChild(item);

    if (i < items.length - 1) {
      const separator = figma.createText();
      separator.characters = '/';
      separator.fontSize = 14;
      separator.fontName = { family: "Inter", style: "Regular" };
      separator.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
      breadcrumbs.appendChild(separator);
    }
  }

  frame.appendChild(breadcrumbs);
  finalizeFrame(frame);
  figma.notify('Breadcrumbs generated!');
}

async function generatePagination(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Pagination');
  addTitle(frame, 'Pagination');
  addSubtitle(frame, 'Page navigation controls');

  const pagination = figma.createFrame();
  pagination.layoutMode = 'HORIZONTAL';
  pagination.itemSpacing = 4;
  pagination.fills = [];

  const pages = ['←', '1', '2', '3', '...', '10', '→'];

  for (let i = 0; i < pages.length; i++) {
    const page = figma.createFrame();
    page.layoutMode = 'HORIZONTAL';
    page.primaryAxisAlignItems = 'CENTER';
    page.counterAxisAlignItems = 'CENTER';
    page.resize(36, 36);
    page.cornerRadius = 6;

    const isActive = pages[i] === '2';
    page.fills = [{ type: 'SOLID', color: hexToRgb(isActive ? tokens.colors.primary['500'] : '#ffffff') }];
    if (!isActive) {
      page.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
      page.strokeWeight = 1;
    }

    const text = figma.createText();
    text.characters = pages[i];
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Medium" };
    text.fills = [{ type: 'SOLID', color: hexToRgb(isActive ? '#ffffff' : '#374151') }];
    page.appendChild(text);

    pagination.appendChild(page);
  }

  frame.appendChild(pagination);
  finalizeFrame(frame);
  figma.notify('Pagination generated!');
}

async function generateAccordion(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Accordion');
  addTitle(frame, 'Accordion');
  addSubtitle(frame, 'Expandable content sections');

  const items = [
    { title: 'What is Aural UI?', content: 'Aural UI is a modern design system...', open: true },
    { title: 'How do I install it?', content: 'npm install aural-design', open: false },
    { title: 'Is it accessible?', content: 'Yes, all components are WCAG compliant.', open: false }
  ];

  for (const item of items) {
    const accordion = figma.createFrame();
    accordion.layoutMode = 'VERTICAL';
    accordion.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    accordion.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
    accordion.strokeWeight = 1;
    accordion.cornerRadius = 8;

    // Header
    const header = figma.createFrame();
    header.layoutMode = 'HORIZONTAL';
    header.primaryAxisAlignItems = 'SPACE_BETWEEN';
    header.counterAxisAlignItems = 'CENTER';
    header.paddingLeft = 16;
    header.paddingRight = 16;
    header.paddingTop = 16;
    header.paddingBottom = 16;
    header.resize(400, header.height);
    header.fills = [];

    const title = figma.createText();
    title.characters = item.title;
    title.fontSize = 14;
    title.fontName = { family: "Inter", style: "Semi Bold" };
    header.appendChild(title);

    const arrow = figma.createText();
    arrow.characters = item.open ? '▲' : '▼';
    arrow.fontSize = 10;
    arrow.fontName = { family: "Inter", style: "Regular" };
    arrow.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
    header.appendChild(arrow);

    header.primaryAxisSizingMode = 'AUTO';
    accordion.appendChild(header);

    if (item.open) {
      const content = figma.createFrame();
      content.layoutMode = 'HORIZONTAL';
      content.paddingLeft = 16;
      content.paddingRight = 16;
      content.paddingBottom = 16;
      content.resize(400, content.height);
      content.fills = [];

      const contentText = figma.createText();
      contentText.characters = item.content;
      contentText.fontSize = 14;
      contentText.fontName = { family: "Inter", style: "Regular" };
      contentText.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
      content.appendChild(contentText);
      content.primaryAxisSizingMode = 'AUTO';
      accordion.appendChild(content);
    }

    accordion.primaryAxisSizingMode = 'AUTO';
    frame.appendChild(accordion);
  }

  finalizeFrame(frame);
  figma.notify('Accordion generated!');
}

async function generateStepper(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Stepper');
  addTitle(frame, 'Stepper');
  addSubtitle(frame, 'Multi-step process indicator');

  const stepper = figma.createFrame();
  stepper.layoutMode = 'HORIZONTAL';
  stepper.itemSpacing = 0;
  stepper.fills = [];

  const steps = ['Account', 'Profile', 'Review', 'Complete'];
  const currentStep = 2;

  for (let i = 0; i < steps.length; i++) {
    const stepContainer = figma.createFrame();
    stepContainer.layoutMode = 'HORIZONTAL';
    stepContainer.itemSpacing = 8;
    stepContainer.fills = [];
    stepContainer.counterAxisAlignItems = 'CENTER';

    // Step circle
    const circle = figma.createFrame();
    circle.resize(32, 32);
    circle.cornerRadius = 16;
    circle.fills = [{ type: 'SOLID', color: hexToRgb(
      i < currentStep ? tokens.colors.primary['500'] : (i === currentStep ? tokens.colors.primary['100'] : '#e5e7eb')
    )}];

    const number = figma.createText();
    number.characters = i < currentStep ? '✓' : String(i + 1);
    number.fontSize = i < currentStep ? 14 : 12;
    number.fontName = { family: "Inter", style: "Semi Bold" };
    number.fills = [{ type: 'SOLID', color: hexToRgb(
      i < currentStep ? '#ffffff' : (i === currentStep ? tokens.colors.primary['600'] : '#9ca3af')
    )}];
    number.x = i < currentStep ? 9 : 11;
    number.y = 8;
    circle.appendChild(number);
    stepContainer.appendChild(circle);

    // Step label
    const label = figma.createText();
    label.characters = steps[i];
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: i <= currentStep ? "Semi Bold" : "Regular" };
    label.fills = [{ type: 'SOLID', color: hexToRgb(i <= currentStep ? '#111827' : '#9ca3af') }];
    stepContainer.appendChild(label);

    stepper.appendChild(stepContainer);

    // Connector line
    if (i < steps.length - 1) {
      const line = figma.createRectangle();
      line.resize(40, 2);
      line.fills = [{ type: 'SOLID', color: hexToRgb(i < currentStep ? tokens.colors.primary['500'] : '#e5e7eb') }];

      const lineContainer = figma.createFrame();
      lineContainer.layoutMode = 'HORIZONTAL';
      lineContainer.counterAxisAlignItems = 'CENTER';
      lineContainer.paddingLeft = 8;
      lineContainer.paddingRight = 8;
      lineContainer.resize(56, 32);
      lineContainer.fills = [];
      lineContainer.appendChild(line);
      stepper.appendChild(lineContainer);
    }
  }

  frame.appendChild(stepper);
  finalizeFrame(frame);
  figma.notify('Stepper generated!');
}

// ============ OVERLAY COMPONENTS ============

async function generateModals(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Modals', '#6b7280');
  addTitle(frame, 'Modals');
  frame.children[0].fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

  const modal = figma.createFrame();
  modal.layoutMode = 'VERTICAL';
  modal.itemSpacing = 16;
  modal.paddingTop = 24;
  modal.paddingBottom = 24;
  modal.paddingLeft = 24;
  modal.paddingRight = 24;
  modal.resize(400, modal.height);
  modal.cornerRadius = 12;
  modal.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  modal.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.25 },
    offset: { x: 0, y: 25 },
    radius: 50,
    spread: -12,
    visible: true,
    blendMode: 'NORMAL'
  }];

  // Header
  const header = figma.createFrame();
  header.layoutMode = 'HORIZONTAL';
  header.primaryAxisAlignItems = 'SPACE_BETWEEN';
  header.resize(352, header.height);
  header.fills = [];

  const title = figma.createText();
  title.characters = 'Confirm Action';
  title.fontSize = 18;
  title.fontName = { family: "Inter", style: "Semi Bold" };
  header.appendChild(title);

  const closeBtn = figma.createText();
  closeBtn.characters = '×';
  closeBtn.fontSize = 24;
  closeBtn.fontName = { family: "Inter", style: "Regular" };
  closeBtn.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  header.appendChild(closeBtn);
  header.primaryAxisSizingMode = 'AUTO';
  modal.appendChild(header);

  // Content
  const content = figma.createText();
  content.characters = 'Are you sure you want to proceed with this action? This cannot be undone.';
  content.fontSize = 14;
  content.fontName = { family: "Inter", style: "Regular" };
  content.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
  content.resize(352, content.height);
  content.textAutoResize = 'HEIGHT';
  modal.appendChild(content);

  // Actions
  const actions = figma.createFrame();
  actions.layoutMode = 'HORIZONTAL';
  actions.itemSpacing = 12;
  actions.primaryAxisAlignItems = 'MAX';
  actions.resize(352, actions.height);
  actions.fills = [];

  const cancelBtn = figma.createFrame();
  cancelBtn.layoutMode = 'HORIZONTAL';
  cancelBtn.primaryAxisAlignItems = 'CENTER';
  cancelBtn.counterAxisAlignItems = 'CENTER';
  cancelBtn.paddingLeft = 16;
  cancelBtn.paddingRight = 16;
  cancelBtn.resize(cancelBtn.width, 40);
  cancelBtn.cornerRadius = 6;
  cancelBtn.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

  const cancelText = figma.createText();
  cancelText.characters = 'Cancel';
  cancelText.fontSize = 14;
  cancelText.fontName = { family: "Inter", style: "Medium" };
  cancelBtn.appendChild(cancelText);
  cancelBtn.primaryAxisSizingMode = 'AUTO';
  actions.appendChild(cancelBtn);

  const confirmBtn = figma.createFrame();
  confirmBtn.layoutMode = 'HORIZONTAL';
  confirmBtn.primaryAxisAlignItems = 'CENTER';
  confirmBtn.counterAxisAlignItems = 'CENTER';
  confirmBtn.paddingLeft = 16;
  confirmBtn.paddingRight = 16;
  confirmBtn.resize(confirmBtn.width, 40);
  confirmBtn.cornerRadius = 6;
  confirmBtn.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];

  const confirmText = figma.createText();
  confirmText.characters = 'Confirm';
  confirmText.fontSize = 14;
  confirmText.fontName = { family: "Inter", style: "Medium" };
  confirmText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  confirmBtn.appendChild(confirmText);
  confirmBtn.primaryAxisSizingMode = 'AUTO';
  actions.appendChild(confirmBtn);

  actions.primaryAxisSizingMode = 'AUTO';
  modal.appendChild(actions);
  modal.primaryAxisSizingMode = 'AUTO';

  frame.appendChild(modal);
  finalizeFrame(frame);
  figma.notify('Modals generated!');
}

async function generateToasts(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Toasts');
  addTitle(frame, 'Toast Notifications');
  addSubtitle(frame, 'Brief feedback messages');

  const variants = [
    { type: 'Success', icon: '✓', bg: tokens.colors.success['50'], border: tokens.colors.success['200'], text: tokens.colors.success['800'] },
    { type: 'Error', icon: '✕', bg: tokens.colors.error['50'], border: tokens.colors.error['200'], text: tokens.colors.error['800'] },
    { type: 'Warning', icon: '!', bg: tokens.colors.warning['50'], border: tokens.colors.warning['200'], text: tokens.colors.warning['800'] },
    { type: 'Info', icon: 'i', bg: tokens.colors.info['50'], border: tokens.colors.info['200'], text: tokens.colors.info['800'] }
  ];

  for (const v of variants) {
    const toast = figma.createFrame();
    toast.layoutMode = 'HORIZONTAL';
    toast.itemSpacing = 12;
    toast.paddingTop = 12;
    toast.paddingBottom = 12;
    toast.paddingLeft = 16;
    toast.paddingRight = 16;
    toast.cornerRadius = 8;
    toast.fills = [{ type: 'SOLID', color: hexToRgb(v.bg) }];
    toast.strokes = [{ type: 'SOLID', color: hexToRgb(v.border) }];
    toast.strokeWeight = 1;

    const icon = figma.createText();
    icon.characters = v.icon;
    icon.fontSize = 14;
    icon.fontName = { family: "Inter", style: "Bold" };
    icon.fills = [{ type: 'SOLID', color: hexToRgb(v.text) }];
    toast.appendChild(icon);

    const text = figma.createText();
    text.characters = `${v.type} message goes here`;
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Medium" };
    text.fills = [{ type: 'SOLID', color: hexToRgb(v.text) }];
    toast.appendChild(text);

    toast.primaryAxisSizingMode = 'AUTO';
    toast.counterAxisSizingMode = 'AUTO';
    frame.appendChild(toast);
  }

  finalizeFrame(frame);
  figma.notify('Toasts generated!');
}

async function generateDrawer(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Drawer');
  addTitle(frame, 'Drawer');
  addSubtitle(frame, 'Slide-out panel');

  const drawer = figma.createFrame();
  drawer.layoutMode = 'VERTICAL';
  drawer.itemSpacing = 24;
  drawer.paddingTop = 24;
  drawer.paddingBottom = 24;
  drawer.paddingLeft = 24;
  drawer.paddingRight = 24;
  drawer.resize(320, 400);
  drawer.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  drawer.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: -4, y: 0 },
    radius: 12,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  const header = figma.createFrame();
  header.layoutMode = 'HORIZONTAL';
  header.primaryAxisAlignItems = 'SPACE_BETWEEN';
  header.resize(272, header.height);
  header.fills = [];

  const title = figma.createText();
  title.characters = 'Settings';
  title.fontSize = 20;
  title.fontName = { family: "Inter", style: "Semi Bold" };
  header.appendChild(title);

  const close = figma.createText();
  close.characters = '×';
  close.fontSize = 24;
  close.fontName = { family: "Inter", style: "Regular" };
  close.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  header.appendChild(close);
  header.primaryAxisSizingMode = 'AUTO';
  drawer.appendChild(header);

  // Menu items
  const menuItems = ['Profile', 'Account', 'Notifications', 'Security', 'Help'];
  for (const item of menuItems) {
    const menuItem = figma.createFrame();
    menuItem.layoutMode = 'HORIZONTAL';
    menuItem.paddingTop = 12;
    menuItem.paddingBottom = 12;
    menuItem.resize(272, menuItem.height);
    menuItem.fills = [];

    const text = figma.createText();
    text.characters = item;
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Medium" };
    text.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
    menuItem.appendChild(text);
    menuItem.primaryAxisSizingMode = 'AUTO';
    drawer.appendChild(menuItem);
  }

  frame.appendChild(drawer);
  finalizeFrame(frame);
  figma.notify('Drawer generated!');
}

async function generateAlertBanner(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Alert Banners');
  addTitle(frame, 'Alert Banners');
  addSubtitle(frame, 'Page-level notifications');

  const variants = [
    { type: 'Info', bg: tokens.colors.info['50'], border: tokens.colors.info['200'], text: tokens.colors.info['800'], icon: 'ℹ' },
    { type: 'Success', bg: tokens.colors.success['50'], border: tokens.colors.success['200'], text: tokens.colors.success['800'], icon: '✓' },
    { type: 'Warning', bg: tokens.colors.warning['50'], border: tokens.colors.warning['200'], text: tokens.colors.warning['800'], icon: '⚠' },
    { type: 'Error', bg: tokens.colors.error['50'], border: tokens.colors.error['200'], text: tokens.colors.error['800'], icon: '✕' }
  ];

  for (const v of variants) {
    const alert = figma.createFrame();
    alert.layoutMode = 'HORIZONTAL';
    alert.itemSpacing = 12;
    alert.paddingTop = 16;
    alert.paddingBottom = 16;
    alert.paddingLeft = 16;
    alert.paddingRight = 16;
    alert.resize(500, alert.height);
    alert.cornerRadius = 8;
    alert.fills = [{ type: 'SOLID', color: hexToRgb(v.bg) }];
    alert.strokes = [{ type: 'SOLID', color: hexToRgb(v.border) }];
    alert.strokeWeight = 1;

    const icon = figma.createText();
    icon.characters = v.icon;
    icon.fontSize = 16;
    icon.fontName = { family: "Inter", style: "Bold" };
    icon.fills = [{ type: 'SOLID', color: hexToRgb(v.text) }];
    alert.appendChild(icon);

    const content = figma.createFrame();
    content.layoutMode = 'VERTICAL';
    content.itemSpacing = 4;
    content.fills = [];

    const title = figma.createText();
    title.characters = `${v.type} Alert`;
    title.fontSize = 14;
    title.fontName = { family: "Inter", style: "Semi Bold" };
    title.fills = [{ type: 'SOLID', color: hexToRgb(v.text) }];
    content.appendChild(title);

    const desc = figma.createText();
    desc.characters = 'This is an important message that requires your attention.';
    desc.fontSize = 13;
    desc.fontName = { family: "Inter", style: "Regular" };
    desc.fills = [{ type: 'SOLID', color: hexToRgb(v.text) }];
    content.appendChild(desc);

    alert.appendChild(content);
    alert.primaryAxisSizingMode = 'AUTO';
    frame.appendChild(alert);
  }

  finalizeFrame(frame);
  figma.notify('Alert banners generated!');
}

async function generatePopovers(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Popovers');
  addTitle(frame, 'Popovers');
  addSubtitle(frame, 'Contextual overlays');

  const popover = figma.createFrame();
  popover.layoutMode = 'VERTICAL';
  popover.itemSpacing = 8;
  popover.paddingTop = 16;
  popover.paddingBottom = 16;
  popover.paddingLeft = 16;
  popover.paddingRight = 16;
  popover.resize(280, popover.height);
  popover.cornerRadius = 8;
  popover.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  popover.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 },
    radius: 12,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  const title = figma.createText();
  title.characters = 'Popover Title';
  title.fontSize = 14;
  title.fontName = { family: "Inter", style: "Semi Bold" };
  popover.appendChild(title);

  const content = figma.createText();
  content.characters = 'This is a popover with additional content and context.';
  content.fontSize = 13;
  content.fontName = { family: "Inter", style: "Regular" };
  content.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  content.resize(248, content.height);
  content.textAutoResize = 'HEIGHT';
  popover.appendChild(content);

  popover.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(popover);
  finalizeFrame(frame);
  figma.notify('Popovers generated!');
}

async function generateDropdowns(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Dropdowns');
  addTitle(frame, 'Dropdown Menus');
  addSubtitle(frame, 'Action menus and options');

  const dropdown = figma.createFrame();
  dropdown.layoutMode = 'VERTICAL';
  dropdown.resize(200, dropdown.height);
  dropdown.cornerRadius = 8;
  dropdown.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  dropdown.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 },
    radius: 12,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  const items = [
    { label: 'Edit', icon: '✎' },
    { label: 'Duplicate', icon: '❐' },
    { label: 'Archive', icon: '📁' },
    { divider: true },
    { label: 'Delete', icon: '🗑', danger: true }
  ];

  for (const item of items) {
    if (item.divider) {
      const divider = figma.createRectangle();
      divider.resize(200, 1);
      divider.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
      dropdown.appendChild(divider);
      continue;
    }

    const menuItem = figma.createFrame();
    menuItem.layoutMode = 'HORIZONTAL';
    menuItem.itemSpacing = 12;
    menuItem.paddingLeft = 12;
    menuItem.paddingRight = 12;
    menuItem.paddingTop = 10;
    menuItem.paddingBottom = 10;
    menuItem.resize(200, menuItem.height);
    menuItem.fills = [];

    const icon = figma.createText();
    icon.characters = item.icon!;
    icon.fontSize = 14;
    icon.fontName = { family: "Inter", style: "Regular" };
    icon.fills = [{ type: 'SOLID', color: hexToRgb(item.danger ? tokens.colors.error['500'] : '#6b7280') }];
    menuItem.appendChild(icon);

    const label = figma.createText();
    label.characters = item.label!;
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Medium" };
    label.fills = [{ type: 'SOLID', color: hexToRgb(item.danger ? tokens.colors.error['600'] : '#374151') }];
    menuItem.appendChild(label);

    menuItem.primaryAxisSizingMode = 'AUTO';
    dropdown.appendChild(menuItem);
  }

  dropdown.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(dropdown);
  finalizeFrame(frame);
  figma.notify('Dropdowns generated!');
}

// ============ ADDITIONAL COMPONENTS ============

async function generateDatePicker(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Date Picker');
  addTitle(frame, 'Date Picker');
  addSubtitle(frame, 'Date selection input');

  // Input field
  const inputRow = figma.createFrame();
  inputRow.layoutMode = 'HORIZONTAL';
  inputRow.itemSpacing = 8;
  inputRow.fills = [];

  const dateInput = figma.createFrame();
  dateInput.layoutMode = 'HORIZONTAL';
  dateInput.primaryAxisAlignItems = 'SPACE_BETWEEN';
  dateInput.counterAxisAlignItems = 'CENTER';
  dateInput.paddingLeft = 12;
  dateInput.paddingRight = 12;
  dateInput.resize(200, 40);
  dateInput.cornerRadius = 6;
  dateInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  dateInput.strokes = [{ type: 'SOLID', color: hexToRgb('#d1d5db') }];
  dateInput.strokeWeight = 1;

  const dateText = figma.createText();
  dateText.characters = 'Jan 28, 2026';
  dateText.fontSize = 14;
  dateText.fontName = { family: "Inter", style: "Regular" };
  dateInput.appendChild(dateText);

  const calIcon = figma.createText();
  calIcon.characters = '📅';
  calIcon.fontSize = 16;
  dateInput.appendChild(calIcon);

  inputRow.appendChild(dateInput);
  frame.appendChild(inputRow);

  // Calendar dropdown
  const calendar = figma.createFrame();
  calendar.layoutMode = 'VERTICAL';
  calendar.itemSpacing = 8;
  calendar.paddingTop = 16;
  calendar.paddingBottom = 16;
  calendar.paddingLeft = 16;
  calendar.paddingRight = 16;
  calendar.cornerRadius = 8;
  calendar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  calendar.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 },
    radius: 12,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  // Header
  const header = figma.createFrame();
  header.layoutMode = 'HORIZONTAL';
  header.primaryAxisAlignItems = 'SPACE_BETWEEN';
  header.counterAxisAlignItems = 'CENTER';
  header.resize(252, header.height);
  header.fills = [];

  const prevBtn = figma.createText();
  prevBtn.characters = '←';
  prevBtn.fontSize = 16;
  prevBtn.fontName = { family: "Inter", style: "Medium" };
  header.appendChild(prevBtn);

  const monthYear = figma.createText();
  monthYear.characters = 'January 2026';
  monthYear.fontSize = 16;
  monthYear.fontName = { family: "Inter", style: "Semi Bold" };
  header.appendChild(monthYear);

  const nextBtn = figma.createText();
  nextBtn.characters = '→';
  nextBtn.fontSize = 16;
  nextBtn.fontName = { family: "Inter", style: "Medium" };
  header.appendChild(nextBtn);

  header.primaryAxisSizingMode = 'AUTO';
  calendar.appendChild(header);

  // Days header
  const daysHeader = figma.createFrame();
  daysHeader.layoutMode = 'HORIZONTAL';
  daysHeader.itemSpacing = 0;
  daysHeader.fills = [];

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  for (const day of days) {
    const dayCell = figma.createFrame();
    dayCell.layoutMode = 'HORIZONTAL';
    dayCell.primaryAxisAlignItems = 'CENTER';
    dayCell.counterAxisAlignItems = 'CENTER';
    dayCell.resize(36, 32);
    dayCell.fills = [];

    const dayText = figma.createText();
    dayText.characters = day;
    dayText.fontSize = 12;
    dayText.fontName = { family: "Inter", style: "Medium" };
    dayText.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
    dayCell.appendChild(dayText);
    daysHeader.appendChild(dayCell);
  }
  calendar.appendChild(daysHeader);

  // Week rows (sample)
  for (let week = 0; week < 5; week++) {
    const weekRow = figma.createFrame();
    weekRow.layoutMode = 'HORIZONTAL';
    weekRow.itemSpacing = 0;
    weekRow.fills = [];

    for (let day = 0; day < 7; day++) {
      const dayNum = week * 7 + day - 3;
      const dayCell = figma.createFrame();
      dayCell.layoutMode = 'HORIZONTAL';
      dayCell.primaryAxisAlignItems = 'CENTER';
      dayCell.counterAxisAlignItems = 'CENTER';
      dayCell.resize(36, 36);
      dayCell.cornerRadius = 18;

      const isSelected = dayNum === 28;
      const isToday = dayNum === 15;
      const isValid = dayNum > 0 && dayNum <= 31;

      if (isSelected) {
        dayCell.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
      } else if (isToday) {
        dayCell.fills = [];
        dayCell.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
        dayCell.strokeWeight = 2;
      } else {
        dayCell.fills = [];
      }

      if (isValid) {
        const dayText = figma.createText();
        dayText.characters = String(dayNum);
        dayText.fontSize = 14;
        dayText.fontName = { family: "Inter", style: isSelected || isToday ? "Medium" : "Regular" };
        dayText.fills = [{ type: 'SOLID', color: isSelected ? { r: 1, g: 1, b: 1 } : hexToRgb('#374151') }];
        dayCell.appendChild(dayText);
      }
      weekRow.appendChild(dayCell);
    }
    calendar.appendChild(weekRow);
  }

  calendar.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(calendar);
  finalizeFrame(frame);
  figma.notify('Date picker generated!');
}

async function generateCalendar(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Calendar');
  addTitle(frame, 'Calendar (Full Month)');
  addSubtitle(frame, 'Full calendar with events');

  const calendar = figma.createFrame();
  calendar.layoutMode = 'VERTICAL';
  calendar.itemSpacing = 0;
  calendar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  calendar.cornerRadius = 12;
  calendar.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  calendar.strokeWeight = 1;

  // Header
  const header = figma.createFrame();
  header.layoutMode = 'HORIZONTAL';
  header.primaryAxisAlignItems = 'SPACE_BETWEEN';
  header.counterAxisAlignItems = 'CENTER';
  header.paddingLeft = 24;
  header.paddingRight = 24;
  header.paddingTop = 20;
  header.paddingBottom = 20;
  header.resize(700, header.height);
  header.fills = [];

  const monthYear = figma.createText();
  monthYear.characters = 'January 2026';
  monthYear.fontSize = 20;
  monthYear.fontName = { family: "Inter", style: "Bold" };
  header.appendChild(monthYear);

  const navBtns = figma.createFrame();
  navBtns.layoutMode = 'HORIZONTAL';
  navBtns.itemSpacing = 8;
  navBtns.fills = [];

  for (const arrow of ['←', '→']) {
    const btn = figma.createFrame();
    btn.layoutMode = 'HORIZONTAL';
    btn.primaryAxisAlignItems = 'CENTER';
    btn.counterAxisAlignItems = 'CENTER';
    btn.resize(32, 32);
    btn.cornerRadius = 6;
    btn.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

    const arrowText = figma.createText();
    arrowText.characters = arrow;
    arrowText.fontSize = 14;
    arrowText.fontName = { family: "Inter", style: "Medium" };
    btn.appendChild(arrowText);
    navBtns.appendChild(btn);
  }
  header.appendChild(navBtns);
  header.primaryAxisSizingMode = 'AUTO';
  calendar.appendChild(header);

  // Days header
  const daysHeaderRow = figma.createFrame();
  daysHeaderRow.layoutMode = 'HORIZONTAL';
  daysHeaderRow.fills = [{ type: 'SOLID', color: hexToRgb('#f9fafb') }];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (const day of dayNames) {
    const dayHeader = figma.createFrame();
    dayHeader.layoutMode = 'HORIZONTAL';
    dayHeader.primaryAxisAlignItems = 'CENTER';
    dayHeader.paddingTop = 12;
    dayHeader.paddingBottom = 12;
    dayHeader.resize(100, dayHeader.height);
    dayHeader.fills = [];

    const dayText = figma.createText();
    dayText.characters = day.substring(0, 3);
    dayText.fontSize = 12;
    dayText.fontName = { family: "Inter", style: "Semi Bold" };
    dayText.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    dayHeader.appendChild(dayText);
    dayHeader.primaryAxisSizingMode = 'AUTO';
    daysHeaderRow.appendChild(dayHeader);
  }
  calendar.appendChild(daysHeaderRow);

  // Calendar grid (simplified - 1 week sample)
  const weekRow = figma.createFrame();
  weekRow.layoutMode = 'HORIZONTAL';
  weekRow.fills = [];

  const sampleDays = [26, 27, 28, 29, 30, 31, 1];
  const events = { 28: 'Team Meeting', 30: 'Design Review' };

  for (let i = 0; i < 7; i++) {
    const dayCell = figma.createFrame();
    dayCell.layoutMode = 'VERTICAL';
    dayCell.itemSpacing = 4;
    dayCell.paddingTop = 8;
    dayCell.paddingLeft = 8;
    dayCell.paddingRight = 8;
    dayCell.paddingBottom = 8;
    dayCell.resize(100, 80);
    dayCell.fills = [];
    dayCell.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
    dayCell.strokeWeight = 1;

    const dayNum = figma.createText();
    dayNum.characters = String(sampleDays[i]);
    dayNum.fontSize = 14;
    dayNum.fontName = { family: "Inter", style: sampleDays[i] === 28 ? "Bold" : "Regular" };
    dayNum.fills = [{ type: 'SOLID', color: hexToRgb(sampleDays[i] < 26 || sampleDays[i] === 1 ? '#9ca3af' : '#111827') }];
    dayCell.appendChild(dayNum);

    const dayKey = sampleDays[i] as keyof typeof events;
    if (events[dayKey]) {
      const event = figma.createFrame();
      event.layoutMode = 'HORIZONTAL';
      event.paddingLeft = 6;
      event.paddingRight = 6;
      event.paddingTop = 2;
      event.paddingBottom = 2;
      event.cornerRadius = 4;
      event.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['100']) }];

      const eventText = figma.createText();
      eventText.characters = events[dayKey];
      eventText.fontSize = 10;
      eventText.fontName = { family: "Inter", style: "Medium" };
      eventText.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['700']) }];
      event.appendChild(eventText);
      event.primaryAxisSizingMode = 'AUTO';
      event.counterAxisSizingMode = 'AUTO';
      dayCell.appendChild(event);
    }

    weekRow.appendChild(dayCell);
  }

  calendar.appendChild(weekRow);
  calendar.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(calendar);
  finalizeFrame(frame);
  figma.notify('Calendar generated!');
}

async function generateFileUpload(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI File Upload');
  addTitle(frame, 'File Upload');
  addSubtitle(frame, 'Drag and drop file upload zone');

  // Dropzone
  const dropzone = figma.createFrame();
  dropzone.layoutMode = 'VERTICAL';
  dropzone.primaryAxisAlignItems = 'CENTER';
  dropzone.counterAxisAlignItems = 'CENTER';
  dropzone.itemSpacing = 12;
  dropzone.paddingTop = 40;
  dropzone.paddingBottom = 40;
  dropzone.paddingLeft = 40;
  dropzone.paddingRight = 40;
  dropzone.resize(400, dropzone.height);
  dropzone.cornerRadius = 12;
  dropzone.fills = [{ type: 'SOLID', color: hexToRgb('#fafafa') }];
  dropzone.strokes = [{ type: 'SOLID', color: hexToRgb('#d1d5db') }];
  dropzone.strokeWeight = 2;
  dropzone.dashPattern = [8, 4];

  const uploadIcon = figma.createText();
  uploadIcon.characters = '☁️';
  uploadIcon.fontSize = 48;
  dropzone.appendChild(uploadIcon);

  const mainText = figma.createText();
  mainText.characters = 'Drag and drop files here';
  mainText.fontSize = 16;
  mainText.fontName = { family: "Inter", style: "Semi Bold" };
  dropzone.appendChild(mainText);

  const subText = figma.createText();
  subText.characters = 'or click to browse';
  subText.fontSize = 14;
  subText.fontName = { family: "Inter", style: "Regular" };
  subText.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['600']) }];
  dropzone.appendChild(subText);

  const hint = figma.createText();
  hint.characters = 'PNG, JPG, GIF up to 10MB';
  hint.fontSize = 12;
  hint.fontName = { family: "Inter", style: "Regular" };
  hint.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  dropzone.appendChild(hint);

  dropzone.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(dropzone);

  // File item (uploaded)
  const fileItem = figma.createFrame();
  fileItem.layoutMode = 'HORIZONTAL';
  fileItem.primaryAxisAlignItems = 'SPACE_BETWEEN';
  fileItem.counterAxisAlignItems = 'CENTER';
  fileItem.paddingLeft = 16;
  fileItem.paddingRight = 16;
  fileItem.paddingTop = 12;
  fileItem.paddingBottom = 12;
  fileItem.resize(400, fileItem.height);
  fileItem.cornerRadius = 8;
  fileItem.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  fileItem.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  fileItem.strokeWeight = 1;

  const fileInfo = figma.createFrame();
  fileInfo.layoutMode = 'HORIZONTAL';
  fileInfo.itemSpacing = 12;
  fileInfo.fills = [];
  fileInfo.counterAxisAlignItems = 'CENTER';

  const fileIcon = figma.createText();
  fileIcon.characters = '📄';
  fileIcon.fontSize = 24;
  fileInfo.appendChild(fileIcon);

  const fileDetails = figma.createFrame();
  fileDetails.layoutMode = 'VERTICAL';
  fileDetails.itemSpacing = 2;
  fileDetails.fills = [];

  const fileName = figma.createText();
  fileName.characters = 'document.pdf';
  fileName.fontSize = 14;
  fileName.fontName = { family: "Inter", style: "Medium" };
  fileDetails.appendChild(fileName);

  const fileSize = figma.createText();
  fileSize.characters = '2.4 MB';
  fileSize.fontSize = 12;
  fileSize.fontName = { family: "Inter", style: "Regular" };
  fileSize.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  fileDetails.appendChild(fileSize);

  fileInfo.appendChild(fileDetails);
  fileItem.appendChild(fileInfo);

  const removeBtn = figma.createText();
  removeBtn.characters = '×';
  removeBtn.fontSize = 20;
  removeBtn.fontName = { family: "Inter", style: "Regular" };
  removeBtn.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  fileItem.appendChild(removeBtn);

  fileItem.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(fileItem);
  finalizeFrame(frame);
  figma.notify('File upload generated!');
}

async function generateSearchInput(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Search Input');
  addTitle(frame, 'Search Input');
  addSubtitle(frame, 'Search field with autocomplete');

  // Search input
  const searchContainer = figma.createFrame();
  searchContainer.layoutMode = 'VERTICAL';
  searchContainer.itemSpacing = 0;
  searchContainer.fills = [];

  const searchInput = figma.createFrame();
  searchInput.layoutMode = 'HORIZONTAL';
  searchInput.itemSpacing = 12;
  searchInput.counterAxisAlignItems = 'CENTER';
  searchInput.paddingLeft = 16;
  searchInput.paddingRight = 16;
  searchInput.resize(320, 44);
  searchInput.cornerRadius = 8;
  searchInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  searchInput.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  searchInput.strokeWeight = 2;

  const searchIcon = figma.createText();
  searchIcon.characters = '🔍';
  searchIcon.fontSize = 16;
  searchInput.appendChild(searchIcon);

  const searchText = figma.createText();
  searchText.characters = 'Search components...';
  searchText.fontSize = 14;
  searchText.fontName = { family: "Inter", style: "Regular" };
  searchText.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  searchInput.appendChild(searchText);

  const shortcut = figma.createFrame();
  shortcut.layoutMode = 'HORIZONTAL';
  shortcut.paddingLeft = 8;
  shortcut.paddingRight = 8;
  shortcut.paddingTop = 4;
  shortcut.paddingBottom = 4;
  shortcut.cornerRadius = 4;
  shortcut.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

  const shortcutText = figma.createText();
  shortcutText.characters = '⌘K';
  shortcutText.fontSize = 12;
  shortcutText.fontName = { family: "Inter", style: "Medium" };
  shortcutText.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  shortcut.appendChild(shortcutText);
  shortcut.primaryAxisSizingMode = 'AUTO';
  shortcut.counterAxisSizingMode = 'AUTO';
  searchInput.appendChild(shortcut);

  searchContainer.appendChild(searchInput);

  // Autocomplete dropdown
  const dropdown = figma.createFrame();
  dropdown.layoutMode = 'VERTICAL';
  dropdown.resize(320, dropdown.height);
  dropdown.cornerRadius = 8;
  dropdown.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  dropdown.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 },
    radius: 12,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  const suggestions = ['Button Component', 'Badge Component', 'Breadcrumbs'];
  for (let i = 0; i < suggestions.length; i++) {
    const item = figma.createFrame();
    item.layoutMode = 'HORIZONTAL';
    item.itemSpacing = 12;
    item.counterAxisAlignItems = 'CENTER';
    item.paddingLeft = 16;
    item.paddingRight = 16;
    item.paddingTop = 12;
    item.paddingBottom = 12;
    item.resize(320, item.height);
    item.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['50'] : '#ffffff') }];

    const icon = figma.createText();
    icon.characters = '📦';
    icon.fontSize = 16;
    item.appendChild(icon);

    const text = figma.createText();
    text.characters = suggestions[i];
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: i === 0 ? "Medium" : "Regular" };
    text.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['700'] : '#374151') }];
    item.appendChild(text);

    item.primaryAxisSizingMode = 'AUTO';
    dropdown.appendChild(item);
  }
  dropdown.primaryAxisSizingMode = 'AUTO';
  searchContainer.appendChild(dropdown);

  frame.appendChild(searchContainer);
  finalizeFrame(frame);
  figma.notify('Search input generated!');
}

async function generateNotificationCenter(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Notification Center');
  addTitle(frame, 'Notification Center');
  addSubtitle(frame, 'Notification panel with groups');

  const panel = figma.createFrame();
  panel.layoutMode = 'VERTICAL';
  panel.itemSpacing = 0;
  panel.resize(360, panel.height);
  panel.cornerRadius = 12;
  panel.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  panel.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 },
    radius: 16,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  // Header
  const header = figma.createFrame();
  header.layoutMode = 'HORIZONTAL';
  header.primaryAxisAlignItems = 'SPACE_BETWEEN';
  header.counterAxisAlignItems = 'CENTER';
  header.paddingLeft = 20;
  header.paddingRight = 20;
  header.paddingTop = 16;
  header.paddingBottom = 16;
  header.resize(360, header.height);
  header.fills = [];

  const headerTitle = figma.createText();
  headerTitle.characters = 'Notifications';
  headerTitle.fontSize = 18;
  headerTitle.fontName = { family: "Inter", style: "Semi Bold" };
  header.appendChild(headerTitle);

  const markRead = figma.createText();
  markRead.characters = 'Mark all read';
  markRead.fontSize = 13;
  markRead.fontName = { family: "Inter", style: "Medium" };
  markRead.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['600']) }];
  header.appendChild(markRead);
  header.primaryAxisSizingMode = 'AUTO';
  panel.appendChild(header);

  // Divider
  const divider = figma.createRectangle();
  divider.resize(360, 1);
  divider.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  panel.appendChild(divider);

  // Notifications
  const notifications = [
    { icon: '🔔', title: 'New message', desc: 'John sent you a message', time: '2m ago', unread: true },
    { icon: '✅', title: 'Task completed', desc: 'Design review is done', time: '1h ago', unread: true },
    { icon: '📦', title: 'Order shipped', desc: 'Your order is on the way', time: '3h ago', unread: false }
  ];

  for (const n of notifications) {
    const item = figma.createFrame();
    item.layoutMode = 'HORIZONTAL';
    item.itemSpacing = 12;
    item.paddingLeft = 20;
    item.paddingRight = 20;
    item.paddingTop = 14;
    item.paddingBottom = 14;
    item.resize(360, item.height);
    item.fills = [{ type: 'SOLID', color: hexToRgb(n.unread ? tokens.colors.primary['50'] : '#ffffff') }];

    const icon = figma.createText();
    icon.characters = n.icon;
    icon.fontSize = 20;
    item.appendChild(icon);

    const content = figma.createFrame();
    content.layoutMode = 'VERTICAL';
    content.itemSpacing = 2;
    content.fills = [];

    const titleRow = figma.createFrame();
    titleRow.layoutMode = 'HORIZONTAL';
    titleRow.primaryAxisAlignItems = 'SPACE_BETWEEN';
    titleRow.resize(280, titleRow.height);
    titleRow.fills = [];

    const title = figma.createText();
    title.characters = n.title;
    title.fontSize = 14;
    title.fontName = { family: "Inter", style: "Semi Bold" };
    titleRow.appendChild(title);

    const time = figma.createText();
    time.characters = n.time;
    time.fontSize = 12;
    time.fontName = { family: "Inter", style: "Regular" };
    time.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
    titleRow.appendChild(time);
    titleRow.primaryAxisSizingMode = 'AUTO';
    content.appendChild(titleRow);

    const desc = figma.createText();
    desc.characters = n.desc;
    desc.fontSize = 13;
    desc.fontName = { family: "Inter", style: "Regular" };
    desc.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    content.appendChild(desc);

    item.appendChild(content);
    item.primaryAxisSizingMode = 'AUTO';
    panel.appendChild(item);
  }

  panel.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(panel);
  finalizeFrame(frame);
  figma.notify('Notification center generated!');
}

async function generateIconButtons(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Icon Buttons');
  addTitle(frame, 'Icon Buttons');
  addSubtitle(frame, 'Buttons with icons only');

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 12;
  row.fills = [];

  const icons = ['✎', '🗑', '❤', '⚙', '🔗', '📤'];
  const sizes = [32, 40, 48];

  for (const size of sizes) {
    const sizeGroup = figma.createFrame();
    sizeGroup.layoutMode = 'HORIZONTAL';
    sizeGroup.itemSpacing = 8;
    sizeGroup.fills = [];

    for (const icon of icons.slice(0, 3)) {
      const btn = figma.createFrame();
      btn.layoutMode = 'HORIZONTAL';
      btn.primaryAxisAlignItems = 'CENTER';
      btn.counterAxisAlignItems = 'CENTER';
      btn.resize(size, size);
      btn.cornerRadius = size / 2;
      btn.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

      const iconText = figma.createText();
      iconText.characters = icon;
      iconText.fontSize = size * 0.4;
      btn.appendChild(iconText);
      sizeGroup.appendChild(btn);
    }
    row.appendChild(sizeGroup);
  }

  frame.appendChild(row);

  // Colored icon buttons
  const coloredRow = figma.createFrame();
  coloredRow.layoutMode = 'HORIZONTAL';
  coloredRow.itemSpacing = 8;
  coloredRow.fills = [];

  const coloredBtns = [
    { icon: '❤', bg: tokens.colors.error['500'] },
    { icon: '✓', bg: tokens.colors.success['500'] },
    { icon: '!', bg: tokens.colors.warning['500'] },
    { icon: 'i', bg: tokens.colors.info['500'] }
  ];

  for (const btn of coloredBtns) {
    const iconBtn = figma.createFrame();
    iconBtn.layoutMode = 'HORIZONTAL';
    iconBtn.primaryAxisAlignItems = 'CENTER';
    iconBtn.counterAxisAlignItems = 'CENTER';
    iconBtn.resize(40, 40);
    iconBtn.cornerRadius = 20;
    iconBtn.fills = [{ type: 'SOLID', color: hexToRgb(btn.bg) }];

    const iconText = figma.createText();
    iconText.characters = btn.icon;
    iconText.fontSize = 16;
    iconText.fontName = { family: "Inter", style: "Bold" };
    iconText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    iconBtn.appendChild(iconText);
    coloredRow.appendChild(iconBtn);
  }

  frame.appendChild(coloredRow);
  finalizeFrame(frame);
  figma.notify('Icon buttons generated!');
}

async function generateLoadingButtons(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Loading Buttons');
  addTitle(frame, 'Loading Buttons');
  addSubtitle(frame, 'Buttons with loading state');

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.itemSpacing = 16;
  row.fills = [];

  const variants = [
    { label: 'Loading...', bg: tokens.colors.primary['500'], text: '#ffffff' },
    { label: 'Saving...', bg: '#f3f4f6', text: '#374151' },
    { label: 'Processing...', bg: tokens.colors.success['500'], text: '#ffffff' }
  ];

  for (const v of variants) {
    const btn = figma.createFrame();
    btn.layoutMode = 'HORIZONTAL';
    btn.itemSpacing = 8;
    btn.primaryAxisAlignItems = 'CENTER';
    btn.counterAxisAlignItems = 'CENTER';
    btn.paddingLeft = 20;
    btn.paddingRight = 20;
    btn.resize(btn.width, 44);
    btn.cornerRadius = 8;
    btn.fills = [{ type: 'SOLID', color: hexToRgb(v.bg) }];

    // Spinner
    const spinner = figma.createEllipse();
    spinner.resize(16, 16);
    spinner.fills = [];
    spinner.strokes = [{ type: 'SOLID', color: hexToRgb(v.text) }];
    spinner.strokeWeight = 2;
    spinner.arcData = { startingAngle: 0, endingAngle: 4.7, innerRadius: 0.6 };
    btn.appendChild(spinner);

    const text = figma.createText();
    text.characters = v.label;
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Medium" };
    text.fills = [{ type: 'SOLID', color: hexToRgb(v.text) }];
    btn.appendChild(text);

    btn.primaryAxisSizingMode = 'AUTO';
    row.appendChild(btn);
  }

  frame.appendChild(row);
  finalizeFrame(frame);
  figma.notify('Loading buttons generated!');
}

async function generateTextareas(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Textareas');
  addTitle(frame, 'Textareas');
  addSubtitle(frame, 'Multi-line text inputs');

  const states = [
    { name: 'Default', borderColor: '#d1d5db' },
    { name: 'Focus', borderColor: tokens.colors.primary['500'] },
    { name: 'Error', borderColor: tokens.colors.error['500'] }
  ];

  for (const state of states) {
    const container = figma.createFrame();
    container.layoutMode = 'VERTICAL';
    container.itemSpacing = 6;
    container.fills = [];

    const label = figma.createText();
    label.characters = state.name;
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Medium" };
    container.appendChild(label);

    const textarea = figma.createFrame();
    textarea.layoutMode = 'VERTICAL';
    textarea.paddingLeft = 12;
    textarea.paddingRight = 12;
    textarea.paddingTop = 12;
    textarea.paddingBottom = 12;
    textarea.resize(320, 100);
    textarea.cornerRadius = 8;
    textarea.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    textarea.strokes = [{ type: 'SOLID', color: hexToRgb(state.borderColor) }];
    textarea.strokeWeight = state.name === 'Focus' ? 2 : 1;

    const placeholder = figma.createText();
    placeholder.characters = 'Enter your message here...';
    placeholder.fontSize = 14;
    placeholder.fontName = { family: "Inter", style: "Regular" };
    placeholder.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    textarea.appendChild(placeholder);

    container.appendChild(textarea);

    if (state.name === 'Error') {
      const error = figma.createText();
      error.characters = 'This field is required';
      error.fontSize = 12;
      error.fontName = { family: "Inter", style: "Regular" };
      error.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.error['500']) }];
      container.appendChild(error);
    }

    frame.appendChild(container);
  }

  finalizeFrame(frame);
  figma.notify('Textareas generated!');
}

async function generateAvatarGroups(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Avatar Groups');
  addTitle(frame, 'Avatar Groups');
  addSubtitle(frame, 'Stacked avatar displays');

  const group = figma.createFrame();
  group.layoutMode = 'HORIZONTAL';
  group.itemSpacing = -12;
  group.fills = [];

  const colors = [
    tokens.colors.primary['500'],
    tokens.colors.secondary['500'],
    tokens.colors.success['500'],
    tokens.colors.warning['500']
  ];
  const initials = ['JD', 'AS', 'MK', 'BW'];

  for (let i = 0; i < 4; i++) {
    const avatar = figma.createFrame();
    avatar.resize(40, 40);
    avatar.cornerRadius = 20;
    avatar.fills = [{ type: 'SOLID', color: hexToRgb(colors[i]) }];
    avatar.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    avatar.strokeWeight = 2;

    const init = figma.createText();
    init.characters = initials[i];
    init.fontSize = 14;
    init.fontName = { family: "Inter", style: "Semi Bold" };
    init.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    init.x = 9;
    init.y = 10;
    avatar.appendChild(init);
    group.appendChild(avatar);
  }

  // +N indicator
  const more = figma.createFrame();
  more.resize(40, 40);
  more.cornerRadius = 20;
  more.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  more.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  more.strokeWeight = 2;

  const moreText = figma.createText();
  moreText.characters = '+5';
  moreText.fontSize = 12;
  moreText.fontName = { family: "Inter", style: "Semi Bold" };
  moreText.fills = [{ type: 'SOLID', color: hexToRgb('#6b7280') }];
  moreText.x = 9;
  moreText.y = 12;
  more.appendChild(moreText);
  group.appendChild(more);

  frame.appendChild(group);
  finalizeFrame(frame);
  figma.notify('Avatar groups generated!');
}

async function generateDividers(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Dividers');
  addTitle(frame, 'Dividers');
  addSubtitle(frame, 'Content separators');

  // Simple divider
  const simpleDivider = figma.createRectangle();
  simpleDivider.resize(400, 1);
  simpleDivider.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  frame.appendChild(simpleDivider);

  // Divider with text
  const textDivider = figma.createFrame();
  textDivider.layoutMode = 'HORIZONTAL';
  textDivider.itemSpacing = 16;
  textDivider.counterAxisAlignItems = 'CENTER';
  textDivider.fills = [];

  const line1 = figma.createRectangle();
  line1.resize(170, 1);
  line1.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  textDivider.appendChild(line1);

  const orText = figma.createText();
  orText.characters = 'or';
  orText.fontSize = 14;
  orText.fontName = { family: "Inter", style: "Medium" };
  orText.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  textDivider.appendChild(orText);

  const line2 = figma.createRectangle();
  line2.resize(170, 1);
  line2.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  textDivider.appendChild(line2);

  frame.appendChild(textDivider);

  // Dashed divider
  const dashedDivider = figma.createRectangle();
  dashedDivider.resize(400, 1);
  dashedDivider.fills = [];
  dashedDivider.strokes = [{ type: 'SOLID', color: hexToRgb('#d1d5db') }];
  dashedDivider.strokeWeight = 1;
  dashedDivider.dashPattern = [6, 4];
  frame.appendChild(dashedDivider);

  finalizeFrame(frame);
  figma.notify('Dividers generated!');
}

// ============ MISSING COMPONENTS FROM UI LIBRARY ============

async function generateBottomNavigation(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Bottom Navigation');
  addTitle(frame, 'Bottom Navigation');
  addSubtitle(frame, 'Mobile bottom nav bar');

  const nav = figma.createFrame();
  nav.layoutMode = 'HORIZONTAL';
  nav.primaryAxisAlignItems = 'SPACE_BETWEEN';
  nav.paddingTop = 12;
  nav.paddingBottom = 12;
  nav.paddingLeft = 24;
  nav.paddingRight = 24;
  nav.resize(375, nav.height);
  nav.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  nav.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: -2 },
    radius: 8,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL'
  }];

  const items = [
    { icon: '🏠', label: 'Home', active: true },
    { icon: '🔍', label: 'Search', active: false },
    { icon: '➕', label: 'Add', active: false },
    { icon: '❤️', label: 'Favorites', active: false },
    { icon: '👤', label: 'Profile', active: false }
  ];

  for (const item of items) {
    const navItem = figma.createFrame();
    navItem.layoutMode = 'VERTICAL';
    navItem.primaryAxisAlignItems = 'CENTER';
    navItem.counterAxisAlignItems = 'CENTER';
    navItem.itemSpacing = 4;
    navItem.fills = [];

    const icon = figma.createText();
    icon.characters = item.icon;
    icon.fontSize = 20;
    navItem.appendChild(icon);

    const label = figma.createText();
    label.characters = item.label;
    label.fontSize = 10;
    label.fontName = { family: "Inter", style: item.active ? "Semi Bold" : "Regular" };
    label.fills = [{ type: 'SOLID', color: hexToRgb(item.active ? tokens.colors.primary['600'] : '#6b7280') }];
    navItem.appendChild(label);
    nav.appendChild(navItem);
  }

  nav.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(nav);
  finalizeFrame(frame);
  figma.notify('Bottom navigation generated!');
}

async function generateCarousel(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Carousel');
  addTitle(frame, 'Carousel');
  addSubtitle(frame, 'Image/content slider');

  const carousel = figma.createFrame();
  carousel.layoutMode = 'VERTICAL';
  carousel.itemSpacing = 16;
  carousel.fills = [];

  // Main slide area
  const slideArea = figma.createFrame();
  slideArea.layoutMode = 'HORIZONTAL';
  slideArea.counterAxisAlignItems = 'CENTER';
  slideArea.resize(480, 280);
  slideArea.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];
  slideArea.cornerRadius = 12;

  // Left arrow
  const leftArrow = figma.createFrame();
  leftArrow.layoutMode = 'HORIZONTAL';
  leftArrow.primaryAxisAlignItems = 'CENTER';
  leftArrow.counterAxisAlignItems = 'CENTER';
  leftArrow.resize(40, 40);
  leftArrow.cornerRadius = 20;
  leftArrow.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  leftArrow.x = 16;
  leftArrow.y = 120;
  leftArrow.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 2 }, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  const leftText = figma.createText();
  leftText.characters = '←';
  leftText.fontSize = 18;
  leftText.fontName = { family: "Inter", style: "Medium" };
  leftArrow.appendChild(leftText);
  slideArea.appendChild(leftArrow);

  // Slide content
  const slideContent = figma.createFrame();
  slideContent.layoutMode = 'VERTICAL';
  slideContent.primaryAxisAlignItems = 'CENTER';
  slideContent.counterAxisAlignItems = 'CENTER';
  slideContent.resize(400, 200);
  slideContent.x = 40;
  slideContent.y = 40;
  slideContent.fills = [];

  const slideTitle = figma.createText();
  slideTitle.characters = 'Slide 1 of 4';
  slideTitle.fontSize = 24;
  slideTitle.fontName = { family: "Inter", style: "Bold" };
  slideContent.appendChild(slideTitle);

  const slideDesc = figma.createText();
  slideDesc.characters = 'Carousel slide content goes here';
  slideDesc.fontSize = 14;
  slideDesc.fontName = { family: "Inter", style: "Regular" };
  slideDesc.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  slideContent.appendChild(slideDesc);
  slideArea.appendChild(slideContent);

  // Right arrow
  const rightArrow = figma.createFrame();
  rightArrow.layoutMode = 'HORIZONTAL';
  rightArrow.primaryAxisAlignItems = 'CENTER';
  rightArrow.counterAxisAlignItems = 'CENTER';
  rightArrow.resize(40, 40);
  rightArrow.cornerRadius = 20;
  rightArrow.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  rightArrow.x = 424;
  rightArrow.y = 120;
  rightArrow.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 2 }, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  const rightText = figma.createText();
  rightText.characters = '→';
  rightText.fontSize = 18;
  rightText.fontName = { family: "Inter", style: "Medium" };
  rightArrow.appendChild(rightText);
  slideArea.appendChild(rightArrow);

  carousel.appendChild(slideArea);

  // Dots
  const dots = figma.createFrame();
  dots.layoutMode = 'HORIZONTAL';
  dots.primaryAxisAlignItems = 'CENTER';
  dots.itemSpacing = 8;
  dots.resize(480, dots.height);
  dots.fills = [];

  for (let i = 0; i < 4; i++) {
    const dot = figma.createEllipse();
    dot.resize(i === 0 ? 24 : 8, 8);
    if (i === 0) {
      dot.cornerRadius = 4;
    }
    dot.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['500'] : '#d1d5db') }];
    dots.appendChild(dot);
  }
  dots.primaryAxisSizingMode = 'AUTO';
  carousel.appendChild(dots);

  frame.appendChild(carousel);
  finalizeFrame(frame);
  figma.notify('Carousel generated!');
}

async function generateCodeBlock(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Code Block');
  addTitle(frame, 'Code Block');
  addSubtitle(frame, 'Syntax highlighted code display');

  const codeBlock = figma.createFrame();
  codeBlock.layoutMode = 'VERTICAL';
  codeBlock.resize(480, codeBlock.height);
  codeBlock.cornerRadius = 8;
  codeBlock.fills = [{ type: 'SOLID', color: hexToRgb('#1e1e2e') }];

  // Header
  const header = figma.createFrame();
  header.layoutMode = 'HORIZONTAL';
  header.primaryAxisAlignItems = 'SPACE_BETWEEN';
  header.counterAxisAlignItems = 'CENTER';
  header.paddingLeft = 16;
  header.paddingRight = 16;
  header.paddingTop = 12;
  header.paddingBottom = 12;
  header.resize(480, header.height);
  header.fills = [{ type: 'SOLID', color: hexToRgb('#2d2d3f') }];

  const filename = figma.createText();
  filename.characters = 'example.tsx';
  filename.fontSize = 12;
  filename.fontName = { family: "Inter", style: "Medium" };
  filename.fills = [{ type: 'SOLID', color: { r: 0.7, g: 0.7, b: 0.7 } }];
  header.appendChild(filename);

  const copyBtn = figma.createText();
  copyBtn.characters = '📋 Copy';
  copyBtn.fontSize = 12;
  copyBtn.fontName = { family: "Inter", style: "Medium" };
  copyBtn.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['400']) }];
  header.appendChild(copyBtn);
  header.primaryAxisSizingMode = 'AUTO';
  codeBlock.appendChild(header);

  // Code content
  const code = figma.createFrame();
  code.layoutMode = 'VERTICAL';
  code.itemSpacing = 4;
  code.paddingLeft = 16;
  code.paddingRight = 16;
  code.paddingTop = 16;
  code.paddingBottom = 16;
  code.resize(480, code.height);
  code.fills = [];

  const lines = [
    { text: 'import { Button } from "aural-ui";', color: '#c792ea' },
    { text: '', color: '#ffffff' },
    { text: 'function App() {', color: '#82aaff' },
    { text: '  return (', color: '#ffffff' },
    { text: '    <Button variant="primary">', color: '#89ddff' },
    { text: '      Click me', color: '#c3e88d' },
    { text: '    </Button>', color: '#89ddff' },
    { text: '  );', color: '#ffffff' },
    { text: '}', color: '#82aaff' }
  ];

  for (const line of lines) {
    const codeLine = figma.createText();
    codeLine.characters = line.text || ' ';
    codeLine.fontSize = 13;
    codeLine.fontName = { family: "Inter", style: "Regular" };
    codeLine.fills = [{ type: 'SOLID', color: hexToRgb(line.color) }];
    code.appendChild(codeLine);
  }

  code.primaryAxisSizingMode = 'AUTO';
  codeBlock.appendChild(code);
  codeBlock.primaryAxisSizingMode = 'AUTO';

  frame.appendChild(codeBlock);
  finalizeFrame(frame);
  figma.notify('Code block generated!');
}

async function generateColorPicker(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Color Picker');
  addTitle(frame, 'Color Picker');
  addSubtitle(frame, 'Color selection component');

  const picker = figma.createFrame();
  picker.layoutMode = 'VERTICAL';
  picker.itemSpacing = 12;
  picker.paddingTop = 16;
  picker.paddingBottom = 16;
  picker.paddingLeft = 16;
  picker.paddingRight = 16;
  picker.cornerRadius = 12;
  picker.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  picker.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 }, radius: 12, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  // Color gradient area
  const gradientArea = figma.createFrame();
  gradientArea.resize(220, 140);
  gradientArea.cornerRadius = 8;
  gradientArea.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  picker.appendChild(gradientArea);

  // Hue slider
  const hueSlider = figma.createFrame();
  hueSlider.resize(220, 16);
  hueSlider.cornerRadius = 8;
  hueSlider.fills = [{
    type: 'GRADIENT_LINEAR',
    gradientStops: [
      { position: 0, color: { r: 1, g: 0, b: 0, a: 1 } },
      { position: 0.17, color: { r: 1, g: 1, b: 0, a: 1 } },
      { position: 0.33, color: { r: 0, g: 1, b: 0, a: 1 } },
      { position: 0.5, color: { r: 0, g: 1, b: 1, a: 1 } },
      { position: 0.67, color: { r: 0, g: 0, b: 1, a: 1 } },
      { position: 0.83, color: { r: 1, g: 0, b: 1, a: 1 } },
      { position: 1, color: { r: 1, g: 0, b: 0, a: 1 } }
    ],
    gradientTransform: [[1, 0, 0], [0, 1, 0]]
  }];
  picker.appendChild(hueSlider);

  // Color value input
  const inputRow = figma.createFrame();
  inputRow.layoutMode = 'HORIZONTAL';
  inputRow.itemSpacing = 8;
  inputRow.fills = [];

  const colorPreview = figma.createFrame();
  colorPreview.resize(40, 40);
  colorPreview.cornerRadius = 8;
  colorPreview.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  inputRow.appendChild(colorPreview);

  const hexInput = figma.createFrame();
  hexInput.layoutMode = 'HORIZONTAL';
  hexInput.counterAxisAlignItems = 'CENTER';
  hexInput.paddingLeft = 12;
  hexInput.paddingRight = 12;
  hexInput.resize(172, 40);
  hexInput.cornerRadius = 6;
  hexInput.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

  const hexText = figma.createText();
  hexText.characters = '#5EBD8F';
  hexText.fontSize = 14;
  hexText.fontName = { family: "Inter", style: "Medium" };
  hexInput.appendChild(hexText);
  inputRow.appendChild(hexInput);

  picker.appendChild(inputRow);
  frame.appendChild(picker);
  finalizeFrame(frame);
  figma.notify('Color picker generated!');
}

async function generateCombobox(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Combobox');
  addTitle(frame, 'Combobox');
  addSubtitle(frame, 'Searchable select dropdown');

  const container = figma.createFrame();
  container.layoutMode = 'VERTICAL';
  container.itemSpacing = 0;
  container.fills = [];

  // Input
  const input = figma.createFrame();
  input.layoutMode = 'HORIZONTAL';
  input.primaryAxisAlignItems = 'SPACE_BETWEEN';
  input.counterAxisAlignItems = 'CENTER';
  input.paddingLeft = 12;
  input.paddingRight = 12;
  input.resize(280, 44);
  input.cornerRadius = 8;
  input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  input.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  input.strokeWeight = 2;

  const inputText = figma.createText();
  inputText.characters = 'React';
  inputText.fontSize = 14;
  inputText.fontName = { family: "Inter", style: "Regular" };
  input.appendChild(inputText);

  const arrow = figma.createText();
  arrow.characters = '▼';
  arrow.fontSize = 10;
  arrow.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  input.appendChild(arrow);

  container.appendChild(input);

  // Dropdown
  const dropdown = figma.createFrame();
  dropdown.layoutMode = 'VERTICAL';
  dropdown.resize(280, dropdown.height);
  dropdown.cornerRadius = 8;
  dropdown.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  dropdown.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 }, radius: 12, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  const options = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];
  for (let i = 0; i < options.length; i++) {
    const option = figma.createFrame();
    option.layoutMode = 'HORIZONTAL';
    option.counterAxisAlignItems = 'CENTER';
    option.paddingLeft = 12;
    option.paddingRight = 12;
    option.paddingTop = 10;
    option.paddingBottom = 10;
    option.resize(280, option.height);
    option.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['50'] : '#ffffff') }];

    if (i === 0) {
      const check = figma.createText();
      check.characters = '✓ ';
      check.fontSize = 14;
      check.fontName = { family: "Inter", style: "Bold" };
      check.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['600']) }];
      option.appendChild(check);
    }

    const optText = figma.createText();
    optText.characters = options[i];
    optText.fontSize = 14;
    optText.fontName = { family: "Inter", style: i === 0 ? "Medium" : "Regular" };
    optText.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['700'] : '#374151') }];
    option.appendChild(optText);
    option.primaryAxisSizingMode = 'AUTO';
    dropdown.appendChild(option);
  }
  dropdown.primaryAxisSizingMode = 'AUTO';
  container.appendChild(dropdown);

  frame.appendChild(container);
  finalizeFrame(frame);
  figma.notify('Combobox generated!');
}

async function generateCommandPalette(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Command Palette');
  addTitle(frame, 'Command Palette');
  addSubtitle(frame, 'Quick action search (⌘K)');

  const palette = figma.createFrame();
  palette.layoutMode = 'VERTICAL';
  palette.resize(480, palette.height);
  palette.cornerRadius = 12;
  palette.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  palette.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 },
    offset: { x: 0, y: 25 }, radius: 50, spread: -12, visible: true, blendMode: 'NORMAL'
  }];

  // Search input
  const searchBar = figma.createFrame();
  searchBar.layoutMode = 'HORIZONTAL';
  searchBar.itemSpacing = 12;
  searchBar.counterAxisAlignItems = 'CENTER';
  searchBar.paddingLeft = 16;
  searchBar.paddingRight = 16;
  searchBar.paddingTop = 16;
  searchBar.paddingBottom = 16;
  searchBar.resize(480, searchBar.height);
  searchBar.fills = [];

  const searchIcon = figma.createText();
  searchIcon.characters = '🔍';
  searchIcon.fontSize = 18;
  searchBar.appendChild(searchIcon);

  const searchText = figma.createText();
  searchText.characters = 'Type a command or search...';
  searchText.fontSize = 16;
  searchText.fontName = { family: "Inter", style: "Regular" };
  searchText.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  searchBar.appendChild(searchText);

  searchBar.primaryAxisSizingMode = 'AUTO';
  palette.appendChild(searchBar);

  // Divider
  const divider = figma.createRectangle();
  divider.resize(480, 1);
  divider.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  palette.appendChild(divider);

  // Commands
  const commands = [
    { icon: '📄', label: 'New File', shortcut: '⌘N' },
    { icon: '📁', label: 'Open Folder', shortcut: '⌘O' },
    { icon: '💾', label: 'Save', shortcut: '⌘S' },
    { icon: '⚙️', label: 'Settings', shortcut: '⌘,' }
  ];

  for (let i = 0; i < commands.length; i++) {
    const cmd = figma.createFrame();
    cmd.layoutMode = 'HORIZONTAL';
    cmd.primaryAxisAlignItems = 'SPACE_BETWEEN';
    cmd.counterAxisAlignItems = 'CENTER';
    cmd.paddingLeft = 16;
    cmd.paddingRight = 16;
    cmd.paddingTop = 12;
    cmd.paddingBottom = 12;
    cmd.resize(480, cmd.height);
    cmd.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['50'] : '#ffffff') }];

    const left = figma.createFrame();
    left.layoutMode = 'HORIZONTAL';
    left.itemSpacing = 12;
    left.fills = [];

    const icon = figma.createText();
    icon.characters = commands[i].icon;
    icon.fontSize = 16;
    left.appendChild(icon);

    const label = figma.createText();
    label.characters = commands[i].label;
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Medium" };
    left.appendChild(label);
    cmd.appendChild(left);

    const shortcut = figma.createFrame();
    shortcut.layoutMode = 'HORIZONTAL';
    shortcut.paddingLeft = 8;
    shortcut.paddingRight = 8;
    shortcut.paddingTop = 4;
    shortcut.paddingBottom = 4;
    shortcut.cornerRadius = 4;
    shortcut.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

    const shortcutText = figma.createText();
    shortcutText.characters = commands[i].shortcut;
    shortcutText.fontSize = 12;
    shortcutText.fontName = { family: "Inter", style: "Medium" };
    shortcutText.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
    shortcut.appendChild(shortcutText);
    shortcut.primaryAxisSizingMode = 'AUTO';
    shortcut.counterAxisSizingMode = 'AUTO';
    cmd.appendChild(shortcut);

    cmd.primaryAxisSizingMode = 'AUTO';
    palette.appendChild(cmd);
  }

  palette.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(palette);
  finalizeFrame(frame);
  figma.notify('Command palette generated!');
}

async function generateContextMenu(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Context Menu');
  addTitle(frame, 'Context Menu');
  addSubtitle(frame, 'Right-click menu');

  const menu = figma.createFrame();
  menu.layoutMode = 'VERTICAL';
  menu.resize(200, menu.height);
  menu.cornerRadius = 8;
  menu.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  menu.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 }, radius: 12, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  const items = [
    { icon: '↩️', label: 'Undo', shortcut: '⌘Z' },
    { icon: '↪️', label: 'Redo', shortcut: '⇧⌘Z' },
    { divider: true },
    { icon: '✂️', label: 'Cut', shortcut: '⌘X' },
    { icon: '📋', label: 'Copy', shortcut: '⌘C' },
    { icon: '📝', label: 'Paste', shortcut: '⌘V' },
    { divider: true },
    { icon: '🗑️', label: 'Delete', danger: true }
  ];

  for (const item of items) {
    if (item.divider) {
      const div = figma.createRectangle();
      div.resize(200, 1);
      div.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
      menu.appendChild(div);
      continue;
    }

    const menuItem = figma.createFrame();
    menuItem.layoutMode = 'HORIZONTAL';
    menuItem.primaryAxisAlignItems = 'SPACE_BETWEEN';
    menuItem.counterAxisAlignItems = 'CENTER';
    menuItem.paddingLeft = 12;
    menuItem.paddingRight = 12;
    menuItem.paddingTop = 8;
    menuItem.paddingBottom = 8;
    menuItem.resize(200, menuItem.height);
    menuItem.fills = [];

    const left = figma.createFrame();
    left.layoutMode = 'HORIZONTAL';
    left.itemSpacing = 8;
    left.fills = [];

    const icon = figma.createText();
    icon.characters = item.icon!;
    icon.fontSize = 14;
    left.appendChild(icon);

    const label = figma.createText();
    label.characters = item.label!;
    label.fontSize = 13;
    label.fontName = { family: "Inter", style: "Medium" };
    label.fills = [{ type: 'SOLID', color: hexToRgb(item.danger ? tokens.colors.error['600'] : '#374151') }];
    left.appendChild(label);
    menuItem.appendChild(left);

    if (item.shortcut) {
      const shortcut = figma.createText();
      shortcut.characters = item.shortcut;
      shortcut.fontSize = 11;
      shortcut.fontName = { family: "Inter", style: "Regular" };
      shortcut.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
      menuItem.appendChild(shortcut);
    }

    menuItem.primaryAxisSizingMode = 'AUTO';
    menu.appendChild(menuItem);
  }

  menu.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(menu);
  finalizeFrame(frame);
  figma.notify('Context menu generated!');
}

async function generateDialog(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Dialog', '#6b7280');
  addTitle(frame, 'Dialog');
  frame.children[0].fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

  const dialog = figma.createFrame();
  dialog.layoutMode = 'VERTICAL';
  dialog.itemSpacing = 20;
  dialog.paddingTop = 24;
  dialog.paddingBottom = 24;
  dialog.paddingLeft = 24;
  dialog.paddingRight = 24;
  dialog.resize(380, dialog.height);
  dialog.cornerRadius = 16;
  dialog.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  dialog.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 },
    offset: { x: 0, y: 25 }, radius: 50, spread: -12, visible: true, blendMode: 'NORMAL'
  }];

  // Icon
  const iconContainer = figma.createFrame();
  iconContainer.layoutMode = 'HORIZONTAL';
  iconContainer.primaryAxisAlignItems = 'CENTER';
  iconContainer.counterAxisAlignItems = 'CENTER';
  iconContainer.resize(56, 56);
  iconContainer.cornerRadius = 28;
  iconContainer.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.warning['100']) }];

  const icon = figma.createText();
  icon.characters = '⚠️';
  icon.fontSize = 28;
  iconContainer.appendChild(icon);
  dialog.appendChild(iconContainer);

  // Title
  const title = figma.createText();
  title.characters = 'Delete Item?';
  title.fontSize = 20;
  title.fontName = { family: "Inter", style: "Bold" };
  dialog.appendChild(title);

  // Description
  const desc = figma.createText();
  desc.characters = 'This action cannot be undone. Are you sure you want to permanently delete this item?';
  desc.fontSize = 14;
  desc.fontName = { family: "Inter", style: "Regular" };
  desc.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
  desc.resize(332, desc.height);
  desc.textAutoResize = 'HEIGHT';
  dialog.appendChild(desc);

  // Buttons
  const buttons = figma.createFrame();
  buttons.layoutMode = 'HORIZONTAL';
  buttons.itemSpacing = 12;
  buttons.fills = [];

  const cancelBtn = figma.createFrame();
  cancelBtn.layoutMode = 'HORIZONTAL';
  cancelBtn.primaryAxisAlignItems = 'CENTER';
  cancelBtn.counterAxisAlignItems = 'CENTER';
  cancelBtn.paddingLeft = 24;
  cancelBtn.paddingRight = 24;
  cancelBtn.resize(cancelBtn.width, 44);
  cancelBtn.cornerRadius = 8;
  cancelBtn.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

  const cancelText = figma.createText();
  cancelText.characters = 'Cancel';
  cancelText.fontSize = 14;
  cancelText.fontName = { family: "Inter", style: "Medium" };
  cancelBtn.appendChild(cancelText);
  cancelBtn.primaryAxisSizingMode = 'AUTO';
  buttons.appendChild(cancelBtn);

  const deleteBtn = figma.createFrame();
  deleteBtn.layoutMode = 'HORIZONTAL';
  deleteBtn.primaryAxisAlignItems = 'CENTER';
  deleteBtn.counterAxisAlignItems = 'CENTER';
  deleteBtn.paddingLeft = 24;
  deleteBtn.paddingRight = 24;
  deleteBtn.resize(deleteBtn.width, 44);
  deleteBtn.cornerRadius = 8;
  deleteBtn.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.error['500']) }];

  const deleteText = figma.createText();
  deleteText.characters = 'Delete';
  deleteText.fontSize = 14;
  deleteText.fontName = { family: "Inter", style: "Medium" };
  deleteText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  deleteBtn.appendChild(deleteText);
  deleteBtn.primaryAxisSizingMode = 'AUTO';
  buttons.appendChild(deleteBtn);

  dialog.appendChild(buttons);
  dialog.primaryAxisSizingMode = 'AUTO';

  frame.appendChild(dialog);
  finalizeFrame(frame);
  figma.notify('Dialog generated!');
}

async function generateEmptyState(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Empty State');
  addTitle(frame, 'Empty State');
  addSubtitle(frame, 'No data placeholder');

  const emptyState = figma.createFrame();
  emptyState.layoutMode = 'VERTICAL';
  emptyState.primaryAxisAlignItems = 'CENTER';
  emptyState.counterAxisAlignItems = 'CENTER';
  emptyState.itemSpacing = 16;
  emptyState.paddingTop = 48;
  emptyState.paddingBottom = 48;
  emptyState.paddingLeft = 32;
  emptyState.paddingRight = 32;
  emptyState.resize(400, emptyState.height);
  emptyState.fills = [{ type: 'SOLID', color: hexToRgb('#fafafa') }];
  emptyState.cornerRadius = 12;

  const icon = figma.createText();
  icon.characters = '📭';
  icon.fontSize = 64;
  emptyState.appendChild(icon);

  const title = figma.createText();
  title.characters = 'No items yet';
  title.fontSize = 20;
  title.fontName = { family: "Inter", style: "Semi Bold" };
  emptyState.appendChild(title);

  const desc = figma.createText();
  desc.characters = 'Get started by creating your first item.\nIt only takes a few seconds.';
  desc.fontSize = 14;
  desc.fontName = { family: "Inter", style: "Regular" };
  desc.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  desc.textAlignHorizontal = 'CENTER';
  emptyState.appendChild(desc);

  const btn = figma.createFrame();
  btn.layoutMode = 'HORIZONTAL';
  btn.itemSpacing = 8;
  btn.primaryAxisAlignItems = 'CENTER';
  btn.counterAxisAlignItems = 'CENTER';
  btn.paddingLeft = 20;
  btn.paddingRight = 20;
  btn.resize(btn.width, 44);
  btn.cornerRadius = 8;
  btn.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];

  const btnIcon = figma.createText();
  btnIcon.characters = '+';
  btnIcon.fontSize = 18;
  btnIcon.fontName = { family: "Inter", style: "Bold" };
  btnIcon.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  btn.appendChild(btnIcon);

  const btnText = figma.createText();
  btnText.characters = 'Create Item';
  btnText.fontSize = 14;
  btnText.fontName = { family: "Inter", style: "Medium" };
  btnText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  btn.appendChild(btnText);
  btn.primaryAxisSizingMode = 'AUTO';
  emptyState.appendChild(btn);

  emptyState.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(emptyState);
  finalizeFrame(frame);
  figma.notify('Empty state generated!');
}

async function generateImageGallery(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Image Gallery');
  addTitle(frame, 'Image Gallery');
  addSubtitle(frame, 'Grid of images');

  const gallery = figma.createFrame();
  gallery.layoutMode = 'HORIZONTAL';
  gallery.layoutWrap = 'WRAP';
  gallery.itemSpacing = 8;
  gallery.counterAxisSpacing = 8;
  gallery.resize(400, gallery.height);
  gallery.fills = [];

  for (let i = 0; i < 6; i++) {
    const img = figma.createFrame();
    img.resize(124, 124);
    img.cornerRadius = 8;
    img.fills = [{ type: 'SOLID', color: hexToRgb(['#e0f2fe', '#fce7f3', '#d1fae5', '#fef3c7', '#e0e7ff', '#f3e8ff'][i]) }];

    const icon = figma.createText();
    icon.characters = ['🖼️', '🌅', '🏔️', '🌊', '🌺', '🌳'][i];
    icon.fontSize = 32;
    icon.x = 46;
    icon.y = 46;
    img.appendChild(icon);
    gallery.appendChild(img);
  }

  gallery.primaryAxisSizingMode = 'AUTO';
  frame.appendChild(gallery);
  finalizeFrame(frame);
  figma.notify('Image gallery generated!');
}

async function generateMultiSelect(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Multi Select');
  addTitle(frame, 'Multi Select');
  addSubtitle(frame, 'Multiple selection dropdown');

  const container = figma.createFrame();
  container.layoutMode = 'VERTICAL';
  container.itemSpacing = 0;
  container.fills = [];

  // Input with chips
  const input = figma.createFrame();
  input.layoutMode = 'HORIZONTAL';
  input.layoutWrap = 'WRAP';
  input.itemSpacing = 6;
  input.counterAxisSpacing = 6;
  input.counterAxisAlignItems = 'CENTER';
  input.paddingLeft = 8;
  input.paddingRight = 8;
  input.paddingTop = 8;
  input.paddingBottom = 8;
  input.resize(320, input.height);
  input.cornerRadius = 8;
  input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  input.strokes = [{ type: 'SOLID', color: hexToRgb('#d1d5db') }];
  input.strokeWeight = 1;

  const selected = ['React', 'Vue'];
  for (const item of selected) {
    const chip = figma.createFrame();
    chip.layoutMode = 'HORIZONTAL';
    chip.itemSpacing = 4;
    chip.paddingLeft = 8;
    chip.paddingRight = 6;
    chip.paddingTop = 4;
    chip.paddingBottom = 4;
    chip.cornerRadius = 4;
    chip.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['100']) }];

    const chipText = figma.createText();
    chipText.characters = item;
    chipText.fontSize = 12;
    chipText.fontName = { family: "Inter", style: "Medium" };
    chipText.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['700']) }];
    chip.appendChild(chipText);

    const close = figma.createText();
    close.characters = '×';
    close.fontSize = 14;
    close.fontName = { family: "Inter", style: "Medium" };
    close.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
    chip.appendChild(close);

    chip.primaryAxisSizingMode = 'AUTO';
    chip.counterAxisSizingMode = 'AUTO';
    input.appendChild(chip);
  }

  input.primaryAxisSizingMode = 'AUTO';
  container.appendChild(input);

  frame.appendChild(container);
  finalizeFrame(frame);
  figma.notify('Multi select generated!');
}

async function generateNavbar(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Navbar');
  addTitle(frame, 'Navbar');
  addSubtitle(frame, 'Top navigation bar');

  const navbar = figma.createFrame();
  navbar.layoutMode = 'HORIZONTAL';
  navbar.primaryAxisAlignItems = 'SPACE_BETWEEN';
  navbar.counterAxisAlignItems = 'CENTER';
  navbar.paddingLeft = 24;
  navbar.paddingRight = 24;
  navbar.resize(800, 64);
  navbar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  navbar.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.05 },
    offset: { x: 0, y: 1 }, radius: 3, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  // Logo
  const logo = figma.createFrame();
  logo.layoutMode = 'HORIZONTAL';
  logo.itemSpacing = 8;
  logo.counterAxisAlignItems = 'CENTER';
  logo.fills = [];

  const logoIcon = figma.createFrame();
  logoIcon.resize(32, 32);
  logoIcon.cornerRadius = 8;
  logoIcon.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  logo.appendChild(logoIcon);

  const logoText = figma.createText();
  logoText.characters = 'Aural UI';
  logoText.fontSize = 18;
  logoText.fontName = { family: "Inter", style: "Bold" };
  logo.appendChild(logoText);
  navbar.appendChild(logo);

  // Nav links
  const navLinks = figma.createFrame();
  navLinks.layoutMode = 'HORIZONTAL';
  navLinks.itemSpacing = 32;
  navLinks.fills = [];

  const links = ['Home', 'Features', 'Pricing', 'About'];
  for (let i = 0; i < links.length; i++) {
    const link = figma.createText();
    link.characters = links[i];
    link.fontSize = 14;
    link.fontName = { family: "Inter", style: i === 0 ? "Semi Bold" : "Medium" };
    link.fills = [{ type: 'SOLID', color: hexToRgb(i === 0 ? tokens.colors.primary['600'] : '#6b7280') }];
    navLinks.appendChild(link);
  }
  navbar.appendChild(navLinks);

  // Actions
  const actions = figma.createFrame();
  actions.layoutMode = 'HORIZONTAL';
  actions.itemSpacing = 12;
  actions.fills = [];

  const loginBtn = figma.createText();
  loginBtn.characters = 'Log in';
  loginBtn.fontSize = 14;
  loginBtn.fontName = { family: "Inter", style: "Medium" };
  actions.appendChild(loginBtn);

  const signupBtn = figma.createFrame();
  signupBtn.layoutMode = 'HORIZONTAL';
  signupBtn.primaryAxisAlignItems = 'CENTER';
  signupBtn.counterAxisAlignItems = 'CENTER';
  signupBtn.paddingLeft = 16;
  signupBtn.paddingRight = 16;
  signupBtn.resize(signupBtn.width, 36);
  signupBtn.cornerRadius = 6;
  signupBtn.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];

  const signupText = figma.createText();
  signupText.characters = 'Sign up';
  signupText.fontSize = 14;
  signupText.fontName = { family: "Inter", style: "Medium" };
  signupText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  signupBtn.appendChild(signupText);
  signupBtn.primaryAxisSizingMode = 'AUTO';
  actions.appendChild(signupBtn);

  navbar.appendChild(actions);

  frame.appendChild(navbar);
  finalizeFrame(frame);
  figma.notify('Navbar generated!');
}

async function generateRangeSlider(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Range Slider');
  addTitle(frame, 'Range Slider');
  addSubtitle(frame, 'Dual-thumb range selection');

  const container = figma.createFrame();
  container.layoutMode = 'VERTICAL';
  container.itemSpacing = 8;
  container.fills = [];

  const label = figma.createText();
  label.characters = 'Price Range: $200 - $800';
  label.fontSize = 14;
  label.fontName = { family: "Inter", style: "Medium" };
  container.appendChild(label);

  const track = figma.createFrame();
  track.resize(280, 8);
  track.cornerRadius = 4;
  track.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];

  // Active range
  const activeRange = figma.createRectangle();
  activeRange.resize(140, 8);
  activeRange.x = 56;
  activeRange.cornerRadius = 4;
  activeRange.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  track.appendChild(activeRange);

  // Left thumb
  const leftThumb = figma.createEllipse();
  leftThumb.resize(20, 20);
  leftThumb.x = 46;
  leftThumb.y = -6;
  leftThumb.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  leftThumb.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  leftThumb.strokeWeight = 2;
  leftThumb.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 2 }, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL'
  }];
  track.appendChild(leftThumb);

  // Right thumb
  const rightThumb = figma.createEllipse();
  rightThumb.resize(20, 20);
  rightThumb.x = 186;
  rightThumb.y = -6;
  rightThumb.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  rightThumb.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['500']) }];
  rightThumb.strokeWeight = 2;
  rightThumb.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 2 }, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL'
  }];
  track.appendChild(rightThumb);

  container.appendChild(track);

  // Min/Max labels
  const labels = figma.createFrame();
  labels.layoutMode = 'HORIZONTAL';
  labels.primaryAxisAlignItems = 'SPACE_BETWEEN';
  labels.resize(280, labels.height);
  labels.fills = [];

  const minLabel = figma.createText();
  minLabel.characters = '$0';
  minLabel.fontSize = 12;
  minLabel.fontName = { family: "Inter", style: "Regular" };
  minLabel.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  labels.appendChild(minLabel);

  const maxLabel = figma.createText();
  maxLabel.characters = '$1000';
  maxLabel.fontSize = 12;
  maxLabel.fontName = { family: "Inter", style: "Regular" };
  maxLabel.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  labels.appendChild(maxLabel);

  labels.primaryAxisSizingMode = 'AUTO';
  container.appendChild(labels);

  frame.appendChild(container);
  finalizeFrame(frame);
  figma.notify('Range slider generated!');
}

async function generateSnackbar(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Snackbar');
  addTitle(frame, 'Snackbar');
  addSubtitle(frame, 'Brief message with action');

  const snackbar = figma.createFrame();
  snackbar.layoutMode = 'HORIZONTAL';
  snackbar.primaryAxisAlignItems = 'SPACE_BETWEEN';
  snackbar.counterAxisAlignItems = 'CENTER';
  snackbar.paddingLeft = 16;
  snackbar.paddingRight = 8;
  snackbar.paddingTop = 14;
  snackbar.paddingBottom = 14;
  snackbar.resize(400, snackbar.height);
  snackbar.cornerRadius = 8;
  snackbar.fills = [{ type: 'SOLID', color: hexToRgb('#1f2937') }];
  snackbar.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.2 },
    offset: { x: 0, y: 4 }, radius: 12, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  const message = figma.createText();
  message.characters = 'Your changes have been saved';
  message.fontSize = 14;
  message.fontName = { family: "Inter", style: "Medium" };
  message.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  snackbar.appendChild(message);

  const actions = figma.createFrame();
  actions.layoutMode = 'HORIZONTAL';
  actions.itemSpacing = 8;
  actions.fills = [];

  const undoBtn = figma.createText();
  undoBtn.characters = 'UNDO';
  undoBtn.fontSize = 13;
  undoBtn.fontName = { family: "Inter", style: "Bold" };
  undoBtn.fills = [{ type: 'SOLID', color: hexToRgb(tokens.colors.primary['400']) }];
  actions.appendChild(undoBtn);

  const closeBtn = figma.createText();
  closeBtn.characters = '×';
  closeBtn.fontSize = 20;
  closeBtn.fontName = { family: "Inter", style: "Regular" };
  closeBtn.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
  actions.appendChild(closeBtn);

  snackbar.appendChild(actions);
  snackbar.primaryAxisSizingMode = 'AUTO';

  frame.appendChild(snackbar);
  finalizeFrame(frame);
  figma.notify('Snackbar generated!');
}

async function generateTimePicker(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Time Picker');
  addTitle(frame, 'Time Picker');
  addSubtitle(frame, 'Time selection input');

  const container = figma.createFrame();
  container.layoutMode = 'VERTICAL';
  container.itemSpacing = 8;
  container.fills = [];

  // Input
  const input = figma.createFrame();
  input.layoutMode = 'HORIZONTAL';
  input.primaryAxisAlignItems = 'SPACE_BETWEEN';
  input.counterAxisAlignItems = 'CENTER';
  input.paddingLeft = 12;
  input.paddingRight = 12;
  input.resize(180, 44);
  input.cornerRadius = 8;
  input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  input.strokes = [{ type: 'SOLID', color: hexToRgb('#d1d5db') }];
  input.strokeWeight = 1;

  const timeText = figma.createText();
  timeText.characters = '09:30 AM';
  timeText.fontSize = 14;
  timeText.fontName = { family: "Inter", style: "Medium" };
  input.appendChild(timeText);

  const clockIcon = figma.createText();
  clockIcon.characters = '🕐';
  clockIcon.fontSize = 16;
  input.appendChild(clockIcon);

  container.appendChild(input);

  // Dropdown
  const dropdown = figma.createFrame();
  dropdown.layoutMode = 'HORIZONTAL';
  dropdown.itemSpacing = 8;
  dropdown.paddingTop = 12;
  dropdown.paddingBottom = 12;
  dropdown.paddingLeft = 12;
  dropdown.paddingRight = 12;
  dropdown.cornerRadius = 8;
  dropdown.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  dropdown.effects = [{
    type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 }, radius: 12, spread: 0, visible: true, blendMode: 'NORMAL'
  }];

  // Hours column
  const hoursCol = figma.createFrame();
  hoursCol.layoutMode = 'VERTICAL';
  hoursCol.itemSpacing = 4;
  hoursCol.fills = [];

  for (let h = 8; h <= 12; h++) {
    const hourItem = figma.createFrame();
    hourItem.layoutMode = 'HORIZONTAL';
    hourItem.primaryAxisAlignItems = 'CENTER';
    hourItem.counterAxisAlignItems = 'CENTER';
    hourItem.resize(48, 32);
    hourItem.cornerRadius = 6;
    hourItem.fills = [{ type: 'SOLID', color: hexToRgb(h === 9 ? tokens.colors.primary['500'] : 'transparent') }];

    const hourText = figma.createText();
    hourText.characters = String(h).padStart(2, '0');
    hourText.fontSize = 14;
    hourText.fontName = { family: "Inter", style: "Medium" };
    hourText.fills = [{ type: 'SOLID', color: h === 9 ? { r: 1, g: 1, b: 1 } : hexToRgb('#374151') }];
    hourItem.appendChild(hourText);
    hoursCol.appendChild(hourItem);
  }
  dropdown.appendChild(hoursCol);

  // Separator
  const sep = figma.createText();
  sep.characters = ':';
  sep.fontSize = 20;
  sep.fontName = { family: "Inter", style: "Bold" };
  sep.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
  dropdown.appendChild(sep);

  // Minutes column
  const minsCol = figma.createFrame();
  minsCol.layoutMode = 'VERTICAL';
  minsCol.itemSpacing = 4;
  minsCol.fills = [];

  for (let m = 0; m <= 45; m += 15) {
    const minItem = figma.createFrame();
    minItem.layoutMode = 'HORIZONTAL';
    minItem.primaryAxisAlignItems = 'CENTER';
    minItem.counterAxisAlignItems = 'CENTER';
    minItem.resize(48, 32);
    minItem.cornerRadius = 6;
    minItem.fills = [{ type: 'SOLID', color: hexToRgb(m === 30 ? tokens.colors.primary['500'] : 'transparent') }];

    const minText = figma.createText();
    minText.characters = String(m).padStart(2, '0');
    minText.fontSize = 14;
    minText.fontName = { family: "Inter", style: "Medium" };
    minText.fills = [{ type: 'SOLID', color: m === 30 ? { r: 1, g: 1, b: 1 } : hexToRgb('#374151') }];
    minItem.appendChild(minText);
    minsCol.appendChild(minItem);
  }
  dropdown.appendChild(minsCol);

  container.appendChild(dropdown);
  frame.appendChild(container);
  finalizeFrame(frame);
  figma.notify('Time picker generated!');
}

async function generateToggleGroup(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Toggle Group');
  addTitle(frame, 'Toggle Group');
  addSubtitle(frame, 'Segmented control / button group');

  const group = figma.createFrame();
  group.layoutMode = 'HORIZONTAL';
  group.itemSpacing = 0;
  group.cornerRadius = 8;
  group.fills = [{ type: 'SOLID', color: hexToRgb('#f3f4f6') }];

  const options = ['Day', 'Week', 'Month', 'Year'];
  for (let i = 0; i < options.length; i++) {
    const opt = figma.createFrame();
    opt.layoutMode = 'HORIZONTAL';
    opt.primaryAxisAlignItems = 'CENTER';
    opt.counterAxisAlignItems = 'CENTER';
    opt.paddingLeft = 16;
    opt.paddingRight = 16;
    opt.resize(opt.width, 40);
    opt.cornerRadius = i === 1 ? 6 : 0;
    opt.fills = [{ type: 'SOLID', color: hexToRgb(i === 1 ? '#ffffff' : 'transparent') }];
    if (i === 1) {
      opt.effects = [{
        type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.05 },
        offset: { x: 0, y: 1 }, radius: 2, spread: 0, visible: true, blendMode: 'NORMAL'
      }];
    }

    const optText = figma.createText();
    optText.characters = options[i];
    optText.fontSize = 14;
    optText.fontName = { family: "Inter", style: i === 1 ? "Semi Bold" : "Medium" };
    optText.fills = [{ type: 'SOLID', color: hexToRgb(i === 1 ? '#111827' : '#6b7280') }];
    opt.appendChild(optText);
    opt.primaryAxisSizingMode = 'AUTO';
    group.appendChild(opt);
  }

  frame.appendChild(group);
  finalizeFrame(frame);
  figma.notify('Toggle group generated!');
}

async function generateTreeView(): Promise<void> {
  await loadFonts();
  const frame = createComponentFrame('Aural UI Tree View');
  addTitle(frame, 'Tree View');
  addSubtitle(frame, 'Hierarchical file/folder structure');

  const tree = figma.createFrame();
  tree.layoutMode = 'VERTICAL';
  tree.itemSpacing = 2;
  tree.fills = [];

  const items = [
    { icon: '📁', label: 'src', level: 0, expanded: true },
    { icon: '📁', label: 'components', level: 1, expanded: true },
    { icon: '📄', label: 'Button.tsx', level: 2 },
    { icon: '📄', label: 'Input.tsx', level: 2 },
    { icon: '📄', label: 'Card.tsx', level: 2 },
    { icon: '📁', label: 'utils', level: 1, expanded: false },
    { icon: '📄', label: 'index.ts', level: 1 },
    { icon: '📁', label: 'public', level: 0, expanded: false },
    { icon: '📄', label: 'package.json', level: 0 }
  ];

  for (const item of items) {
    const row = figma.createFrame();
    row.layoutMode = 'HORIZONTAL';
    row.itemSpacing = 8;
    row.counterAxisAlignItems = 'CENTER';
    row.paddingLeft = 8 + item.level * 20;
    row.paddingTop = 6;
    row.paddingBottom = 6;
    row.fills = [];

    if (item.expanded !== undefined) {
      const arrow = figma.createText();
      arrow.characters = item.expanded ? '▼' : '▶';
      arrow.fontSize = 10;
      arrow.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
      row.appendChild(arrow);
    } else {
      const spacer = figma.createFrame();
      spacer.resize(10, 10);
      spacer.fills = [];
      row.appendChild(spacer);
    }

    const icon = figma.createText();
    icon.characters = item.icon;
    icon.fontSize = 14;
    row.appendChild(icon);

    const label = figma.createText();
    label.characters = item.label;
    label.fontSize = 13;
    label.fontName = { family: "Inter", style: "Regular" };
    row.appendChild(label);

    tree.appendChild(row);
  }

  frame.appendChild(tree);
  finalizeFrame(frame);
  figma.notify('Tree view generated!');
}

// Generate All Components
async function generateAllComponents(): Promise<void> {
  figma.notify('Generating all components...');

  // Foundations
  await generateColors();
  await generateColorSwatches();
  await generateTypography();
  await generateTypographyShowcase();
  await generateSpacing();
  await generateEffects();

  // Forms
  await generateButtons();
  await generateIconButtons();
  await generateLoadingButtons();
  await generateInputs();
  await generateTextareas();
  await generateCheckboxes();
  await generateRadioButtons();
  await generateSwitches();
  await generateSelects();
  await generateCombobox();
  await generateMultiSelect();
  await generateSliders();
  await generateRangeSlider();
  await generateRating();
  await generateSearchInput();
  await generateFileUpload();
  await generateDatePicker();
  await generateTimePicker();
  await generateColorPicker();

  // Data Display
  await generateBadges();
  await generateCards();
  await generateTables();
  await generateProgress();
  await generateAvatars();
  await generateAvatarGroups();
  await generateTooltips();
  await generateChips();
  await generateSpinner();
  await generateSkeleton();
  await generateTimeline();
  await generateStatsCards();
  await generateCalendar();
  await generateDividers();
  await generateCodeBlock();
  await generateEmptyState();
  await generateImageGallery();
  await generateCarousel();

  // Navigation
  await generateTabs();
  await generateBreadcrumbs();
  await generatePagination();
  await generateAccordion();
  await generateStepper();
  await generateNavbar();
  await generateBottomNavigation();
  await generateTreeView();

  // Overlays
  await generateModals();
  await generateDialog();
  await generateToasts();
  await generateSnackbar();
  await generateDrawer();
  await generateAlertBanner();
  await generatePopovers();
  await generateDropdowns();
  await generateContextMenu();
  await generateCommandPalette();
  await generateNotificationCenter();
  await generateToggleGroup();

  figma.notify('Complete design system generated! 🎉');
}

// Plugin entry point
figma.on('run', async ({ command }: RunEvent) => {
  if (command === 'generate-all') {
    figma.showUI(__html__, { width: 420, height: 700 });
  } else {
    figma.closePlugin();
  }
});

figma.ui.onmessage = async (msg: { type: string }) => {
  switch (msg.type) {
    case 'generate-all': await generateAllComponents(); break;
    case 'generate-colors': await generateColors(); await generateColorSwatches(); break;
    case 'generate-typography': await generateTypography(); await generateTypographyShowcase(); break;
    case 'generate-spacing': await generateSpacing(); break;
    case 'generate-effects': await generateEffects(); break;
    case 'generate-buttons': await generateButtons(); break;
    case 'generate-icon-buttons': await generateIconButtons(); break;
    case 'generate-loading-buttons': await generateLoadingButtons(); break;
    case 'generate-inputs': await generateInputs(); break;
    case 'generate-textareas': await generateTextareas(); break;
    case 'generate-checkboxes': await generateCheckboxes(); break;
    case 'generate-radio': await generateRadioButtons(); break;
    case 'generate-switches': await generateSwitches(); break;
    case 'generate-selects': await generateSelects(); break;
    case 'generate-combobox': await generateCombobox(); break;
    case 'generate-multiselect': await generateMultiSelect(); break;
    case 'generate-sliders': await generateSliders(); break;
    case 'generate-range-slider': await generateRangeSlider(); break;
    case 'generate-rating': await generateRating(); break;
    case 'generate-search': await generateSearchInput(); break;
    case 'generate-file-upload': await generateFileUpload(); break;
    case 'generate-datepicker': await generateDatePicker(); break;
    case 'generate-timepicker': await generateTimePicker(); break;
    case 'generate-colorpicker': await generateColorPicker(); break;
    case 'generate-badges': await generateBadges(); break;
    case 'generate-cards': await generateCards(); break;
    case 'generate-tables': await generateTables(); break;
    case 'generate-progress': await generateProgress(); break;
    case 'generate-avatars': await generateAvatars(); break;
    case 'generate-avatar-groups': await generateAvatarGroups(); break;
    case 'generate-tooltips': await generateTooltips(); break;
    case 'generate-chips': await generateChips(); break;
    case 'generate-spinner': await generateSpinner(); break;
    case 'generate-skeleton': await generateSkeleton(); break;
    case 'generate-timeline': await generateTimeline(); break;
    case 'generate-stats': await generateStatsCards(); break;
    case 'generate-calendar': await generateCalendar(); break;
    case 'generate-dividers': await generateDividers(); break;
    case 'generate-codeblock': await generateCodeBlock(); break;
    case 'generate-emptystate': await generateEmptyState(); break;
    case 'generate-imagegallery': await generateImageGallery(); break;
    case 'generate-carousel': await generateCarousel(); break;
    case 'generate-tabs': await generateTabs(); break;
    case 'generate-breadcrumbs': await generateBreadcrumbs(); break;
    case 'generate-pagination': await generatePagination(); break;
    case 'generate-accordion': await generateAccordion(); break;
    case 'generate-stepper': await generateStepper(); break;
    case 'generate-navbar': await generateNavbar(); break;
    case 'generate-bottomnav': await generateBottomNavigation(); break;
    case 'generate-treeview': await generateTreeView(); break;
    case 'generate-modals': await generateModals(); break;
    case 'generate-dialog': await generateDialog(); break;
    case 'generate-toasts': await generateToasts(); break;
    case 'generate-snackbar': await generateSnackbar(); break;
    case 'generate-drawer': await generateDrawer(); break;
    case 'generate-alerts': await generateAlertBanner(); break;
    case 'generate-popovers': await generatePopovers(); break;
    case 'generate-dropdowns': await generateDropdowns(); break;
    case 'generate-contextmenu': await generateContextMenu(); break;
    case 'generate-commandpalette': await generateCommandPalette(); break;
    case 'generate-notifications': await generateNotificationCenter(); break;
    case 'generate-togglegroup': await generateToggleGroup(); break;
    case 'close': figma.closePlugin(); break;
  }
};
