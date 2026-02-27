import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Helper text below input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Success state */
  success?: boolean;
  /** Input size */
  inputSize?: 'sm' | 'md' | 'lg';
  /** Full width */
  fullWidth?: boolean;
  /** Icon before input */
  iconBefore?: React.ReactNode;
  /** Icon after input */
  iconAfter?: React.ReactNode;
}

/**
 * Input Component
 *
 * Form input with label, helper text, and validation states.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="you@example.com"
 *   helperText="We'll never share your email"
 * />
 *
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Password must be at least 8 characters"
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      inputSize = 'md',
      fullWidth = false,
      iconBefore,
      iconAfter,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const helperTextId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const inputClasses = [
      'input',
      inputSize !== 'md' ? `input-${inputSize}` : '',
      error ? 'input-error' : '',
      success ? 'input-success' : '',
      iconBefore ? 'input-icon-before' : '',
      iconAfter ? 'input-icon-after' : '',
      className
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClasses = [
      'form-group',
      fullWidth ? 'w-full' : ''
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="label">
            {label}
          </label>
        )}

        <div className="input-wrapper">
          {iconBefore && (
            <span className="input-icon input-icon-before" aria-hidden="true">
              {iconBefore}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            {...props}
          />

          {iconAfter && (
            <span className="input-icon input-icon-after" aria-hidden="true">
              {iconAfter}
            </span>
          )}
        </div>

        {error && (
          <p id={errorId} className="form-error" role="alert">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={helperTextId} className="form-helper">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
