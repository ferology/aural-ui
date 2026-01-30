/**
 * AURAL UI - System Theme Detector
 *
 * Detects and responds to system dark mode preference
 * Syncs with user's operating system settings
 *
 * @version 1.0.0
 */

(function() {
    'use strict';

    /**
     * Theme Detector Class
     * Handles system theme detection and automatic theme switching
     */
    class ThemeDetector {
        constructor(options = {}) {
            this.options = {
                // Theme file paths
                themes: {
                    dark: options.darkTheme || './dark.css',
                    light: options.lightTheme || './light.css',
                    'high-contrast': options.highContrastTheme || './high-contrast.css',
                    'colorblind': options.colorblindTheme || './colorblind-friendly.css'
                },

                // Theme link element ID
                themeLinkId: options.themeLinkId || 'theme-link',

                // Storage key for user preference
                storageKey: options.storageKey || 'theme',

                // Whether to auto-detect system preference
                autoDetect: options.autoDetect !== false,

                // Callback when theme changes
                onThemeChange: options.onThemeChange || null,

                ...options
            };

            this.mediaQuery = null;
            this.currentTheme = null;

            this.init();
        }

        /**
         * Initialize the theme detector
         */
        init() {
            // Get the theme link element
            this.themeLink = document.getElementById(this.options.themeLinkId);

            if (!this.themeLink) {
                console.warn(`Theme link element #${this.options.themeLinkId} not found`);
                return;
            }

            // Check for saved preference
            const savedTheme = this.getSavedTheme();

            if (savedTheme) {
                // User has a saved preference, use it
                this.setTheme(savedTheme, false);
            } else if (this.options.autoDetect) {
                // No saved preference, detect system preference
                this.detectSystemTheme();
            }

            // Listen for system theme changes
            if (this.options.autoDetect) {
                this.watchSystemTheme();
            }
        }

        /**
         * Detect system theme preference
         */
        detectSystemTheme() {
            if (!window.matchMedia) {
                console.warn('matchMedia not supported, cannot detect system theme');
                return;
            }

            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            const theme = prefersDark.matches ? 'dark' : 'light';

            this.setTheme(theme, false);
        }

        /**
         * Watch for system theme changes
         */
        watchSystemTheme() {
            if (!window.matchMedia) return;

            this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // Modern browsers
            if (this.mediaQuery.addEventListener) {
                this.mediaQuery.addEventListener('change', (e) => {
                    // Only auto-switch if user hasn't saved a preference
                    if (!this.getSavedTheme()) {
                        const theme = e.matches ? 'dark' : 'light';
                        this.setTheme(theme, false);
                    }
                });
            }
            // Older browsers
            else if (this.mediaQuery.addListener) {
                this.mediaQuery.addListener((e) => {
                    if (!this.getSavedTheme()) {
                        const theme = e.matches ? 'dark' : 'light';
                        this.setTheme(theme, false);
                    }
                });
            }
        }

        /**
         * Set the theme
         * @param {string} theme - Theme name ('dark', 'light', 'high-contrast', 'colorblind')
         * @param {boolean} savePreference - Whether to save this as user preference
         */
        setTheme(theme, savePreference = true) {
            if (!this.options.themes[theme]) {
                console.warn(`Theme "${theme}" not found`);
                return;
            }

            this.currentTheme = theme;

            // Update the stylesheet
            if (this.themeLink) {
                this.themeLink.href = this.options.themes[theme];
            }

            // Save to localStorage if requested
            if (savePreference) {
                this.saveTheme(theme);
            }

            // Add data attribute to html element
            document.documentElement.setAttribute('data-theme', theme);

            // Trigger callback
            if (this.options.onThemeChange) {
                this.options.onThemeChange(theme);
            }

            console.log(`Theme set to: ${theme}${savePreference ? ' (saved)' : ' (auto-detected)'}`);
        }

        /**
         * Get the saved theme from localStorage
         */
        getSavedTheme() {
            try {
                return localStorage.getItem(this.options.storageKey);
            } catch (e) {
                console.warn('localStorage not available');
                return null;
            }
        }

        /**
         * Save theme preference to localStorage
         */
        saveTheme(theme) {
            try {
                localStorage.setItem(this.options.storageKey, theme);
            } catch (e) {
                console.warn('Could not save theme preference');
            }
        }

        /**
         * Clear saved theme preference
         * Will revert to system preference on next page load
         */
        clearSavedTheme() {
            try {
                localStorage.removeItem(this.options.storageKey);
                console.log('Saved theme preference cleared');
            } catch (e) {
                console.warn('Could not clear theme preference');
            }
        }

        /**
         * Get current theme
         */
        getCurrentTheme() {
            return this.currentTheme;
        }

        /**
         * Get system theme preference
         */
        getSystemTheme() {
            if (!window.matchMedia) return null;

            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            return prefersDark.matches ? 'dark' : 'light';
        }

        /**
         * Toggle between dark and light themes
         */
        toggle() {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme, true);
        }

        /**
         * Cycle through all available themes
         */
        cycle() {
            const themes = Object.keys(this.options.themes);
            const currentIndex = themes.indexOf(this.currentTheme);
            const nextIndex = (currentIndex + 1) % themes.length;
            this.setTheme(themes[nextIndex], true);
        }
    }

    // Export to global scope
    window.ThemeDetector = ThemeDetector;

    // Auto-initialize if data attribute is present
    document.addEventListener('DOMContentLoaded', () => {
        const autoInit = document.querySelector('[data-theme-detector]');
        if (autoInit) {
            const detector = new ThemeDetector({
                autoDetect: autoInit.dataset.themeDetector !== 'false'
            });

            // Expose instance globally
            window.auralThemeDetector = detector;
        }
    });

})();
