/**
 * Aural UI Theme Manager
 * Centralized theme management system for consistent theme application
 * across all documentation and demo pages.
 */

(function(window) {
    'use strict';

    // Theme configuration - 7 themes showcasing token system flexibility
    const THEMES = {
        'dark': {
            name: 'Dark',
            file: 'dark.css',
            icon: 'moon',
            components: []
        },
        'light': {
            name: 'Light',
            file: 'light.css',
            icon: 'sun',
            components: []
        },
        'neon': {
            name: 'Neon',
            file: 'neon.css',
            icon: 'sparkles',
            components: ['fonts-neon.css', 'deluxe-neon.css'],
            scripts: ['neon-effects.js']
        },
        'kinetic': {
            name: 'Kinetic',
            file: 'kinetic.css',
            icon: 'move',
            components: ['kinetic-buttons.css', 'kinetic-cards.css']
        },
        'prismatic': {
            name: 'Prismatic',
            file: 'prismatic.css',
            icon: 'gem',
            components: []
        },
        'minimal': {
            name: 'Minimal',
            file: 'minimal.css',
            icon: 'square',
            components: []
        },
        'warm': {
            name: 'Warm',
            file: 'warm.css',
            icon: 'coffee',
            components: []
        }
    };

    const DEFAULT_THEME = 'dark';
    const STORAGE_KEY = 'theme';

    /**
     * Check if localStorage is available
     * @returns {boolean}
     */
    function isLocalStorageAvailable() {
        try {
            const test = '__localStorage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    class ThemeManager {
        constructor() {
            this.currentTheme = null;
            this.themeLink = null;
            this.callbacks = [];
            this.isInIframe = window.self !== window.top;
            this.storageAvailable = isLocalStorageAvailable();
        }

        /**
         * Initialize theme manager
         */
        init() {
            this.themeLink = document.getElementById('theme-link');

            if (!this.themeLink) {
                console.error('Theme link element not found! Add <link id="theme-link"> to your HTML.');
                return;
            }

            // Load saved theme or default
            const savedTheme = this.getSavedTheme();
            this.applyTheme(savedTheme);

            // Hide theme toggle in iframes (parent controls theme)
            if (this.isInIframe) {
                this.hideThemeToggle();
            }

            console.log('ThemeManager initialized with theme:', this.currentTheme);
        }

        /**
         * Get saved theme from localStorage
         */
        getSavedTheme() {
            if (!this.storageAvailable) {
                return DEFAULT_THEME;
            }

            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                return (saved && THEMES[saved]) ? saved : DEFAULT_THEME;
            } catch (e) {
                console.warn('Could not read from localStorage:', e);
                return DEFAULT_THEME;
            }
        }

        /**
         * Apply a theme
         * @param {string} themeId - Theme identifier (e.g., 'dark', 'neon')
         * @param {boolean} skipCallback - Skip calling registered callbacks
         */
        applyTheme(themeId, skipCallback = false) {
            if (!THEMES[themeId]) {
                console.error(`Unknown theme: ${themeId}`);
                return;
            }

            const theme = THEMES[themeId];
            const relativePath = this.getRelativePath();

            console.log(`Applying theme: ${themeId} (${theme.name})`);

            // Update theme CSS with cache-busting timestamp
            const cacheBuster = Date.now();
            this.themeLink.href = `${relativePath}${theme.file}?v=${cacheBuster}`;

            // Set data-theme attribute on document element for CSS specificity
            document.documentElement.setAttribute('data-theme', themeId);

            // Clean up old theme-specific resources
            this.cleanupThemeResources();

            // Load theme-specific components
            if (theme.components && theme.components.length > 0) {
                this.loadThemeComponents(theme.components, themeId, relativePath);
            }

            // Load theme-specific scripts
            if (theme.scripts && theme.scripts.length > 0) {
                this.loadThemeScripts(theme.scripts, themeId, relativePath);
            }

            // Save to localStorage (with error handling)
            if (this.storageAvailable) {
                try {
                    localStorage.setItem(STORAGE_KEY, themeId);
                } catch (e) {
                    console.warn('Could not save theme to localStorage:', e);
                }
            }
            this.currentTheme = themeId;

            // Notify callbacks (unless explicitly skipped)
            if (!skipCallback) {
                this.notifyCallbacks(themeId);
            }
        }

        /**
         * Get relative path based on current location
         */
        getRelativePath() {
            const isInComponents = window.location.pathname.includes('/components/');
            return isInComponents ? '../' : './';
        }

        /**
         * Clean up theme-specific resources
         */
        cleanupThemeResources() {
            // Remove theme component CSS
            document.querySelectorAll('link[data-theme-component]').forEach(link => {
                link.remove();
            });

            // Remove theme scripts
            document.querySelectorAll('script[data-theme-script]').forEach(script => {
                script.remove();
            });

            // Remove neon effects attribute
            if (document.body) {
                document.body.removeAttribute('data-neon-effects');
            }
        }

        /**
         * Load theme-specific component CSS
         */
        loadThemeComponents(components, themeId, relativePath) {
            const head = document.head || document.getElementsByTagName('head')[0];

            components.forEach(filename => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = relativePath + filename;
                link.setAttribute('data-theme-component', themeId);
                head.appendChild(link);
                console.log(`Loaded theme component: ${filename}`);
            });
        }

        /**
         * Load theme-specific scripts (e.g., neon-effects.js)
         */
        loadThemeScripts(scripts, themeId, relativePath) {
            scripts.forEach(filename => {
                const script = document.createElement('script');
                script.src = relativePath + filename;
                script.setAttribute('data-theme-script', themeId);

                // Initialize neon effects when loaded
                if (filename === 'neon-effects.js') {
                    script.onload = () => this.initNeonEffects();
                }

                document.body.appendChild(script);
                console.log(`Loaded theme script: ${filename}`);
            });
        }

        /**
         * Initialize neon effects
         */
        initNeonEffects() {
            if (document.body && !document.body.hasAttribute('data-neon-effects')) {
                document.body.setAttribute('data-neon-effects', '');

                // NOTE: Optional chaining (?.) requires transpilation for older browser support (IE11, pre-2020 browsers)
                if (window.Aural?.NeonEffects) {
                    window.Aural.NeonEffects.initAll({
                        particles: this.isInIframe ? 20 : 30,
                        gradientMesh: true,
                        cursorGlow: !this.isInIframe
                    });
                    console.log('Neon effects initialized');
                }
            }
        }

        /**
         * Hide theme toggle in iframes
         */
        hideThemeToggle() {
            window.addEventListener('DOMContentLoaded', () => {
                const toggle = document.querySelector('.theme-toggle');
                if (toggle) {
                    toggle.style.display = 'none';
                }
            });
        }

        /**
         * Register callback for theme changes
         * @param {Function} callback - Called with (themeId) when theme changes
         */
        onChange(callback) {
            if (typeof callback === 'function') {
                this.callbacks.push(callback);
            }
        }

        /**
         * Notify all registered callbacks
         */
        notifyCallbacks(themeId) {
            this.callbacks.forEach(callback => {
                try {
                    callback(themeId);
                } catch (e) {
                    console.error('Theme callback error:', e);
                }
            });
        }

        /**
         * Get current theme info
         */
        getCurrentTheme() {
            return {
                id: this.currentTheme,
                ...THEMES[this.currentTheme]
            };
        }

        /**
         * Get all available themes
         */
        getAllThemes() {
            return Object.keys(THEMES).map(id => ({
                id,
                ...THEMES[id]
            }));
        }

        /**
         * Cycle to next theme (for theme toggle button)
         */
        cycleTheme() {
            const themeIds = Object.keys(THEMES);
            const currentIndex = themeIds.indexOf(this.currentTheme);
            const nextIndex = (currentIndex + 1) % themeIds.length;
            this.applyTheme(themeIds[nextIndex]);
        }
    }

    // Create global instance
    const themeManager = new ThemeManager();

    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => themeManager.init());
    } else {
        themeManager.init();
    }

    // Expose to window
    window.AuralThemeManager = themeManager;

    // Also expose helper function for legacy compatibility
    window.toggleTheme = () => themeManager.cycleTheme();

})(window);
