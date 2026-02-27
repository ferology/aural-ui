/**
 * Vue Renderer - Renders Vue 3 components using ESM CDN
 *
 * @module VueRenderer
 * @version 1.0.0
 */

class VueRenderer {
  constructor() {
    this.sandboxes = new Map();
  }

  /**
   * Render Vue component in an iframe sandbox
   */
  async render(container, exampleCode, options = {}) {
    const { theme = 'dark', componentName = '' } = options;

    // Create or reuse iframe
    let iframe = container.querySelector('iframe.preview-sandbox');

    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.className = 'preview-sandbox';
      iframe.sandbox = 'allow-scripts allow-same-origin';
      iframe.setAttribute('title', `${componentName} Vue preview`);
      container.innerHTML = '';
      container.appendChild(iframe);
    }

    // Build preview HTML
    const html = this.buildVuePreviewHTML(exampleCode, theme);

    // Write to iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();

    // Auto-resize iframe
    this.autoResize(iframe);
  }

  /**
   * Build Vue preview HTML
   */
  buildVuePreviewHTML(exampleCode, theme) {
    const code = exampleCode.code || '';
    const basePath = this.getBasePath();

    // Extract template and script
    const { template, script } = this.parseVueSFC(code);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Preview</title>

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

    #app {
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      align-items: center;
    }
  </style>
</head>
<body>
  <div id="app"></div>

  <!-- Vue via ESM CDN -->
  <script type="importmap">
    {
      "imports": {
        "vue": "https://esm.sh/vue@3.4.0"
      }
    }
  <\/script>

  <script type="module">
    import { createApp, ref } from 'vue';

    // Simple Vue component wrappers for Aural UI
    const AuralButton = {
      name: 'AuralButton',
      props: {
        variant: { type: String, default: 'primary' },
        size: { type: String, default: 'medium' },
        loading: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        fullWidth: { type: Boolean, default: false },
        icon: { type: String, default: '' }
      },
      template: \`
        <button
          :class="buttonClasses"
          :disabled="disabled || loading"
          v-bind="$attrs"
        >
          <span v-if="icon" class="btn-icon">{{ icon }}</span>
          <span v-if="loading" class="btn-spinner" aria-hidden="true"></span>
          <slot></slot>
        </button>
      \`,
      computed: {
        buttonClasses() {
          const classes = ['btn'];
          if (this.variant !== 'primary') classes.push(\`btn-\${this.variant}\`);
          if (this.size !== 'medium') classes.push(\`btn-\${this.size}\`);
          if (this.fullWidth) classes.push('btn-full');
          if (this.loading) classes.push('btn-loading');
          return classes.join(' ');
        }
      }
    };

    // User component
    ${script}

    // Create app
    const app = createApp({
      components: { AuralButton },
      template: \`${template}\`,
      setup() {
        ${this.extractSetupCode(script)}
      }
    });

    app.mount('#app');

    // Initialize icons after mount
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
   * Parse Vue Single File Component
   */
  parseVueSFC(code) {
    // Extract template
    const templateMatch = code.match(/<template>([\s\S]*?)<\/template>/);
    const template = templateMatch ? templateMatch[1].trim() : '';

    // Extract script content
    const scriptMatch = code.match(/<script[^>]*>([\s\S]*?)<\/script>/);
    let script = scriptMatch ? scriptMatch[1].trim() : '';

    // Remove imports (we provide components)
    script = script.replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s*;?/g, '');
    script = script.replace(/import\s+\w+\s+from\s+['"][^'"]+['"]\s*;?/g, '');

    return { template, script };
  }

  /**
   * Extract setup code from script
   */
  extractSetupCode(script) {
    // If using <script setup>, extract the whole content
    if (!script) return '';

    // Remove "export default" wrapper if present
    script = script.replace(/export\s+default\s+{[\s\S]*}/, '');

    // Extract refs and reactive declarations
    const lines = script.split('\n').filter(line => {
      const trimmed = line.trim();
      return trimmed.startsWith('const') ||
             trimmed.startsWith('let') ||
             trimmed.startsWith('function') ||
             trimmed.startsWith('const') && (trimmed.includes('ref(') || trimmed.includes('reactive('));
    });

    // Return as setup function body
    return lines.join('\n');
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

export default VueRenderer;
