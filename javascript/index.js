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
    }
};

// Auto-initialize modals when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => Aural.initModals());
    } else {
        Aural.initModals();
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
