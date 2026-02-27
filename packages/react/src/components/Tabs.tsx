import React, { useState, useEffect } from 'react';

export interface Tab {
  /** Unique tab identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Tab content */
  content: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Optional icon */
  icon?: React.ReactNode;
}

export interface TabsProps {
  /** Array of tabs */
  tabs: Tab[];
  /** Controlled active tab ID */
  activeTab?: string;
  /** Callback when tab changes */
  onChange?: (tabId: string) => void;
  /** Default active tab ID (uncontrolled) */
  defaultActiveTab?: string;
  /** Tab variant */
  variant?: 'underline' | 'pills' | 'boxed';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tabs Component
 *
 * Accessible tabbed interface with keyboard navigation.
 * Can be controlled or uncontrolled.
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Tabs
 *   tabs={[
 *     { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
 *     { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> }
 *   ]}
 *   defaultActiveTab="tab1"
 * />
 *
 * // Controlled
 * const [activeTab, setActiveTab] = useState('tab1');
 * <Tabs
 *   tabs={tabs}
 *   activeTab={activeTab}
 *   onChange={setActiveTab}
 * />
 * ```
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  onChange,
  defaultActiveTab,
  variant = 'underline',
  className = ''
}) => {
  // Determine if controlled or uncontrolled
  const isControlled = controlledActiveTab !== undefined;
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id || ''
  );

  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;

    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  // Sync with Aural vanilla API
  useEffect(() => {
    const activeTabElement = document.getElementById(`tab-${activeTab}`);
    const activePanelId = `panel-${activeTab}`;

    if (activeTabElement && typeof window.Aural !== 'undefined') {
      // @ts-ignore
      window.Aural.switchTab(`tab-${activeTab}`, activePanelId);
    }
  }, [activeTab]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    // Skip disabled tabs
    while (tabs[newIndex]?.disabled && newIndex !== currentIndex) {
      if (e.key === 'ArrowLeft' || e.key === 'End') {
        newIndex = newIndex > 0 ? newIndex - 1 : tabs.length - 1;
      } else {
        newIndex = newIndex < tabs.length - 1 ? newIndex + 1 : 0;
      }
    }

    if (!tabs[newIndex]?.disabled) {
      handleTabClick(tabs[newIndex].id);
      document.getElementById(`tab-${tabs[newIndex].id}`)?.focus();
    }
  };

  const variantClass = `tabs-${variant}`;

  return (
    <div className={`tabs ${className}`}>
      <div
        className={`tabs-list ${variantClass}`}
        role="tablist"
        aria-label="Tabs"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            tabIndex={0}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
