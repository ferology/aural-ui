import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('should render input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should render with helper text', () => {
    render(<Input label="Email" helperText="Enter your email address" />);
    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
  });

  it('should render with error message', () => {
    render(<Input label="Email" error="Email is required" />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent('Email is required');
  });

  it('should hide helper text when error is present', () => {
    render(<Input label="Email" helperText="Helper text" error="Error message" />);
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('should apply error class when error prop is provided', () => {
    render(<Input error="Error message" />);
    expect(screen.getByRole('textbox')).toHaveClass('input-error');
  });

  it('should apply success class when success prop is true', () => {
    render(<Input success />);
    expect(screen.getByRole('textbox')).toHaveClass('input-success');
  });

  it('should set aria-invalid when error is present', () => {
    render(<Input error="Error message" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('should set aria-invalid to false when no error', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false');
  });

  it('should link input to error message with aria-describedby', () => {
    render(<Input id="email-input" error="Error message" />);
    const input = screen.getByRole('textbox');
    const errorId = input.getAttribute('aria-describedby');
    expect(errorId).toBe('email-input-error');
    expect(screen.getByRole('alert')).toHaveAttribute('id', errorId);
  });

  it('should link input to helper text with aria-describedby', () => {
    render(<Input id="email-input" helperText="Helper text" />);
    const input = screen.getByRole('textbox');
    const helperId = input.getAttribute('aria-describedby');
    expect(helperId).toBe('email-input-helper');
  });

  it('should handle user input', async () => {
    const user = userEvent.setup();
    render(<Input />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test@example.com');

    expect(input).toHaveValue('test@example.com');
  });

  it('should call onChange handler', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'a');

    expect(handleChange).toHaveBeenCalled();
  });

  it('should apply size classes', () => {
    const { rerender } = render(<Input inputSize="sm" />);
    expect(screen.getByRole('textbox')).toHaveClass('input-sm');

    rerender(<Input inputSize="md" />);
    expect(screen.getByRole('textbox')).not.toHaveClass('input-md');

    rerender(<Input inputSize="lg" />);
    expect(screen.getByRole('textbox')).toHaveClass('input-lg');
  });

  it('should apply full width class to wrapper', () => {
    render(<Input fullWidth />);
    const wrapper = screen.getByRole('textbox').closest('.form-group');
    expect(wrapper).toHaveClass('w-full');
  });

  it('should render icon before input', () => {
    const Icon = () => <span data-testid="icon-before">🔍</span>;
    render(<Input iconBefore={<Icon />} />);
    expect(screen.getByTestId('icon-before')).toBeInTheDocument();
  });

  it('should render icon after input', () => {
    const Icon = () => <span data-testid="icon-after">✓</span>;
    render(<Input iconAfter={<Icon />} />);
    expect(screen.getByTestId('icon-after')).toBeInTheDocument();
  });

  it('should apply icon classes when icons are present', () => {
    const Icon = () => <span>🔍</span>;
    render(<Input iconBefore={<Icon />} />);
    expect(screen.getByRole('textbox')).toHaveClass('input-icon-before');
  });

  it('should forward ref', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it('should support different input types', () => {
    const { rerender } = render(<Input type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

    rerender(<Input type="password" />);
    const passwordInput = document.querySelector('input[type="password"]');
    expect(passwordInput).toBeInTheDocument();

    rerender(<Input type="number" />);
    const numberInput = document.querySelector('input[type="number"]');
    expect(numberInput).toBeInTheDocument();
  });

  it('should support disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should support required attribute', () => {
    render(<Input required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('should support placeholder', () => {
    render(<Input placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  });

  it('should generate unique id when not provided', () => {
    const { container: container1 } = render(<Input />);
    const { container: container2 } = render(<Input />);

    const input1 = container1.querySelector('input');
    const input2 = container2.querySelector('input');

    expect(input1?.id).toBeTruthy();
    expect(input2?.id).toBeTruthy();
    expect(input1?.id).not.toBe(input2?.id);
  });

  it('should use provided id when given', () => {
    render(<Input id="custom-id" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'custom-id');
  });

  it('should apply custom className', () => {
    render(<Input className="custom-input" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-input');
  });
});
