import React, { useRef, useState, useEffect } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Unique identifier */
  id: string;
  /** Select options */
  options: SelectOption[];
  /** Selected value */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Search/filter capability */
  searchable?: boolean;
}

/**
 * Select Component
 *
 * Custom select dropdown with keyboard navigation.
 *
 * @example
 * ```tsx
 * const [value, setValue] = useState('');
 *
 * <Select
 *   id="my-select"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   value={value}
 *   onChange={setValue}
 *   placeholder="Select an option"
 * />
 * ```
 */
export const Select: React.FC<SelectProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  searchable = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(opt => opt.value === value);
  const filteredOptions = searchable && searchTerm
    ? options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;

  useEffect(() => {
    // @ts-ignore
    if (typeof window.Aural === 'undefined') return;

    if (isOpen) {
      // @ts-ignore
      window.Aural.openSelect(id);
    } else {
      // @ts-ignore
      window.Aural.closeSelect(id);
    }
  }, [isOpen, id]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setSearchTerm('');
    }
  };

  const handleSelect = (optionValue: string) => {
    // @ts-ignore
    if (typeof window.Aural !== 'undefined') {
      // @ts-ignore
      window.Aural.selectOption(id, optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <div
      id={id}
      ref={selectRef}
      className={`select-custom ${className}`}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="select-trigger"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        disabled={disabled}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`select-arrow ${isOpen ? 'select-arrow-open' : ''}`}
        >
          <path d="M5 7l5 5 5-5H5z" />
        </svg>
      </button>

      <div
        className="select-dropdown"
        role="listbox"
        hidden={!isOpen}
      >
        {searchable && (
          <div className="select-search">
            <input
              ref={searchInputRef}
              type="text"
              className="select-search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="select-options">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="select-option"
                role="option"
                aria-selected={option.value === value}
                data-value={option.value}
                data-disabled={option.disabled || undefined}
                tabIndex={option.disabled ? -1 : 0}
                onClick={() => !option.disabled && handleSelect(option.value)}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && !option.disabled) {
                    e.preventDefault();
                    handleSelect(option.value);
                  }
                }}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="select-no-options">No options found</div>
          )}
        </div>
      </div>
    </div>
  );
};
