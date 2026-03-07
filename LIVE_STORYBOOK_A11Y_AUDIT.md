# Live Storybook Accessibility Audit Report

**Date:** 2026-03-07
**Storybook URL:** http://localhost:6006
**Tool:** Playwright + axe-core
**Standard:** WCAG 2.1 AA

---

## Executive Summary

**Stories Scanned:** 50
**Components with Violations:** 0
**Total Violations:** 0

### Violations by Severity

- 🔴 **Critical:** 0
- 🟠 **Serious:** 0
- 🟡 **Moderate:** 0
- 🔵 **Minor:** 0

---

## Storybook UI Violations

**Found 2 violations in the Storybook interface itself:**

### 1. color-contrast: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds

**Impact:** serious
**WCAG:** wcag2aa, wcag143
**Affected elements:** 1
**Fix:** Elements must meet minimum color contrast ratio thresholds
**Learn more:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright

**Example:**

```html
<button class="css-18rvurk"></button>
```

### 2. meta-viewport: Ensure <meta name="viewport"> does not disable text scaling and zooming

**Impact:** moderate
**WCAG:** wcag2aa, wcag144
**Affected elements:** 1
**Fix:** Zooming and scaling must not be disabled
**Learn more:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright

**Example:**

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

---

## Component Violations

✅ **Excellent!** No violations found in any rendered components.

## Summary Statistics

| Metric                     | Count |
| -------------------------- | ----- |
| Stories Scanned            | 50    |
| Components with Violations | 0     |
| Total Violations           | 0     |
| Critical Issues            | 0     |
| Serious Issues             | 0     |
| Moderate Issues            | 0     |
| Minor Issues               | 0     |

---

## Next Steps

1. **Review Critical Issues** - Fix all critical violations immediately
2. **Address Serious Issues** - High priority for WCAG compliance
3. **Fix Moderate Issues** - Important for best practices
4. **Polish Minor Issues** - Complete for full compliance

**Compare with code audit:** Review WCAG_AUDIT_REPORT_2026-03-03.md to see code-level vs. runtime issues.

---

**Audit completed:** 2026-03-07T13:39:35.548Z
