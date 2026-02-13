import { BaseAgent } from './base-agent.js';
import { AGENT_CONFIGS } from '../config/agent-config.js';
import { OllamaClient } from '../config/ollama-client.js';
import type { WorkflowContext, AgentTask } from '../types/agent.js';

/**
 * Orchestrator Agent
 * Coordinates workflow between specialized agents
 */
export class OrchestratorAgent extends BaseAgent {
  constructor(ollamaClient: OllamaClient) {
    super(AGENT_CONFIGS.orchestrator, ollamaClient);
  }

  /**
   * Plan a workflow for a user request
   */
  async planWorkflow(
    userRequest: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Analyze this user request and create a workflow plan:

**User Request:**
${userRequest}

**Current Context:**
- Project Root: ${context.projectRoot}
- Design System Path: ${context.designSystemPath}

Please provide a detailed workflow plan that includes:
1. List of agents needed and their tasks
2. Task dependencies and execution order
3. Expected outputs from each agent
4. Quality gates and checkpoints
5. Estimated complexity (Low/Medium/High)

Format the response as a structured JSON plan that can be executed programmatically.

**Available Agents:**
- Design Architect: Design system validation and token guidance
- Component Builder: CSS and JavaScript code generation
- Documentation Writer: Documentation and examples
- Testing Engineer: Test generation and validation
- Accessibility Auditor: WCAG compliance and a11y validation
- QA Agent: Final quality review and standards enforcement

Example JSON structure:
{
  "workflow_name": "Create New Component",
  "complexity": "medium",
  "steps": [
    {
      "step": 1,
      "agent": "Design Architect",
      "task": "Validate requirements and recommend token usage",
      "dependencies": [],
      "outputs": ["token recommendations", "design validation"]
    },
    ...
  ],
  "quality_gates": ["code review", "accessibility check", "documentation complete"]
}`;

    return await this.execute(taskDescription, context);
  }

  /**
   * Coordinate agent execution
   */
  async coordinateAgents(
    workflowPlan: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Coordinate the execution of this workflow plan:

${workflowPlan}

Monitor progress and ensure:
1. Agents execute in the correct order
2. Dependencies are met before proceeding
3. All quality gates pass
4. Results are properly handed off between agents

Provide status updates and handle any issues that arise during execution.`;

    return await this.execute(taskDescription, context);
  }

  /**
   * Validate workflow completion
   */
  async validateWorkflow(
    workflowResults: AgentTask[],
    context: WorkflowContext
  ): Promise<AgentTask> {
    const resultsStr = workflowResults
      .map(
        (task) =>
          `${task.agentName}: ${task.status} - ${String(task.result || task.error).substring(0, 200)}`
      )
      .join('\n\n');

    const taskDescription = `Validate that this workflow completed successfully:

**Workflow Results:**
${resultsStr}

Check:
1. All agents completed their tasks
2. No critical errors occurred
3. Outputs meet quality standards
4. All requirements were addressed
5. Next steps or recommendations

Provide a final validation report and approval decision.`;

    return await this.execute(taskDescription, context);
  }
}

export default OrchestratorAgent;
