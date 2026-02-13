import type Anthropic from '@anthropic-ai/sdk';

export interface AgentConfig {
  name: string;
  role: string;
  model: string;
  systemPrompt: string;
  temperature?: number;
  maxTokens?: number;
  tools?: AgentTool[];
}

export interface AgentTool {
  name: string;
  description: string;
  input_schema: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
  execute: (input: Record<string, unknown>) => Promise<unknown>;
}

export interface AgentMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AgentTask {
  id: string;
  agentName: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  result?: unknown;
  error?: string;
}

export interface WorkflowContext {
  projectRoot: string;
  designSystemPath: string;
  componentName?: string;
  componentType?: string;
  requirements?: string;
  existingFiles?: string[];
  tasks: AgentTask[];
}

export interface Agent {
  config: AgentConfig;
  execute: (task: string, context: WorkflowContext) => Promise<AgentTask>;
}
