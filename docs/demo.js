/**
 * Aural UI Demo Navigation System
 *
 * Provides iframe-based navigation with a persistent sidebar for the
 * documentation site. Handles theme switching, component search, and
 * mobile responsive navigation.
 *
 * @module DemoNavigation
 * @version 2.0.0
 */

(function() {
    'use strict';

    // ========================================
    // STATE
    // ========================================

    let navigationData = null;
    let isInitialized = false;

    // Embedded fallback navigation data (for file:// protocol compatibility)
    const FALLBACK_NAVIGATION = {"sections":[{"id":"intro","title":"Intro","icon":"book-open","expanded":true,"items":[{"name":"What it is","file":"what-it-is.html","description":"Introduction to Aural UI"},{"name":"Changelog","file":"changelog.html","description":"Version history and updates"},{"name":"Accessibility","file":"accessibility.html","description":"Accessibility features and guidelines"},{"name":"Getting started","file":"tutorial.html","description":"Quick start guide"},{"name":"Contributing","file":"contributing.html","description":"How to contribute"}]},{"id":"documentation","title":"Documentation","icon":"file-text","expanded":true,"items":[{"name":"API Reference","file":"api.html","description":"Complete API documentation"},{"name":"Design Tokens","file":"tokens.html","description":"CSS custom properties reference"},{"name":"Font System","file":"fonts.html","description":"Typography and font families showcase"},{"name":"Utility Classes","file":"utilities.html","description":"Utility CSS classes"},{"name":"Themes","file":"themes.html","description":"Theme system and customization"},{"name":"Common Patterns","file":"patterns.html","description":"UI patterns and best practices"}]},{"id":"components","title":"Components","icon":"box","expanded":false,"items":[{"name":"Component Catalog","file":"catalog.html","description":"Browse all components"}],"subsections":[{"id":"forms-inputs","title":"Forms & Inputs","items":[{"name":"Buttons","file":"buttons.html"},{"name":"Inputs","file":"inputs.html"},{"name":"Checkboxes","file":"checkboxes.html"},{"name":"Radio Buttons","file":"radio-buttons.html"},{"name":"Switch / Toggle","file":"switch.html"},{"name":"Select","file":"select.html"},{"name":"Multi-Select","file":"multi-select.html"},{"name":"Combobox","file":"combobox.html"},{"name":"Search Bar","file":"search-bar.html"},{"name":"Slider","file":"slider.html"},{"name":"Range Slider","file":"range-slider.html"},{"name":"Rating","file":"rating.html"},{"name":"Color Picker","file":"color-picker.html"},{"name":"Date Picker","file":"date-picker.html"},{"name":"Date Range Picker","file":"date-range-picker.html"},{"name":"Time Picker","file":"time-picker.html"},{"name":"File Upload","file":"file-upload.html"}]},{"id":"data-display","title":"Data Display","items":[{"name":"Tables","file":"tables.html"},{"name":"Cards","file":"cards.html"},{"name":"Badges","file":"badges.html"},{"name":"Chips","file":"chips.html"},{"name":"Tooltips","file":"tooltips.html"},{"name":"Progress","file":"progress.html"},{"name":"Spinner","file":"spinner.html"},{"name":"Skeleton","file":"skeleton.html"},{"name":"Avatars","file":"avatars.html"},{"name":"Dividers","file":"dividers.html"},{"name":"Timeline","file":"timeline.html"},{"name":"Stats Cards","file":"stats-cards.html"},{"name":"Code Block","file":"code-block.html"}]},{"id":"navigation","title":"Navigation","items":[{"name":"Breadcrumbs","file":"breadcrumbs.html"},{"name":"Pagination","file":"pagination.html"},{"name":"Tabs","file":"tabs.html"},{"name":"Accordions","file":"accordions.html"},{"name":"Navbar","file":"navbar.html"},{"name":"Stepper","file":"stepper.html"},{"name":"Dropdowns","file":"dropdowns.html"},{"name":"Context Menu","file":"context-menu.html"},{"name":"Bottom Navigation","file":"bottom-navigation.html"}]},{"id":"feedback","title":"Overlays & Feedback","items":[{"name":"Modals","file":"modals.html"},{"name":"Dialog","file":"dialog.html"},{"name":"Drawer","file":"drawer.html"},{"name":"Alert Banner","file":"alert-banner.html"},{"name":"Toast","file":"toast.html"},{"name":"Snackbar","file":"snackbar.html"},{"name":"Popovers","file":"popovers.html"}]},{"id":"layout-media","title":"Layout & Media","items":[{"name":"Carousel","file":"carousel.html"},{"name":"Image Gallery","file":"image-gallery.html"},{"name":"Empty State","file":"empty-state.html"}]},{"id":"advanced","title":"Advanced","items":[{"name":"Command Palette","file":"command-palette.html"},{"name":"Notification Center","file":"notification-center.html"},{"name":"Tree View","file":"tree-view.html"}]}]},{"id":"theme-demos","title":"Theme Showcases","icon":"palette","expanded":false,"items":[{"name":"Neon Theme","file":"neon-demo.html","description":"Cyberpunk aesthetic demo"},{"name":"Kinetic Theme","file":"kinetic-demo.html","description":"Brutalist design demo"},{"name":"Prismatic Theme","file":"prismatic-demo.html","description":"Colorful prismatic demo"}]}],"meta":{"version":"2.1","totalComponents":53,"lastUpdated":"2026-02-13"}};

    // ========================================
    // INITIALIZATION
    // ========================================

    async function init() {
        // Prevent multiple initialization
        if (isInitialized) {
            console.warn('Demo already initialized, skipping...');
            return;
        }
        isInitialized = true;

        await loadNavigationData();
        generateSidebar();
        initializeSearch();
        initKeyboardShortcuts();
        initThemeSelector();
        loadInitialPage();

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // ========================================
    // NAVIGATION DATA
    // ========================================

    async function loadNavigationData() {
        try {
            const response = await fetch('./data/navigation.json');
            if (!response.ok) {
                throw new Error(`Failed to load navigation data: ${response.status}`);
            }
            navigationData = await response.json();
            console.log('Navigation data loaded from JSON file');
        } catch (error) {
            console.warn('Could not load navigation.json, using embedded fallback data', error);
            // Fallback to embedded navigation data (works with file:// protocol)
            navigationData = FALLBACK_NAVIGATION;
            console.log('Using fallback navigation data');
        }
    }

    // ========================================
    // SIDEBAR GENERATION
    // ========================================

    function generateSidebar() {
        const sidebar = document.getElementById('demo-sidebar');
        if (!sidebar) {
            console.error('Sidebar element not found');
            return;
        }

        // Remove any duplicate sidebars that may have been created
        const allSidebars = document.querySelectorAll('.demo-sidebar');
        if (allSidebars.length > 1) {
            console.warn(`Found ${allSidebars.length} sidebars, removing duplicates...`);
            allSidebars.forEach((el, index) => {
                if (index > 0) el.remove();
            });
        }

        const sections = navigationData?.sections || [];

        sidebar.innerHTML = `
            ${renderLogo()}
            ${renderSearchBar()}
            ${renderThemeSelector()}
            ${sections.map(section => renderSection(section)).join('')}
        `;

        attachEventListeners();
    }

    function renderLogo() {
        return `
            <a href="#landing.html" class="demo-logo" data-demo-link="landing.html" aria-label="Aural UI Home">
                <div class="demo-logo-icon" aria-hidden="true">
                    <div class="demo-soundwave">
                        ${Array(8).fill().map(() => '<div class="demo-wave-bar"></div>').join('')}
                    </div>
                </div>
                <div class="demo-logo-text">Aural UI</div>
            </a>
        `;
    }

    function renderSearchBar() {
        return `
            <div style="padding: 0 var(--space-3); margin-bottom: var(--space-5);">
                <div class="aural-search-bar">
                    <div class="aural-search-bar__wrapper">
                        <div class="aural-search-bar__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </div>
                        <input type="text" id="demo-search" class="aural-search-bar__input" placeholder="Search components (⌘+K)" autocomplete="off" aria-label="Search components">
                    </div>
                </div>
            </div>
        `;
    }

    function renderThemeSelector() {
        const themes = [
            { id: 'dark', name: 'Dark', description: 'Professional dark theme' },
            { id: 'light', name: 'Light', description: 'Clean light theme' },
            { id: 'neon', name: 'Neon', description: 'Cyberpunk aesthetic' },
            { id: 'kinetic', name: 'Kinetic', description: 'Brutalist editorial' },
            { id: 'prismatic', name: 'Prismatic', description: 'Colorful glass morphism' },
            { id: 'minimal', name: 'Minimal', description: 'Ultra-clean monochrome' },
            { id: 'warm', name: 'Warm', description: 'Cozy earth tones' }
        ];

        const currentTheme = window.AuralThemeManager ? window.AuralThemeManager.currentTheme : 'dark';

        return `
            <div class="demo-nav-section theme-selector-section">
                <label for="theme-select" class="demo-nav-title">Theme Switcher</label>
                <select class="theme-select" onchange="selectTheme(this.value)" id="theme-select" aria-label="Select theme">
                    ${themes.map(theme => `
                        <option value="${theme.id}" ${theme.id === currentTheme ? 'selected' : ''} title="${theme.description}">
                            ${theme.name}
                        </option>
                    `).join('')}
                </select>
            </div>
        `;
    }

    function renderSection(section) {
        // Determine if section should be expanded by default
        const isExpanded = section.expanded !== false;
        const collapsedClass = isExpanded ? '' : 'collapsed';
        const contentId = `nav-content-${section.id}`;

        // Handle sections with subsections (like Components)
        if (section.subsections) {
            return `
                <div class="demo-nav-section">
                    <div class="demo-nav-title collapsible ${collapsedClass}"
                         data-section="${section.id}"
                         role="button"
                         tabindex="0"
                         aria-expanded="${isExpanded}"
                         aria-controls="${contentId}">
                        ${section.title}
                        <i data-lucide="chevron-down" aria-hidden="true"></i>
                    </div>
                    <div class="demo-nav-content" id="${contentId}">
                        ${section.items ? `
                            <ul class="demo-nav-links">
                                ${section.items.map(item => renderNavLink(item)).join('')}
                            </ul>
                        ` : ''}
                        ${section.subsections.map(subsection => `
                            <div class="demo-nav-subsection">
                                <div class="demo-nav-subtitle">${subsection.title}</div>
                                <ul class="demo-nav-links">
                                    ${subsection.items.map(item => renderNavLink(item, 'components/')).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Handle regular sections
        return `
            <div class="demo-nav-section">
                <div class="demo-nav-title${section.items && section.items.length > 0 ? ` collapsible ${collapsedClass}` : ''}"
                     data-section="${section.id}"
                     ${section.items && section.items.length > 0 ? `role="button" tabindex="0" aria-expanded="${isExpanded}" aria-controls="${contentId}"` : ''}>
                    ${section.title}
                    ${section.items && section.items.length > 0 ? '<i data-lucide="chevron-down" aria-hidden="true"></i>' : ''}
                </div>
                ${section.items ? `
                    <ul class="demo-nav-links" id="${contentId}">
                        ${section.items.map(item => renderNavLink(item)).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    }

    function renderNavLink(item, pathPrefix = '') {
        const file = `${pathPrefix}${item.file}`;
        return `
            <li>
                <a class="demo-nav-link"
                   href="#${file}"
                   data-demo-link="${file}"
                   ${item.description ? `title="${item.description}"` : ''}>
                    ${item.name}
                </a>
            </li>
        `;
    }

    function attachEventListeners() {
        // Navigation links
        document.querySelectorAll('[data-demo-link]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-demo-link');
                loadPage(page);
            });
        });

        // Collapsible sections
        document.querySelectorAll('.demo-nav-title.collapsible').forEach(title => {
            // Click handler
            title.addEventListener('click', () => {
                toggleCollapsible(title);
            });

            // Keyboard handler (Enter and Space)
            title.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCollapsible(title);
                }
            });
        });
    }

    function toggleCollapsible(element) {
        const isCollapsed = element.classList.toggle('collapsed');
        // Update aria-expanded to match the new state
        element.setAttribute('aria-expanded', !isCollapsed);
    }

    // ========================================
    // PAGE LOADING
    // ========================================

    function loadPage(url) {
        const frame = document.getElementById('demo-content-frame');
        const loading = document.getElementById('demo-loading');

        if (!frame) {
            console.error('Iframe element not found');
            return;
        }

        // Show loading indicator
        if (loading) loading.classList.add('active');

        // Update active link
        updateActiveLink(url);

        // Load page in iframe
        frame.src = url;

        // Handle iframe load
        frame.onload = () => {
            if (loading) loading.classList.remove('active');
            closeDemoMenu();
            syncIframeTheme();
        };

        // Handle iframe errors
        frame.onerror = () => {
            console.error('Failed to load page:', url);
            if (loading) loading.classList.remove('active');
        };

        // Update hash (prevent infinite loops)
        if (location.hash !== '#' + url) {
            location.hash = url;
        }
    }

    function updateActiveLink(url) {
        // Remove active class from all links first
        document.querySelectorAll('.demo-nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to only the first matching link
        const matchingLink = document.querySelector(`.demo-nav-link[data-demo-link="${url}"]`);
        if (matchingLink) {
            matchingLink.classList.add('active');
        }
    }

    function loadInitialPage() {
        const hash = location.hash.slice(1);
        const page = hash || 'landing.html';

        setTimeout(() => {
            loadPage(page);
        }, 50);
    }

    // ========================================
    // THEME INTEGRATION
    // ========================================

    function initThemeSelector() {
        // Wait for ThemeManager to be available
        if (!window.AuralThemeManager) {
            console.error('AuralThemeManager not found! Make sure theme-manager.js is loaded.');
            return;
        }

        const themeManager = window.AuralThemeManager;

        // Update UI to reflect current theme
        updateThemeUI(themeManager.getCurrentTheme());

        // Listen for theme changes
        themeManager.onChange((themeId) => {
            const theme = themeManager.getAllThemes().find(t => t.id === themeId);
            updateThemeUI(theme);
            reloadIframeWithTheme();
        });

        // Set active state on theme options
        updateThemeOptions(themeManager.currentTheme);
    }

    function updateThemeUI(theme) {
        // Update select dropdown value
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            themeSelect.value = theme.id;
        }

        // Recreate icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function updateThemeOptions(themeId) {
        // Update select dropdown value
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            themeSelect.value = themeId;
        }
    }

    function syncIframeTheme() {
        const frame = document.getElementById('demo-content-frame');
        if (!frame || !window.AuralThemeManager) {
            return;
        }

        try {
            // Check if iframe is from same origin before accessing contentDocument
            // This will throw a SecurityError for cross-origin iframes
            let iframeDoc;
            try {
                iframeDoc = frame.contentDocument || frame.contentWindow.document;
            } catch (e) {
                // Cross-origin iframe detected - cannot access contentDocument
                console.warn('Cannot sync theme: iframe is cross-origin', e);
                // Consider using postMessage for cross-origin communication
                // frame.contentWindow.postMessage({ type: 'THEME_CHANGE', theme: currentTheme }, '*');
                return;
            }

            if (!iframeDoc) {
                return;
            }

            const currentTheme = window.AuralThemeManager.currentTheme;
            const iframeThemeLink = iframeDoc.getElementById('theme-link');

            if (iframeThemeLink) {
                const iframeSrc = frame.src;
                const isInSubdirectory = iframeSrc.includes('/components/') || iframeSrc.includes('/error-pages/');
                const relativePath = isInSubdirectory ? '../' : './';

                // Get theme info
                const theme = window.AuralThemeManager.getCurrentTheme();

                // Update theme CSS
                iframeThemeLink.href = relativePath + theme.file;
                console.log('Synced iframe theme to:', theme.name);

                // Load theme-specific components
                loadIframeThemeComponents(iframeDoc, currentTheme, relativePath);

                // Load theme-specific scripts
                loadIframeThemeScripts(iframeDoc, currentTheme, relativePath);
            }

            // Hide iframe theme toggle if it exists
            const iframeThemeToggle = iframeDoc.querySelector('.theme-toggle');
            if (iframeThemeToggle) {
                iframeThemeToggle.style.display = 'none';
            }

            // Re-initialize Lucide icons in iframe
            // NOTE: Optional chaining (?.) requires transpilation for older browser support (IE11, pre-2020 browsers)
            if (frame.contentWindow && frame.contentWindow.lucide) {
                frame.contentWindow.lucide.createIcons();
            }
        } catch (e) {
            console.error('Could not sync iframe theme:', e);
        }
    }

    function loadIframeThemeComponents(doc, themeName, relativePath) {
        // Remove existing theme component links
        doc.querySelectorAll('link[data-theme-component]').forEach(link => link.remove());

        const themeComponents = {
            'kinetic': ['kinetic-buttons.css', 'kinetic-cards.css'],
            'neon': ['fonts-neon.css', 'deluxe-neon.css'],
            'neon-refined': ['fonts-neon.css', 'buttons-refined.css', 'cards-refined.css']
        };

        const components = themeComponents[themeName];
        if (components) {
            const head = doc.head || doc.getElementsByTagName('head')[0];
            components.forEach(filename => {
                const link = doc.createElement('link');
                link.rel = 'stylesheet';
                link.href = relativePath + filename;
                link.setAttribute('data-theme-component', themeName);
                head.appendChild(link);
            });
        }
    }

    function loadIframeThemeScripts(doc, themeName, relativePath) {
        // Remove existing theme scripts
        doc.querySelectorAll('script[data-theme-script]').forEach(script => script.remove());

        // Load neon-effects.js for neon themes
        if (themeName === 'neon' || themeName === 'neon-refined') {
            const script = doc.createElement('script');
            script.src = relativePath + 'neon-effects.js';
            script.setAttribute('data-theme-script', themeName);
            script.onload = () => {
                if (doc.body && !doc.body.hasAttribute('data-neon-effects')) {
                    doc.body.setAttribute('data-neon-effects', '');
                    // NOTE: Optional chaining (?.) requires transpilation for older browser support (IE11, pre-2020 browsers)
                    if (doc.defaultView.Aural?.NeonEffects) {
                        doc.defaultView.Aural.NeonEffects.initAll({
                            particles: 30,
                            gradientMesh: true,
                            cursorGlow: false
                        });
                    }
                }
            };
            doc.body.appendChild(script);
        }
    }

    function reloadIframeWithTheme() {
        const iframe = document.getElementById('demo-content-frame');
        if (!iframe || !iframe.src) return;

        // Setup onload handler before reloading
        iframe.onload = function() {
            setTimeout(() => {
                syncIframeTheme();
            }, 150);
        };

        // Force reload by re-setting the src
        const currentSrc = iframe.src;
        iframe.src = '';
        setTimeout(() => {
            iframe.src = currentSrc;
        }, 50);
    }

    // ========================================
    // SEARCH FUNCTIONALITY
    // ========================================

    function initializeSearch() {
        const searchInput = document.getElementById('demo-search');
        if (!searchInput) return;

        // Build search index
        const searchIndex = buildSearchIndex();

        // Handle search input
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            performSearch(term, searchIndex);
        });

        // Update placeholder with keyboard shortcut
        const isMac = /Mac/.test(navigator.platform);
        const modifier = isMac ? '⌘' : 'Ctrl';
        searchInput.placeholder = `Search components (${modifier}+K)`;
    }

    function buildSearchIndex() {
        const index = [];

        document.querySelectorAll('.demo-nav-link').forEach(link => {
            const text = link.textContent.toLowerCase().trim();
            const file = link.getAttribute('data-demo-link');
            const section = link.closest('.demo-nav-section')?.querySelector('.demo-nav-title')?.textContent.trim() || '';

            index.push({
                text,
                file,
                element: link,
                section: section.toLowerCase()
            });
        });

        return index;
    }

    function performSearch(term, searchIndex) {
        if (term === '') {
            // Show all
            searchIndex.forEach(item => item.element.parentElement.style.display = '');
            document.querySelectorAll('.demo-nav-section').forEach(s => s.style.display = '');
            return;
        }

        // Fuzzy search with scoring
        const results = searchIndex
            .map(item => ({
                ...item,
                score: calculateRelevance(term, item.text, item.section)
            }))
            .filter(item => item.score > 0);

        // Hide all initially
        searchIndex.forEach(item => item.element.parentElement.style.display = 'none');

        // Show matches
        results.forEach(item => item.element.parentElement.style.display = '');

        // Show/hide sections based on visible items
        document.querySelectorAll('.demo-nav-section').forEach(section => {
            const hasVisible = section.querySelector('.demo-nav-link:not([style*="none"])');
            section.style.display = hasVisible ? '' : 'none';
        });
    }

    function calculateRelevance(term, text, section) {
        let score = 0;

        // Exact match
        if (text === term) {
            score += 100;
        }
        // Starts with
        else if (text.startsWith(term)) {
            score += 80;
        }
        // Contains word
        else if (text.includes(term)) {
            score += 60;
        }
        // Fuzzy match
        else {
            let termIndex = 0;
            for (let i = 0; i < text.length && termIndex < term.length; i++) {
                if (text[i] === term[termIndex]) {
                    termIndex++;
                    score += 5;
                }
            }
            if (termIndex !== term.length) score = 0;
        }

        // Boost if section matches
        if (section.includes(term)) {
            score += 20;
        }

        return score;
    }

    // ========================================
    // KEYBOARD SHORTCUTS
    // ========================================

    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            const searchInput = document.getElementById('demo-search');

            // Cmd/Ctrl + K for search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                // NOTE: Optional chaining (?.) requires transpilation for older browser support (IE11, pre-2020 browsers)
                searchInput?.focus();
            }

            // Escape to clear search
            if (e.key === 'Escape' && searchInput === document.activeElement) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.blur();
            }
        });
    }

    // ========================================
    // PUBLIC API
    // ========================================

    window.selectTheme = function(themeName) {
        if (!window.AuralThemeManager) {
            console.error('AuralThemeManager not found!');
            return;
        }

        console.log('Switching to theme:', themeName);

        // Apply theme via ThemeManager
        window.AuralThemeManager.applyTheme(themeName);

        // Update active state in UI
        updateThemeOptions(themeName);

        // NOTE: reloadIframeWithTheme() is called by the onChange callback
        // in initThemeSelector(), so we don't need to call it here
        // (calling it twice was potentially causing issues)

        // Recreate icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };

    window.toggleDemoMenu = function() {
        const sidebar = document.getElementById('demo-sidebar');
        const overlay = document.getElementById('demo-overlay');
        const toggle = document.querySelector('.demo-mobile-toggle');

        // NOTE: Optional chaining (?.) requires transpilation for older browser support (IE11, pre-2020 browsers)
        const isActive = sidebar?.classList.toggle('active');
        overlay?.classList.toggle('active');

        // Lock/unlock body scroll on mobile
        if (isActive) {
            document.body.classList.add('sidebar-open');
        } else {
            document.body.classList.remove('sidebar-open');
        }

        // Update aria attributes
        if (toggle) {
            toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        }
        if (overlay) {
            overlay.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        }
    };

    window.closeDemoMenu = function() {
        const sidebar = document.getElementById('demo-sidebar');
        const overlay = document.getElementById('demo-overlay');
        const toggle = document.querySelector('.demo-mobile-toggle');

        // NOTE: Optional chaining (?.) requires transpilation for older browser support (IE11, pre-2020 browsers)
        sidebar?.classList.remove('active');
        overlay?.classList.remove('active');

        // Unlock body scroll
        document.body.classList.remove('sidebar-open');

        // Update aria attributes
        if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
        }
        if (overlay) {
            overlay.setAttribute('aria-hidden', 'true');
        }
    };

    // ========================================
    // EVENT LISTENERS
    // ========================================

    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const hash = location.hash.slice(1);
        if (hash) loadPage(hash);
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
