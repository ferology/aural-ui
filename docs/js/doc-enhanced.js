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

        // Feature detection: Check if IntersectionObserver is available
        if ('IntersectionObserver' in window) {
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
        } else {
            // Fallback for browsers without IntersectionObserver support
            initScrollSpyFallback(tocLinks, sections);
        }
    }

    /**
     * Scroll spy fallback for older browsers without IntersectionObserver
     */
    function initScrollSpyFallback(tocLinks, sections) {
        let ticking = false;

        function updateActiveLink() {
            const scrollPosition = window.scrollY + 150;

            // Find the current section
            let currentSection = null;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    currentSection = section;
                }
            });

            if (currentSection) {
                // Remove active class from all links
                tocLinks.forEach(link => link.classList.remove('active'));

                // Add active class to current link
                const activeLink = document.querySelector(
                    `.doc-toc-link[href="#${currentSection.id}"]`
                );
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }

            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveLink);
                ticking = true;
            }
        }, { passive: true });

        // Initial update
        updateActiveLink();
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
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================

    function initSmoothScroll() {
        // Check if smooth scrolling is supported
        const supportsSmooth = 'scrollBehavior' in document.documentElement.style;

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();

                    if (supportsSmooth) {
                        // Use native smooth scrolling
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // Fallback for older browsers: basic scroll
                        target.scrollIntoView(true);
                    }

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
        const elements = document.querySelectorAll('.feature-card, .api-method, .highlight-box');

        if (elements.length === 0) return;

        // Feature detection: Check if IntersectionObserver is available
        if ('IntersectionObserver' in window) {
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

            elements.forEach(el => observer.observe(el));
        } else {
            // Fallback: Just add animation class immediately for older browsers
            elements.forEach(el => el.classList.add('animate-fade-in-up'));
        }
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
