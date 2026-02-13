import { BaseAgent } from './base-agent.js';
import { AGENT_CONFIGS } from '../config/agent-config.js';
import { OllamaClient } from '../config/ollama-client.js';
import type { WorkflowContext, AgentTask } from '../types/agent.js';

/**
 * Accessibility Auditor Agent
 * Specializes in WCAG compliance and accessibility validation
 */
export class AccessibilityAuditorAgent extends BaseAgent {
  constructor(ollamaClient: OllamaClient) {
    super(AGENT_CONFIGS.accessibilityAuditor, ollamaClient);
  }

  /**
   * Audit a component for accessibility issues
   */
  async auditComponent(
    componentName: string,
    componentCode: string,
    htmlExample: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Perform a comprehensive WCAG 2.1 AA accessibility audit on the "${componentName}" component.

**Component CSS:**
\`\`\`css
${componentCode}
\`\`\`

**HTML Structure:**
\`\`\`html
${htmlExample}
\`\`\`

Please provide:
1. Accessibility compliance score (0-100%)
2. List of issues found with severity (Critical, High, Medium, Low)
3. Specific fixes with code examples
4. Keyboard navigation requirements
5. ARIA attributes needed
6. Screen reader testing notes

Check for:
- Keyboard accessibility
- Touch target sizes
- Color contrast ratios
- Focus indicators
- ARIA attributes
- Semantic HTML
- prefers-reduced-motion support`;

    return await this.execute(taskDescription, context);
  }

  /**
   * Validate keyboard navigation
   */
  async validateKeyboardNavigation(
    componentName: string,
    componentType: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Validate keyboard navigation for the "${componentName}" ${componentType} component.

Provide:
1. Expected keyboard shortcuts (Tab, Enter, Escape, Arrow keys, etc.)
2. Focus flow diagram
3. Focus trap requirements (if applicable)
4. JavaScript implementation guidance
5. Testing checklist

Ensure compliance with WCAG 2.1 AA keyboard operability standards.`;

    return await this.execute(taskDescription, context);
  }

  /**
   * Check color contrast
   */
  async checkColorContrast(
    componentName: string,
    colors: Record<string, string>,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const colorsStr = JSON.stringify(colors, null, 2);

    const taskDescription = `Validate color contrast ratios for the "${componentName}" component.

**Colors Used:**
\`\`\`json
${colorsStr}
\`\`\`

Please:
1. Calculate contrast ratios for all text/background combinations
2. Identify any failures (< 4.5:1 for text, < 3:1 for UI)
3. Suggest alternative colors from the design system that meet requirements
4. Check focus indicator contrast

Provide specific recommendations with token names.`;

    return await this.execute(taskDescription, context);
  }

  /**
   * Generate accessibility documentation
   */
  async generateAccessibilityDocs(
    componentName: string,
    auditResults: string,
    context: WorkflowContext
  ): Promise<AgentTask> {
    const taskDescription = `Generate accessibility documentation for the "${componentName}" component based on the audit results.

**Audit Results:**
${auditResults}

Create documentation that includes:
1. Accessibility features summary
2. Keyboard shortcuts table
3. ARIA attributes reference
4. Screen reader behavior
5. Best practices and gotchas
6. Testing recommendations

Format as Markdown for inclusion in component documentation.`;

    return await this.execute(taskDescription, context);
  }
}

export default AccessibilityAuditorAgent;
