/**
 * Vanilla JS Renderer - Renders plain HTML/CSS/JS components
 *
 * @module VanillaRenderer
 * @version 1.0.0
 */

class VanillaRenderer {
  constructor() {
    this.sandboxes = new Map();
  }

  /**
   * Render vanilla HTML/CSS/JS in an iframe sandbox
   */
  async render(container, exampleCode, options = {}) {
    const { theme = 'dark', componentName = '' } = options;

    // Create or reuse iframe
    let iframe = container.querySelector('iframe.preview-sandbox');

    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.className = 'preview-sandbox';
      iframe.sandbox = 'allow-scripts allow-same-origin';
      iframe.setAttribute('title', `${componentName} preview`);
      container.innerHTML = '';
      container.appendChild(iframe);
    }

    // Build preview HTML
    const html = this.buildPreviewHTML(exampleCode, theme);

    // Write to iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();

    // Auto-resize iframe to content height
    this.autoResize(iframe);

    // Reinitialize Aural UI components in iframe
    if (iframe.contentWindow.Aural) {
      iframe.contentWindow.Aural.initAll();
    }

    // Reinitialize Lucide icons in iframe
    if (iframe.contentWindow.lucide) {
      iframe.contentWindow.lucide.createIcons();
    }
  }

  /**
   * Build complete HTML document for iframe
   */
  buildPreviewHTML(exampleCode, theme) {
    const html = exampleCode.html || exampleCode.code || '';
    const css = exampleCode.css || '';
    const js = exampleCode.js || '';

    // Get base path for assets
    const basePath = this.getBasePath();

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview</title>

  <!-- Aural UI CSS -->
  <link rel="stylesheet" href="${basePath}/aural-ui.css">

  <!-- Theme CSS -->
  <link rel="stylesheet" href="${basePath}/${theme}.css" id="theme-link">

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

    /* Custom component styles */
    ${css}
  </style>
</head>
<body>
  ${html}

  <!-- Aural UI JavaScript -->
  <script src="${basePath}/aural-ui.js"><\/script>

  <script>
    // Initialize components
    if (window.Aural) {
      window.Aural.initAll();
    }

    // Initialize icons
    if (window.lucide) {
      lucide.createIcons();
    }

    // Custom JavaScript
    ${js}
  <\/script>
</body>
</html>
    `;
  }

  /**
   * Get base path for loading assets
   */
  getBasePath() {
    const path = window.location.pathname;

    // Check if we're in a subdirectory
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
          // Add some padding to prevent scroll bars
          const height = body.scrollHeight + 20;
          iframe.style.height = `${height}px`;
        }
      } catch (error) {
        // Cross-origin error, use default height
        iframe.style.height = '200px';
      }
    };

    // Initial resize
    setTimeout(resize, 100);

    // Resize on content changes
    if (iframe.contentWindow) {
      iframe.contentWindow.addEventListener('load', resize);
      iframe.contentWindow.addEventListener('resize', resize);
    }

    // Watch for DOM changes in iframe
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const observer = new MutationObserver(resize);
      observer.observe(iframeDoc.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
    } catch (error) {
      // Can't observe, fallback to fixed height
      console.warn('Cannot observe iframe for auto-resize:', error);
    }
  }

  /**
   * Clean up renderer resources
   */
  destroy() {
    this.sandboxes.clear();
  }
}

export default VanillaRenderer;
