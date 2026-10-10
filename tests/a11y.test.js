// Regression tests for the vanilla JS modal and tooltip accessibility behavior.
import { describe, it, expect, beforeEach } from 'vitest';
import Aural from '../javascript/index.js';

describe('modal', () => {
  beforeEach(() => {
    document.body.innerHTML = `<header id="h"></header>
      <main id="m"><button id="t">open</button>
        <div class="modal-overlay" id="a"><div role="dialog"><button>x</button></div></div>
        <div class="modal-overlay" id="b"><div role="dialog"><button>y</button></div></div>
      </main>`;
  });

  it('hides outside content without hiding a modal rendered inside <main>', () => {
    Aural.openModal('a');
    expect(document.getElementById('m').hasAttribute('aria-hidden')).toBe(false);
    expect(document.getElementById('h').hasAttribute('inert')).toBe(true);
    expect(document.getElementById('t').hasAttribute('inert')).toBe(true);
    Aural.closeModal('a');
    expect(document.querySelectorAll('[inert], [aria-hidden]').length).toBe(0);
  });

  it('Escape closes only the topmost modal', () => {
    Aural.openModal('a');
    Aural.openModal('b');
    document
      .getElementById('b')
      .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(document.getElementById('b').classList.contains('open')).toBe(false);
    expect(document.getElementById('a').classList.contains('open')).toBe(true);
    Aural.closeModal('a');
  });
});

describe('tooltip', () => {
  it('wires aria-describedby, stays open on hover, dismisses on Escape', () => {
    document.body.innerHTML = `<div class="tooltip-wrapper"><button data-tooltip-trigger>i</button><div class="tooltip">tip</div></div>`;
    Aural.initTooltips();
    Aural.initTooltips(); // idempotent
    const wrapper = document.querySelector('.tooltip-wrapper');
    const trigger = document.querySelector('button');
    const tip = document.querySelector('.tooltip');
    expect(tip.getAttribute('role')).toBe('tooltip');
    expect(trigger.getAttribute('aria-describedby')).toBe(tip.id);
    expect(trigger.getAttribute('aria-describedby').split(' ').length).toBe(1);
    trigger.dispatchEvent(new Event('focus'));
    expect(tip.classList.contains('tooltip-show')).toBe(true);
    wrapper.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(tip.classList.contains('tooltip-show')).toBe(false);
    wrapper.dispatchEvent(new Event('mouseenter'));
    expect(tip.classList.contains('tooltip-show')).toBe(true);
    wrapper.dispatchEvent(new Event('mouseleave'));
    expect(tip.classList.contains('tooltip-show')).toBe(false);
  });
});
