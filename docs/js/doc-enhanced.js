/**
 * Enhanced Documentation JavaScript
 * Interactive features for documentation pages
 */

(function() {
    'use strict';

    // ========================================
    // AUTO-GENERATE TABLE OF CONTENTS
    // ========================================

    function generateTableOfContents() {
        const tocContainer = document.querySelector('.doc-toc-list');
        const mainContent = document.querySelector('.doc-main');

        if (!tocContainer || !mainContent) return;

        // Find all h2 sections with IDs
        const headings = mainContent.querySelectorAll('h2[id], .section-title[id]');

        if (headings.length === 0) return;

        headings.forEach(heading => {
            const id = heading.id;
            const text = heading.textContent;

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = text;
            a.className = 'doc-toc-link';

            li.appendChild(a);
            tocContainer.appendChild(li);
        });
    }

    // ========================================
    // SCROLL SPY FOR TOC
    // ========================================

    function initScrollSpy() {
        const tocLinks = document.querySelectorAll('.doc-toc-link');
        const sections = document.querySelectorAll('.content-section[id]');

        if (tocLinks.length === 0 || sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove active class from all links
                        tocLinks.forEach(link => link.classList.remove('active'));

                        // Add active class to current link
                        const activeLink = document.querySelector(
                            `.doc-toc-link[href="#${entry.target.id}"]`
                        );
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
            },
            {
                rootMargin: '-100px 0px -80% 0px',
                threshold: 0
            }
        );

        sections.forEach(section => observer.observe(section));
    }

    // ========================================
    // COPY TO CLIPBOARD
    // ========================================

    function initCodeCopy() {
        // Find all pre elements and wrap them in code-block
        document.querySelectorAll('pre:not(.code-block pre)').forEach(pre => {
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block';

            // Extract language from class if present
            const code = pre.querySelector('code');
            let language = 'code';
            if (code && code.className) {
                const match = code.className.match(/language-(\w+)/);
                if (match) language = match[1];
            }

            // Create header
            const header = document.createElement('div');
            header.className = 'code-header';
            header.innerHTML = `
                <span class="code-language">${language}</span>
                <button class="code-copy" aria-label="Copy code">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy</span>
                </button>
            `;

            // Insert wrapper before pre
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(header);
            wrapper.appendChild(pre);

            // Add copy functionality
            const copyBtn = header.querySelector('.code-copy');
            copyBtn.addEventListener('click', async () => {
                const codeText = pre.textContent;

                try {
                    await navigator.clipboard.writeText(codeText);

                    // Visual feedback
                    copyBtn.classList.add('copied');
                    const span = copyBtn.querySelector('span');
                    const originalText = span.textContent;
                    span.textContent = 'Copied!';

                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                        span.textContent = originalText;
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                    // Fallback for older browsers
                    const textarea = document.createElement('textarea');
                    textarea.value = codeText;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);

                    copyBtn.classList.add('copied');
                    setTimeout(() => copyBtn.classList.remove('copied'), 2000);
                }
            });
        });
    }

    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================

    function initScrollToTop() {
        // Create button if doesn't exist
        let scrollBtn = document.querySelector('.scroll-to-top');

        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            scrollBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            `;
            document.body.appendChild(scrollBtn);
        }

        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            });
        });
    }

    // ========================================
    // ADD IDS TO HEADINGS WITHOUT IDS
    // ========================================

    function addIDsToHeadings() {
        const mainContent = document.querySelector('.doc-main');
        if (!mainContent) return;

        // Find h2 and section-title without IDs
        const headings = mainContent.querySelectorAll('h2:not([id]), .section-title:not([id])');

        headings.forEach(heading => {
            // Generate ID from text content
            const text = heading.textContent.trim();
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');

            heading.id = id;

            // Add parent section ID if heading is inside content-section
            const section = heading.closest('.content-section');
            if (section && !section.id) {
                section.id = id;
            }
        });
    }

    // ========================================
    // ENHANCE API METHODS
    // ========================================

    function enhanceAPIMethods() {
        document.querySelectorAll('.api-method h4').forEach(h4 => {
            if (!h4.querySelector('.api-badge')) {
                const badge = document.createElement('span');
                badge.className = 'api-badge';
                badge.textContent = 'method';

                // Wrap in header div
                const header = document.createElement('div');
                header.className = 'api-method-header';
                h4.parentNode.insertBefore(header, h4);
                header.appendChild(h4);
                header.appendChild(badge);
            }
        });
    }

    // ========================================
    // ANIMATE ON SCROLL
    // ========================================

    function initAnimateOnScroll() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        document.querySelectorAll('.feature-card, .api-method, .highlight-box').forEach(el => {
            observer.observe(el);
        });
    }

    // ========================================
    // INITIALIZE EVERYTHING
    // ========================================

    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        console.log('Initializing enhanced documentation features...');

        // Add IDs first (needed for TOC generation)
        addIDsToHeadings();

        // Generate TOC if container exists
        generateTableOfContents();

        // Initialize features
        initScrollSpy();
        initCodeCopy();
        initScrollToTop();
        initSmoothScroll();
        enhanceAPIMethods();
        initAnimateOnScroll();

        // Initialize lucide icons if available
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        console.log('Enhanced documentation features initialized!');
    }

    // Auto-initialize
    init();

})();
