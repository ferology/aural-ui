/**
 * Parses tokens/core/**\/*.css and tokens/semantic/**\/*.css into a set of
 * reverse lookup maps (resolved value -> token name) used by both
 * scripts/token-audit.js and scripts/generate-token-reference.js.
 */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const ROOT = path.join(__dirname, '../..');
const TOKEN_DIRS = [path.join(ROOT, 'tokens/core'), path.join(ROOT, 'tokens/semantic')];

function listCssFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return listCssFiles(full);
      return entry.name.endsWith('.css') ? [full] : [];
    })
    .sort();
}

function parseLength(value) {
  const v = value.trim();
  if (v === '0') return 0;
  let m = v.match(/^(-?[\d.]+)px$/);
  if (m) return parseFloat(m[1]);
  m = v.match(/^(-?[\d.]+)rem$/);
  if (m) return parseFloat(m[1]) * 16;
  return null;
}

function parseNumber(value) {
  const v = value.trim();
  return /^-?\d+$/.test(v) ? parseInt(v, 10) : null;
}

function parseTimeMs(value) {
  const v = value.trim();
  let m = v.match(/^(-?[\d.]+)ms$/);
  if (m) return parseFloat(m[1]);
  m = v.match(/^(-?[\d.]+)s$/);
  if (m) return parseFloat(m[1]) * 1000;
  return null;
}

const HEX_RE = /#(?:[0-9a-fA-F]{3,4}){1,2}\b/g;

/**
 * Finds color-like substrings in a value, correctly balancing nested
 * parens (e.g. `rgba(var(--color-bg-primary-rgb), 0.8)`). A function-form
 * match that itself contains `var(` is already tokenized and is skipped.
 */
function findColors(value) {
  const results = [...value.matchAll(HEX_RE)];
  const fnStart = /\b(rgba?|hsla?)\(/g;
  let m;
  while ((m = fnStart.exec(value))) {
    let depth = 1;
    let i = m.index + m[0].length;
    for (; i < value.length && depth > 0; i++) {
      if (value[i] === '(') depth++;
      else if (value[i] === ')') depth--;
    }
    const span = value.slice(m.index, i);
    if (!span.includes('var(')) results.push({ 0: span });
  }
  return results.map((r) => r[0]);
}

function normalizeColor(value) {
  const v = value.trim();
  let m = v.match(/^#([0-9a-fA-F]{3})$/);
  if (m) {
    const [r, g, b] = m[1].toLowerCase().split('');
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  if (/^#[0-9a-fA-F]{6}$/.test(v) || /^#[0-9a-fA-F]{8}$/.test(v)) return v.toLowerCase();
  if (/^rgba?\(/i.test(v) || /^hsla?\(/i.test(v)) {
    return v.toLowerCase().replace(/\s+/g, '');
  }
  return null;
}

/** Loads raw `--token: value` pairs from every token file, keyed by token name. */
function loadRawTokens() {
  const raw = {}; // name -> { value, file, layer }
  for (const dir of TOKEN_DIRS) {
    const layer = dir.endsWith('/core') ? 'core' : 'semantic';
    for (const file of listCssFiles(dir)) {
      const css = fs.readFileSync(file, 'utf8');
      const root = postcss.parse(css, { from: file });
      root.walkRules(':root', (rule) => {
        rule.walkDecls((decl) => {
          if (decl.prop.startsWith('--')) {
            raw[decl.prop] = {
              value: decl.value.trim(),
              file: path.relative(ROOT, file),
              layer,
            };
          }
        });
      });
    }
  }
  return raw;
}

/** Resolves a value that is a single `var(--x)` reference, chaining through raw tokens. */
function resolveValue(value, raw, depth = 0) {
  const v = value.trim();
  if (depth > 6) return v;
  const m = v.match(/^var\(\s*(--[\w-]+)\s*(?:,.*)?\)$/);
  if (m && raw[m[1]]) return resolveValue(raw[m[1]].value, raw, depth + 1);
  return v;
}

function isUnresolved(value) {
  return value.includes('var(') || value.includes('color-mix(') || value.includes('calc(');
}

/**
 * Builds the full token map: resolved tokens (for docs) plus reverse lookup
 * maps (for the audit script to find a matching token for a raw value).
 */
function buildTokenMap() {
  const raw = loadRawTokens();
  const resolved = {}; // name -> { value, resolved, file, layer, category }
  for (const [name, info] of Object.entries(raw)) {
    const resolvedValue = resolveValue(info.value, raw);
    resolved[name] = { ...info, resolved: resolvedValue };
  }

  const length = new Map(); // px -> [{name, file, layer}]
  const zindex = new Map(); // number -> [...]
  const color = new Map(); // normalized color -> [...]
  const duration = new Map(); // ms -> [...]
  const fontSize = new Map(); // px -> [...]
  const fontWeight = new Map(); // number -> [...]

  const push = (map, key, entry) => {
    if (key === null || key === undefined) return;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(entry);
  };

  for (const [name, info] of Object.entries(resolved)) {
    if (isUnresolved(info.resolved)) continue;
    const entry = { name, file: info.file, layer: info.layer };

    if (/^--(space|size|radius)-/.test(name)) {
      push(length, parseLength(info.resolved), entry);
    } else if (/^--z-/.test(name)) {
      push(zindex, parseNumber(info.resolved), entry);
    } else if (/^--duration-/.test(name)) {
      push(duration, parseTimeMs(info.resolved), entry);
    } else if (/^--text-/.test(name)) {
      push(fontSize, parseLength(info.resolved), entry);
    } else if (/^--font-/.test(name) && parseNumber(info.resolved) !== null) {
      push(fontWeight, parseNumber(info.resolved), entry);
    } else {
      const normalized = normalizeColor(info.resolved);
      if (normalized) push(color, normalized, entry);
    }
  }

  // Prefer semantic token names, then shorter names, when suggesting a match.
  const bySuggestionOrder = (a, b) =>
    a.layer === b.layer ? a.name.length - b.name.length : a.layer === 'semantic' ? -1 : 1;
  for (const map of [length, zindex, color, duration, fontSize, fontWeight]) {
    for (const entries of map.values()) entries.sort(bySuggestionOrder);
  }

  return { raw, resolved, length, zindex, color, duration, fontSize, fontWeight };
}

module.exports = {
  buildTokenMap,
  listCssFiles,
  parseLength,
  parseNumber,
  parseTimeMs,
  normalizeColor,
  findColors,
  ROOT,
};
