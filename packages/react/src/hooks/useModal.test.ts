import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useModal } from './useModal';

describe('useModal', () => {
  it('should initialize with closed state', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
  });

  it('should initialize with custom initial state', () => {
    const { result } = renderHook(() => useModal(true));
    expect(result.current.isOpen).toBe(true);
  });

  it('should open modal', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should close modal', () => {
    const { result } = renderHook(() => useModal(true));

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle modal from closed to open', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should toggle modal from open to closed', () => {
    const { result } = renderHook(() => useModal(true));

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle multiple times', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);
  });

  it('should maintain open state after multiple open calls', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.open();
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should maintain closed state after multiple close calls', () => {
    const { result } = renderHook(() => useModal(true));

    act(() => {
      result.current.close();
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
