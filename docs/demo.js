/**
 * Aural UI Demo Navigation System
 * Simple iframe-based navigation with persistent sidebar
 */

(function() {
    'use strict';

    // Component list (only files that actually exist)
    const COMPONENTS = {
        'Forms & Inputs': [
            { name: 'Buttons', file: 'buttons.html' },
            { name: 'Inputs', file: 'inputs.html' },
            { name: 'Checkboxes', file: 'checkboxes.html' },
            { name: 'Radio Buttons', file: 'radio-buttons.html' },
            { name: 'Switch / Toggle', file: 'switch.html' },
            { name: 'Select', file: 'select.html' },
            { name: 'Multi-Select', file: 'multi-select.html' },
            { name: 'Combobox', file: 'combobox.html' },
            { name: 'Search Bar', file: 'search-bar.html' },
            { name: 'Slider', file: 'slider.html' },
            { name: 'Range Slider', file: 'range-slider.html' },
            { name: 'Rating', file: 'rating.html' },
            { name: 'Color Picker', file: 'color-picker.html' },
            { name: 'Date Picker', file: 'date-picker.html' },
            { name: 'Date Range Picker', file: 'date-range-picker.html' },
            { name: 'Time Picker', file: 'time-picker.html' },
            { name: 'File Upload', file: 'file-upload.html' }
        ],
        'Data Display': [
            { name: 'Tables', file: 'tables.html' },
            { name: 'Cards', file: 'cards.html' },
            { name: 'Badges', file: 'badges.html' },
            { name: 'Chips', file: 'chips.html' },
            { name: 'Tooltips', file: 'tooltips.html' },
            { name: 'Progress', file: 'progress.html' },
            { name: 'Spinner', file: 'spinner.html' },
            { name: 'Skeleton', file: 'skeleton.html' },
            { name: 'Avatars', file: 'avatars.html' },
            { name: 'Dividers', file: 'dividers.html' },
            { name: 'Timeline', file: 'timeline.html' },
            { name: 'Stats Cards', file: 'stats-cards.html' },
            { name: 'Code Block', file: 'code-block.html' }
        ],
        'Navigation': [
            { name: 'Breadcrumbs', file: 'breadcrumbs.html' },
            { name: 'Pagination', file: 'pagination.html' },
            { name: 'Tabs', file: 'tabs.html' },
            { name: 'Accordions', file: 'accordions.html' },
            { name: 'Navbar', file: 'navbar.html' },
            { name: 'Stepper', file: 'stepper.html' },
            { name: 'Dropdowns', file: 'dropdowns.html' },
            { name: 'Context Menu', file: 'context-menu.html' },
            { name: 'Bottom Navigation', file: 'bottom-navigation.html' }
        ],
        'Overlays & Feedback': [
            { name: 'Modals', file: 'modals.html' },
            { name: 'Dialog', file: 'dialog.html' },
            { name: 'Drawer', file: 'drawer.html' },
            { name: 'Alert Banner', file: 'alert-banner.html' },
            { name: 'Toast', file: 'toast.html' },
            { name: 'Snackbar', file: 'snackbar.html' },
            { name: 'Popovers', file: 'popovers.html' }
        ],
        'Layout & Media': [
            { name: 'Carousel', file: 'carousel.html' },
            { name: 'Image Gallery', file: 'image-gallery.html' },
            { name: 'Empty State', file: 'empty-state.html' }
        ],
        'Advanced': [
            { name: 'Command Palette', file: 'command-palette.html' },
            { name: 'Notification Center', file: 'notification-center.html' },
            { name: 'Tree View', file: 'tree-view.html' }
        ]
    };

    // Initialize
    function init() {
        generateSidebar();
        initializeSearch();
        initializeTheme();
        loadInitialPage();

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Generate sidebar navigation
    function generateSidebar() {
        const sidebar = document.getElementById('demo-sidebar');

        let html = `
            <a href="#/" class="demo-logo" data-demo-link="landing.html">
                <div class="demo-logo-icon">
                    <div class="demo-soundwave">
                        ${Array(8).fill().map(() => '<div class="demo-wave-bar"></div>').join('')}
                    </div>
                </div>
                <div class="demo-logo-text">Aural UI</div>
            </a>

            <div class="demo-search">
                <i data-lucide="search" class="demo-search-icon"></i>
                <input type="text" id="demo-search" placeholder="Search components..." autocomplete="off">
            </div>

            <div class="demo-nav-section">
                <div class="demo-nav-title">Intro</div>
                <ul class="demo-nav-links">
                    <li><a class="demo-nav-link" data-demo-link="landing.html">What it is</a></li>
                    <li><a class="demo-nav-link" data-demo-link="accessibility.html">Accessibility</a></li>
                    <li><a class="demo-nav-link" data-demo-link="getting-started.html">Getting started</a></li>
                    <li><a class="demo-nav-link" data-demo-link="contributing.html">Contributing</a></li>
                </ul>
            </div>

            <div class="demo-nav-section">
                <div class="demo-nav-title">Documentation</div>
                <ul class="demo-nav-links">
                    <li><a class="demo-nav-link" data-demo-link="api.html">API Reference</a></li>
                    <li><a class="demo-nav-link" data-demo-link="tokens.html">Design Tokens</a></li>
                    <li><a class="demo-nav-link" data-demo-link="utilities.html">Utility Classes</a></li>
                    <li><a class="demo-nav-link" data-demo-link="themes.html">Themes</a></li>
                    <li><a class="demo-nav-link" data-demo-link="theme-builder.html">Theme Builder</a></li>
                    <li><a class="demo-nav-link" data-demo-link="examples.html">Examples</a></li>
                </ul>
            </div>
        `;

        // Add component sections (collapsed by default)
        Object.entries(COMPONENTS).forEach(([section, components]) => {
            html += `
                <div class="demo-nav-section">
                    <div class="demo-nav-title collapsible collapsed" onclick="this.classList.toggle('collapsed')">
                        ${section}
                        <i data-lucide="chevron-down"></i>
                    </div>
                    <ul class="demo-nav-links">
                        ${components.map(comp => `
                            <li><a class="demo-nav-link" data-demo-link="components/${comp.file}">${comp.name}</a></li>
                        `).join('')}
                    </ul>
                </div>
            `;
        });

        sidebar.innerHTML = html;

        // Add click handlers
        document.querySelectorAll('[data-demo-link]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-demo-link');
                loadPage(page);
            });
        });
    }

    // Load a page
    function loadPage(url) {
        const frame = document.getElementById('demo-content-frame');
        const loading = document.getElementById('demo-loading');

        if (!frame) {
            console.error('Iframe element not found');
            return;
        }

        // Show loading
        if (loading) loading.classList.add('active');

        // Update active link
        document.querySelectorAll('.demo-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-demo-link') === url) {
                link.classList.add('active');
            }
        });

        // Load page in iframe
        frame.src = url;

        // Hide loading when iframe loads
        frame.onload = () => {
            if (loading) loading.classList.remove('active');
            closeDemoMenu();

            // Sync theme with iframe after a short delay
            setTimeout(() => {
                syncIframeTheme();
            }, 100);
        };

        // Handle iframe loading errors
        frame.onerror = () => {
            console.error('Failed to load page:', url);
            if (loading) loading.classList.remove('active');
        };

        // Update hash (prevent infinite loops)
        if (location.hash !== '#' + url) {
            location.hash = url;
        }
    }

    // Sync theme with iframe
    function syncIframeTheme() {
        const frame = document.getElementById('demo-content-frame');
        if (!frame || !frame.contentDocument) {
            console.log('Cannot sync theme - iframe not ready');
            return;
        }

        try {
            const currentTheme = localStorage.getItem('theme') || 'dark';
            const iframeThemeLink = frame.contentDocument.getElementById('theme-link');

            if (iframeThemeLink) {
                const iframeSrc = frame.src;
                const isInComponents = iframeSrc.includes('/components/');
                const relativePath = isInComponents ? '../' : './';
                const newHref = currentTheme === 'dark' ? `${relativePath}dark.css` : `${relativePath}light.css`;

                iframeThemeLink.href = newHref;
                console.log('Synced iframe theme to:', newHref);
            }

            // Hide iframe theme toggle if it exists
            const iframeThemeToggle = frame.contentDocument.querySelector('.theme-toggle');
            if (iframeThemeToggle) {
                iframeThemeToggle.style.display = 'none';
            }

            // Re-initialize Lucide icons in iframe
            if (frame.contentWindow.lucide) {
                frame.contentWindow.lucide.createIcons();
                console.log('Re-initialized Lucide icons in iframe');
            }
        } catch (e) {
            console.error('Could not sync iframe theme:', e);
        }
    }

    // Load initial page
    function loadInitialPage() {
        const hash = location.hash.slice(1);
        const page = hash || 'landing.html';

        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            loadPage(page);
        }, 50);
    }

    // Initialize search
    function initializeSearch() {
        const searchInput = document.getElementById('demo-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase().trim();

                document.querySelectorAll('.demo-nav-section').forEach(section => {
                    const links = section.querySelectorAll('.demo-nav-link');
                    let visible = 0;

                    links.forEach(link => {
                        const text = link.textContent.toLowerCase();
                        const match = text.includes(term) || term === '';
                        link.parentElement.style.display = match ? '' : 'none';
                        if (match) visible++;
                    });

                    // Hide empty sections (except Intro/Docs)
                    const title = section.querySelector('.demo-nav-title');
                    if (title && !['Intro', 'Documentation'].includes(title.textContent.trim())) {
                        section.style.display = visible > 0 || term === '' ? '' : 'none';
                    }
                });
            });
        }
    }

    // Initialize theme
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        const themeLink = document.getElementById('theme-link');

        themeLink.href = savedTheme === 'dark' ? 'dark.css' : 'light.css';

        const icon = document.querySelector('.demo-theme-toggle i');
        if (icon) {
            icon.setAttribute('data-lucide', savedTheme === 'dark' ? 'sun' : 'moon');
        }
    }

    // Public functions
    window.toggleDemoTheme = function() {
        const themeLink = document.getElementById('theme-link');
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        console.log('Toggling theme from', currentTheme, 'to', newTheme);

        // Update demo page theme
        themeLink.href = newTheme === 'dark' ? 'dark.css' : 'light.css';
        localStorage.setItem('theme', newTheme);

        // Reload iframe to apply new theme
        const iframe = document.getElementById('demo-content-frame');
        if (iframe && iframe.src) {
            console.log('Reloading iframe from:', iframe.src);

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
                console.log('Iframe reloaded with new theme:', newTheme);
            }, 50);
        } else {
            console.error('No iframe or iframe.src found');
        }

        // Update icon
        const icon = document.querySelector('.demo-theme-toggle i');
        if (icon) {
            icon.setAttribute('data-lucide', newTheme === 'dark' ? 'sun' : 'moon');
        }

        // Recreate icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };

    window.toggleDemoMenu = function() {
        document.getElementById('demo-sidebar').classList.toggle('active');
        document.getElementById('demo-overlay').classList.toggle('active');
    };

    window.closeDemoMenu = function() {
        document.getElementById('demo-sidebar').classList.remove('active');
        document.getElementById('demo-overlay').classList.remove('active');
    };

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
