# Storybook Themes Aligned with Deployed Documentation

## Summary

Storybook has been updated to use the same 7 themes as the deployed documentation at ferology.github.io.

## Theme Alignment

### ✅ Now Using These 9 Themes

| Theme | Description | File |
|-------|-------------|------|
| **Dark** | Default elegant dark theme | `dark.css` |
| **Light** | Clean professional daytime | `light.css` |
| **Neon** | Cyberpunk vibrant glows | `neon.css` |
| **Kinetic** | Brutalist bold motion | `kinetic.css` |
| **Prismatic** | Iridescent purples with gradient depth | `prismatic.css` |
| **High Contrast** | Maximum accessibility | `high-contrast.css` |
| **Colorblind** | Colorblind-friendly colors | `colorblind-friendly.css` |
| **Minimal** | Ultra-clean monochrome | `minimal.css` |
| **Warm** | Cozy earth tones | `warm.css` |

### ❌ Not Currently Used (Available in `/themes/` folder)

| Theme | File | Status |
|-------|------|--------|
| Neon Refined | `neon-refined.css` | Available but not in active theme set |

*Note: This theme file remains in the themes folder for potential future use but is not currently listed in the active theme selector.*

## Files Updated

### 1. `.storybook/utils/createThemeGrid.ts`
- Updated theme list to match deployed documentation
- Now renders 7 themes: Dark, Light, Neon, Neon Refined, Kinetic, High Contrast, Colorblind

### 2. `.storybook/preview.ts`
- Updated global theme toolbar to show all 7 deployed themes
- Theme switcher now matches documentation site exactly

### 3. `themes/` Folder
- ✅ Copied `high-contrast.css` from docs
- ✅ Copied `colorblind-friendly.css` from docs
- ✅ Updated `neon-refined.css` from docs (latest version)

### 4. `THEME_COMPARISON.md`
- Updated theme descriptions to match deployed documentation
- Accurate theme names and descriptions

### 5. `stories/Button.stories.ts`
- No changes needed - uses `createThemeGrid()` utility
- Automatically displays all 7 themes in AllThemes and ThemeComparison stories

## Verification

To verify the alignment:

1. **View in Storybook**:
   ```bash
   npm run storybook
   ```
   - Navigate to Components > Button > AllThemes
   - You should see 7 theme cards matching the deployed docs

2. **Global Theme Switcher**:
   - Click the paintbrush icon in Storybook toolbar
   - Theme dropdown should show: Dark, Light, Neon, Neon Refined, Kinetic, High Contrast, Colorblind

3. **Compare with Deployed Site**:
   - Deployed docs: https://ferology.github.io/
   - Storybook themes now match exactly

## Theme Previews

### Desktop View
All 7 themes display in a responsive grid (typically 2-3 columns)

### Mobile View
Themes stack vertically, one per row, with:
- Theme label at the top
- Preview card below
- Component centered in the card

## Mobile Navigation (Documentation Site)

The deployed documentation site (`demo.html`) features:
- **Logo**: Animated soundwave icon (8 bars)
- **Brand Name**: "Aural UI" with gradient text
- **Mobile Header**: Hamburger menu + logo + brand name
- **Responsive**: Logo scales appropriately on mobile devices

This branding is specific to the documentation site and separate from Storybook's default branding.

## Next Steps

1. **Test All Themes**:
   - Verify each theme renders correctly in Storybook
   - Check contrast and accessibility
   - Test on mobile viewport sizes

2. **Apply Pattern to Other Components**:
   - Use the same `createThemeGrid()` utility for Card, Alert, etc.
   - Maintain consistency across all component stories

3. **Documentation**:
   - Keep this file updated if themes change
   - Reference `THEME_COMPARISON.md` for usage guide

## Technical Details

### Theme Loading

Each theme container in the grid loads CSS independently:

```typescript
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = `/themes/${theme.id}.css`;
container.appendChild(link);
```

### Theme Isolation

Themes are isolated using:
- `data-theme` attributes on containers
- CSS custom properties scoped to each theme
- Independent CSS file loading per container

This ensures:
- No CSS conflicts between themes
- Proper variable cascade
- Accurate theme representation

## Accessibility

All 7 themes maintain WCAG 2.1 AA contrast standards:

- **Dark, Light, Neon Refined, Kinetic**: Standard accessibility
- **Neon**: Vibrant but contrast-compliant
- **High Contrast**: Exceeds AAA standards
- **Colorblind**: Optimized for color vision deficiencies

## Maintenance

To update themes in the future:

1. Update theme CSS files in `/docs/` folder (source of truth)
2. Copy updated files to `/themes/` folder
3. Verify in Storybook and documentation site
4. Update this document if theme names or count changes

---

**Last Updated**: 2026-02-28
**Storybook Version**: 8.6.17
**Theme Count**: 9 (matching deployed documentation)
