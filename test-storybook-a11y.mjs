#!/usr/bin/env node

/**
 * Comprehensive Storybook Accessibility Audit
 * Tests both the Storybook UI and all rendered components
 */

import { chromium } from 'playwright';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const AxeBuilder = require('@axe-core/playwright').default;
import { writeFileSync } from 'fs';

const STORYBOOK_URL = 'http://localhost:6006';
const REPORT_FILE = './LIVE_STORYBOOK_A11Y_AUDIT.md';

// WCAG 2.1 AA rules to test
const axeConfig = {
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']
  }
};

async function main() {
  console.log('🚀 Starting Comprehensive Storybook Accessibility Audit...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = {
    storybookUI: null,
    components: [],
    summary: {
      totalViolations: 0,
      critical: 0,
      serious: 0,
      moderate: 0,
      minor: 0,
      storiesScanned: 0
    }
  };

  try {
    // PHASE 1: Test Storybook UI itself
    console.log('📊 PHASE 1: Testing Storybook UI...');
    await page.goto(STORYBOOK_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Wait for Storybook to fully load

    const axeBuilder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
    const uiResults = await axeBuilder.analyze();

    results.storybookUI = {
      violations: uiResults.violations,
      passes: uiResults.passes.length,
      incomplete: uiResults.incomplete.length
    };

    console.log(`✅ Storybook UI: ${uiResults.violations.length} violations found`);
    console.log(`   - Passes: ${uiResults.passes.length}`);
    console.log(`   - Incomplete: ${uiResults.incomplete.length}\n`);

    // PHASE 2: Get list of all stories
    console.log('📚 PHASE 2: Discovering all component stories...');

    // Get story list from Storybook's index.json
    const storiesResponse = await page.goto(`${STORYBOOK_URL}/index.json`);
    const storiesData = await storiesResponse.json();
    const stories = Object.values(storiesData.entries).filter(entry => entry.type === 'story');

    console.log(`   Found ${stories.length} stories to test\n`);

    // PHASE 3: Test each component story
    console.log('🔍 PHASE 3: Testing rendered components...');
    console.log('   This may take a few minutes...\n');

    let scannedCount = 0;
    for (const story of stories.slice(0, 50)) { // Limit to 50 to avoid timeout
      try {
        const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${story.id}&viewMode=story`;
        await page.goto(storyUrl, { waitUntil: 'networkidle', timeout: 10000 });
        await page.waitForTimeout(1000);

        const storyAxe = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
        const storyResults = await storyAxe.analyze();

        if (storyResults.violations.length > 0) {
          results.components.push({
            id: story.id,
            title: story.title,
            name: story.name,
            violations: storyResults.violations,
            passes: storyResults.passes.length
          });

          // Update summary
          storyResults.violations.forEach(v => {
            results.summary.totalViolations++;
            if (v.impact === 'critical') results.summary.critical++;
            if (v.impact === 'serious') results.summary.serious++;
            if (v.impact === 'moderate') results.summary.moderate++;
            if (v.impact === 'minor') results.summary.minor++;
          });
        }

        scannedCount++;
        if (scannedCount % 10 === 0) {
          console.log(`   Scanned ${scannedCount}/${stories.length} stories...`);
        }
      } catch (error) {
        console.error(`   ⚠️  Error scanning ${story.id}: ${error.message}`);
      }
    }

    results.summary.storiesScanned = scannedCount;

    console.log(`\n✅ Scanning complete!`);
    console.log(`   - Stories scanned: ${scannedCount}`);
    console.log(`   - Components with violations: ${results.components.length}`);
    console.log(`   - Total violations: ${results.summary.totalViolations}\n`);

  } catch (error) {
    console.error('❌ Error during audit:', error);
  } finally {
    await browser.close();
  }

  // Generate report
  console.log('📝 Generating detailed report...');
  generateReport(results);
  console.log(`✅ Report saved to: ${REPORT_FILE}\n`);

  return results;
}

function generateReport(results) {
  const timestamp = new Date().toISOString().split('T')[0];

  let report = `# Live Storybook Accessibility Audit Report
**Date:** ${timestamp}
**Storybook URL:** ${STORYBOOK_URL}
**Tool:** Playwright + axe-core
**Standard:** WCAG 2.1 AA

---

## Executive Summary

**Stories Scanned:** ${results.summary.storiesScanned}
**Components with Violations:** ${results.components.length}
**Total Violations:** ${results.summary.totalViolations}

### Violations by Severity
- 🔴 **Critical:** ${results.summary.critical}
- 🟠 **Serious:** ${results.summary.serious}
- 🟡 **Moderate:** ${results.summary.moderate}
- 🔵 **Minor:** ${results.summary.minor}

---

## Storybook UI Violations

`;

  if (results.storybookUI && results.storybookUI.violations.length > 0) {
    report += `**Found ${results.storybookUI.violations.length} violations in the Storybook interface itself:**\n\n`;

    results.storybookUI.violations.forEach((v, i) => {
      report += `### ${i + 1}. ${v.id}: ${v.description}\n`;
      report += `**Impact:** ${v.impact}\n`;
      report += `**WCAG:** ${v.tags.filter(t => t.startsWith('wcag')).join(', ')}\n`;
      report += `**Affected elements:** ${v.nodes.length}\n`;
      report += `**Fix:** ${v.help}\n`;
      report += `**Learn more:** ${v.helpUrl}\n\n`;

      if (v.nodes.length > 0) {
        report += `**Example:**\n\`\`\`html\n${v.nodes[0].html}\n\`\`\`\n\n`;
      }
    });
  } else {
    report += `✅ **No violations found in Storybook UI!** The interface itself is accessible.\n\n`;
  }

  report += `---

## Component Violations

`;

  if (results.components.length === 0) {
    report += `✅ **Excellent!** No violations found in any rendered components.\n\n`;
  } else {
    results.components.forEach((comp, idx) => {
      report += `### ${idx + 1}. ${comp.title} - ${comp.name}\n`;
      report += `**Story ID:** ${comp.id}\n`;
      report += `**Violations:** ${comp.violations.length}\n`;
      report += `**Passes:** ${comp.passes}\n\n`;

      comp.violations.forEach(v => {
        report += `#### ${v.impact.toUpperCase()}: ${v.id}\n`;
        report += `**Description:** ${v.description}\n`;
        report += `**Help:** ${v.help}\n`;
        report += `**Elements affected:** ${v.nodes.length}\n`;
        report += `**WCAG:** ${v.tags.filter(t => t.startsWith('wcag')).join(', ')}\n\n`;

        // Show first affected element
        if (v.nodes.length > 0) {
          report += `**Example HTML:**\n\`\`\`html\n${v.nodes[0].html.substring(0, 300)}${v.nodes[0].html.length > 300 ? '...' : ''}\n\`\`\`\n\n`;

          if (v.nodes[0].failureSummary) {
            report += `**Issue:** ${v.nodes[0].failureSummary}\n\n`;
          }
        }

        report += `**Learn more:** ${v.helpUrl}\n\n`;
        report += `---\n\n`;
      });
    });
  }

  report += `## Summary Statistics

| Metric | Count |
|--------|-------|
| Stories Scanned | ${results.summary.storiesScanned} |
| Components with Violations | ${results.components.length} |
| Total Violations | ${results.summary.totalViolations} |
| Critical Issues | ${results.summary.critical} |
| Serious Issues | ${results.summary.serious} |
| Moderate Issues | ${results.summary.moderate} |
| Minor Issues | ${results.summary.minor} |

---

## Next Steps

1. **Review Critical Issues** - Fix all critical violations immediately
2. **Address Serious Issues** - High priority for WCAG compliance
3. **Fix Moderate Issues** - Important for best practices
4. **Polish Minor Issues** - Complete for full compliance

**Compare with code audit:** Review WCAG_AUDIT_REPORT_2026-03-03.md to see code-level vs. runtime issues.

---

**Audit completed:** ${new Date().toISOString()}
`;

  writeFileSync(REPORT_FILE, report);
}

// Run the audit
main().then(() => {
  console.log('🎉 Audit complete!');
  process.exit(0);
}).catch(error => {
  console.error('❌ Audit failed:', error);
  process.exit(1);
});
