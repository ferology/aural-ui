#!/usr/bin/env node
import 'dotenv/config';
import chalk from 'chalk';
import ora from 'ora';
import { AgentManager } from '../agents/agent-manager.js';
import { OllamaClient } from '../config/ollama-client.js';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Design System Review Workflow
 * Comprehensive review of components and demo pages
 */

interface ReviewResult {
  component: string;
  score: number;
  issues: Array<{
    severity: 'critical' | 'high' | 'medium' | 'low';
    category: string;
    description: string;
    fix?: string;
  }>;
  recommendations: string[];
}

async function main() {
  console.log(chalk.bold.cyan('\n🔍 Aural UI - Design System Review\n'));
  console.log(chalk.gray('Comprehensive quality and accessibility review...\n'));

  // Initialize Ollama client
  const ollamaUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
  const ollamaModel = process.env.OLLAMA_MODEL || 'llama3.2';

  const ollamaClient = new OllamaClient({
    baseUrl: ollamaUrl,
    model: ollamaModel,
    temperature: parseFloat(process.env.DEFAULT_TEMPERATURE || '0.5'),
    maxTokens: parseInt(process.env.DEFAULT_MAX_TOKENS || '4096', 10),
  });

  // Check Ollama health
  const isHealthy = await ollamaClient.healthCheck();
  if (!isHealthy) {
    console.error(chalk.red('❌ Error: Cannot connect to Ollama'));
    console.log(chalk.yellow('\nPlease ensure Ollama is running: ollama serve\n'));
    process.exit(1);
  }

  const agentManager = new AgentManager(ollamaClient);
  const results: ReviewResult[] = [];

  // Phase 1: Review key components
  console.log(chalk.bold.cyan('📦 Phase 1: Component Review\n'));

  const priorityComponents = [
    'button',
    'input',
    'modal',
    'dropdown',
    'tabs',
    'card',
    'navigation-bar',
    'form-group'
  ];

  for (const componentName of priorityComponents) {
    const spinner = ora(`Reviewing ${componentName}...`).start();

    try {
      const cssPath = path.resolve(`../components/${componentName}.css`);

      // Check if file exists
      try {
        await fs.access(cssPath);
      } catch {
        spinner.warn(chalk.yellow(`${componentName}.css not found, skipping`));
        continue;
      }

      const cssCode = await fs.readFile(cssPath, 'utf-8');

      // Create context
      const context = agentManager.createContext({
        componentName,
        componentType: 'existing',
      });

      // Run accessibility audit
      const auditor = agentManager.getAccessibilityAuditor();
      const auditTask = await auditor.auditComponent(
        componentName,
        cssCode,
        `<div class="${componentName}">Example</div>`,
        context
      );

      if (auditTask.status === 'completed') {
        spinner.succeed(chalk.green(`✓ ${componentName}`));

        const result = parseAuditResult(componentName, String(auditTask.result));
        results.push(result);

        // Show quick summary
        const scoreColor = result.score >= 90 ? chalk.green : result.score >= 70 ? chalk.yellow : chalk.red;
        console.log(chalk.gray(`  Score: ${scoreColor(result.score + '%')} | Issues: ${result.issues.length}`));
      } else {
        spinner.fail(chalk.red(`✗ ${componentName}`));
      }
    } catch (error) {
      spinner.fail(chalk.red(`✗ ${componentName}: ${error}`));
    }
  }

  // Phase 2: Review demo page
  console.log(chalk.bold.cyan('\n📄 Phase 2: Demo Page Review\n'));

  const demoSpinner = ora('Analyzing main demo page...').start();
  try {
    const demoPath = path.resolve('../docs/index.html');
    const demoContent = await fs.readFile(demoPath, 'utf-8');

    const context = agentManager.createContext({
      componentType: 'demo-page',
    });

    const orchestrator = agentManager.getOrchestrator();
    const reviewTask = await orchestrator.execute(
      `Review this demo page for quality, accessibility, and user experience. Provide specific recommendations for improvement.

**Demo Page HTML (first 2000 chars):**
${demoContent.substring(0, 2000)}

**Focus on:**
1. Overall accessibility (WCAG AA)
2. Navigation and user experience
3. Visual hierarchy and design
4. Mobile responsiveness
5. Performance considerations
6. Documentation clarity
7. Code examples quality

Provide actionable recommendations prioritized by impact.`,
      context
    );

    if (reviewTask.status === 'completed') {
      demoSpinner.succeed(chalk.green('✓ Demo page analyzed'));
      console.log(chalk.gray('\nDemo Page Recommendations:\n'));
      console.log(chalk.white(String(reviewTask.result).substring(0, 800) + '...\n'));
    }
  } catch (error) {
    demoSpinner.fail(chalk.red('✗ Demo page review failed'));
    console.error(error);
  }

  // Phase 3: Generate improvement plan
  console.log(chalk.bold.cyan('📋 Phase 3: Improvement Plan\n'));

  const planSpinner = ora('Generating improvement plan...').start();
  try {
    const context = agentManager.createContext({});

    // Compile all results
    const allIssues = results.flatMap(r => r.issues);
    const criticalCount = allIssues.filter(i => i.severity === 'critical').length;
    const highCount = allIssues.filter(i => i.severity === 'high').length;

    const orchestrator = agentManager.getOrchestrator();
    const planTask = await orchestrator.execute(
      `Based on the component reviews, create a prioritized improvement plan:

**Summary:**
- Components reviewed: ${results.length}
- Average score: ${Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)}%
- Critical issues: ${criticalCount}
- High priority issues: ${highCount}

**Top Issues by Component:**
${results.slice(0, 5).map(r => `
${r.component}:
${r.issues.slice(0, 3).map(i => `  - [${i.severity}] ${i.description}`).join('\n')}
`).join('\n')}

Create a phased improvement plan with:
1. Quick wins (< 1 hour each)
2. High impact improvements (1-4 hours)
3. Strategic enhancements (> 4 hours)

For each phase, provide specific tasks with component names and code examples.`,
      context
    );

    if (planTask.status === 'completed') {
      planSpinner.succeed(chalk.green('✓ Improvement plan generated'));

      // Save to file
      const reportPath = path.resolve('./design-system-review.md');
      await saveDetailedReport(results, String(planTask.result), reportPath);

      console.log(chalk.green(`\n✓ Detailed report saved: ${reportPath}\n`));
    }
  } catch (error) {
    planSpinner.fail(chalk.red('✗ Plan generation failed'));
    console.error(error);
  }

  // Summary
  console.log(chalk.bold.cyan('📊 Review Summary\n'));

  const avgScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
  const allIssues = results.flatMap(r => r.issues);

  console.log(chalk.white('Overall Health Score: ') + getScoreColor(avgScore)(avgScore + '%'));
  console.log(chalk.white(`Components Reviewed: ${results.length}`));
  console.log(chalk.red(`Critical Issues: ${allIssues.filter(i => i.severity === 'critical').length}`));
  console.log(chalk.yellow(`High Priority: ${allIssues.filter(i => i.severity === 'high').length}`));
  console.log(chalk.blue(`Medium Priority: ${allIssues.filter(i => i.severity === 'medium').length}`));
  console.log(chalk.gray(`Low Priority: ${allIssues.filter(i => i.severity === 'low').length}`));

  console.log(chalk.bold.green('\n✅ Review Complete!\n'));
  console.log(chalk.white('Next steps:'));
  console.log(chalk.gray('  1. Review design-system-review.md'));
  console.log(chalk.gray('  2. Prioritize improvements based on impact'));
  console.log(chalk.gray('  3. Use agents to implement fixes'));
  console.log(chalk.gray('  4. Re-run review to track progress\n'));
}

/**
 * Parse audit result into structured format
 */
function parseAuditResult(component: string, result: string): ReviewResult {
  // Extract score
  const scoreMatch = result.match(/(?:score|compliance)[:\s]+(\d+)/i);
  const score = scoreMatch ? parseInt(scoreMatch[1]) : 50;

  // Extract issues (simplified parsing)
  const issues: ReviewResult['issues'] = [];
  const lines = result.split('\n');

  for (const line of lines) {
    if (line.match(/critical|high|medium|low/i)) {
      const severity = (line.match(/critical/i) ? 'critical' :
                       line.match(/high/i) ? 'high' :
                       line.match(/medium/i) ? 'medium' : 'low') as ReviewResult['issues'][0]['severity'];

      issues.push({
        severity,
        category: 'accessibility',
        description: line.trim().substring(0, 100),
      });
    }
  }

  // Extract recommendations
  const recommendations: string[] = [];
  const recMatch = result.match(/(?:recommend|suggest|should)[:\s]+([^\n]+)/gi);
  if (recMatch) {
    recommendations.push(...recMatch.slice(0, 5));
  }

  return {
    component,
    score,
    issues: issues.slice(0, 10),
    recommendations: recommendations.slice(0, 5),
  };
}

/**
 * Get color based on score
 */
function getScoreColor(score: number): (text: string) => string {
  if (score >= 90) return chalk.green;
  if (score >= 70) return chalk.yellow;
  return chalk.red;
}

/**
 * Save detailed report
 */
async function saveDetailedReport(
  results: ReviewResult[],
  improvementPlan: string,
  filePath: string
): Promise<void> {
  let report = '# Aural UI Design System Review Report\n\n';
  report += `**Date:** ${new Date().toISOString().split('T')[0]}\n\n`;

  // Executive Summary
  const avgScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
  const allIssues = results.flatMap(r => r.issues);

  report += '## Executive Summary\n\n';
  report += `**Overall Health Score:** ${avgScore}%\n\n`;
  report += `- Components Reviewed: ${results.length}\n`;
  report += `- Critical Issues: ${allIssues.filter(i => i.severity === 'critical').length}\n`;
  report += `- High Priority: ${allIssues.filter(i => i.severity === 'high').length}\n`;
  report += `- Medium Priority: ${allIssues.filter(i => i.severity === 'medium').length}\n`;
  report += `- Low Priority: ${allIssues.filter(i => i.severity === 'low').length}\n\n`;

  // Component Details
  report += '## Component Reviews\n\n';
  report += '| Component | Score | Critical | High | Medium | Low |\n';
  report += '|-----------|-------|----------|------|-----------|-----|\n';

  results.forEach(r => {
    const critical = r.issues.filter(i => i.severity === 'critical').length;
    const high = r.issues.filter(i => i.severity === 'high').length;
    const medium = r.issues.filter(i => i.severity === 'medium').length;
    const low = r.issues.filter(i => i.severity === 'low').length;

    report += `| ${r.component} | ${r.score}% | ${critical} | ${high} | ${medium} | ${low} |\n`;
  });

  // Detailed Issues
  report += '\n## Detailed Component Analysis\n\n';
  results.forEach(r => {
    report += `### ${r.component}\n\n`;
    report += `**Score:** ${r.score}%\n\n`;

    if (r.issues.length > 0) {
      report += '**Issues:**\n\n';
      r.issues.forEach((issue, idx) => {
        report += `${idx + 1}. **[${issue.severity.toUpperCase()}]** ${issue.description}\n`;
        if (issue.fix) {
          report += `   - Fix: ${issue.fix}\n`;
        }
      });
      report += '\n';
    }

    if (r.recommendations.length > 0) {
      report += '**Recommendations:**\n\n';
      r.recommendations.forEach((rec, idx) => {
        report += `${idx + 1}. ${rec}\n`;
      });
      report += '\n';
    }
  });

  // Improvement Plan
  report += '## Improvement Plan\n\n';
  report += improvementPlan + '\n';

  await fs.writeFile(filePath, report, 'utf-8');
}

// Run the workflow
main().catch((error) => {
  console.error(chalk.red('\n❌ Review failed:'), error);
  process.exit(1);
});
