/**
 * AURAL UI - JavaScript Utilities
 *
 * Interactive component APIs
 */

const Aural = {
    /**
     * Show a toast notification
     * @param {string} message - The message to display
     * @param {string} type - Type: 'success', 'error', 'warning', 'info'
     * @param {string} title - Optional custom title
     * @param {number} duration - Auto-dismiss duration in ms (default: 5000)
     */
    showToast(message, type = 'info', title = null, duration = 5000) {
        // Create container if it doesn't exist
        let container = document.getElementById('aural-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'aural-toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        // Icons for each type
        const icons = {
            success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
            error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
            warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
            info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
        };

        // Default titles
        const defaultTitles = {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Info'
        };

        // Build toast HTML
        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.info}</div>
            <div class="toast-content">
                <div class="toast-title">${title || defaultTitles[type]}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        `;

        // Add to container
        container.appendChild(toast);

        // Close button handler
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 300);
        });

        // Auto-remove after duration
        if (duration > 0) {
            setTimeout(() => {
                toast.classList.add('toast-exit');
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }

        return toast;
    },

    /**
     * Open a modal
     * @param {string} modalId - The ID of the modal element
     */
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('open');
            // Trap focus in modal
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    },

    /**
     * Close a modal
     * @param {string} modalId - The ID of the modal element
     */
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('open');
            // Restore body scroll
            document.body.style.overflow = '';
        }
    },

    /**
     * Toggle modal open/close
     * @param {string} modalId - The ID of the modal element
     */
    toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            if (modal.classList.contains('open')) {
                this.closeModal(modalId);
            } else {
                this.openModal(modalId);
            }
        }
    },

    /**
     * Initialize all modals to close on ESC key
     */
    initModals() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModals = document.querySelectorAll('.modal-overlay.open');
                openModals.forEach(modal => {
                    this.closeModal(modal.id);
                });
            }
        });

        // Close modal when clicking overlay (not modal content)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal(e.target.id);
            }
        });
    },

    // ========================================
    // TABS
    // ========================================

    /**
     * Initialize tabs with keyboard navigation
     */
    initTabs() {
        document.addEventListener('DOMContentLoaded', () => {
            const tabLists = document.querySelectorAll('[role="tablist"]');

            tabLists.forEach(tabList => {
                const tabs = tabList.querySelectorAll('[role="tab"]');

                tabs.forEach(tab => {
                    tab.addEventListener('click', (e) => {
                        const panelId = tab.getAttribute('aria-controls');
                        this.switchTab(tab.id, panelId);
                    });

                    // Keyboard navigation
                    tab.addEventListener('keydown', (e) => {
                        const tabArray = Array.from(tabs);
                        const currentIndex = tabArray.indexOf(tab);
                        let nextTab = null;

                        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                            nextTab = tabArray[currentIndex + 1] || tabArray[0];
                            e.preventDefault();
                        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                            nextTab = tabArray[currentIndex - 1] || tabArray[tabArray.length - 1];
                            e.preventDefault();
                        } else if (e.key === 'Home') {
                            nextTab = tabArray[0];
                            e.preventDefault();
                        } else if (e.key === 'End') {
                            nextTab = tabArray[tabArray.length - 1];
                            e.preventDefault();
                        }

                        if (nextTab) {
                            nextTab.focus();
                            const panelId = nextTab.getAttribute('aria-controls');
                            this.switchTab(nextTab.id, panelId);
                        }
                    });
                });
            });
        });
    },

    /**
     * Switch to a specific tab
     * @param {string} tabId - The ID of the tab element
     * @param {string} panelId - The ID of the panel to show
     */
    switchTab(tabId, panelId) {
        const tab = document.getElementById(tabId);
        if (!tab) return;

        const tabList = tab.closest('[role="tablist"]');
        const allTabs = tabList.querySelectorAll('[role="tab"]');
        const allPanels = document.querySelectorAll('[role="tabpanel"]');

        // Deactivate all tabs
        allTabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.classList.remove('tab-active');
            t.setAttribute('tabindex', '-1');
        });

        // Hide all panels
        allPanels.forEach(p => {
            p.hidden = true;
        });

        // Activate selected tab
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('tab-active');
        tab.setAttribute('tabindex', '0');

        // Show selected panel
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.hidden = false;
        }
    },

    // ========================================
    // TOOLTIP
    // ========================================

    /**
     * Initialize tooltips
     */
    initTooltips() {
        document.addEventListener('DOMContentLoaded', () => {
            const tooltipWrappers = document.querySelectorAll('.tooltip-wrapper');

            tooltipWrappers.forEach(wrapper => {
                const trigger = wrapper.querySelector('[data-tooltip-trigger]');
                const tooltip = wrapper.querySelector('.tooltip');

                if (trigger && tooltip) {
                    trigger.addEventListener('mouseenter', () => {
                        tooltip.classList.add('tooltip-show');
                    });

                    trigger.addEventListener('mouseleave', () => {
                        tooltip.classList.remove('tooltip-show');
                    });

                    trigger.addEventListener('focus', () => {
                        tooltip.classList.add('tooltip-show');
                    });

                    trigger.addEventListener('blur', () => {
                        tooltip.classList.remove('tooltip-show');
                    });
                }
            });
        });
    },

    /**
     * Show a tooltip
     * @param {string} triggerId - The ID of the trigger element
     */
    showTooltip(triggerId) {
        const trigger = document.getElementById(triggerId);
        if (!trigger) return;

        const wrapper = trigger.closest('.tooltip-wrapper');
        const tooltip = wrapper?.querySelector('.tooltip');
        if (tooltip) {
            tooltip.classList.add('tooltip-show');
        }
    },

    /**
     * Hide a tooltip
     * @param {string} triggerId - The ID of the trigger element
     */
    hideTooltip(triggerId) {
        const trigger = document.getElementById(triggerId);
        if (!trigger) return;

        const wrapper = trigger.closest('.tooltip-wrapper');
        const tooltip = wrapper?.querySelector('.tooltip');
        if (tooltip) {
            tooltip.classList.remove('tooltip-show');
        }
    },

    // ========================================
    // DROPDOWN
    // ========================================

    /**
     * Initialize dropdowns
     */
    initDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            const menu = dropdown.querySelector('.dropdown-menu');

            if (trigger && menu) {
                trigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleDropdown(dropdown.id);
                });

                // Keyboard support
                trigger.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.toggleDropdown(dropdown.id);
                    } else if (e.key === 'Escape') {
                        this.closeDropdown(dropdown.id);
                    }
                });

                // Arrow key navigation in menu
                menu.addEventListener('keydown', (e) => {
                    const items = menu.querySelectorAll('.dropdown-item:not([disabled])');
                    const currentIndex = Array.from(items).indexOf(document.activeElement);

                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const next = items[currentIndex + 1] || items[0];
                        next.focus();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prev = items[currentIndex - 1] || items[items.length - 1];
                        prev.focus();
                    } else if (e.key === 'Escape') {
                        this.closeDropdown(dropdown.id);
                        trigger.focus();
                    }
                });
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown.dropdown-open').forEach(dd => {
                    this.closeDropdown(dd.id);
                });
            }
        });
    },

    /**
     * Open a dropdown
     * @param {string} dropdownId - The ID of the dropdown element
     */
    openDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;

        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');

        dropdown.classList.add('dropdown-open');
        trigger?.setAttribute('aria-expanded', 'true');
        menu?.removeAttribute('hidden');

        // Focus first item
        const firstItem = menu?.querySelector('.dropdown-item:not([disabled])');
        firstItem?.focus();
    },

    /**
     * Close a dropdown
     * @param {string} dropdownId - The ID of the dropdown element
     */
    closeDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;

        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');

        dropdown.classList.remove('dropdown-open');
        trigger?.setAttribute('aria-expanded', 'false');
        menu?.setAttribute('hidden', '');
    },

    /**
     * Toggle a dropdown
     * @param {string} dropdownId - The ID of the dropdown element
     */
    toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;

        if (dropdown.classList.contains('dropdown-open')) {
            this.closeDropdown(dropdownId);
        } else {
            this.openDropdown(dropdownId);
        }
    },

    // ========================================
    // ACCORDION
    // ========================================

    /**
     * Initialize accordions
     */
    initAccordions() {
        const accordions = document.querySelectorAll('.accordion');

        accordions.forEach(accordion => {
            const items = accordion.querySelectorAll('.accordion-item');
            const allowMultiple = accordion.classList.contains('accordion-always-open');

            items.forEach(item => {
                const header = item.querySelector('.accordion-header');
                const panel = item.querySelector('.accordion-panel');

                if (header && panel) {
                    header.addEventListener('click', () => {
                        const isExpanded = header.getAttribute('aria-expanded') === 'true';

                        if (!allowMultiple) {
                            // Close other items
                            items.forEach(otherItem => {
                                if (otherItem !== item) {
                                    const otherHeader = otherItem.querySelector('.accordion-header');
                                    const otherPanel = otherItem.querySelector('.accordion-panel');
                                    otherHeader?.setAttribute('aria-expanded', 'false');
                                    otherPanel?.setAttribute('hidden', '');
                                }
                            });
                        }

                        // Toggle current item
                        if (isExpanded) {
                            this.closeAccordion(item.id);
                        } else {
                            this.openAccordion(item.id);
                        }
                    });
                }
            });
        });
    },

    /**
     * Open an accordion item
     * @param {string} itemId - The ID of the accordion item
     */
    openAccordion(itemId) {
        const item = document.getElementById(itemId);
        if (!item) return;

        const header = item.querySelector('.accordion-header');
        const panel = item.querySelector('.accordion-panel');

        header?.setAttribute('aria-expanded', 'true');
        panel?.removeAttribute('hidden');
    },

    /**
     * Close an accordion item
     * @param {string} itemId - The ID of the accordion item
     */
    closeAccordion(itemId) {
        const item = document.getElementById(itemId);
        if (!item) return;

        const header = item.querySelector('.accordion-header');
        const panel = item.querySelector('.accordion-panel');

        header?.setAttribute('aria-expanded', 'false');
        panel?.setAttribute('hidden', '');
    },

    /**
     * Toggle an accordion item
     * @param {string} itemId - The ID of the accordion item
     */
    toggleAccordion(itemId) {
        const item = document.getElementById(itemId);
        if (!item) return;

        const header = item.querySelector('.accordion-header');
        const isExpanded = header?.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            this.closeAccordion(itemId);
        } else {
            this.openAccordion(itemId);
        }
    },

    // ========================================
    // POPOVER
    // ========================================

    /**
     * Initialize popovers
     */
    initPopovers() {
        const popoverWrappers = document.querySelectorAll('.popover-wrapper');

        popoverWrappers.forEach(wrapper => {
            const trigger = wrapper.querySelector('[data-popover-trigger]');
            const popover = wrapper.querySelector('.popover');
            const closeBtn = popover?.querySelector('.popover-close');

            if (trigger && popover) {
                trigger.addEventListener('click', () => {
                    this.togglePopover(trigger.id);
                });

                closeBtn?.addEventListener('click', () => {
                    this.hidePopover(trigger.id);
                });

                // Close on ESC
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && !popover.hidden) {
                        this.hidePopover(trigger.id);
                    }
                });
            }
        });

        // Close popovers when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.popover-wrapper')) {
                document.querySelectorAll('.popover.popover-show').forEach(p => {
                    p.classList.remove('popover-show');
                    p.hidden = true;
                });
            }
        });
    },

    /**
     * Show a popover
     * @param {string} triggerId - The ID of the trigger element
     */
    showPopover(triggerId) {
        const trigger = document.getElementById(triggerId);
        if (!trigger) return;

        const wrapper = trigger.closest('.popover-wrapper');
        const popover = wrapper?.querySelector('.popover');

        if (popover) {
            popover.classList.add('popover-show');
            popover.hidden = false;

            // Focus first focusable element
            const focusable = popover.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            focusable?.focus();
        }
    },

    /**
     * Hide a popover
     * @param {string} triggerId - The ID of the trigger element
     */
    hidePopover(triggerId) {
        const trigger = document.getElementById(triggerId);
        if (!trigger) return;

        const wrapper = trigger.closest('.popover-wrapper');
        const popover = wrapper?.querySelector('.popover');

        if (popover) {
            popover.classList.remove('popover-show');
            popover.hidden = true;
        }
    },

    /**
     * Toggle a popover
     * @param {string} triggerId - The ID of the trigger element
     */
    togglePopover(triggerId) {
        const trigger = document.getElementById(triggerId);
        if (!trigger) return;

        const wrapper = trigger.closest('.popover-wrapper');
        const popover = wrapper?.querySelector('.popover');

        if (popover?.classList.contains('popover-show')) {
            this.hidePopover(triggerId);
        } else {
            this.showPopover(triggerId);
        }
    },

    // ========================================
    // SELECT (Custom)
    // ========================================

    /**
     * Initialize custom select components
     */
    initSelects() {
        document.addEventListener('DOMContentLoaded', () => {
            const selects = document.querySelectorAll('.select-custom');

            selects.forEach(select => {
                const trigger = select.querySelector('.select-trigger');
                const dropdown = select.querySelector('.select-dropdown');
                const options = select.querySelectorAll('.select-option');

                if (trigger && dropdown) {
                    trigger.addEventListener('click', () => {
                        this.toggleSelect(select.id);
                    });

                    options.forEach(option => {
                        option.addEventListener('click', () => {
                            const value = option.getAttribute('data-value');
                            this.selectOption(select.id, value);
                        });

                        option.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                const value = option.getAttribute('data-value');
                                this.selectOption(select.id, value);
                            }
                        });
                    });

                    // Keyboard navigation
                    dropdown.addEventListener('keydown', (e) => {
                        const items = Array.from(options).filter(o => !o.hasAttribute('data-disabled'));
                        const currentIndex = items.indexOf(document.activeElement);

                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            const next = items[currentIndex + 1] || items[0];
                            next?.focus();
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            const prev = items[currentIndex - 1] || items[items.length - 1];
                            prev?.focus();
                        } else if (e.key === 'Escape') {
                            this.closeSelect(select.id);
                            trigger.focus();
                        }
                    });
                }
            });

            // Close selects when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.select-custom')) {
                    document.querySelectorAll('.select-custom').forEach(s => {
                        this.closeSelect(s.id);
                    });
                }
            });
        });
    },

    /**
     * Open a custom select
     * @param {string} selectId - The ID of the select element
     */
    openSelect(selectId) {
        const select = document.getElementById(selectId);
        if (!select) return;

        const trigger = select.querySelector('.select-trigger');
        const dropdown = select.querySelector('.select-dropdown');

        trigger?.setAttribute('aria-expanded', 'true');
        dropdown?.removeAttribute('hidden');

        const selected = dropdown?.querySelector('.select-option[aria-selected="true"]');
        selected?.focus();
    },

    /**
     * Close a custom select
     * @param {string} selectId - The ID of the select element
     */
    closeSelect(selectId) {
        const select = document.getElementById(selectId);
        if (!select) return;

        const trigger = select.querySelector('.select-trigger');
        const dropdown = select.querySelector('.select-dropdown');

        trigger?.setAttribute('aria-expanded', 'false');
        dropdown?.setAttribute('hidden', '');
    },

    /**
     * Toggle a custom select
     * @param {string} selectId - The ID of the select element
     */
    toggleSelect(selectId) {
        const select = document.getElementById(selectId);
        if (!select) return;

        const trigger = select.querySelector('.select-trigger');
        const isOpen = trigger?.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
            this.closeSelect(selectId);
        } else {
            this.openSelect(selectId);
        }
    },

    /**
     * Select an option in a custom select
     * @param {string} selectId - The ID of the select element
     * @param {string} value - The value to select
     */
    selectOption(selectId, value) {
        const select = document.getElementById(selectId);
        if (!select) return;

        const trigger = select.querySelector('.select-trigger');
        const options = select.querySelectorAll('.select-option');

        options.forEach(option => {
            option.setAttribute('aria-selected', 'false');
        });

        const selectedOption = Array.from(options).find(o => o.getAttribute('data-value') === value);
        if (selectedOption) {
            selectedOption.setAttribute('aria-selected', 'true');
            const label = trigger?.querySelector('span');
            if (label) {
                label.textContent = selectedOption.textContent;
            }
        }

        this.closeSelect(selectId);
    },

    // ========================================
    // PROGRESS
    // ========================================

    /**
     * Set progress value
     * @param {string} progressId - The ID of the progress element
     * @param {number} value - Progress value (0-100)
     */
    setProgress(progressId, value) {
        const progress = document.getElementById(progressId);
        if (!progress) return;

        const bar = progress.querySelector('.progress-bar');
        if (bar) {
            bar.style.width = `${value}%`;
            progress.setAttribute('aria-valuenow', value.toString());
        }
    },

    // ========================================
    // CHECKBOX
    // ========================================

    /**
     * Set indeterminate state on checkbox
     * @param {string} checkboxId - The ID of the checkbox input element
     * @param {boolean} indeterminate - Whether to set indeterminate state
     */
    setIndeterminate(checkboxId, indeterminate = true) {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.type === 'checkbox') {
            checkbox.indeterminate = indeterminate;
        }
    }
};

// Auto-initialize all components when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            Aural.initModals();
            Aural.initTabs();
            Aural.initTooltips();
            Aural.initDropdowns();
            Aural.initAccordions();
            Aural.initPopovers();
            Aural.initSelects();
        });
    } else {
        Aural.initModals();
        Aural.initTabs();
        Aural.initTooltips();
        Aural.initDropdowns();
        Aural.initAccordions();
        Aural.initPopovers();
        Aural.initSelects();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Aural;
}

// Export for browser global
if (typeof window !== 'undefined') {
    window.Aural = Aural;
}
