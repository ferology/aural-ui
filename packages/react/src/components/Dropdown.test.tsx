/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Dropdown, DropdownItem } from './Dropdown';

describe('Dropdown', () => {
  const mockItems: DropdownItem[] = [
    { label: 'Profile', onClick: vi.fn() },
    { label: 'Settings', onClick: vi.fn() },
    { label: 'Logout', onClick: vi.fn(), divider: true },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render trigger button', () => {
    render(
      <Dropdown
        id="test-dropdown"
        isOpen={false}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
  });

  it('should call window.Aural.openDropdown when isOpen is true', () => {
    const mockOpen = vi.fn();
    (window.Aural as any).openDropdown = mockOpen;

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    expect(mockOpen).toHaveBeenCalledWith('test-dropdown');
  });

  it('should call window.Aural.closeDropdown when isOpen is false', () => {
    const mockClose = vi.fn();
    (window.Aural as any).closeDropdown = mockClose;

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={false}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    expect(mockClose).toHaveBeenCalledWith('test-dropdown');
  });

  it('should render menu items when isOpen is true', () => {
    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    expect(screen.getByRole('button', { name: /profile/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });

  it('should hide menu when isOpen is false', () => {
    const { container } = render(
      <Dropdown
        id="test-dropdown"
        isOpen={false}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    const menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveAttribute('hidden');
  });

  it('should call item onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    const items: DropdownItem[] = [{ label: 'Action', onClick: mockOnClick }];

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={items}
      />
    );

    await user.click(screen.getByRole('button', { name: /action/i }));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should call onClose after item click', async () => {
    const user = userEvent.setup();
    const mockOnClose = vi.fn();
    const items: DropdownItem[] = [{ label: 'Action', onClick: vi.fn() }];

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={mockOnClose}
        trigger={<button>Menu</button>}
        items={items}
      />
    );

    await user.click(screen.getByRole('button', { name: /action/i }));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick for disabled items', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    const items: DropdownItem[] = [{ label: 'Disabled', onClick: mockOnClick, disabled: true }];

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={items}
      />
    );

    const disabledButton = screen.getByRole('button', { name: /disabled/i });
    expect(disabledButton).toBeDisabled();

    await user.click(disabledButton);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('should apply disabled class to disabled items', () => {
    const items: DropdownItem[] = [{ label: 'Disabled', onClick: vi.fn(), disabled: true }];

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={items}
      />
    );

    expect(screen.getByRole('button', { name: /disabled/i })).toHaveClass('disabled');
  });

  it('should render divider after item when divider is true', () => {
    const items: DropdownItem[] = [
      { label: 'First', onClick: vi.fn(), divider: true },
      { label: 'Second', onClick: vi.fn() },
    ];

    const { container } = render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={items}
      />
    );

    expect(container.querySelector('.dropdown-divider')).toBeInTheDocument();
  });

  it('should render item icons when provided', () => {
    const Icon = () => <span data-testid="icon">★</span>;
    const items: DropdownItem[] = [{ label: 'Starred', onClick: vi.fn(), icon: <Icon /> }];

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={items}
      />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render link items with href', () => {
    const items: DropdownItem[] = [{ label: 'Link', href: '/profile', onClick: vi.fn() }];

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={items}
      />
    );

    const link = screen.getByRole('link', { name: /link/i });
    expect(link).toHaveAttribute('href', '/profile');
  });

  it('should call onClose when Escape key pressed', async () => {
    const user = userEvent.setup();
    const mockOnClose = vi.fn();

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={mockOnClose}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    await user.keyboard('{Escape}');
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when Escape pressed if dropdown is closed', async () => {
    const user = userEvent.setup();
    const mockOnClose = vi.fn();

    render(
      <Dropdown
        id="test-dropdown"
        isOpen={false}
        onClose={mockOnClose}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    await user.keyboard('{Escape}');
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should apply left alignment by default', () => {
    const { container } = render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
      />
    );

    const menu = container.querySelector('.dropdown-menu');
    expect(menu).not.toHaveClass('dropdown-menu-right');
  });

  it('should apply right alignment when specified', () => {
    const { container } = render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
        align="right"
      />
    );

    const menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('dropdown-menu-right');
  });

  it('should render custom children instead of items', () => {
    render(
      <Dropdown id="test-dropdown" isOpen={true} onClose={() => {}} trigger={<button>Menu</button>}>
        <div data-testid="custom-content">Custom Content</div>
      </Dropdown>
    );

    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <Dropdown
        id="test-dropdown"
        isOpen={true}
        onClose={() => {}}
        trigger={<button>Menu</button>}
        items={mockItems}
        className="custom-dropdown"
      />
    );

    expect(container.querySelector('.dropdown')).toHaveClass('custom-dropdown');
  });
});
