# Aural UI Figma Plugin

A Figma plugin that auto-generates the complete Aural UI design system including colors, typography, spacing, effects, and components.

## Installation

### Development Setup

1. Install dependencies:
   ```bash
   cd figma-plugin
   npm install
   ```

2. Build the plugin:
   ```bash
   npm run build
   ```

3. In Figma Desktop:
   - Go to **Plugins** > **Development** > **Import plugin from manifest...**
   - Select the `manifest.json` file from this directory

### For Development

Run in watch mode to auto-rebuild on changes:
```bash
npm run watch
```

## Usage

Once installed, access the plugin via:
- **Plugins** > **Aural UI Design System**

### Available Commands

#### Generate Complete Design System
Creates all design system elements at once:
- Color styles and swatches
- Typography styles and showcase
- Spacing scale visualization
- Shadow/effect styles
- Button, Input, Card, and Badge components

#### Individual Generation

**Foundations:**
- **Colors** - Creates paint styles for all color scales (neutral, primary, secondary, success, warning, error, info, purple, pink) and generates visual color swatches
- **Typography** - Creates text styles for all size/weight combinations and generates a typography showcase
- **Spacing** - Generates a visual spacing scale reference
- **Effects** - Creates shadow styles (xs through 2xl) and glow effects

**Components:**
- **Buttons** - Generates button variants (Primary, Secondary, Success, Warning, Error) in sizes (sm, md, lg)
- **Inputs** - Generates input field components in sizes (sm, md, lg)
- **Cards** - Generates card components with different padding sizes
- **Badges** - Generates badge variants (Default, Primary, Success, Warning, Error, Info)

## What Gets Created

### Paint Styles
- `Aural/neutral/50` through `Aural/neutral/950`
- `Aural/primary/50` through `Aural/primary/950`
- `Aural/secondary/50` through `Aural/secondary/950`
- `Aural/success/50` through `Aural/success/950`
- `Aural/warning/50` through `Aural/warning/950`
- `Aural/error/50` through `Aural/error/950`
- `Aural/info/50` through `Aural/info/950`
- `Aural/purple/50` through `Aural/purple/950`
- `Aural/pink/50` through `Aural/pink/950`

### Text Styles
- `Aural/text-xs/normal` through `Aural/text-6xl/bold`
- All combinations of sizes (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl) and weights (normal, medium, semibold, bold)

### Effect Styles
- `Aural/shadow-xs` through `Aural/shadow-2xl`
- `Aural/glow-primary`

## Token Reference

The plugin uses the exact same tokens as the Aural UI CSS framework:

### Spacing Scale
| Token | Value |
|-------|-------|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-5 | 20px |
| space-6 | 24px |
| space-8 | 32px |
| space-10 | 40px |
| space-12 | 48px |
| space-16 | 64px |

### Border Radius
| Token | Value |
|-------|-------|
| radius-sm | 4px |
| radius-md | 6px |
| radius-lg | 8px |
| radius-xl | 12px |
| radius-2xl | 16px |
| radius-full | 9999px |

## Syncing with Code

The tokens in `tokens.json` match the CSS variables in the Aural UI framework. When you update your CSS tokens, update `tokens.json` and rebuild the plugin to keep them in sync.

## License

MIT - Same as Aural UI
