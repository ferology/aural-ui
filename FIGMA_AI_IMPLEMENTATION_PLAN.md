# Figma Integration & AI-Optimized Design System - REALISTIC Plan

**Project:** Aural UI Design System
**Actual Scope:** 60+ components, 10 themes, 50+ stories
**Date:** 2026-03-02

---

## Reality Check: The True Scope

### What We Actually Have:
- ✅ **60+ components** (59 CSS files + additional variants)
- ✅ **10 themes** (minimal, light, dark, neon, neon-refined, kinetic, prismatic, warm, high-contrast, colorblind-friendly)
- ✅ **50 Storybook stories** with live examples
- ✅ **Comprehensive documentation** (COMPONENTS.md, COMPREHENSIVE_DOCUMENTATION.md)
- ✅ **Design tokens system** in `/tokens/core/`
- ✅ **Existing Figma plugin** for generating foundations

### What We DON'T Have:
- ❌ Figma component library file
- ❌ Code Connect mappings
- ❌ Machine-readable component metadata
- ❌ AI-optimized documentation

### Realistic Effort Estimate:
**To do EVERYTHING in Figma:**
- 60 components × 3-5 variants each × 3 sizes = ~500-1000 Figma components
- Design time: **200-300 hours** (not realistic)

**Our Approach:**
**Phase 1 MVP: Focus on highest-impact work with AI-first approach**

---

## Strategic Priorities

### Priority 1: AI-Optimized Documentation (HIGH ROI, LOW EFFORT)
**Time:** 6-8 hours
**Impact:** Immediate AI consumption improvement
**Effort:** Code/markdown only, no Figma needed

✅ This gives 80% of the benefit with 20% of the effort

### Priority 2: Figma Foundations + Core Components (MEDIUM EFFORT)
**Time:** 8-12 hours
**Impact:** Design handoff + Code Connect for essential components
**Scope:** 10-15 most-used components only

### Priority 3: Machine-Readable Registry (HIGH ROI)
**Time:** 4-6 hours
**Impact:** Enables AI, CLI tools, documentation generation
**Effort:** Scriptable and automatable

---

## Phase 1: AI-First Documentation (Week 1)

### Goal: Make Aural UI the best-documented design system for AI

**Total Time:** 6-8 hours
**No Figma work required**

---

### 1.1 Component Registry JSON ⭐ CRITICAL
**Time:** 3-4 hours
**File:** `/component-registry.json`

**Why This Matters:**
- Enables AI to instantly understand all 60 components
- Powers CLI tools, VS Code extensions, documentation sites
- Single source of truth for component metadata

**Structure:**
```json
{
  "version": "2.1",
  "generatedAt": "2026-03-02T...",
  "totalComponents": 60,
  "totalThemes": 10,
  "themes": [
    "minimal", "light", "dark", "neon", "neon-refined",
    "kinetic", "prismatic", "warm", "high-contrast", "colorblind-friendly"
  ],
  "categories": {
    "forms-inputs": ["Button", "Input", "Checkbox", "Radio", "Select", ...],
    "data-display": ["Table", "Card", "Badge", "Avatar", ...],
    "navigation": ["Tabs", "Breadcrumb", "Pagination", "Navbar", ...],
    "feedback": ["Modal", "Toast", "Alert", "Drawer", ...],
    "layout": ["Card", "Divider", "EmptyState", "Carousel", ...],
    "advanced": ["CommandPalette", "NotificationCenter", "TreeView"]
  },
  "components": [
    {
      "id": "button",
      "name": "Button",
      "category": "forms-inputs",
      "description": "Interactive button with multiple variants and states",
      "complexity": "simple",
      "priority": "critical",
      "usage": "high",

      "htmlStructure": "<button class=\"btn btn-{variant} btn-{size}\">Label</button>",

      "cssClasses": {
        "base": "btn",
        "variants": ["primary", "secondary", "outline", "ghost", "danger", "success"],
        "sizes": ["sm", "md", "lg"],
        "modifiers": ["loading", "icon-only", "block"],
        "states": ["default", "hover", "active", "focus", "disabled", "loading"]
      },

      "designTokens": {
        "colors": [
          "--color-button-primary-bg",
          "--color-button-primary-text",
          "--color-button-primary-border",
          "--color-button-primary-hover-bg"
        ],
        "spacing": ["--space-3", "--space-6"],
        "radius": ["--radius-md"],
        "shadows": ["--shadow-primary"],
        "typography": ["--text-base", "--font-medium"]
      },

      "javascript": {
        "required": false,
        "initialization": null,
        "methods": [],
        "events": ["click"]
      },

      "accessibility": {
        "role": "button",
        "required_attributes": ["accessible label (text or aria-label)"],
        "optional_attributes": ["aria-disabled", "aria-busy", "aria-pressed"],
        "keyboard_support": {
          "Enter": "Activate button",
          "Space": "Activate button",
          "Tab": "Focus button"
        },
        "screen_reader": "Announces as button with label and state",
        "focus_management": "Visible focus indicator required"
      },

      "examples": {
        "html": "<button class=\"btn btn-primary\">Click me</button>",
        "react": "import { Button } from '@aural-ui/react';\n\n<Button variant=\"primary\">Click me</Button>",
        "vue": "<AuralButton variant=\"primary\">Click me</AuralButton>",
        "svelte": "<Button variant=\"primary\">Click me</Button>"
      },

      "common_patterns": [
        {
          "name": "Submit button",
          "code": "<button type=\"submit\" class=\"btn btn-primary\">Submit</button>",
          "use_case": "Form submission"
        },
        {
          "name": "Loading button",
          "code": "<button class=\"btn btn-primary btn-loading\" disabled>\n  <span class=\"spinner\"></span>\n  Loading...\n</button>",
          "use_case": "Async operations"
        }
      ],

      "related_components": ["Icon", "Spinner", "Tooltip"],
      "works_well_with": ["Form", "Modal", "Card"],

      "dos": [
        "Use primary for main actions",
        "Include loading state for async operations",
        "Provide clear, action-oriented labels"
      ],
      "donts": [
        "Don't nest buttons",
        "Don't use outline on primary actions (low contrast)",
        "Don't forget disabled state during loading"
      ],

      "files": {
        "css": "components/button.css",
        "storybook": "stories/Button.stories.ts",
        "react": "packages/react/src/components/Button.tsx",
        "vue": "packages/vue/src/components/Button.vue",
        "svelte": "packages/svelte/src/components/Button.svelte"
      },

      "storybook_url": "http://localhost:6006/?path=/story/components-button",
      "docs_url": "https://ferology.github.io/aural-ui/docs/buttons.html",

      "theme_support": "all",
      "responsive": true,
      "tested": true,
      "wcag_level": "AA"
    }
  ]
}
```

**Generator Script:** `/scripts/generate-component-registry.js`
- Parse `/docs/data/navigation.json` for structure
- Extract CSS classes from component files
- Pull examples from Storybook stories
- Classify by complexity (simple/medium/complex)
- Priority (critical/high/medium/low)
- Usage frequency (high/medium/low)

**Output:** Complete registry for all 60 components

---

### 1.2 AI Component Guide ⭐ CRITICAL
**Time:** 2-3 hours
**File:** `/AI_COMPONENT_GUIDE.md`

**Purpose:** Help AI assistants quickly understand common patterns

**Contents:**

#### Quick Stats
```markdown
# Aural UI - AI Component Guide

## At a Glance
- **Components:** 60+
- **Themes:** 10 (all components compatible)
- **Accessibility:** WCAG 2.1 AA compliant
- **Frameworks:** Vanilla JS, React, Vue, Svelte
- **Bundle Size:** React 12KB, Vue 6KB, Svelte 16KB (gzipped)
```

#### Component Decision Tree
```markdown
## Finding the Right Component

**I need to collect user input:**
- Single line text → Input
- Multiple lines → Textarea
- Yes/No choice → Checkbox or Switch
- One from many → Radio or Select
- Many from many → Multi-Select or Checkbox group
- Number in range → Slider
- Date/Time → DatePicker / TimePicker
- File → FileUpload
- Color → ColorPicker
- Rating → Rating

**I need to navigate:**
- Between pages → Breadcrumb
- Between sections → Tabs
- Through items → Pagination or Stepper
- To other pages → Navbar or BottomNavigation
- Show/hide content → Accordion or Dropdown

**I need to display data:**
- Structured data → Table
- Grouped content → Card
- Small label → Badge or Chip
- User photo → Avatar
- Loading state → Spinner or Skeleton
- Empty state → EmptyState
- Code → CodeBlock
- Process status → Progress or Stepper
- Timeline → Timeline

**I need to give feedback:**
- Require action → Modal or Dialog
- Quick notification → Toast or Snackbar
- Persistent message → Alert Banner
- Extra context → Tooltip or Popover
- Contextual help → Popover
- Slide-in panel → Drawer

**I need layout/media:**
- Slide show → Carousel
- Photo grid → ImageGallery
- Visual separation → Divider
- No data state → EmptyState

**Advanced needs:**
- Quick search → CommandPalette
- Notifications → NotificationCenter
- Hierarchical data → TreeView
- Right-click menu → ContextMenu
```

#### Top 20 Common Patterns
```markdown
## Common UI Patterns

### 1. Login Form
**Components:** Input, Button, Card
**Tokens:** --space-4, --radius-lg, --shadow-md

```html
<div class="card">
  <form class="space-y-4">
    <div class="form-group">
      <label for="email" class="label">Email</label>
      <input type="email" id="email" class="input" required>
    </div>
    <div class="form-group">
      <label for="password" class="label">Password</label>
      <input type="password" id="password" class="input" required>
    </div>
    <button type="submit" class="btn btn-primary btn-block">
      Sign In
    </button>
  </form>
</div>
```

### 2. Confirmation Dialog
**Components:** Modal, Button
**JavaScript:** Aural.openModal(), Aural.closeModal()

```html
<div class="modal-overlay" id="delete-confirm">
  <div class="modal" role="dialog" aria-labelledby="modal-title">
    <div class="modal-header">
      <h2 id="modal-title">Confirm Deletion</h2>
      <button class="btn btn-ghost btn-sm" onclick="Aural.closeModal('delete-confirm')">
        ×
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="Aural.closeModal('delete-confirm')">
        Cancel
      </button>
      <button class="btn btn-danger" onclick="handleDelete()">
        Delete
      </button>
    </div>
  </div>
</div>
```

### 3. Data Table with Actions
### 4. Settings Form
### 5. User Profile Card
### 6. Search with Filters
### 7. Multi-Step Wizard
### 8. Dashboard Cards
### 9. Notification Toast
### 10. File Upload Area
### 11. Tabbed Interface
### 12. Dropdown Menu
### 13. Progress Indicator
### 14. Empty State
### 15. Loading Skeleton
### 16. Navbar with Menu
### 17. Pagination
### 18. Breadcrumb Navigation
### 19. Alert Messages
### 20. Command Palette
```

#### JavaScript API Reference
```markdown
## JavaScript API

**Initialization:**
```javascript
// Initialize all components
Aural.init();

// Initialize specific component type
Aural.initTooltips();
Aural.initDropdowns();
```

**Modal & Dialogs:**
```javascript
Aural.openModal(id: string)
Aural.closeModal(id: string)
Aural.showDialog(id: string)
Aural.closeDialog(id: string)
```

**Drawer:**
```javascript
Aural.openDrawer(id: string)
Aural.closeDrawer(id: string)
```

**Notifications:**
```javascript
Aural.showToast(message: string, variant?: string, title?: string, duration?: number)
Aural.showSnackbar(message: string, duration?: number)
```

**Tabs:**
```javascript
Aural.switchTab(tabId: string, panelId: string)
```

**[Continue with all 25+ methods...]**
```

#### Token Cheat Sheet
```markdown
## Design Token Quick Reference

**Colors:**
- Backgrounds: --color-bg-primary, --color-bg-secondary, --color-bg-tertiary
- Text: --color-text-primary, --color-text-secondary, --color-text-muted
- Borders: --color-border, --color-border-light
- States: --color-success, --color-warning, --color-danger, --color-info

**Spacing:**
- --space-1 (0.25rem/4px) through --space-12 (3rem/48px)
- Common: --space-2, --space-3, --space-4, --space-6

**Radius:**
- --radius-sm (0.25rem)
- --radius-md (0.5rem) ← Most common
- --radius-lg (0.75rem)
- --radius-full (9999px)

**Shadows:**
- --shadow-xs through --shadow-2xl
- --shadow-primary (with accent color)

**Typography:**
- --text-xs through --text-5xl
- --font-sans, --font-serif, --font-mono
- --font-normal, --font-medium, --font-semibold, --font-bold
```

---

### 1.3 Enhanced README ⭐ HIGH PRIORITY
**Time:** 1 hour
**File:** `/README.md`

**Add These Sections:**

```markdown
## 🤖 For AI Assistants

### Quick Component Lookup

Find components by purpose:

**Input & Forms** (17 components)
Button • Input • Checkbox • Radio • Switch • Select • Multi-Select • Combobox • Search Bar • Slider • Range Slider • Rating • Color Picker • Date Picker • Date Range Picker • Time Picker • File Upload

**Navigation** (9 components)
Tabs • Breadcrumb • Pagination • Navbar • Stepper • Dropdown • Context Menu • Bottom Navigation • Accordion

**Data Display** (13 components)
Table • Card • Badge • Chip • Tooltip • Progress • Spinner • Skeleton • Avatar • Divider • Timeline • Stats Card • Code Block

**Feedback & Overlays** (7 components)
Modal • Dialog • Drawer • Alert Banner • Toast • Snackbar • Popover

**Layout & Media** (3 components)
Carousel • Image Gallery • Empty State

**Advanced** (3 components)
Command Palette • Notification Center • Tree View

---

### Installation (Copy-Paste Ready)

**NPM:**
```bash
npm install @aural-ui/core
```

**CDN:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aural-ui/core/dist/aural-ui.min.css">
<script src="https://cdn.jsdelivr.net/npm/@aural-ui/core/dist/aural-ui.min.js"></script>
<script>Aural.init();</script>
```

---

### Decision Trees

**Choosing a Button Variant:**
```
Primary action (submit, save, confirm)? → btn-primary
Secondary action (cancel, back)? → btn-secondary
Destructive (delete, remove)? → btn-danger
Success (complete, approve)? → btn-success
Low emphasis (dismiss, close)? → btn-ghost
Outlined style? → btn-outline
```

**Choosing a Notification:**
```
Persistent? → Alert Banner
Temporary (auto-hide)? → Toast
Requires user action? → Modal / Dialog
Non-interrupting? → Snackbar
Multiple notifications? → Notification Center
Contextual help? → Tooltip / Popover
```

**Choosing an Input:**
```
Single line text? → Input
Multi-line text? → Textarea
Date? → Date Picker
Time? → Time Picker
Color? → Color Picker
File? → File Upload
Number in range? → Slider
Range selection? → Range Slider
Yes/No? → Checkbox / Switch
One option from many? → Radio / Select
Multiple from many? → Multi-Select / Checkbox Group
Search with suggestions? → Combobox
Rating? → Rating
```
```

---

### 1.4 Framework Examples in COMPONENTS.md
**Time:** 1-2 hours (focus on top 15 components)
**File:** `/COMPONENTS.md`

**For Each Priority Component, Add:**

```markdown
### Button

[Existing documentation...]

#### Framework Examples

**Vanilla HTML:**
```html
<button class="btn btn-primary">Click me</button>
```

**React:**
```jsx
import { Button } from '@aural-ui/react';

<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

**Vue:**
```vue
<template>
  <AuralButton variant="primary" @click="handleClick">
    Click me
  </AuralButton>
</template>
```

**Svelte:**
```svelte
<script>
  import { Button } from '@aural-ui/svelte';
</script>

<Button variant="primary" on:click={handleClick}>
  Click me
</Button>
```

#### Common Use Cases

✅ **Submit Form:**
```html
<button type="submit" class="btn btn-primary btn-lg">
  Submit
</button>
```

✅ **With Icon:**
```html
<button class="btn btn-secondary">
  <svg>...</svg>
  Save Draft
</button>
```

✅ **Loading State:**
```html
<button class="btn btn-primary btn-loading" disabled aria-busy="true">
  <span class="spinner" aria-hidden="true"></span>
  Processing...
</button>
```

#### Do's and Don'ts

✅ **Do:**
- Use primary for main CTAs
- Add loading state for async operations
- Provide clear action labels

❌ **Don't:**
- Nest buttons inside buttons
- Use low-contrast variants for primary actions
- Forget to disable during loading

#### Related Components
→ Icon, Spinner, Tooltip, Modal
```

**Apply to Top 15 Most-Used Components:**
1. Button
2. Input
3. Modal
4. Card
5. Badge
6. Tabs
7. Dropdown
8. Select
9. Checkbox
10. Radio
11. Toast
12. Alert
13. Table
14. Avatar
15. Progress

---

## Phase 2: Figma Essentials (Week 2-3)

### Goal: Figma library with core components ONLY

**Total Time:** 8-12 hours
**Realistic Scope:** Foundations + 10-15 components

---

### 2.1 Generate Figma Foundations
**Time:** 30 minutes
**Tool:** Existing Figma plugin

**What to Generate:**
1. **Color Styles** (Focus on 2-3 themes initially)
   - Light theme (default)
   - Dark theme
   - One accent theme (neon or kinetic)
   - Skip the rest for now ← Can add later

2. **Text Styles**
   - All 7 sizes (xs, sm, base, lg, xl, 2xl, 3xl)
   - 4 weights (normal, medium, semibold, bold)
   - = 28 text styles

3. **Effect Styles**
   - 6 shadow levels (xs, sm, md, lg, xl, 2xl)
   - Primary shadow (with color)

4. **Spacing Documentation**
   - Visual reference page showing spacing scale

**Deliverable:** Figma file with complete foundation styles

---

### 2.2 Create Core Components ONLY
**Time:** 6-8 hours
**Approach:** Manual design, focus on quality over quantity

**Phase 2A: Critical Components (First 5)**
**Time:** 3-4 hours

1. **Button** (MOST IMPORTANT)
   - 6 variants × 3 sizes = 18 component variants
   - States: default, hover, disabled, loading

2. **Input**
   - Default, error, success states
   - With label and helper text

3. **Card**
   - Header, body, footer sections
   - Variants: default, bordered, elevated

4. **Modal**
   - 3 sizes: sm, md, lg
   - With overlay, header, body, actions

5. **Badge**
   - 7 color variants × 3 sizes

**Phase 2B: High-Priority Components (Next 5)**
**Time:** 3-4 hours

6. **Tabs**
7. **Dropdown**
8. **Select**
9. **Checkbox**
10. **Radio**

**Phase 2C: Nice-to-Have (If time allows)**
11. Toast
12. Alert
13. Avatar
14. Progress
15. Table (basic version)

**STOP HERE**
- Don't try to do all 60 components
- Better to have 10-15 excellent components than 60 mediocre ones
- Can expand later based on usage

---

### 2.3 Code Connect Mappings (Critical Components Only)
**Time:** 1-2 hours
**Scope:** Map the 10-15 components created above

**Process:**
1. Use Figma MCP `get_code_connect_suggestions`
2. Review AI suggestions
3. Customize with:
   - Accessibility requirements
   - JavaScript initialization notes
   - Token usage
   - Best practices
4. Use `send_code_connect_mappings` to batch save

**Mapping Example:**
```javascript
{
  nodeId: "123:456", // Button/Primary in Figma
  componentName: "Button",
  source: "stories/Button.stories.ts",
  label: "React",
  // Custom instructions added
}
```

---

### 2.4 Figma Documentation Pages
**Time:** 1-2 hours

**Create 4 Pages:**
1. **Cover** - Name, version, links
2. **Foundations** - Colors, typography, spacing, shadows
3. **Components** - The 10-15 components with usage notes
4. **Getting Started** - Installation, basic usage

**Skip for now:**
- Individual component pages (use Storybook links instead)
- All 10 themes (just show 2-3)
- Advanced patterns (focus on basics)

---

## Phase 3: Automation & Health (Week 4)

### 3.1 Component Registry Generator Script
**Time:** 2-3 hours
**File:** `/scripts/generate-component-registry.js`

**Features:**
- Parse navigation.json for component list
- Extract CSS classes from component files
- Pull examples from Storybook stories
- Auto-classify complexity and priority
- Generate complete JSON

**Run:**
```bash
node scripts/generate-component-registry.js
```

---

### 3.2 Health Dashboard
**Time:** 2 hours
**Files:** `/docs/system-health.html`, `/scripts/generate-health-report.js`

**Metrics:**
- Component count: 60
- Themes: 10
- Storybook coverage: X/60
- Documentation: X/60
- Figma: X/60 (realistic tracking)
- Code Connect: X/60
- Framework support: 14/60 (React/Vue/Svelte)
- Accessibility: 100%

---

## Realistic Timeline

### Week 1: AI Documentation (6-8 hours)
- [x] Day 1-2: Component registry JSON (3-4h)
- [x] Day 3: AI Component Guide (2-3h)
- [x] Day 4: README enhancements (1h)
- [x] Day 5: Framework examples for top 15 (1-2h)

### Week 2-3: Figma Essentials (8-12 hours)
- [x] Day 1: Foundations (30min)
- [x] Day 2-3: Critical 5 components (3-4h)
- [x] Day 4-5: High-priority 5 components (3-4h)
- [x] Day 6: Code Connect (1-2h)
- [x] Day 7: Documentation pages (1-2h)

### Week 4: Automation (4 hours)
- [x] Day 1: Registry generator script (2-3h)
- [x] Day 2: Health dashboard (2h)

**Total: 18-24 hours over 4 weeks**

---

## Success Metrics

### Phase 1 Success (AI Documentation):
- ✅ Component registry with all 60 components
- ✅ AI guide with 15-20 common patterns
- ✅ README with decision trees
- ✅ Top 15 components have framework examples
- ✅ AI can find and use components 90%+ accuracy

### Phase 2 Success (Figma):
- ✅ Figma file with foundations (2-3 themes)
- ✅ 10-15 core components fully designed
- ✅ Code Connect working for all Figma components
- ✅ Basic documentation in Figma
- ✅ Designers can handoff core components

### Phase 3 Success (Automation):
- ✅ Registry auto-generates
- ✅ Health dashboard shows real metrics
- ✅ Process documented for future additions

---

## Long-Term Roadmap (Beyond Initial Launch)

### Phase 4: Expand Figma Library (Months 2-6)
- Add remaining 45-50 components gradually
- Expand to all 10 themes
- Add more variants and states
- Community contributions

### Phase 5: Advanced Tooling (Months 6-12)
- VS Code extension using registry
- CLI tool for component generation
- Figma plugin for component updates
- Design token sync

### Phase 6: AI Integration (Year 2)
- AI component recommendation engine
- Auto-generate code from designs
- Pattern detection and suggestions
- Accessibility auto-checking

---

## Why This Plan Works

### Problems with Original Plan:
❌ Underestimated scope (9 themes vs 10 actual)
❌ Assumed 59 components when it's 60+
❌ Didn't account for variants (500-1000 Figma components)
❌ Too much manual Figma work (200-300 hours)
❌ Not focused on ROI

### This Plan:
✅ **Realistic scope:** 10-15 Figma components, not 60
✅ **AI-first:** Documentation before design work
✅ **High ROI:** Focus on most-used components
✅ **Phased:** Can stop after any phase and still have value
✅ **Sustainable:** Can expand gradually
✅ **Automated:** Scripts reduce future maintenance

---

## Files to Create

### Week 1 (AI Documentation):
- [ ] `/component-registry.json`
- [ ] `/scripts/generate-component-registry.js`
- [ ] `/AI_COMPONENT_GUIDE.md`
- [ ] `/README.md` (enhanced)
- [ ] `/COMPONENTS.md` (enhanced for top 15)

### Week 2-3 (Figma):
- [ ] Figma file: "Aural UI Design System v2.1"
- [ ] `/FIGMA_SETUP_GUIDE.md` (instructions for manual work)

### Week 4 (Automation):
- [ ] `/scripts/generate-health-report.js`
- [ ] `/docs/system-health.html`

---

## NPM Scripts to Add

```json
{
  "scripts": {
    "registry:generate": "node scripts/generate-component-registry.js",
    "registry:validate": "node scripts/validate-registry.js",
    "health:generate": "node scripts/generate-health-report.js",
    "health:serve": "serve docs/system-health.html",
    "docs:ai": "npm run registry:generate && npm run health:generate"
  }
}
```

---

## Next Steps

1. **Review this plan** - Make sure it aligns with your goals
2. **Adjust priorities** - Which phase is most important?
3. **Start with Phase 1** - AI documentation has highest ROI
4. **Iterate** - Can stop after any phase and still have value

**Recommendation:** Start with Phase 1 (AI Documentation). This gives you immediate value with minimal effort, and you can decide later if Figma work is worth the investment.

