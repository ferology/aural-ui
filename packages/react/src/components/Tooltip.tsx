import React, { useRef, useState, useEffect, useId } from 'react';

export interface TooltipProps {
  /** Tooltip content */
  content: string;
  /** Trigger element */
  children: React.ReactElement;
  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Delay before showing (ms) */
  delay?: number;
}

/**
 * Tooltip Component
 *
 * Displays contextual information on hover or focus.
 *
 * @example
 * ```tsx
 * <Tooltip content="Click to save">
 *   <button>Save</button>
 * </Tooltip>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  className = '',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerId = `tooltip-trigger-${useId()}`;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
        // @ts-expect-error - window.Aural is added by vanilla JS
        if (typeof window.Aural !== 'undefined') {
          // @ts-expect-error - window.Aural is added by vanilla JS
          window.Aural.showTooltip(triggerId);
        }
      }, delay);
    } else {
      setIsVisible(true);
      // @ts-expect-error - window.Aural is added by vanilla JS
      if (typeof window.Aural !== 'undefined') {
        // @ts-expect-error - window.Aural is added by vanilla JS
        window.Aural.showTooltip(triggerId);
      }
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
    // @ts-expect-error - window.Aural is added by vanilla JS
    if (typeof window.Aural !== 'undefined') {
      // @ts-expect-error - window.Aural is added by vanilla JS
      window.Aural.hideTooltip(triggerId);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Clone the child element and add event handlers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trigger = React.cloneElement(
    children as React.ReactElement<any>,
    // eslint-disable-next-line react-hooks/refs
    {
      id: triggerId,
      'data-tooltip-trigger': true,
      onMouseEnter: (e: React.MouseEvent) => {
        showTooltip();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (children.props as any)?.onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        hideTooltip();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (children.props as any)?.onMouseLeave?.(e);
      },
      onFocus: (e: React.FocusEvent) => {
        showTooltip();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (children.props as any)?.onFocus?.(e);
      },
      onBlur: (e: React.FocusEvent) => {
        hideTooltip();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (children.props as any)?.onBlur?.(e);
      },
    }
  );

  return (
    <div className="tooltip-wrapper">
      {trigger}
      <div
        className={`tooltip tooltip-${position} ${isVisible ? 'tooltip-show' : ''} ${className}`}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};
