import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Data Display/Code Block',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Code Block Component

Display code snippets with syntax highlighting, copy functionality, and multiple variants for different programming languages.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-code-block">
  <div class="aural-code-block__header">
    <span class="aural-code-block__language">JavaScript</span>
    <button class="aural-code-block__copy">Copy</button>
  </div>
  <div class="aural-code-block__content">
    <pre class="aural-code-block__pre"><code class="aural-code-block__code">const x = 42;</code></pre>
  </div>
</div>
\`\`\`

**React:**
\`\`\`jsx
<CodeBlock code="const x = 42;" language="javascript" copyable />
\`\`\`

**Vue:**
\`\`\`vue
<CodeBlock :code="code" language="javascript" :copyable="true" />
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    code: {
      control: 'text',
      description: 'Code content to display'
    },
    language: {
      control: 'select',
      options: ['javascript', 'html', 'css', 'python', 'bash', 'json', 'typescript', 'jsx', 'vue', 'go', 'rust'],
      description: 'Programming language for syntax context'
    },
    showLineNumbers: {
      control: 'boolean',
      description: 'Display line numbers'
    },
    highlightLines: {
      control: 'object',
      description: 'Array of line numbers to highlight'
    },
    fileName: {
      control: 'text',
      description: 'Optional filename to display'
    },
    copyable: {
      control: 'boolean',
      description: 'Show copy button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Code block size'
    },
    terminal: {
      control: 'boolean',
      description: 'Terminal style variant'
    }
  }
};

export default meta;
type Story = StoryObj;

// Helper function to create copy button functionality
function attachCopyHandler(container: HTMLElement) {
  const copyButton = container.querySelector('.aural-code-block__copy') as HTMLButtonElement;
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      const codeBlock = container.querySelector('.aural-code-block__code');
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent || '');
        const originalHTML = copyButton.innerHTML;
        copyButton.innerHTML = '✓ Copied!';
        setTimeout(() => {
          copyButton.innerHTML = originalHTML;
        }, 2000);
      }
    });
  }
}

export const JavaScript: Story = {
  render: (args) => {
    const container = document.createElement('div');
    const codeBlock = document.createElement('div');

    const classes = ['aural-code-block'];
    if (args.showLineNumbers) classes.push('aural-code-block--line-numbers');
    if (args.terminal) classes.push('aural-code-block--terminal');
    if (args.size && args.size !== 'md') classes.push(`aural-code-block--${args.size}`);

    codeBlock.className = classes.join(' ');

    const header = document.createElement('div');
    header.className = 'aural-code-block__header';

    const languageLabel = document.createElement('span');
    languageLabel.className = 'aural-code-block__language';
    languageLabel.setAttribute('aria-label', 'Code language');
    languageLabel.textContent = args.fileName || args.language;
    header.appendChild(languageLabel);

    if (args.copyable) {
      const copyButton = document.createElement('button');
      copyButton.className = 'aural-code-block__copy';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      copyButton.innerHTML = '📋 Copy';
      header.appendChild(copyButton);
    }

    codeBlock.appendChild(header);

    const content = document.createElement('div');
    content.className = 'aural-code-block__content';

    const pre = document.createElement('pre');
    pre.className = 'aural-code-block__pre';

    const code = document.createElement('code');
    code.className = 'aural-code-block__code';
    code.textContent = args.code;

    pre.appendChild(code);
    content.appendChild(pre);
    codeBlock.appendChild(content);
    container.appendChild(codeBlock);

    attachCopyHandler(container);
    return container;
  },
  args: {
    code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`,
    language: 'javascript',
    showLineNumbers: false,
    copyable: true,
    size: 'md',
    terminal: false
  }
};

export const HTML: Story = {
  ...JavaScript,
  args: {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aural UI</title>
  <link rel="stylesheet" href="aural-ui.css">
</head>
<body>
  <button class="btn btn-primary">Click me</button>
</body>
</html>`,
    language: 'html',
    copyable: true,
    size: 'md'
  }
};

export const CSS: Story = {
  ...JavaScript,
  args: {
    code: `.btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}`,
    language: 'css',
    fileName: 'button.css',
    copyable: true,
    size: 'md'
  }
};

export const Bash: Story = {
  ...JavaScript,
  args: {
    code: `$ npm install aural-ui
$ npm run dev

> aural-ui@1.0.0 dev
> vite

  VITE v4.0.0  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose`,
    language: 'bash',
    copyable: true,
    terminal: true,
    size: 'md'
  }
};

export const JSON: Story = {
  ...JavaScript,
  args: {
    code: `{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "aural-ui": "^1.0.0",
    "react": "^18.2.0"
  }
}`,
    language: 'json',
    fileName: 'package.json',
    copyable: true,
    size: 'md'
  }
};

export const Python: Story = {
  ...JavaScript,
  args: {
    code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Print first 10 numbers
for i in range(10):
    print(fibonacci(i))`,
    language: 'python',
    fileName: 'fibonacci.py',
    copyable: true,
    size: 'md'
  }
};

export const WithLineNumbers: Story = {
  ...JavaScript,
  args: {
    code: `const user = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
};

function updateUser(updates) {
  return { ...user, ...updates };
}`,
    language: 'javascript',
    showLineNumbers: true,
    copyable: true,
    size: 'md'
  }
};

export const WithHighlightedLines: Story = {
  render: () => {
    const container = document.createElement('div');
    const codeBlock = document.createElement('div');
    codeBlock.className = 'aural-code-block aural-code-block--line-numbers';

    const header = document.createElement('div');
    header.className = 'aural-code-block__header';

    const languageLabel = document.createElement('span');
    languageLabel.className = 'aural-code-block__language';
    languageLabel.setAttribute('aria-label', 'Code language');
    languageLabel.textContent = 'JavaScript';
    header.appendChild(languageLabel);

    const copyButton = document.createElement('button');
    copyButton.className = 'aural-code-block__copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    copyButton.innerHTML = '📋 Copy';
    header.appendChild(copyButton);

    codeBlock.appendChild(header);

    const content = document.createElement('div');
    content.className = 'aural-code-block__content';

    const pre = document.createElement('pre');
    pre.className = 'aural-code-block__pre';

    const code = document.createElement('code');
    code.className = 'aural-code-block__code';
    code.innerHTML = `<span class="aural-code-block__line">const user = {</span>
<span class="aural-code-block__line aural-code-block__line--highlight">  name: 'John Doe',</span>
<span class="aural-code-block__line aural-code-block__line--success">  email: 'john@example.com',</span>
<span class="aural-code-block__line aural-code-block__line--error">  password: '123456', // Insecure!</span>
<span class="aural-code-block__line">};</span>`;

    pre.appendChild(code);
    content.appendChild(pre);
    codeBlock.appendChild(content);
    container.appendChild(codeBlock);

    attachCopyHandler(container);
    return container;
  }
};

export const WithFileName: Story = {
  ...JavaScript,
  args: {
    code: `import 'aural-ui/dist/aural-ui.css';
import { Button, Card } from 'aural-ui';

export default function App() {
  return (
    <Card>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`,
    language: 'jsx',
    fileName: 'App.jsx',
    copyable: true,
    showLineNumbers: true,
    size: 'md'
  }
};

export const WithCopyButton: Story = {
  ...JavaScript,
  args: {
    code: `npm install aural-ui`,
    language: 'bash',
    copyable: true,
    terminal: true,
    size: 'md'
  }
};

export const InlineCode: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const paragraph = document.createElement('p');
    paragraph.style.cssText = 'color: var(--color-text-secondary); margin: 0; line-height: 1.8;';

    paragraph.innerHTML = `Use the <code class="aural-code-inline">console.log()</code> function to output messages.
Variables can be declared with <code class="aural-code-inline">const</code>,
<code class="aural-code-inline">let</code>, or <code class="aural-code-inline">var</code>.`;

    container.appendChild(paragraph);
    return container;
  }
};

export const MultiLanguageDemo: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 1.5rem; padding: 2rem;';

    const title = document.createElement('p');
    title.style.cssText = 'color: var(--color-text-secondary); margin: 0 0 1rem 0; font-weight: 600;';
    title.textContent = 'The same function in different languages:';
    container.appendChild(title);

    const languages = [
      { lang: 'JavaScript', code: 'function sum(a, b) {\n  return a + b;\n}' },
      { lang: 'Python', code: 'def sum(a, b):\n    return a + b' },
      { lang: 'Go', code: 'func sum(a, b int) int {\n    return a + b\n}' },
      { lang: 'Rust', code: 'fn sum(a: i32, b: i32) -> i32 {\n    a + b\n}' }
    ];

    languages.forEach(({ lang, code }) => {
      const codeBlock = document.createElement('div');
      codeBlock.className = 'aural-code-block';

      const header = document.createElement('div');
      header.className = 'aural-code-block__header';

      const languageLabel = document.createElement('span');
      languageLabel.className = 'aural-code-block__language';
      languageLabel.textContent = lang;
      header.appendChild(languageLabel);

      codeBlock.appendChild(header);

      const content = document.createElement('div');
      content.className = 'aural-code-block__content';

      const pre = document.createElement('pre');
      pre.className = 'aural-code-block__pre';

      const codeElement = document.createElement('code');
      codeElement.className = 'aural-code-block__code';
      codeElement.textContent = code;

      pre.appendChild(codeElement);
      content.appendChild(pre);
      codeBlock.appendChild(content);
      container.appendChild(codeBlock);
    });

    return container;
  }
};

export const SizeVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';

    const sizes = [
      { size: 'sm', label: 'Small' },
      { size: 'md', label: 'Medium (Default)' },
      { size: 'lg', label: 'Large' }
    ];

    sizes.forEach(({ size, label }) => {
      const wrapper = document.createElement('div');

      const labelEl = document.createElement('p');
      labelEl.style.cssText = 'color: var(--color-text-secondary); font-size: 0.875rem; margin: 0 0 0.5rem 0; font-weight: 600;';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);

      const codeBlock = document.createElement('div');
      codeBlock.className = `aural-code-block${size !== 'md' ? ' aural-code-block--' + size : ''}`;

      const content = document.createElement('div');
      content.className = 'aural-code-block__content';

      const pre = document.createElement('pre');
      pre.className = 'aural-code-block__pre';

      const code = document.createElement('code');
      code.className = 'aural-code-block__code';
      code.textContent = 'const greeting = "Hello, World!";';

      pre.appendChild(code);
      content.appendChild(pre);
      codeBlock.appendChild(content);
      wrapper.appendChild(codeBlock);
      container.appendChild(wrapper);
    });

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const codeBlock = document.createElement('div');
      codeBlock.className = 'aural-code-block';

      const header = document.createElement('div');
      header.className = 'aural-code-block__header';

      const languageLabel = document.createElement('span');
      languageLabel.className = 'aural-code-block__language';
      languageLabel.setAttribute('aria-label', 'Code language');
      languageLabel.textContent = args.language;
      header.appendChild(languageLabel);

      if (args.copyable) {
        const copyButton = document.createElement('button');
        copyButton.className = 'aural-code-block__copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        copyButton.innerHTML = '📋 Copy';
        header.appendChild(copyButton);
      }

      codeBlock.appendChild(header);

      const content = document.createElement('div');
      content.className = 'aural-code-block__content';

      const pre = document.createElement('pre');
      pre.className = 'aural-code-block__pre';

      const code = document.createElement('code');
      code.className = 'aural-code-block__code';
      code.textContent = args.code;

      pre.appendChild(code);
      content.appendChild(pre);
      codeBlock.appendChild(content);

      return codeBlock;
    });
  },
  args: {
    code: `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
    language: 'JavaScript',
    copyable: true
  },
  argTypes: {
    code: {
      control: 'text',
      description: 'Code content to display'
    },
    language: {
      control: 'select',
      options: ['JavaScript', 'HTML', 'CSS', 'Python', 'Bash', 'JSON'],
      description: 'Programming language label'
    },
    copyable: {
      control: 'boolean',
      description: 'Show copy button'
    }
  }
};
