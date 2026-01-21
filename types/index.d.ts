/**
 * Aural UI - TypeScript Definitions
 *
 * Type definitions for Aural UI design system
 * @version 1.0.0
 */

declare namespace Aural {
  // ========================================
  // Toast
  // ========================================

  /**
   * Display a toast notification
   * @param message - The message to display
   * @param type - The type of toast (success, error, warning, info)
   * @param title - Optional title for the toast
   * @param duration - How long to show the toast in milliseconds (default: 3000)
   */
  function showToast(
    message: string,
    type?: 'success' | 'error' | 'warning' | 'info',
    title?: string,
    duration?: number
  ): void;

  // ========================================
  // Modal
  // ========================================

  /**
   * Initialize all modals on the page
   */
  function initModals(): void;

  /**
   * Open a specific modal by ID
   * @param modalId - The ID of the modal element
   */
  function openModal(modalId: string): void;

  /**
   * Close a specific modal by ID
   * @param modalId - The ID of the modal element
   */
  function closeModal(modalId: string): void;

  /**
   * Toggle a modal's open/closed state
   * @param modalId - The ID of the modal element
   */
  function toggleModal(modalId: string): void;

  // ========================================
  // Tabs
  // ========================================

  /**
   * Initialize all tab groups on the page
   */
  function initTabs(): void;

  /**
   * Switch to a specific tab
   * @param tabId - The ID of the tab button
   * @param panelId - The ID of the panel to show
   */
  function switchTab(tabId: string, panelId: string): void;

  // ========================================
  // Tooltips
  // ========================================

  /**
   * Initialize all tooltips on the page
   */
  function initTooltips(): void;

  /**
   * Show a specific tooltip
   * @param triggerId - The ID of the element that triggers the tooltip
   */
  function showTooltip(triggerId: string): void;

  /**
   * Hide a specific tooltip
   * @param triggerId - The ID of the element that triggers the tooltip
   */
  function hideTooltip(triggerId: string): void;

  // ========================================
  // Dropdowns
  // ========================================

  /**
   * Initialize all dropdowns on the page
   */
  function initDropdowns(): void;

  /**
   * Open a specific dropdown
   * @param dropdownId - The ID of the dropdown element
   */
  function openDropdown(dropdownId: string): void;

  /**
   * Close a specific dropdown
   * @param dropdownId - The ID of the dropdown element
   */
  function closeDropdown(dropdownId: string): void;

  /**
   * Toggle a dropdown's open/closed state
   * @param dropdownId - The ID of the dropdown element
   */
  function toggleDropdown(dropdownId: string): void;

  // ========================================
  // Accordions
  // ========================================

  /**
   * Initialize all accordions on the page
   */
  function initAccordions(): void;

  /**
   * Open a specific accordion item
   * @param itemId - The ID of the accordion item
   */
  function openAccordion(itemId: string): void;

  /**
   * Close a specific accordion item
   * @param itemId - The ID of the accordion item
   */
  function closeAccordion(itemId: string): void;

  /**
   * Toggle an accordion item's open/closed state
   * @param itemId - The ID of the accordion item
   */
  function toggleAccordion(itemId: string): void;

  // ========================================
  // Popovers
  // ========================================

  /**
   * Initialize all popovers on the page
   */
  function initPopovers(): void;

  /**
   * Show a specific popover
   * @param triggerId - The ID of the element that triggers the popover
   */
  function showPopover(triggerId: string): void;

  /**
   * Hide a specific popover
   * @param triggerId - The ID of the element that triggers the popover
   */
  function hidePopover(triggerId: string): void;

  /**
   * Toggle a popover's visibility
   * @param triggerId - The ID of the element that triggers the popover
   */
  function togglePopover(triggerId: string): void;

  // ========================================
  // Selects
  // ========================================

  /**
   * Initialize all custom select components on the page
   */
  function initSelects(): void;

  /**
   * Open a specific custom select
   * @param selectId - The ID of the select element
   */
  function openSelect(selectId: string): void;

  /**
   * Close a specific custom select
   * @param selectId - The ID of the select element
   */
  function closeSelect(selectId: string): void;

  /**
   * Toggle a custom select's open/closed state
   * @param selectId - The ID of the select element
   */
  function toggleSelect(selectId: string): void;

  /**
   * Programmatically select an option
   * @param selectId - The ID of the select element
   * @param value - The value to select
   */
  function selectOption(selectId: string, value: string): void;

  // ========================================
  // Progress
  // ========================================

  /**
   * Set the progress value of a progress bar
   * @param elementId - The ID of the progress element
   * @param percentage - The progress percentage (0-100)
   */
  function setProgress(elementId: string, percentage: number): void;

  /**
   * Set whether a progress bar should be in indeterminate state
   * @param elementId - The ID of the progress element
   * @param indeterminate - Whether to show indeterminate animation
   */
  function setIndeterminate(elementId: string, indeterminate: boolean): void;

  // ========================================
  // Chips (Tags Input)
  // ========================================

  /**
   * Options for initializing a chips input
   */
  interface ChipsOptions {
    /** Maximum number of tags allowed */
    maxTags?: number;
    /** Whether to allow duplicate tags */
    allowDuplicates?: boolean;
    /** Callback when a tag is added */
    onAdd?: (tag: string) => void;
    /** Callback when a tag is removed */
    onRemove?: (tag: string) => void;
  }

  /**
   * Chips instance returned by initChips
   */
  interface ChipsInstance {
    /** Get all current tags */
    getTags(): string[];
    /** Add a new tag */
    addTag(tag: string): void;
    /** Clear all tags */
    clearTags(): void;
  }

  /**
   * Initialize a chips (tags) input component
   * @param containerId - The ID of the container element
   * @param options - Configuration options
   * @returns An object with methods to interact with the chips
   */
  function initChips(
    containerId: string,
    options?: ChipsOptions
  ): ChipsInstance;

  // ========================================
  // Code Blocks
  // ========================================

  /**
   * Initialize a specific code block by ID
   * @param codeBlockId - The ID of the code block element
   */
  function initCodeBlock(codeBlockId: string): void;

  /**
   * Initialize all code blocks on the page
   */
  function initAllCodeBlocks(): void;

  /**
   * Apply syntax highlighting to a code block
   * @param codeBlockId - The ID of the code block element
   * @param language - The programming language for syntax highlighting
   */
  function highlightCodeBlock(codeBlockId: string, language: string): void;

  // ========================================
  // Drawers
  // ========================================

  /**
   * Initialize all drawer components on the page
   */
  function initDrawers(): void;

  /**
   * Open a specific drawer
   * @param drawerId - The ID of the drawer element
   */
  function openDrawer(drawerId: string): void;

  /**
   * Close a specific drawer
   * @param drawerId - The ID of the drawer element
   */
  function closeDrawer(drawerId: string): void;

  /**
   * Toggle a drawer's open/closed state
   * @param drawerId - The ID of the drawer element
   */
  function toggleDrawer(drawerId: string): void;

  // ========================================
  // Snackbar
  // ========================================

  /**
   * Options for snackbar
   */
  interface SnackbarOptions {
    /** How long to show the snackbar in milliseconds */
    duration?: number;
    /** Action button configuration */
    action?: {
      /** Text for the action button */
      text: string;
      /** Click handler for the action button */
      onClick: () => void;
    };
  }

  /**
   * Display a snackbar notification
   * @param message - The message to display
   * @param type - The type of snackbar (default, success, error, warning, info)
   * @param options - Additional options
   */
  function showSnackbar(
    message: string,
    type?: 'default' | 'success' | 'error' | 'warning' | 'info',
    options?: SnackbarOptions
  ): void;

  // ========================================
  // Data Table (New Feature)
  // ========================================

  /**
   * Column configuration for data table
   */
  interface DataTableColumn {
    /** Unique key for the column */
    key: string;
    /** Display label for the column header */
    label: string;
    /** Whether the column is sortable */
    sortable?: boolean;
    /** Filter type for the column */
    filter?: 'text' | 'dropdown' | 'none';
  }

  /**
   * Options for initializing a data table
   */
  interface DataTableOptions {
    /** Whether to enable sorting */
    sortable?: boolean;
    /** Whether to enable filtering */
    filterable?: boolean;
    /** Number of rows per page */
    pageSize?: number;
    /** Column configuration */
    columns: DataTableColumn[];
    /** Data array */
    data: any[];
    /** Callback when sorting changes */
    onSort?: (column: string, direction: 'asc' | 'desc') => void;
    /** Callback when filters change */
    onFilter?: (filters: Record<string, any>) => void;
    /** Callback when row selection changes */
    onSelect?: (selectedRows: any[]) => void;
  }

  /**
   * Initialize a data table with sorting and filtering
   * @param tableId - The ID of the table element
   * @param options - Configuration options
   */
  function initDataTable(tableId: string, options: DataTableOptions): void;

  // ========================================
  // Form Validation (New Feature)
  // ========================================

  /**
   * Validator function type
   */
  type ValidatorFunction = (value: string) => boolean | string | Promise<boolean | string>;

  /**
   * Field configuration for form validation
   */
  interface FormValidationField {
    /** Array of validators (built-in names or custom functions) */
    validators: (string | ValidatorFunction)[];
    /** Custom error messages for each validator */
    messages?: Record<string, string>;
  }

  /**
   * Options for form validation
   */
  interface FormValidationOptions {
    /** Field configurations */
    fields: Record<string, FormValidationField>;
    /** When to validate (blur, input, or submit) */
    validateOn?: 'blur' | 'input' | 'submit';
    /** Callback when validation state changes */
    onValidate?: (isValid: boolean, errors: Record<string, string[]>) => void;
    /** Callback when form is submitted and valid */
    onSubmit?: (formData: FormData) => void;
  }

  /**
   * Initialize form validation
   * @param formId - The ID of the form element
   * @param options - Configuration options
   */
  function initFormValidation(formId: string, options: FormValidationOptions): void;
}

// Export for ES6 modules
export = Aural;

// Export for global namespace
export as namespace Aural;
