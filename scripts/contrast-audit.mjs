#!/usr/bin/env node
/**
 * Theme contrast audit (WCAG 1.4.3 / 1.4.11)
 *
 * Loads dist/aural-ui.css plus each theme in a real browser, resolves the
 * semantic color tokens, and checks the pairs components actually use.
 * Run `npm run build:css` first. Exits 1 if any pair fails.
 *
 *   node scripts/contrast-audit.mjs [theme ...]   (default: all themes)
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const THEMES = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      'aural-ui',
      'dark',
      'light',
      'minimal',
      'warm',
      'prismatic',
      'neon',
      'neon-refined',
      'kinetic',
      'high-contrast',
      'colorblind-friendly',
    ];

// [label, foreground token, background token, required ratio]
const SURFACES = ['--color-bg-primary', '--color-bg-secondary', '--color-bg-elevated'];
const PAIRS = [];
for (const s of SURFACES) {
  for (const t of ['text-primary', 'text-secondary', 'text-tertiary', 'text-muted']) {
    PAIRS.push([`${t} on ${s.replace('--color-', '')}`, `--color-${t}`, s, 4.5]);
  }
  for (const k of ['success', 'error', 'warning', 'info']) {
    PAIRS.push([`${k}-text on ${s.replace('--color-', '')}`, `--color-${k}-text`, s, 4.5]);
  }
  PAIRS.push([`control-border on ${s.replace('--color-', '')}`, '--color-control-border', s, 3]);
  PAIRS.push([`primary (links) on ${s.replace('--color-', '')}`, '--color-primary', s, 4.5]);
}
PAIRS.push([
  'primary button text',
  '--color-button-primary-text',
  '--color-button-primary-bg',
  4.5,
]);
PAIRS.push(['danger button text', '--color-button-danger-text', '--color-button-danger-bg', 4.5]);
PAIRS.push([
  'on-primary text (chips, tabs, pagination, progress)',
  '--color-text-on-primary',
  '--color-primary',
  4.5,
]);
PAIRS.push(['on-success text', '--color-text-on-success', '--color-success-solid', 4.5]);
PAIRS.push(['on-error text', '--color-text-on-error', '--color-error-solid', 4.5]);
PAIRS.push(['on-info text', '--color-text-on-info', '--color-info-solid', 4.5]);
PAIRS.push(['on-warning text', '--color-text-on-warning', '--color-warning-solid', 4.5]);
PAIRS.push(['nav active text', '--color-nav-active-text', '--color-nav-active-bg', 4.5]);

const lum = ([r, g, b]) => {
  const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};
const over = (fg, bg) => fg.slice(0, 3).map((c, i) => c * fg[3] + bg[i] * (1 - fg[3]));

const browser = await chromium.launch();
let failures = 0;
for (const theme of THEMES) {
  const page = await browser.newPage();
  const links = ['aural-ui', theme].filter((v, i, a) => a.indexOf(v) === i);
  await page.setContent(`<html><body></body></html>`);
  for (const l of links)
    await page.addStyleTag({
      content: fs.readFileSync(path.join(root, 'dist', `${l}.css`), 'utf8'),
    });
  const tokens = [...new Set(PAIRS.flatMap((p) => [p[1], p[2]]))];
  const resolved = await page.evaluate((tokens) => {
    const out = {};
    for (const t of tokens) {
      if (!getComputedStyle(document.documentElement).getPropertyValue(t).trim()) {
        out[t] = null; // token not defined in this theme
        continue;
      }
      // Separate probes: some themes rewrite `color` on elements that have a background
      const fgEl = document.createElement('i');
      const bgEl = document.createElement('div');
      fgEl.style.color = `var(${t})`;
      bgEl.style.background = `var(${t})`;
      document.body.append(fgEl, bgEl);
      const cs = getComputedStyle(bgEl);
      // gradient tokens can't be checked as a single color
      out[t] =
        cs.backgroundImage !== 'none'
          ? null
          : { fg: getComputedStyle(fgEl).color, bg: cs.backgroundColor };
    }
    return out;
  }, tokens);
  const parse = (c) => {
    const m = c && c.match(/rgba?\(([^)]+)\)/);
    if (!m) {
      const c2 = c && c.match(/color\(srgb ([^)]+)\)/);
      if (!c2) return null;
      const v = c2[1].split(/[ /]+/).map(Number);
      return [v[0] * 255, v[1] * 255, v[2] * 255, v[3] ?? 1];
    }
    const v = m[1].split(/[ ,/]+/).map(Number);
    return [v[0], v[1], v[2], v[3] ?? 1];
  };
  const page0 = parse(resolved['--color-bg-primary'].bg);
  const bad = [];
  for (const [label, f, b, req] of PAIRS) {
    if (!resolved[f] || !resolved[b]) continue;
    const fg = parse(resolved[f].fg),
      bgRaw = parse(resolved[b].bg);
    if (!fg || !bgRaw) continue; // token undefined or gradient in this theme
    const bg = bgRaw[3] < 1 ? over(bgRaw, page0) : bgRaw;
    const flat = fg[3] < 1 ? over(fg, bg) : fg;
    const r = ratio(flat, bg);
    if (r < req) bad.push(`   ${r.toFixed(2)} < ${req}  ${label}`);
  }
  failures += bad.length;
  console.log(`${bad.length ? '✗' : '✓'} ${theme}${bad.length ? ` (${bad.length})` : ''}`);
  bad.forEach((l) => console.log(l));
  await page.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
