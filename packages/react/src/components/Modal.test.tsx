/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
  beforeEach(() => {
    // Ensure Aural mock is reset before each test
    vi.clearAllMocks();
  });

  it('should render modal with title and content', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}}>
        Modal content
      </Modal>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('should render with title', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} title="Test Title">
        Content
      </Modal>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Test Title');
  });

  it('should have correct ARIA attributes', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} title="Test Title">
        Content
      </Modal>
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'test-modal-title');
  });

  it('should not have aria-labelledby when no title provided', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}}>
        Content
      </Modal>
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).not.toHaveAttribute('aria-labelledby');
  });

  it('should call window.Aural.openModal when isOpen is true', () => {
    const mockOpen = vi.fn();
    (window.Aural as any).openModal = mockOpen;

    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}}>
        Content
      </Modal>
    );

    expect(mockOpen).toHaveBeenCalledWith('test-modal');
  });

  it('should call window.Aural.closeModal when isOpen is false', () => {
    const mockClose = vi.fn();
    (window.Aural as any).closeModal = mockClose;

    render(
      <Modal id="test-modal" isOpen={false} onClose={() => {}}>
        Content
      </Modal>
    );

    expect(mockClose).toHaveBeenCalledWith('test-modal');
  });

  it('should render close button by default', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} title="Title">
        Content
      </Modal>
    );

    expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument();
  });

  it('should not render close button when showCloseButton is false', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} title="Title" showCloseButton={false}>
        Content
      </Modal>
    );

    expect(screen.queryByRole('button', { name: /close modal/i })).not.toBeInTheDocument();
  });

  it('should call onClose when close button clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal id="test-modal" isOpen={true} onClose={handleClose} title="Title">
        Content
      </Modal>
    );

    await user.click(screen.getByRole('button', { name: /close modal/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when Escape key pressed', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal id="test-modal" isOpen={true} onClose={handleClose}>
        Content
      </Modal>
    );

    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when Escape pressed if modal is closed', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal id="test-modal" isOpen={false} onClose={handleClose}>
        Content
      </Modal>
    );

    await user.keyboard('{Escape}');
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('should apply size classes', () => {
    const { rerender } = render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} size="sm">
        Content
      </Modal>
    );
    expect(screen.getByRole('dialog').querySelector('.modal-sm')).toBeInTheDocument();

    rerender(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} size="lg">
        Content
      </Modal>
    );
    expect(screen.getByRole('dialog').querySelector('.modal-lg')).toBeInTheDocument();

    rerender(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} size="xl">
        Content
      </Modal>
    );
    expect(screen.getByRole('dialog').querySelector('.modal-xl')).toBeInTheDocument();

    rerender(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} size="full">
        Content
      </Modal>
    );
    expect(screen.getByRole('dialog').querySelector('.modal-full')).toBeInTheDocument();
  });

  it('should render footer when provided', () => {
    render(
      <Modal
        id="test-modal"
        isOpen={true}
        onClose={() => {}}
        footer={<button>Footer Button</button>}
      >
        Content
      </Modal>
    );

    expect(screen.getByRole('button', { name: /footer button/i })).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}} className="custom-modal">
        Content
      </Modal>
    );

    expect(screen.getByRole('dialog')).toHaveClass('custom-modal');
  });

  it('should have correct default size', () => {
    render(
      <Modal id="test-modal" isOpen={true} onClose={() => {}}>
        Content
      </Modal>
    );

    expect(screen.getByRole('dialog').querySelector('.modal-md')).toBeInTheDocument();
  });
});
