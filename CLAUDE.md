# aural-ui — working with this codebase

aural-ui (`aural-design` on npm) is a plain-CSS design system: primitive and
semantic design tokens in `tokens/`, ~60 components in `components/`, and
theme overrides in `themes/`. There is no JS framework underneath the CSS
itself — components are styled via class selectors, data attributes, and
ARIA attribute selectors.

## Before touching `components/`, `themes/`, or `tokens/`

1. **Read the spec first.** `specs/components/<name>.md` documents a
   component's anatomy, variants, states, and which tokens it should use.
   `specs/foundations/<category>.md` documents a token category (color,
   spacing, typography, radius, elevation, motion, z-index, size,
   breakpoints). If a component or foundation has no spec yet, it hasn't
   been migrated to this system yet — check with whoever's driving that
   rollout before assuming the gap is intentional.

2. **Never hardcode a visual value in `components/*.css`.** No raw hex/rgb
   colors, no raw px for spacing/sizing/radius, no raw z-index numbers. Use
   a token from `tokens/core/` or `tokens/semantic/` — prefer the semantic
   token when one exists (e.g. `var(--color-text-primary)` over
   `var(--neutral-900)`, `var(--z-dropdown)` over `var(--z-50)`).
   `tokens/` and `themes/` are where literals are _defined_; they're exempt
   from this rule — `components/` is where it's enforced.

3. **If no token covers the value you need**, add one to the matching file
   in `tokens/core/` (and a semantic alias in `tokens/semantic/` if it's a
   color or has more than one meaning) rather than hardcoding it. See
   `specs/tokens/token-reference.md` for the full current set before adding
   a near-duplicate.

4. **If a value is genuinely one-off and not worth a token** (a bespoke
   decorative effect, say), mark it with a trailing or preceding comment:
   `/* aural-ignore: <reason> */` — the audit script below will skip it.
   Use this sparingly; it's an escape hatch, not a default.

5. **Don't invent a third naming convention.** Most components use flat
   kebab-case classes (`.card`, `.card-hover`). A few — `date-picker.css`,
   `combobox.css` — use BEM (`.aural-combobox__option--selected`). Match
   whichever convention the file you're editing already uses; don't convert
   one to the other as a drive-by change, and don't start a new pattern.

6. **Run the token audit before committing:**

   ```
   npm run audit:tokens
   ```

   Zero errors required for any file you touched (it also runs
   automatically on staged `components/*.css` files via the pre-commit
   hook). Warnings are advisory — they usually mean a raw value has no
   token yet, which is worth fixing but isn't blocking.

7. **After adding or changing a token**, regenerate the reference doc
   instead of hand-editing it:
   ```
   npm run generate:token-docs
   ```
   This rewrites `specs/tokens/token-reference.md` from the actual CSS in
   `tokens/`, so it can't drift out of sync the way hand-maintained docs do.

## Rollout status

Complete. All 59 `components/*.css` files have a spec in `specs/components/`
(the 5 theme-reskin files — `buttons-refined.css`, `cards-refined.css`,
`kinetic-buttons.css`, `kinetic-cards.css`, `deluxe-neon.css` — are
documented as "Theme variants" inside `button.md`/`card.md` instead of
getting standalone specs, since they're docs-site decoration, not separate
components). `npm run audit:tokens` reports zero errors repo-wide and is a
**blocking** step in CI — a PR that introduces a new hardcoded value will
fail the build, not just get a warning. Remaining warnings (non-blocking)
are either raw transition/animation durations or values genuinely marked
`/* aural-ignore: reason */`.

If you find a component whose spec looks thin or stale, that's drift to
fix, not a sign the system doesn't apply to it — every component is
in scope now.
