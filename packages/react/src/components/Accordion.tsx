import React, { useState, useEffect } from 'react';

export interface AccordionItem {
  /** Unique item identifier */
  id: string;
  /** Item header/title */
  header: React.ReactNode;
  /** Item content */
  content: React.ReactNode;
  /** Initially expanded */
  defaultExpanded?: boolean;
}

export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** Allow multiple items open at once */
  allowMultiple?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Controlled expanded items */
  expandedItems?: string[];
  /** Callback when items change */
  onChange?: (expandedItems: string[]) => void;
}

/**
 * Accordion Component
 *
 * Collapsible content sections with keyboard support.
 * Can be controlled or uncontrolled, single or multiple expansion.
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     {
 *       id: 'item1',
 *       header: 'Section 1',
 *       content: <p>Content 1</p>,
 *       defaultExpanded: true
 *     },
 *     {
 *       id: 'item2',
 *       header: 'Section 2',
 *       content: <p>Content 2</p>
 *     }
 *   ]}
 *   allowMultiple
 * />
 * ```
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
  expandedItems: controlledExpandedItems,
  onChange
}) => {
  // Determine if controlled
  const isControlled = controlledExpandedItems !== undefined;

  // Internal state for uncontrolled mode
  const [internalExpandedItems, setInternalExpandedItems] = useState<string[]>(
    () => items.filter(item => item.defaultExpanded).map(item => item.id)
  );

  const expandedItems = isControlled ? controlledExpandedItems : internalExpandedItems;

  const toggleItem = (itemId: string) => {
    const isExpanded = expandedItems.includes(itemId);
    let newExpandedItems: string[];

    if (isExpanded) {
      // Collapse
      newExpandedItems = expandedItems.filter(id => id !== itemId);
    } else {
      // Expand
      if (allowMultiple) {
        newExpandedItems = [...expandedItems, itemId];
      } else {
        newExpandedItems = [itemId];
      }
    }

    if (!isControlled) {
      setInternalExpandedItems(newExpandedItems);
    }
    onChange?.(newExpandedItems);
  };

  // Sync with Aural vanilla API
  useEffect(() => {
    if (typeof window.Aural === 'undefined') return;

    items.forEach(item => {
      const isExpanded = expandedItems.includes(item.id);
      const domItem = document.getElementById(item.id);

      if (domItem) {
        if (isExpanded) {
          // @ts-ignore
          window.Aural.openAccordion(item.id);
        } else {
          // @ts-ignore
          window.Aural.closeAccordion(item.id);
        }
      }
    });
  }, [expandedItems, items]);

  const accordionClass = `accordion ${allowMultiple ? 'accordion-always-open' : ''} ${className}`;

  return (
    <div className={accordionClass}>
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id);

        return (
          <div key={item.id} id={item.id} className="accordion-item">
            <button
              type="button"
              className="accordion-header"
              aria-expanded={isExpanded}
              aria-controls={`panel-${item.id}`}
              onClick={() => toggleItem(item.id)}
            >
              {item.header}
              <span className="accordion-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <div
              id={`panel-${item.id}`}
              className="accordion-panel"
              role="region"
              aria-labelledby={item.id}
              hidden={!isExpanded}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
