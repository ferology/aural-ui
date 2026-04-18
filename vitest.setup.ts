/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.Aural global (used by components that call vanilla JS)
(global as any).window.Aural = {
  openModal: vi.fn(),
  closeModal: vi.fn(),
  openDropdown: vi.fn(),
  closeDropdown: vi.fn(),
  openToast: vi.fn(),
  closeToast: vi.fn(),
};
