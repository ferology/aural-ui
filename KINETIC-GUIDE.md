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

| Color | Hex | Usage |
|-------|-----|-------|
| **Black** | `#000000` | Primary background, text on light |
| **White** | `#ffffff` | Text on dark, accents |
| **Electric Lime** | `#cdff00` | Single accent color for emphasis |
| **Gray Scale** | `#0a0a0a` - `#fafafa` | Subtle backgrounds, borders |

**Why so minimal?**
- Forces focus on content and hierarchy
- Creates maximum visual impact through restraint
- Avoids visual noise and distraction

### Typography

Kinetic uses a **Perfect Fourth (1.333) type scale** with aggressive sizing:

```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.333rem;     /* 21px */
--text-xl: 1.777rem;     /* 28px */
--text-2xl: 2.369rem;    /* 38px */
--text-3xl: 3.157rem;    /* 50px */
--text-4xl: 4.209rem;    /* 67px */
--text-5xl: 5.61rem;     /* 90px */
```

**Typography Rules:**
- All headings use `font-weight: 900` (black weight)
- Tight tracking (`-0.05em`) on large headings
- Wide tracking (`0.1em`) on labels and small text
- Leading of 1.1 for headings, 1.625 for body text

### Spacing System

Based on an **8-point grid** for perfect mathematical harmony:

```css
--space-1: 0.125rem;   /* 2px */
--space-2: 0.25rem;    /* 4px */
--space-3: 0.5rem;     /* 8px */
--space-4: 0.75rem;    /* 12px */
--space-5: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-7: 2rem;       /* 32px */
--space-8: 3rem;       /* 48px */
--space-9: 4rem;       /* 64px */
--space-10: 6rem;      /* 96px */
--space-11: 8rem;      /* 128px */
```

---

## 🧩 Components

### Buttons

Kinetic buttons feature **sharp edges**, **bold presence**, and **purposeful motion**.

#### Base Button
```html
<button class="btn-kinetic btn-kinetic-primary">
    PRIMARY ACTION
</button>
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
<button class="btn-kinetic btn-kinetic-secondary btn-kinetic-split">
    DOWNLOAD NOW
</button>

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
--ease-kinetic: cubic-bezier(0.22, 1, 0.36, 1);  /* Smooth, confident */
--ease-snap: cubic-bezier(0.86, 0, 0.07, 1);     /* Sharp, immediate */

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

        <p class="hero-subtitle">
            Brutally minimal design built on Swiss typography.
        </p>

        <div class="hero-actions">
            <button class="btn-kinetic btn-kinetic-primary btn-kinetic-lg">
                GET STARTED
            </button>
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
    <div class="editorial-quote-author">
        — Design Philosophy
    </div>
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
    <link rel="stylesheet" href="aural-ui/themes/kinetic.css">

    <!-- Kinetic Components (optional) -->
    <link rel="stylesheet" href="aural-ui/components/kinetic-buttons.css">
    <link rel="stylesheet" href="aural-ui/components/kinetic-cards.css">
</head>
<body>
    <button class="btn-kinetic btn-kinetic-primary">
        CLICK ME
    </button>
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
    --color-accent: #00ff00;        /* Neon green instead of lime */
    --color-accent-dark: #00cc00;

    /* Adjust spacing scale */
    --space-11: 12rem;              /* More generous spacing */

    /* Modify typography */
    --font-primary: "Helvetica Neue", sans-serif;
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

### Accessibility

Kinetic maintains **WCAG AA compliance**:
- ✅ Color contrast ratios exceed 4.5:1 for text
- ✅ All interactive elements meet 44px minimum touch target
- ✅ Focus indicators use 2px solid accent color
- ✅ Respects `prefers-reduced-motion`
- ✅ Semantic HTML with proper ARIA attributes

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
