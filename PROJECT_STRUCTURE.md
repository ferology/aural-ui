# Aural UI - Project Structure

Complete component hierarchy and file organization for the Aural UI design system.

## Project Statistics

- **59 Components** across 6 categories
- **9 Utility Groups** with 350+ utility classes
- **6 Documentation Pages** with interactive demos
- **25+ JavaScript API Methods**
- **7 Design Token Files**

---

## Documentation Files

```
docs/
├── index.html              # Component Showcase (59 components with live demos)
├── api.html                # API Reference (25+ JavaScript methods)
├── tutorial.html           # Getting Started (5-step interactive tutorial)
├── tokens.html             # Design Tokens (visual reference)
├── themes.html             # Themes (pre-built + custom theming guide)
├── examples.html           # Examples (production-ready templates)
├── nav.html                # Navigation Hub (central navigation)
├── nav-sidebar.html        # Sidebar Navigation Component (reusable)
└── project-tree.html       # Project Structure (this visualization)
```

---

## Components (59 Total)

### Form Controls (17 components)

```
components/
├── button.css              # Button component (#buttons)
├── input.css               # Input component (#inputs)
├── search-bar.css          # Search Bar (#search-bar)
├── checkbox.css            # Checkbox (#checkboxes)
├── radio.css               # Radio button (#radios)
├── toggle.css              # Toggle switch (#toggles)
├── switch.css              # Switch (#switches)
├── select.css              # Select dropdown (#selects)
├── multi-select.css        # Multi-select (#multi-selects)
├── combobox.css            # Combobox (#combobox)
├── rating.css              # Rating (#rating)
├── color-picker.css        # Color Picker (#color-picker)
├── range-slider.css        # Range Slider (#range-slider)
├── slider.css              # Slider (#slider)
├── time-picker.css         # Time Picker (#time-picker)
├── date-picker.css         # Date Picker (#date-picker)
└── file-upload.css         # File Upload (#file-upload)
```

### Navigation Components (8 components)

```
components/
├── navbar.css              # Navigation bar (#navbar)
├── tabs.css                # Tabs (#tabs)
├── breadcrumb.css          # Breadcrumb (#breadcrumbs)
├── pagination.css          # Pagination (#pagination)
├── stepper.css             # Stepper (#stepper)
├── drawer.css              # Drawer (#drawer)
├── context-menu.css        # Context Menu (#context-menu)
└── bottom-nav.css          # Bottom Navigation (#bottom-nav)
```

### Data Display Components (13 components)

```
components/
├── card.css                # Card (#cards)
├── table.css               # Table (#tables)
├── avatar.css              # Avatar (#avatars)
├── badge.css               # Badge (#badges)
├── chips.css               # Chips/Tags (#chips)
├── progress.css            # Progress bar (#progress)
├── divider.css             # Divider (#dividers)
├── timeline.css            # Timeline (#timeline)
├── stats-card.css          # Stats Card (#stats-card)
├── carousel.css            # Carousel (#carousel)
├── tree-view.css           # Tree View (#tree-view)
├── image-gallery.css       # Image Gallery (#image-gallery)
└── code-block.css          # Code Block (#code-block)
```

### Interactive Components (7 components)

```
components/
├── tooltip.css             # Tooltip (#tooltips)
├── dropdown.css            # Dropdown (#dropdowns)
├── accordion.css           # Accordion (#accordions)
├── popover.css             # Popover (#popovers)
├── modal.css               # Modal (#modals)
├── dialog.css              # Dialog (#dialogs)
└── command-palette.css     # Command Palette (#command-palette)
```

### Feedback Components (7 components)

```
components/
├── alert-banner.css        # Alert Banner (#alert-banner)
├── toast.css               # Toast notifications (#toast)
├── snackbar.css            # Snackbar (#snackbar)
├── skeleton.css            # Skeleton loader (#skeleton)
├── spinner.css             # Loading spinner (#spinner)
├── empty-state.css         # Empty State (#empty-state)
└── notification-center.css # Notification Center (#notification-center)
```

### Additional Components (7 components)

```
components/
├── slider.css              # Slider component
├── chips.css               # Chips component
├── code-block.css          # Code Block component
├── dialog.css              # Dialog component
├── file-upload.css         # File Upload component
├── command-palette.css     # Command Palette
└── date-picker.css         # Date Picker
```

---

## Utilities (9 utility groups)

### Utility Classes

```
utilities/
├── typography.css          # Text styles, sizes, weights, leading
├── spacing.css             # Margin & padding utilities (150+ classes)
│                          # .m-{size}, .mt-{size}, .p-{size}, etc.
│                          # Responsive: sm:, md:, lg:, xl:
├── display.css             # Display & layout utilities (200+ classes)
│                          # .flex, .grid, .hidden, .block
│                          # .justify-*, .items-*, .gap-*
├── colors.css              # Text, background, border colors
│                          # .text-primary, .bg-success, .border-error
├── borders.css             # Border width, radius, styles
│                          # .border, .rounded, .rounded-lg
├── grid.css                # Grid system utilities
│                          # .grid-cols-{1-12}, .col-span-*
├── shadows.css             # Shadow utilities
│                          # .shadow-sm, .shadow-lg, .shadow-xl
├── glows.css               # Glow effects
│                          # .glow-primary, .glow-secondary
└── animations.css          # Animation presets (20+ animations)
                           # Entrances: .animate-fade-in, .animate-slide-in-*
                           # Exits: .animate-fade-out, .animate-zoom-out
                           # Attention: .animate-pulse, .animate-shake
```

---

## Design Tokens

### Core Tokens (Primitives)

```
tokens/core/
├── colors.css              # Color palette (primary, secondary, accent shades)
├── spacing.css             # Spacing scale (0.25rem to 12rem)
├── typography.css          # Font families, sizes, weights, leading
├── shadows.css             # Shadow definitions
├── radius.css              # Border radius values
└── animations.css          # Animation durations, easings
```

### Semantic Tokens (System Behavior)

```
tokens/semantic/
└── colors.css              # Semantic color mappings
                           # --color-text-primary, --color-bg-secondary
                           # --color-success, --color-error, --color-warning
```

---

## Themes

```
themes/
├── dark.css                # Dark theme (default)
└── light.css               # Light theme
```

---

## JavaScript API

### Core Module

```
javascript/
└── index.js                # Main Aural namespace with all methods
```

### API Methods (25+ methods)

#### Toast
- `Aural.showToast(message, type, title, duration)`

#### Modal
- `Aural.openModal(modalId)`
- `Aural.closeModal(modalId)`
- `Aural.toggleModal(modalId)`
- `Aural.initModals()`

#### Tabs
- `Aural.initTabs()`
- `Aural.switchTab(tabId, panelId)`

#### Tooltips
- `Aural.initTooltips()`
- `Aural.showTooltip(triggerId)`
- `Aural.hideTooltip(triggerId)`

#### Dropdowns
- `Aural.initDropdowns()`
- `Aural.openDropdown(dropdownId)`
- `Aural.closeDropdown(dropdownId)`
- `Aural.toggleDropdown(dropdownId)`

#### Accordions
- `Aural.initAccordions()`
- `Aural.openAccordion(itemId)`
- `Aural.closeAccordion(itemId)`
- `Aural.toggleAccordion(itemId)`

#### Popovers
- `Aural.initPopovers()`
- `Aural.showPopover(triggerId)`
- `Aural.hidePopover(triggerId)`
- `Aural.togglePopover(triggerId)`

#### Selects
- `Aural.initSelects()`
- `Aural.selectOption(selectId, value)`

#### Progress
- `Aural.setProgress(elementId, percentage)`
- `Aural.setIndeterminate(elementId, boolean)`

#### Chips
- `Aural.initChips(containerId, options)` → Returns: `{ getTags(), addTag(), clearTags() }`

#### Code Blocks
- `Aural.initCodeBlock(codeBlockId)`
- `Aural.initAllCodeBlocks()`
- `Aural.highlightCodeBlock(codeBlockId, language)`

#### Drawers
- `Aural.initDrawers()`

#### Snackbar
- `Aural.showSnackbar(message, type, options)`

---

## Build Output

```
dist/
├── aural-ui.css            # Full CSS bundle (unminified)
├── aural-ui.min.css        # Minified CSS bundle
├── aural-ui.js             # JavaScript bundle (147KB)
└── aural-ui.min.js         # Minified JavaScript (68.4KB)
```

---

## TypeScript Support

```
types/
└── index.d.ts              # Complete TypeScript definitions
                           # For all Aural methods and interfaces
```

---

## Package Configuration

```
package.json                # NPM package configuration
├── main: "dist/aural-ui.js"
├── module: "dist/esm/index.js"
├── types: "types/index.d.ts"
└── style: "dist/aural-ui.css"
```

---

## Documentation Access

- **Homepage**: [nav.html](http://localhost:55851/nav.html)
- **Project Tree**: [project-tree.html](http://localhost:55851/project-tree.html)
- **Component Showcase**: [index.html](http://localhost:55851/index.html)
- **API Reference**: [api.html](http://localhost:55851/api.html)
- **Tutorial**: [tutorial.html](http://localhost:55851/tutorial.html)
- **Design Tokens**: [tokens.html](http://localhost:55851/tokens.html)
- **Themes**: [themes.html](http://localhost:55851/themes.html)
- **Examples**: [examples.html](http://localhost:55851/examples.html)

---

## Component Categories Quick Reference

| Category | Count | Description |
|----------|-------|-------------|
| **Form Controls** | 17 | Buttons, inputs, selects, pickers |
| **Navigation** | 8 | Navbars, tabs, breadcrumbs, drawers |
| **Data Display** | 13 | Cards, tables, avatars, progress |
| **Interactive** | 7 | Tooltips, modals, dropdowns, popovers |
| **Feedback** | 7 | Alerts, toasts, spinners, skeletons |
| **Advanced** | 7 | Command palette, code blocks, galleries |

---

## Utility Categories Quick Reference

| Utility | Classes | Description |
|---------|---------|-------------|
| **Spacing** | 150+ | Margin & padding with responsive variants |
| **Display** | 200+ | Flexbox, grid, positioning |
| **Colors** | 50+ | Text, background, border colors |
| **Borders** | 40+ | Width, radius, styles |
| **Animations** | 20+ | Entrance, exit, attention seekers |
| **Typography** | 30+ | Font sizes, weights, leading |
| **Shadows** | 10+ | Shadow utilities |
| **Grid** | 50+ | Grid layout system |

---

## Quick Navigation Links

### By Component Type

- **Form Controls**: [View Components →](http://localhost:55851/index.html#buttons)
- **Navigation**: [View Components →](http://localhost:55851/index.html#navbar)
- **Data Display**: [View Components →](http://localhost:55851/index.html#cards)
- **Interactive**: [View Components →](http://localhost:55851/index.html#tooltips)
- **Feedback**: [View Components →](http://localhost:55851/index.html#alert-banner)

### Documentation

- **Getting Started**: [Tutorial →](http://localhost:55851/tutorial.html)
- **JavaScript API**: [API Reference →](http://localhost:55851/api.html)
- **Design System**: [Design Tokens →](http://localhost:55851/tokens.html)
- **Theming**: [Themes Guide →](http://localhost:55851/themes.html)
- **Templates**: [Examples →](http://localhost:55851/examples.html)

---

*Last updated: 2026-01-20*
*Server running at: http://localhost:55851*
