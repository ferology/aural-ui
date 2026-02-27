/**
 * Preview Manager - Live Component Preview System
 *
 * Orchestrates the rendering of live component previews with
 * support for multiple frameworks (Vanilla, React, Vue, Svelte).
 *
 * @module PreviewManager
 * @version 1.0.0
 */

class PreviewManager {
  constructor() {
    this.renderers = new Map();
    this.examples = new Map();
    this.activeFramework = 'vanilla';
    this.theme = 'dark';
    this.initialized = false;
  }

  /**
   * Initialize the preview system
   * @param {Object} options - Configuration options
   */
  async init(options = {}) {
    if (this.initialized) {
      console.warn('PreviewManager already initialized');
      return;
    }

    this.options = {
      defaultFramework: options.defaultFramework || 'vanilla',
      theme: options.theme || 'dark',
      showCode: options.showCode !== false,
      editable: options.editable || false,
      autoHeight: options.autoHeight !== false,
      ...options
    };

    this.activeFramework = this.options.defaultFramework;
    this.theme = this.options.theme;

    // Load renderers
    await this.loadRenderers();

    // Find and initialize all preview containers
    this.initializePreviews();

    // Listen for theme changes
    this.setupThemeListener();

    this.initialized = true;
    console.log('PreviewManager initialized');
  }

  /**
   * Load framework renderers
   */
  async loadRenderers() {
    try {
      // Vanilla renderer is always available
      const VanillaRenderer = (await import('./VanillaRenderer.js')).default;
      this.renderers.set('vanilla', new VanillaRenderer());

      // Load other renderers dynamically
      if (this.hasFramework('react')) {
        const ReactRenderer = (await import('./ReactRenderer.js')).default;
        this.renderers.set('react', new ReactRenderer());
      }

      if (this.hasFramework('vue')) {
        const VueRenderer = (await import('./VueRenderer.js')).default;
        this.renderers.set('vue', new VueRenderer());
      }

      if (this.hasFramework('svelte')) {
        const SvelteRenderer = (await import('./SvelteRenderer.js')).default;
        this.renderers.set('svelte', new SvelteRenderer());
      }

      console.log(`Loaded ${this.renderers.size} renderers`);
    } catch (error) {
      console.error('Failed to load renderers:', error);
    }
  }

  /**
   * Check if a framework should be loaded based on available examples
   */
  hasFramework(framework) {
    const containers = document.querySelectorAll('[data-frameworks]');
    return Array.from(containers).some(container => {
      const frameworks = container.dataset.frameworks.split(',').map(f => f.trim());
      return frameworks.includes(framework);
    });
  }

  /**
   * Initialize all preview containers on the page
   */
  initializePreviews() {
    const containers = document.querySelectorAll('[data-component]');

    containers.forEach(container => {
      this.createPreview(container);
    });

    console.log(`Initialized ${containers.length} previews`);
  }

  /**
   * Create a preview for a specific container
   */
  async createPreview(container) {
    const componentName = container.dataset.component;
    const exampleId = container.dataset.example;
    const frameworksStr = container.dataset.frameworks || 'vanilla';
    const frameworks = frameworksStr.split(',').map(f => f.trim());

    // Load example data
    const example = await this.loadExample(componentName, exampleId);
    if (!example) {
      this.showError(container, `Example not found: ${componentName}/${exampleId}`);
      return;
    }

    // Build preview UI
    const previewUI = this.buildPreviewUI(example, frameworks, container);
    container.appendChild(previewUI);

    // Render initial framework
    const initialFramework = frameworks.includes(this.activeFramework)
      ? this.activeFramework
      : frameworks[0];

    await this.renderPreview(container, example, initialFramework);
  }

  /**
   * Load example data
   */
  async loadExample(componentName, exampleId) {
    const cacheKey = `${componentName}:${exampleId}`;

    if (this.examples.has(cacheKey)) {
      return this.examples.get(cacheKey);
    }

    try {
      // Load example from external file
      const module = await import(`../preview-examples/${componentName.toLowerCase()}-examples.js`);
      const example = module.examples[exampleId];

      if (example) {
        this.examples.set(cacheKey, example);
        return example;
      }
    } catch (error) {
      console.error(`Failed to load example ${cacheKey}:`, error);
    }

    return null;
  }

  /**
   * Build preview UI structure
   */
  buildPreviewUI(example, frameworks, container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'preview-wrapper';

    // Title and description
    if (example.title) {
      const header = document.createElement('div');
      header.className = 'preview-header';
      header.innerHTML = `
        <h3 class="preview-title">${example.title}</h3>
        ${example.description ? `<p class="preview-description">${example.description}</p>` : ''}
      `;
      wrapper.appendChild(header);
    }

    // Preview container
    const previewContainer = document.createElement('div');
    previewContainer.className = 'preview-display';
    previewContainer.dataset.previewId = this.generateId();
    wrapper.appendChild(previewContainer);

    // Framework tabs
    if (frameworks.length > 1) {
      const tabs = this.buildFrameworkTabs(frameworks, container, example);
      wrapper.appendChild(tabs);
    }

    // Code display
    if (this.options.showCode) {
      const codeDisplay = document.createElement('div');
      codeDisplay.className = 'preview-code-container';
      codeDisplay.innerHTML = `
        <div class="code-header">
          <span class="code-label">Code</span>
          <button class="copy-btn" data-preview-copy>
            <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
            Copy
          </button>
        </div>
        <pre class="code-block"><code class="preview-code"></code></pre>
      `;
      wrapper.appendChild(codeDisplay);

      // Setup copy button
      const copyBtn = codeDisplay.querySelector('[data-preview-copy]');
      copyBtn.addEventListener('click', () => this.copyCode(container));
    }

    return wrapper;
  }

  /**
   * Build framework tabs
   */
  buildFrameworkTabs(frameworks, container, example) {
    const tabContainer = document.createElement('div');
    tabContainer.className = 'preview-tabs';
    tabContainer.setAttribute('role', 'tablist');

    frameworks.forEach((framework, index) => {
      const tab = document.createElement('button');
      tab.className = 'preview-tab';
      tab.setAttribute('role', 'tab');
      tab.textContent = this.getFrameworkLabel(framework);
      tab.dataset.framework = framework;

      if (index === 0) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      }

      tab.addEventListener('click', async () => {
        // Update active tab
        tabContainer.querySelectorAll('.preview-tab').forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Render preview
        await this.renderPreview(container, example, framework);
      });

      tabContainer.appendChild(tab);
    });

    return tabContainer;
  }

  /**
   * Render preview for a specific framework
   */
  async renderPreview(container, example, framework) {
    const previewDisplay = container.querySelector('.preview-display');
    const codeDisplay = container.querySelector('.preview-code');

    if (!previewDisplay) return;

    // Show loading state
    previewDisplay.innerHTML = '<div class="preview-loading">Loading preview...</div>';

    try {
      const renderer = this.renderers.get(framework);
      if (!renderer) {
        throw new Error(`Renderer not found for framework: ${framework}`);
      }

      // Get example code
      const exampleCode = example[framework];
      if (!exampleCode) {
        throw new Error(`No example code for framework: ${framework}`);
      }

      // Render preview
      await renderer.render(previewDisplay, exampleCode, {
        theme: this.theme,
        componentName: container.dataset.component
      });

      // Update code display
      if (codeDisplay) {
        const code = this.formatCode(exampleCode, framework);
        codeDisplay.textContent = code;

        // Highlight code if available
        if (window.Prism) {
          window.Prism.highlightElement(codeDisplay);
        } else if (window.hljs) {
          window.hljs.highlightElement(codeDisplay);
        }
      }

      // Store current code for copying
      container.dataset.currentCode = this.formatCode(exampleCode, framework);
      container.dataset.currentFramework = framework;

      // Reinitialize icons if Lucide is available
      if (window.lucide) {
        window.lucide.createIcons();
      }
    } catch (error) {
      console.error('Failed to render preview:', error);
      this.showError(previewDisplay, error.message);
    }
  }

  /**
   * Format code for display
   */
  formatCode(exampleCode, framework) {
    if (framework === 'vanilla') {
      return exampleCode.html || exampleCode.code || '';
    }
    return exampleCode.code || exampleCode.template || '';
  }

  /**
   * Get framework display label
   */
  getFrameworkLabel(framework) {
    const labels = {
      vanilla: 'Vanilla JS',
      react: 'React',
      vue: 'Vue',
      svelte: 'Svelte'
    };
    return labels[framework] || framework;
  }

  /**
   * Copy code to clipboard
   */
  async copyCode(container) {
    const code = container.dataset.currentCode;
    const framework = container.dataset.currentFramework;

    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);

      // Show success feedback
      const copyBtn = container.querySelector('[data-preview-copy]');
      if (copyBtn) {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" style="width: 14px; height: 14px;"></i> Copied!';
        copyBtn.classList.add('success');

        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.classList.remove('success');
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      }
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  }

  /**
   * Setup theme change listener
   */
  setupThemeListener() {
    if (window.AuralThemeManager) {
      window.AuralThemeManager.onChange((themeId) => {
        this.theme = themeId;
        this.refreshPreviews();
      });
    }
  }

  /**
   * Refresh all previews (e.g., after theme change)
   */
  async refreshPreviews() {
    const containers = document.querySelectorAll('[data-component]');

    for (const container of containers) {
      const componentName = container.dataset.component;
      const exampleId = container.dataset.example;
      const framework = container.dataset.currentFramework || this.activeFramework;

      const example = await this.loadExample(componentName, exampleId);
      if (example) {
        await this.renderPreview(container, example, framework);
      }
    }
  }

  /**
   * Show error message
   */
  showError(container, message) {
    container.innerHTML = `
      <div class="preview-error">
        <i data-lucide="alert-circle"></i>
        <p>Failed to load preview</p>
        <small>${message}</small>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Generate unique ID
   */
  generateId() {
    return `preview-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Create singleton instance
const previewManager = new PreviewManager();

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('[data-component]')) {
      previewManager.init();
    }
  });
} else {
  if (document.querySelector('[data-component]')) {
    previewManager.init();
  }
}

// Export for manual initialization
window.PreviewManager = previewManager;

export default PreviewManager;
