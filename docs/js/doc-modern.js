/**
 * Modern Documentation JavaScript
 * Interactive features for modern, engaging documentation
 */

(function() {
    'use strict';

    // ========================================
    // AUTO-GENERATE TABLE OF CONTENTS
    // ========================================

    function generateModernTOC() {
        const tocList = document.querySelector('.doc-modern-toc-list');
        const mainContent = document.querySelector('.doc-modern-main, .doc-main');

        if (!tocList || !mainContent) return;

        // Find all sections with IDs
        const sections = mainContent.querySelectorAll('.doc-modern-section[id], .content-section[id]');

        if (sections.length === 0) return;

        tocList.innerHTML = '';

        sections.forEach((section, index) => {
            const id = section.id;
            const titleEl = section.querySelector('.doc-modern-section-title, .section-title, h2');
            const text = titleEl ? titleEl.textContent.trim() : `Section ${index + 1}`;

            const li = document.createElement('li');
            li.style.animationDelay = `${index * 0.05}s`;
            li.classList.add('animate-fade-in');

            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = text;
            a.className = 'doc-modern-toc-link';

            // Add icon
            const icon = document.createElement('span');
            icon.innerHTML = '→';
            icon.style.opacity = '0';
            icon.style.transition = 'opacity 0.2s';
            a.appendChild(icon);

            a.addEventListener('mouseenter', () => {
                icon.style.opacity = '1';
            });

            a.addEventListener('mouseleave', () => {
                icon.style.opacity = '0';
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });
    }

    // ========================================
    // MODERN SCROLL SPY
    // ========================================

    function initModernScrollSpy() {
        const tocLinks = document.querySelectorAll('.doc-modern-toc-link');
        const sections = document.querySelectorAll('.doc-modern-section[id], .content-section[id]');

        if (tocLinks.length === 0 || sections.length === 0) return;

        const observerOptions = {
            rootMargin: '-100px 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all
                    tocLinks.forEach(link => link.classList.remove('active'));

                    // Add to current
                    const activeLink = document.querySelector(
                        `.doc-modern-toc-link[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add('active');

                        // Smooth scroll TOC into view if needed
                        const toc = activeLink.closest('.doc-modern-toc');
                        if (toc) {
                            const linkTop = activeLink.offsetTop;
                            const tocScrollTop = toc.scrollTop;
                            const tocHeight = toc.clientHeight;

                            if (linkTop < tocScrollTop || linkTop > tocScrollTop + tocHeight - 100) {
                                toc.scrollTo({
                                    top: linkTop - 100,
                                    behavior: 'smooth'
                                });
                            }
                        }
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // ========================================
    // ENHANCED CODE COPY
    // ========================================

    function initModernCodeCopy() {
        document.querySelectorAll('pre').forEach(pre => {
            // Skip if already wrapped
            if (pre.closest('.doc-code-block')) return;

            const code = pre.querySelector('code');
            let language = 'code';

            // Try to extract language
            if (code && code.className) {
                const match = code.className.match(/language-(\w+)/);
                if (match) language = match[1];
            }

            // Create modern code block wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'doc-code-block';

            const header = document.createElement('div');
            header.className = 'doc-code-header';
            header.innerHTML = `
                <div class="doc-code-info">
                    <div class="doc-code-dots">
                        <div class="doc-code-dot"></div>
                        <div class="doc-code-dot"></div>
                        <div class="doc-code-dot"></div>
                    </div>
                    <span class="doc-code-language">${language}</span>
                </div>
                <button class="doc-code-copy" aria-label="Copy code to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy</span>
                </button>
            `;

            // Wrap pre element
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(header);
            wrapper.appendChild(pre);

            // Add copy functionality
            const copyBtn = header.querySelector('.doc-code-copy');
            copyBtn.addEventListener('click', async () => {
                const codeText = pre.textContent;

                try {
                    await navigator.clipboard.writeText(codeText);
                    showCopySuccess(copyBtn);
                } catch (err) {
                    // Fallback for older browsers
                    fallbackCopy(codeText);
                    showCopySuccess(copyBtn);
                }
            });
        });
    }

    function showCopySuccess(button) {
        button.classList.add('copied');
        const span = button.querySelector('span');
        const icon = button.querySelector('svg');

        const originalText = span.textContent;

        // Change icon to checkmark
        icon.innerHTML = `
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        `;
        span.textContent = 'Copied!';

        setTimeout(() => {
            button.classList.remove('copied');
            span.textContent = originalText;
            icon.innerHTML = `
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            `;
        }, 2000);
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHORS
    // ========================================

    function initModernSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    history.pushState(null, null, href);
                }
            });
        });
    }

    // ========================================
    // ADD IDS TO SECTIONS
    // ========================================

    function addIDsToSections() {
        const main = document.querySelector('.doc-modern-main, .doc-main');
        if (!main) return;

        // Find sections without IDs
        const sections = main.querySelectorAll('.doc-modern-section:not([id]), .content-section:not([id])');

        sections.forEach(section => {
            const titleEl = section.querySelector('.doc-modern-section-title, .section-title, h2');
            if (!titleEl) return;

            const text = titleEl.textContent.trim();
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');

            section.id = id;
        });
    }

    // ========================================
    // ANIMATE ON SCROLL
    // ========================================

    function initModernAnimateOnScroll() {
        const elements = document.querySelectorAll(
            '.doc-feature-card, .doc-callout, .doc-stat-card, .doc-code-block, .doc-modern-section'
        );

        if (elements.length === 0) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(el => observer.observe(el));
    }

    // ========================================
    // MODERN SCROLL TO TOP
    // ========================================

    function initModernScrollToTop() {
        let scrollBtn = document.querySelector('.scroll-to-top');

        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            scrollBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            `;
            document.body.appendChild(scrollBtn);
        }

        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 600) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }

            lastScroll = currentScroll;
        }, { passive: true });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // READING PROGRESS BAR
    // ========================================

    function initReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--color-primary), var(--color-secondary, var(--color-primary)));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }, { passive: true });
    }

    // ========================================
    // STATS COUNTER ANIMATION
    // ========================================

    function animateStats() {
        const statValues = document.querySelectorAll('.doc-stat-value');

        if (statValues.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent.trim();
                    const isNumber = /^\d+$/.test(finalValue);

                    if (isNumber) {
                        const final = parseInt(finalValue);
                        let current = 0;
                        const increment = final / 50;
                        const duration = 1000;
                        const stepTime = duration / 50;

                        target.textContent = '0';

                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= final) {
                                target.textContent = final;
                                clearInterval(timer);
                            } else {
                                target.textContent = Math.floor(current);
                            }
                        }, stepTime);
                    }

                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        statValues.forEach(stat => observer.observe(stat));
    }

    // ========================================
    // INITIALIZE EVERYTHING
    // ========================================

    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        console.log('Initializing modern documentation features...');

        // Core features
        addIDsToSections();
        generateModernTOC();
        initModernScrollSpy();
        initModernCodeCopy();
        initModernSmoothScroll();
        initModernScrollToTop();
        initModernAnimateOnScroll();
        initReadingProgress();
        animateStats();

        // Initialize lucide icons if available
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        console.log('Modern documentation features initialized!');
    }

    // Auto-initialize
    init();

    // Expose utilities for external use
    window.ModernDocs = {
        generateTOC: generateModernTOC,
        refresh: init
    };

})();
