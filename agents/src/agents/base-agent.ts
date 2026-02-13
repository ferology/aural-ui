import { OllamaClient, OllamaMessage } from '../config/ollama-client.js';
import type {
  Agent,
  AgentConfig,
  AgentTask,
  WorkflowContext,
} from '../types/agent.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Base Agent Class
 * All specialized agents extend this base class
 */
export class BaseAgent implements Agent {
  public config: AgentConfig;
  protected client: OllamaClient;
  protected conversationHistory: OllamaMessage[] = [];

  constructor(config: AgentConfig, ollamaClient: OllamaClient) {
    this.config = config;
    this.client = ollamaClient;
  }

  /**
   * Execute a task with this agent
   */
  async execute(taskDescription: string, context: WorkflowContext): Promise<AgentTask> {
    const task: AgentTask = {
      id: uuidv4(),
      agentName: this.config.name,
      description: taskDescription,
      status: 'in_progress',
    };

    try {
      console.log(`\n🤖 ${this.config.name} starting task: ${taskDescription}`);

      // Prepare the message with context
      const userMessage = this.formatTaskMessage(taskDescription, context);

      // Add to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage,
      });

      // Prepare messages with system prompt
      const messages: OllamaMessage[] = [
        {
          role: 'system',
          content: this.config.systemPrompt,
        },
        ...this.conversationHistory,
      ];

      // Call Ollama API
      const response = await this.client.createCompletion({
        model: this.config.model,
        messages,
        temperature: this.config.temperature || 0.5,
        maxTokens: this.config.maxTokens || 4096,
      });

      // Extract response content
      const responseText = response.message.content;

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: responseText,
      });

      // Mark task as completed
      task.status = 'completed';
      task.result = responseText;

      console.log(`✅ ${this.config.name} completed task`);

      return task;
    } catch (error) {
      console.error(`❌ ${this.config.name} failed:`, error);
      task.status = 'failed';
      task.error = error instanceof Error ? error.message : 'Unknown error';
      return task;
    }
  }

  /**
   * Format task message with context
   */
  protected formatTaskMessage(taskDescription: string, context: WorkflowContext): string {
    let message = `Task: ${taskDescription}\n\n`;

    // Add relevant context
    message += `**Context:**\n`;
    message += `- Project Root: ${context.projectRoot}\n`;
    message += `- Design System Path: ${context.designSystemPath}\n`;

    if (context.componentName) {
      message += `- Component Name: ${context.componentName}\n`;
    }

    if (context.componentType) {
      message += `- Component Type: ${context.componentType}\n`;
    }

    if (context.requirements) {
      message += `\n**Requirements:**\n${context.requirements}\n`;
    }

    if (context.existingFiles && context.existingFiles.length > 0) {
      message += `\n**Existing Files:**\n`;
      context.existingFiles.forEach((file) => {
        message += `- ${file}\n`;
      });
    }

    // Add previous task results if any
    if (context.tasks && context.tasks.length > 0) {
      message += `\n**Previous Agent Results:**\n`;
      context.tasks.forEach((task) => {
        if (task.status === 'completed' && task.result) {
          message += `\n**${task.agentName}:**\n${String(task.result).substring(0, 500)}...\n`;
        }
      });
    }

    return message;
  }

  /**
   * Reset conversation history
   */
  public resetHistory(): void {
    this.conversationHistory = [];
  }

  /**
   * Get current conversation history
   */
  public getHistory(): OllamaMessage[] {
    return this.conversationHistory;
  }
}

export default BaseAgent;
