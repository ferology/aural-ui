#!/usr/bin/env node
import 'dotenv/config';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { AgentManager } from '../agents/agent-manager.js';
import { OllamaClient } from '../config/ollama-client.js';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Accessibility Audit Workflow
 * Audit existing components for WCAG compliance
 */

async function main() {
  console.log(chalk.bold.cyan('\n♿ Aural UI - Accessibility Audit Workflow\n'));
  console.log(chalk.gray('Audit components for WCAG 2.1 AA compliance...\n'));

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

  // Get list of components
  const componentsPath = path.resolve('../components');
  const componentFiles = await fs.readdir(componentsPath);
  const components = componentFiles
    .filter((file) => file.endsWith('.css'))
    .map((file) => file.replace('.css', ''));

  if (components.length === 0) {
    console.log(chalk.yellow('No components found to audit.'));
    return;
  }

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'component',
      message: 'Select component to audit:',
      choices: [...components, new inquirer.Separator(), 'Audit All Components'],
    },
  ]);

  const componentsToAudit =
    answers.component === 'Audit All Components' ? components : [answers.component];

  console.log(chalk.cyan('\n🔍 Starting Accessibility Audit\n'));

  // Initialize agent manager
  const agentManager = new AgentManager(ollamaClient);
  const auditor = agentManager.getAccessibilityAuditor();

  const results: Array<{ component: string; score: string; issues: string[] }> = [];

  for (const componentName of componentsToAudit) {
    const spinner = ora(`Auditing ${componentName}...`).start();

    try {
      // Read component code
      const cssPath = path.resolve(`../components/${componentName}.css`);
      const cssCode = await fs.readFile(cssPath, 'utf-8');

      // Try to find example HTML
      let htmlExample = '<div class="component-example">Example not available</div>';
      const docsPath = path.resolve(`../docs/showcase.html`);
      try {
        const docsContent = await fs.readFile(docsPath, 'utf-8');
        const componentSection = extractComponentExample(docsContent, componentName);
        if (componentSection) {
          htmlExample = componentSection;
        }
      } catch {
        // Docs not found, use placeholder
      }

      // Create context
      const context = agentManager.createContext({
        componentName,
        componentType: 'existing',
      });

      // Run audit
      const auditTask = await auditor.auditComponent(
        componentName,
        cssCode,
        htmlExample,
        context
      );

      if (auditTask.status === 'completed') {
        spinner.succeed(chalk.green(`✓ ${componentName}`));
        const result = parseAuditResult(String(auditTask.result));
        results.push({ component: componentName, ...result });
        console.log(chalk.gray(`  Score: ${result.score}`));
        console.log(chalk.gray(`  Issues: ${result.issues.length}\n`));
      } else {
        spinner.fail(chalk.red(`✗ ${componentName}: ${auditTask.error}`));
      }
    } catch (error) {
      spinner.fail(chalk.red(`✗ ${componentName}: ${error}`));
    }
  }

  // Summary
  console.log(chalk.bold.cyan('\n📊 Audit Summary\n'));
  console.log(chalk.white('Component'.padEnd(30) + 'Score'.padEnd(15) + 'Issues'));
  console.log(chalk.gray('─'.repeat(60)));

  results.forEach((result) => {
    const scoreColor = getScoreColor(result.score);
    console.log(
      chalk.white(result.component.padEnd(30)) +
        scoreColor(result.score.padEnd(15)) +
        chalk.yellow(result.issues.length.toString())
    );
  });

  console.log(chalk.gray('\n' + '─'.repeat(60)));
  const avgScore = calculateAverageScore(results);
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  console.log(
    chalk.white('Average'.padEnd(30)) +
      getScoreColor(avgScore)(avgScore.padEnd(15)) +
      chalk.yellow(totalIssues.toString())
  );

  // Save report
  const reportPath = path.resolve('./accessibility-report.md');
  await saveReport(results, reportPath);
  console.log(chalk.green(`\n✓ Detailed report saved: accessibility-report.md\n`));
}

/**
 * Extract component example from documentation
 */
function extractComponentExample(docsContent: string, componentName: string): string | null {
  // Try to find component section in docs
  const sectionRegex = new RegExp(
    `<!-- ${componentName} -->(.*?)<!-- /${componentName} -->`,
    'is'
  );
  const match = docsContent.match(sectionRegex);
  return match ? match[1].trim() : null;
}

/**
 * Parse audit result to extract score and issues
 */
function parseAuditResult(result: string): { score: string; issues: string[] } {
  // Try to extract score
  const scoreMatch = result.match(/(?:score|compliance)[:\s]+(\d+(?:\.\d+)?%?)/i);
  const score = scoreMatch ? scoreMatch[1] : 'N/A';

  // Try to extract issues
  const issues: string[] = [];
  const issueMatches = result.match(/(?:issue|problem|fix)[:\s]+(.*?)(?:\n|$)/gi);
  if (issueMatches) {
    issues.push(...issueMatches.map((m) => m.trim()));
  }

  return { score, issues: issues.slice(0, 10) }; // Limit to 10 issues for summary
}

/**
 * Get color function based on score
 */
function getScoreColor(score: string): (text: string) => string {
  const numScore = parseInt(score.replace('%', ''));
  if (numScore >= 90) return chalk.green;
  if (numScore >= 70) return chalk.yellow;
  return chalk.red;
}

/**
 * Calculate average score
 */
function calculateAverageScore(results: Array<{ score: string }>): string {
  const scores = results.map((r) => parseInt(r.score.replace('%', '')) || 0);
  const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
  return `${Math.round(avg)}%`;
}

/**
 * Save detailed report to file
 */
async function saveReport(
  results: Array<{ component: string; score: string; issues: string[] }>,
  filePath: string
): Promise<void> {
  let report = '# Aural UI Accessibility Audit Report\n\n';
  report += `**Date:** ${new Date().toISOString().split('T')[0]}\n\n`;
  report += '## Summary\n\n';
  report += '| Component | Score | Issues |\n';
  report += '|-----------|-------|--------|\n';

  results.forEach((result) => {
    report += `| ${result.component} | ${result.score} | ${result.issues.length} |\n`;
  });

  report += '\n## Detailed Results\n\n';

  results.forEach((result) => {
    report += `### ${result.component}\n\n`;
    report += `**Accessibility Score:** ${result.score}\n\n`;
    if (result.issues.length > 0) {
      report += '**Issues Found:**\n\n';
      result.issues.forEach((issue, idx) => {
        report += `${idx + 1}. ${issue}\n`;
      });
      report += '\n';
    } else {
      report += '✅ No issues found\n\n';
    }
  });

  await fs.writeFile(filePath, report, 'utf-8');
}

// Run the workflow
main().catch((error) => {
  console.error(chalk.red('\n❌ Audit failed:'), error);
  process.exit(1);
});
