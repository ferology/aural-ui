function s(n,e){const c=[{id:"minimal",label:"Minimal"},{id:"light",label:"Light"},{id:"dark",label:"Dark"},{id:"neon",label:"Neon"},{id:"kinetic",label:"Kinetic"},{id:"prismatic",label:"Prismatic"},{id:"high-contrast",label:"High Contrast"},{id:"colorblind-friendly",label:"Colorblind"},{id:"warm",label:"Warm"}],l=document.createElement("div");return l.style.cssText=`
    display: grid;
    grid-template-columns: ${(e==null?void 0:e.columns)||"repeat(auto-fit, minmax(400px, 1fr))"};
    gap: ${(e==null?void 0:e.gap)||"3rem"};
    padding: 3rem;
    max-width: 1800px;
    margin: 0 auto;
  `,c.forEach(i=>{const a=document.createElement("div");a.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
    `;const r=document.createElement("div");r.textContent=i.label,r.style.cssText=`
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.7;
      text-align: center;
      padding: 0.5rem;
    `;const t=document.createElement("div");t.setAttribute("data-theme",i.id),t.style.cssText=`
      padding: 2.5rem;
      background: var(--color-bg-primary);
      border: 2px solid var(--color-border-medium);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    `;const d=document.createElement("link");d.rel="stylesheet",d.href=`/themes/${i.id}.css`,t.appendChild(d);const m=n(i.id);t.appendChild(m),a.appendChild(r),a.appendChild(t),l.appendChild(a)}),l}export{s as c};
