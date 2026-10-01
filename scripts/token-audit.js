#!/usr/bin/env node

/**
 * AURAL UI - Token Audit
 *
 * Scans components/*.css for hardcoded visual values that should go
 * through a design token instead. See CLAUDE.md and specs/tokens/ for
 * the rules this enforces.
 *
 * Usage:
 *   node scripts/token-audit.js              # scan every component
 *   node scripts/token-audit.js components/card.css components/tabs.css
 *
 * Exit code is 1 if any error-tier violation is found (CI-ready).
 */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const {
  buildTokenMap,
  parseLength,
  parseNumber,
  parseTimeMs,
  normalizeColor,
  findColors,
  ROOT,
} = require('./lib/token-map');

const COMPONENTS_DIR = path.join(ROOT, 'components');
const ALLOWED_BREAKPOINTS = [640, 768, 1024, 1280];
const LOCAL_ZINDEX_LIMIT = 20; // intra-component stacking, not a global layer
const FOCUS_RING_RE = /^0\s+0\s+0\s+[\d.]+px\b/;
const KEYWORD_VALUES = new Set([
  'auto',
  'inherit',
  'initial',
  'unset',
  'none',
  'normal',
  'fit-content',
  'min-content',
  'max-content',
  '100%',
  '50%',
  '0%',
]);

function splitTopLevel(value, separator) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (const ch of value) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === separator && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  parts.push(current);
  return parts.map((p) => p.trim()).filter(Boolean);
}

function categoryForProp(prop) {
  if (
    [
      'color',
      'background-color',
      'border-color',
      'border-top-color',
      'border-bottom-color',
      'border-left-color',
      'border-right-color',
      'outline-color',
      'fill',
      'stroke',
      'text-decoration-color',
      'caret-color',
    ].includes(prop)
  ) {
    return 'color-only';
  }
  if (prop === 'background' || prop === 'background-image') return 'color-extract';
  if (prop === 'border' || prop === 'outline') return 'color-extract';
  if (prop === 'box-shadow') return 'shadow';
  if (
    [
      'padding',
      'margin',
      'gap',
      'row-gap',
      'column-gap',
      'inset',
      'top',
      'right',
      'bottom',
      'left',
    ].some((p) => prop === p || prop.startsWith(`${p}-`))
  ) {
    return 'spacing';
  }
  if (['width', 'height', 'min-width', 'max-width', 'min-height', 'max-height'].includes(prop))
    return 'size';
  if (prop === 'border-radius' || (prop.startsWith('border-') && prop.endsWith('-radius')))
    return 'radius';
  if (prop === 'z-index') return 'zindex';
  if (prop === 'font-size') return 'fontsize';
  if (prop === 'font-weight') return 'fontweight';
  if (
    prop === 'transition' ||
    prop === 'transition-duration' ||
    prop === 'animation' ||
    prop === 'animation-duration'
  ) {
    return 'duration';
  }
  if (prop === 'transform' || prop.startsWith('translate')) return 'skip';
  return null;
}

function suggestion(entries) {
  if (!entries || entries.length === 0) return null;
  return entries
    .slice(0, 2)
    .map((e) => `var(${e.name})`)
    .join(' or ');
}

function auditFile(filePath, tokenMap) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const root = postcss.parse(content, { from: filePath });
  const findings = []; // { line, severity, message }

  // For multi-line declarations (e.g. a gradient spanning several lines),
  // an `/* aural-ignore */` comment may sit on an inner line rather than
  // the line the audit reports — track the enclosing decl's full span so
  // the ignore check covers it, not just the reported line ± 1.
  let currentDeclSpan = null;

  const ignoredAt = (line) => {
    const check = (l) => l >= 1 && l <= lines.length && lines[l - 1].includes('aural-ignore');
    const [start, end] = currentDeclSpan || [line, line];
    for (let l = Math.min(start, line) - 1; l <= Math.max(end, line); l++) {
      if (check(l)) return true;
    }
    return false;
  };

  const report = (line, severity, message) => {
    if (ignoredAt(line)) return;
    findings.push({ line, severity, message });
  };

  const checkLength = (value, line, maps) => {
    for (const token of splitTopLevel(value, ' ').flatMap((v) => v.split(/\s+/))) {
      const t = token.trim();
      if (!t || KEYWORD_VALUES.has(t) || t.startsWith('var(') || t.startsWith('calc(') || t === '0')
        continue;
      const px = parseLength(t);
      if (px === null) continue; // not a length we track (e.g. 1em, %, auto)
      let entries = [];
      for (const map of maps) {
        if (map.has(px)) entries = entries.concat(map.get(px));
      }
      if (entries.length > 0) {
        report(line, 'error', `Hardcoded value ${t}, use ${suggestion(entries)}`);
      } else {
        report(
          line,
          'warning',
          `Raw value ${t} has no matching token — add one or mark \`/* aural-ignore: reason */\``
        );
      }
    }
  };

  const checkColorsIn = (value, line) => {
    const matches = findColors(value);
    if (!matches.length) return;
    for (const raw of matches) {
      const normalized = normalizeColor(raw);
      if (!normalized) continue;
      const entries = tokenMap.color.get(normalized);
      if (entries && entries.length > 0) {
        report(line, 'error', `Hardcoded color ${raw}, use ${suggestion(entries)}`);
      } else {
        report(
          line,
          'warning',
          `Hardcoded color ${raw} has no matching token — add one or mark \`/* aural-ignore: reason */\``
        );
      }
    }
  };

  root.walkDecls((decl) => {
    if (!decl.source || !decl.source.start) return;
    const line = decl.source.start.line;
    currentDeclSpan = [line, decl.source.end ? decl.source.end.line : line];
    const prop = decl.prop.toLowerCase();
    const value = decl.value.trim();
    const category = categoryForProp(prop);
    if (!category || category === 'skip') return;

    switch (category) {
      case 'color-only': {
        if (value.startsWith('var(') || !/^#|^rgba?\(|^hsla?\(/i.test(value)) return;
        checkColorsIn(value, line);
        break;
      }
      case 'color-extract': {
        checkColorsIn(value, line);
        break;
      }
      case 'shadow': {
        for (const shadow of splitTopLevel(value, ',')) {
          if (FOCUS_RING_RE.test(shadow)) continue; // recognized focus-ring idiom
          checkColorsIn(shadow, line);
        }
        break;
      }
      case 'spacing': {
        checkLength(value, line, [tokenMap.length]);
        break;
      }
      case 'size': {
        checkLength(value, line, [tokenMap.length]);
        break;
      }
      case 'radius': {
        checkLength(value, line, [tokenMap.length]);
        break;
      }
      case 'zindex': {
        if (value.startsWith('var(')) break;
        const z = parseNumber(value);
        if (z === null || Math.abs(z) <= LOCAL_ZINDEX_LIMIT) break;
        const entries = tokenMap.zindex.get(z);
        if (entries && entries.length > 0) {
          report(line, 'error', `Hardcoded z-index ${z}, use ${suggestion(entries)}`);
        } else {
          report(
            line,
            'warning',
            `Non-standard global z-index ${z} — align to an existing layer or add one`
          );
        }
        break;
      }
      case 'fontsize': {
        if (value.startsWith('var(')) break;
        const px = parseLength(value);
        if (px === null) break;
        const entries = tokenMap.fontSize.get(px);
        if (entries && entries.length > 0) {
          report(line, 'error', `Hardcoded font-size ${value}, use ${suggestion(entries)}`);
        } else {
          report(line, 'warning', `Raw font-size ${value} has no matching token`);
        }
        break;
      }
      case 'fontweight': {
        const w = parseNumber(value);
        if (w === null) break; // keyword like `bold`/`normal` — not flagged in v1
        const entries = tokenMap.fontWeight.get(w);
        if (entries && entries.length > 0) {
          report(line, 'error', `Hardcoded font-weight ${w}, use ${suggestion(entries)}`);
        } else {
          report(line, 'warning', `Raw font-weight ${w} has no matching token`);
        }
        break;
      }
      case 'duration': {
        const re = /(-?[\d.]+)(ms|s)\b/g;
        let m;
        while ((m = re.exec(value))) {
          const ms = parseTimeMs(`${m[1]}${m[2]}`);
          const entries = tokenMap.duration.get(ms);
          report(
            line,
            'warning',
            entries && entries.length > 0
              ? `Raw duration ${m[0]}, consider using ${suggestion(entries)}`
              : `Raw duration ${m[0]}, consider defining/using a duration token`
          );
        }
        break;
      }
      default:
        break;
    }
  });

  root.walkAtRules('media', (atRule) => {
    if (!atRule.source || !atRule.source.start) return;
    const line = atRule.source.start.line;
    currentDeclSpan = [line, line];
    const re = /(min-width|max-width)\s*:\s*(\d+)px/g;
    let m;
    while ((m = re.exec(atRule.params))) {
      const px = parseInt(m[2], 10);
      if (!ALLOWED_BREAKPOINTS.includes(px)) {
        report(
          line,
          'warning',
          `Non-standard breakpoint ${px}px — expected one of ${ALLOWED_BREAKPOINTS.join('/')}`
        );
      }
    }
  });

  return findings.sort((a, b) => a.line - b.line);
}

function main() {
  const args = process.argv.slice(2);
  const files = (
    args.length > 0
      ? args
      : fs
          .readdirSync(COMPONENTS_DIR)
          .filter((f) => f.endsWith('.css'))
          .map((f) => path.join(COMPONENTS_DIR, f))
  )
    .map((f) => path.resolve(ROOT, f))
    .filter((f) => fs.existsSync(f));

  console.log('Running AURAL UI token audit...\n');
  const tokenMap = buildTokenMap();

  let filesWithIssues = 0;
  let errors = 0;
  let warnings = 0;

  for (const file of files) {
    const findings = auditFile(file, tokenMap);
    if (findings.length === 0) continue;
    filesWithIssues++;
    console.log(path.relative(ROOT, file));
    for (const f of findings) {
      const marker = f.severity === 'error' ? 'x' : '!';
      console.log(`  ${marker} L${f.line}: ${f.message}`);
      if (f.severity === 'error') errors++;
      else warnings++;
    }
    console.log('');
  }

  console.log(`Files scanned:      ${files.length}`);
  console.log(`Files with issues:  ${filesWithIssues}`);
  console.log(`Errors:             ${errors}`);
  console.log(`Warnings:           ${warnings}`);

  if (errors > 0) {
    console.log('\n✗ Audit failed — fix hardcoded values above or add a token, then re-run.');
    process.exit(1);
  }
  console.log(warnings > 0 ? '\n✓ Audit passed with warnings.' : '\n✓ No violations found.');
}

main();
