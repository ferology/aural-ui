# Changelog

All notable changes to Aural UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.5.1] - 2026-04-23

### Fixed

- **Invalid `:not(::before)` selectors in Checkbox, Radio, and Toggle:** `.checkbox-only`, `.radio-only`, and `.toggle-only` variants used `:not()` with a pseudo-element argument, which is not valid CSS. Browsers silently dropped the rule, so these label-less variants never actually hid their label text. Replaced with a valid technique (`font-size: 0` on the span, with explicit width/height for radio/toggle whose pseudo-elements are absolutely positioned). Label text remains in the accessibility tree for screen readers.

### Changed

- **Version narrative synced.** All `aural-ui` and `@aural-ui/*` packages aligned to `1.5.1` to match the demo changelog page's own release history (previously package.json was frozen at `1.0.0` while the demo page had already tracked through `v1.5.0`).

---

## [Unreleased]

### Added - October 10, 2026

- **`npm run audit:storybook`** (`scripts/storybook-axe.mjs`): axe-core scan (WCAG 2.1 A/AA) of every Storybook story in chosen themes, used to find the contrast and markup defects fixed below. **`npm run audit:contrast:aaa`** checks `high-contrast` at 7:1. Vanilla-JS regression tests live in `tests/a11y.test.js`; `npm run audit:contrast` now runs in CI.

- **WCAG 2.1 AA contrast remediation tokens** (`tokens/semantic/colors.css`):
  - `--color-{success,error,info,warning}-solid`: fills that carry `--color-text-on-*` text (success-700, error-600, info-600, warning-500 with dark text)
  - `--color-{success,error,warning,info}-text`: status text/icons on surfaces (400 shades on dark; 700/600 shades in `themes/light.css` and `themes/minimal.css`)
  - `--color-control-border`: boundary of form controls (>= 3:1, WCAG 1.4.11), used by input, checkbox, radio, and select. `--color-border-subtle`/`-medium` stay decorative only
- **`scripts/contrast-audit.mjs` (`npm run audit:contrast`)**: resolves the semantic tokens in a real browser for each theme and checks text pairs >= 4.5:1, status text, solid-fill text, and control borders >= 3:1. Run `npm run build:css` first. All 11 themes pass
- **Per-theme overrides** so every theme under `themes/` passes the audit: dark, light, minimal, warm, prismatic, neon, kinetic, high-contrast, colorblind-friendly (neon-refined already passed). Light and minimal define their own `-text` tokens; most themes define `--color-control-border`

### Changed - October 10, 2026

- **`high-contrast` theme now passes WCAG AAA (7:1) for every audited text pair:** brighter brand blue, muted text, error text and danger button fill, with black text on lighter success/info fills. `npm run audit:contrast:aaa` (`--aaa` flag of `scripts/contrast-audit.mjs`) checks it.
- **Disabled multi-select, range-slider and rating:** dim the control instead of putting `opacity: 0.5` on the whole wrapper, which halved label/placeholder/value contrast (1.9-3.7:1).

- **Filled status backgrounds** (chips, alert-banner `--solid`, snackbar, stepper, badge counters in navbar/bottom-nav/notification-center, timeline, file-upload, code-block, tooltip success/error) now use `--color-*-solid` + `--color-text-on-*` instead of `--color-*` (500 shades) + `white`. White on success-500 2.28:1 -> white on success-700 5.02:1; white on error-500 3.76:1 -> error-600 4.83:1; white on info-500 3.68:1 -> info-600 5.17:1; white on warning-500 2.15:1 -> `--color-text-on-warning` (neutral-950) 9.22:1
- **Status foreground text/icons** (alert-banner, dialog, input/select/combobox/multi-select/time-picker messages, rating, sliders, stats-card, tree-view, notification-center, calendar weekends, dropdown/context-menu danger items, etc.) now use `--color-*-text`
- **Form control borders**: `--color-input-border`, `--color-checkbox-border`, `--color-radio-border`, `--color-select-border` now resolve to `--color-control-border` (was `--color-border-subtle`, about 1.2:1; now >= 3:1)
- `--color-button-primary-text` defaults to `var(--color-bg-primary)` (dark text on the light brand green; white was about 2.3:1); `themes/light.css` overrides it to white (5.5:1 on the dark brand green). `--color-button-danger-bg` uses `--color-error-solid`, hover `--error-700`
- Default `--color-text-tertiary` and `--color-text-muted` raised to neutral-400 (neutral-500 was 4.18:1 on the page background and about 3.2:1 on raised surfaces; neutral-600 was about 2.5:1); theme overrides raised in dark, warm, prismatic, neon, minimal, light, colorblind-friendly, kinetic
- `.skip-link` (`utilities/accessibility.css`) uses `--color-button-primary-bg`/`--color-button-primary-text` and a `currentColor` focus outline instead of white-on-primary
- **Modals** (`javascript/index.js`, `openModal`/`closeModal`): everything outside the open modal is made `inert` + `aria-hidden` (restored on close, including when the modal sits inside `<main>`; replaces `aria-hidden` on `<main>`); focusable elements are recomputed on every Tab (skips hidden/disabled, includes `summary` and `contenteditable`); the dialog itself takes focus when it has no focusable child; Escape closes only the topmost modal
- **Tooltips** (`initTooltips`): auto-wire `role="tooltip"` and `aria-describedby` on the trigger

### Fixed - October 10, 2026

- **`npm run storybook` showed "Error fetching /index.json" for every story:** `.storybook/preview-head.html` hard-coded `<base href="/aural-ui/storybook/">` and `main.ts` set that Vite base unconditionally, so the dev server requested a path that does not exist. The GitHub Pages base is now applied only to the production build and when served from that path.
- **Storybook stories that never rendered (31):** StatsCard used an `html` tag it never imported, and an unescaped backtick in ImageGallery's docs template broke the module. Story demo markup was also given accessible names, valid roles and labels (found with `audit:storybook`).

- **White text on the light brand green in the dark theme:** chips, tabs (pill), pagination, progress bars, calendars, date/time pickers, steppers, timelines, tooltips and the bottom-nav primary variant hard-coded `color: white` on `--color-primary` (2.3:1 in the default dark theme). `--color-text-on-primary` now follows `--color-button-primary-text` (dark in the dark theme, white in the light theme) and those components use it. Found by scanning every Storybook story with axe-core.
- **Badges, alert-banner titles and code-block language labels:** badge text used the 400 status shades on light backgrounds (1.5:1); it now uses the `--color-*-text` tokens, and the light and minimal themes use darker 700/800 shades so text on tinted status backgrounds clears 4.5:1. Terminal code blocks keep their on-dark label and copy-button colors in every theme, and `.aural-spinner--white` text is now light.

- **`Aural.initTooltips()` never wired anything:** it only registered a `DOMContentLoaded` listener, and `Aural.init()` itself runs inside that event (a listener added mid-dispatch doesn't fire), so `.tooltip-wrapper` markup was never initialised, and calling it manually after load was a no-op. It now wires immediately, takes an optional root, and is idempotent.

- Tooltips now stay open while the pointer is over the tooltip itself (WCAG 1.4.13 hoverable) and dismiss on Escape without moving focus (previously they closed as soon as the pointer left the trigger and could not be dismissed)
- Stacked modals no longer all close at once on Escape
- Modal focus trap no longer wraps to hidden or disabled elements or misses content added after open
- Status text and filled status backgrounds that failed 4.5:1 (see Changed), form control borders that failed 3:1, and per-theme failures in every theme except neon-refined

### Added - October 2, 2026

- **🤖 LLM-readable design system**: structured specs, a closed token layer, and an automated audit so an AI coding session stays consistent instead of fabricating CSS values or drifting across sessions ([hvpandya.com/llm-design-systems](https://hvpandya.com/llm-design-systems) pattern)
  - `CLAUDE.md`: the rules an AI session reads before touching `components/`, `themes/`, or `tokens/`
  - `specs/components/*.md`: one 8-section spec (Metadata, Overview, Anatomy, Tokens used, Props/API, States, Code example, Cross-references) for all 54 real components; the 5 theme-reskin CSS files (kinetic/neon/prismatic decorations) are documented as "Theme variants" inside `button.md`/`card.md` instead of getting standalone specs
  - `specs/foundations/*.md`: one doc per token category (color, spacing, size, typography, radius, elevation, motion, z-index, breakpoints, accessibility)
  - `specs/patterns/`: composition patterns
  - `specs/tokens/token-reference.md`: generated master table of every token, regenerated from source via `npm run generate:token-docs` so it can't drift
  - `scripts/token-audit.js` (`npm run audit:tokens`): a postcss-based scanner that flags hardcoded colors, spacing, radius, z-index, font-size, font-weight, and duration values in `components/*.css` and suggests the matching token; wired into the pre-commit hook (staged files) and a **blocking** step in CI
  - Two new token categories: `tokens/core/z-index.css` + `tokens/semantic/z-index.css` (a stacking scale — `--z-dropdown`, `--z-modal`, `--z-popover`, etc.) and `tokens/core/size.css` (a dimension scale for icon/avatar/control sizing, distinct from the spacing scale)
- **Validation**: a fresh Claude Code agent with no knowledge of this system, given a bare feature ticket ("add an xl size variant to X"), was run three separate times (Badge, Chips, Tooltip) — each time it discovered `CLAUDE.md` and the relevant spec on its own, used only real tokens, and ran the audit itself before finishing

### Fixed - October 2, 2026

- All 59 `components/*.css` files went from 1,044 hardcoded-value errors to 0, with every substitution verified value-preserving (resolves to the identical literal it replaced)
- A few components referenced custom properties that were never defined anywhere (e.g. `var(--color-primary-alpha-20)` instead of the real `--primary-alpha-20`), silently breaking hover states and search highlights
- A stray unbalanced parenthesis in `utilities/filters.css` (`filter: none);`) — a genuine CSS syntax error
- `--color-border` was undefined in every theme except Kinetic, silently dropping borders in `chips.css`, `code-block.css`, `command-palette.css`, `dialog.css`, `kinetic-cards.css`, `slider.css`, and `range-slider.css` — added as a semantic alias of `--color-border-subtle`
- `--primary-alpha-50` (range-slider in-range markers), `--color-primary-light` (snackbar action text/progress fill), and the four `--color-*-border` tokens (Alert Banner's info/success/warning/error variants) were all referenced but never defined — added, following the existing naming/value conventions
- A cascade bug where `switch.css`'s backwards-compatibility block silently overrode `.toggle`'s own color tokens — fixed by reordering the `toggle.css`/`switch.css` imports so `.toggle`'s own rules win, verified safe since `.toggle` has no real-world consumers
- `Aural.initFileUpload()` in `javascript/index.js` queried class names that didn't exist in File Upload's actual markup, making the public JS API a complete no-op — fixed to match the real classes (and dropped a redundant click handler that would have opened the file picker twice), verified end-to-end by simulating a file drop

### Added - March 1, 2026

- **🎉 Storybook Deployment**: Full Storybook documentation now live at GitHub Pages
  - Accessible at https://ferology.github.io/aural-ui/storybook/
  - Direct link added to demo page sidebar for easy navigation
  - Interactive component documentation with live preview
  - Full support for all 9 themes with theme switcher
- **📖 Storybook Documentation Enhancements**:
  - Comprehensive Theme Gallery page (Getting Started > Themes)
    - Visual showcase of all 9 themes with color swatches
    - Usage instructions and theme switching examples
    - Theme comparison guide
  - Switched to Storybook autodocs for cleaner, more maintainable documentation
  - Minimal theme set as default theme (previously Dark)
  - Added "Theme Comparison" stories for all components
  - Light Storybook UI theme for better readability

### Changed - March 1, 2026

- **♿ Accessibility Improvements**:
  - Avatar component: Enhanced alt text descriptions
    - Profile pictures now use descriptive "Profile picture N" format
    - Status avatars include status in alt text: "User profile, status: online"
  - Combobox component: Added comprehensive ARIA attributes
    - Input fields now have proper aria-label, role="combobox", and aria-expanded
    - Buttons and SVG icons marked with appropriate ARIA attributes
  - MultiSelect component: Enhanced accessibility
    - Search inputs now include aria-label="Search options"
    - All decorative SVG icons marked with aria-hidden="true"
- **📚 Storybook Configuration**:
  - Updated .storybook/main.ts with proper base path for GitHub Pages
  - Updated .storybook/manager.ts from dark to light theme
  - Updated .storybook/preview.ts with minimal theme as default
  - Configured toolbar visibility settings for better UX

### Fixed - March 1, 2026

- **🐛 Storybook Build Issues**:
  - Fixed StatsCard.stories.ts import error (removed non-existent html util import)
  - Fixed "Failed to fetch dynamically imported module" error
    - Added viteFinal configuration with correct base path ('/aural-ui/storybook/')
    - Rebuilt Storybook with proper asset paths for GitHub Pages deployment

### Removed - March 1, 2026

- **📝 Documentation Cleanup**:
  - Removed 36 custom component MDX files in favor of Storybook autodocs
  - Cleaner, more maintainable documentation structure
  - Components: Accordion, Alert, Avatar, Badge, BottomNavigation, Breadcrumbs, Button, Card, Carousel, Checkbox, Chip, CodeBlock, ColorPicker, Combobox, CommandPalette, ContextMenu, DatePicker, DateRangePicker, Divider, Drawer, Dropdown, EmptyState, FileUpload, ImageGallery, Input, Modal, MultiSelect, Navbar, NotificationCenter, Pagination, Popover, Progress, Radio, RangeSlider, Rating, SearchBar, Select

### Added - February 28, 2026

- **Storybook Integration**: Multi-theme component preview system
  - createThemeGrid utility for side-by-side theme comparison
  - AllThemes story showing components across all 9 themes
  - ThemeComparison story with interactive controls
- **New Themes**: Expanded from 7 to 9 themes
  - Minimal theme: Clean, understated design with subtle styling
  - Warm theme: Earthy tones with amber accents
  - Prismatic theme (replaces Neon Refined): Colorful prismatic design
- **Theme System Enhancements**:
  - High Contrast theme now fully integrated
  - Colorblind-Friendly theme now fully integrated
- **Accessibility Enhancement**: Explanatory tooltip for "Skip to main content" links
  - Tooltip explains purpose: "Press Tab to see this link - allows keyboard users to skip navigation and jump directly to main content"
  - Helps users understand accessibility feature on first encounter
  - Applied to all 11 main documentation pages

### Changed - February 28, 2026

- **Documentation Updates**: All 60+ documentation files updated to reflect 9 themes
- **Navigation Improvements**:
  - Theme Switcher relocated to bottom of sidebar for better UX
  - Simplified navigation structure (removed Theme Showcases section)
- **Theme System**:
  - Neon Refined renamed to Prismatic theme
  - Updated landing page with Prismatic, Minimal, and Warm theme cards
- **UI Polish**:
  - Search bar placeholder simplified (removed "components" word)
  - Theme manager now supports all 9 themes with proper definitions

### Removed - February 28, 2026

- "Try Themes Live" interactive section from themes.html (sync issues)
- Theme Showcases navigation section (redundant with Themes documentation page)

### Added - February 13, 2026

- Comprehensive accessibility audit documentation (ACCESSIBILITY_AUDIT_REPORT.md)
- Accessibility fixes summary (ACCESSIBILITY_FIXES_SUMMARY.md)
- Contrast issues fixed report (CONTRAST_ISSUES_FIXED.md)
- Page-specific heading classes (.page-heading-lg, .page-heading, .page-subheading)
- Systematic WCAG 2.1 Level AA compliance across all themes

### Fixed - February 13, 2026

- **CRITICAL ACCESSIBILITY**: All text contrast issues across 7 themes now meet WCAG AA (4.5:1 minimum)
  - Dark theme navigation titles: 4.2:1 → 5.2:1 (+24%)
  - Neon theme placeholders: 3.6:1 → 4.7:1 (+31%)
  - Neon Refined placeholders: 3.9:1 → 4.9:1 (+26%)
  - Deluxe Neon placeholders: 2.5:1 → 5.6:1 (+124%)
  - Component placeholders: 4.6:1 → 5.2:1 (+13%)
- Search bar text overflow issue (added min-width: 0 to prevent flex overflow)
- Kinetic theme typography conflicts with content pages
- Demo sidebar search replaced with official aural-search-bar component
- Navigation link contrast in Neon and Neon Refined themes
- All H tags replaced with semantic div classes in intro/documentation pages

### Changed - February 13, 2026

- **MAJOR SIMPLIFICATION**: Refactored all intro/documentation pages to match accessibility.html style
  - landing.html: Removed particle animations, hero animations, token controller modal
  - what-it-is.html: Removed custom doc-modern components, simplified to basic structure
  - getting-started.html: Removed custom stylesheets, inline tokens only
  - tutorial.html: Simplified to clean documentation style
- All pages now use consistent simple structure: .main-content, .page-header, .content-section
- All pages use only design tokens (var(--space-_), var(--color-_), var(--text-\*))
- Landing page now demonstrates ONLY actual Aural UI components (.card, .btn, .badge)
- Removed all invented custom components across documentation pages
- Typography system in Kinetic theme now exempts content-specific classes
- Search bar keyboard shortcut now hides when input has text

### Removed - February 13, 2026

- Custom external stylesheets (doc-modern.css, doc-enhanced.css) from intro pages
- Particle background animations from landing page
- Hero soundwave animations from landing page
- Token controller modal from landing page
- All doc-\* prefixed custom components
- Custom sidebar TOC components
- Custom feature cards, stat cards, and callout components

### Previous Updates

### Added - January 2026

- 5 accessible error page templates (404, 403, 500, maintenance, coming-soon)
- Comprehensive ACCESSIBILITY.md documentation for error pages
- Error pages section in README with features and usage
- CHANGELOG.md to track all project changes

### Fixed - January 2026

- Theme synchronization across all 61 HTML files now supports all 4 themes
- High-contrast theme now works properly on all pages
- Colorblind-friendly theme now works properly on all pages
- Theme persistence with localStorage now handles all 4 themes correctly

### Changed - January 2026

- Updated README to reflect 4 built-in themes instead of 2
- Updated landing page stats and features to show 4 themes
- Improved theme toggle aria-label to mention all 4 themes
- Enhanced ROADMAP with January 30, 2026 updates

---

## [1.0.0] - January 24, 2026

### Major Release: Unified Demo Navigation System

#### Added

- Iframe-based demo navigation with persistent sidebar
- Mobile-responsive navigation with search functionality
- 61 components fully documented
- 4 built-in themes (dark, light, high-contrast, colorblind-friendly)
- Comprehensive ARIA support across all components
- Full keyboard navigation support
- WCAG 2.1 AA accessibility compliance (~95%)
- Token-driven architecture with CSS custom properties
- Responsive grid system
- 350+ utility classes
- Typography system
- Glow & shadow utilities
- Animation utilities
- Filter utilities
- Accessibility utilities
- Print styles
- System theme detection

#### Fixed

- Checkbox component alignment and sizing issues
- Duplicate sidebars removed from all pages
- Unified theme toggle system

#### Changed

- Applied consistent template across all documentation pages
- Clean sans-serif typography in demo navigation
- Improved component organization

---

## Component Categories

### Forms & Inputs (17 components)

- Buttons, Inputs, Checkboxes, Radio Buttons
- Switch/Toggle, Select, Multi-Select, Combobox
- Search Bar, Slider, Range Slider, Rating
- Color Picker, Date Picker, Date Range Picker
- Time Picker, File Upload

### Data Display (13 components)

- Tables, Cards, Badges, Chips
- Tooltips, Progress, Spinner, Skeleton
- Avatars, Dividers, Timeline, Stats Cards
- Code Block

### Navigation (9 components)

- Breadcrumbs, Pagination, Tabs, Accordions
- Navbar, Stepper, Dropdowns, Context Menu
- Bottom Navigation

### Overlays & Feedback (7 components)

- Modals, Dialog, Drawer, Alert Banner
- Toast, Snackbar, Popovers

### Layout & Media (3 components)

- Carousel, Image Gallery, Empty State

### Advanced (3 components)

- Command Palette, Notification Center, Tree View

### Error Pages (5 templates)

- 404 Not Found, 403 Forbidden, 500 Server Error
- Maintenance Mode, Coming Soon

**Total:** 61 components + 5 error page templates

---

## Accessibility Features

✅ **WCAG 2.1 AA Compliant** - ~95% compliance across all components
✅ **Keyboard Navigation** - Full support for Tab, Arrow keys, Enter, Escape
✅ **Focus Indicators** - Visible focus outlines with proper contrast
✅ **ARIA Attributes** - Proper roles, states, and relationships
✅ **Screen Reader Support** - Meaningful labels and state announcements
✅ **Touch Targets** - Minimum 44px for all interactive elements
✅ **Reduced Motion** - Respects `prefers-reduced-motion` preference
✅ **Color Contrast** - WCAG AA compliant (4.5:1 for text, 3:1 for UI)
✅ **Semantic HTML** - Proper use of headings, lists, and landmarks
✅ **High Contrast Mode** - Enhanced borders and contrast
✅ **Screen Reader Utilities** - `.sr-only` and focus management

---

## Theme System

### Built-in Themes

1. **Dark Theme** - Modern dark mode with soft shadows
2. **Light Theme** - Clean light mode with subtle gradients
3. **High Contrast Theme** - Enhanced contrast for better visibility
4. **Colorblind-Friendly Theme** - Blue/orange color palette instead of red/green

### Features

- CSS custom properties for easy customization
- Automatic system theme detection
- Theme persistence with localStorage
- Seamless theme switching
- Theme builder tool included

---

## Browser Support

- **Chrome/Edge** - Last 2 versions
- **Firefox** - Last 2 versions
- **Safari** - 12+
- **iOS Safari** - 12+
- **Modern Browsers** - Supporting CSS Custom Properties and ES6+

---

## Credits

Built for Bai and future applications.

**Inspired by:**

- Shadcn UI
- Radix UI
- Tailwind CSS
- Material Design

**Icons:**

- Lucide Icons (MIT License)

---

[Unreleased]: https://github.com/ferology/aural-ui/compare/v1.5.1...HEAD
[1.5.1]: https://github.com/ferology/aural-ui/releases/tag/v1.5.1
[1.0.0]: https://github.com/ferology/aural-ui/releases/tag/v1.0.0
