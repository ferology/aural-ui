# Aural UI - Enterprise Agent Team

AI-powered agent system for building and maintaining the Aural UI design system at enterprise scale.

## 🤖 What is This?

This is a multi-agent AI system built with the **Claude Agent SDK** that helps you:

- **Generate Components** - Create new components with proper structure, tokens, and accessibility
- **Audit Accessibility** - Automatically check WCAG 2.1 AA compliance
- **Generate Documentation** - Auto-create comprehensive component docs
- **Run Quality Checks** - Validate design system consistency
- **Coordinate Workflows** - Orchestrate complex multi-step tasks

## 🏗️ Agent Architecture

```
┌─────────────────────────────────────────┐
│    ORCHESTRATOR (Workflow Coordinator)   │
└─────────────────────────────────────────┘
                  ↓
    ┌─────────────┼─────────────┐
    ↓             ↓              ↓
┌─────────┐  ┌─────────┐  ┌─────────────┐
│ Design  │  │Component│  │  Quality    │
│Architect│  │ Builder │  │  Assurance  │
└─────────┘  └─────────┘  └─────────────┘
    ↓             ↓              ↓
┌─────────┐  ┌─────────┐  ┌─────────────┐
│  Docs   │  │ Testing │  │Accessibility│
│ Writer  │  │Engineer │  │  Auditor    │
└─────────┘  └─────────┘  └─────────────┘
```

### Agent Roles

- **Orchestrator** - Coordinates workflow between agents
- **Design Architect** - Validates design tokens and system consistency
- **Component Builder** - Generates component CSS and JavaScript
- **Documentation Writer** - Creates documentation and examples
- **Testing Engineer** - Generates tests and validation
- **Accessibility Auditor** - Ensures WCAG AA compliance
- **QA Agent** - Final quality review and standards enforcement

## 🚀 Quick Start

### 1. Installation

```bash
cd agents
npm install
```

### 2. Configuration

Create a `.env` file:

```bash
cp .env.example .env
```

Add your Anthropic API key to `.env`:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

Get your API key from: https://console.anthropic.com/

### 3. Run Workflows

**Interactive CLI:**

```bash
npm run dev
```

**Specific Workflows:**

```bash
# Create a new component
npm run new-component

# Audit accessibility
npm run audit-accessibility

# Generate documentation
npm run generate-docs
```

## 📚 Available Workflows

### 1. Create New Component

Interactive workflow to generate a new component:

```bash
npm run new-component
```

**What it does:**
1. Asks for component details (name, type, variants, etc.)
2. Orchestrator plans the workflow
3. Component Builder generates CSS/JS code
4. Accessibility Auditor checks WCAG compliance
5. Saves files to `components/` and `javascript/`

**Example:**

```
? Component name: drawer
? Component category: Interactive
? Describe the component: A sliding panel that appears from the edge of the screen
? List variants: left, right, top, bottom
? Does this component need JavaScript? Yes
```

### 2. Audit Accessibility

Check WCAG 2.1 AA compliance for components:

```bash
npm run audit-accessibility
```

**What it does:**
1. Lists all components
2. Audits selected component(s) for accessibility
3. Generates detailed report with:
   - Accessibility score (0-100%)
   - List of issues with severity
   - Specific fixes with code examples
   - Keyboard navigation requirements
   - ARIA attributes needed

**Output:** `accessibility-report.md`

### 3. Generate Documentation (Coming Soon)

Auto-generate component documentation:

```bash
npm run generate-docs
```

## 🎯 Use Cases

### Create a Complex Component

```bash
npm run new-component
```

The agents will:
- Validate design token usage
- Generate responsive CSS with all variants
- Add JavaScript for interactivity
- Ensure keyboard navigation
- Include proper ARIA attributes
- Check color contrast
- Validate against design system rules

### Audit All Components

```bash
npm run audit-accessibility
```

Get a comprehensive accessibility report for your entire design system.

### Maintain Consistency

Agents ensure all components follow:
- Token architecture (semantic tokens only)
- BEM-inspired naming conventions
- Accessibility standards (WCAG AA)
- Responsive design patterns
- Performance budgets

## 🔧 Configuration

### Design System Rules

Agents follow rules defined in `src/config/design-system-rules.ts`:

- Token architecture
- Component structure
- Accessibility requirements
- CSS best practices
- JavaScript patterns
- Documentation standards
- Testing requirements

### Agent Configurations

Each agent has specific settings in `src/config/agent-config.ts`:

- System prompts
- Model selection
- Temperature
- Max tokens
- Tools and capabilities

## 🏗️ Project Structure

```
agents/
├── src/
│   ├── agents/              # Agent implementations
│   │   ├── base-agent.ts
│   │   ├── orchestrator-agent.ts
│   │   ├── component-builder-agent.ts
│   │   ├── accessibility-auditor-agent.ts
│   │   └── agent-manager.ts
│   ├── workflows/           # Pre-built workflows
│   │   ├── new-component.ts
│   │   ├── audit-accessibility.ts
│   │   └── generate-docs.ts
│   ├── config/              # Configuration files
│   │   ├── agent-config.ts
│   │   └── design-system-rules.ts
│   ├── types/               # TypeScript types
│   │   └── agent.ts
│   └── index.ts             # Main CLI entry
├── package.json
├── tsconfig.json
└── .env                     # API key (not in git)
```

## 🧪 Development

**Watch mode (auto-reload):**

```bash
npm run dev
```

**Build TypeScript:**

```bash
npm run build
```

**Run compiled code:**

```bash
npm start
```

## 📖 How It Works

### Workflow Example: New Component

1. **User Input**
   - Component name, type, requirements
   - Variants and interactivity needs

2. **Orchestrator Planning**
   - Analyzes requirements
   - Creates task breakdown
   - Determines agent dependencies

3. **Agent Execution**
   - Design Architect validates token usage
   - Component Builder generates code
   - Accessibility Auditor checks compliance
   - QA Agent reviews everything

4. **Output**
   - Generated component files
   - Accessibility audit report
   - Next steps and recommendations

### Agent Communication

Agents communicate through a shared **WorkflowContext**:

```typescript
interface WorkflowContext {
  projectRoot: string;
  designSystemPath: string;
  componentName?: string;
  componentType?: string;
  requirements?: string;
  tasks: AgentTask[];  // Results from previous agents
}
```

Each agent:
1. Receives context with previous agent results
2. Executes its specialized task
3. Adds result to context
4. Passes to next agent

## 🎓 Design System Integration

Agents are trained on your design system rules:

- **Tokens:** Use semantic tokens only (--color-*, --space-*, etc.)
- **Structure:** BEM-inspired class naming
- **Accessibility:** WCAG 2.1 AA compliance
- **Responsive:** Mobile-first approach
- **Performance:** Bundle size budgets
- **Testing:** Visual regression and keyboard navigation

## 🚧 Roadmap

- [x] Orchestrator agent
- [x] Component Builder agent
- [x] Accessibility Auditor agent
- [x] New Component workflow
- [x] Accessibility Audit workflow
- [ ] Design Architect agent
- [ ] Documentation Writer agent
- [ ] Testing Engineer agent
- [ ] QA Agent
- [ ] Generate Documentation workflow
- [ ] Update Component workflow
- [ ] Generate Tests workflow
- [ ] Visual Regression Testing
- [ ] Performance Monitoring
- [ ] Automated PR Reviews

## 🔐 Security

- API keys stored in `.env` (not committed)
- All agent communication logged
- No code execution without review
- Sandboxed file operations

## 💡 Tips

1. **Be specific in requirements** - The more detail, the better the output
2. **Review generated code** - Agents are assistants, not replacements
3. **Iterate with agents** - Use conversation history for refinements
4. **Validate accessibility** - Always run manual tests too
5. **Customize rules** - Edit `design-system-rules.ts` for your needs

## 🤝 Contributing

Want to add a new agent or workflow?

1. Create agent class extending `BaseAgent`
2. Add configuration to `agent-config.ts`
3. Create workflow in `workflows/`
4. Update `agent-manager.ts`
5. Test thoroughly

## 📄 License

MIT - Same as Aural UI design system

## 🙏 Credits

Built with:
- **Claude 4.5 Sonnet** (Anthropic)
- **Anthropic SDK** (@anthropic-ai/sdk)
- **TypeScript**
- **Inquirer** (CLI prompts)
- **Chalk** (Terminal styling)
- **Ora** (Loading spinners)

---

**Ready to build enterprise-grade components with AI?**

```bash
npm run dev
```
