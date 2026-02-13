#!/usr/bin/env node
import 'dotenv/config';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { OllamaClient } from './config/ollama-client.js';

/**
 * Aural UI Agent CLI
 * Main entry point for agent workflows
 */

interface WorkflowChoice {
  name: string;
  value: string;
  description: string;
}

const WORKFLOWS: WorkflowChoice[] = [
  {
    name: '🔍 Review Design System',
    value: 'review-system',
    description: 'Comprehensive review of components and demo pages',
  },
  {
    name: '✨ Create New Component',
    value: 'new-component',
    description: 'Generate a new component with AI assistance',
  },
  {
    name: '♿ Audit Accessibility',
    value: 'audit-accessibility',
    description: 'Check WCAG 2.1 AA compliance for components',
  },
  {
    name: '📚 Generate Documentation',
    value: 'generate-docs',
    description: 'Auto-generate component documentation',
  },
  {
    name: '🔧 Update Component',
    value: 'update-component',
    description: 'Modify an existing component',
  },
  {
    name: '🧪 Generate Tests',
    value: 'generate-tests',
    description: 'Create test cases for components',
  },
];

async function main() {
  console.clear();
  console.log(chalk.bold.cyan('\n╔═══════════════════════════════════════╗'));
  console.log(chalk.bold.cyan('║   Aural UI - Enterprise Agent Team   ║'));
  console.log(chalk.bold.cyan('╚═══════════════════════════════════════╝\n'));

  // Check Ollama configuration
  const ollamaUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
  const ollamaModel = process.env.OLLAMA_MODEL || 'llama3.2';

  console.log(chalk.gray(`Connecting to Ollama at ${ollamaUrl}...\n`));

  // Initialize Ollama client
  const ollamaClient = new OllamaClient({
    baseUrl: ollamaUrl,
    model: ollamaModel,
    temperature: parseFloat(process.env.DEFAULT_TEMPERATURE || '0.5'),
    maxTokens: parseInt(process.env.DEFAULT_MAX_TOKENS || '4096', 10),
  });

  // Check Ollama health
  const isHealthy = await ollamaClient.healthCheck();
  if (!isHealthy) {
    console.log(chalk.red('❌ Error: Cannot connect to Ollama\n'));
    console.log(chalk.yellow('Setup instructions:'));
    console.log(chalk.white('1. Install Ollama from https://ollama.ai'));
    console.log(chalk.white('2. Start Ollama: ollama serve'));
    console.log(chalk.white(`3. Pull a model: ollama pull ${ollamaModel}`));
    console.log(chalk.white('4. Run this command again\n'));
    console.log(chalk.gray(`Alternatively, update OLLAMA_BASE_URL in .env if using a remote instance.\n`));
    process.exit(1);
  }

  console.log(chalk.green(`✅ Connected to Ollama (model: ${ollamaModel})\n`));

  console.log(chalk.gray('AI-powered design system workflows\n'));

  const { workflow } = await inquirer.prompt([
    {
      type: 'list',
      name: 'workflow',
      message: 'Select a workflow:',
      choices: WORKFLOWS.map((w) => ({
        name: `${w.name}\n  ${chalk.gray(w.description)}`,
        value: w.value,
        short: w.name,
      })),
      pageSize: 10,
    },
  ]);

  console.log('\n');

  // Execute selected workflow
  switch (workflow) {
    case 'review-system':
      await import('./workflows/review-design-system.js');
      break;

    case 'new-component':
      await import('./workflows/new-component.js');
      break;

    case 'audit-accessibility':
      await import('./workflows/audit-accessibility.js');
      break;

    case 'generate-docs':
      console.log(chalk.yellow('Coming soon: Documentation generation workflow'));
      break;

    case 'update-component':
      console.log(chalk.yellow('Coming soon: Component update workflow'));
      break;

    case 'generate-tests':
      console.log(chalk.yellow('Coming soon: Test generation workflow'));
      break;

    default:
      console.log(chalk.red('Invalid workflow selected'));
  }
}

// Run the CLI
main().catch((error) => {
  console.error(chalk.red('\n❌ Error:'), error.message);
  process.exit(1);
});
