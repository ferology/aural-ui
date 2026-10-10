#!/usr/bin/env node
/**
 * Axe-core scan of every Storybook story (WCAG 2.1 A/AA) in one or more themes.
 *
 * Needs a STATIC Storybook build served at its base path (dev mode does not
 * render stories under the GitHub Pages base path):
 *
 *   npm run build:css && npx storybook build -o /tmp/serve/aural-ui/storybook
 *   (cd /tmp/serve && python3 -m http.server 6007)
 *   npm run audit:storybook -- minimal dark
 *
 * Env: STORYBOOK_URL (default http://localhost:6007/aural-ui/storybook),
 *      IDS=<json array of story ids> to rescan a subset,
 *      OUT=<path> for the JSON results (default storybook-axe.json in cwd).
 * Exits 1 if any story has a violation or fails to render.
 */
import { chromium } from 'playwright';
import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);
const AxeBuilder = require('@axe-core/playwright').default;

const BASE = process.env.STORYBOOK_URL || 'http://localhost:6007/aural-ui/storybook';
const themes = process.argv.slice(2).length ? process.argv.slice(2) : ['minimal', 'dark'];
const idx = await (await fetch(`${BASE}/index.json`)).json();
let stories = Object.values(idx.entries).filter((e) => e.type === 'story');
if (process.env.IDS) {
  const ids = new Set(JSON.parse(fs.readFileSync(process.env.IDS, 'utf8')));
  stories = stories.filter((s) => ids.has(s.id));
}

const browser = await chromium.launch();
const out = {};
for (const theme of themes) {
  const ctx = await browser.newContext();
  const queue = [...stories];
  out[theme] = [];
  await Promise.all(
    Array.from({ length: 4 }, async () => {
      const page = await ctx.newPage();
      while (queue.length) {
        const s = queue.shift();
        try {
          await page.goto(`${BASE}/iframe.html?id=${s.id}&viewMode=story&globals=theme:${theme}`, {
            waitUntil: 'load',
            timeout: 20000,
          });
          await page.waitForSelector('#storybook-root > *, #storybook-docs', {
            state: 'attached',
            timeout: 10000,
          });
          await page.waitForTimeout(400);
          const r = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();
          for (const v of r.violations) {
            out[theme].push({
              story: s.id,
              rule: v.id,
              impact: v.impact,
              n: v.nodes.length,
              sample: v.nodes[0].target.join(' ').slice(0, 80),
              html: v.nodes[0].html.slice(0, 100),
              msg: (v.nodes[0].any[0]?.message || '').slice(0, 120),
            });
          }
        } catch (e) {
          out[theme].push({ story: s.id, rule: 'ERROR', msg: e.message.slice(0, 80) });
        }
      }
    })
  );
}
await browser.close();
fs.writeFileSync(process.env.OUT || 'storybook-axe.json', JSON.stringify(out, null, 1));
let total = 0;
for (const [theme, v] of Object.entries(out)) {
  total += v.length;
  console.log(
    `${v.length ? '✗' : '✓'} ${theme}: ${v.length} violations in ${new Set(v.map((x) => x.story)).size} stories`
  );
}
process.exit(total ? 1 : 0);
