import React, { useEffect, useRef } from 'react';

export interface DropdownItem {
  /** Item label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Item icon */
  icon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Divider after this item */
  divider?: boolean;
  /** Custom href for link items */
  href?: string;
}

export interface DropdownProps {
  /** Unique identifier */
  id: string;
  /** Controls dropdown visibility */
  isOpen: boolean;
  /** Callback when dropdown requests to close */
  onClose: () => void;
  /** Trigger button content */
  trigger: React.ReactNode;
  /** Dropdown menu items */
  items?: DropdownItem[];
  /** Custom menu content (alternative to items) */
  children?: React.ReactNode;
  /** Dropdown alignment */
  align?: 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Trigger button variant */
  triggerVariant?: 'primary' | 'secondary' | 'ghost';
}

/**
 * Dropdown Component
 *
 * Accessible dropdown menu with keyboard navigation.
 * Wraps the vanilla Aural dropdown API.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Dropdown
 *   id="user-menu"
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   trigger={<button onClick={() => setIsOpen(!isOpen)}>Menu</button>}
 *   items={[
 *     { label: 'Profile', onClick: () => console.log('Profile') },
 *     { label: 'Settings', onClick: () => console.log('Settings') },
 *     { label: 'Logout', onClick: handleLogout, divider: true }
 *   ]}
 * />
 * ```
 */
export const Dropdown: React.FC<DropdownProps> = ({
  id,
  isOpen,
  onClose,
  trigger,
  items,
  children,
  align = 'left',
  className = '',
  triggerVariant = 'secondary'
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync isOpen prop with Aural dropdown state
  useEffect(() => {
    // @ts-ignore - Aural is loaded globally
    if (typeof window.Aural === 'undefined') {
      console.warn('Aural is not loaded. Dropdown will not function correctly.');
      return;
    }

    if (isOpen) {
      // @ts-ignore
      window.Aural.openDropdown(id);
    } else {
      // @ts-ignore
      window.Aural.closeDropdown(id);
    }
  }, [isOpen, id]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;
    item.onClick?.();
    onClose();
  };

  const alignClass = align === 'right' ? 'dropdown-menu-right' : '';

  return (
    <div
      ref={dropdownRef}
      id={id}
      className={`dropdown ${className}`}
    >
      <div className="dropdown-trigger">
        {trigger}
      </div>

      <div className={`dropdown-menu ${alignClass}`} hidden={!isOpen}>
        {items ? (
          items.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <a
                  href={item.href}
                  className={`dropdown-item ${item.disabled ? 'disabled' : ''}`}
                  onClick={(e) => {
                    if (item.disabled) {
                      e.preventDefault();
                      return;
                    }
                    handleItemClick(item);
                  }}
                >
                  {item.icon && <span className="dropdown-icon">{item.icon}</span>}
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  className={`dropdown-item ${item.disabled ? 'disabled' : ''}`}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                >
                  {item.icon && <span className="dropdown-icon">{item.icon}</span>}
                  {item.label}
                </button>
              )}
              {item.divider && <div className="dropdown-divider" />}
            </React.Fragment>
          ))
        ) : (
          children
        )}
      </div>
    </div>
  );
};
