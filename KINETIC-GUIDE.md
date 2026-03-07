# Kinetic Editorial Theme Guide

**A brutalist design system built on Swiss typography, kinetic geometry, and stark contrast.**

---

## 🎯 Philosophy

Kinetic is a radical departure from conventional UI design. It embraces **brutalist minimalism** and **Swiss precision** to create interfaces that command attention through typography, motion, and constraint rather than decoration.

### Core Principles

1. **Typographic Dominance** - Text is the interface. Oversized headings, bold weights, mathematical spacing.
2. **Kinetic Geometry** - Motion with purpose. No frivolous animations. Every transition reinforces hierarchy.
3. **Stark Contrast** - Pure black, pure white, electric lime. No gradients. No gray areas.
4. **Swiss Precision** - 8-point grid system. Mathematical spacing. Perfect alignment.
5. **Editorial Boldness** - Magazine-style layouts. Asymmetric composition. Generous whitespace.
6. **Zero Decoration** - No shadows. No glows. No rounded corners. Beauty through function.

---

## 🎨 Design System

### Color Palette

The Kinetic theme uses an extremely minimal color palette:

| Color             | Hex                   | Usage                             |
| ----------------- | --------------------- | --------------------------------- |
| **Black**         | `#000000`             | Primary background, text on light |
| **White**         | `#ffffff`             | Text on dark, accents             |
| **Electric Lime** | `#cdff00`             | Single accent color for emphasis  |
| **Gray Scale**    | `#0a0a0a` - `#fafafa` | Subtle backgrounds, borders       |

**Why so minimal?**

- Forces focus on content and hierarchy
- Creates maximum visual impact through restraint
- Avoids visual noise and distraction

### Typography

Kinetic uses a **Perfect Fourth (1.333) type scale** with aggressive sizing:

```css
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.333rem; /* 21px */
--text-xl: 1.777rem; /* 28px */
--text-2xl: 2.369rem; /* 38px */
--text-3xl: 3.157rem; /* 50px */
--text-4xl: 4.209rem; /* 67px */
--text-5xl: 5.61rem; /* 90px */
```

**Typography Rules:**

- All headings use `font-weight: 900` (black weight)
- Tight tracking (`-0.05em`) on large headings
- Wide tracking (`0.1em`) on labels and small text
- Leading of 1.1 for headings, 1.625 for body text

### Spacing System

Based on an **8-point grid** for perfect mathematical harmony:

```css
--space-1: 0.125rem; /* 2px */
--space-2: 0.25rem; /* 4px */
--space-3: 0.5rem; /* 8px */
--space-4: 0.75rem; /* 12px */
--space-5: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-7: 2rem; /* 32px */
--space-8: 3rem; /* 48px */
--space-9: 4rem; /* 64px */
--space-10: 6rem; /* 96px */
--space-11: 8rem; /* 128px */
```

---

## 🧩 Components

### Buttons

Kinetic buttons feature **sharp edges**, **bold presence**, and **purposeful motion**.

#### Base Button

```html
<button class="btn-kinetic btn-kinetic-primary">PRIMARY ACTION</button>
```

#### Variants

- **Primary** - Electric lime fill, black text
- **Secondary** - White outline, fills on hover
- **Ghost** - No border, minimal presence

#### Sizes

- `btn-kinetic-sm` - 36px min height
- Default - 48px min height
- `btn-kinetic-lg` - 56px min height

#### Interactive Effects

- **Split** (`btn-kinetic-split`) - Color reveal from left
- **Slide** (`btn-kinetic-slide`) - Text shifts on hover
- **Skew** (`btn-kinetic-skew`) - Italic transform
- **Expand** (`btn-kinetic-expand`) - Width increases

```html
<!-- Split button with reveal effect -->
<button class="btn-kinetic btn-kinetic-secondary btn-kinetic-split">DOWNLOAD NOW</button>

<!-- Slide button with arrow -->
<button class="btn-kinetic btn-kinetic-secondary btn-kinetic-slide">
  <span>VIEW COMPONENTS →</span>
</button>
```

### Cards

Sharp borders, bold typography, kinetic hover states.

#### Card Types

**1. Accent Card** - Yellow border emphasis

```html
<div class="card-kinetic card-kinetic-accent">
  <div class="card-kinetic-header">
    <h3 class="card-kinetic-title">Card Title</h3>
    <div class="card-kinetic-subtitle">Subtitle</div>
  </div>
  <div class="card-kinetic-body">
    <p>Content with bold yellow accent bar on the left edge.</p>
  </div>
</div>
```

**2. Outlined Card** - Heavy border that expands on hover

```html
<div class="card-kinetic card-kinetic-outlined">
  <!-- Content -->
</div>
```

**3. Filled Card** - Subtle background for hierarchy

```html
<div class="card-kinetic card-kinetic-filled">
  <!-- Content -->
</div>
```

**4. Stat Card** - Large number display

```html
<div class="card-kinetic-stat">
  <span class="card-kinetic-stat-value">99.9%</span>
  <span class="card-kinetic-stat-label">Uptime</span>
</div>
```

**5. Feature Card** - Icon + content layout

```html
<div class="card-kinetic card-kinetic-feature">
  <div class="card-kinetic-feature-icon">01</div>
  <div class="card-kinetic-feature-content">
    <h3>Feature Title</h3>
    <p>Feature description.</p>
  </div>
</div>
```

### Grid Layouts

```html
<!-- Responsive card grid -->
<div class="card-grid-kinetic">
  <div class="card-kinetic">...</div>
  <div class="card-kinetic">...</div>
  <div class="card-kinetic">...</div>
</div>

<!-- Dense grid with smaller gaps -->
<div class="card-grid-kinetic-dense">
  <!-- Cards -->
</div>
```

---

## 🎬 Animation System

Kinetic uses **purposeful motion** with custom easing curves:

```css
/* Kinetic Easing Functions */
--ease-kinetic: cubic-bezier(0.22, 1, 0.36, 1); /* Smooth, confident */
--ease-snap: cubic-bezier(0.86, 0, 0.07, 1); /* Sharp, immediate */

/* Durations */
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-base: 300ms;
--duration-slow: 500ms;
```

**Animation Guidelines:**

- Animations should feel **snappy** and **purposeful**
- Use kinetic easing for smooth transitions
- Use snap easing for immediate, dramatic effects
- Respect `prefers-reduced-motion` (automatically handled)

---

## 📐 Layout Patterns

### Hero Section

```html
<section class="hero">
  <div class="hero-content">
    <span class="hero-eyebrow">KINETIC EDITORIAL</span>

    <h1 class="hero-title">
      <span>DESIGN</span>
      <span>WITH</span>
      <span>PURPOSE</span>
    </h1>

    <p class="hero-subtitle">Brutally minimal design built on Swiss typography.</p>

    <div class="hero-actions">
      <button class="btn-kinetic btn-kinetic-primary btn-kinetic-lg">GET STARTED</button>
    </div>
  </div>
</section>
```

### Editorial Quote

```html
<div class="editorial-quote">
  <div class="editorial-quote-text">
    "Design is not decoration. Design is purposeful constraint."
  </div>
  <div class="editorial-quote-author">— Design Philosophy</div>
</div>
```

### Stats Bar

```html
<div class="stats-bar">
  <div class="stat">
    <span class="stat-value">60+</span>
    <span class="stat-label">Components</span>
  </div>
  <div class="stat">
    <span class="stat-value">350+</span>
    <span class="stat-label">Utilities</span>
  </div>
</div>
```

---

## 🚀 Usage

### Installation

#### Option 1: Direct Include

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Kinetic Theme -->
    <link rel="stylesheet" href="aural-ui/themes/kinetic.css" />

    <!-- Kinetic Components (optional) -->
    <link rel="stylesheet" href="aural-ui/components/kinetic-buttons.css" />
    <link rel="stylesheet" href="aural-ui/components/kinetic-cards.css" />
  </head>
  <body>
    <button class="btn-kinetic btn-kinetic-primary">CLICK ME</button>
  </body>
</html>
```

#### Option 2: Import in CSS

```css
/* Import Kinetic theme */
@import 'aural-ui/themes/kinetic.css';
@import 'aural-ui/components/kinetic-buttons.css';
@import 'aural-ui/components/kinetic-cards.css';
```

### Customization

Override CSS custom properties to customize:

```css
:root {
  /* Change accent color */
  --color-accent: #00ff00; /* Neon green instead of lime */
  --color-accent-dark: #00cc00;

  /* Adjust spacing scale */
  --space-11: 12rem; /* More generous spacing */

  /* Modify typography */
  --font-primary: 'Helvetica Neue', sans-serif;
}
```

---

## 🎯 Best Practices

### When to Use Kinetic

**Perfect for:**

- ✅ Editorial websites and online magazines
- ✅ Design agency portfolios
- ✅ Artist and photographer portfolios
- ✅ Bold brand statements
- ✅ Event and conference sites
- ✅ Fashion and lifestyle brands

**Not ideal for:**

- ❌ Enterprise dashboards (too bold)
- ❌ Data-heavy applications (lacks visual softness)
- ❌ Traditional business sites (too unconventional)

### Design Guidelines

1. **Embrace Whitespace** - Don't fear empty space. It creates focus.
2. **Use Typography Boldly** - Make headings massive. It's intentional.
3. **Limit Color** - Stick to black/white/lime. Resist adding more colors.
4. **Keep Motion Purposeful** - Only animate what needs attention.
5. **Maintain Alignment** - Use the 8pt grid religiously.
6. **Break Rules Intentionally** - Asymmetry is powerful, but deliberate.

### Accessibility & WCAG Compliance

Kinetic is designed with accessibility in mind, but **requires careful attention to color usage** to maintain WCAG AA compliance.

#### ✅ What Kinetic Gets Right

- ✅ All interactive elements meet 44px minimum touch target
- ✅ Focus indicators use 2px solid accent color with proper contrast
- ✅ Respects `prefers-reduced-motion` for animations
- ✅ Semantic HTML with proper ARIA attributes
- ✅ Keyboard navigation fully supported

#### ⚠️ CRITICAL: Electric Lime Usage Guidelines

The Electric Lime accent color (`#cdff00`) has **specific usage limitations** for WCAG compliance:

**✅ SAFE USES (Accessible):**

```html
<!-- Borders and outlines (NOT backgrounds) -->
<div class="border-4 border-[#cdff00] bg-black text-white">Safe</div>

<!-- Small accent elements (icons, dots, highlights) -->
<span class="inline-block w-2 h-2 bg-[#cdff00]"></span>

<!-- Text on black backgrounds (meets 13.7:1 ratio) -->
<div class="bg-black">
  <h1 class="text-[#cdff00]">Accessible Heading</h1>
</div>

<!-- Decorative elements (no text content) -->
<div class="w-full h-1 bg-[#cdff00]"></div>
```

**❌ UNSAFE USES (Fails WCAG):**

```html
<!-- ❌ NEVER: White text on lime background (1.2:1 contrast - FAILS) -->
<div class="bg-[#cdff00] text-white">Unreadable</div>

<!-- ❌ NEVER: Black text on lime background (3.7:1 - FAILS for body text) -->
<div class="bg-[#cdff00] text-black">Still fails WCAG AA</div>

<!-- ❌ NEVER: Large content areas with lime backgrounds -->
<section class="bg-[#cdff00]">
  <p class="text-white">This entire section is inaccessible</p>
</section>
```

#### 📊 Contrast Ratio Reference

WCAG AA requires **4.5:1** minimum contrast for normal text, **3:1** for large text (18pt+).

| Combination                                       | Contrast Ratio | WCAG AA Status           |
| ------------------------------------------------- | -------------- | ------------------------ |
| **White on Electric Lime** `#ffffff` on `#cdff00` | **1.2:1**      | ❌ **FAILS**             |
| **Black on Electric Lime** `#000000` on `#cdff00` | **3.7:1**      | ❌ **FAILS** (body text) |
| **Electric Lime on Black** `#cdff00` on `#000000` | **13.7:1**     | ✅ **PASSES**            |
| **White on Black** `#ffffff` on `#000000`         | **21:1**       | ✅ **PASSES**            |
| **Slate-900 on White** `#0f172a` on `#ffffff`     | **15.3:1**     | ✅ **PASSES**            |

#### 🎨 Recommended Accessible Alternatives

When you need colored backgrounds with text, use these WCAG-compliant options:

```css
/* Dark backgrounds (safe for white text) */
--color-bg-dark-primary: #0f172a; /* Slate-900: 15.3:1 with white */
--color-bg-dark-secondary: #1e293b; /* Slate-800: 12.6:1 with white */
--color-bg-dark-tertiary: #334155; /* Slate-700: 9.1:1 with white */

/* Accent backgrounds (safe for white text) */
--color-bg-blue: #2563eb; /* Blue-600: 6.3:1 with white */
--color-bg-purple: #a78bfa; /* Purple-400: 5.2:1 with white */

/* Lime variants (if you must use lime as background) */
--color-lime-dark: #6b8e00; /* Dark lime: 4.8:1 with white - PASSES */
```

#### 🔧 Correct Implementation Examples

**Good: Using Kinetic colors accessibly**

```html
<!-- Dark background with white text (15.3:1 contrast) -->
<section class="bg-slate-900 text-white">
  <h2 class="text-4xl font-black uppercase">Heading</h2>
  <p class="text-gray-300">Body text with excellent readability</p>

  <!-- Lime used only for accents -->
  <div class="border-l-4 border-[#cdff00] pl-6">
    <p class="text-white">Lime border, not background</p>
  </div>
</section>

<!-- Lime text on black background (13.7:1 contrast) -->
<div class="bg-black py-20">
  <h1 class="text-[#cdff00] text-6xl font-black">BOLD STATEMENT</h1>
</div>

<!-- Glass card with proper contrast -->
<div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white">
  <h3 class="font-bold">Card Title</h3>
  <p class="text-gray-300">Readable card content</p>
  <!-- Lime highlight bar -->
  <div class="w-16 h-1 bg-[#cdff00] mt-4"></div>
</div>
```

**Bad: Common mistakes to avoid**

```html
<!-- ❌ Bright lime background section -->
<section class="bg-[#cdff00] text-white">
  <h2>This fails WCAG</h2>
  <p>Only 1.2:1 contrast ratio</p>
</section>

<!-- ❌ Lime backgrounds in cards -->
<div class="bg-[#cdff00] p-8">
  <p class="text-black">3.7:1 contrast - still fails</p>
</div>

<!-- ❌ CSS classes that apply lime backgrounds to text areas -->
<div class="kinetic-highlight">
  <!-- If .kinetic-highlight sets bg-[#cdff00], this fails -->
</div>
```

#### 🧪 Testing Your Implementation

**Before deploying, verify contrast ratios:**

1. **Use browser dev tools:**
   - Chrome DevTools → Elements → Accessibility pane shows contrast ratios
   - Warns when contrast fails WCAG standards

2. **Online contrast checkers:**
   - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - [Coolors Contrast Checker](https://coolors.co/contrast-checker)

3. **Automated testing:**

   ```bash
   # Use axe-core for automated accessibility testing
   npm install --save-dev @axe-core/cli
   npx axe https://your-site.com
   ```

4. **Manual verification:**
   - Screenshot your page and convert to grayscale
   - If text is hard to read in grayscale, contrast is insufficient

#### 📋 Implementation Checklist

Before using Kinetic in production:

- [ ] All text has 4.5:1+ contrast ratio (3:1+ for large text)
- [ ] Electric lime (`#cdff00`) used ONLY for borders, accents, or text on black
- [ ] Electric lime NEVER used as background color for text content
- [ ] Dark backgrounds (slate-900, slate-800) used for white text sections
- [ ] Tested with browser accessibility tools
- [ ] Verified with online contrast checkers
- [ ] Respects `prefers-reduced-motion` for animations
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible and have sufficient contrast

#### 🎯 Summary: The Kinetic Color Rule

> **"Lime for lines, not for backgrounds."**
>
> Use Electric Lime (`#cdff00`) for borders, highlights, decorative elements, and text on black backgrounds.
> NEVER use it as a background color for text content.
> When in doubt, test your contrast ratio.

---

## 🖼️ Examples

### Full Page Template

See the complete demo at:

- **[Kinetic Demo](https://ferology.github.io/aural-ui/kinetic-demo.html)**
- Local: `/docs/kinetic-demo.html`

### Component Showcase

The demo includes:

- Hero section with animated typography
- Button variations with kinetic effects
- Card layouts with hover states
- Stats displays
- Editorial quotes
- Feature grids
- CTA sections

---

## 🔗 Resources

- **[Kinetic Demo](docs/kinetic-demo.html)** - Full working example
- **[Aural UI Documentation](README.md)** - Main project docs
- **[Theme Guide](docs/themes.html)** - All theme documentation

---

## 💡 Inspiration

Kinetic draws inspiration from:

- **Brutalist architecture** - Honesty of materials, raw aesthetics
- **Swiss design** - Grid systems, mathematical precision
- **Editorial design** - Magazine layouts, bold typography
- **Bauhaus** - Form follows function
- **Modern typography** - Oversized headings, tight tracking

---

## 📄 License

The Kinetic theme is part of Aural UI and is released under the MIT License.

---

**Built with clarity. Designed with purpose. Zero decoration.**
