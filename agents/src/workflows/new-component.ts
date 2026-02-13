#!/usr/bin/env node
import 'dotenv/config';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { AgentManager } from '../agents/agent-manager.js';
import { OllamaClient } from '../config/ollama-client.js';
import type { WorkflowContext, AgentTask } from '../types/agent.js';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * New Component Workflow
 * Interactive workflow to create a new component with AI agent assistance
 */

interface ComponentInput {
  name: string;
  type: string;
  description: string;
  variants: string;
  interactive: boolean;
}

async function main() {
  console.log(chalk.bold.cyan('\n🎨 Aural UI - New Component Workflow\n'));
  console.log(chalk.gray('Let AI agents help you create a new component...\n'));

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

  // Gather component requirements from user
  const answers = await inquirer.prompt<ComponentInput>([
    {
      type: 'input',
      name: 'name',
      message: 'Component name (e.g., drawer, data-table):',
      validate: (input) => {
        if (!input.trim()) return 'Component name is required';
        if (!/^[a-z-]+$/.test(input)) return 'Use lowercase letters and hyphens only';
        return true;
      },
    },
    {
      type: 'list',
      name: 'type',
      message: 'Component category:',
      choices: [
        { name: 'Form Control', value: 'form-control' },
        { name: 'Navigation', value: 'navigation' },
        { name: 'Data Display', value: 'data-display' },
        { name: 'Interactive', value: 'interactive' },
        { name: 'Feedback', value: 'feedback' },
        { name: 'Layout', value: 'layout' },
      ],
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the component (purpose, features, behavior):',
      validate: (input) => (input.trim() ? true : 'Description is required'),
    },
    {
      type: 'input',
      name: 'variants',
      message: 'List variants (comma-separated, e.g., primary, secondary, large, small):',
      default: 'default',
    },
    {
      type: 'confirm',
      name: 'interactive',
      message: 'Does this component need JavaScript interactivity?',
      default: false,
    },
  ]);

  console.log(chalk.cyan('\n📋 Component Specification:\n'));
  console.log(chalk.white(`Name: ${answers.name}`));
  console.log(chalk.white(`Type: ${answers.type}`));
  console.log(chalk.white(`Description: ${answers.description}`));
  console.log(chalk.white(`Variants: ${answers.variants}`));
  console.log(chalk.white(`Interactive: ${answers.interactive ? 'Yes' : 'No'}\n'));

  const proceed = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'continue',
      message: 'Proceed with component generation?',
      default: true,
    },
  ]);

  if (!proceed.continue) {
    console.log(chalk.yellow('Cancelled.'));
    return;
  }

  // Initialize agent manager
  const agentManager = new AgentManager(ollamaClient);

  // Create workflow context
  const context: WorkflowContext = agentManager.createContext({
    componentName: answers.name,
    componentType: answers.type,
    requirements: formatRequirements(answers),
    designSystemPath: path.resolve('../'),
  });

  console.log(chalk.cyan('\n🚀 Starting AI Agent Workflow\n'));

  // Step 1: Orchestrator creates workflow plan
  const planSpinner = ora('Orchestrator: Planning workflow...').start();
  try {
    const orchestrator = agentManager.getOrchestrator();
    const planTask = await orchestrator.planWorkflow(
      `Create a new ${answers.type} component called "${answers.name}"`,
      context
    );
    context.tasks.push(planTask);
    planSpinner.succeed(chalk.green('Orchestrator: Workflow planned'));
    console.log(chalk.gray(String(planTask.result).substring(0, 300) + '...\n'));
  } catch (error) {
    planSpinner.fail(chalk.red('Orchestrator: Planning failed'));
    console.error(error);
    return;
  }

  // Step 2: Component Builder generates code
  const buildSpinner = ora('Component Builder: Generating component code...').start();
  try {
    const builder = agentManager.getComponentBuilder();
    const buildTask = await builder.generateComponent(
      answers.name,
      answers.type,
      formatRequirements(answers),
      context
    );
    context.tasks.push(buildTask);
    buildSpinner.succeed(chalk.green('Component Builder: Code generated'));
    console.log(chalk.gray(String(buildTask.result).substring(0, 300) + '...\n'));

    // Save generated code
    await saveComponentCode(answers.name, String(buildTask.result));
  } catch (error) {
    buildSpinner.fail(chalk.red('Component Builder: Generation failed'));
    console.error(error);
    return;
  }

  // Step 3: Accessibility Auditor validates
  const auditSpinner = ora('Accessibility Auditor: Checking WCAG compliance...').start();
  try {
    const auditor = agentManager.getAccessibilityAuditor();
    const componentCode = context.tasks[context.tasks.length - 1].result as string;
    const auditTask = await auditor.auditComponent(
      answers.name,
      extractCSS(componentCode),
      extractHTML(componentCode),
      context
    );
    context.tasks.push(auditTask);
    auditSpinner.succeed(chalk.green('Accessibility Auditor: Audit complete'));
    console.log(chalk.gray(String(auditTask.result).substring(0, 300) + '...\n'));
  } catch (error) {
    auditSpinner.fail(chalk.red('Accessibility Auditor: Audit failed'));
    console.error(error);
  }

  // Step 4: Final validation
  const validateSpinner = ora('Orchestrator: Validating workflow...').start();
  try {
    const orchestrator = agentManager.getOrchestrator();
    const validationTask = await orchestrator.validateWorkflow(context.tasks, context);
    validateSpinner.succeed(chalk.green('Orchestrator: Workflow validated'));
    console.log(chalk.gray(String(validationTask.result).substring(0, 300) + '...\n'));
  } catch (error) {
    validateSpinner.fail(chalk.red('Orchestrator: Validation failed'));
    console.error(error);
  }

  // Summary
  console.log(chalk.bold.green('\n✅ Component generation complete!\n'));
  console.log(chalk.white('Generated files:'));
  console.log(chalk.gray(`  - components/${answers.name}.css`));
  if (answers.interactive) {
    console.log(chalk.gray(`  - javascript/${answers.name}.js`));
  }
  console.log(chalk.white('\nNext steps:'));
  console.log(chalk.gray('  1. Review the generated code'));
  console.log(chalk.gray('  2. Test the component in your browser'));
  console.log(chalk.gray('  3. Add documentation with examples'));
  console.log(chalk.gray('  4. Run accessibility tests\n'));
}

/**
 * Format requirements for agent consumption
 */
function formatRequirements(answers: ComponentInput): string {
  return `
**Component Name:** ${answers.name}
**Category:** ${answers.type}
**Description:** ${answers.description}
**Variants:** ${answers.variants}
**Interactive:** ${answers.interactive}

**Requirements:**
- Follow Aural UI design system token architecture
- Use semantic tokens exclusively (--color-*, --space-*, --text-*, etc.)
- Include all specified variants as modifier classes
- Implement all interactive states (hover, focus, active, disabled)
- Ensure WCAG 2.1 AA accessibility compliance
- Support keyboard navigation
- Include proper ARIA attributes
- Respect prefers-reduced-motion
${answers.interactive ? '- Provide vanilla JavaScript with proper event handling' : ''}
- Mobile-first responsive design
  `.trim();
}

/**
 * Save generated component code to file
 */
async function saveComponentCode(componentName: string, generatedCode: string): Promise<void> {
  const componentPath = path.resolve(`../components/${componentName}.css`);

  try {
    // Extract CSS from generated code
    const css = extractCSS(generatedCode);
    await fs.writeFile(componentPath, css, 'utf-8');
    console.log(chalk.green(`✓ Saved: components/${componentName}.css`));

    // If there's JavaScript, save that too
    const js = extractJS(generatedCode);
    if (js) {
      const jsPath = path.resolve(`../javascript/${componentName}.js`);
      await fs.writeFile(jsPath, js, 'utf-8');
      console.log(chalk.green(`✓ Saved: javascript/${componentName}.js`));
    }
  } catch (error) {
    console.error(chalk.red('Error saving component code:'), error);
  }
}

/**
 * Extract CSS code from generated content
 */
function extractCSS(content: string): string {
  const cssMatch = content.match(/```css\n([\s\S]*?)```/);
  return cssMatch ? cssMatch[1].trim() : content;
}

/**
 * Extract HTML code from generated content
 */
function extractHTML(content: string): string {
  const htmlMatch = content.match(/```html\n([\s\S]*?)```/);
  return htmlMatch ? htmlMatch[1].trim() : '';
}

/**
 * Extract JavaScript code from generated content
 */
function extractJS(content: string): string | null {
  const jsMatch = content.match(/```(?:javascript|js)\n([\s\S]*?)```/);
  return jsMatch ? jsMatch[1].trim() : null;
}

// Run the workflow
main().catch((error) => {
  console.error(chalk.red('\n❌ Workflow failed:'), error);
  process.exit(1);
});
