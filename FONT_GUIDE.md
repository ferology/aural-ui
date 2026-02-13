# Aural UI Font System Guide

## 📚 Overview

Aural UI features a comprehensive typography system with multiple font families tailored to different themes and use cases.

---

## 🎨 Font Families by Theme

### **Default Theme (Dark/Light/High-Contrast/Colorblind)**

#### System Sans-Serif (Primary)
```css
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```
- **Weight Range:** 100-900 (all weights available)
- **Best For:** Body text, UI labels, general interface
- **Why Use:** Fast loading (system font), highly legible, cross-platform consistency

#### System Monospace (Code)
```css
--font-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace
```
- **Weight Range:** 400-700
- **Best For:** Code blocks, API references, terminal output, tabular data
- **Why Use:** Equal character width, excellent code readability

#### System Serif
```css
--font-serif: Georgia, Cambria, "Times New Roman", Times, serif
```
- **Weight Range:** 400-700
- **Best For:** Long-form reading, editorial content
- **Why Use:** Classic readability, elegant for articles

---

### **Neon Theme (Cyberpunk/Tech)**

#### Space Grotesk (Primary)
```css
--font-sans: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```
- **Google Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Weights:** 300, 400, 500, 600, 700
- **Best For:** Modern tech UIs, dashboards, cyberpunk aesthetics, headings
- **Character:** Geometric, modern, tech-forward
- **File Size:** ~60KB (all weights)

**✅ Recommended Uses:**
- Dashboard titles and headings
- Modern tech product UIs
- Gaming interfaces
- Futuristic applications
- Body text in neon-themed pages

**❌ Avoid For:**
- Traditional/corporate websites
- Long-form articles (can be tiring)
- Print materials

#### JetBrains Mono (Code)
```css
--font-mono: 'JetBrains Mono', 'Courier New', Consolas, Monaco, monospace
```
- **Google Fonts:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Weights:** 400, 500, 700
- **Best For:** Code editors, technical documentation, developer tools
- **Character:** Technical, precise, excellent ligature support
- **File Size:** ~80KB (all weights)

**✅ Recommended Uses:**
- Code snippets and blocks
- Terminal interfaces
- JSON/XML display
- Developer documentation
- Data visualization

**Special Features:**
- Programming ligatures (→, ≥, ≠, ===, etc.)
- Clear distinction between 0O, Il1
- Optimized for long coding sessions

#### Orbitron (Display/Accent)
```css
--font-display: 'Orbitron', 'Space Grotesk', sans-serif
```
- **Google Fonts:** [Orbitron](https://fonts.google.com/specimen/Orbitron)
- **Weights:** 400, 700, 900
- **Best For:** Hero sections, logos, special accents
- **Character:** Futuristic, geometric, sci-fi
- **File Size:** ~45KB (all weights)

**✅ Recommended Uses:**
- Landing page hero text
- Brand names (used sparingly)
- Call-to-action buttons
- Sci-fi themed headers
- Numbers and stats displays

**❌ Avoid For:**
- Body text (very hard to read)
- Paragraphs longer than 1 sentence
- All-caps extended text (use short phrases)

**Usage Example:**
```html
<h1 class="font-display" style="font-size: 4rem; letter-spacing: 0.05em;">
  CYBER 2077
</h1>
```

---

### **Neon Refined Theme**

Uses the same fonts as Neon theme but with more sophisticated application:
- **Space Grotesk:** Primary interface font
- **JetBrains Mono:** Code and data
- **Orbitron:** Very minimal display use (less than Neon)

---

### **Kinetic Theme (Brutalist Editorial)**

#### Helvetica Neue (Primary)
```css
--font-primary: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Arial", sans-serif
```
- **Best For:** Bold editorial design, minimalist interfaces, Swiss design aesthetic
- **Character:** Neutral, clean, versatile, professional
- **Why Use:** System font (free, fast), timeless design

**✅ Recommended Uses:**
- Brutalist/minimalist designs
- Editorial websites
- Professional portfolios
- Swiss-style layouts
- Magazine-style interfaces

**Typography Tips for Kinetic:**
- Use heavy weights (700-900)
- Tight letter-spacing (-0.02em to -0.05em)
- Large font sizes for impact
- Uppercase for emphasis
- High contrast between weights

---

## 📏 Font Size Scale

```css
text-xs:   12px   /* Fine print, captions */
text-sm:   14px   /* Small labels, secondary text */
text-base: 16px   /* Body text (default) */
text-lg:   18px   /* Emphasized paragraphs */
text-xl:   20px   /* Small headings, lead text */
text-2xl:  24px   /* H5, subheadings */
text-3xl:  30px   /* H4 */
text-4xl:  36px   /* H3 */
text-5xl:  48px   /* H2 */
text-6xl:  60px   /* H1, section titles */
text-7xl:  72px   /* Hero text */
text-8xl:  96px   /* Display headlines */
text-9xl:  128px  /* Massive impact text */
```

---

## ⚖️ Font Weight Scale

```css
font-thin:       100  /* Very light accents */
font-extralight: 200  /* Subtle headers */
font-light:      300  /* Delicate UI elements */
font-normal:     400  /* Body text (default) */
font-medium:     500  /* Emphasized text */
font-semibold:   600  /* Subheadings */
font-bold:       700  /* Headings, CTAs */
font-extrabold:  800  /* Strong emphasis */
font-black:      900  /* Maximum impact */
```

---

## 🎯 Recommendations by Use Case

### **For Modern SaaS Products**
```css
Primary: System Sans (--font-sans)
Code: System Mono (--font-mono)
Display: Use bold weights of primary
```
**Why:** Fast, familiar, professional

### **For Tech/Gaming Products**
```css
Primary: Space Grotesk (Neon theme)
Code: JetBrains Mono (Neon theme)
Display: Orbitron (sparingly)
```
**Why:** Modern, tech-forward, engaging

### **For Developer Tools**
```css
Primary: System Sans
Code: JetBrains Mono
Emphasis: Medium weights
```
**Why:** Clarity, readability, professional

### **For Editorial/Magazine Sites**
```css
Primary: Helvetica Neue (Kinetic theme)
Display: Heavy weights (800-900)
Body: Light-Medium (300-500)
```
**Why:** Editorial impact, clean hierarchy

### **For Corporate/Enterprise**
```css
Primary: System Sans
Display: Semibold-Bold (600-700)
Accent: High-contrast theme
```
**Why:** Professional, accessible, trustworthy

---

## 💡 Best Practices

### ✅ **DO:**
1. **Limit Fonts:** Use max 2-3 font families per project
2. **Hierarchy:** Establish clear visual hierarchy with size + weight
3. **Contrast:** Ensure 4.5:1 contrast ratio (WCAG AA)
4. **Line Height:** Use 1.5-1.6 for body text
5. **Responsive:** Scale fonts with `clamp()` for fluid typography
6. **Testing:** Test with real content across devices
7. **Performance:** Preload critical fonts, subset characters
8. **Weights:** Use multiple weights of same font vs. multiple fonts

### ❌ **DON'T:**
1. **Mix Too Many:** Avoid 4+ different font families
2. **Display for Body:** Never use display fonts for paragraphs
3. **Tight Leading:** Don't set line-height below 1.4
4. **Pure Black:** Avoid #000 on #fff (too harsh)
5. **Mobile Neglect:** Don't forget mobile readability
6. **Effect Overuse:** Sparingly use text effects (glows, gradients)
7. **All Caps:** Use sparingly, never for long text
8. **Too Many Weights:** Loading all weights slows page load

---

## 🎨 Neon Theme Special Effects

### Available Text Effect Classes

```css
.text-neon-cyan      /* Cyan glow effect */
.text-neon-magenta   /* Magenta glow effect */
.text-neon-green     /* Green glow effect */
.text-neon-yellow    /* Yellow glow effect */
.text-neon-red       /* Red glow effect */

.text-gradient-cyber           /* Static gradient */
.text-gradient-cyber-animated  /* Animated gradient */
.text-holographic             /* Rainbow shimmer */

.font-display         /* Orbitron display font */
.text-glitch          /* Glitch animation (use data-text attr) */
.text-chromatic       /* Chromatic aberration */
.text-scanline        /* Scanline animation */
.text-typing          /* Typing animation */
```

**Usage Example:**
```html
<h1 class="text-neon-cyan font-display">
  CYBERPUNK 2077
</h1>

<div class="text-gradient-cyber-animated" style="font-size: 3rem;">
  FUTURE TECH
</div>
```

**⚠️ Accessibility Note:**
All animations respect `prefers-reduced-motion` and will be disabled for users with motion sensitivity.

---

## 📊 Performance Tips

### Loading Web Fonts (Neon Theme)

**Current Implementation:**
```css
/* fonts-neon.css */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
```

**Optimization Options:**

1. **Subset Characters (Reduce File Size):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&display=swap" rel="stylesheet">
```

2. **Self-Host Fonts (Fastest):**
- Download fonts from Google Fonts
- Host in `/fonts` directory
- Use `@font-face` declarations
- Preload critical fonts

3. **Conditional Loading:**
```javascript
// Only load neon fonts when neon theme active
if (theme === 'neon' || theme === 'neon-refined') {
  loadNeonFonts();
}
```

---

## 🔧 How to Use

### HTML Classes

```html
<!-- Font Family -->
<p class="font-sans">System sans-serif text</p>
<code class="font-mono">monospace code</code>
<h1 class="font-display">Display heading</h1>

<!-- Font Size -->
<h1 class="text-4xl">Large heading</h1>
<p class="text-base">Normal paragraph</p>
<small class="text-sm">Small text</small>

<!-- Font Weight -->
<h2 class="font-bold">Bold heading</h2>
<p class="font-normal">Normal weight</p>
<span class="font-light">Light text</span>

<!-- Combined -->
<h1 class="font-display text-6xl font-black text-neon-cyan">
  CYBER TITLE
</h1>
```

### CSS Variables

```css
/* Use in custom CSS */
.my-heading {
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
}

.my-code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}
```

---

## 🎓 Typography Hierarchy Example

```html
<!-- Recommended hierarchy -->
<article>
  <h1 class="text-5xl font-bold">Main Article Title</h1>
  <p class="text-xl font-light text-secondary">Lead paragraph with lighter weight</p>

  <h2 class="text-3xl font-semibold">Section Heading</h2>
  <p class="text-base font-normal">Regular body text for reading</p>

  <h3 class="text-2xl font-semibold">Subsection</h3>
  <p class="text-base font-normal">More body content...</p>

  <blockquote class="text-lg font-medium">
    "Important quote stands out with size and weight"
  </blockquote>

  <small class="text-sm text-secondary">Caption or footnote</small>
</article>
```

---

## 🌐 Browser Support

All fonts use fallback stacks for maximum compatibility:

- **Modern Browsers:** Full support for web fonts
- **IE11:** Falls back to system fonts
- **Older Browsers:** Graceful degradation to Arial/Times

---

## 📖 Quick Reference Cheat Sheet

| Use Case | Font Family | Size | Weight |
|----------|-------------|------|--------|
| **Hero Title** | Display/Sans | 6xl-9xl | Bold-Black |
| **Page Heading** | Sans | 4xl-5xl | Bold |
| **Section Heading** | Sans | 2xl-3xl | Semibold-Bold |
| **Body Text** | Sans | base | Normal |
| **Small Labels** | Sans | sm | Normal-Medium |
| **Code** | Mono | sm-base | Normal-Medium |
| **Captions** | Sans | xs-sm | Normal |
| **Buttons** | Sans | sm-base | Medium-Semibold |
| **Display (Neon)** | Orbitron | 4xl+ | Bold-Black |

---

## 🎬 Interactive Demo

**View the full font showcase:**
```
/docs/fonts.html
```

Features:
- Live theme switching
- All font families with examples
- Complete size and weight scales
- Neon text effects (when neon theme active)
- Usage guidelines and code snippets
- Interactive demonstrations

---

## 📞 Need Help?

- **Documentation:** `/docs/fonts.html`
- **Typography Utilities:** `utilities/typography.css`
- **Token Definitions:** `tokens/core/typography.css`
- **Neon Fonts:** `utilities/fonts-neon.css`

---

**Made with ♥️ for Aural UI**
