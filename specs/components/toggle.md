# Toggle

## Status: functionally equivalent to Switch — kept for backward compatibility

`.toggle` (`components/toggle.css`) and `.switch` (`components/switch.css`,
see `specs/components/switch.md`) are the same control. Confirmed by
direct comparison of both files, both docs pages
(`docs/components/toggles.html`, `docs/components/switch.html`), and a
repo-wide grep:

- **Sizes match exactly at every structural position**: default 44×24
  track / 20×20 thumb, `.toggle-sm`/`.switch-sm` 36×20 / 16×16,
  `.toggle-lg`/`.switch-lg` 56×32 / 28×28. Same color variants
  (success/warning/error/info, switch additionally has an explicit
  `.switch-primary`). Same states (hover, checked, focus-visible,
  disabled, reduced-motion, high-contrast).
- **No distinct real-world usage.** A repo-wide grep for `.toggle` turns
  up only: `components/toggle.css` itself, the backward-compat `.toggle`
  block duplicated inside `components/switch.css`, and two docs-site demo
  pages (`docs/components/toggles.html`, `docs/showcase.html`). There is
  no `Toggle.stories.ts` (only `Switch.stories.ts` exists), and no
  framework/app code references `.toggle` — it is a docs-site fixture,
  not a used-in-anger component.
- The file's own header comment calls it **"Toggle (Switch) Component"** —
  the original author already considered it the same thing as Switch.

**The one real difference is implementation technique, not design:**
Toggle builds its track/thumb from `::before`/`::after` pseudo-elements on
a single `<label><input><span></label>` structure. Switch was built later
with real `<div class="switch__track">`/`<div class="switch__thumb">`
elements specifically "for better rendering and alignment" (per
`switch.css`'s header comment) — i.e. Switch is the fixed-up rebuild of
the same idea. The only visible rendering difference this produces is
that Toggle's track has a subtle `inset 0 2px 4px` shadow that Switch's
track does not.

**Known footgun — read before touching either file's `.toggle` rules:**
`components/switch.css` ends with a "BACKWARDS COMPATIBILITY" section
that re-declares `.toggle`, `.toggle-sm`, `.toggle-lg`, and the
`.toggle-{variant}` checked-state rules at identical selector specificity
to `components/toggle.css`. Because `src/aural-ui.css` `@import`s
`toggle.css` _before_ `switch.css`, the cascade means switch.css's
duplicate wins for every property both blocks set. In practice this means
`.toggle`'s unchecked/hover track color is actually rendered using
switch.css's generic `--color-border-strong`/`--color-border-stronger`,
not toggle.css's own dedicated `--color-toggle-track-off`/
`--color-toggle-track-hover` semantic tokens — those tokens are defined
and still consumed by toggle.css's source, but lose the cascade. This
audit left that ordering/duplication alone (removing either file or
import is explicitly out of scope — see the task notes — and silently
changing which block wins would be an unreviewed visual change for
existing consumers); it's flagged here so whoever next touches toggle
styling doesn't get confused about why editing `--color-toggle-track-off`
doesn't change what's on screen.

**Guidance:** prefer `.switch` in new code. `.toggle` is not deprecated in
any enforced sense (no lint rule, no console warning) — it's just the
older of two implementations of the same control, kept because removing
it or its import would be a breaking change for any consumer markup still
using `<label class="toggle">`.

For anatomy, tokens, states, and code examples, see
`specs/components/switch.md` — they apply to `.toggle` as well, modulo
the pseudo-element-vs-real-DOM markup difference described above.
