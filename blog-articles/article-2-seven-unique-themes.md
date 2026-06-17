---
title: 7 Unique Themes: How I Designed Beyond Bootstrap's Generic Look
published: false
description: From a night-and-weekend frustration with same-looking AI prototypes to seven fully accessible design languages sharing one token system.
tags: design, css, webdev, ui
cover_image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/your-cover-image.png
canonical_url: https://yourblog.com/seven-unique-themes
---

# 7 Unique Themes: How I Designed Beyond Bootstrap's Generic Look

Every AI prototype I opened in 2024 had the same dashboard.

Blue hero. Card grid. Soft gradient button. A Lovable output sat next to a v0 output sat next to a Bolt output, and if you covered the logos you could not tell them apart. The "infinite variety" the tools promised on their landing pages collapsed, in practice, into a single mid Tailwind aesthetic, repeated forever.

Figma, meanwhile, was on a sort of permanent keynote tour about AI. Every few weeks there was a new reel, a new onstage demo, a new "we're thinking deeply about" thread. The tool under it all was still — mostly — nudging rectangles. You could feel the pressure: a mature product that had to have an AI answer, whether the answer was ready or not.

I was not in any of those meetings. I had a day job, a laptop, and weekends.

So I started building [Aural UI](https://github.com/ferology/aural-ui). No client, no sprint, no deliverable. That last part is the whole reason this article exists. The only way I was going to end up with **seven** distinct aesthetics — brutalist Kinetic, cyberpunk Neon, a Light theme I actually trusted on white — all WCAG AA compliant, sharing the same components, was to have the one thing working designers never get:

Permission to take it too seriously.

Here's how those seven themes came to be.

## The Problem I Was Actually Solving

Most CSS frameworks ship with one aesthetic:

- Bootstrap → clean, corporate
- Material Design → Google's house style
- Tailwind → whatever you build, which, see above, is usually the same gradient card grid

And most AI UI generators inherit whichever of those their training skewed toward. If your product is supposed to feel like anything in particular — brutalist, neon, high-contrast, inclusive-by-default — you are either rebuilding from scratch or fighting the tool.

I wanted the opposite stack:

- 🏗️ Brutalist for the startup that actually has a voice
- 🌃 Cyberpunk for the gaming/crypto/nightlife thing that deserves the energy
- ♿ High-contrast for the healthcare app where "subtle" is a bug

One component library. Seven personalities. No contrast failures anywhere.

## Design Philosophy: Themes as Full Aesthetics

Each Aural UI theme isn't just a color swap — it's a complete **design language**. Spacing, weight, radius, shadow character, typographic tone. Kinetic isn't Dark with different variables. It's its own answer to the question "what should a button feel like?"

| Theme                   | Aesthetic             | The question it answers                                |
| ----------------------- | --------------------- | ------------------------------------------------------ |
| **Dark**                | Modern, professional  | What's the default I already live in?                  |
| **Light**               | Clean, accessible     | Does the system survive outside my preferences?        |
| **Neon**                | Cyberpunk, edgy       | Can "glowing" actually be readable?                    |
| **Neon Refined**        | Sophisticated neon    | What happens when cyberpunk grows up?                  |
| **Kinetic**             | Brutalist, bold       | Can the token system handle a truly different _shape_? |
| **High Contrast**       | Maximum accessibility | Does "a11y-first" actually mean anything?              |
| **Colorblind Friendly** | Safe palette          | Who did I forget?                                      |

Each section below is that question, answered.

---

## 1. Dark Theme — The Starting Point

### Why it came first

Dark was never a decision. It was the room I was already in. Every editor, every terminal, every late-night browsing session — dark. If I was going to do this as a night-and-weekend project, dark was the one theme I owed nothing to justify.

### Design Language

```
✦ Modern professionalism
✦ Reduced eye strain
✦ Energy efficient (OLED screens)
✦ Focus on content
```

### Color Palette

```css
:root[data-theme='dark'] {
  /* Backgrounds */
  --color-bg-primary: #0f0f1a; /* Deep space blue */
  --color-bg-secondary: #1a1a2e; /* Card surfaces */
  --color-bg-tertiary: #252540; /* Inputs, hovers */

  /* Text */
  --color-text-primary: #f5f5fa; /* High contrast white */
  --color-text-secondary: #a0a0b8; /* Muted descriptions */

  /* Brand */
  --color-primary: #5ebd8f; /* Vibrant green */
  --color-secondary: #4da77a; /* Deeper green */
}
```

### Why It Works

- **17.51:1 contrast** on primary text (WCAG AAA)
- **8.29:1 contrast** on primary color (excellent readability)
- **Blue-tinted blacks** are gentler than pure black
- **Green accent** provides energy without harshness

### Best For

```
✓ SaaS dashboards
✓ Developer tools
✓ Admin panels
✓ Data-heavy interfaces
✓ Code editors
```

---

## 2. Light Theme — The Test

### Why it came next

Dark was easy because it flattered me. Light was the test: would the system still feel like itself outside my personal taste? It's also the theme where my very first "this is obviously fine" assumption broke. My favorite green on dark (`#5ebd8f`) landed on white at **2.29:1**. WCAG wants 4.5. I had a theme that failed contrast on the second palette I tried.

That was the day I wrote the contrast checker into my workflow and stopped trusting my eyes.

### Color Palette

```css
:root[data-theme='light'] {
  /* Backgrounds */
  --color-bg-primary: #ffffff; /* Pure white */
  --color-bg-secondary: #f9fafb; /* Off-white surfaces */
  --color-bg-tertiary: #f3f4f6; /* Hover states */

  /* Text */
  --color-text-primary: #111827; /* Near-black */
  --color-text-secondary: #4b5563; /* Medium gray */

  /* Brand */
  --color-primary: #3d8a64; /* Darker green for contrast */
  --color-secondary: #326d51; /* Even darker */
}
```

### The Contrast Reality

```
#5ebd8f on white = 2.29:1 ❌ (needs 4.5:1)
#3d8a64 on white = 4.5:1 ✅
#326d51 on white = 7.2:1 ✅
```

Same "green." Different theme. Different shade. This is why every theme has its own palette, not a single palette inverted.

### Best For

```
✓ Marketing websites
✓ Documentation
✓ E-commerce
✓ Corporate sites
✓ Forms and applications
```

---

## 3. Neon — The Experiment

### Why it exists

Neon started as a joke and survived because it was the most fun theme to ship. _What if cyberpunk, but readable?_ Most "neon" design kits fail the instant you put body text on a glowing card. You can squint your way through a landing hero; you cannot squint your way through a settings page.

The rule I ended up with: **glow lives on containers. Text never glows.**

### Design Language

```
✦ Cyberpunk aesthetic
✦ High energy, edgy
✦ Retro-futuristic
✦ Bold and unapologetic
```

### Color Palette

```css
:root[data-theme='neon'] {
  /* Backgrounds - Dark for contrast */
  --color-bg-primary: #0a0a0f; /* Nearly black */
  --color-bg-secondary: #1a1a24; /* Subtle lift */

  /* Neon Colors */
  --color-primary: #00ffff; /* Cyan glow */
  --color-secondary: #ff00ff; /* Magenta glow */
  --color-accent: #ffff00; /* Yellow highlights */

  /* Text */
  --color-text-primary: #ffffff; /* Pure white */
  --color-text-secondary: #b0b0c8; /* Muted */
}
```

### The Glow Effect

```css
.btn-primary {
  background: #00ffff;
  color: #000000; /* Black text on cyan = 16.75:1 ✅ */
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.5),
    0 0 40px rgba(0, 255, 255, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.5);
  text-shadow: none; /* NO glow on text! */
}

.btn-primary:hover {
  box-shadow:
    0 0 30px rgba(0, 255, 255, 0.8),
    0 0 60px rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
}
```

### The Rule Baked In

```css
/* ❌ Hard to read — the glow *is* the text */
.heading {
  color: #00ffff;
  text-shadow: 0 0 20px #00ffff;
}

/* ✅ Readable. Vibe survives. */
.heading {
  color: #00ffff;
  text-shadow: 0 2px 8px rgba(0, 255, 255, 0.3); /* Subtle only */
}
```

### Best For

```
✓ Gaming sites
✓ Crypto/Web3 apps
✓ Music/Nightlife
✓ Tech startups (edgy brand)
✓ Creative portfolios
```

---

## 4. Neon Refined — Cyberpunk, Grown Up

### Why it exists

Once Neon worked, I wanted to see if the same energy could read as _premium_ instead of _arcade_. Neon Refined is the answer — same DNA, softer glow, purple instead of magenta, gold instead of yellow. Turns out most "luxury tech" brands want exactly this and don't know how to ask for it.

### Color Palette

```css
:root[data-theme='neon-refined'] {
  /* Softer backgrounds */
  --color-bg-primary: #0f0f1a;
  --color-bg-secondary: #1a1a2e;

  /* Refined neon colors */
  --color-primary: #4be1ff; /* Lighter cyan */
  --color-secondary: #9b87f5; /* Purple instead of magenta */
  --color-accent: #ffd700; /* Gold instead of yellow */

  /* Softer text */
  --color-text-primary: #f0f0f8;
  --color-text-secondary: #94a3b8;
}
```

### The Refinement

```css
/* Softer glows */
.card {
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid rgba(75, 225, 255, 0.3);
  box-shadow: 0 4px 20px rgba(75, 225, 255, 0.1); /* Subtle */
  backdrop-filter: blur(20px);
}

.card:hover {
  border-color: rgba(75, 225, 255, 0.6);
  box-shadow: 0 8px 32px rgba(75, 225, 255, 0.2); /* Gentle increase */
}
```

### Best For

```
✓ E-commerce (tech products)
✓ SaaS landing pages
✓ Creative agencies
✓ Fashion/lifestyle brands
✓ High-end portfolios
```

---

## 5. Kinetic — The Shape Test

### Why it exists

Kinetic is the theme that stress-tested the entire token architecture. Everything else was _Dark with different colors_. Kinetic is `border-radius: 0`, `font-weight: 900`, `text-transform: uppercase`, chunky offset shadows, zero apologies. If one component library could ship both Neon Refined **and** Kinetic, I'd know the token system held.

It held.

### Design Language

```
✦ Brutalist/Neo-brutalist
✦ Bold, unapologetic
✦ High contrast, sharp edges
✦ Function over form
```

### Color Palette

```css
:root[data-theme='kinetic'] {
  /* High contrast */
  --color-bg-primary: #000000; /* Pure black */
  --color-bg-secondary: #1a1a1a; /* Dark gray */

  /* Bold accents */
  --color-primary: #cdff00; /* Neon lime */
  --color-secondary: #ffff00; /* Electric yellow */

  /* Stark text */
  --color-text-primary: #ffffff; /* Pure white */
  --color-text-secondary: #cccccc; /* Light gray */
}
```

### Design Elements

```css
/* Sharp, no-nonsense buttons */
.btn {
  border-radius: 0; /* No curves */
  border: 2px solid currentColor;
  font-weight: 900; /* Extra bold */
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 16px 32px;
}

.btn-primary {
  background: #cdff00;
  color: #000000;
  border-color: #000000;
  box-shadow: 8px 8px 0 #000000; /* Offset shadow */
}

.btn-primary:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 #000000; /* Exaggerated */
}

/* Harsh borders */
.card {
  border: 4px solid #ffffff;
  border-radius: 0;
  box-shadow: 12px 12px 0 rgba(205, 255, 0, 0.2);
}
```

### Typography

```css
/* Brutalist type hierarchy */
h1 {
  font-size: 4rem;
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

/* Grid-based spacing */
* {
  margin: 0;
  padding: calc(var(--space-unit) * 4); /* 8px grid */
}
```

### Best For

```
✓ Tech startups (bold brand)
✓ Art/music projects
✓ Punk/alternative brands
✓ Experimental interfaces
✓ Statement pieces
```

---

## 6. High Contrast — The a11y Proof

### Why it exists

High-contrast is the theme I added because I felt guilty. Aural UI was being sold as accessibility-first; making "accessibility-first" mean something concrete required a theme that existed _only_ to prove it — 21:1 contrast, 3px borders, no subtle states, every disabled element obvious at a glance. The one theme where "subtle" is not a compliment.

### Color Palette

```css
:root[data-theme='high-contrast'] {
  /* Extreme contrast */
  --color-bg-primary: #000000; /* Pure black */
  --color-bg-secondary: #000000; /* Also black */

  /* Maximum contrast colors */
  --color-text-primary: #ffffff; /* 21:1 contrast ✅ */
  --color-primary: #ffffff; /* White on black */
  --color-secondary: #0096ff; /* Bright blue */

  /* Thicker borders */
  --border-width: 3px;
}
```

### Design Rules

1. **Never rely on color alone**

```css
/* ❌ Color only */
.error {
  color: red;
}

/* ✅ Color + icon + border */
.error {
  color: var(--color-danger);
  border-left: 4px solid currentColor;
}
.error::before {
  content: '⚠ ';
}
```

2. **Thicker everything**

```css
/* Inputs */
input {
  border: 3px solid #ffffff;
  font-size: 18px; /* Larger text */
}

/* Focus indicators */
*:focus-visible {
  outline: 4px solid #0096ff;
  outline-offset: 4px;
}
```

3. **No subtle states**

```css
/* Disabled = obvious */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  text-decoration: line-through;
}
```

### Best For

```
✓ Government websites
✓ Healthcare apps
✓ Senior-focused interfaces
✓ Legal requirement compliance
✓ Accessibility-first orgs
```

---

## 7. Colorblind-Friendly — The Missing One

### Why it exists

8% of men have some form of color vision deficiency. I kept meaning to build a safe palette "soon." Then I sat next to someone using red/green status badges on a data dashboard and realized my "inclusive by default" design system was not, in fact, inclusive by default. Colorblind-friendly is the theme that exists because I got caught.

No red-green pairs. Blue and orange primaries. Icons and patterns carrying every signal that color carries elsewhere.

### Color Palette

```css
:root[data-theme='colorblind'] {
  /* Safe color choices */
  --color-primary: #1a8cff; /* Blue (safe) */
  --color-secondary: #ffa31a; /* Orange (safe) */

  /* Status colors (no red/green) */
  --color-success: #1a8cff; /* Blue instead of green */
  --color-warning: #ffa31a; /* Orange instead of yellow */
  --color-danger: #ff6b35; /* Red-orange instead of red */
  --color-info: #4ecdc4; /* Teal */
}
```

### Visual Patterns

Don't rely on color alone:

```css
/* Status with patterns */
.badge-success {
  background: var(--color-success);
  color: white;
}
.badge-success::before {
  content: '✓ '; /* Checkmark */
}

.badge-warning {
  background: var(--color-warning);
  color: black;
}
.badge-warning::before {
  content: '⚠ '; /* Warning symbol */
}
```

### Chart Colors (Colorblind Safe)

```css
/* Safe data viz palette */
--chart-1: #1a8cff; /* Blue */
--chart-2: #ffa31a; /* Orange */
--chart-3: #4ecdc4; /* Teal */
--chart-4: #ff6b35; /* Red-orange */
--chart-5: #95e1d3; /* Mint */
```

### Best For

```
✓ Educational platforms
✓ Data visualization
✓ Healthcare interfaces
✓ Public services
✓ Inclusive SaaS products
```

---

## The Technical Magic: CSS Variables

Seven themes. One set of components. How?

The whole thing hinges on the idea that a component like `.btn` should know _what it is_ but not _what it looks like_. The theme tells it what it looks like.

```css
/* Base structure (aural-ui.css) */
.btn {
  padding: var(--btn-padding);
  border-radius: var(--btn-radius);
  background: var(--color-btn-primary);
  color: var(--color-btn-text);
  font-weight: var(--btn-weight);
  text-transform: var(--btn-transform);
  box-shadow: var(--btn-shadow);
}

/* Dark theme (dark.css) */
:root[data-theme='dark'] {
  --btn-radius: 8px;
  --btn-weight: 500;
  --btn-transform: none;
  --btn-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Kinetic theme (kinetic.css) */
:root[data-theme='kinetic'] {
  --btn-radius: 0; /* Sharp corners */
  --btn-weight: 900; /* Extra bold */
  --btn-transform: uppercase; /* All caps */
  --btn-shadow: 8px 8px 0 #000; /* Brutalist shadow */
}
```

Switching themes is one attribute:

```javascript
function setTheme(themeName) {
  document.getElementById('theme-link').href = `${themeName}.css`;
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
}
```

---

## How I Actually Built Each One

Every theme went through the same four-step loop. Nothing special — just done properly, because I had the time.

**1. Mood board.** Screenshots, Coolors palettes, Dribbble/Behance pulls until the _feeling_ was specific enough to name.

**2. Define the color system.** Primary, secondary, three or four backgrounds, three or four text shades, status colors, border scale.

**3. Test contrast for every pair.** Not just "the main one." Every text-on-background, every icon-on-button, every focus ring on every surface. WebAIM, then Chrome DevTools, then a screen reader just to be sure. Minimums: 4.5:1 for text, 3:1 for UI.

**4. Build a full page in the theme.** Landing. Dashboard. Form. Table. If any of those made me wince, something was off in the palette and I'd go back to step 2.

The night-and-weekend part is what made this possible. There was no sprint to defer "re-test on Colorblind." If I noticed something wrong, I fixed it, because the only person I was disappointing was me.

---

## What I Actually Learned

### 1. Constraints Breed Creativity

Forcing myself to maintain accessibility while creating seven distinct aesthetics made me a better designer than any single "beautiful, accessible" project would have.

### 2. Test in Context

A color that's perfect in Figma fails in a browser with real content. Every time.

### 3. Dark Mode ≠ Inverting Colors

Each theme needs thoughtful consideration of depth, shadows, and hierarchy. Kinetic and High-Contrast both have black backgrounds and look nothing alike.

### 4. Users Appreciate Options

Different users have different needs. Seven themes means a real chance that _something_ fits.

### 5. CSS Variables Are Powerful

One component library, seven personalities, one tokens file to rule them all.

---

## The Part I Wasn't Ready For

I thought the hard part was already behind me. Seven themes, all contrast-tested, all sharing one set of components. I shipped the first multi-theme demo to a friend. They opened it on their iPhone.

Buttons stuck on hover. The Neon header disappeared behind the notch. Kinetic's offset shadow snapped weirdly when the address bar collapsed. Private-mode Safari threw a localStorage error the first time the theme switcher tried to save a preference.

The themes were the _fun_ part. Making them work on every browser anyone actually uses is where the real design system starts.

That's the next article.

---

## Try All 7 Themes

🎨 **[Live Demo with Theme Switcher](https://ferology.github.io/aural-ui)**

```bash
npm install aural-ui
```

```html
<link rel="stylesheet" href="aural-ui.css" /> <link rel="stylesheet" href="kinetic.css" />
<!-- or dark, neon, etc. -->
```

---

## What's Your Aesthetic?

- 🌙 **Dark** — professional and modern
- ☀️ **Light** — clean and classic
- 🌃 **Neon** — edgy and bold
- ✨ **Neon Refined** — sophisticated glow
- ⚡ **Kinetic** — brutalist energy
- 🔍 **High Contrast** — maximum accessibility
- 👁️ **Colorblind** — inclusive design

Drop a comment below. 👇

---

⭐ [Star Aural UI on GitHub](https://github.com/ferology/aural-ui)
📚 [Read the Documentation](https://ferology.github.io/aural-ui/docs)

---

_This article is part of a series about building Aural UI:_

1. Building an Accessible Design System from Scratch
2. **7 Unique Themes: How I Designed Beyond Bootstrap** (you are here)
3. The Day Aural UI Broke on an iPhone: A Cross-Browser Reckoning
4. 60+ Components, 7 Themes, Zero Dependencies: The Library
5. How to Create Reusable UI Components with Pure CSS
6. Claude Design + Aural UI: Shipping Interfaces at the Speed of Thought
