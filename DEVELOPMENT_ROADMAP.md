# Aural UI Development Roadmap

## Current Status (End of Phase 4)

✅ **Phase 1: Foundation** - Monorepo, TypeScript, build tools (COMPLETE)
✅ **Phase 2: React Integration** - 14 components + hooks (COMPLETE)
✅ **Phase 3: Vue Integration** - 14 components + composables (COMPLETE)
✅ **Phase 4: Svelte Integration** - 14 components + stores (COMPLETE)

**Progress:** Phases 1-4 Complete (100% of framework integration)
**Components:** 14/14 priority components implemented
**Bundle Sizes:** React 12KB, Vue 6KB, Svelte 16KB (gzipped)

---

## Phase 5: Storybook Documentation (NEXT - Weeks 10-11)

### Overview
Create comprehensive interactive documentation using Storybook to showcase all components, variants, and usage examples.

### Goals
- Interactive component playground
- Live code examples
- Theme switcher (4 themes)
- Accessibility checks
- Framework-specific examples
- API documentation
- Best practices guide

### Tasks

#### 5.1 Storybook Setup (Week 10, Days 1-2)

**Install Storybook:**
```bash
cd packages/storybook
npx storybook@latest init --type react
npm install -D @storybook/addon-essentials @storybook/addon-a11y @storybook/addon-themes @storybook/addon-interactions
```

**Configure `.storybook/main.ts`:**
```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/react-vite',
  docs: { autodocs: 'tag' },
};

export default config;
```

**Configure `.storybook/preview.ts`:**
```typescript
import '@aural-ui/core/css';
import '@aural-ui/core/themes/dark.css';

export default {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'light', value: '#ffffff' }
      ]
    },
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
          { value: 'neon', title: 'Neon' },
          { value: 'kinetic', title: 'Kinetic' },
        ],
        dynamicTitle: true,
      },
    },
  },
};
```

**Files:**
- `packages/storybook/package.json`
- `packages/storybook/.storybook/main.ts`
- `packages/storybook/.storybook/preview.ts`
- `packages/storybook/tsconfig.json`

#### 5.2 Component Stories (Week 10, Days 3-7)

Create stories for all 14 components with:
- Basic example
- All variants/states
- Interactive controls (Storybook args)
- Accessibility checks
- Code examples

**Example: Modal.stories.tsx**
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, Button } from '@aural-ui/react';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accessible modal dialog with backdrop, keyboard navigation, and focus trapping.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    showCloseButton: { control: 'boolean' },
    closeOnBackdrop: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
          <p>This is a basic modal with default settings.</p>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Basic Modal',
  },
};

export const WithoutCloseButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
          <p>This modal has no close button. Press Escape or click outside.</p>
        </Modal>
      </>
    );
  },
  args: {
    title: 'No Close Button',
    showCloseButton: false,
  },
};

export const LargeContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
          <h2>Large Modal Content</h2>
          {Array(10).fill(0).map((_, i) => (
            <p key={i}>Lorem ipsum dolor sit amet...</p>
          ))}
        </Modal>
      </>
    );
  },
  args: {
    title: 'Large Content Modal',
  },
};
```

**Stories to Create:**
1. Modal.stories.tsx
2. Button.stories.tsx
3. Toast.stories.tsx
4. Dropdown.stories.tsx
5. Tabs.stories.tsx
6. Accordion.stories.tsx
7. Tooltip.stories.tsx
8. Popover.stories.tsx
9. Drawer.stories.tsx
10. Select.stories.tsx
11. Carousel.stories.tsx
12. DatePicker.stories.tsx
13. Stepper.stories.tsx
14. CommandPalette.stories.tsx

**Files:** `packages/storybook/stories/*.stories.tsx` (14 files)

#### 5.3 Documentation Pages (Week 11, Days 1-3)

Create MDX pages for:
- Introduction and getting started
- Installation guide
- Framework-specific usage
- Theming guide
- Accessibility guide
- Migration guide
- API reference

**Example: Introduction.mdx**
```mdx
import { Meta } from '@storybook/blocks';

<Meta title="Introduction" />

# Welcome to Aural UI

Aural UI is a modern, accessible design system with 14 production-ready components for React, Vue, and Svelte.

## Key Features

- ✅ **Framework Agnostic** - Vanilla JS core with React, Vue, Svelte wrappers
- ✅ **Small Bundle Sizes** - React: 12KB, Vue: 6KB, Svelte: 16KB (gzipped)
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **TypeScript** - Full type definitions
- ✅ **Themeable** - 4 built-in themes + custom theming

## Quick Start

### React
\`\`\`bash
npm install @aural-ui/react @aural-ui/core
\`\`\`

\`\`\`jsx
import { Modal, Button } from '@aural-ui/react';
import '@aural-ui/core/css';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
\`\`\`

[See all examples →](?path=/docs/getting-started--docs)
```

**MDX Files:**
- `Introduction.mdx`
- `Installation.mdx`
- `GettingStarted.mdx`
- `Theming.mdx`
- `Accessibility.mdx`
- `Migration.mdx`

**Files:** `packages/storybook/stories/*.mdx` (6 files)

#### 5.4 Theme Switcher (Week 11, Day 4)

Implement global theme switcher that:
- Changes CSS theme file dynamically
- Persists selection to localStorage
- Updates all components in real-time

**Decorator for theme switching:**
```typescript
// .storybook/preview.ts
const withThemeProvider = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    // Remove old theme
    document.querySelectorAll('[data-theme]').forEach(el => el.remove());

    // Add new theme
    if (theme && theme !== 'dark') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `@aural-ui/core/themes/${theme}.css`;
      link.dataset.theme = theme;
      document.head.appendChild(link);
    }
  }, [theme]);

  return <Story />;
};

export const decorators = [withThemeProvider];
```

**Files:** Update `packages/storybook/.storybook/preview.ts`

#### 5.5 Deploy Storybook (Week 11, Day 5)

**Build and deploy:**
```bash
npm run build-storybook
# Deploy to Vercel, Netlify, or GitHub Pages
```

**Add scripts to `package.json`:**
```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "deploy-storybook": "npm run build-storybook && vercel deploy ./storybook-static"
  }
}
```

**Files:**
- Update `packages/storybook/package.json`
- Create `vercel.json` or `.github/workflows/deploy-storybook.yml`

### Deliverables

- [ ] 14 component stories with variants
- [ ] 6 documentation MDX pages
- [ ] Theme switcher with 4 themes
- [ ] Accessibility checks (a11y addon)
- [ ] Deployed Storybook site
- [ ] Interactive playground for all components

### Success Criteria

✅ All components have stories
✅ All stories pass a11y checks
✅ Theme switcher works across all components
✅ Code examples are copy-pasteable
✅ Storybook deployed and publicly accessible
✅ Documentation pages complete

---

## Phase 6: VS Code Snippets (Week 12)

### Overview
Create VS Code extension with code snippets for rapid component scaffolding.

### Goals
- Snippets for all 14 components
- Framework-specific snippets (React, Vue, Svelte)
- Common patterns (hooks, composables, stores)
- Auto-import statements

### Tasks

#### 6.1 Extension Setup (Days 1-2)

**Create extension structure:**
```
packages/vscode-snippets/
├── package.json
├── README.md
├── CHANGELOG.md
├── icon.png
└── snippets/
    ├── aural-react.json
    ├── aural-vue.json
    └── aural-svelte.json
```

**package.json:**
```json
{
  "name": "aural-ui-snippets",
  "displayName": "Aural UI Snippets",
  "description": "Code snippets for Aural UI components (React, Vue, Svelte)",
  "version": "1.0.0",
  "publisher": "workshop-bai",
  "engines": { "vscode": "^1.74.0" },
  "categories": ["Snippets"],
  "keywords": ["aural", "ui", "react", "vue", "svelte", "snippets"],
  "contributes": {
    "snippets": [
      { "language": "javascriptreact", "path": "./snippets/aural-react.json" },
      { "language": "typescriptreact", "path": "./snippets/aural-react.json" },
      { "language": "vue", "path": "./snippets/aural-vue.json" },
      { "language": "svelte", "path": "./snippets/aural-svelte.json" }
    ]
  }
}
```

#### 6.2 Create Snippets (Days 3-5)

**React Snippets (`aural-react.json`):**
```json
{
  "Aural Modal": {
    "prefix": "aural-modal",
    "body": [
      "import { Modal, Button } from '@aural-ui/react';",
      "import { useState } from 'react';",
      "",
      "function ${1:ModalExample}() {",
      "  const [open, setOpen] = useState(false);",
      "",
      "  return (",
      "    <>",
      "      <Button onClick={() => setOpen(true)}>${2:Open Modal}</Button>",
      "      <Modal",
      "        isOpen={open}",
      "        onClose={() => setOpen(false)}",
      "        title=\"${3:Modal Title}\"",
      "      >",
      "        <p>${4:Modal content here}</p>",
      "      </Modal>",
      "    </>",
      "  );",
      "}"
    ],
    "description": "Aural UI Modal component"
  },
  "Aural Carousel": {
    "prefix": "aural-carousel",
    "body": [
      "import { Carousel } from '@aural-ui/react';",
      "import { useState } from 'react';",
      "",
      "const slides = [",
      "  { id: '1', content: <div>${1:Slide 1}</div> },",
      "  { id: '2', content: <div>${2:Slide 2}</div> },",
      "  { id: '3', content: <div>${3:Slide 3}</div> },",
      "];",
      "",
      "<Carousel",
      "  slides={slides}",
      "  autoplay={${4:true}}",
      "  autoplayDelay={${5:3000}}",
      "  loop={${6:true}}",
      "/>"
    ],
    "description": "Aural UI Carousel component"
  },
  "Use Toast Hook": {
    "prefix": "aural-use-toast",
    "body": [
      "import { useToast } from '@aural-ui/react';",
      "",
      "const { showToast } = useToast();",
      "showToast('${1:Message}', '${2|success,error,info,warning|}');"
    ],
    "description": "Aural UI useToast hook"
  }
}
```

**Snippets for all components:**
- Modal, Button, Toast
- Dropdown, Tabs, Accordion
- Tooltip, Popover, Drawer
- Select, Carousel, DatePicker
- Stepper, CommandPalette
- Hooks (useToast, useCarousel, etc.)

**Vue Snippets (`aural-vue.json`):**
```json
{
  "Aural Modal": {
    "prefix": "aural-modal",
    "body": [
      "<template>",
      "  <div>",
      "    <AuralButton @click=\"open = true\">${1:Open Modal}</AuralButton>",
      "    <AuralModal v-model=\"open\" title=\"${2:Modal Title}\">",
      "      <p>${3:Modal content here}</p>",
      "    </AuralModal>",
      "  </div>",
      "</template>",
      "",
      "<script setup>",
      "import { ref } from 'vue';",
      "const open = ref(false);",
      "</script>"
    ],
    "description": "Aural UI Modal component (Vue)"
  }
}
```

**Svelte Snippets (`aural-svelte.json`):**
```json
{
  "Aural Modal": {
    "prefix": "aural-modal",
    "body": [
      "<script>",
      "  import { Modal, Button } from '@aural-ui/svelte';",
      "  let open = false;",
      "</script>",
      "",
      "<Button on:click={() => open = true}>${1:Open Modal}</Button>",
      "<Modal bind:open title=\"${2:Modal Title}\">",
      "  <p>${3:Modal content here}</p>",
      "</Modal>"
    ],
    "description": "Aural UI Modal component (Svelte)"
  }
}
```

#### 6.3 Test and Publish (Day 6)

**Test locally:**
```bash
cd packages/vscode-snippets
code --install-extension .
# Open VS Code, test snippets
```

**Publish to VS Code Marketplace:**
```bash
npm install -g @vscode/vsce
vsce package
vsce publish
```

### Deliverables

- [ ] VS Code extension with 40+ snippets
- [ ] React snippets (14 components + 8 hooks)
- [ ] Vue snippets (14 components + composables)
- [ ] Svelte snippets (14 components + actions)
- [ ] Published to VS Code Marketplace
- [ ] README with usage examples

### Success Criteria

✅ All components have snippets
✅ Snippets work in JSX, Vue, Svelte files
✅ Tab stops work correctly
✅ Extension published and installable
✅ Documentation complete

---

## Phase 7: CLI Tool (Weeks 13-14)

### Overview
Create command-line tool for project initialization, component generation, and theme customization.

### Goals
- `aural init` - Initialize project
- `aural generate` - Generate components
- `aural theme` - Create custom themes
- `aural migrate` - Migration helper

### Tasks

#### 7.1 CLI Setup (Week 13, Days 1-2)

**Create CLI package:**
```
packages/cli/
├── package.json
├── bin/
│   └── aural.js
├── src/
│   ├── commands/
│   │   ├── init.ts
│   │   ├── generate.ts
│   │   ├── theme.ts
│   │   └── migrate.ts
│   ├── templates/
│   │   ├── react/
│   │   ├── vue/
│   │   └── svelte/
│   └── utils/
│       ├── colors.ts
│       ├── files.ts
│       └── prompts.ts
└── README.md
```

**package.json:**
```json
{
  "name": "@aural-ui/cli",
  "version": "1.0.0",
  "bin": {
    "aural": "./bin/aural.js"
  },
  "dependencies": {
    "commander": "^11.0.0",
    "prompts": "^2.4.2",
    "execa": "^8.0.1",
    "fs-extra": "^11.1.1",
    "chalk": "^5.3.0",
    "ora": "^7.0.1"
  }
}
```

#### 7.2 Init Command (Week 13, Days 3-5)

**`aural init` - Interactive project setup:**

```typescript
// src/commands/init.ts
export async function init() {
  const answers = await prompts([
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework?',
      choices: [
        { title: 'React', value: 'react' },
        { title: 'Vue', value: 'vue' },
        { title: 'Svelte', value: 'svelte' },
      ],
    },
    {
      type: 'select',
      name: 'theme',
      message: 'Choose a theme:',
      choices: [
        { title: 'Dark', value: 'dark' },
        { title: 'Light', value: 'light' },
        { title: 'Neon', value: 'neon' },
        { title: 'Kinetic', value: 'kinetic' },
      ],
    },
    {
      type: 'confirm',
      name: 'typescript',
      message: 'Use TypeScript?',
      initial: true,
    },
    {
      type: 'select',
      name: 'packageManager',
      message: 'Package manager:',
      choices: [
        { title: 'npm', value: 'npm' },
        { title: 'yarn', value: 'yarn' },
        { title: 'pnpm', value: 'pnpm' },
      ],
    },
  ]);

  const spinner = ora('Installing Aural UI...').start();

  // Install packages
  const packages = [
    '@aural-ui/core',
    `@aural-ui/${answers.framework}`,
  ];

  await execa(answers.packageManager, ['install', ...packages]);

  // Create config file
  await fs.writeJSON('aural.config.json', {
    framework: answers.framework,
    theme: answers.theme,
    typescript: answers.typescript,
  });

  // Create setup files based on framework
  await createSetupFiles(answers);

  spinner.succeed('Aural UI installed successfully!');
  console.log(chalk.green('\\n✓ Setup complete!'));
  console.log('\\nNext steps:');
  console.log('  1. Import CSS: import \'@aural-ui/core/css\'');
  console.log('  2. Use components: import { Modal } from \'@aural-ui/react\'');
}
```

#### 7.3 Generate Command (Week 13, Day 6-7)

**`aural generate` - Component scaffolding:**

```typescript
// src/commands/generate.ts
export async function generate() {
  const config = await loadConfig();

  const answers = await prompts([
    {
      type: 'select',
      name: 'component',
      message: 'Which component?',
      choices: [
        { title: 'Modal', value: 'modal' },
        { title: 'Carousel', value: 'carousel' },
        // ... all 14 components
      ],
    },
    {
      type: 'text',
      name: 'name',
      message: 'Component name:',
      initial: 'MyModal',
    },
    {
      type: 'confirm',
      name: 'withStyles',
      message: 'Include custom styles?',
      initial: false,
    },
  ]);

  const template = getTemplate(config.framework, answers.component);
  const componentCode = template.replace(/\${NAME}/g, answers.name);

  const filename = config.typescript
    ? `${answers.name}.tsx`
    : `${answers.name}.jsx`;

  await fs.writeFile(filename, componentCode);

  console.log(chalk.green(`✓ Created ${filename}`));
}
```

#### 7.4 Theme Command (Week 14, Days 1-3)

**`aural theme` - Custom theme generator:**

```typescript
// src/commands/theme.ts
export async function theme() {
  const answers = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'Theme name:',
      initial: 'my-theme',
    },
    {
      type: 'text',
      name: 'primary',
      message: 'Primary color (hex):',
      initial: '#667eea',
      validate: (value) => /^#[0-9A-F]{6}$/i.test(value),
    },
    {
      type: 'text',
      name: 'secondary',
      message: 'Secondary color (hex):',
      initial: '#764ba2',
    },
    {
      type: 'text',
      name: 'accent',
      message: 'Accent color (hex):',
      initial: '#f093fb',
    },
    {
      type: 'text',
      name: 'background',
      message: 'Background color (hex):',
      initial: '#1a1a2e',
    },
  ]);

  // Generate color scales
  const colorScale = generateColorScale(answers.primary);

  // Check WCAG contrast
  const contrastCheck = checkContrast(answers.primary, answers.background);

  if (contrastCheck.ratio < 4.5) {
    console.log(chalk.yellow('⚠ Warning: Low contrast ratio'));
    console.log(`  Current: ${contrastCheck.ratio.toFixed(2)}:1`);
    console.log('  Required: 4.5:1 for WCAG AA');
  }

  // Generate theme CSS
  const themeCss = generateThemeCSS(answers);

  await fs.writeFile(`${answers.name}.css`, themeCss);

  console.log(chalk.green(`✓ Theme created: ${answers.name}.css`));
}
```

#### 7.5 Migrate Command (Week 14, Days 4-5)

**`aural migrate` - Migration helper:**

```typescript
// src/commands/migrate.ts
export async function migrate() {
  const files = await findFiles('**/*.{js,jsx,ts,tsx}');

  const answers = await prompts([
    {
      type: 'select',
      name: 'from',
      message: 'Migrate from:',
      choices: [
        { title: 'Vanilla JS', value: 'vanilla' },
        { title: 'Material UI', value: 'mui' },
        { title: 'Chakra UI', value: 'chakra' },
      ],
    },
    {
      type: 'select',
      name: 'to',
      message: 'Migrate to:',
      choices: [
        { title: 'React', value: 'react' },
        { title: 'Vue', value: 'vue' },
        { title: 'Svelte', value: 'svelte' },
      ],
    },
  ]);

  // Analyze files and suggest migrations
  const migrations = await analyzeMigrations(files, answers);

  // Show migration plan
  console.log('\\nMigration Plan:');
  migrations.forEach((m, i) => {
    console.log(`  ${i + 1}. ${m.file}`);
    console.log(`     ${m.from} → ${m.to}`);
  });

  const { confirm } = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: 'Proceed with migration?',
  });

  if (confirm) {
    await applyMigrations(migrations);
    console.log(chalk.green('\\n✓ Migration complete!'));
  }
}
```

### Deliverables

- [ ] CLI tool with 4 commands
- [ ] Interactive prompts for all commands
- [ ] Templates for React, Vue, Svelte
- [ ] Color scale generation
- [ ] WCAG contrast checking
- [ ] Migration analyzer
- [ ] Published to npm

### Success Criteria

✅ All commands work correctly
✅ Templates generate valid code
✅ Theme generator checks contrast
✅ Migration tool identifies patterns
✅ CLI published to npm
✅ Documentation complete

---

## Phase 8: Testing & Quality (Weeks 15-16)

### Overview
Comprehensive testing suite to ensure 80%+ code coverage and zero critical accessibility violations.

### Goals
- Unit tests for all components
- Integration tests
- Accessibility tests (jest-axe)
- Visual regression tests
- E2E tests for key flows
- Performance benchmarks

### Tasks

#### 8.1 Test Infrastructure (Week 15, Days 1-2)

**Install dependencies:**
```bash
npm install -D vitest @testing-library/react @testing-library/vue @testing-library/svelte
npm install -D @testing-library/user-event @testing-library/jest-dom
npm install -D jest-axe jsdom happy-dom
```

**Configure Vitest:**
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
    },
  },
});
```

#### 8.2 Unit Tests (Week 15, Days 3-7)

**Example: Modal.test.tsx**
```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../Modal';

describe('Modal', () => {
  it('renders when open', () => {
    render(<Modal isOpen title="Test">Content</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<Modal isOpen={false} title="Test">Content</Modal>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const onClose = vi.fn();
    render(<Modal isOpen onClose={onClose} title="Test">Content</Modal>);

    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes on Escape key', async () => {
    const onClose = vi.fn();
    render(<Modal isOpen onClose={onClose} title="Test">Content</Modal>);

    await userEvent.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalled();
  });

  it('closes on backdrop click', async () => {
    const onClose = vi.fn();
    render(<Modal isOpen onClose={onClose} title="Test">Content</Modal>);

    const backdrop = screen.getByTestId('modal-backdrop');
    await userEvent.click(backdrop);

    expect(onClose).toHaveBeenCalled();
  });

  it('traps focus within modal', async () => {
    render(
      <Modal isOpen title="Test">
        <button>First</button>
        <button>Second</button>
      </Modal>
    );

    const first = screen.getByRole('button', { name: 'First' });
    const second = screen.getByRole('button', { name: 'Second' });

    first.focus();
    expect(first).toHaveFocus();

    await userEvent.tab();
    expect(second).toHaveFocus();

    await userEvent.tab();
    // Should loop back to first
    expect(first).toHaveFocus();
  });
});
```

**Tests for all components:**
- Modal, Button, Toast
- Dropdown, Tabs, Accordion
- Tooltip, Popover, Drawer
- Select, Carousel, DatePicker
- Stepper, CommandPalette

#### 8.3 Accessibility Tests (Week 16, Days 1-2)

**Example: Modal.a11y.test.tsx**
```typescript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Modal } from '../Modal';

expect.extend(toHaveNoViolations);

describe('Modal Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Modal isOpen title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has correct ARIA attributes', () => {
    const { getByRole } = render(<Modal isOpen title="Test">Content</Modal>);

    const dialog = getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby');
  });

  it('has keyboard navigable close button', () => {
    const { getByRole } = render(<Modal isOpen title="Test">Content</Modal>);

    const closeButton = getByRole('button', { name: /close/i });
    expect(closeButton).toHaveAttribute('tabindex', '0');
  });
});
```

#### 8.4 Integration Tests (Week 16, Days 3-4)

**Example: Modal + Toast integration:**
```typescript
describe('Modal with Toast', () => {
  it('shows toast when modal action completes', async () => {
    render(
      <AuralProvider>
        <ModalWithToast />
      </AuralProvider>
    );

    await userEvent.click(screen.getByRole('button', { name: /open/i }));
    await userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(screen.getByRole('alert')).toHaveTextContent('Saved successfully');
  });
});
```

#### 8.5 Visual Regression (Week 16, Day 5)

**Using Chromatic or Percy:**
```bash
npm install -D @chromatic-com/storybook
npx chromatic --project-token=<token>
```

### Deliverables

- [ ] 80%+ code coverage
- [ ] Unit tests for all components
- [ ] Accessibility tests (zero violations)
- [ ] Integration tests for key flows
- [ ] Visual regression tests
- [ ] CI/CD pipeline for tests

### Success Criteria

✅ 80%+ test coverage achieved
✅ Zero critical accessibility violations
✅ All tests pass in CI
✅ Visual regression baseline captured
✅ Performance benchmarks documented

---

## Phase 9: Documentation & Migration (Week 17)

### Overview
Complete documentation suite with migration guides, API reference, and deployment.

### Goals
- Comprehensive API documentation
- Migration guides (Vanilla → Frameworks)
- Contribution guidelines
- Deployment of docs site

### Tasks

#### 9.1 API Documentation (Days 1-3)

Create detailed API docs for each component:
- Props table
- Events
- Methods
- Examples
- Browser support

**Files:**
- `docs/api/modal.md`
- `docs/api/carousel.md`
- (14 total component docs)

#### 9.2 Migration Guides (Days 4-5)

**Create guides:**
- `docs/migration/vanilla-to-react.md`
- `docs/migration/vanilla-to-vue.md`
- `docs/migration/vanilla-to-svelte.md`
- `docs/migration/from-mui.md`
- `docs/migration/from-chakra.md`

#### 9.3 Deploy Documentation (Days 6-7)

**Options:**
- GitHub Pages
- Vercel
- Netlify

**Deploy Storybook + Docs:**
```bash
npm run build-storybook
vercel deploy ./storybook-static
```

### Deliverables

- [ ] Complete API reference
- [ ] 5 migration guides
- [ ] Contribution guidelines
- [ ] Docs site deployed
- [ ] README updated

### Success Criteria

✅ All components documented
✅ Migration guides complete
✅ Docs site live
✅ Contributing guide published
✅ README comprehensive

---

## Timeline Summary

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1: Foundation | Weeks 1-2 | ✅ COMPLETE |
| Phase 2: React | Weeks 3-5 | ✅ COMPLETE |
| Phase 3: Vue | Weeks 6-7 | ✅ COMPLETE |
| Phase 4: Svelte | Weeks 8-9 | ✅ COMPLETE |
| **Phase 5: Storybook** | **Weeks 10-11** | **NEXT** |
| Phase 6: VS Code | Week 12 | Pending |
| Phase 7: CLI | Weeks 13-14 | Pending |
| Phase 8: Testing | Weeks 15-16 | Pending |
| Phase 9: Docs | Week 17 | Pending |

**Current Week:** Week 9 complete
**Next Milestone:** Storybook Documentation (Week 10)

---

## Success Metrics

### Phase 5 (Storybook)
- [ ] 14 component stories created
- [ ] 6 documentation pages written
- [ ] Theme switcher functional
- [ ] Zero accessibility violations
- [ ] Deployed to production

### Phase 6 (VS Code)
- [ ] 40+ snippets created
- [ ] Extension published
- [ ] Documentation complete

### Phase 7 (CLI)
- [ ] 4 commands implemented
- [ ] Published to npm
- [ ] 50+ installs in first week

### Phase 8 (Testing)
- [ ] 80%+ code coverage
- [ ] Zero critical bugs
- [ ] All tests green in CI

### Phase 9 (Docs)
- [ ] Complete API reference
- [ ] Docs site live
- [ ] 1000+ page views in first month

---

## Long-term Roadmap (Post v1.0)

### v1.1 - Additional Components
- Form components (Input, Checkbox, Radio)
- Layout components (Grid, Stack, Container)
- Navigation (Breadcrumb, Pagination, Sidebar)

### v1.2 - Advanced Features
- Animation library
- Form validation
- Data fetching utilities

### v2.0 - Ecosystem Expansion
- Figma plugin
- Design token exports
- Component analytics
- Performance monitoring

---

## Getting Started with Phase 5

Ready to start Storybook documentation:

```bash
# 1. Create Storybook package
cd /Users/feraf/Projects/aural-ui
mkdir -p packages/storybook

# 2. Initialize Storybook
cd packages/storybook
npx storybook@latest init --type react

# 3. Install addons
npm install -D @storybook/addon-a11y @storybook/addon-themes

# 4. Configure Storybook (see Phase 5 tasks)

# 5. Start development
npm run storybook
```

Let's build comprehensive documentation together! 🚀
