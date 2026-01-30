# Changelog

All notable changes to Aural UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- 5 accessible error page templates (404, 403, 500, maintenance, coming-soon)
- Comprehensive ACCESSIBILITY.md documentation for error pages
- Error pages section in README with features and usage
- CHANGELOG.md to track all project changes

### Fixed
- Theme synchronization across all 61 HTML files now supports all 4 themes
- High-contrast theme now works properly on all pages
- Colorblind-friendly theme now works properly on all pages
- Theme persistence with localStorage now handles all 4 themes correctly

### Changed
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
