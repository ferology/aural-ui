# Aural UI — Designer SKILL

Operating guide for anyone (human or AI) producing artifacts in the Aural UI design language.

## THE SYSTEM IN ONE LINE

**Free · Open Source · Accessible by default.** A theme-first, framework-agnostic design system — nine themes in the box, a strict semantic-token contract, and copy-paste components for React, Vue, Svelte, or vanilla HTML.

## HARD RULES

1. **Import order matters.** `aural-ui.css` first (tokens + base), then a theme (e.g. `themes/dark.css`), then your page styles.
2. **Components consume semantic tokens only** (`--color-primary`, `--color-bg-secondary`, `--space-4`). Never hardcode a color literal or a pixel spacing in component styles.
3. **Minimum 44px hit target** on any interactive element.
4. **WCAG 2.1 AA** on every text-on-background pair. No exceptions.
5. **4px spacing base.** Every padding/margin references `--space-*`.
6. **Icons**: inline SVG, 24×24, 1.5px stroke, rounded caps. Lucide is the reference.
7. **Motion** composed from `--duration-* --ease-*` only. Interactions ≤ 300ms, modals/routes ≤ 500ms, nothing over 1s.
8. **Theme swap is a single attribute change** — `document.documentElement.dataset.theme = '…'`. Never fork components per theme.

## CONTENT PATTERNS

- **Voice.** Declarative. Confident. We write like designers who know what they want — no hedging, no buzzwords.
- **Button labels.** Verb-first (`Export`, `Listen`, `Add track`), sentence-case.
- **Badges.** ALL-CAPS short codes (`LIVE`, `DRAFT`, `NEW`).
- **Overlines.** Describe the _section_, not the content. UPPERCASE, `--font-mono`, `tracking-widest`, `--color-primary`.
- **Empty states.** Tell the user what to do next — never apologize for nothing being there.

**Length caps.**

- Headings ≤ 5 words
- Leads ≤ 2 sentences
- Card descriptions ≤ 140 characters
- Helper text ≤ 80 characters

## PATTERNS TO REACH FOR

- **Accent overlines.** Short mono UPPERCASE kickers in `--color-primary` above section titles. One per section.
- **Semantic tokens over primitives.** `var(--color-primary)`, not `var(--primary-400)`.
- **Mono meta.** Timestamps, token names, durations, keyboard shortcuts — always `--font-mono`, `--text-xs`, `--color-text-tertiary`.
- **Declarative card copy.** State what it is, not what it might help you do.

## PATTERNS TO AVOID

- No hardcoded hex values in component styles — that's a bug.
- No emoji in product UI — use inline SVG.
- No Inter, Roboto, or Arial as primary — the system ships its own type.
- No per-theme component overrides. If it needs to change per theme, it needs a new semantic token.
- No decorative drop shadows on dark surfaces — use borders and backdrop blur.

## THEMES (9 shipping)

| Theme         | Role                              | Data attribute               |
| ------------- | --------------------------------- | ---------------------------- |
| Dark          | Default, creative surfaces        | `data-theme="dark"`          |
| Light         | Docs, enterprise, print           | `data-theme="light"`         |
| Neon          | Gaming, creative, energy          | `data-theme="neon"`          |
| Prismatic     | Iridescent, expressive            | `data-theme="prismatic"`     |
| Kinetic       | Brutalist, high-motion            | `data-theme="kinetic"`       |
| High Contrast | Maximum-accessibility requirement | `data-theme="high-contrast"` |
| Colorblind    | CVD-optimized palette             | `data-theme="colorblind"`    |
| Minimal       | Ultra-clean monochrome            | `data-theme="minimal"`       |
| Warm          | Cozy earth tones                  | `data-theme="warm"`          |

Bring-your-own themes override the semantic-alias layer only. Primitives stay put.

## WHEN BUILDING NEW SURFACES

1. Start with the Aural UI CSS link and set `data-theme="dark"` on `<html>`.
2. Compose with existing component classes — don't restyle them.
3. Put page-specific structure in a local `<style>` (layout only — never colors or type).
4. Every color literal is a bug. Every hardcoded `16px` is a bug. Replace with tokens.
5. Validate hit targets and contrast on every interactive element before shipping.

## FILE MAP (reference)

```
docs/aural-ui.css         ← entry point (tokens + reset + base)
docs/dark.css etc.        ← theme files
components/               ← component source
themes/                   ← theme source
tokens/                   ← primitive + semantic token layers
stories/                  ← Storybook stories
```

## REFERENCE APPLICATION

[`aural_studio.html`](aural_studio.html) is the canonical end-to-end application of the system — sidebar + hero + media grid + now-playing + player bar. Mimic its rhythm, density, and component composition when asked for "a full product view." It is a **non-commercial** reference: there is no pricing, paywall, or upgrade CTA.

## REFERENCES

- [Landing page](landing.html) — the story of the system at a glance
- [Aural Studio](aural_studio.html) — full reference application
- [Themes](themes.html) — nine themes, side-by-side
- [Tokens](tokens.html) — the full token inventory
- [Accessibility](accessibility.html) — WCAG AA conformance and testing
- [Components catalog](catalog.html) — every primitive on one page
