import { BaseAgent } from './base-agent.js';
import { AGENT_CONFIGS } from '../config/agent-config.js';
import { OllamaClient } from '../config/ollama-client.js';
import type { WorkflowContext, AgentTask } from '../types/agent.js';

/**
 * Component Builder Agent
 * Specializes in generating component CSS and JavaScript code
 */
export class ComponentBuilderAgent extends BaseAgent {
  constructor(ollamaClient: OllamaClient) {
    super(AGENT_CONFIGS.componentBuilder, ollamaClient);
  }

  /**
   * Generate a new component
   */
  async generateComponent(
    componentName: string,
    componentType: string,
    requirements: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Generate a new ${componentType} component called "${componentName}" with the following requirements:

${requirements}

Please provide:
1. Complete CSS code for the component
2. JavaScript code if the component requires interactivity
3. HTML structure example
4. All variants and states

Ensure the code follows all design system rules and uses semantic tokens.`;

    return await this.execute(taskDescription, context);
  }

  /**
   * Update an existing component
   */
  async updateComponent(
    componentName: string,
    currentCode: string,
    changes: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Update the "${componentName}" component with the following changes:

${changes}

**Current Code:**
\`\`\`css
${currentCode}
\`\`\`

Please provide the updated code maintaining all existing functionality while incorporating the requested changes.`;

    return await this.execute(taskDescription, context);
  }

  /**
   * Generate component variants
   */
  async generateVariants(
    componentName: string,
    baseCode: string,
    variantRequirements: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Generate variants for the "${componentName}" component:

${variantRequirements}

**Base Component Code:**
\`\`\`css
${baseCode}
\`\`\`

Please provide CSS code for all requested variants following the design system's modifier class pattern.`;

    return await this.execute(taskDescription, context);
  }
}

export default ComponentBuilderAgent;
