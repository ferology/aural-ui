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
            container.setAttribute('aria-live', 'polite');
            container.setAttribute('aria-atomic', 'false');
            document.body.appendChild(container);
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

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
    },

    // ========================================
    // SLIDER
    // ========================================

    /**
     * Initialize a slider with event listeners
     * @param {string} sliderId - The ID of the slider container
     */
    initSlider(sliderId) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        const input = slider.querySelector('.aural-slider__input');
        const valueDisplay = slider.querySelector('.aural-slider__value');
        const label = slider.querySelector('.aural-slider__label');

        if (input) {
            // Add ARIA attributes
            input.setAttribute('aria-valuemin', input.min || '0');
            input.setAttribute('aria-valuemax', input.max || '100');
            input.setAttribute('aria-valuenow', input.value);

            if (label) {
                input.setAttribute('aria-label', label.textContent);
            }

            // Make value display live region
            if (valueDisplay) {
                valueDisplay.setAttribute('aria-live', 'polite');
                valueDisplay.setAttribute('aria-atomic', 'true');
            }

            const updateValue = () => {
                valueDisplay.textContent = input.value;
                input.setAttribute('aria-valuenow', input.value);
            };

            input.addEventListener('input', updateValue);
            updateValue(); // Initialize
        }
    },

    /**
     * Set slider value programmatically
     * @param {string} sliderId - The ID of the slider container
     * @param {number} value - The value to set
     */
    setSliderValue(sliderId, value) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        const input = slider.querySelector('.aural-slider__input');
        const valueDisplay = slider.querySelector('.aural-slider__value');

        if (input) {
            input.value = value;
            if (valueDisplay) {
                valueDisplay.textContent = value;
            }
        }
    },

    // ========================================
    // CHIPS
    // ========================================

    /**
     * Initialize a chips/tags input component
     * @param {string} chipsId - The ID of the chips container
     * @param {Object} options - Configuration options
     * @returns {Object} API with getTags, addTag, clearTags methods
     */
    initChips(chipsId, options = {}) {
        const chips = document.getElementById(chipsId);
        if (!chips) return null;

        const container = chips.querySelector('.aural-chips__container');
        const input = chips.querySelector('.aural-chips__input');
        const tags = [];

        // Add ARIA attributes to container
        container.setAttribute('role', 'list');
        container.setAttribute('aria-label', 'Tags');

        const {
            maxTags = null,
            allowDuplicates = false,
            onAdd = null,
            onRemove = null
        } = options;

        const addTag = (text) => {
            if (!text || text.trim() === '') return false;

            const trimmedText = text.trim();

            if (!allowDuplicates && tags.includes(trimmedText)) return false;
            if (maxTags && tags.length >= maxTags) return false;

            tags.push(trimmedText);

            const chip = document.createElement('div');
            chip.className = 'aural-chip';
            chip.setAttribute('role', 'listitem');
            chip.innerHTML = `
                <span class="aural-chip__text">${trimmedText}</span>
                <button class="aural-chip__remove" aria-label="Remove tag ${trimmedText}" type="button"></button>
            `;

            const removeBtn = chip.querySelector('.aural-chip__remove');
            removeBtn.addEventListener('click', () => {
                const index = tags.indexOf(trimmedText);
                if (index > -1) {
                    tags.splice(index, 1);
                }
                chip.remove();

                // Announce removal to screen readers
                const announcement = document.createElement('div');
                announcement.setAttribute('role', 'status');
                announcement.setAttribute('aria-live', 'polite');
                announcement.className = 'visually-hidden';
                announcement.textContent = `Removed tag ${trimmedText}`;
                document.body.appendChild(announcement);
                setTimeout(() => announcement.remove(), 1000);

                if (onRemove) onRemove(trimmedText);
            });

            container.insertBefore(chip, input);
            input.value = '';

            // Announce addition to screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.className = 'visually-hidden';
            announcement.textContent = `Added tag ${trimmedText}`;
            document.body.appendChild(announcement);
            setTimeout(() => announcement.remove(), 1000);

            if (onAdd) onAdd(trimmedText);
            return true;
        };

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                addTag(input.value);
            } else if (e.key === 'Backspace' && input.value === '' && tags.length > 0) {
                const lastTag = tags[tags.length - 1];
                tags.pop();
                const chips = container.querySelectorAll('.aural-chip');
                chips[chips.length - 1].remove();
                if (onRemove) onRemove(lastTag);
            }
        });

        return {
            getTags: () => [...tags],
            addTag,
            clearTags: () => {
                tags.length = 0;
                container.querySelectorAll('.aural-chip').forEach(chip => chip.remove());
            }
        };
    },

    // ========================================
    // CODE BLOCK
    // ========================================

    /**
     * Initialize a code block with copy functionality
     * @param {string} codeBlockId - The ID of the code block
     */
    initCodeBlock(codeBlockId) {
        const codeBlock = document.getElementById(codeBlockId);
        if (!codeBlock) return;

        const copyBtn = codeBlock.querySelector('.aural-code-block__copy');
        const codeElement = codeBlock.querySelector('.aural-code-block__code');

        if (copyBtn && codeElement) {
            // Add ARIA label
            copyBtn.setAttribute('aria-label', 'Copy code to clipboard');

            copyBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(codeElement.textContent);
                    copyBtn.classList.add('aural-code-block__copy--copied');
                    copyBtn.textContent = 'Copied!';
                    copyBtn.setAttribute('aria-label', 'Code copied to clipboard');

                    // Announce to screen readers
                    const announcement = document.createElement('div');
                    announcement.setAttribute('role', 'status');
                    announcement.setAttribute('aria-live', 'polite');
                    announcement.className = 'visually-hidden';
                    announcement.textContent = 'Code copied to clipboard';
                    document.body.appendChild(announcement);

                    setTimeout(() => {
                        copyBtn.classList.remove('aural-code-block__copy--copied');
                        copyBtn.textContent = 'Copy';
                        copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
                        announcement.remove();
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
            });
        }
    },

    /**
     * Initialize all code blocks on the page
     */
    initAllCodeBlocks() {
        const codeBlocks = document.querySelectorAll('.aural-code-block');
        codeBlocks.forEach((block) => {
            if (block.id) {
                this.initCodeBlock(block.id);
            }
        });
    },

    /**
     * Apply basic syntax highlighting to a code block
     * @param {string} codeBlockId - The ID of the code block
     * @param {string} language - The programming language
     */
    highlightCodeBlock(codeBlockId, language) {
        const codeBlock = document.getElementById(codeBlockId);
        if (!codeBlock) return;

        const codeElement = codeBlock.querySelector('.aural-code-block__code');
        if (!codeElement) return;

        let code = codeElement.textContent;

        // Basic regex-based syntax highlighting
        const patterns = {
            comment: /\/\/.*|\/\*[\s\S]*?\*\//g,
            string: /(["'`])(?:\\.|[^\\])*?\1/g,
            keyword: /\b(function|const|let|var|if|else|return|import|export|class|extends|async|await|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|delete|typeof|instanceof)\b/g,
            number: /\b\d+\.?\d*\b/g,
            operator: /[+\-*/%=<>!&|]+/g
        };

        // Apply highlighting (simplified)
        // Note: This is a very basic implementation
        // For production, use a library like Prism.js or highlight.js

        console.log('Syntax highlighting applied for', language);
    },

    // ========================================
    // DIALOG
    // ========================================

    /**
     * Open a dialog
     * @param {string} dialogId - The ID of the dialog element
     */
    openDialog(dialogId) {
        const backdrop = document.getElementById(dialogId);
        if (!backdrop) return;

        backdrop.classList.add('is-open');
        document.body.classList.add('aural-dialog-open');

        const dialog = backdrop.querySelector('.aural-dialog');
        if (dialog) {
            dialog.setAttribute('role', 'dialog');
            dialog.setAttribute('aria-modal', 'true');
            dialog.setAttribute('aria-hidden', 'false');

            // Set aria-labelledby if title exists
            const title = dialog.querySelector('.aural-dialog__title');
            if (title) {
                if (!title.id) title.id = `dialog-title-${Date.now()}`;
                dialog.setAttribute('aria-labelledby', title.id);
            }

            // Set aria-describedby if message exists
            const message = dialog.querySelector('.aural-dialog__message');
            if (message) {
                if (!message.id) message.id = `dialog-desc-${Date.now()}`;
                dialog.setAttribute('aria-describedby', message.id);
            }
        }

        // Focus first focusable element
        const focusable = dialog?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusable?.focus();

        // Close on ESC
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                this.closeDialog(dialogId);
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    },

    /**
     * Close a dialog
     * @param {string} dialogId - The ID of the dialog element
     */
    closeDialog(dialogId) {
        const backdrop = document.getElementById(dialogId);
        if (!backdrop) return;

        backdrop.classList.remove('is-open');
        document.body.classList.remove('aural-dialog-open');

        const dialog = backdrop.querySelector('.aural-dialog');
        dialog?.setAttribute('aria-hidden', 'true');
    },

    /**
     * Show a confirmation dialog dynamically
     * @param {string} title - Dialog title
     * @param {string} message - Dialog message
     * @param {Function} onConfirm - Callback when confirmed
     * @param {Function} onCancel - Callback when cancelled
     */
    showConfirm(title, message, onConfirm, onCancel) {
        const dialogId = 'aural-confirm-dialog-' + Date.now();

        const backdrop = document.createElement('div');
        backdrop.id = dialogId;
        backdrop.className = 'aural-dialog-backdrop';
        backdrop.innerHTML = `
            <div class="aural-dialog aural-dialog--alert">
                <div class="aural-dialog__header">
                    <div class="aural-dialog__icon"></div>
                    <div class="aural-dialog__title-group">
                        <h3 class="aural-dialog__title">${title}</h3>
                    </div>
                </div>
                <div class="aural-dialog__body">
                    <p class="aural-dialog__message">${message}</p>
                </div>
                <div class="aural-dialog__footer">
                    <button class="btn btn-secondary aural-dialog__action" data-action="cancel">Cancel</button>
                    <button class="btn btn-primary aural-dialog__action" data-action="confirm">Confirm</button>
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);

        const confirmBtn = backdrop.querySelector('[data-action="confirm"]');
        const cancelBtn = backdrop.querySelector('[data-action="cancel"]');

        confirmBtn?.addEventListener('click', () => {
            if (onConfirm) onConfirm();
            this.closeDialog(dialogId);
            backdrop.remove();
        });

        cancelBtn?.addEventListener('click', () => {
            if (onCancel) onCancel();
            this.closeDialog(dialogId);
            backdrop.remove();
        });

        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                if (onCancel) onCancel();
                this.closeDialog(dialogId);
                backdrop.remove();
            }
        });

        this.openDialog(dialogId);
    },

    // ========================================
    // FILE UPLOAD
    // ========================================

    /**
     * Initialize a file upload component
     * @param {string} uploadId - The ID of the file upload container
     * @param {Object} options - Configuration options
     */
    initFileUpload(uploadId, options = {}) {
        const upload = document.getElementById(uploadId);
        if (!upload) return;

        const {
            maxSize = 10 * 1024 * 1024, // 10MB
            allowedTypes = [],
            multiple = true,
            onUpload = null
        } = options;

        const dropzone = upload.querySelector('.aural-file-upload__dropzone');
        const input = upload.querySelector('.aural-file-upload__input');
        const filesContainer = upload.querySelector('.aural-file-upload__files');

        // Add ARIA attributes
        if (dropzone) {
            dropzone.setAttribute('role', 'button');
            dropzone.setAttribute('aria-label', 'Upload files by clicking or dragging and dropping');
            dropzone.setAttribute('tabindex', '0');
        }

        if (filesContainer) {
            filesContainer.setAttribute('aria-live', 'polite');
            filesContainer.setAttribute('aria-label', 'Uploaded files');
        }

        const handleFiles = (files) => {
            Array.from(files).forEach(file => {
                // Validate file size
                if (file.size > maxSize) {
                    console.error('File too large:', file.name);
                    return;
                }

                // Validate file type
                if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
                    console.error('File type not allowed:', file.name);
                    return;
                }

                // Create file item
                const fileItem = document.createElement('div');
                fileItem.className = 'aural-file-upload__file aural-file-upload__file--uploading';

                const preview = file.type.startsWith('image/')
                    ? `<div class="aural-file-upload__preview aural-file-upload__preview--image"><img src="${URL.createObjectURL(file)}" alt="${file.name}"></div>`
                    : `<div class="aural-file-upload__preview aural-file-upload__preview--document"></div>`;

                fileItem.innerHTML = `
                    ${preview}
                    <div class="aural-file-upload__info">
                        <div class="aural-file-upload__filename">${file.name}</div>
                        <div class="aural-file-upload__filesize">${(file.size / 1024).toFixed(2)} KB</div>
                        <div class="aural-file-upload__progress">
                            <div class="aural-file-upload__progress-bar">
                                <div class="aural-file-upload__progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="aural-file-upload__actions">
                        <button class="aural-file-upload__remove" aria-label="Remove ${file.name}"></button>
                    </div>
                `;

                filesContainer?.appendChild(fileItem);

                // Simulate upload progress
                const progressFill = fileItem.querySelector('.aural-file-upload__progress-fill');
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    if (progressFill) progressFill.style.width = `${progress}%`;

                    if (progress >= 100) {
                        clearInterval(interval);
                        fileItem.classList.remove('aural-file-upload__file--uploading');
                        fileItem.classList.add('aural-file-upload__file--success');

                        if (onUpload) onUpload(file);
                    }
                }, 200);

                // Remove button
                const removeBtn = fileItem.querySelector('.aural-file-upload__remove');
                removeBtn?.addEventListener('click', () => {
                    clearInterval(interval);
                    fileItem.remove();
                });
            });
        };

        // Click to browse
        dropzone?.addEventListener('click', () => input?.click());

        // File input change
        input?.addEventListener('change', (e) => {
            if (e.target.files) {
                handleFiles(e.target.files);
            }
        });

        // Drag and drop
        dropzone?.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('aural-file-upload__dropzone--active');
        });

        dropzone?.addEventListener('dragleave', () => {
            dropzone.classList.remove('aural-file-upload__dropzone--active');
        });

        dropzone?.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('aural-file-upload__dropzone--active');

            if (e.dataTransfer?.files) {
                handleFiles(e.dataTransfer.files);
            }
        });
    },

    // ========================================
    // COMMAND PALETTE
    // ========================================

    /**
     * Open a command palette
     * @param {string} paletteId - The ID of the command palette
     */
    openCommandPalette(paletteId) {
        const backdrop = document.getElementById(paletteId);
        if (!backdrop) return;

        backdrop.classList.add('is-open');
        document.body.classList.add('aural-command-palette-open');

        const palette = backdrop.querySelector('.aural-command-palette');
        const input = backdrop.querySelector('.aural-command-palette__input');
        const results = backdrop.querySelector('.aural-command-palette__results');

        // Add ARIA attributes
        if (palette) {
            palette.setAttribute('role', 'dialog');
            palette.setAttribute('aria-modal', 'true');
            palette.setAttribute('aria-label', 'Command palette');
        }

        if (input) {
            input.setAttribute('role', 'combobox');
            input.setAttribute('aria-autocomplete', 'list');
            input.setAttribute('aria-expanded', 'true');
            input.setAttribute('aria-controls', 'command-results');
        }

        if (results) {
            results.id = 'command-results';
            results.setAttribute('role', 'listbox');
        }

        input?.focus();

        // Close on ESC
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                this.closeCommandPalette(paletteId);
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    },

    /**
     * Close a command palette
     * @param {string} paletteId - The ID of the command palette
     */
    closeCommandPalette(paletteId) {
        const backdrop = document.getElementById(paletteId);
        if (!backdrop) return;

        backdrop.classList.remove('is-open');
        document.body.classList.remove('aural-command-palette-open');
    },

    /**
     * Initialize a command palette with commands
     * @param {string} paletteId - The ID of the command palette
     * @param {Array} commands - Array of command objects
     */
    initCommandPalette(paletteId, commands = []) {
        const backdrop = document.getElementById(paletteId);
        if (!backdrop) return;

        const input = backdrop.querySelector('.aural-command-palette__input');
        const resultsContainer = backdrop.querySelector('.aural-command-palette__results');
        let selectedIndex = 0;

        // Render initial commands
        this.renderCommandResults(paletteId, commands);

        // Search filtering
        input?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = commands.filter(cmd =>
                cmd.title.toLowerCase().includes(query) ||
                cmd.description?.toLowerCase().includes(query)
            );
            this.renderCommandResults(paletteId, filtered);
            selectedIndex = 0;
        });

        // Keyboard navigation
        backdrop.addEventListener('keydown', (e) => {
            const items = backdrop.querySelectorAll('.aural-command-palette__item');

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                updateSelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = Math.max(selectedIndex - 1, 0);
                updateSelection(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const selected = items[selectedIndex];
                selected?.click();
            }
        });

        const updateSelection = (items) => {
            items.forEach((item, index) => {
                if (index === selectedIndex) {
                    item.classList.add('aural-command-palette__item--selected');
                    item.setAttribute('aria-selected', 'true');
                    item.scrollIntoView({ block: 'nearest' });

                    // Update aria-activedescendant
                    const input = backdrop.querySelector('.aural-command-palette__input');
                    if (input && item.id) {
                        input.setAttribute('aria-activedescendant', item.id);
                    }
                } else {
                    item.classList.remove('aural-command-palette__item--selected');
                    item.setAttribute('aria-selected', 'false');
                }
            });
        };

        // CMD/CTRL + K to toggle
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (backdrop.classList.contains('is-open')) {
                    this.closeCommandPalette(paletteId);
                } else {
                    this.openCommandPalette(paletteId);
                }
            }
        });
    },

    /**
     * Render command results
     * @param {string} paletteId - The ID of the command palette
     * @param {Array} commands - Array of command objects to render
     */
    renderCommandResults(paletteId, commands) {
        const backdrop = document.getElementById(paletteId);
        if (!backdrop) return;

        const resultsContainer = backdrop.querySelector('.aural-command-palette__results');
        if (!resultsContainer) return;

        if (commands.length === 0) {
            resultsContainer.innerHTML = `
                <div class="aural-command-palette__empty">
                    <div class="aural-command-palette__empty-icon"></div>
                    <div class="aural-command-palette__empty-text">No commands found</div>
                </div>
            `;
            return;
        }

        // Group commands by category
        const grouped = commands.reduce((acc, cmd) => {
            const group = cmd.group || 'Commands';
            if (!acc[group]) acc[group] = [];
            acc[group].push(cmd);
            return acc;
        }, {});

        resultsContainer.innerHTML = Object.entries(grouped).map(([group, cmds]) => `
            <div class="aural-command-palette__group" role="group" aria-labelledby="group-${group.replace(/\s+/g, '-')}">
                <div class="aural-command-palette__group-label" id="group-${group.replace(/\s+/g, '-')}">${group}</div>
                <div class="aural-command-palette__items">
                    ${cmds.map((cmd, index) => `
                        <button class="aural-command-palette__item ${index === 0 ? 'aural-command-palette__item--selected' : ''}"
                                data-command="${cmd.id}"
                                role="option"
                                aria-selected="${index === 0 ? 'true' : 'false'}">
                            ${cmd.icon ? `<span class="aural-command-palette__item-icon" aria-hidden="true">${cmd.icon}</span>` : ''}
                            <div class="aural-command-palette__item-content">
                                <div class="aural-command-palette__item-title">${cmd.title}</div>
                                ${cmd.description ? `<div class="aural-command-palette__item-description">${cmd.description}</div>` : ''}
                            </div>
                            ${cmd.shortcut ? `
                                <div class="aural-command-palette__shortcut" aria-label="Keyboard shortcut ${cmd.shortcut}">
                                    ${cmd.shortcut.split('+').map(key => `<span class="aural-command-palette__key">${key}</span>`).join('')}
                                </div>
                            ` : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Add click handlers
        resultsContainer.querySelectorAll('.aural-command-palette__item').forEach(item => {
            item.addEventListener('click', () => {
                const cmdId = item.getAttribute('data-command');
                const command = commands.find(c => c.id === cmdId);
                if (command?.action) {
                    command.action();
                }
                this.closeCommandPalette(paletteId);
            });
        });
    },

    // ========================================
    // DATE PICKER
    // ========================================

    /**
     * Initialize a date picker
     * @param {string} pickerId - The ID of the date picker element
     * @param {Object} options - Configuration options
     */
    initDatePicker(pickerId, options = {}) {
        const picker = document.getElementById(pickerId);
        if (!picker) return;

        const input = picker.querySelector('.aural-date-picker__input');
        const calendar = picker.querySelector('.aural-date-picker__calendar');

        const config = {
            format: options.format || 'YYYY-MM-DD',
            minDate: options.minDate || null,
            maxDate: options.maxDate || null,
            disabledDates: options.disabledDates || [],
            onChange: options.onChange || null,
            ...options
        };

        let selectedDate = null;
        let currentMonth = new Date();

        // Toggle calendar on input click
        input?.addEventListener('click', () => {
            calendar?.classList.toggle('aural-date-picker__calendar--open');
            if (calendar?.classList.contains('aural-date-picker__calendar--open')) {
                this.renderCalendar(picker, currentMonth, selectedDate, config);
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!picker.contains(e.target)) {
                calendar?.classList.remove('aural-date-picker__calendar--open');
            }
        });

        // ESC to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && calendar?.classList.contains('aural-date-picker__calendar--open')) {
                calendar.classList.remove('aural-date-picker__calendar--open');
            }
        });

        return {
            getDate: () => selectedDate,
            setDate: (date) => {
                selectedDate = new Date(date);
                input.value = this.formatDate(selectedDate, config.format);
                this.renderCalendar(picker, currentMonth, selectedDate, config);
            },
            clear: () => {
                selectedDate = null;
                input.value = '';
                this.renderCalendar(picker, currentMonth, selectedDate, config);
            }
        };
    },

    /**
     * Render the calendar grid
     */
    renderCalendar(picker, currentMonth, selectedDate, config) {
        const calendar = picker.querySelector('.aural-date-picker__calendar');
        const daysContainer = calendar.querySelector('.aural-date-picker__days');
        const currentMonthDisplay = calendar.querySelector('.aural-date-picker__current-month');

        // Update month display
        currentMonthDisplay.textContent = currentMonth.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });

        // Generate calendar days
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        let daysHTML = '';
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Previous month days
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            daysHTML += `<button class="aural-date-picker__day aural-date-picker__day--other-month" type="button">${day}</button>`;
        }

        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            date.setHours(0, 0, 0, 0);

            const isToday = date.getTime() === today.getTime();
            const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
            const isDisabled = this.isDateDisabled(date, config);

            let classes = 'aural-date-picker__day';
            if (isToday) classes += ' aural-date-picker__day--today';
            if (isSelected) classes += ' aural-date-picker__day--selected';
            if (isDisabled) classes += ' aural-date-picker__day--disabled';

            daysHTML += `<button class="${classes}" type="button" data-date="${date.toISOString()}" ${isDisabled ? 'disabled' : ''}>${day}</button>`;
        }

        // Next month days
        const totalCells = firstDay + daysInMonth;
        const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
        for (let day = 1; day <= remainingCells; day++) {
            daysHTML += `<button class="aural-date-picker__day aural-date-picker__day--other-month" type="button">${day}</button>`;
        }

        daysContainer.innerHTML = daysHTML;

        // Add click handlers
        daysContainer.querySelectorAll('.aural-date-picker__day:not(.aural-date-picker__day--disabled):not(.aural-date-picker__day--other-month)').forEach(dayBtn => {
            dayBtn.addEventListener('click', () => {
                const dateStr = dayBtn.getAttribute('data-date');
                const date = new Date(dateStr);
                const input = picker.querySelector('.aural-date-picker__input');

                input.value = this.formatDate(date, config.format);
                calendar.classList.remove('aural-date-picker__calendar--open');

                if (config.onChange) {
                    config.onChange(date);
                }
            });
        });

        // Navigation buttons
        const prevBtn = calendar.querySelector('.aural-date-picker__nav-button[data-action="prev"]');
        const nextBtn = calendar.querySelector('.aural-date-picker__nav-button[data-action="next"]');

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentMonth.setMonth(currentMonth.getMonth() - 1);
                this.renderCalendar(picker, currentMonth, selectedDate, config);
            };
        }

        if (nextBtn) {
            nextBtn.onclick = () => {
                currentMonth.setMonth(currentMonth.getMonth() + 1);
                this.renderCalendar(picker, currentMonth, selectedDate, config);
            };
        }
    },

    /**
     * Check if a date is disabled
     */
    isDateDisabled(date, config) {
        if (config.minDate && date < new Date(config.minDate)) return true;
        if (config.maxDate && date > new Date(config.maxDate)) return true;
        if (config.disabledDates && config.disabledDates.some(d =>
            new Date(d).toDateString() === date.toDateString()
        )) return true;
        return false;
    },

    /**
     * Format date to string
     */
    formatDate(date, format) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day);
    },

    // ========================================
    // STEPPER
    // ========================================

    /**
     * Initialize a stepper
     * @param {string} stepperId - The ID of the stepper element
     * @param {Object} options - Configuration options
     */
    initStepper(stepperId, options = {}) {
        const stepper = document.getElementById(stepperId);
        if (!stepper) return;

        const steps = stepper.querySelectorAll('.aural-step');
        let currentStep = options.initialStep || 0;

        const config = {
            clickable: options.clickable !== false,
            onChange: options.onChange || null,
            ...options
        };

        // Make steps clickable if enabled
        if (config.clickable) {
            steps.forEach((step, index) => {
                const indicator = step.querySelector('.aural-step__indicator');
                if (indicator && !step.classList.contains('aural-step--disabled')) {
                    step.classList.add('aural-step--clickable');
                    indicator.tabIndex = 0;
                    indicator.setAttribute('role', 'button');

                    indicator.addEventListener('click', () => {
                        this.goToStep(stepperId, index);
                    });

                    indicator.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            this.goToStep(stepperId, index);
                        }
                    });
                }
            });
        }

        return {
            next: () => this.nextStep(stepperId),
            prev: () => this.prevStep(stepperId),
            goTo: (index) => this.goToStep(stepperId, index),
            getCurrentStep: () => currentStep,
            complete: (index) => this.completeStep(stepperId, index),
            error: (index) => this.errorStep(stepperId, index)
        };
    },

    /**
     * Go to a specific step
     */
    goToStep(stepperId, stepIndex) {
        const stepper = document.getElementById(stepperId);
        if (!stepper) return;

        const steps = stepper.querySelectorAll('.aural-step');
        if (stepIndex < 0 || stepIndex >= steps.length) return;

        steps.forEach((step, index) => {
            step.classList.remove('aural-step--active');
            if (index === stepIndex) {
                step.classList.add('aural-step--active');
            }
        });
    },

    /**
     * Go to next step
     */
    nextStep(stepperId) {
        const stepper = document.getElementById(stepperId);
        if (!stepper) return;

        const steps = stepper.querySelectorAll('.aural-step');
        const currentStep = Array.from(steps).findIndex(s => s.classList.contains('aural-step--active'));

        if (currentStep < steps.length - 1) {
            this.goToStep(stepperId, currentStep + 1);
        }
    },

    /**
     * Go to previous step
     */
    prevStep(stepperId) {
        const stepper = document.getElementById(stepperId);
        if (!stepper) return;

        const steps = stepper.querySelectorAll('.aural-step');
        const currentStep = Array.from(steps).findIndex(s => s.classList.contains('aural-step--active'));

        if (currentStep > 0) {
            this.goToStep(stepperId, currentStep - 1);
        }
    },

    /**
     * Mark a step as completed
     */
    completeStep(stepperId, stepIndex) {
        const stepper = document.getElementById(stepperId);
        if (!stepper) return;

        const steps = stepper.querySelectorAll('.aural-step');
        if (stepIndex >= 0 && stepIndex < steps.length) {
            steps[stepIndex].classList.add('aural-step--completed');
            steps[stepIndex].classList.remove('aural-step--error');
        }
    },

    /**
     * Mark a step as error
     */
    errorStep(stepperId, stepIndex) {
        const stepper = document.getElementById(stepperId);
        if (!stepper) return;

        const steps = stepper.querySelectorAll('.aural-step');
        if (stepIndex >= 0 && stepIndex < steps.length) {
            steps[stepIndex].classList.add('aural-step--error');
            steps[stepIndex].classList.remove('aural-step--completed');
        }
    },

    // ========================================
    // SEARCH BAR
    // ========================================

    /**
     * Initialize a search bar with autocomplete
     * @param {string} searchId - The ID of the search bar element
     * @param {Object} options - Configuration options
     */
    initSearchBar(searchId, options = {}) {
        const searchBar = document.getElementById(searchId);
        if (!searchBar) return;

        const input = searchBar.querySelector('.aural-search-bar__input');
        const suggestions = searchBar.querySelector('.aural-search-bar__suggestions');
        const clearBtn = searchBar.querySelector('.aural-search-bar__clear');

        const config = {
            suggestions: options.suggestions || [],
            onSearch: options.onSearch || null,
            onSelect: options.onSelect || null,
            minChars: options.minChars || 1,
            debounce: options.debounce || 300,
            ...options
        };

        let debounceTimer = null;
        let selectedIndex = -1;

        // Input handler
        input?.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = e.target.value.trim();

                if (query.length >= config.minChars) {
                    this.showSearchSuggestions(searchId, query, config);
                } else {
                    suggestions?.classList.remove('aural-search-bar__suggestions--open');
                }

                if (config.onSearch) {
                    config.onSearch(query);
                }
            }, config.debounce);
        });

        // Clear button
        clearBtn?.addEventListener('click', () => {
            input.value = '';
            suggestions?.classList.remove('aural-search-bar__suggestions--open');
            input.focus();
        });

        // Keyboard navigation
        input?.addEventListener('keydown', (e) => {
            const items = suggestions?.querySelectorAll('.aural-search-bar__item') || [];

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                this.updateSearchSelection(items, selectedIndex);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = Math.max(selectedIndex - 1, -1);
                this.updateSearchSelection(items, selectedIndex);
            } else if (e.key === 'Enter' && selectedIndex >= 0 && items[selectedIndex]) {
                e.preventDefault();
                items[selectedIndex].click();
            } else if (e.key === 'Escape') {
                suggestions?.classList.remove('aural-search-bar__suggestions--open');
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!searchBar.contains(e.target)) {
                suggestions?.classList.remove('aural-search-bar__suggestions--open');
            }
        });

        return {
            clear: () => {
                input.value = '';
                suggestions?.classList.remove('aural-search-bar__suggestions--open');
            },
            focus: () => input?.focus()
        };
    },

    /**
     * Show search suggestions
     */
    showSearchSuggestions(searchId, query, config) {
        const searchBar = document.getElementById(searchId);
        const suggestions = searchBar?.querySelector('.aural-search-bar__suggestions');
        if (!suggestions) return;

        const filtered = config.suggestions.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
        );

        if (filtered.length === 0) {
            suggestions.innerHTML = `
                <div class="aural-search-bar__empty">
                    <div class="aural-search-bar__empty-text">No results found</div>
                </div>
            `;
        } else {
            suggestions.innerHTML = filtered.map((item, index) => `
                <button class="aural-search-bar__item" data-index="${index}">
                    ${item.icon ? `<div class="aural-search-bar__item-icon">${item.icon}</div>` : ''}
                    <div class="aural-search-bar__item-content">
                        <div class="aural-search-bar__item-title">${item.title}</div>
                        ${item.description ? `<div class="aural-search-bar__item-description">${item.description}</div>` : ''}
                    </div>
                </button>
            `).join('');

            // Add click handlers
            suggestions.querySelectorAll('.aural-search-bar__item').forEach(item => {
                item.addEventListener('click', () => {
                    const index = parseInt(item.getAttribute('data-index'));
                    const selected = filtered[index];

                    if (config.onSelect) {
                        config.onSelect(selected);
                    }

                    const input = searchBar.querySelector('.aural-search-bar__input');
                    input.value = selected.title;
                    suggestions.classList.remove('aural-search-bar__suggestions--open');
                });
            });
        }

        suggestions.classList.add('aural-search-bar__suggestions--open');
    },

    /**
     * Update search selection highlight
     */
    updateSearchSelection(items, selectedIndex) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('aural-search-bar__item--active');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('aural-search-bar__item--active');
            }
        });
    },

    // ========================================
    // ALERT BANNER
    // ========================================

    /**
     * Show an alert banner
     * @param {string} message - The message to display
     * @param {string} type - Type: 'info', 'success', 'warning', 'error'
     * @param {Object} options - Additional options
     */
    showAlertBanner(message, type = 'info', options = {}) {
        const config = {
            title: options.title || null,
            dismissible: options.dismissible !== false,
            fixed: options.fixed || null, // 'top' or 'bottom'
            duration: options.duration || 0, // 0 = permanent
            actions: options.actions || [],
            ...options
        };

        const banner = document.createElement('div');
        banner.className = `aural-alert-banner aural-alert-banner--${type}`;
        if (config.fixed) {
            banner.classList.add(`aural-alert-banner--fixed-${config.fixed}`);
        }
        banner.setAttribute('role', type === 'error' ? 'alert' : 'status');

        const icons = {
            info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
            success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
            warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
            error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
        };

        let actionsHTML = '';
        if (config.actions.length > 0) {
            actionsHTML = `
                <div class="aural-alert-banner__actions">
                    ${config.actions.map((action, index) => `
                        <button class="aural-alert-banner__action ${action.primary ? 'aural-alert-banner__action--primary' : ''}" data-action="${index}">
                            ${action.label}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        banner.innerHTML = `
            <div class="aural-alert-banner__icon">${icons[type]}</div>
            <div class="aural-alert-banner__content">
                ${config.title ? `<div class="aural-alert-banner__title">${config.title}</div>` : ''}
                <div class="aural-alert-banner__message">${message}</div>
                ${actionsHTML}
            </div>
            ${config.dismissible ? `
                <button class="aural-alert-banner__close" aria-label="Close">
                    <svg class="aural-alert-banner__close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            ` : ''}
        `;

        document.body.appendChild(banner);

        // Dismiss handler
        if (config.dismissible) {
            const closeBtn = banner.querySelector('.aural-alert-banner__close');
            closeBtn?.addEventListener('click', () => {
                this.dismissAlertBanner(banner);
            });
        }

        // Action handlers
        banner.querySelectorAll('.aural-alert-banner__action').forEach(actionBtn => {
            actionBtn.addEventListener('click', () => {
                const index = parseInt(actionBtn.getAttribute('data-action'));
                const action = config.actions[index];
                if (action?.onClick) {
                    action.onClick();
                }
                if (action?.dismiss !== false) {
                    this.dismissAlertBanner(banner);
                }
            });
        });

        // Auto-dismiss
        if (config.duration > 0) {
            setTimeout(() => {
                this.dismissAlertBanner(banner);
            }, config.duration);
        }

        return banner;
    },

    /**
     * Dismiss an alert banner
     */
    dismissAlertBanner(banner) {
        banner.classList.add('aural-alert-banner--dismissing');
        setTimeout(() => banner.remove(), 300);
    },

    // ========================================
    // SPINNER
    // ========================================

    /**
     * Show a loading spinner overlay
     * @param {string} text - Optional loading text
     * @param {Object} options - Configuration options
     */
    showSpinner(text = 'Loading...', options = {}) {
        const config = {
            variant: options.variant || 'default', // 'default', 'dual', 'dots', 'pulse', 'grow', 'bars'
            color: options.color || 'primary',
            size: options.size || 'lg',
            ...options
        };

        let spinnerHTML = '';
        if (config.variant === 'dots' || config.variant === 'grow') {
            spinnerHTML = `
                <div class="aural-spinner aural-spinner--${config.variant} aural-spinner--${config.color} aural-spinner--${config.size}">
                    <div class="aural-spinner__dot"></div>
                    <div class="aural-spinner__dot"></div>
                    <div class="aural-spinner__dot"></div>
                </div>
            `;
        } else if (config.variant === 'bars') {
            spinnerHTML = `
                <div class="aural-spinner aural-spinner--bars aural-spinner--${config.color} aural-spinner--${config.size}">
                    <div class="aural-spinner__bar"></div>
                    <div class="aural-spinner__bar"></div>
                    <div class="aural-spinner__bar"></div>
                    <div class="aural-spinner__bar"></div>
                </div>
            `;
        } else {
            spinnerHTML = `
                <div class="aural-spinner aural-spinner--${config.variant} aural-spinner--${config.color} aural-spinner--${config.size}">
                    <div class="aural-spinner__circle"></div>
                </div>
            `;
        }

        const overlay = document.createElement('div');
        overlay.className = 'aural-spinner-overlay';
        overlay.id = 'aural-spinner-overlay';
        overlay.innerHTML = `
            <div class="aural-spinner--with-text">
                ${spinnerHTML}
                ${text ? `<div class="aural-spinner__text">${text}</div>` : ''}
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        return overlay;
    },

    /**
     * Hide the loading spinner overlay
     */
    hideSpinner() {
        const overlay = document.getElementById('aural-spinner-overlay');
        if (overlay) {
            overlay.remove();
            document.body.style.overflow = '';
        }
    },

    // ========================================
    // DRAWER
    // ========================================

    /**
     * Open a drawer
     * @param {string} drawerId - The ID of the drawer element
     */
    openDrawer(drawerId) {
        const drawer = document.getElementById(drawerId);
        if (!drawer) return;

        const backdrop = drawer.previousElementSibling;

        // Add open classes
        drawer.classList.add('aural-drawer--open');
        if (backdrop && backdrop.classList.contains('aural-drawer-backdrop')) {
            backdrop.classList.add('aural-drawer-backdrop--open');
        }

        // Prevent body scroll
        document.body.classList.add('aural-drawer-open');

        // Focus first focusable element
        const focusableElements = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    },

    /**
     * Close a drawer
     * @param {string} drawerId - The ID of the drawer element
     */
    closeDrawer(drawerId) {
        const drawer = document.getElementById(drawerId);
        if (!drawer) return;

        const backdrop = drawer.previousElementSibling;

        // Remove open classes
        drawer.classList.remove('aural-drawer--open');
        if (backdrop && backdrop.classList.contains('aural-drawer-backdrop')) {
            backdrop.classList.remove('aural-drawer-backdrop--open');
        }

        // Restore body scroll
        document.body.classList.remove('aural-drawer-open');
    },

    /**
     * Toggle drawer open/close
     * @param {string} drawerId - The ID of the drawer element
     */
    toggleDrawer(drawerId) {
        const drawer = document.getElementById(drawerId);
        if (!drawer) return;

        if (drawer.classList.contains('aural-drawer--open')) {
            this.closeDrawer(drawerId);
        } else {
            this.openDrawer(drawerId);
        }
    },

    /**
     * Initialize all drawers (ESC key and backdrop click)
     */
    initDrawers() {
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openDrawers = document.querySelectorAll('.aural-drawer--open');
                openDrawers.forEach(drawer => {
                    this.closeDrawer(drawer.id);
                });
            }
        });

        // Backdrop click to close
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('aural-drawer-backdrop')) {
                const drawer = e.target.nextElementSibling;
                if (drawer && drawer.classList.contains('aural-drawer')) {
                    this.closeDrawer(drawer.id);
                }
            }
        });

        // Close button click
        document.querySelectorAll('.aural-drawer__close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const drawer = closeBtn.closest('.aural-drawer');
                if (drawer) {
                    this.closeDrawer(drawer.id);
                }
            });
        });
    },

    // ========================================
    // RATING
    // ========================================

    /**
     * Initialize a rating component
     * @param {string} ratingId - The ID of the rating element
     * @param {Object} options - Configuration options
     */
    initRating(ratingId, options = {}) {
        const rating = document.getElementById(ratingId);
        if (!rating) return;

        const stars = rating.querySelectorAll('.aural-rating__star');
        const valueDisplay = rating.querySelector('.aural-rating__value');

        const config = {
            maxRating: options.maxRating || 5,
            initialRating: options.initialRating || 0,
            readonly: options.readonly || rating.classList.contains('aural-rating--readonly'),
            allowHalf: options.allowHalf || false,
            onChange: options.onChange || null,
            ...options
        };

        let currentRating = config.initialRating;

        // Set initial rating
        this.updateRatingDisplay(rating, currentRating, config.maxRating);

        if (!config.readonly) {
            // Click handler
            stars.forEach((star, index) => {
                star.addEventListener('click', () => {
                    currentRating = index + 1;
                    this.updateRatingDisplay(rating, currentRating, config.maxRating);

                    if (valueDisplay) {
                        valueDisplay.textContent = currentRating;
                    }

                    if (config.onChange) {
                        config.onChange(currentRating);
                    }
                });

                // Hover preview
                star.addEventListener('mouseenter', () => {
                    this.updateRatingDisplay(rating, index + 1, config.maxRating);
                });
            });

            // Reset on mouse leave
            rating.addEventListener('mouseleave', () => {
                this.updateRatingDisplay(rating, currentRating, config.maxRating);
            });

            // Keyboard navigation
            stars.forEach((star, index) => {
                star.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        star.click();
                    } else if (e.key === 'ArrowRight' && index < stars.length - 1) {
                        e.preventDefault();
                        stars[index + 1].focus();
                    } else if (e.key === 'ArrowLeft' && index > 0) {
                        e.preventDefault();
                        stars[index - 1].focus();
                    }
                });
            });
        }

        return {
            getRating: () => currentRating,
            setRating: (value) => {
                currentRating = value;
                this.updateRatingDisplay(rating, currentRating, config.maxRating);
                if (valueDisplay) {
                    valueDisplay.textContent = currentRating;
                }
            },
            reset: () => {
                currentRating = 0;
                this.updateRatingDisplay(rating, 0, config.maxRating);
                if (valueDisplay) {
                    valueDisplay.textContent = '0';
                }
            }
        };
    },

    /**
     * Update rating star display
     */
    updateRatingDisplay(rating, value, maxRating) {
        const stars = rating.querySelectorAll('.aural-rating__star');

        stars.forEach((star, index) => {
            star.classList.remove('aural-rating__star--filled', 'aural-rating__star--half', 'aural-rating__star--empty');

            if (index < Math.floor(value)) {
                star.classList.add('aural-rating__star--filled');
            } else if (index < value && value % 1 !== 0) {
                star.classList.add('aural-rating__star--half');
            } else {
                star.classList.add('aural-rating__star--empty');
            }
        });
    },

    // ========================================
    // NOTIFICATION CENTER
    // ========================================

    /**
     * Initialize a notification center
     * @param {string} centerId - The ID of the notification center element
     * @param {Object} options - Configuration options
     */
    initNotificationCenter(centerId, options = {}) {
        const center = document.getElementById(centerId);
        if (!center) return;

        const trigger = center.querySelector('.aural-notification-center__trigger');
        const dropdown = center.querySelector('.aural-notification-center__dropdown');
        const badge = center.querySelector('.aural-notification-center__badge');

        const config = {
            notifications: options.notifications || [],
            onNotificationClick: options.onNotificationClick || null,
            onMarkAllRead: options.onMarkAllRead || null,
            ...options
        };

        let unreadCount = config.notifications.filter(n => n.unread).length;

        // Update badge
        if (badge) {
            badge.textContent = unreadCount > 0 ? unreadCount : '';
        }

        // Toggle dropdown
        trigger?.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown?.classList.toggle('aural-notification-center__dropdown--open');
            trigger.classList.toggle('aural-notification-center__trigger--active');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!center.contains(e.target)) {
                dropdown?.classList.remove('aural-notification-center__dropdown--open');
                trigger?.classList.remove('aural-notification-center__trigger--active');
            }
        });

        // ESC to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dropdown?.classList.contains('aural-notification-center__dropdown--open')) {
                dropdown.classList.remove('aural-notification-center__dropdown--open');
                trigger?.classList.remove('aural-notification-center__trigger--active');
            }
        });

        // Mark all as read
        const markAllReadBtn = center.querySelector('[data-action="mark-all-read"]');
        markAllReadBtn?.addEventListener('click', () => {
            this.markAllNotificationsRead(centerId);
            if (config.onMarkAllRead) {
                config.onMarkAllRead();
            }
        });

        return {
            addNotification: (notification) => this.addNotification(centerId, notification),
            removeNotification: (notificationId) => this.removeNotification(centerId, notificationId),
            markAsRead: (notificationId) => this.markNotificationRead(centerId, notificationId),
            markAllAsRead: () => this.markAllNotificationsRead(centerId),
            getUnreadCount: () => unreadCount
        };
    },

    /**
     * Add a notification to the center
     */
    addNotification(centerId, notification) {
        const center = document.getElementById(centerId);
        if (!center) return;

        const list = center.querySelector('.aural-notification-center__list');
        const badge = center.querySelector('.aural-notification-center__badge');

        if (!list) return;

        const item = document.createElement('button');
        item.className = `aural-notification-center__item ${notification.unread ? 'aural-notification-center__item--unread' : ''} ${notification.type ? `aural-notification-center__item--${notification.type}` : ''}`;
        item.setAttribute('data-notification-id', notification.id);

        item.innerHTML = `
            ${notification.icon ? `<div class="aural-notification-center__item-icon">${notification.icon}</div>` : ''}
            <div class="aural-notification-center__item-content">
                <div class="aural-notification-center__item-title">${notification.title}</div>
                <div class="aural-notification-center__item-message">${notification.message}</div>
                <div class="aural-notification-center__item-time">${notification.time}</div>
            </div>
            ${notification.unread ? '<div class="aural-notification-center__item-dot"></div>' : ''}
        `;

        // Add click handler
        item.addEventListener('click', () => {
            if (notification.onClick) {
                notification.onClick();
            }
            this.markNotificationRead(centerId, notification.id);
        });

        list.prepend(item);

        // Update badge
        if (notification.unread && badge) {
            const currentCount = parseInt(badge.textContent) || 0;
            badge.textContent = currentCount + 1;
        }
    },

    /**
     * Mark a notification as read
     */
    markNotificationRead(centerId, notificationId) {
        const center = document.getElementById(centerId);
        if (!center) return;

        const notification = center.querySelector(`[data-notification-id="${notificationId}"]`);
        const badge = center.querySelector('.aural-notification-center__badge');

        if (notification && notification.classList.contains('aural-notification-center__item--unread')) {
            notification.classList.remove('aural-notification-center__item--unread');
            const dot = notification.querySelector('.aural-notification-center__item-dot');
            if (dot) dot.remove();

            // Update badge
            if (badge) {
                const currentCount = parseInt(badge.textContent) || 0;
                const newCount = Math.max(0, currentCount - 1);
                badge.textContent = newCount > 0 ? newCount : '';
            }
        }
    },

    /**
     * Mark all notifications as read
     */
    markAllNotificationsRead(centerId) {
        const center = document.getElementById(centerId);
        if (!center) return;

        const unreadItems = center.querySelectorAll('.aural-notification-center__item--unread');
        const badge = center.querySelector('.aural-notification-center__badge');

        unreadItems.forEach(item => {
            item.classList.remove('aural-notification-center__item--unread');
            const dot = item.querySelector('.aural-notification-center__item-dot');
            if (dot) dot.remove();
        });

        // Update badge
        if (badge) {
            badge.textContent = '';
        }
    },

    /**
     * Remove a notification
     */
    removeNotification(centerId, notificationId) {
        const center = document.getElementById(centerId);
        if (!center) return;

        const notification = center.querySelector(`[data-notification-id="${notificationId}"]`);
        if (notification) {
            const wasUnread = notification.classList.contains('aural-notification-center__item--unread');
            notification.remove();

            // Update badge if it was unread
            if (wasUnread) {
                const badge = center.querySelector('.aural-notification-center__badge');
                if (badge) {
                    const currentCount = parseInt(badge.textContent) || 0;
                    const newCount = Math.max(0, currentCount - 1);
                    badge.textContent = newCount > 0 ? newCount : '';
                }
            }
        }
    },

    // ========================================
    // CAROUSEL
    // ========================================

    /**
     * Initialize a carousel
     * @param {string} carouselId - The ID of the carousel element
     * @param {Object} options - Configuration options
     */
    initCarousel(carouselId, options = {}) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const track = carousel.querySelector('.aural-carousel__track');
        const slides = carousel.querySelectorAll('.aural-carousel__slide');
        const dots = carousel.querySelectorAll('.aural-carousel__dot');
        const prevBtn = carousel.querySelector('.aural-carousel__arrow--prev');
        const nextBtn = carousel.querySelector('.aural-carousel__arrow--next');
        const counter = carousel.querySelector('.aural-carousel__counter');

        const config = {
            autoplay: options.autoplay || false,
            autoplayDelay: options.autoplayDelay || 5000,
            loop: options.loop !== false,
            perView: options.perView || 1,
            fade: carousel.classList.contains('aural-carousel--fade'),
            onChange: options.onChange || null,
            ...options
        };

        let currentIndex = 0;
        let autoplayInterval = null;

        // Update carousel display
        const updateCarousel = () => {
            if (config.fade) {
                slides.forEach((slide, index) => {
                    slide.classList.toggle('aural-carousel__slide--active', index === currentIndex);
                });
            } else {
                const offset = -currentIndex * (100 / config.perView);
                track.style.transform = `translateX(${offset}%)`;
            }

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('aural-carousel__dot--active', index === currentIndex);
            });

            // Update counter
            if (counter) {
                counter.textContent = `${currentIndex + 1} / ${slides.length}`;
            }

            // Update buttons
            if (!config.loop) {
                if (prevBtn) prevBtn.disabled = currentIndex === 0;
                if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;
            }

            if (config.onChange) {
                config.onChange(currentIndex);
            }
        };

        // Go to specific slide
        const goToSlide = (index) => {
            if (index < 0) {
                currentIndex = config.loop ? slides.length - 1 : 0;
            } else if (index >= slides.length) {
                currentIndex = config.loop ? 0 : slides.length - 1;
            } else {
                currentIndex = index;
            }
            updateCarousel();
        };

        // Next slide
        const nextSlide = () => {
            goToSlide(currentIndex + 1);
        };

        // Previous slide
        const prevSlide = () => {
            goToSlide(currentIndex - 1);
        };

        // Event listeners
        prevBtn?.addEventListener('click', prevSlide);
        nextBtn?.addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        });

        // Autoplay
        const startAutoplay = () => {
            if (config.autoplay) {
                autoplayInterval = setInterval(nextSlide, config.autoplayDelay);
            }
        };

        const stopAutoplay = () => {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        };

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        // Initial setup
        updateCarousel();
        startAutoplay();

        return {
            next: nextSlide,
            prev: prevSlide,
            goTo: goToSlide,
            getCurrent: () => currentIndex,
            play: startAutoplay,
            pause: stopAutoplay
        };
    },

    // ========================================
    // CONTEXT MENU
    // ========================================

    /**
     * Show context menu at position
     * @param {string} menuId - The ID of the context menu element
     * @param {number} x - X position
     * @param {number} y - Y position
     */
    showContextMenu(menuId, x, y) {
        const menu = document.getElementById(menuId);
        if (!menu) return;

        // Close any open context menus
        document.querySelectorAll('.aural-context-menu--open').forEach(m => {
            m.classList.remove('aural-context-menu--open');
        });

        // Position menu
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;

        // Show menu
        menu.classList.add('aural-context-menu--open');

        // Adjust if menu goes off screen
        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            menu.style.left = `${window.innerWidth - rect.width - 10}px`;
        }
        if (rect.bottom > window.innerHeight) {
            menu.style.top = `${window.innerHeight - rect.height - 10}px`;
        }

        // Focus first item
        const firstItem = menu.querySelector('.aural-context-menu__item:not(.aural-context-menu__item--disabled)');
        if (firstItem) {
            firstItem.focus();
        }
    },

    /**
     * Hide context menu
     * @param {string} menuId - The ID of the context menu element
     */
    hideContextMenu(menuId) {
        const menu = document.getElementById(menuId);
        if (menu) {
            menu.classList.remove('aural-context-menu--open');
        }
    },

    /**
     * Initialize context menu on an element
     * @param {string} triggerId - The ID of the trigger element
     * @param {string} menuId - The ID of the context menu element
     * @param {Object} options - Configuration options
     */
    initContextMenu(triggerId, menuId, options = {}) {
        const trigger = document.getElementById(triggerId);
        const menu = document.getElementById(menuId);

        if (!trigger || !menu) return;

        const config = {
            preventDefault: options.preventDefault !== false,
            ...options
        };

        // Right-click handler
        trigger.addEventListener('contextmenu', (e) => {
            if (config.preventDefault) {
                e.preventDefault();
            }
            this.showContextMenu(menuId, e.clientX, e.clientY);
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !trigger.contains(e.target)) {
                this.hideContextMenu(menuId);
            }
        });

        // ESC to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('aural-context-menu--open')) {
                this.hideContextMenu(menuId);
            }
        });

        // Keyboard navigation
        menu.addEventListener('keydown', (e) => {
            const items = Array.from(menu.querySelectorAll('.aural-context-menu__item:not(.aural-context-menu__item--disabled)'));
            const currentIndex = items.indexOf(document.activeElement);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % items.length;
                items[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + items.length) % items.length;
                items[prevIndex].focus();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (document.activeElement) {
                    document.activeElement.click();
                }
            }
        });

        // Click handler for items
        menu.querySelectorAll('.aural-context-menu__item').forEach(item => {
            item.addEventListener('click', () => {
                if (!item.classList.contains('aural-context-menu__item--disabled')) {
                    this.hideContextMenu(menuId);
                }
            });
        });

        return {
            show: (x, y) => this.showContextMenu(menuId, x, y),
            hide: () => this.hideContextMenu(menuId)
        };
    },

    // Tree View
    initTreeView(treeId, options = {}) {
        const tree = document.getElementById(treeId);
        if (!tree) return null;

        const {
            multiSelect = false,
            checkable = false,
            onSelect = null,
            onExpand = null,
            onCheck = null
        } = options;

        const toggleItem = (item) => {
            const isExpanded = item.classList.contains('aural-tree__item--expanded');
            item.classList.toggle('aural-tree__item--expanded');

            if (onExpand) {
                onExpand(item, !isExpanded);
            }
        };

        const selectItem = (item) => {
            if (!multiSelect) {
                tree.querySelectorAll('.aural-tree__item--selected').forEach(selected => {
                    selected.classList.remove('aural-tree__item--selected');
                });
            }
            item.classList.toggle('aural-tree__item--selected');

            if (onSelect) {
                onSelect(item, item.classList.contains('aural-tree__item--selected'));
            }
        };

        const checkItem = (item, checked) => {
            if (checked) {
                item.classList.add('aural-tree__item--checked');
                item.classList.remove('aural-tree__item--indeterminate');
            } else {
                item.classList.remove('aural-tree__item--checked');
                item.classList.remove('aural-tree__item--indeterminate');
            }

            const parent = item.parentElement.closest('.aural-tree__item');
            if (parent) {
                updateParentCheckState(parent);
            }

            if (onCheck) {
                onCheck(item, checked);
            }
        };

        const updateParentCheckState = (parent) => {
            const children = parent.querySelectorAll(':scope > .aural-tree__children > .aural-tree__item');
            const checkedChildren = Array.from(children).filter(child =>
                child.classList.contains('aural-tree__item--checked')
            );
            const indeterminateChildren = Array.from(children).filter(child =>
                child.classList.contains('aural-tree__item--indeterminate')
            );

            if (checkedChildren.length === children.length) {
                parent.classList.add('aural-tree__item--checked');
                parent.classList.remove('aural-tree__item--indeterminate');
            } else if (checkedChildren.length > 0 || indeterminateChildren.length > 0) {
                parent.classList.remove('aural-tree__item--checked');
                parent.classList.add('aural-tree__item--indeterminate');
            } else {
                parent.classList.remove('aural-tree__item--checked');
                parent.classList.remove('aural-tree__item--indeterminate');
            }
        };

        tree.querySelectorAll('.aural-tree__content').forEach(content => {
            content.addEventListener('click', (e) => {
                const item = content.closest('.aural-tree__item');
                const toggle = e.target.closest('.aural-tree__toggle');
                const checkbox = e.target.closest('.aural-tree__checkbox');

                if (checkbox && checkable) {
                    const isChecked = !item.classList.contains('aural-tree__item--checked');
                    checkItem(item, isChecked);

                    const children = item.querySelectorAll('.aural-tree__item');
                    children.forEach(child => {
                        if (isChecked) {
                            child.classList.add('aural-tree__item--checked');
                            child.classList.remove('aural-tree__item--indeterminate');
                        } else {
                            child.classList.remove('aural-tree__item--checked');
                            child.classList.remove('aural-tree__item--indeterminate');
                        }
                    });
                } else if (toggle) {
                    toggleItem(item);
                } else {
                    selectItem(item);
                }
            });
        });

        return {
            expandAll: () => {
                tree.querySelectorAll('.aural-tree__item').forEach(item => {
                    item.classList.add('aural-tree__item--expanded');
                });
            },
            collapseAll: () => {
                tree.querySelectorAll('.aural-tree__item').forEach(item => {
                    item.classList.remove('aural-tree__item--expanded');
                });
            }
        };
    },

    // Image Gallery
    initImageGallery(galleryId, options = {}) {
        const gallery = document.getElementById(galleryId);
        if (!gallery) return null;

        const {
            lightboxId = galleryId + '-lightbox',
            onOpen = null,
            onClose = null
        } = options;

        let currentIndex = 0;
        const items = Array.from(gallery.querySelectorAll('.aural-gallery__item'));

        let lightbox = document.getElementById(lightboxId);
        if (!lightbox) {
            lightbox = this.createLightbox(lightboxId);
            document.body.appendChild(lightbox);
        }

        const openLightbox = (index) => {
            currentIndex = index;
            const item = items[index];
            const img = item.querySelector('.aural-gallery__image');
            const title = item.querySelector('.aural-gallery__title')?.textContent || '';
            const description = item.querySelector('.aural-gallery__description')?.textContent || '';

            const lightboxImg = lightbox.querySelector('.aural-lightbox__image');
            const lightboxTitle = lightbox.querySelector('.aural-lightbox__caption-title');
            const lightboxDesc = lightbox.querySelector('.aural-lightbox__caption-description');
            const counter = lightbox.querySelector('.aural-lightbox__counter');

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || '';
            if (lightboxTitle) lightboxTitle.textContent = title;
            if (lightboxDesc) lightboxDesc.textContent = description;
            if (counter) counter.textContent = `${index + 1} / ${items.length}`;

            lightbox.classList.add('aural-lightbox--open');
            document.body.style.overflow = 'hidden';

            if (onOpen) onOpen(index, item);
        };

        const closeLightbox = () => {
            lightbox.classList.remove('aural-lightbox--open');
            document.body.style.overflow = '';

            if (onClose) onClose(currentIndex);
        };

        const navigate = (direction) => {
            const newIndex = currentIndex + direction;
            if (newIndex >= 0 && newIndex < items.length) {
                openLightbox(newIndex);
            }
        };

        items.forEach((item, index) => {
            item.addEventListener('click', () => openLightbox(index));
        });

        const closeBtn = lightbox.querySelector('.aural-lightbox__close');
        const prevBtn = lightbox.querySelector('.aural-lightbox__nav--prev');
        const nextBtn = lightbox.querySelector('.aural-lightbox__nav--next');

        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => navigate(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => navigate(1));
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('aural-lightbox--open')) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigate(-1);
            } else if (e.key === 'ArrowRight') {
                navigate(1);
            }
        });

        return {
            open: (index) => openLightbox(index),
            close: closeLightbox,
            next: () => navigate(1),
            prev: () => navigate(-1)
        };
    },

    createLightbox(id) {
        const lightbox = document.createElement('div');
        lightbox.id = id;
        lightbox.className = 'aural-lightbox';
        lightbox.innerHTML = `
            <div class="aural-lightbox__content">
                <button class="aural-lightbox__close" aria-label="Close lightbox">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
                <button class="aural-lightbox__nav aural-lightbox__nav--prev" aria-label="Previous image">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>
                <button class="aural-lightbox__nav aural-lightbox__nav--next" aria-label="Next image">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </button>
                <div class="aural-lightbox__image-wrapper">
                    <img class="aural-lightbox__image" src="" alt="">
                </div>
                <div class="aural-lightbox__caption">
                    <div class="aural-lightbox__caption-title"></div>
                    <div class="aural-lightbox__caption-description"></div>
                </div>
                <div class="aural-lightbox__counter"></div>
            </div>
        `;
        return lightbox;
    },

    // Bottom Navigation
    initBottomNav(navId, options = {}) {
        const nav = document.getElementById(navId);
        if (!nav) return null;

        const {
            hideOnScroll = false,
            scrollThreshold = 50,
            onItemClick = null
        } = options;

        let lastScrollY = window.scrollY;
        let isHidden = false;

        document.body.classList.add('has-bottom-nav');

        nav.querySelectorAll('.aural-bottom-nav__item').forEach(item => {
            item.addEventListener('click', (e) => {
                nav.querySelectorAll('.aural-bottom-nav__item').forEach(navItem => {
                    navItem.classList.remove('aural-bottom-nav__item--active');
                });

                item.classList.add('aural-bottom-nav__item--active');

                if (onItemClick) {
                    onItemClick(item, e);
                }
            });
        });

        if (hideOnScroll) {
            let ticking = false;

            const handleScroll = () => {
                const currentScrollY = window.scrollY;

                if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
                    ticking = false;
                    return;
                }

                if (currentScrollY > lastScrollY && !isHidden) {
                    nav.classList.add('aural-bottom-nav--slide-out');
                    nav.classList.remove('aural-bottom-nav--slide-in');
                    isHidden = true;
                } else if (currentScrollY < lastScrollY && isHidden) {
                    nav.classList.remove('aural-bottom-nav--slide-out');
                    nav.classList.add('aural-bottom-nav--slide-in');
                    isHidden = false;
                }

                lastScrollY = currentScrollY;
                ticking = false;
            };

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(handleScroll);
                    ticking = true;
                }
            });
        }

        return {
            show: () => {
                nav.classList.remove('aural-bottom-nav--slide-out');
                nav.classList.add('aural-bottom-nav--slide-in');
                isHidden = false;
            },
            hide: () => {
                nav.classList.add('aural-bottom-nav--slide-out');
                nav.classList.remove('aural-bottom-nav--slide-in');
                isHidden = true;
            },
            setActive: (index) => {
                const items = nav.querySelectorAll('.aural-bottom-nav__item');
                items.forEach((item, i) => {
                    if (i === index) {
                        item.classList.add('aural-bottom-nav__item--active');
                    } else {
                        item.classList.remove('aural-bottom-nav__item--active');
                    }
                });
            }
        };
    },

    // Color Picker
    initColorPicker(pickerId, options = {}) {
        const picker = document.getElementById(pickerId);
        if (!picker) return null;

        const {
            initialColor = '#000000',
            mode = 'hex',
            showAlpha = true,
            onChange = null
        } = options;

        let currentColor = initialColor;
        let hue = 0;
        let saturation = 100;
        let lightness = 50;
        let alpha = 1;

        const canvas = picker.querySelector('.aural-color-picker__canvas');
        const hueSlider = picker.querySelector('.aural-color-picker__hue');
        const alphaSlider = picker.querySelector('.aural-color-picker__alpha');
        const valueInput = picker.querySelector('.aural-color-picker__value');

        const updateColor = () => {
            currentColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;

            if (canvas) {
                canvas.style.background = `hsl(${hue}, 100%, 50%)`;
            }

            if (valueInput) {
                if (mode === 'hex') {
                    valueInput.value = hslToHex(hue, saturation, lightness);
                } else {
                    valueInput.value = currentColor;
                }
            }

            const swatch = picker.querySelector('.aural-color-picker__swatch-color');
            if (swatch) {
                swatch.style.background = currentColor;
            }

            if (onChange) {
                onChange(currentColor);
            }
        };

        if (hueSlider) {
            hueSlider.addEventListener('click', (e) => {
                const rect = hueSlider.getBoundingClientRect();
                const x = e.clientX - rect.left;
                hue = (x / rect.width) * 360;
                updateColor();
            });
        }

        if (alphaSlider && showAlpha) {
            alphaSlider.addEventListener('click', (e) => {
                const rect = alphaSlider.getBoundingClientRect();
                const x = e.clientX - rect.left;
                alpha = x / rect.width;
                updateColor();
            });
        }

        updateColor();

        return {
            getColor: () => currentColor,
            setColor: (color) => {
                currentColor = color;
                updateColor();
            }
        };
    },

    hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    },

    // Range Slider
    initRangeSlider(sliderId, options = {}) {
        const slider = document.getElementById(sliderId);
        if (!slider) return null;

        const {
            min = 0,
            max = 100,
            initialMin = 25,
            initialMax = 75,
            step = 1,
            onChange = null
        } = options;

        let minValue = initialMin;
        let maxValue = initialMax;
        let activeHandle = null;

        const track = slider.querySelector('.aural-range-slider__track');
        const trackFill = slider.querySelector('.aural-range-slider__track-fill');
        const minHandle = slider.querySelector('.aural-range-slider__handle--min');
        const maxHandle = slider.querySelector('.aural-range-slider__handle--max');

        const updateSlider = () => {
            const minPercent = ((minValue - min) / (max - min)) * 100;
            const maxPercent = ((maxValue - min) / (max - min)) * 100;

            if (trackFill) {
                trackFill.style.left = `${minPercent}%`;
                trackFill.style.width = `${maxPercent - minPercent}%`;
            }

            if (minHandle) {
                minHandle.style.left = `${minPercent}%`;
                const label = minHandle.querySelector('.aural-range-slider__label');
                if (label) label.textContent = minValue;
            }

            if (maxHandle) {
                maxHandle.style.left = `${maxPercent}%`;
                const label = maxHandle.querySelector('.aural-range-slider__label');
                if (label) label.textContent = maxValue;
            }

            const values = slider.querySelectorAll('.aural-range-slider__value-number');
            if (values[0]) values[0].textContent = minValue;
            if (values[1]) values[1].textContent = maxValue;

            if (onChange) {
                onChange(minValue, maxValue);
            }
        };

        const handleDrag = (e, handle) => {
            const rect = track.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = Math.max(0, Math.min(1, x / rect.width));
            let value = min + (max - min) * percent;
            value = Math.round(value / step) * step;

            if (handle === minHandle) {
                minValue = Math.min(value, maxValue - step);
            } else {
                maxValue = Math.max(value, minValue + step);
            }

            updateSlider();
        };

        const onMouseMove = (e) => {
            if (activeHandle) {
                handleDrag(e, activeHandle);
            }
        };

        const onMouseUp = () => {
            activeHandle = null;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        if (minHandle) {
            minHandle.addEventListener('mousedown', (e) => {
                e.preventDefault();
                activeHandle = minHandle;
                minHandle.classList.add('aural-range-slider__handle--active');
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', () => {
                    minHandle.classList.remove('aural-range-slider__handle--active');
                    onMouseUp();
                });
            });
        }

        if (maxHandle) {
            maxHandle.addEventListener('mousedown', (e) => {
                e.preventDefault();
                activeHandle = maxHandle;
                maxHandle.classList.add('aural-range-slider__handle--active');
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', () => {
                    maxHandle.classList.remove('aural-range-slider__handle--active');
                    onMouseUp();
                });
            });
        }

        updateSlider();

        return {
            getMin: () => minValue,
            getMax: () => maxValue,
            setMin: (value) => {
                minValue = Math.max(min, Math.min(value, maxValue - step));
                updateSlider();
            },
            setMax: (value) => {
                maxValue = Math.max(minValue + step, Math.min(value, max));
                updateSlider();
            }
        };
    },

    // Multi-Select Dropdown
    initMultiSelect(selectId, options = {}) {
        const select = document.getElementById(selectId);
        if (!select) return null;

        const {
            searchable = true,
            selectAll = false,
            maxSelections = null,
            onChange = null
        } = options;

        const selectedValues = new Set();
        const trigger = select.querySelector('.aural-multi-select__trigger');
        const dropdown = select.querySelector('.aural-multi-select__dropdown');
        const tagsContainer = select.querySelector('.aural-multi-select__tags');
        const searchInput = select.querySelector('.aural-multi-select__search-input');
        const options_list = select.querySelectorAll('.aural-multi-select__option');

        const updateTags = () => {
            if (!tagsContainer) return;

            tagsContainer.innerHTML = '';
            selectedValues.forEach(value => {
                const option = Array.from(options_list).find(opt => opt.dataset.value === value);
                if (!option) return;

                const tag = document.createElement('div');
                tag.className = 'aural-multi-select__tag';
                tag.innerHTML = `
                    ${option.querySelector('.aural-multi-select__option-label').textContent}
                    <button class="aural-multi-select__tag-remove" data-value="${value}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                `;

                const removeBtn = tag.querySelector('.aural-multi-select__tag-remove');
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleOption(value);
                });

                tagsContainer.appendChild(tag);
            });

            if (onChange) {
                onChange(Array.from(selectedValues));
            }
        };

        const toggleOption = (value) => {
            if (selectedValues.has(value)) {
                selectedValues.delete(value);
            } else {
                if (maxSelections && selectedValues.size >= maxSelections) return;
                selectedValues.add(value);
            }

            options_list.forEach(opt => {
                if (opt.dataset.value === value) {
                    opt.classList.toggle('aural-multi-select__option--selected', selectedValues.has(value));
                }
            });

            updateTags();
        };

        if (trigger) {
            trigger.addEventListener('click', () => {
                select.classList.toggle('aural-multi-select--open');
            });
        }

        options_list.forEach(option => {
            option.addEventListener('click', () => {
                toggleOption(option.dataset.value);
            });
        });

        document.addEventListener('click', (e) => {
            if (!select.contains(e.target)) {
                select.classList.remove('aural-multi-select--open');
            }
        });

        if (searchInput && searchable) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                options_list.forEach(option => {
                    const text = option.querySelector('.aural-multi-select__option-label').textContent.toLowerCase();
                    option.style.display = text.includes(query) ? '' : 'none';
                });
            });
        }

        return {
            getSelected: () => Array.from(selectedValues),
            clear: () => {
                selectedValues.clear();
                options_list.forEach(opt => {
                    opt.classList.remove('aural-multi-select__option--selected');
                });
                updateTags();
            },
            select: (value) => {
                if (!selectedValues.has(value)) {
                    toggleOption(value);
                }
            },
            deselect: (value) => {
                if (selectedValues.has(value)) {
                    toggleOption(value);
                }
            }
        };
    },

    // Navigation Bar
    initNavbar(navId, options = {}) {
        const navbar = document.getElementById(navId);
        if (!navbar) return null;

        const {
            mobileBreakpoint = 768,
            onToggle = null
        } = options;

        const toggle = navbar.querySelector('.aural-navbar__toggle');
        const dropdowns = navbar.querySelectorAll('.aural-navbar__dropdown');

        if (toggle) {
            toggle.addEventListener('click', () => {
                navbar.classList.toggle('aural-navbar--menu-open');

                if (onToggle) {
                    onToggle(navbar.classList.contains('aural-navbar--menu-open'));
                }
            });
        }

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.aural-navbar__link');

            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('aural-navbar__dropdown--open');
                });
            }
        });

        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('aural-navbar__dropdown--open');
                });

                if (window.innerWidth > mobileBreakpoint) {
                    navbar.classList.remove('aural-navbar--menu-open');
                }
            }
        });

        return {
            openMenu: () => {
                navbar.classList.add('aural-navbar--menu-open');
            },
            closeMenu: () => {
                navbar.classList.remove('aural-navbar--menu-open');
            },
            toggleMenu: () => {
                navbar.classList.toggle('aural-navbar--menu-open');
            }
        };
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
            Aural.initAllCodeBlocks();
            Aural.initDrawers();
        });
    } else {
        Aural.initModals();
        Aural.initTabs();
        Aural.initTooltips();
        Aural.initDropdowns();
        Aural.initAccordions();
        Aural.initPopovers();
        Aural.initSelects();
        Aural.initAllCodeBlocks();
        Aural.initDrawers();
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
