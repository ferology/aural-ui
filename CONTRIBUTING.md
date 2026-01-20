# Contributing to Aural UI

Thank you for your interest in contributing to Aural UI! This document provides guidelines and instructions for contributing to the project.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Code Standards](#code-standards)
- [Creating Components](#creating-components)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

---

## Getting Started

### Prerequisites

- **Node.js** 14+ and npm
- **Git** for version control
- A code editor (VS Code recommended)

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aural-ui.git
   cd aural-ui
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   This watches for changes and rebuilds automatically.

5. **Serve the documentation**:
   ```bash
   npm run serve
   # Open http://localhost:3001
   ```

---

## Development Workflow

### Branch Naming

- **Feature**: `feature/component-name` or `feature/description`
- **Bug fix**: `fix/issue-description`
- **Documentation**: `docs/what-changed`

Example: `feature/date-picker` or `fix/button-hover-color`

### Commit Messages

Follow conventional commits format:

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic changes)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat: add date picker component with keyboard navigation
fix: correct button hover color correlation with primary
docs: update README with new component list
```

---

## Project Structure

```
aural-ui/
├── tokens/
│   ├── core/              # Primitive tokens (never change in themes)
│   └── semantic/          # Semantic tokens (what components use)
├── themes/
│   ├── dark.css           # Dark theme
│   └── light.css          # Light theme
├── components/            # All component styles
├── utilities/             # Utility classes (grid, typography, shadows, glows)
├── javascript/
│   └── index.js          # Interactive component logic
├── src/
│   └── aural-ui.css      # Main entry point
├── dist/                 # Built files (don't edit directly)
└── docs/                 # Documentation and showcase
```

---

## Code Standards

### CSS Guidelines

1. **Use BEM-like naming convention**:
   ```css
   .component-name { }
   .component-name__element { }
   .component-name--modifier { }
   ```

2. **Always use semantic tokens, never core tokens**:
   ```css
   /* ✅ GOOD */
   background: var(--color-bg-primary);
   color: var(--color-text-primary);

   /* ❌ BAD */
   background: var(--neutral-950);
   color: var(--neutral-50);
   ```

3. **Mobile-first responsive design**:
   ```css
   /* Base styles for mobile */
   .component { }

   /* Tablet and up */
   @media (min-width: 768px) { }

   /* Desktop and up */
   @media (min-width: 1024px) { }
   ```

4. **No hardcoded values**:
   ```css
   /* ✅ GOOD */
   padding: var(--space-4);
   border-radius: var(--radius-md);

   /* ❌ BAD */
   padding: 16px;
   border-radius: 8px;
   ```

### JavaScript Guidelines

1. **Use vanilla JavaScript** (no frameworks)
2. **Add to the `Aural` object**:
   ```javascript
   const Aural = {
       myNewMethod() {
           // Implementation
       }
   };
   ```

3. **Include JSDoc comments**:
   ```javascript
   /**
    * Opens a modal dialog
    * @param {string} modalId - The ID of the modal element
    */
   openModal(modalId) {
       // ...
   }
   ```

4. **Handle cleanup properly**:
   - Remove event listeners
   - Clear intervals/timeouts
   - Remove DOM elements
   - Restore body scroll state

---

## Creating Components

### 1. Create Component CSS

Create `components/your-component.css`:

```css
/**
 * AURAL UI - Your Component
 *
 * Description of what this component does
 */

/* ========================================
   Base Component
   ======================================== */

.your-component {
    /* Layout */
    display: flex;

    /* Spacing */
    padding: var(--space-4);
    gap: var(--space-2);

    /* Colors */
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border-subtle);

    /* Border */
    border-radius: var(--radius-md);

    /* Typography */
    font-size: var(--text-base);

    /* Transitions */
    transition: var(--transition-all-fast);
}

.your-component:hover {
    background: var(--color-bg-hover);
    border-color: var(--color-border-medium);
}

/* ========================================
   Component Elements
   ======================================== */

.your-component__element {
    /* Styles for child element */
}

/* ========================================
   Component Modifiers/Variants
   ======================================== */

.your-component--large {
    padding: var(--space-6);
    font-size: var(--text-lg);
}

/* ========================================
   Accessibility
   ======================================== */

.your-component:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
    .your-component {
        transition: none;
    }
}
```

### 2. Add JavaScript (if needed)

Add to `javascript/index.js`:

```javascript
/**
 * Initialize your component
 * @param {string} componentId - The component element ID
 * @param {Object} options - Configuration options
 */
initYourComponent(componentId, options = {}) {
    const component = document.getElementById(componentId);
    if (!component) return;

    // Add ARIA attributes
    component.setAttribute('role', 'appropriate-role');
    component.setAttribute('aria-label', 'Descriptive label');

    // Add event listeners
    component.addEventListener('click', (e) => {
        // Handle interaction
    });

    // Return API
    return {
        destroy() {
            // Cleanup
        }
    };
},
```

### 3. Add to Imports

Update `src/aural-ui.css`:

```css
/* Components */
@import '../components/button.css';
@import '../components/input.css';
/* ... existing imports ... */
@import '../components/your-component.css';  /* ADD HERE */
```

### 4. Add Semantic Tokens

If needed, add to `tokens/semantic/colors.css`:

```css
/* Your Component */
--color-your-component-bg: var(--color-bg-secondary);
--color-your-component-text: var(--color-text-primary);
--color-your-component-hover: var(--color-bg-hover);
```

### 5. Document in Showcase

Add section to `docs/showcase.html`:

```html
<!-- Your Component -->
<section class="showcase-section" id="your-component">
    <h2 class="showcase-title">Your Component</h2>
    <p class="showcase-subtitle">Description of your component</p>

    <div class="example">
        <div class="example-label">Basic Example</div>
        <div class="your-component">
            Example content
        </div>
    </div>

    <div class="example">
        <div class="example-label">Code Example</div>
        <pre style="background: var(--color-bg-secondary); padding: var(--space-4); border-radius: var(--radius-md); overflow-x: auto;"><code>&lt;div class="your-component"&gt;
    Content here
&lt;/div&gt;</code></pre>
    </div>
</section>
```

Add navigation link:

```html
<li><a href="#your-component" class="nav-link">Your Component</a></li>
```

### 6. Update Documentation

Add to `COMPONENTS.md` with full documentation, variants, and API reference.

---

## Accessibility Requirements

All components MUST meet WCAG 2.1 AA standards:

### Required

- ✅ **Keyboard navigation** - All interactive elements accessible via Tab, Arrow keys, Enter, Escape
- ✅ **Focus indicators** - Visible 2px outline on all interactive elements
- ✅ **ARIA attributes** - Proper roles, labels, states, and relationships
- ✅ **Screen reader support** - Meaningful labels and announcements
- ✅ **Touch targets** - Minimum 44×44px for all interactive elements
- ✅ **Reduced motion** - Respect `prefers-reduced-motion` preference
- ✅ **Color contrast** - WCAG AA compliant (4.5:1 for text, 3:1 for UI)
- ✅ **Semantic HTML** - Use proper HTML5 elements

### Testing

Test with:
- **Keyboard only** (no mouse)
- **Screen reader** (VoiceOver on macOS, NVDA on Windows)
- **Browser accessibility tools** (Chrome DevTools Lighthouse)
- **Color contrast checker**
- **Reduced motion enabled**

---

## Testing

### Manual Testing

Before submitting a PR:

1. **Visual testing**:
   ```bash
   npm run serve
   # Test in Chrome, Firefox, Safari
   ```

2. **Build test**:
   ```bash
   npm run build
   # Ensure no errors
   ```

3. **Test all variants** of your component
4. **Test responsive breakpoints** (mobile, tablet, desktop)
5. **Test keyboard navigation**
6. **Test with reduced motion**

### Browser Testing

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari 12+

---

## Submitting Changes

### Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write clean, documented code
   - Follow code standards
   - Test thoroughly

3. **Build and test**:
   ```bash
   npm run build
   npm run serve
   # Test everything
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

### PR Requirements

Your PR should include:

- ✅ **Clear description** of what changed and why
- ✅ **Screenshots/GIFs** if UI changed
- ✅ **Updated documentation** (README, COMPONENTS.md, showcase)
- ✅ **Accessibility testing results**
- ✅ **Browser testing results**
- ✅ **No breaking changes** (or clearly documented if necessary)

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [x] Tested in Chrome
- [x] Tested in Firefox
- [x] Tested in Safari
- [x] Keyboard navigation works
- [x] Screen reader tested
- [x] Reduced motion tested

## Screenshots
[Add screenshots/GIFs here]

## Checklist
- [x] Code follows style guidelines
- [x] Added/updated documentation
- [x] No console errors
- [x] Build succeeds
```

---

## Reporting Issues

### Bug Reports

When reporting bugs, include:

1. **Description** - Clear description of the bug
2. **Steps to reproduce** - Detailed steps
3. **Expected behavior** - What should happen
4. **Actual behavior** - What actually happens
5. **Screenshots/Videos** - If applicable
6. **Environment**:
   - Browser and version
   - OS and version
   - Aural UI version

### Feature Requests

When requesting features, include:

1. **Use case** - Why is this feature needed?
2. **Proposed solution** - How should it work?
3. **Alternatives considered** - Other approaches?
4. **Examples** - Links to similar implementations

---

## Code of Conduct

### Our Standards

- ✅ Be respectful and inclusive
- ✅ Accept constructive criticism
- ✅ Focus on what's best for the community
- ✅ Show empathy towards others

### Unacceptable Behavior

- ❌ Harassment or discrimination
- ❌ Trolling or insulting comments
- ❌ Public or private harassment
- ❌ Publishing others' private information

---

## Questions?

- **Documentation**: Check README.md and COMPONENTS.md
- **Issues**: Search existing issues on GitHub
- **Discussions**: Open a discussion on GitHub

---

## License

By contributing to Aural UI, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Aural UI! 🎨✨
