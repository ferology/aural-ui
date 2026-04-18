import type { Meta, StoryObj } from '@storybook/html';

// ─────────────────────────────────────────────────────────────────────────────
// Shared helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Inject the Aural UI CSS variables once into the document. */
function injectTokens(): void {
  if (document.getElementById('aural-animation-tokens')) return;
  const style = document.createElement('style');
  style.id = 'aural-animation-tokens';
  style.textContent = `
    :root {
      /* Durations */
      --duration-instant:  0ms;
      --duration-fast:     150ms;
      --duration-normal:   300ms;
      --duration-slow:     500ms;
      --duration-slower:   750ms;
      --duration-slowest:  1000ms;

      /* Easing functions */
      --ease-linear:  linear;
      --ease-in:      cubic-bezier(0.4, 0, 1, 1);
      --ease-out:     cubic-bezier(0, 0, 0.2, 1);
      --ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
      --ease-bounce:  cubic-bezier(0.68, -0.55, 0.265, 1.55);
      --ease-spring:  cubic-bezier(0.175, 0.885, 0.32, 1.275);

      /* Composite transitions */
      --transition-fast:        var(--duration-fast)   var(--ease-in-out);
      --transition-normal:      var(--duration-normal) var(--ease-in-out);
      --transition-slow:        var(--duration-slow)   var(--ease-in-out);
      --transition-all-fast:    all var(--duration-fast)   var(--ease-in-out);
      --transition-all-normal:  all var(--duration-normal) var(--ease-in-out);
      --transition-colors:
        color            var(--duration-fast) var(--ease-in-out),
        background-color var(--duration-fast) var(--ease-in-out),
        border-color     var(--duration-fast) var(--ease-in-out);
      --transition-transform:   transform var(--duration-fast)   var(--ease-in-out);
      --transition-opacity:     opacity   var(--duration-normal) var(--ease-in-out);
    }
  `;
  document.head.appendChild(style);
}

const BRAND = '#4da77a';
const DARK_BG = '#18181f';
const CARD_BG = '#222230';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Animation & Transitions',
  parameters: {
    docs: {
      description: {
        component: `
# Animation & Transitions

Aural UI ships a complete set of **motion design tokens** — CSS custom properties for durations and easing curves. Every animated component uses these tokens, so you get consistent, theme-aware motion across the entire system.

## Token layers

| Layer | Tokens | Purpose |
|---|---|---|
| **Duration** | \`--duration-fast\` … \`--duration-slowest\` | How long an animation takes |
| **Easing** | \`--ease-linear\` … \`--ease-spring\` | The acceleration curve |
| **Composite** | \`--transition-fast\`, \`--transition-colors\` … | Ready-to-use shorthand values |

## When to use which easing

- **ease-out** — elements entering the screen (feels responsive)
- **ease-in** — elements leaving the screen (feels purposeful)
- **ease-in-out** — elements moving within the screen (default for most UI)
- **linear** — looping animations like spinners (no visible start/end)
- **bounce / spring** — playful confirmations and emphasis (use sparingly)

## Figma Variables

All tokens are available as Figma Variables in the \`Aural/Animation\` collection:
- \`duration/*\` — **FLOAT** variables (values in ms)
- \`easing/*\` — **STRING** variables (cubic-bezier expressions)

These can be inspected in the Variables panel and referenced in your design specs.
        `.trim()
      }
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

// ─────────────────────────────────────────────────────────────────────────────
// 1. Easing Showcase — live animated demo for every curve
// ─────────────────────────────────────────────────────────────────────────────

export const EasingFunctions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Click **▶ Play** to watch each easing curve animate a ball across the track. Notice how acceleration differs: ease-out starts fast and decelerates, ease-in-out has a smooth ramp, and spring/bounce overshoot slightly before settling.'
      }
    }
  },
  render: () => {
    injectTokens();

    const easings: { name: string; token: string; curve: string; desc: string }[] = [
      { name: 'linear',   token: '--ease-linear',  curve: 'linear',                               desc: 'Constant speed. Use for spinners, looping animations.' },
      { name: 'ease-in',  token: '--ease-in',       curve: 'cubic-bezier(0.4, 0, 1, 1)',          desc: 'Starts slow, ends fast. Use for elements leaving the screen.' },
      { name: 'ease-out', token: '--ease-out',      curve: 'cubic-bezier(0, 0, 0.2, 1)',          desc: 'Starts fast, ends slow. Use for elements entering the screen.' },
      { name: 'ease-in-out', token: '--ease-in-out', curve: 'cubic-bezier(0.4, 0, 0.2, 1)',      desc: 'Smooth ramp both ways. Default for most UI interactions.' },
      { name: 'bounce',   token: '--ease-bounce',   curve: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', desc: 'Overshoots and bounces back. Use for playful confirmations.' },
      { name: 'spring',   token: '--ease-spring',   curve: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', desc: 'Organic snap. Use for modals, drawers, or emphasis.' },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      font-family: Inter, system-ui, sans-serif;
      background: ${DARK_BG};
      min-height: 100vh;
      padding: 2.5rem;
      color: #f0f0f5;
    `;

    const heading = document.createElement('div');
    heading.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.25rem">Easing Functions</h2>
      <p style="color:#8888a0;font-size:0.875rem;margin:0 0 2rem">Click ▶ Play on any row to see it in action</p>
    `;
    wrapper.appendChild(heading);

    const grid = document.createElement('div');
    grid.style.cssText = 'display:flex;flex-direction:column;gap:1rem;';

    easings.forEach(({ name, token, curve, desc }) => {
      const row = document.createElement('div');
      row.style.cssText = `
        background: ${CARD_BG};
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 12px;
        padding: 1.25rem 1.5rem;
        display: grid;
        grid-template-columns: 160px 1fr auto;
        align-items: center;
        gap: 1.5rem;
      `;

      // Label + description
      const labelCol = document.createElement('div');
      labelCol.innerHTML = `
        <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px">${name}</div>
        <code style="font-size:0.72rem;color:#8888a0;word-break:break-all">${token}</code>
      `;

      // Track + ball
      const trackWrap = document.createElement('div');
      trackWrap.style.cssText = 'display:flex;flex-direction:column;gap:8px;';

      const track = document.createElement('div');
      track.style.cssText = `
        position:relative;
        height:36px;
        background:rgba(255,255,255,0.04);
        border-radius:18px;
        overflow:visible;
        border:1px solid rgba(255,255,255,0.07);
      `;

      const ball = document.createElement('div');
      ball.style.cssText = `
        position:absolute;
        top:50%;
        left:6px;
        transform:translateY(-50%);
        width:24px;height:24px;
        border-radius:50%;
        background:${BRAND};
        box-shadow:0 0 12px ${BRAND}88;
        transition:left 300ms ${curve};
        will-change:left;
      `;
      track.appendChild(ball);

      const descEl = document.createElement('p');
      descEl.style.cssText = 'font-size:0.78rem;color:#8888a0;margin:0;';
      descEl.textContent = desc;

      trackWrap.appendChild(track);
      trackWrap.appendChild(descEl);

      // Play button
      const btn = document.createElement('button');
      btn.textContent = '▶ Play';
      btn.style.cssText = `
        background:rgba(77,167,122,0.15);
        color:${BRAND};
        border:1px solid rgba(77,167,122,0.3);
        border-radius:8px;
        padding:6px 14px;
        font-size:0.8rem;
        font-weight:600;
        cursor:pointer;
        transition:background 150ms ease-in-out;
        white-space:nowrap;
      `;

      let playing = false;
      const DURATION_MS = 700;

      btn.addEventListener('click', () => {
        if (playing) return;
        playing = true;
        btn.textContent = '● Playing';
        btn.style.color = '#f0f0f5';

        // Update transition duration to match the visible run
        ball.style.transition = `left ${DURATION_MS}ms ${curve}`;
        const trackWidth = track.offsetWidth;
        ball.style.left = `${trackWidth - 30}px`;

        setTimeout(() => {
          ball.style.transition = `left ${DURATION_MS}ms ${curve}`;
          ball.style.left = '6px';
          setTimeout(() => {
            playing = false;
            btn.textContent = '▶ Play';
            btn.style.color = BRAND;
          }, DURATION_MS + 50);
        }, DURATION_MS + 100);
      });

      row.appendChild(labelCol);
      row.appendChild(trackWrap);
      row.appendChild(btn);
      grid.appendChild(row);
    });

    wrapper.appendChild(grid);
    return wrapper;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. Duration Scale — side-by-side speed comparison
// ─────────────────────────────────────────────────────────────────────────────

export const DurationScale: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All six duration tokens side-by-side. Press **▶ Play All** to see them animate simultaneously — the relative difference in speed becomes immediately clear.'
      }
    }
  },
  render: () => {
    injectTokens();

    const durations: { name: string; token: string; ms: number; use: string }[] = [
      { name: 'instant', token: '--duration-instant', ms: 0,    use: 'State changes with no perceived motion (toggles, focus rings)' },
      { name: 'fast',    token: '--duration-fast',    ms: 150,  use: 'Micro-interactions: hover, focus, button press' },
      { name: 'normal',  token: '--duration-normal',  ms: 300,  use: 'Standard UI transitions: menus, tooltips, modals appearing' },
      { name: 'slow',    token: '--duration-slow',    ms: 500,  use: 'Large layout shifts: drawers, page transitions' },
      { name: 'slower',  token: '--duration-slower',  ms: 750,  use: 'Emphasis animations: onboarding, celebrations' },
      { name: 'slowest', token: '--duration-slowest', ms: 1000, use: 'Skeleton loaders, looping background animations' },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      font-family: Inter, system-ui, sans-serif;
      background: ${DARK_BG};
      min-height: 100vh;
      padding: 2.5rem;
      color: #f0f0f5;
    `;

    const header = document.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem;';
    header.innerHTML = `
      <div>
        <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.25rem">Duration Scale</h2>
        <p style="color:#8888a0;font-size:0.875rem;margin:0">Six steps from instant to 1 second</p>
      </div>
    `;

    const playAllBtn = document.createElement('button');
    playAllBtn.textContent = '▶ Play All';
    playAllBtn.style.cssText = `
      background:${BRAND};
      color:#fff;
      border:none;
      border-radius:8px;
      padding:10px 20px;
      font-size:0.875rem;
      font-weight:600;
      cursor:pointer;
    `;
    header.appendChild(playAllBtn);
    wrapper.appendChild(header);

    const balls: HTMLElement[] = [];

    const grid = document.createElement('div');
    grid.style.cssText = 'display:flex;flex-direction:column;gap:0.875rem;';

    durations.forEach(({ name, token, ms, use }) => {
      const row = document.createElement('div');
      row.style.cssText = `
        background: ${CARD_BG};
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        display: grid;
        grid-template-columns: 140px 1fr;
        align-items: center;
        gap: 1.5rem;
      `;

      const labelCol = document.createElement('div');
      labelCol.innerHTML = `
        <div style="font-weight:600;font-size:0.9rem">${name} <span style="color:#8888a0;font-weight:400;font-size:0.8rem">${ms}ms</span></div>
        <code style="font-size:0.72rem;color:#8888a0">${token}</code>
      `;

      const trackArea = document.createElement('div');
      trackArea.style.cssText = 'display:flex;flex-direction:column;gap:6px;';

      const track = document.createElement('div');
      track.style.cssText = `
        position:relative;
        height:32px;
        background:rgba(255,255,255,0.04);
        border-radius:16px;
        border:1px solid rgba(255,255,255,0.06);
      `;

      const ball = document.createElement('div');
      ball.style.cssText = `
        position:absolute;
        top:50%;transform:translateY(-50%);
        left:6px;
        width:20px;height:20px;border-radius:50%;
        background:${BRAND};
        transition:left ${ms}ms var(--ease-in-out, cubic-bezier(0.4,0,0.2,1));
        will-change:left;
      `;
      track.appendChild(ball);
      balls.push(ball);

      const useEl = document.createElement('p');
      useEl.style.cssText = 'font-size:0.75rem;color:#8888a0;margin:0;';
      useEl.textContent = use;

      trackArea.appendChild(track);
      trackArea.appendChild(useEl);
      row.appendChild(labelCol);
      row.appendChild(trackArea);
      grid.appendChild(row);
    });

    wrapper.appendChild(grid);

    let allPlaying = false;
    playAllBtn.addEventListener('click', () => {
      if (allPlaying) return;
      allPlaying = true;
      playAllBtn.textContent = '● Running…';

      const tracks = grid.querySelectorAll<HTMLElement>('div[style*="position:relative"]');
      balls.forEach((ball, i) => {
        const trackWidth = tracks[i]?.offsetWidth ?? 300;
        ball.style.left = `${trackWidth - 26}px`;
      });

      const maxMs = 1000;
      setTimeout(() => {
        balls.forEach(ball => { ball.style.left = '6px'; });
        setTimeout(() => {
          allPlaying = false;
          playAllBtn.textContent = '▶ Play All';
        }, maxMs + 50);
      }, maxMs + 100);
    });

    return wrapper;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. Composite Transitions — ready-to-use token demos
// ─────────────────────────────────────────────────────────────────────────────

export const CompositeTransitions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'These pre-built composite tokens combine duration + easing into a single variable. Hover or interact with each card to see the transition in action.'
      }
    }
  },
  render: () => {
    injectTokens();

    const composites: { token: string; value: string; demo: string; prop: string }[] = [
      { token: '--transition-all-fast',   value: 'all 150ms ease-in-out',    demo: 'Hover me — all properties',   prop: 'all' },
      { token: '--transition-all-normal', value: 'all 300ms ease-in-out',    demo: 'Hover me — all properties',   prop: 'all' },
      { token: '--transition-colors',     value: 'color, background, border 150ms', demo: 'Hover me — colors only', prop: 'colors' },
      { token: '--transition-transform',  value: 'transform 150ms ease-in-out',    demo: 'Hover me — transform',   prop: 'transform' },
      { token: '--transition-opacity',    value: 'opacity 300ms ease-in-out',      demo: 'Hover me — opacity',     prop: 'opacity' },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      font-family: Inter, system-ui, sans-serif;
      background: ${DARK_BG};
      min-height: 100vh;
      padding: 2.5rem;
      color: #f0f0f5;
    `;

    wrapper.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.25rem">Composite Transitions</h2>
      <p style="color:#8888a0;font-size:0.875rem;margin:0 0 2rem">Ready-to-use shorthand tokens. Hover each card to see the transition.</p>
    `;

    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;';

    composites.forEach(({ token, value, demo, prop }) => {
      const card = document.createElement('div');
      card.style.cssText = `
        background: ${CARD_BG};
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 12px;
        padding: 1.5rem;
        cursor: pointer;
        user-select: none;
      `;

      const demoBox = document.createElement('div');

      if (prop === 'all' || prop === 'colors') {
        demoBox.style.cssText = `
          background: rgba(77,167,122,0.15);
          color: ${BRAND};
          border: 1px solid rgba(77,167,122,0.3);
          border-radius: 8px;
          padding: 12px 16px;
          text-align: center;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          transition: ${token === '--transition-all-fast' ? 'all 150ms var(--ease-in-out,cubic-bezier(0.4,0,0.2,1))' :
                        token === '--transition-all-normal' ? 'all 300ms var(--ease-in-out,cubic-bezier(0.4,0,0.2,1))' :
                        'color 150ms, background-color 150ms, border-color 150ms'};
        `;
        demoBox.textContent = demo;
        card.addEventListener('mouseenter', () => {
          demoBox.style.background = BRAND;
          demoBox.style.color = '#fff';
          demoBox.style.borderColor = BRAND;
          if (prop === 'all') demoBox.style.borderRadius = '16px';
        });
        card.addEventListener('mouseleave', () => {
          demoBox.style.background = 'rgba(77,167,122,0.15)';
          demoBox.style.color = BRAND;
          demoBox.style.borderColor = 'rgba(77,167,122,0.3)';
          if (prop === 'all') demoBox.style.borderRadius = '8px';
        });
      } else if (prop === 'transform') {
        demoBox.style.cssText = `
          background: rgba(77,167,122,0.15);
          color: ${BRAND};
          border-radius: 8px;
          padding: 12px 16px;
          text-align: center;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          transition: transform 150ms var(--ease-in-out,cubic-bezier(0.4,0,0.2,1));
          display: inline-block;
          width: 100%;
        `;
        demoBox.textContent = demo;
        card.addEventListener('mouseenter', () => { demoBox.style.transform = 'translateY(-4px) scale(1.02)'; });
        card.addEventListener('mouseleave', () => { demoBox.style.transform = ''; });
      } else if (prop === 'opacity') {
        demoBox.style.cssText = `
          background: rgba(77,167,122,0.15);
          color: ${BRAND};
          border-radius: 8px;
          padding: 12px 16px;
          text-align: center;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          transition: opacity 300ms var(--ease-in-out,cubic-bezier(0.4,0,0.2,1));
          opacity: 1;
          width: 100%;
        `;
        demoBox.textContent = demo;
        card.addEventListener('mouseenter', () => { demoBox.style.opacity = '0.3'; });
        card.addEventListener('mouseleave', () => { demoBox.style.opacity = '1'; });
      }

      const info = document.createElement('div');
      info.innerHTML = `
        <code style="display:block;font-size:0.8rem;color:${BRAND};margin-bottom:4px">${token}</code>
        <span style="font-size:0.75rem;color:#8888a0">${value}</span>
      `;

      const codeBlock = document.createElement('pre');
      codeBlock.style.cssText = `
        background: rgba(0,0,0,0.3);
        border-radius: 6px;
        padding: 10px 12px;
        font-size: 0.72rem;
        color: #a0a0b8;
        margin: 0.75rem 0 0;
        overflow-x: auto;
        line-height: 1.5;
      `;
      codeBlock.textContent = `.my-element {\n  transition: var(${token});\n}`;

      card.appendChild(demoBox);
      card.appendChild(info);
      card.appendChild(codeBlock);
      grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    return wrapper;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. Interactive Playground — pick duration + easing, see the result
// ─────────────────────────────────────────────────────────────────────────────

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Build your own transition by selecting a duration and easing function. The live preview shows the result immediately, and the generated CSS token combination is shown below.'
      }
    }
  },
  render: () => {
    injectTokens();

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      font-family: Inter, system-ui, sans-serif;
      background: ${DARK_BG};
      min-height: 100vh;
      padding: 2.5rem;
      color: #f0f0f5;
    `;

    wrapper.innerHTML = `
      <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.25rem">Playground</h2>
      <p style="color:#8888a0;font-size:0.875rem;margin:0 0 2rem">Mix duration + easing and press Play to preview.</p>
    `;

    const controls = document.createElement('div');
    controls.style.cssText = `
      display:grid;
      grid-template-columns:1fr 1fr auto;
      gap:1rem;
      margin-bottom:2rem;
      align-items:end;
    `;

    const makeSelect = (label: string, opts: string[]): { wrap: HTMLElement; select: HTMLSelectElement } => {
      const wrap = document.createElement('div');
      const lbl = document.createElement('label');
      lbl.textContent = label;
      lbl.style.cssText = 'display:block;font-size:0.8rem;color:#8888a0;margin-bottom:6px;font-weight:600;';
      const select = document.createElement('select');
      select.style.cssText = `
        width:100%;
        background:${CARD_BG};
        color:#f0f0f5;
        border:1px solid rgba(255,255,255,0.12);
        border-radius:8px;
        padding:10px 12px;
        font-size:0.875rem;
        cursor:pointer;
        appearance:none;
      `;
      opts.forEach(o => {
        const opt = document.createElement('option');
        opt.value = o;
        opt.textContent = o;
        select.appendChild(opt);
      });
      wrap.appendChild(lbl);
      wrap.appendChild(select);
      return { wrap, select };
    };

    const { wrap: dWrap, select: dSel } = makeSelect('Duration', ['instant (0ms)', 'fast (150ms)', 'normal (300ms)', 'slow (500ms)', 'slower (750ms)', 'slowest (1000ms)']);
    const { wrap: eWrap, select: eSel } = makeSelect('Easing', ['linear', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring']);
    dSel.value = 'normal (300ms)';
    eSel.value = 'ease-in-out';

    const playBtn = document.createElement('button');
    playBtn.textContent = '▶ Play';
    playBtn.style.cssText = `
      background:${BRAND};
      color:#fff;
      border:none;
      border-radius:8px;
      padding:10px 24px;
      font-size:0.875rem;
      font-weight:600;
      cursor:pointer;
      height:42px;
    `;

    controls.appendChild(dWrap);
    controls.appendChild(eWrap);
    controls.appendChild(playBtn);

    const previewCard = document.createElement('div');
    previewCard.style.cssText = `
      background:${CARD_BG};
      border:1px solid rgba(255,255,255,0.07);
      border-radius:12px;
      padding:2rem;
      margin-bottom:1.5rem;
    `;

    const track = document.createElement('div');
    track.style.cssText = `
      position:relative;
      height:48px;
      background:rgba(255,255,255,0.04);
      border-radius:24px;
      border:1px solid rgba(255,255,255,0.07);
      margin-bottom:1.5rem;
    `;
    const ball = document.createElement('div');
    ball.style.cssText = `
      position:absolute;top:50%;transform:translateY(-50%);
      left:8px;width:32px;height:32px;border-radius:50%;
      background:${BRAND};
      box-shadow:0 0 16px ${BRAND}88;
      transition:left 300ms cubic-bezier(0.4,0,0.2,1);
      will-change:left;
    `;
    track.appendChild(ball);

    const output = document.createElement('pre');
    output.style.cssText = `
      background:rgba(0,0,0,0.3);
      border-radius:8px;
      padding:1rem;
      font-size:0.8rem;
      color:#a0a0b8;
      margin:0;
      line-height:1.6;
    `;

    const durationMs: Record<string, number> = { 'instant (0ms)': 0, 'fast (150ms)': 150, 'normal (300ms)': 300, 'slow (500ms)': 500, 'slower (750ms)': 750, 'slowest (1000ms)': 1000 };
    const easingCurves: Record<string, string> = {
      'linear': 'linear',
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    };
    const easingTokens: Record<string, string> = {
      'linear': '--ease-linear', 'ease-in': '--ease-in', 'ease-out': '--ease-out',
      'ease-in-out': '--ease-in-out', 'bounce': '--ease-bounce', 'spring': '--ease-spring',
    };
    const durationTokens: Record<string, string> = {
      'instant (0ms)': '--duration-instant', 'fast (150ms)': '--duration-fast',
      'normal (300ms)': '--duration-normal', 'slow (500ms)': '--duration-slow',
      'slower (750ms)': '--duration-slower', 'slowest (1000ms)': '--duration-slowest',
    };

    function updateOutput() {
      const dToken = durationTokens[dSel.value];
      const eToken = easingTokens[eSel.value];
      const ms = durationMs[dSel.value];
      const curve = easingCurves[eSel.value];
      output.textContent =
`.my-element {
  /* Using tokens */
  transition: all var(${dToken}) var(${eToken});

  /* Resolved values */
  transition: all ${ms}ms ${curve};
}`;
      return { ms, curve };
    }
    updateOutput();
    dSel.addEventListener('change', updateOutput);
    eSel.addEventListener('change', updateOutput);

    let playing = false;
    playBtn.addEventListener('click', () => {
      if (playing) return;
      playing = true;
      playBtn.textContent = '● Running…';

      const { ms, curve } = updateOutput();
      ball.style.transition = `left ${ms}ms ${curve}`;
      const trackWidth = track.offsetWidth;
      ball.style.left = `${trackWidth - 40}px`;

      const totalMs = Math.max(ms, 50);
      setTimeout(() => {
        ball.style.left = '8px';
        setTimeout(() => {
          playing = false;
          playBtn.textContent = '▶ Play';
        }, totalMs + 50);
      }, totalMs + 100);
    });

    previewCard.appendChild(track);
    previewCard.appendChild(output);

    wrapper.appendChild(controls);
    wrapper.appendChild(previewCard);
    return wrapper;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. Token Reference — full table
// ─────────────────────────────────────────────────────────────────────────────

export const TokenReference: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Complete reference table for every animation and transition token, including Figma Variable names and recommended CSS scopes.'
      }
    }
  },
  render: () => {
    injectTokens();

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      font-family: Inter, system-ui, sans-serif;
      background: ${DARK_BG};
      min-height: 100vh;
      padding: 2.5rem;
      color: #f0f0f5;
    `;

    const sections: { title: string; color: string; rows: [string, string, string, string][] }[] = [
      {
        title: 'Durations', color: BRAND,
        rows: [
          ['--duration-instant',  '0ms',    'duration/instant',  'State changes; no visible motion'],
          ['--duration-fast',     '150ms',  'duration/fast',     'Hover, focus, button press'],
          ['--duration-normal',   '300ms',  'duration/normal',   'Menus, tooltips, modals'],
          ['--duration-slow',     '500ms',  'duration/slow',     'Drawers, page transitions'],
          ['--duration-slower',   '750ms',  'duration/slower',   'Emphasis, onboarding'],
          ['--duration-slowest',  '1000ms', 'duration/slowest',  'Skeleton loaders, looping'],
        ]
      },
      {
        title: 'Easing Functions', color: '#7c6af7',
        rows: [
          ['--ease-linear',   'linear',                              'easing/linear',   'Spinners, progress bars, looping'],
          ['--ease-in',       'cubic-bezier(0.4, 0, 1, 1)',          'easing/in',       'Elements leaving the viewport'],
          ['--ease-out',      'cubic-bezier(0, 0, 0.2, 1)',          'easing/out',      'Elements entering the viewport'],
          ['--ease-in-out',   'cubic-bezier(0.4, 0, 0.2, 1)',        'easing/in-out',   'Default — most UI interactions'],
          ['--ease-bounce',   'cubic-bezier(0.68, -0.55, 0.265, 1.55)', 'easing/bounce', 'Confirmations, playful emphasis'],
          ['--ease-spring',   'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 'easing/spring', 'Modals, drawers, natural snap'],
        ]
      },
      {
        title: 'Composite Transitions', color: '#06b6d4',
        rows: [
          ['--transition-fast',       '150ms ease-in-out',                '—', 'Generic fast transition shorthand'],
          ['--transition-normal',     '300ms ease-in-out',                '—', 'Generic normal transition shorthand'],
          ['--transition-slow',       '500ms ease-in-out',                '—', 'Generic slow transition shorthand'],
          ['--transition-all-fast',   'all 150ms ease-in-out',            '—', 'All properties, fast'],
          ['--transition-all-normal', 'all 300ms ease-in-out',            '—', 'All properties, normal'],
          ['--transition-colors',     'color/bg/border 150ms ease-in-out','—', 'Color-only transition (no layout)'],
          ['--transition-transform',  'transform 150ms ease-in-out',      '—', 'Transform-only (GPU composited)'],
          ['--transition-opacity',    'opacity 300ms ease-in-out',        '—', 'Opacity-only (GPU composited)'],
        ]
      },
    ];

    sections.forEach(({ title, color, rows }) => {
      const section = document.createElement('div');
      section.style.marginBottom = '2.5rem';

      const heading = document.createElement('h3');
      heading.style.cssText = `font-size:1rem;font-weight:700;color:${color};margin:0 0 1rem;display:flex;align-items:center;gap:8px;`;
      heading.innerHTML = `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${color}"></span>${title}`;
      section.appendChild(heading);

      const table = document.createElement('div');
      table.style.cssText = `
        background:${CARD_BG};
        border:1px solid rgba(255,255,255,0.07);
        border-radius:12px;
        overflow:hidden;
      `;

      const headerRow = document.createElement('div');
      headerRow.style.cssText = `
        display:grid;
        grid-template-columns:220px 1fr 180px 1fr;
        padding:10px 16px;
        background:rgba(255,255,255,0.04);
        font-size:0.72rem;
        font-weight:700;
        text-transform:uppercase;
        letter-spacing:0.5px;
        color:#8888a0;
        border-bottom:1px solid rgba(255,255,255,0.07);
      `;
      ['CSS Token', 'Value', 'Figma Variable', 'When to use'].forEach(h => {
        const th = document.createElement('div');
        th.textContent = h;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      rows.forEach(([token, value, figma, use], i) => {
        const row = document.createElement('div');
        row.style.cssText = `
          display:grid;
          grid-template-columns:220px 1fr 180px 1fr;
          padding:10px 16px;
          font-size:0.8rem;
          border-bottom:${i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none'};
          align-items:center;
          gap:1rem;
        `;
        [
          `<code style="color:${color};font-size:0.75rem">${token}</code>`,
          `<span style="color:#a0a0b8;font-family:monospace;font-size:0.75rem">${value}</span>`,
          figma !== '—' ? `<code style="color:#8888a0;font-size:0.72rem">${figma}</code>` : `<span style="color:#404050">—</span>`,
          `<span style="color:#8888a0">${use}</span>`,
        ].forEach(html => {
          const cell = document.createElement('div');
          cell.innerHTML = html;
          row.appendChild(cell);
        });
        table.appendChild(row);
      });

      section.appendChild(table);
      wrapper.appendChild(section);
    });

    // Figma note
    const note = document.createElement('div');
    note.style.cssText = `
      background:rgba(124,106,247,0.1);
      border:1px solid rgba(124,106,247,0.25);
      border-radius:10px;
      padding:1rem 1.25rem;
      font-size:0.8rem;
      color:#c0b8f8;
      line-height:1.6;
    `;
    note.innerHTML = `
      <strong style="color:#9585fa">📐 Figma Variables note</strong><br>
      Duration tokens are available as <strong>FLOAT</strong> variables in <code>Aural/Animation</code>.
      Easing tokens are <strong>STRING</strong> variables. Figma does not yet have a native scope for
      animation properties, so both use <code>ALL_SCOPES</code> — they serve as reference/spec values
      and can be read by design-to-code tooling. When Figma ships a motion variable scope these will
      be updated automatically.
    `;
    wrapper.appendChild(note);

    return wrapper;
  }
};
