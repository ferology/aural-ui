import React, { useRef, useState, useEffect } from 'react';

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
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [triggerId] = useState(`tooltip-trigger-${Math.random().toString(36).substr(2, 9)}`);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
        // @ts-ignore
        if (typeof window.Aural !== 'undefined') {
          // @ts-ignore
          window.Aural.showTooltip(triggerId);
        }
      }, delay);
    } else {
      setIsVisible(true);
      // @ts-ignore
      if (typeof window.Aural !== 'undefined') {
        // @ts-ignore
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
    // @ts-ignore
    if (typeof window.Aural !== 'undefined') {
      // @ts-ignore
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
  const trigger = React.cloneElement(children, {
    id: triggerId,
    'data-tooltip-trigger': true,
    onMouseEnter: (e: React.MouseEvent) => {
      showTooltip();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hideTooltip();
      children.props.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      showTooltip();
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hideTooltip();
      children.props.onBlur?.(e);
    }
  });

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
