# Aural UI - Social Launch Templates

Use these ready-to-post templates to launch Aural UI across different platforms.

---

## 🐦 Twitter/X Post

```
Just launched Aural UI 1.0 🎨

Framework-agnostic design system with:
✅ WCAG AA accessible (not just aria-labeled!)
✅ React/Vue/Svelte examples for every component
✅ 60+ components, 9 themes
✅ AI-optimized docs for @ClaudeAI / ChatGPT coding
✅ Zero dependencies

NPM: npm i aural-design
Docs: https://ferology.github.io/aural-ui/storybook/

Perfect for accessibility-first projects 🦾

#webdev #a11y #reactjs #vuejs #accessibility
```

**With Image**: Create screenshot of theme gallery or component showcase

---

## 📱 Reddit Post (r/webdev)

**Title**: Aural UI - Framework-agnostic, WCAG AA accessible design system with AI-optimized docs

**Body**:

````markdown
Hey r/webdev! I just launched Aural UI 1.0 - a design system I built after getting frustrated with having to manually fix accessibility issues in every component library I used.

## What is it?

Aural UI is a framework-agnostic design system with 60+ components that are WCAG AA accessible by default. Not just "aria-label everything" accessible - actually tested with screen readers, proper contrast ratios, keyboard navigation, etc.

## Why I built it

Three pain points I kept running into:

1. **Accessibility is an afterthought** - Most component libraries don't prioritize it, so you spend hours fixing ARIA attributes
2. **Framework lock-in** - Our team uses React AND Vue, and I was tired of maintaining two design systems
3. **AI coding struggles** - Claude/ChatGPT would generate components with missing accessibility patterns because docs weren't comprehensive enough

## What makes it different

✅ **Truly accessible** - WCAG 2.1 AA compliant (4.5:1+ contrast), High-Contrast theme achieves AAA (7:1+)
✅ **Framework-agnostic** - Every component has examples for React, Vue, Svelte, and Vanilla HTML
✅ **AI-optimized docs** - Comprehensive enough that Claude/ChatGPT can copy-paste working, accessible code
✅ **9 built-in themes** - Dark, Light, Neon, High-Contrast, Colorblind-Friendly, and more
✅ **Zero dependencies** - Pure CSS + optional vanilla JS
✅ **CDN or NPM** - Use via CDN (no build) or `npm install aural-design`

## Quick example

```html
<!-- CDN - no installation needed -->
<link rel="stylesheet" href="https://unpkg.com/aural-design/dist/aural-ui.css" />

<!-- Accessible form (WCAG AA compliant) -->
<div class="form-group">
  <label class="label" for="email">Email</label>
  <input type="email" id="email" class="input" aria-required="true" />
  <button class="btn btn-primary">Submit</button>
</div>

<!-- Theme switching -->
<html data-theme="neon-dark"></html>
```
````

## Links

- **NPM**: `npm install aural-design`
- **Docs**: https://ferology.github.io/aural-ui/storybook/
- **GitHub**: https://github.com/ferology/aural-ui
- **CDN**: https://unpkg.com/aural-design

## Perfect for

- Accessibility-first projects (government, healthcare, education)
- Multi-framework teams
- AI-assisted development (Claude Code, Cursor, Copilot)
- Rapid prototyping
- White-label SaaS (easy theming)

I'd love feedback, especially from folks working on accessibility-focused projects!

[Screenshot of component showcase or theme gallery]

````

**Flair**: Discussion or Show-off: Project

---

## 🟠 Reddit Post (r/reactjs)

**Title**: Aural UI - WCAG AA accessible components with React examples (also works with Vue/Svelte)

**Body**:

```markdown
Built a design system that's actually accessible by default (WCAG AA compliant, not just aria-labeled).

## Why React developers might care

✅ **Copy-paste React examples** - Every component has documented React code with hooks
✅ **TypeScript support** - Full type definitions included
✅ **Accessible by default** - Proper ARIA patterns, keyboard navigation, 4.5:1+ contrast
✅ **No framework lock-in** - Works with React, but also Vue/Svelte if your team uses both
✅ **AI-friendly** - Claude/ChatGPT can generate working code because docs are comprehensive
✅ **Zero React dependencies** - Uses pure CSS, no styled-components or emotion required

## Quick example

```jsx
import 'aural-design/dist/aural-ui.css';

function LoginForm() {
  return (
    <div className="form-group">
      <label className="label" htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="input"
        aria-required="true"
      />
      <button className="btn btn-primary">Log In</button>
    </div>
  );
}
````

**Installation**: `npm install aural-design`

**Docs**: https://ferology.github.io/aural-ui/storybook/ (filter by React examples)

**GitHub**: https://github.com/ferology/aural-ui

Would love feedback from the React community!

````

---

## 🟢 Reddit Post (r/vuejs)

**Title**: Aural UI - Accessible Vue 3 components (framework-agnostic, also works with React/Svelte)

**Body**:

```markdown
Built an accessible design system with Vue 3 Composition API examples for every component.

## Why Vue devs might care

✅ **Vue 3 Composition API examples** - Every component documented with `<script setup>`
✅ **WCAG AA accessible** - Proper ARIA, contrast ratios, keyboard navigation
✅ **Framework-agnostic** - Works with Vue, but also React/Svelte if needed
✅ **No build step required** - Can use via CDN or npm
✅ **9 themes** - Easy to white-label for clients
✅ **AI-friendly docs** - Claude/ChatGPT can generate accessible Vue code

## Quick example

```vue
<template>
  <div class="form-group">
    <label class="label" for="email">Email</label>
    <input
      type="email"
      id="email"
      class="input"
      v-model="email"
      aria-required="true"
    />
    <button class="btn btn-primary">Submit</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'aural-design/dist/aural-ui.css';

const email = ref('');
onMounted(() => window.Aural?.init());
</script>
````

**Installation**: `npm install aural-design`

**Docs**: https://ferology.github.io/aural-ui/storybook/

**GitHub**: https://github.com/ferology/aural-ui

Feedback welcome!

````

---

## 🟠 Reddit Post (r/sveltejs)

Similar to Vue post, but with Svelte examples using `onMount` and `bind:value`.

---

## 📝 Dev.to Article

**Title**: Introducing Aural UI: An Accessible Design System for AI-Assisted Development

**Tags**: webdev, accessibility, react, vue

**Body**:

```markdown
# The Problem

I was building a healthcare app that needed to be WCAG AA compliant. I tried several popular component libraries, but kept running into the same issues:

1. **Accessibility was manual** - Every component needed ARIA attributes added
2. **Framework lock-in** - Our backend team used Vue, frontend used React
3. **AI struggled** - When using Claude/ChatGPT to generate code, it missed accessibility patterns because docs weren't detailed enough

So I built Aural UI to solve these problems.

## What is Aural UI?

A framework-agnostic design system with 60+ components that are WCAG 2.1 AA accessible by default.

### Key Features

✅ **WCAG AA Compliant** - 4.5:1+ contrast ratios, proper ARIA patterns, keyboard navigation
✅ **Framework-Agnostic** - Works with React, Vue, Svelte, or plain HTML
✅ **AI-Optimized Documentation** - Comprehensive examples for Claude/ChatGPT coding
✅ **9 Built-in Themes** - Including High-Contrast (WCAG AAA) and Colorblind-Friendly
✅ **Zero Dependencies** - Pure CSS + optional vanilla JS
✅ **CDN or NPM** - Use via unpkg or `npm install aural-design`

## Quick Start

### CDN (no installation)

\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/aural-design/dist/aural-ui.css">

<button class="btn btn-primary">Accessible Button</button>
\`\`\`

### NPM

\`\`\`bash
npm install aural-design
\`\`\`

## The AI Angle

What makes Aural UI unique is how well it works with AI assistants.

Every component has:
- **Comprehensive docs** - AI can copy-paste working code
- **Usage guidelines** - "When to use Select vs Combobox"
- **Accessibility built-in** - AI doesn't have to guess ARIA attributes
- **Framework examples** - React, Vue, Svelte, HTML all documented

This means when you ask Claude or ChatGPT to build a form, it can reference the docs and generate truly accessible code, not just slap aria-label on everything.

## Example: Accessible Form

\`\`\`html
<div class="form-group">
  <label class="label" for="email">Email</label>
  <input
    type="email"
    id="email"
    class="input"
    aria-required="true"
  >
  <p class="form-helper" id="email-help">We'll never share your email</p>
</div>
\`\`\`

**What makes this accessible:**
- Proper `<label for="">` association (not just visual)
- `aria-required` for screen readers
- Helper text with semantic `<p>` (not just styled text)
- 4.5:1 contrast ratio (tested)
- 44px touch target (mobile-friendly)

## Comparison to Other Libraries

| Feature | Aural UI | shadcn/ui | Bootstrap |
|---------|----------|-----------|-----------|
| Framework-agnostic | ✅ | ❌ React only | ✅ |
| WCAG AA built-in | ✅ | ⚠️ Manual | ⚠️ Manual |
| Built-in themes | 9 | 0 | 2 |
| AI-friendly docs | ✅ | ✅ | ❌ |
| Zero dependencies | ✅ | ❌ Radix | ✅ |

## Perfect For

- ♿ Accessibility-first projects (government, healthcare, education)
- 🤖 AI-assisted development (Claude Code, Cursor, Copilot)
- 🚀 Rapid prototyping
- 📱 Multi-framework teams
- 🎨 White-label SaaS

## Links

- **NPM**: `npm install aural-design`
- **Docs**: https://ferology.github.io/aural-ui/storybook/
- **GitHub**: https://github.com/ferology/aural-ui

## What's Next

I'm planning to add:
- More components (Data Tables, File Upload, Rich Text Editor)
- Figma plugin
- VS Code snippet extension
- More themes

Feedback welcome! Especially from folks working on accessibility-focused projects.

---

*Made with ♿ accessibility and 🤖 AI-assisted development in mind*
\`\`\`

---

## 🎬 Product Hunt Launch

**Tagline**: Framework-agnostic, WCAG AA accessible design system for AI-assisted development

**Description**:

````

Aural UI is a design system with 60+ components that are WCAG 2.1 AA accessible by default.

Unlike other component libraries, Aural UI:
✅ Works with React, Vue, Svelte, or plain HTML (framework-agnostic)
✅ Has comprehensive docs optimized for AI coding (Claude, ChatGPT, Cursor)
✅ Includes 9 built-in themes (including High-Contrast and Colorblind-Friendly)
✅ Has zero dependencies (pure CSS + optional vanilla JS)
✅ Can be used via CDN or NPM

Perfect for accessibility-first projects, multi-framework teams, and AI-assisted development.

```

**First Comment** (post immediately after launch):

```

Hey Product Hunt! 👋

I'm the creator of Aural UI. Here's why I built it:

**The Problem**
I was working on a healthcare app that needed WCAG AA compliance. Every component library I tried required hours of manual accessibility fixes.

**The Solution**
Aural UI has accessibility baked in:

- 4.5:1+ contrast ratios (tested with real users)
- Proper ARIA patterns (not just aria-label everything)
- Keyboard navigation that actually works
- High-Contrast theme achieves WCAG AAA (7:1+ contrast)

**The AI Angle**
What makes this unique is how well it works with AI assistants. Claude, ChatGPT, and Cursor can now generate truly accessible code because the docs are comprehensive enough.

**Try it now** (no installation needed):
https://unpkg.com/aural-design/dist/aural-ui.css

**Questions I can answer:**

- How does it compare to shadcn/ui?
- Can I use it with [framework]?
- How do I customize themes?
- Is it production-ready?

Thanks for checking it out!

```

---

## 📊 Hacker News Post

**Title**: Aural UI – Framework-agnostic, WCAG AA accessible design system

**URL**: https://github.com/ferology/aural-ui

**First Comment**:

```

Author here. Built this after struggling with accessibility in existing component libraries.

Key differentiator: comprehensive docs optimized for AI coding. Claude/ChatGPT can now generate WCAG-compliant code instead of just slapping aria-label on divs.

Framework-agnostic (React/Vue/Svelte/HTML), 60+ components, 9 themes, zero dependencies.

Try it: https://unpkg.com/aural-design/dist/aural-ui.css

Happy to answer questions!

```

---

## 🎥 YouTube Video Script (5 minutes)

```

[INTRO - 0:00]
"In this video, I'm showing you Aural UI - a design system that's actually accessible by default, works with any framework, and is optimized for AI coding."

[PROBLEM - 0:30]
"Most component libraries say they're accessible, but in practice you spend hours fixing ARIA attributes, contrast ratios, and keyboard navigation."

[SOLUTION - 1:00]
"Aural UI has WCAG AA accessibility baked in. Every component is tested with screen readers, has proper contrast ratios, and full keyboard support."

[DEMO - 1:30]
[Screen record: Install via npm, build a form, show theme switching]
"Let's build an accessible login form in 30 seconds..."

[AI ANGLE - 3:00]
"What makes this unique is the AI-optimized docs. Watch what happens when I ask Claude to build a modal..."
[Screen record: Claude generating accessible modal code]

[COMPARISON - 4:00]
"vs shadcn/ui: Framework-agnostic, not React-only"
"vs Bootstrap: Modern CSS, comprehensive ARIA patterns"
"vs Tailwind: Pre-built accessible components, not utility-first"

[CALL TO ACTION - 4:30]
"Try it now: npm install aural-design"
"Docs: ferology.github.io/aural-ui/storybook"
"Perfect for accessibility-first projects!"

```

---

## 📧 Email to Accessibility Communities

**Subject**: New WCAG AA Component Library - Aural UI

**Body**:

```

Hi [Community],

I wanted to share a project I built for accessibility-first development.

Aural UI is a component library where WCAG 2.1 AA accessibility isn't an add-on - it's built-in from day one.

What makes it different:

- Tested with NVDA, JAWS, and VoiceOver
- 4.5:1+ contrast ratios (High-Contrast theme achieves 7:1+)
- Proper ARIA patterns (not just aria-label everything)
- 44px touch targets for mobile accessibility
- Colorblind-friendly theme

It's also framework-agnostic (React, Vue, Svelte, HTML) and works great with AI coding tools (Claude, ChatGPT).

Try it: https://unpkg.com/aural-design/dist/aural-ui.css
Docs: https://ferology.github.io/aural-ui/storybook/

I'd love feedback from the accessibility community!

Best,
[Your Name]

```

**Communities to email:**
- WebAIM mailing list
- A11y Slack groups
- IAAP (International Association of Accessibility Professionals)
- ARIA Authoring Practices mailing list

---

## 🎯 Next Steps

1. **Week 1**: Reddit (r/webdev, r/reactjs, r/vuejs)
2. **Week 2**: Product Hunt launch
3. **Week 3**: Dev.to article + Twitter threads
4. **Week 4**: YouTube video + Hacker News
5. **Ongoing**: Discord community, GitHub Discussions

**Track with**: Google Analytics on docs site, NPM download stats, GitHub star growth
```
