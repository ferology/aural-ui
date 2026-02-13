import { OrchestratorAgent } from './orchestrator-agent.js';
import { ComponentBuilderAgent } from './component-builder-agent.js';
import { AccessibilityAuditorAgent } from './accessibility-auditor-agent.js';
import { OllamaClient } from '../config/ollama-client.js';
import type { Agent, WorkflowContext } from '../types/agent.js';

/**
 * Agent Manager
 * Central manager for all agents in the system
 */
export class AgentManager {
  private ollamaClient: OllamaClient;
  private agents: Map<string, Agent>;

  constructor(ollamaClient: OllamaClient) {
    this.ollamaClient = ollamaClient;
    this.agents = new Map();

    // Initialize all agents
    this.initializeAgents();
  }

  /**
   * Initialize all specialized agents
   */
  private initializeAgents(): void {
    this.agents.set('orchestrator', new OrchestratorAgent(this.ollamaClient));
    this.agents.set('componentBuilder', new ComponentBuilderAgent(this.ollamaClient));
    this.agents.set('accessibilityAuditor', new AccessibilityAuditorAgent(this.ollamaClient));

    // TODO: Add other agents as they are implemented
    // this.agents.set('designArchitect', new DesignArchitectAgent(this.ollamaClient));
    // this.agents.set('docsWriter', new DocsWriterAgent(this.ollamaClient));
    // this.agents.set('testingEngineer', new TestingEngineerAgent(this.ollamaClient));
    // this.agents.set('qaAgent', new QAAgent(this.ollamaClient));
  }

  /**
   * Get a specific agent by name
   */
  getAgent(agentName: string): Agent | undefined {
    return this.agents.get(agentName);
  }

  /**
   * Get the orchestrator agent
   */
  getOrchestrator(): OrchestratorAgent {
    return this.agents.get('orchestrator') as OrchestratorAgent;
  }

  /**
   * Get the component builder agent
   */
  getComponentBuilder(): ComponentBuilderAgent {
    return this.agents.get('componentBuilder') as ComponentBuilderAgent;
  }

  /**
   * Get the accessibility auditor agent
   */
  getAccessibilityAuditor(): AccessibilityAuditorAgent {
    return this.agents.get('accessibilityAuditor') as AccessibilityAuditorAgent;
  }

  /**
   * List all available agents
   */
  listAgents(): string[] {
    return Array.from(this.agents.keys());
  }

  /**
   * Create default workflow context
   */
  createContext(overrides: Partial<WorkflowContext> = {}): WorkflowContext {
    return {
      projectRoot: process.cwd(),
      designSystemPath: '../',
      tasks: [],
      ...overrides,
    };
  }
}

export default AgentManager;
