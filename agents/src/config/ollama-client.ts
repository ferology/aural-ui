/**
 * Ollama Client
 * Simple wrapper for Ollama API to replace Anthropic SDK
 */

export interface OllamaMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OllamaResponse {
  model: string;
  created_at: string;
  message: {
    role: string;
    content: string;
  };
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  eval_count?: number;
  eval_duration?: number;
}

export interface OllamaClientConfig {
  baseUrl: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
}

export class OllamaClient {
  private baseUrl: string;
  private defaultModel: string;
  private defaultTemperature: number;
  private defaultMaxTokens: number;

  constructor(config: OllamaClientConfig) {
    this.baseUrl = config.baseUrl;
    this.defaultModel = config.model;
    this.defaultTemperature = config.temperature || 0.5;
    this.defaultMaxTokens = config.maxTokens || 4096;
  }

  /**
   * Create a chat completion using Ollama
   */
  async createCompletion(params: {
    model?: string;
    messages: OllamaMessage[];
    temperature?: number;
    maxTokens?: number;
    stream?: boolean;
  }): Promise<OllamaResponse> {
    const model = params.model || this.defaultModel;
    const temperature = params.temperature ?? this.defaultTemperature;
    const maxTokens = params.maxTokens || this.defaultMaxTokens;

    // Convert messages to Ollama format
    // Ollama expects a single system message and alternating user/assistant messages
    const systemMessage = params.messages.find((m) => m.role === 'system');
    const conversationMessages = params.messages.filter((m) => m.role !== 'system');

    // Build the prompt for Ollama
    let prompt = '';
    if (systemMessage) {
      prompt += `System: ${systemMessage.content}\n\n`;
    }

    // Add conversation history
    conversationMessages.forEach((msg) => {
      const role = msg.role === 'user' ? 'User' : 'Assistant';
      prompt += `${role}: ${msg.content}\n\n`;
    });

    // Make request to Ollama API
    const response = await fetch(`${this.baseUrl}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        prompt,
        stream: false,
        options: {
          temperature,
          num_predict: maxTokens,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Ollama API error: ${response.status} - ${error}`);
    }

    const data = await response.json();

    // Transform Ollama response to match expected format
    return {
      model: data.model,
      created_at: data.created_at,
      message: {
        role: 'assistant',
        content: data.response,
      },
      done: data.done,
      total_duration: data.total_duration,
      load_duration: data.load_duration,
      prompt_eval_count: data.prompt_eval_count,
      eval_count: data.eval_count,
      eval_duration: data.eval_duration,
    };
  }

  /**
   * List available models
   */
  async listModels(): Promise<string[]> {
    const response = await fetch(`${this.baseUrl}/api/tags`);

    if (!response.ok) {
      throw new Error(`Failed to fetch Ollama models: ${response.status}`);
    }

    const data = await response.json();
    return data.models?.map((m: any) => m.name) || [];
  }

  /**
   * Check if Ollama is running and accessible
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/tags`);
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * Pull a model from Ollama library
   */
  async pullModel(modelName: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/api/pull`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: modelName,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to pull model ${modelName}: ${response.status}`);
    }
  }
}

export default OllamaClient;
