# Changelog

All notable changes to Aural UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

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
- All pages use only design tokens (var(--space-*), var(--color-*), var(--text-*))
- Landing page now demonstrates ONLY actual Aural UI components (.card, .btn, .badge)
- Removed all invented custom components across documentation pages
- Typography system in Kinetic theme now exempts content-specific classes
- Search bar keyboard shortcut now hides when input has text

### Removed - February 13, 2026
- Custom external stylesheets (doc-modern.css, doc-enhanced.css) from intro pages
- Particle background animations from landing page
- Hero soundwave animations from landing page
- Token controller modal from landing page
- All doc-* prefixed custom components
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

[Unreleased]: https://github.com/ferology/aural-ui/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ferology/aural-ui/releases/tag/v1.0.0
