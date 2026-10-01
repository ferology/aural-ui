# Code Block

## 1. Metadata

|                   |                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| Name              | Code Block                                                                                                        |
| Category          | Data Display                                                                                                      |
| Status            | Stable                                                                                                            |
| CSS file          | `components/code-block.css`                                                                                       |
| Naming convention | BEM (`.aural-code-block__header`, `.aural-code-block--terminal`), plus a separate flat `.aural-code-inline` class |

## 2. Overview

Code Block displays source-code snippets with basic syntax-token
coloring, an optional header (language label + copy button), line
numbers, per-line highlight states, and a terminal theme. A sibling
class, `.aural-code-inline`, styles a single inline `<code>` element
within body text. JS (`Aural.initAllCodeBlocks()`) wires up the copy
button's clipboard behavior and "Copied" state — the CSS only defines
the visual states.

**When to use:**

- Displaying source code, config files, or terminal commands in docs, changelogs, or API references
- Highlighting specific lines (added/removed/changed) within a snippet
- Short inline code references within a sentence (`.aural-code-inline`)

**When NOT to use:**

- Editable code — this is a display-only component, not an editor
- Long-form prose with occasional code words — prefer `.aural-code-inline` sparingly, not a full block, for single terms

## 3. Anatomy

| Class                                                                                                                                     | Purpose                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `.aural-code-block`                                                                                                                       | Root container — monospace font stack, tertiary background, rounded border, clipped overflow.                   |
| `.aural-code-block__header`                                                                                                               | Top bar: language label (left) + copy button (right).                                                           |
| `.aural-code-block__language`                                                                                                             | Uppercase, tracked language/filename label.                                                                     |
| `.aural-code-block__copy`                                                                                                                 | Copy-to-clipboard button; `--copied` modifier swaps it to a solid success state.                                |
| `.aural-code-block__copy-icon::before`                                                                                                    | Clipboard emoji by default, swapped to a checkmark when `--copied` is applied.                                  |
| `.aural-code-block__content`                                                                                                              | Scrollable code viewport (`max-height: 500px`, both-axis scroll).                                               |
| `.aural-code-block__pre` / `__code`                                                                                                       | The `<pre>`/`<code>` pair holding the actual snippet text.                                                      |
| `--with-line-numbers` + `.aural-code-block__line-numbers`                                                                                 | Enables a flex layout with a separate line-number gutter column.                                                |
| `.aural-code-block__line`                                                                                                                 | Wraps a single line of code when line-by-line markup is used (needed for highlighting).                         |
| `.aural-code-block__line--highlight` / `--success` / `--error`                                                                            | Tinted-background + colored left accent for a called-out line (neutral/added/removed emphasis).                 |
| `.aural-code-block--terminal`                                                                                                             | Dark terminal theme: near-black background, green monospace text, decorative traffic-light dots via `::before`. |
| `.aural-code-block--sm` / `--lg`                                                                                                          | Compact / spacious font-size and padding.                                                                       |
| `.aural-code-inline`                                                                                                                      | Standalone inline `<code>` styling — tertiary background pill, primary-colored text.                            |
| `.token-comment` / `-string` / `-number` / `-keyword` / `-function` / `-operator` / `-variable` / `-class` / `-property` / `-punctuation` | Basic syntax-highlighting classes applied to `<span>`s inside `.aural-code-block__code`.                        |

## 4. Tokens used

| Token                                                                                                                                | Used for                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `--color-bg-secondary` / `--color-bg-tertiary`                                                                                       | Header/line-numbers background, base block background, copy-hover background |
| `--color-border`                                                                                                                     | Block/header/copy-button/inline-code borders                                 |
| `--color-text-primary` / `--color-text-secondary` / `--color-text-muted`                                                             | Code text, language label, line numbers, scrollbar-thumb hover               |
| `--color-primary` / `--color-success`                                                                                                | Copy-button hover/focus accent, `--copied` state                             |
| `--color-code-line-highlight-bg` / `--color-code-line-success-bg` / `--color-code-line-error-bg`                                     | Highlighted-line backgrounds (neutral / added / removed)                     |
| `--color-code-terminal-bg` / `-border` / `-header-bg` / `-text`                                                                      | `.aural-code-block--terminal` surface, border, header, and text colors       |
| `--color-code-token-comment` / `-string` / `-number` / `-keyword` / `-function` / `-operator` / `-variable` / `-class` / `-property` | Per-token-type syntax color                                                  |
| `--radius` / `--radius-md` / `--radius-sm`                                                                                           | Block corners, copy-button corners, inline-code corners                      |
| `--space-0-5` … `--space-6`, `--size-6`                                                                                              | Padding/gaps across header, content, sizes, and `.aural-code-inline`         |
| `--text-xs` / `--text-sm` / `--text-base`                                                                                            | Language label, base code size, `--sm`/`--lg` size variants                  |
| `--font-semibold`                                                                                                                    | Keyword/class token weight                                                   |

**New tokens added while migrating this file:**

- `--color-code-line-highlight-bg: rgba(16, 185, 129, 0.1)` — same RGB
  family already used by `--shadow-primary`/`--glow-primary-*`, at a new
  0.1 alpha step for a highlighted code line (`tokens/semantic/colors.css`).
- `--color-code-line-success-bg: rgba(34, 197, 94, 0.1)` — same RGB as
  `--color-success`, new 0.1 alpha step for an "added" line.
- `--color-code-line-error-bg: var(--color-error-bg)` — reused the
  existing `--color-error-bg` token (already `rgba(239, 68, 68, 0.1)`)
  rather than duplicating the literal.
- `--color-code-terminal-bg: #1a1a1a`, `--color-code-terminal-border: #333`,
  `--color-code-terminal-header-bg: #2a2a2a`, `--color-code-terminal-text: #00ff00`
  — the terminal theme's literal colors, deliberately outside the neutral
  scale (classic black-terminal/green-text look), named so future readers
  know they're intentional, not an oversight.
- `--color-code-token-comment: #6a737d`, `--color-code-token-keyword: #8b5cf6`,
  `--color-code-token-property: #10b981` — syntax colors with no match
  anywhere else in the palette.
- `--color-code-token-string: var(--color-success)`,
  `--color-code-token-number: var(--color-warning)`,
  `--color-code-token-function: var(--color-secondary)`,
  `--color-code-token-operator: var(--color-error)`,
  `--color-code-token-class: var(--color-warning)` — aliases to existing
  semantic colors whose literal already matched the prior raw hex.
- `--color-code-token-variable: var(--pink-500)` — alias to the existing
  core palette token that matched the prior raw hex (no semantic "pink" token exists yet).

All eight added in `tokens/semantic/colors.css` under the existing "Code
Block" section.

**Warnings left as `aural-ignore`:** `max-height: 500px` on
`.aural-code-block__content` — a one-off scroll-viewport cap, not a
layout-size token.

## 5. Props/API

Code Block is CSS/markup plus a small init function:
`Aural.initAllCodeBlocks()` wires each `.aural-code-block__copy` button
to copy `.aural-code-block__code`'s text and toggle the `--copied`
modifier/icon. The documented React/Vue usage (`stories/CodeBlock.stories.ts`)
wraps this as a `<CodeBlock code language showLineNumbers highlightLines
fileName copyable size terminal />` component, where `size` maps to
`--sm`/`--lg` and `terminal` maps to `--terminal`.

## 6. States

| State            | Trigger                                                | Effect                                                                  |
| ---------------- | ------------------------------------------------------ | ----------------------------------------------------------------------- |
| Default          | —                                                      | Static snippet, header with language label + copy button.               |
| Copy hover/focus | `.aural-code-block__copy:hover` / `:focus-visible`     | Background tints tertiary, border/text turn primary; 2px focus ring.    |
| Copy active      | `.aural-code-block__copy:active`                       | Scales to `0.98`.                                                       |
| Copied           | `.aural-code-block__copy--copied`                      | Button fills solid success color, icon swaps to a checkmark.            |
| Line highlighted | `.aural-code-block__line--highlight/--success/--error` | Tinted row background + 3px left accent in the matching semantic color. |
| Terminal         | `.aural-code-block--terminal`                          | Dark near-black surface, green monospace text, decorative window dots.  |
| Loading          | `.aural-code-block--loading`                           | Reduced opacity, copy button disabled (`pointer-events: none`).         |
| Reduced motion   | `prefers-reduced-motion: reduce`                       | Copy-button transition disabled.                                        |
| High contrast    | `prefers-contrast: high`                               | Block border doubles to 2px; highlighted-line accent doubles to 4px.    |

## 7. Code example

```html
<div class="aural-code-block">
  <div class="aural-code-block__header">
    <span class="aural-code-block__language">JavaScript</span>
    <button class="aural-code-block__copy" aria-label="Copy code to clipboard">
      <i data-lucide="copy"></i> Copy
    </button>
  </div>
  <div class="aural-code-block__content">
    <pre
      class="aural-code-block__pre"
    ><code class="aural-code-block__code"><span class="aural-code-block__line">const x = 42;</span>
<span class="aural-code-block__line aural-code-block__line--highlight">const y = x * 2;</span></code></pre>
  </div>
</div>

<!-- Inline code -->
<p>Use <code class="aural-code-inline">console.log()</code> to output messages.</p>
```

```javascript
// Initialize after render
window.Aural?.initAllCodeBlocks();
lucide.createIcons();
```

## 8. Cross-references

- **Badge** — a "Copied" state is self-contained here (not a Badge/Toast), but a copy-success Toast is a reasonable alternative for longer-lived confirmation.
- **Card** — code blocks are frequently embedded inside a `.card-body` for API-documentation layouts (see `stories/CodeBlock.stories.ts`'s `APIDocumentation` story).
