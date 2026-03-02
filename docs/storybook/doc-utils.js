const DocUtils = {
    // Initialize all utilities
    init() {
        this.initCopyButtons();
        this.initFrameworkTabs();
    },

    // Add copy buttons to all code blocks
    initCopyButtons() {
        document.querySelectorAll('pre code').forEach(codeBlock => {
            const pre = codeBlock.parentElement;
            if (pre.querySelector('.copy-btn')) return;

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = '<i data-lucide="copy"></i><span>Copy</span>';
            copyBtn.onclick = () => this.copyCode(codeBlock, copyBtn);

            pre.style.position = 'relative';
            pre.appendChild(copyBtn);
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    copyCode(codeBlock, button) {
        const code = codeBlock.textContent;
        navigator.clipboard.writeText(code).then(() => {
            button.innerHTML = '<i data-lucide="check"></i><span>Copied!</span>';
            setTimeout(() => {
                button.innerHTML = '<i data-lucide="copy"></i><span>Copy</span>';
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 2000);
        }).catch(err => console.error('Copy failed:', err));
    },

    // Initialize framework example tabs
    initFrameworkTabs() {
        document.querySelectorAll('.framework-tabs').forEach(container => {
            const tabs = container.querySelectorAll('[role="tab"]');
            const panels = container.querySelectorAll('[role="tabpanel"]');

            tabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent default behavior
                    e.stopPropagation(); // Prevent Aural.initTabs() from interfering
                    e.stopImmediatePropagation(); // Stop all other handlers

                    const target = tab.getAttribute('aria-controls');

                    // Update tabs
                    tabs.forEach(t => {
                        t.classList.remove('active');
                        t.setAttribute('aria-selected', 'false');
                    });
                    tab.classList.add('active');
                    tab.setAttribute('aria-selected', 'true');

                    // Update panels
                    panels.forEach(p => p.hidden = true);
                    document.getElementById(target).hidden = false;
                }, true); // Use capture phase to run before Aural's listeners
            });
        });
    },

    // Initialize playground for a component
    initPlayground(config) {
        const { controls, updateFn } = config;

        controls.forEach(control => {
            const element = document.getElementById(control.id);
            if (!element) return;

            element.addEventListener(control.event || 'change', () => {
                updateFn();
            });
        });

        updateFn(); // Initial render
    }
};

// Auto-initialize on load
if (typeof window !== 'undefined') {
    window.DocUtils = DocUtils;
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => DocUtils.init());
    } else {
        DocUtils.init();
    }
}
