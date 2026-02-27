/**
 * React Renderer - Renders React components using ESM CDN
 *
 * @module ReactRenderer
 * @version 1.0.0
 */

class ReactRenderer {
  constructor() {
    this.sandboxes = new Map();
  }

  /**
   * Render React component in an iframe sandbox
   */
  async render(container, exampleCode, options = {}) {
    const { theme = 'dark', componentName = '' } = options;

    // Create or reuse iframe
    let iframe = container.querySelector('iframe.preview-sandbox');

    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.className = 'preview-sandbox';
      iframe.sandbox = 'allow-scripts allow-same-origin';
      iframe.setAttribute('title', `${componentName} React preview`);
      container.innerHTML = '';
      container.appendChild(iframe);
    }

    // Build preview HTML
    const html = this.buildReactPreviewHTML(exampleCode, theme);

    // Write to iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();

    // Auto-resize iframe
    this.autoResize(iframe);
  }

  /**
   * Build React preview HTML
   */
  buildReactPreviewHTML(exampleCode, theme) {
    const code = exampleCode.code || '';
    const basePath = this.getBasePath();

    // Transform JSX code to executable JavaScript
    const transformedCode = this.transformJSX(code);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Preview</title>

  <!-- Aural UI CSS -->
  <link rel="stylesheet" href="${basePath}/aural-ui.css">
  <link rel="stylesheet" href="${basePath}/${theme}.css">

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"><\/script>

  <style>
    body {
      margin: 0;
      padding: var(--space-4);
      background: var(--color-bg-primary);
      color: var(--color-text-primary);
      font-family: var(--font-family);
      min-height: 100px;
    }

    #root {
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      align-items: center;
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <!-- React via ESM CDN -->
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18.2.0",
        "react-dom": "https://esm.sh/react-dom@18.2.0",
        "react-dom/client": "https://esm.sh/react-dom@18.2.0/client"
      }
    }
  <\/script>

  <script type="module">
    import React from 'react';
    import { createRoot } from 'react-dom/client';

    // Simple React component wrappers for Aural UI
    const Button = ({ children, variant = 'primary', size = 'medium', loading = false, icon, fullWidth = false, ...props }) => {
      const variantClass = variant !== 'primary' ? \`btn-\${variant}\` : '';
      const sizeClass = size !== 'medium' ? \`btn-\${size}\` : '';
      const widthClass = fullWidth ? 'btn-full' : '';
      const loadingClass = loading ? 'btn-loading' : '';

      const classes = ['btn', variantClass, sizeClass, widthClass, loadingClass]
        .filter(Boolean)
        .join(' ');

      return React.createElement(
        'button',
        { className: classes, disabled: props.disabled || loading, ...props },
        icon && React.createElement('span', { className: 'btn-icon' }, icon),
        loading && React.createElement('span', { className: 'btn-spinner', 'aria-hidden': 'true' }),
        children
      );
    };

    // User example code (transformed from JSX)
    const Example = () => {
      ${transformedCode}
    };

    // Render
    const root = createRoot(document.getElementById('root'));
    root.render(React.createElement(Example));

    // Initialize icons after render
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 100);
  <\/script>
</body>
</html>
    `;
  }

  /**
   * Transform JSX to plain JavaScript
   * Simple transformation for basic JSX patterns
   */
  transformJSX(code) {
    // Remove imports (we provide components)
    let transformed = code.replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s*;?/g, '');
    transformed = transformed.replace(/import\s+\w+\s+from\s+['"][^'"]+['"]\s*;?/g, '');

    // Extract function body if it's a function component
    const functionMatch = transformed.match(/function\s+\w+\s*\([^)]*\)\s*{([\s\S]*)}/) ||
                         transformed.match(/const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{([\s\S]*)}/) ||
                         transformed.match(/\([^)]*\)\s*=>\s*{([\s\S]*)}/) ||
                         transformed.match(/\(\)\s*=>\s*\(([\s\S]*)\)/);

    if (functionMatch) {
      transformed = functionMatch[1] || functionMatch[0];
    }

    // Simple JSX to React.createElement transformation
    // Handle self-closing tags like <Button variant="primary" />
    transformed = transformed.replace(
      /<(\w+)([^>]*?)\/>/g,
      (match, tag, attrs) => {
        const props = this.parseAttributes(attrs);
        return `React.createElement(${tag}, ${props})`;
      }
    );

    // Handle opening/closing tags like <Button>text</Button>
    transformed = transformed.replace(
      /<(\w+)([^>]*?)>([\s\S]*?)<\/\1>/g,
      (match, tag, attrs, children) => {
        const props = this.parseAttributes(attrs);
        const childCode = children.trim() ? `, ${this.transformJSXChildren(children)}` : '';
        return `React.createElement(${tag}, ${props}${childCode})`;
      }
    );

    // Wrap in return statement if not already present
    if (!transformed.includes('return')) {
      transformed = `return (${transformed});`;
    }

    return transformed;
  }

  /**
   * Parse JSX attributes to object literal
   */
  parseAttributes(attrString) {
    if (!attrString || !attrString.trim()) {
      return 'null';
    }

    const attrs = {};
    const attrRegex = /(\w+)=(?:{([^}]+)}|"([^"]+)"|'([^']+)')/g;

    let match;
    while ((match = attrRegex.exec(attrString)) !== null) {
      const [, name, jsValue, doubleQuoted, singleQuoted] = match;
      const value = jsValue || doubleQuoted || singleQuoted;

      // Convert attribute name from JSX to props (className -> className, onClick -> onClick)
      const propName = name;

      if (jsValue) {
        attrs[propName] = value; // JavaScript expression
      } else {
        attrs[propName] = `"${value}"`; // String literal
      }
    }

    if (Object.keys(attrs).length === 0) {
      return 'null';
    }

    const propsStr = Object.entries(attrs)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');

    return `{ ${propsStr} }`;
  }

  /**
   * Transform JSX children
   */
  transformJSXChildren(children) {
    children = children.trim();

    // If children contain JSX, recursively transform
    if (children.includes('<')) {
      return this.transformJSX(children);
    }

    // String literal
    return `"${children}"`;
  }

  /**
   * Get base path for assets
   */
  getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/components/')) {
      return '..';
    }
    return '.';
  }

  /**
   * Auto-resize iframe to fit content
   */
  autoResize(iframe) {
    const resize = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const body = iframeDoc.body;

        if (body) {
          const height = body.scrollHeight + 20;
          iframe.style.height = `${height}px`;
        }
      } catch (error) {
        iframe.style.height = '200px';
      }
    };

    setTimeout(resize, 200);

    if (iframe.contentWindow) {
      iframe.contentWindow.addEventListener('load', resize);
    }
  }

  /**
   * Clean up
   */
  destroy() {
    this.sandboxes.clear();
  }
}

export default ReactRenderer;
