const C={title:"Components/Accordion",tags:["autodocs"],parameters:{docs:{description:{component:"Vertically stacked sections that expand and collapse to reveal content. Built with accessibility in mind, following WCAG guidelines and ARIA best practices."}}}},n=`<svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
  <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
</svg>`,i={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="800px";const e=document.createElement("div");return e.className="accordion",e.innerHTML=`
      <div class="accordion-item" id="acc-item-1">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-panel-1">
          <span>What is Aural UI?</span>
          ${n}
        </button>
        <div id="acc-panel-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            Aural UI is a modern, accessible component library designed for building beautiful web applications with a focus on audio and music interfaces.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="acc-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-2">
          <span>How do I install it?</span>
          ${n}
        </button>
        <div id="acc-panel-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Simply include the CSS and JavaScript files in your HTML and start using the components.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="acc-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-3">
          <span>Is it accessible?</span>
          ${n}
        </button>
        <div id="acc-panel-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Yes! Aural UI is built with accessibility in mind, following WCAG guidelines and ARIA best practices.
          </div>
        </div>
      </div>
    `,a.appendChild(e),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initAccordions()},100),a},parameters:{docs:{source:{code:`<div class="accordion">
  <div class="accordion-item" id="acc-item-1">
    <button class="accordion-header" aria-expanded="true" aria-controls="acc-panel-1">
      <span>What is Aural UI?</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
      </svg>
    </button>
    <div id="acc-panel-1" class="accordion-panel" role="region">
      <div class="accordion-content">
        Aural UI is a modern, accessible component library designed for building beautiful web applications.
      </div>
    </div>
  </div>

  <div class="accordion-item" id="acc-item-2">
    <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-2">
      <span>How do I install it?</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
      </svg>
    </button>
    <div id="acc-panel-2" class="accordion-panel" role="region" hidden>
      <div class="accordion-content">
        Simply include the CSS and JavaScript files in your HTML.
      </div>
    </div>
  </div>
</div>

<script>
// Initialize accordion functionality
if (window.Aural) {
  window.Aural.initAccordions();
}
<\/script>`}}}},o={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="800px";const e=document.createElement("div");return e.className="accordion accordion-bordered",e.innerHTML=`
      <div class="accordion-item" id="bordered-item-1">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-1">
          <span>First Section</span>
          ${n}
        </button>
        <div id="acc-bordered-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Content for the first section goes here. You can add any content you want.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="bordered-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-2">
          <span>Second Section</span>
          ${n}
        </button>
        <div id="acc-bordered-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Content for the second section. The bordered variant adds visible borders between items.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="bordered-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-3">
          <span>Third Section</span>
          ${n}
        </button>
        <div id="acc-bordered-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            This variant is great when you want clear visual separation between accordion items.
          </div>
        </div>
      </div>
    `,a.appendChild(e),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initAccordions()},100),a}},c={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="800px";const e=document.createElement("div");return e.className="accordion accordion-flush",e.innerHTML=`
      <div class="accordion-item" id="flush-item-1">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-1">
          <span>Flush Item One</span>
          ${n}
        </button>
        <div id="acc-flush-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Flush accordions remove outer borders for a cleaner look when embedded in cards or sidebars.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="flush-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-2">
          <span>Flush Item Two</span>
          ${n}
        </button>
        <div id="acc-flush-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Perfect for use within cards or other containers where you don't want extra borders.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="flush-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-3">
          <span>Flush Item Three</span>
          ${n}
        </button>
        <div id="acc-flush-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Notice how the first item has no top padding for a seamless integration.
          </div>
        </div>
      </div>
    `,a.appendChild(e),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initAccordions()},100),a}},d={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="800px";const e=document.createElement("div");return e.className="accordion accordion-always-open accordion-bordered",e.innerHTML=`
      <div class="accordion-item" id="multi-item-1">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-multi-1">
          <span>Section One</span>
          ${n}
        </button>
        <div id="acc-multi-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            This panel stays open when you open another panel. Try clicking the other sections - this one will remain expanded!
          </div>
        </div>
      </div>

      <div class="accordion-item" id="multi-item-2">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-multi-2">
          <span>Section Two</span>
          ${n}
        </button>
        <div id="acc-multi-2" class="accordion-panel" role="region">
          <div class="accordion-content">
            Multiple panels can be open at the same time. This is useful when users need to compare content across sections.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="multi-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-multi-3">
          <span>Section Three</span>
          ${n}
        </button>
        <div id="acc-multi-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Click to expand this section. Notice how the other sections stay open - they won't collapse automatically.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="multi-item-4">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-multi-4">
          <span>Section Four</span>
          ${n}
        </button>
        <div id="acc-multi-4" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Great for documentation, FAQs, or any content where users might want to view multiple sections at once.
          </div>
        </div>
      </div>
    `,a.appendChild(e),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initAccordions()},100),a}},r={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="800px";const e=document.createElement("div");return e.className="accordion",e.innerHTML=`
      <div class="accordion-item" id="open-item-1">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-open-1">
          <span>Getting Started</span>
          ${n}
        </button>
        <div id="acc-open-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            This section is open by default. Follow these steps to get started with Aural UI.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="open-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-open-2">
          <span>Advanced Features</span>
          ${n}
        </button>
        <div id="acc-open-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Learn about advanced features and customization options.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="open-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-open-3">
          <span>API Reference</span>
          ${n}
        </button>
        <div id="acc-open-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Explore the complete API documentation for all components.
          </div>
        </div>
      </div>
    `,a.appendChild(e),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initAccordions()},100),a}},t={render:()=>{const a=document.createElement("div");a.style.padding="2rem",a.style.maxWidth="800px";const e=document.createElement("div");return e.className="accordion",e.innerHTML=`
      <div class="accordion-item" id="faq-item-1">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-1">
          <span>What payment methods do you accept?</span>
          ${n}
        </button>
        <div id="acc-faq-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="faq-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-2">
          <span>Can I cancel my subscription anytime?</span>
          ${n}
        </button>
        <div id="acc-faq-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="faq-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-3">
          <span>Do you offer refunds?</span>
          ${n}
        </button>
        <div id="acc-faq-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            We offer a 30-day money-back guarantee for all new subscriptions. Contact our support team for assistance.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="faq-item-4">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-4">
          <span>How do I upgrade my plan?</span>
          ${n}
        </button>
        <div id="acc-faq-4" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            You can upgrade your plan anytime from your account settings. The price difference will be prorated for your current billing cycle.
          </div>
        </div>
      </div>
    `,a.appendChild(e),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initAccordions()},100),a}};var s,l,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.innerHTML = \`
      <div class="accordion-item" id="acc-item-1">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-panel-1">
          <span>What is Aural UI?</span>
          \${chevronIcon}
        </button>
        <div id="acc-panel-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            Aural UI is a modern, accessible component library designed for building beautiful web applications with a focus on audio and music interfaces.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="acc-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-2">
          <span>How do I install it?</span>
          \${chevronIcon}
        </button>
        <div id="acc-panel-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Simply include the CSS and JavaScript files in your HTML and start using the components.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="acc-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-3">
          <span>Is it accessible?</span>
          \${chevronIcon}
        </button>
        <div id="acc-panel-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Yes! Aural UI is built with accessibility in mind, following WCAG guidelines and ARIA best practices.
          </div>
        </div>
      </div>
    \`;
    container.appendChild(accordion);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);
    return container;
  },
  parameters: {
    docs: {
      source: {
        code: \`<div class="accordion">
  <div class="accordion-item" id="acc-item-1">
    <button class="accordion-header" aria-expanded="true" aria-controls="acc-panel-1">
      <span>What is Aural UI?</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
      </svg>
    </button>
    <div id="acc-panel-1" class="accordion-panel" role="region">
      <div class="accordion-content">
        Aural UI is a modern, accessible component library designed for building beautiful web applications.
      </div>
    </div>
  </div>

  <div class="accordion-item" id="acc-item-2">
    <button class="accordion-header" aria-expanded="false" aria-controls="acc-panel-2">
      <span>How do I install it?</span>
      <svg class="accordion-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z"/>
      </svg>
    </button>
    <div id="acc-panel-2" class="accordion-panel" role="region" hidden>
      <div class="accordion-content">
        Simply include the CSS and JavaScript files in your HTML.
      </div>
    </div>
  </div>
</div>

<script>
// Initialize accordion functionality
if (window.Aural) {
  window.Aural.initAccordions();
}
<\/script>\`
      }
    }
  }
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,v,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-bordered';
    accordion.innerHTML = \`
      <div class="accordion-item" id="bordered-item-1">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-1">
          <span>First Section</span>
          \${chevronIcon}
        </button>
        <div id="acc-bordered-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Content for the first section goes here. You can add any content you want.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="bordered-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-2">
          <span>Second Section</span>
          \${chevronIcon}
        </button>
        <div id="acc-bordered-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Content for the second section. The bordered variant adds visible borders between items.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="bordered-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-bordered-3">
          <span>Third Section</span>
          \${chevronIcon}
        </button>
        <div id="acc-bordered-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            This variant is great when you want clear visual separation between accordion items.
          </div>
        </div>
      </div>
    \`;
    container.appendChild(accordion);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);
    return container;
  }
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var h,f,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-flush';
    accordion.innerHTML = \`
      <div class="accordion-item" id="flush-item-1">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-1">
          <span>Flush Item One</span>
          \${chevronIcon}
        </button>
        <div id="acc-flush-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Flush accordions remove outer borders for a cleaner look when embedded in cards or sidebars.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="flush-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-2">
          <span>Flush Item Two</span>
          \${chevronIcon}
        </button>
        <div id="acc-flush-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Perfect for use within cards or other containers where you don't want extra borders.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="flush-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-flush-3">
          <span>Flush Item Three</span>
          \${chevronIcon}
        </button>
        <div id="acc-flush-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Notice how the first item has no top padding for a seamless integration.
          </div>
        </div>
      </div>
    \`;
    container.appendChild(accordion);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);
    return container;
  }
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,g,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    const accordion = document.createElement('div');
    accordion.className = 'accordion accordion-always-open accordion-bordered';
    accordion.innerHTML = \`
      <div class="accordion-item" id="multi-item-1">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-multi-1">
          <span>Section One</span>
          \${chevronIcon}
        </button>
        <div id="acc-multi-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            This panel stays open when you open another panel. Try clicking the other sections - this one will remain expanded!
          </div>
        </div>
      </div>

      <div class="accordion-item" id="multi-item-2">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-multi-2">
          <span>Section Two</span>
          \${chevronIcon}
        </button>
        <div id="acc-multi-2" class="accordion-panel" role="region">
          <div class="accordion-content">
            Multiple panels can be open at the same time. This is useful when users need to compare content across sections.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="multi-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-multi-3">
          <span>Section Three</span>
          \${chevronIcon}
        </button>
        <div id="acc-multi-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Click to expand this section. Notice how the other sections stay open - they won't collapse automatically.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="multi-item-4">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-multi-4">
          <span>Section Four</span>
          \${chevronIcon}
        </button>
        <div id="acc-multi-4" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Great for documentation, FAQs, or any content where users might want to view multiple sections at once.
          </div>
        </div>
      </div>
    \`;
    container.appendChild(accordion);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);
    return container;
  }
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,A,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.innerHTML = \`
      <div class="accordion-item" id="open-item-1">
        <button class="accordion-header" aria-expanded="true" aria-controls="acc-open-1">
          <span>Getting Started</span>
          \${chevronIcon}
        </button>
        <div id="acc-open-1" class="accordion-panel" role="region">
          <div class="accordion-content">
            This section is open by default. Follow these steps to get started with Aural UI.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="open-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-open-2">
          <span>Advanced Features</span>
          \${chevronIcon}
        </button>
        <div id="acc-open-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Learn about advanced features and customization options.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="open-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-open-3">
          <span>API Reference</span>
          \${chevronIcon}
        </button>
        <div id="acc-open-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Explore the complete API documentation for all components.
          </div>
        </div>
      </div>
    \`;
    container.appendChild(accordion);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);
    return container;
  }
}`,...(I=(A=r.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var T,S,$;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.innerHTML = \`
      <div class="accordion-item" id="faq-item-1">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-1">
          <span>What payment methods do you accept?</span>
          \${chevronIcon}
        </button>
        <div id="acc-faq-1" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="faq-item-2">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-2">
          <span>Can I cancel my subscription anytime?</span>
          \${chevronIcon}
        </button>
        <div id="acc-faq-2" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="faq-item-3">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-3">
          <span>Do you offer refunds?</span>
          \${chevronIcon}
        </button>
        <div id="acc-faq-3" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            We offer a 30-day money-back guarantee for all new subscriptions. Contact our support team for assistance.
          </div>
        </div>
      </div>

      <div class="accordion-item" id="faq-item-4">
        <button class="accordion-header" aria-expanded="false" aria-controls="acc-faq-4">
          <span>How do I upgrade my plan?</span>
          \${chevronIcon}
        </button>
        <div id="acc-faq-4" class="accordion-panel" role="region" hidden>
          <div class="accordion-content">
            You can upgrade your plan anytime from your account settings. The price difference will be prorated for your current billing cycle.
          </div>
        </div>
      </div>
    \`;
    container.appendChild(accordion);
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.initAccordions();
      }
    }, 100);
    return container;
  }
}`,...($=(S=t.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const E=["Default","Bordered","Flush","AlwaysOpen","DefaultOpen","FAQ"];export{d as AlwaysOpen,o as Bordered,i as Default,r as DefaultOpen,t as FAQ,c as Flush,E as __namedExportsOrder,C as default};
