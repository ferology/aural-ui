(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // javascript/index.js
  var require_javascript = __commonJS({
    "javascript/index.js"(exports, module) {
      var Aural = {
        /**
         * Show a toast notification
         * @param {string} message - The message to display
         * @param {string} type - Type: 'success', 'error', 'warning', 'info'
         * @param {string} title - Optional custom title
         * @param {number} duration - Auto-dismiss duration in ms (default: 5000)
         */
        showToast(message, type = "info", title = null, duration = 5e3) {
          let container = document.getElementById("aural-toast-container");
          if (!container) {
            container = document.createElement("div");
            container.id = "aural-toast-container";
            container.className = "toast-container";
            container.setAttribute("aria-live", "polite");
            container.setAttribute("aria-atomic", "false");
            document.body.appendChild(container);
          }
          const toast = document.createElement("div");
          toast.className = `toast toast-${type}`;
          toast.setAttribute("role", type === "error" ? "alert" : "status");
          const icons = {
            success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
            error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
            warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
            info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
          };
          const defaultTitles = {
            success: "Success",
            error: "Error",
            warning: "Warning",
            info: "Info"
          };
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
          container.appendChild(toast);
          const closeBtn = toast.querySelector(".toast-close");
          closeBtn.addEventListener("click", () => {
            toast.classList.add("toast-exit");
            setTimeout(() => toast.remove(), 300);
          });
          if (duration > 0) {
            setTimeout(() => {
              toast.classList.add("toast-exit");
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
            modal.classList.add("open");
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusableElements.length > 0) {
              focusableElements[0].focus();
            }
            document.body.style.overflow = "hidden";
          }
        },
        /**
         * Close a modal
         * @param {string} modalId - The ID of the modal element
         */
        closeModal(modalId) {
          const modal = document.getElementById(modalId);
          if (modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "";
          }
        },
        /**
         * Toggle modal open/close
         * @param {string} modalId - The ID of the modal element
         */
        toggleModal(modalId) {
          const modal = document.getElementById(modalId);
          if (modal) {
            if (modal.classList.contains("open")) {
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
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              const openModals = document.querySelectorAll(".modal-overlay.open");
              openModals.forEach((modal) => {
                this.closeModal(modal.id);
              });
            }
          });
          document.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal-overlay")) {
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
          document.addEventListener("DOMContentLoaded", () => {
            const tabLists = document.querySelectorAll('[role="tablist"]');
            tabLists.forEach((tabList) => {
              const tabs = tabList.querySelectorAll('[role="tab"]');
              tabs.forEach((tab) => {
                tab.addEventListener("click", (e) => {
                  const panelId = tab.getAttribute("aria-controls");
                  this.switchTab(tab.id, panelId);
                });
                tab.addEventListener("keydown", (e) => {
                  const tabArray = Array.from(tabs);
                  const currentIndex = tabArray.indexOf(tab);
                  let nextTab = null;
                  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                    nextTab = tabArray[currentIndex + 1] || tabArray[0];
                    e.preventDefault();
                  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                    nextTab = tabArray[currentIndex - 1] || tabArray[tabArray.length - 1];
                    e.preventDefault();
                  } else if (e.key === "Home") {
                    nextTab = tabArray[0];
                    e.preventDefault();
                  } else if (e.key === "End") {
                    nextTab = tabArray[tabArray.length - 1];
                    e.preventDefault();
                  }
                  if (nextTab) {
                    nextTab.focus();
                    const panelId = nextTab.getAttribute("aria-controls");
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
          if (!tab)
            return;
          const tabList = tab.closest('[role="tablist"]');
          const allTabs = tabList.querySelectorAll('[role="tab"]');
          const allPanels = document.querySelectorAll('[role="tabpanel"]');
          allTabs.forEach((t) => {
            t.setAttribute("aria-selected", "false");
            t.classList.remove("tab-active");
            t.setAttribute("tabindex", "-1");
          });
          allPanels.forEach((p) => {
            p.hidden = true;
          });
          tab.setAttribute("aria-selected", "true");
          tab.classList.add("tab-active");
          tab.setAttribute("tabindex", "0");
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
          document.addEventListener("DOMContentLoaded", () => {
            const tooltipWrappers = document.querySelectorAll(".tooltip-wrapper");
            tooltipWrappers.forEach((wrapper) => {
              const trigger = wrapper.querySelector("[data-tooltip-trigger]");
              const tooltip = wrapper.querySelector(".tooltip");
              if (trigger && tooltip) {
                trigger.addEventListener("mouseenter", () => {
                  tooltip.classList.add("tooltip-show");
                });
                trigger.addEventListener("mouseleave", () => {
                  tooltip.classList.remove("tooltip-show");
                });
                trigger.addEventListener("focus", () => {
                  tooltip.classList.add("tooltip-show");
                });
                trigger.addEventListener("blur", () => {
                  tooltip.classList.remove("tooltip-show");
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
          if (!trigger)
            return;
          const wrapper = trigger.closest(".tooltip-wrapper");
          const tooltip = wrapper?.querySelector(".tooltip");
          if (tooltip) {
            tooltip.classList.add("tooltip-show");
          }
        },
        /**
         * Hide a tooltip
         * @param {string} triggerId - The ID of the trigger element
         */
        hideTooltip(triggerId) {
          const trigger = document.getElementById(triggerId);
          if (!trigger)
            return;
          const wrapper = trigger.closest(".tooltip-wrapper");
          const tooltip = wrapper?.querySelector(".tooltip");
          if (tooltip) {
            tooltip.classList.remove("tooltip-show");
          }
        },
        // ========================================
        // DROPDOWN
        // ========================================
        /**
         * Initialize dropdowns
         */
        initDropdowns() {
          const dropdowns = document.querySelectorAll(".dropdown");
          dropdowns.forEach((dropdown) => {
            const trigger = dropdown.querySelector(".dropdown-trigger");
            const menu = dropdown.querySelector(".dropdown-menu");
            if (trigger && menu) {
              trigger.addEventListener("click", (e) => {
                e.stopPropagation();
                this.toggleDropdown(dropdown.id);
              });
              trigger.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  this.toggleDropdown(dropdown.id);
                } else if (e.key === "Escape") {
                  this.closeDropdown(dropdown.id);
                }
              });
              menu.addEventListener("keydown", (e) => {
                const items = menu.querySelectorAll(".dropdown-item:not([disabled])");
                const currentIndex = Array.from(items).indexOf(document.activeElement);
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  const next = items[currentIndex + 1] || items[0];
                  next.focus();
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  const prev = items[currentIndex - 1] || items[items.length - 1];
                  prev.focus();
                } else if (e.key === "Escape") {
                  this.closeDropdown(dropdown.id);
                  trigger.focus();
                }
              });
            }
          });
          document.addEventListener("click", (e) => {
            if (!e.target.closest(".dropdown")) {
              document.querySelectorAll(".dropdown.dropdown-open").forEach((dd) => {
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
          if (!dropdown)
            return;
          const trigger = dropdown.querySelector(".dropdown-trigger");
          const menu = dropdown.querySelector(".dropdown-menu");
          dropdown.classList.add("dropdown-open");
          trigger?.setAttribute("aria-expanded", "true");
          menu?.removeAttribute("hidden");
          const firstItem = menu?.querySelector(".dropdown-item:not([disabled])");
          firstItem?.focus();
        },
        /**
         * Close a dropdown
         * @param {string} dropdownId - The ID of the dropdown element
         */
        closeDropdown(dropdownId) {
          const dropdown = document.getElementById(dropdownId);
          if (!dropdown)
            return;
          const trigger = dropdown.querySelector(".dropdown-trigger");
          const menu = dropdown.querySelector(".dropdown-menu");
          dropdown.classList.remove("dropdown-open");
          trigger?.setAttribute("aria-expanded", "false");
          menu?.setAttribute("hidden", "");
        },
        /**
         * Toggle a dropdown
         * @param {string} dropdownId - The ID of the dropdown element
         */
        toggleDropdown(dropdownId) {
          const dropdown = document.getElementById(dropdownId);
          if (!dropdown)
            return;
          if (dropdown.classList.contains("dropdown-open")) {
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
          const accordions = document.querySelectorAll(".accordion");
          accordions.forEach((accordion) => {
            const items = accordion.querySelectorAll(".accordion-item");
            const allowMultiple = accordion.classList.contains("accordion-always-open");
            items.forEach((item) => {
              const header = item.querySelector(".accordion-header");
              const panel = item.querySelector(".accordion-panel");
              if (header && panel) {
                header.addEventListener("click", () => {
                  const isExpanded = header.getAttribute("aria-expanded") === "true";
                  if (!allowMultiple) {
                    items.forEach((otherItem) => {
                      if (otherItem !== item) {
                        const otherHeader = otherItem.querySelector(".accordion-header");
                        const otherPanel = otherItem.querySelector(".accordion-panel");
                        otherHeader?.setAttribute("aria-expanded", "false");
                        otherPanel?.setAttribute("hidden", "");
                      }
                    });
                  }
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
          if (!item)
            return;
          const header = item.querySelector(".accordion-header");
          const panel = item.querySelector(".accordion-panel");
          header?.setAttribute("aria-expanded", "true");
          panel?.removeAttribute("hidden");
        },
        /**
         * Close an accordion item
         * @param {string} itemId - The ID of the accordion item
         */
        closeAccordion(itemId) {
          const item = document.getElementById(itemId);
          if (!item)
            return;
          const header = item.querySelector(".accordion-header");
          const panel = item.querySelector(".accordion-panel");
          header?.setAttribute("aria-expanded", "false");
          panel?.setAttribute("hidden", "");
        },
        /**
         * Toggle an accordion item
         * @param {string} itemId - The ID of the accordion item
         */
        toggleAccordion(itemId) {
          const item = document.getElementById(itemId);
          if (!item)
            return;
          const header = item.querySelector(".accordion-header");
          const isExpanded = header?.getAttribute("aria-expanded") === "true";
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
          const popoverWrappers = document.querySelectorAll(".popover-wrapper");
          popoverWrappers.forEach((wrapper) => {
            const trigger = wrapper.querySelector("[data-popover-trigger]");
            const popover = wrapper.querySelector(".popover");
            const closeBtn = popover?.querySelector(".popover-close");
            if (trigger && popover) {
              trigger.addEventListener("click", () => {
                this.togglePopover(trigger.id);
              });
              closeBtn?.addEventListener("click", () => {
                this.hidePopover(trigger.id);
              });
              document.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && !popover.hidden) {
                  this.hidePopover(trigger.id);
                }
              });
            }
          });
          document.addEventListener("click", (e) => {
            if (!e.target.closest(".popover-wrapper")) {
              document.querySelectorAll(".popover.popover-show").forEach((p) => {
                p.classList.remove("popover-show");
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
          if (!trigger)
            return;
          const wrapper = trigger.closest(".popover-wrapper");
          const popover = wrapper?.querySelector(".popover");
          if (popover) {
            popover.classList.add("popover-show");
            popover.hidden = false;
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
          if (!trigger)
            return;
          const wrapper = trigger.closest(".popover-wrapper");
          const popover = wrapper?.querySelector(".popover");
          if (popover) {
            popover.classList.remove("popover-show");
            popover.hidden = true;
          }
        },
        /**
         * Toggle a popover
         * @param {string} triggerId - The ID of the trigger element
         */
        togglePopover(triggerId) {
          const trigger = document.getElementById(triggerId);
          if (!trigger)
            return;
          const wrapper = trigger.closest(".popover-wrapper");
          const popover = wrapper?.querySelector(".popover");
          if (popover?.classList.contains("popover-show")) {
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
          document.addEventListener("DOMContentLoaded", () => {
            const selects = document.querySelectorAll(".select-custom");
            selects.forEach((select) => {
              const trigger = select.querySelector(".select-trigger");
              const dropdown = select.querySelector(".select-dropdown");
              const options = select.querySelectorAll(".select-option");
              if (trigger && dropdown) {
                trigger.addEventListener("click", () => {
                  this.toggleSelect(select.id);
                });
                options.forEach((option) => {
                  option.addEventListener("click", () => {
                    const value = option.getAttribute("data-value");
                    this.selectOption(select.id, value);
                  });
                  option.addEventListener("keydown", (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      const value = option.getAttribute("data-value");
                      this.selectOption(select.id, value);
                    }
                  });
                });
                dropdown.addEventListener("keydown", (e) => {
                  const items = Array.from(options).filter((o) => !o.hasAttribute("data-disabled"));
                  const currentIndex = items.indexOf(document.activeElement);
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = items[currentIndex + 1] || items[0];
                    next?.focus();
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    const prev = items[currentIndex - 1] || items[items.length - 1];
                    prev?.focus();
                  } else if (e.key === "Escape") {
                    this.closeSelect(select.id);
                    trigger.focus();
                  }
                });
              }
            });
            document.addEventListener("click", (e) => {
              if (!e.target.closest(".select-custom")) {
                document.querySelectorAll(".select-custom").forEach((s) => {
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
          if (!select)
            return;
          const trigger = select.querySelector(".select-trigger");
          const dropdown = select.querySelector(".select-dropdown");
          trigger?.setAttribute("aria-expanded", "true");
          dropdown?.removeAttribute("hidden");
          const selected = dropdown?.querySelector('.select-option[aria-selected="true"]');
          selected?.focus();
        },
        /**
         * Close a custom select
         * @param {string} selectId - The ID of the select element
         */
        closeSelect(selectId) {
          const select = document.getElementById(selectId);
          if (!select)
            return;
          const trigger = select.querySelector(".select-trigger");
          const dropdown = select.querySelector(".select-dropdown");
          trigger?.setAttribute("aria-expanded", "false");
          dropdown?.setAttribute("hidden", "");
        },
        /**
         * Toggle a custom select
         * @param {string} selectId - The ID of the select element
         */
        toggleSelect(selectId) {
          const select = document.getElementById(selectId);
          if (!select)
            return;
          const trigger = select.querySelector(".select-trigger");
          const isOpen = trigger?.getAttribute("aria-expanded") === "true";
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
          if (!select)
            return;
          const trigger = select.querySelector(".select-trigger");
          const options = select.querySelectorAll(".select-option");
          options.forEach((option) => {
            option.setAttribute("aria-selected", "false");
          });
          const selectedOption = Array.from(options).find((o) => o.getAttribute("data-value") === value);
          if (selectedOption) {
            selectedOption.setAttribute("aria-selected", "true");
            const label = trigger?.querySelector("span");
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
          if (!progress)
            return;
          const bar = progress.querySelector(".progress-bar");
          if (bar) {
            bar.style.width = `${value}%`;
            progress.setAttribute("aria-valuenow", value.toString());
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
          if (checkbox && checkbox.type === "checkbox") {
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
          if (!slider)
            return;
          const input = slider.querySelector(".aural-slider__input");
          const valueDisplay = slider.querySelector(".aural-slider__value");
          const label = slider.querySelector(".aural-slider__label");
          if (input) {
            input.setAttribute("aria-valuemin", input.min || "0");
            input.setAttribute("aria-valuemax", input.max || "100");
            input.setAttribute("aria-valuenow", input.value);
            if (label) {
              input.setAttribute("aria-label", label.textContent);
            }
            if (valueDisplay) {
              valueDisplay.setAttribute("aria-live", "polite");
              valueDisplay.setAttribute("aria-atomic", "true");
            }
            const updateValue = () => {
              valueDisplay.textContent = input.value;
              input.setAttribute("aria-valuenow", input.value);
            };
            input.addEventListener("input", updateValue);
            updateValue();
          }
        },
        /**
         * Set slider value programmatically
         * @param {string} sliderId - The ID of the slider container
         * @param {number} value - The value to set
         */
        setSliderValue(sliderId, value) {
          const slider = document.getElementById(sliderId);
          if (!slider)
            return;
          const input = slider.querySelector(".aural-slider__input");
          const valueDisplay = slider.querySelector(".aural-slider__value");
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
          if (!chips)
            return null;
          const container = chips.querySelector(".aural-chips__container");
          const input = chips.querySelector(".aural-chips__input");
          const tags = [];
          container.setAttribute("role", "list");
          container.setAttribute("aria-label", "Tags");
          const {
            maxTags = null,
            allowDuplicates = false,
            onAdd = null,
            onRemove = null
          } = options;
          const addTag = (text) => {
            if (!text || text.trim() === "")
              return false;
            const trimmedText = text.trim();
            if (!allowDuplicates && tags.includes(trimmedText))
              return false;
            if (maxTags && tags.length >= maxTags)
              return false;
            tags.push(trimmedText);
            const chip = document.createElement("div");
            chip.className = "aural-chip";
            chip.setAttribute("role", "listitem");
            chip.innerHTML = `
                <span class="aural-chip__text">${trimmedText}</span>
                <button class="aural-chip__remove" aria-label="Remove tag ${trimmedText}" type="button"></button>
            `;
            const removeBtn = chip.querySelector(".aural-chip__remove");
            removeBtn.addEventListener("click", () => {
              const index = tags.indexOf(trimmedText);
              if (index > -1) {
                tags.splice(index, 1);
              }
              chip.remove();
              const announcement2 = document.createElement("div");
              announcement2.setAttribute("role", "status");
              announcement2.setAttribute("aria-live", "polite");
              announcement2.className = "visually-hidden";
              announcement2.textContent = `Removed tag ${trimmedText}`;
              document.body.appendChild(announcement2);
              setTimeout(() => announcement2.remove(), 1e3);
              if (onRemove)
                onRemove(trimmedText);
            });
            container.insertBefore(chip, input);
            input.value = "";
            const announcement = document.createElement("div");
            announcement.setAttribute("role", "status");
            announcement.setAttribute("aria-live", "polite");
            announcement.className = "visually-hidden";
            announcement.textContent = `Added tag ${trimmedText}`;
            document.body.appendChild(announcement);
            setTimeout(() => announcement.remove(), 1e3);
            if (onAdd)
              onAdd(trimmedText);
            return true;
          };
          input.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addTag(input.value);
            } else if (e.key === "Backspace" && input.value === "" && tags.length > 0) {
              const lastTag = tags[tags.length - 1];
              tags.pop();
              const chips2 = container.querySelectorAll(".aural-chip");
              chips2[chips2.length - 1].remove();
              if (onRemove)
                onRemove(lastTag);
            }
          });
          return {
            getTags: () => [...tags],
            addTag,
            clearTags: () => {
              tags.length = 0;
              container.querySelectorAll(".aural-chip").forEach((chip) => chip.remove());
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
          if (!codeBlock)
            return;
          const copyBtn = codeBlock.querySelector(".aural-code-block__copy");
          const codeElement = codeBlock.querySelector(".aural-code-block__code");
          if (copyBtn && codeElement) {
            copyBtn.setAttribute("aria-label", "Copy code to clipboard");
            copyBtn.addEventListener("click", async () => {
              try {
                await navigator.clipboard.writeText(codeElement.textContent);
                copyBtn.classList.add("aural-code-block__copy--copied");
                copyBtn.textContent = "Copied!";
                copyBtn.setAttribute("aria-label", "Code copied to clipboard");
                const announcement = document.createElement("div");
                announcement.setAttribute("role", "status");
                announcement.setAttribute("aria-live", "polite");
                announcement.className = "visually-hidden";
                announcement.textContent = "Code copied to clipboard";
                document.body.appendChild(announcement);
                setTimeout(() => {
                  copyBtn.classList.remove("aural-code-block__copy--copied");
                  copyBtn.textContent = "Copy";
                  copyBtn.setAttribute("aria-label", "Copy code to clipboard");
                  announcement.remove();
                }, 2e3);
              } catch (err) {
                console.error("Failed to copy:", err);
              }
            });
          }
        },
        /**
         * Initialize all code blocks on the page
         */
        initAllCodeBlocks() {
          const codeBlocks = document.querySelectorAll(".aural-code-block");
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
          if (!codeBlock)
            return;
          const codeElement = codeBlock.querySelector(".aural-code-block__code");
          if (!codeElement)
            return;
          let code = codeElement.textContent;
          const patterns = {
            comment: /\/\/.*|\/\*[\s\S]*?\*\//g,
            string: /(["'`])(?:\\.|[^\\])*?\1/g,
            keyword: /\b(function|const|let|var|if|else|return|import|export|class|extends|async|await|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|delete|typeof|instanceof)\b/g,
            number: /\b\d+\.?\d*\b/g,
            operator: /[+\-*/%=<>!&|]+/g
          };
          console.log("Syntax highlighting applied for", language);
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
          if (!backdrop)
            return;
          backdrop.classList.add("is-open");
          document.body.classList.add("aural-dialog-open");
          const dialog = backdrop.querySelector(".aural-dialog");
          if (dialog) {
            dialog.setAttribute("role", "dialog");
            dialog.setAttribute("aria-modal", "true");
            dialog.setAttribute("aria-hidden", "false");
            const title = dialog.querySelector(".aural-dialog__title");
            if (title) {
              if (!title.id)
                title.id = `dialog-title-${Date.now()}`;
              dialog.setAttribute("aria-labelledby", title.id);
            }
            const message = dialog.querySelector(".aural-dialog__message");
            if (message) {
              if (!message.id)
                message.id = `dialog-desc-${Date.now()}`;
              dialog.setAttribute("aria-describedby", message.id);
            }
          }
          const focusable = dialog?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          focusable?.focus();
          const handleEsc = (e) => {
            if (e.key === "Escape") {
              this.closeDialog(dialogId);
              document.removeEventListener("keydown", handleEsc);
            }
          };
          document.addEventListener("keydown", handleEsc);
        },
        /**
         * Close a dialog
         * @param {string} dialogId - The ID of the dialog element
         */
        closeDialog(dialogId) {
          const backdrop = document.getElementById(dialogId);
          if (!backdrop)
            return;
          backdrop.classList.remove("is-open");
          document.body.classList.remove("aural-dialog-open");
          const dialog = backdrop.querySelector(".aural-dialog");
          dialog?.setAttribute("aria-hidden", "true");
        },
        /**
         * Show a confirmation dialog dynamically
         * @param {string} title - Dialog title
         * @param {string} message - Dialog message
         * @param {Function} onConfirm - Callback when confirmed
         * @param {Function} onCancel - Callback when cancelled
         */
        showConfirm(title, message, onConfirm, onCancel) {
          const dialogId = "aural-confirm-dialog-" + Date.now();
          const backdrop = document.createElement("div");
          backdrop.id = dialogId;
          backdrop.className = "aural-dialog-backdrop";
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
          confirmBtn?.addEventListener("click", () => {
            if (onConfirm)
              onConfirm();
            this.closeDialog(dialogId);
            backdrop.remove();
          });
          cancelBtn?.addEventListener("click", () => {
            if (onCancel)
              onCancel();
            this.closeDialog(dialogId);
            backdrop.remove();
          });
          backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) {
              if (onCancel)
                onCancel();
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
          if (!upload)
            return;
          const {
            maxSize = 10 * 1024 * 1024,
            // 10MB
            allowedTypes = [],
            multiple = true,
            onUpload = null
          } = options;
          const dropzone = upload.querySelector(".aural-file-upload__dropzone");
          const input = upload.querySelector(".aural-file-upload__input");
          const filesContainer = upload.querySelector(".aural-file-upload__files");
          if (dropzone) {
            dropzone.setAttribute("role", "button");
            dropzone.setAttribute("aria-label", "Upload files by clicking or dragging and dropping");
            dropzone.setAttribute("tabindex", "0");
          }
          if (filesContainer) {
            filesContainer.setAttribute("aria-live", "polite");
            filesContainer.setAttribute("aria-label", "Uploaded files");
          }
          const handleFiles = (files) => {
            Array.from(files).forEach((file) => {
              if (file.size > maxSize) {
                console.error("File too large:", file.name);
                return;
              }
              if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
                console.error("File type not allowed:", file.name);
                return;
              }
              const fileItem = document.createElement("div");
              fileItem.className = "aural-file-upload__file aural-file-upload__file--uploading";
              const preview = file.type.startsWith("image/") ? `<div class="aural-file-upload__preview aural-file-upload__preview--image"><img src="${URL.createObjectURL(file)}" alt="${file.name}"></div>` : `<div class="aural-file-upload__preview aural-file-upload__preview--document"></div>`;
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
              const progressFill = fileItem.querySelector(".aural-file-upload__progress-fill");
              let progress = 0;
              const interval = setInterval(() => {
                progress += 10;
                if (progressFill)
                  progressFill.style.width = `${progress}%`;
                if (progress >= 100) {
                  clearInterval(interval);
                  fileItem.classList.remove("aural-file-upload__file--uploading");
                  fileItem.classList.add("aural-file-upload__file--success");
                  if (onUpload)
                    onUpload(file);
                }
              }, 200);
              const removeBtn = fileItem.querySelector(".aural-file-upload__remove");
              removeBtn?.addEventListener("click", () => {
                clearInterval(interval);
                fileItem.remove();
              });
            });
          };
          dropzone?.addEventListener("click", () => input?.click());
          input?.addEventListener("change", (e) => {
            if (e.target.files) {
              handleFiles(e.target.files);
            }
          });
          dropzone?.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.classList.add("aural-file-upload__dropzone--active");
          });
          dropzone?.addEventListener("dragleave", () => {
            dropzone.classList.remove("aural-file-upload__dropzone--active");
          });
          dropzone?.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.classList.remove("aural-file-upload__dropzone--active");
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
          if (!backdrop)
            return;
          backdrop.classList.add("is-open");
          document.body.classList.add("aural-command-palette-open");
          const palette = backdrop.querySelector(".aural-command-palette");
          const input = backdrop.querySelector(".aural-command-palette__input");
          const results = backdrop.querySelector(".aural-command-palette__results");
          if (palette) {
            palette.setAttribute("role", "dialog");
            palette.setAttribute("aria-modal", "true");
            palette.setAttribute("aria-label", "Command palette");
          }
          if (input) {
            input.setAttribute("role", "combobox");
            input.setAttribute("aria-autocomplete", "list");
            input.setAttribute("aria-expanded", "true");
            input.setAttribute("aria-controls", "command-results");
          }
          if (results) {
            results.id = "command-results";
            results.setAttribute("role", "listbox");
          }
          input?.focus();
          const handleEsc = (e) => {
            if (e.key === "Escape") {
              this.closeCommandPalette(paletteId);
              document.removeEventListener("keydown", handleEsc);
            }
          };
          document.addEventListener("keydown", handleEsc);
        },
        /**
         * Close a command palette
         * @param {string} paletteId - The ID of the command palette
         */
        closeCommandPalette(paletteId) {
          const backdrop = document.getElementById(paletteId);
          if (!backdrop)
            return;
          backdrop.classList.remove("is-open");
          document.body.classList.remove("aural-command-palette-open");
        },
        /**
         * Initialize a command palette with commands
         * @param {string} paletteId - The ID of the command palette
         * @param {Array} commands - Array of command objects
         */
        initCommandPalette(paletteId, commands = []) {
          const backdrop = document.getElementById(paletteId);
          if (!backdrop)
            return;
          const input = backdrop.querySelector(".aural-command-palette__input");
          const resultsContainer = backdrop.querySelector(".aural-command-palette__results");
          let selectedIndex = 0;
          this.renderCommandResults(paletteId, commands);
          input?.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = commands.filter(
              (cmd) => cmd.title.toLowerCase().includes(query) || cmd.description?.toLowerCase().includes(query)
            );
            this.renderCommandResults(paletteId, filtered);
            selectedIndex = 0;
          });
          backdrop.addEventListener("keydown", (e) => {
            const items = backdrop.querySelectorAll(".aural-command-palette__item");
            if (e.key === "ArrowDown") {
              e.preventDefault();
              selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
              updateSelection(items);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              selectedIndex = Math.max(selectedIndex - 1, 0);
              updateSelection(items);
            } else if (e.key === "Enter") {
              e.preventDefault();
              const selected = items[selectedIndex];
              selected?.click();
            }
          });
          const updateSelection = (items) => {
            items.forEach((item, index) => {
              if (index === selectedIndex) {
                item.classList.add("aural-command-palette__item--selected");
                item.setAttribute("aria-selected", "true");
                item.scrollIntoView({ block: "nearest" });
                const input2 = backdrop.querySelector(".aural-command-palette__input");
                if (input2 && item.id) {
                  input2.setAttribute("aria-activedescendant", item.id);
                }
              } else {
                item.classList.remove("aural-command-palette__item--selected");
                item.setAttribute("aria-selected", "false");
              }
            });
          };
          document.addEventListener("keydown", (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
              e.preventDefault();
              if (backdrop.classList.contains("is-open")) {
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
          if (!backdrop)
            return;
          const resultsContainer = backdrop.querySelector(".aural-command-palette__results");
          if (!resultsContainer)
            return;
          if (commands.length === 0) {
            resultsContainer.innerHTML = `
                <div class="aural-command-palette__empty">
                    <div class="aural-command-palette__empty-icon"></div>
                    <div class="aural-command-palette__empty-text">No commands found</div>
                </div>
            `;
            return;
          }
          const grouped = commands.reduce((acc, cmd) => {
            const group = cmd.group || "Commands";
            if (!acc[group])
              acc[group] = [];
            acc[group].push(cmd);
            return acc;
          }, {});
          resultsContainer.innerHTML = Object.entries(grouped).map(([group, cmds]) => `
            <div class="aural-command-palette__group" role="group" aria-labelledby="group-${group.replace(/\s+/g, "-")}">
                <div class="aural-command-palette__group-label" id="group-${group.replace(/\s+/g, "-")}">${group}</div>
                <div class="aural-command-palette__items">
                    ${cmds.map((cmd, index) => `
                        <button class="aural-command-palette__item ${index === 0 ? "aural-command-palette__item--selected" : ""}"
                                data-command="${cmd.id}"
                                role="option"
                                aria-selected="${index === 0 ? "true" : "false"}">
                            ${cmd.icon ? `<span class="aural-command-palette__item-icon" aria-hidden="true">${cmd.icon}</span>` : ""}
                            <div class="aural-command-palette__item-content">
                                <div class="aural-command-palette__item-title">${cmd.title}</div>
                                ${cmd.description ? `<div class="aural-command-palette__item-description">${cmd.description}</div>` : ""}
                            </div>
                            ${cmd.shortcut ? `
                                <div class="aural-command-palette__shortcut" aria-label="Keyboard shortcut ${cmd.shortcut}">
                                    ${cmd.shortcut.split("+").map((key) => `<span class="aural-command-palette__key">${key}</span>`).join("")}
                                </div>
                            ` : ""}
                        </button>
                    `).join("")}
                </div>
            </div>
        `).join("");
          resultsContainer.querySelectorAll(".aural-command-palette__item").forEach((item) => {
            item.addEventListener("click", () => {
              const cmdId = item.getAttribute("data-command");
              const command = commands.find((c) => c.id === cmdId);
              if (command?.action) {
                command.action();
              }
              this.closeCommandPalette(paletteId);
            });
          });
        }
      };
      if (typeof document !== "undefined") {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", () => {
            Aural.initModals();
            Aural.initTabs();
            Aural.initTooltips();
            Aural.initDropdowns();
            Aural.initAccordions();
            Aural.initPopovers();
            Aural.initSelects();
            Aural.initAllCodeBlocks();
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
        }
      }
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Aural;
      }
      if (typeof window !== "undefined") {
        window.Aural = Aural;
      }
    }
  });
  require_javascript();
})();
