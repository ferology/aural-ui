import{c as Y}from"./createThemeGrid-DWAncU4Q.js";const ee={title:"Components/Forms/Slider",tags:["autodocs"],parameters:{docs:{description:{component:`
# Slider Component

Interactive control for selecting a value from a continuous range. Perfect for adjustments like volume, brightness, or any value that needs visual feedback.

## HTML Structure

\`\`\`html
<div class="aural-slider">
  <div class="aural-slider__label-row">
    <label class="aural-slider__label">Volume</label>
    <span class="aural-slider__value">50</span>
  </div>
  <input type="range" class="aural-slider__input" min="0" max="100" value="50">
</div>
\`\`\`

## Sizes

- \`aural-slider--sm\` - Small slider
- Default (no modifier) - Medium slider
- \`aural-slider--lg\` - Large slider

## Color Variants

- \`aural-slider--primary\` - Primary color (default)
- \`aural-slider--success\` - Success color
- \`aural-slider--warning\` - Warning color

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-slider">
  <div class="aural-slider__label-row">
    <label class="aural-slider__label">Volume</label>
    <span class="aural-slider__value">50</span>
  </div>
  <input type="range" class="aural-slider__input" min="0" max="100" value="50">
</div>
\`\`\`

**React:**
\`\`\`jsx
const [value, setValue] = useState(50);
<div className="aural-slider">
  <div className="aural-slider__label-row">
    <label className="aural-slider__label">Volume</label>
    <span className="aural-slider__value">{value}</span>
  </div>
  <input type="range" className="aural-slider__input"
    min="0" max="100" value={value}
    onChange={(e) => setValue(Number(e.target.value))} />
</div>
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="aural-slider">
    <div class="aural-slider__label-row">
      <label class="aural-slider__label">Volume</label>
      <span class="aural-slider__value">{{ value }}</span>
    </div>
    <input type="range" class="aural-slider__input"
      min="0" max="100" v-model="value" />
  </div>
</template>
\`\`\`
        `.trim()}}},argTypes:{label:{control:"text",description:"Slider label text"},value:{control:"number",description:"Current slider value"},min:{control:"number",description:"Minimum value"},max:{control:"number",description:"Maximum value"},step:{control:"number",description:"Step increment"},disabled:{control:"boolean",description:"Disabled state"},showValue:{control:"boolean",description:"Show current value"},showLabels:{control:"boolean",description:"Show min/max labels"},size:{control:"select",options:["sm","md","lg"],description:"Slider size"},color:{control:"select",options:["primary","success","warning"],description:"Color variant"}}};function d(e){const l=document.createElement("div");l.style.padding="2rem",l.style.maxWidth="500px";const t=document.createElement("div");t.className="aural-slider",e.size==="sm"?t.classList.add("aural-slider--sm"):e.size==="lg"&&t.classList.add("aural-slider--lg"),e.color&&e.color!=="primary"?t.classList.add(`aural-slider--${e.color}`):e.color==="primary"&&t.classList.add("aural-slider--primary");const s=`slider-${Math.random().toString(36).substr(2,9)}`;if(e.label||e.showValue){const a=document.createElement("div");if(a.className="aural-slider__label-row",e.label){const r=document.createElement("label");r.className="aural-slider__label",r.textContent=e.label,r.htmlFor=s,a.appendChild(r)}if(e.showValue){const r=document.createElement("span");r.className="aural-slider__value",r.textContent=String(e.value||0),a.appendChild(r)}t.appendChild(a)}const n=document.createElement("input");if(n.id=s,n.type="range",n.className="aural-slider__input",n.min=String(e.min!==void 0?e.min:0),n.max=String(e.max!==void 0?e.max:100),n.value=String(e.value!==void 0?e.value:50),n.step=String(e.step!==void 0?e.step:1),n.setAttribute("aria-label",e.label||"Slider"),e.disabled&&(n.disabled=!0),e.showValue&&n.addEventListener("input",a=>{const r=a.target,i=t.querySelector(".aural-slider__value");i&&(i.textContent=r.value)}),t.appendChild(n),e.showLabels){const a=document.createElement("div");a.className="slider-range-labels",a.style.cssText=`
      display: flex;
      justify-content: space-between;
      font-size: var(--text-sm);
      color: var(--color-text-tertiary);
      margin-top: var(--space-2);
    `;const r=document.createElement("span");r.textContent=String(e.min!==void 0?e.min:0),a.appendChild(r);const i=document.createElement("span");i.textContent=String(e.max!==void 0?e.max:100),a.appendChild(i),l.appendChild(t),l.appendChild(a)}else l.appendChild(t);return l}const c={render:e=>d(e),args:{label:"Volume",value:50,min:0,max:100,step:1,disabled:!1,showValue:!0,showLabels:!1,size:"md",color:"primary"}},p={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="2rem",e.style.maxWidth="500px",[{size:"sm",label:"Small Slider",value:30},{size:"md",label:"Default Slider",value:50},{size:"lg",label:"Large Slider",value:70}].forEach(({size:t,label:s,value:n})=>{const a=d({label:s,value:n,min:0,max:100,step:1,showValue:!0,size:t});a.style.padding="0",e.appendChild(a)}),e}},u={render:e=>d(e),args:{label:"Opacity",value:80,min:0,max:100,step:1,showValue:!0,showLabels:!1,size:"md"}},m={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="2rem",e.style.maxWidth="500px",[{label:"Rating",min:1,max:5,value:3,step:1},{label:"Step by 25",min:0,max:100,value:50,step:25}].forEach(({label:t,min:s,max:n,value:a,step:r})=>{const i=d({label:t,min:s,max:n,value:a,step:r,showValue:!0});i.style.padding="0",e.appendChild(i)}),e}},b={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="2rem",e.style.maxWidth="500px",[{color:"primary",label:"Primary",value:65},{color:"success",label:"Success",value:75},{color:"warning",label:"Warning",value:60}].forEach(({color:t,label:s,value:n})=>{const a=d({label:s,value:n,min:0,max:100,step:1,showValue:!0,color:t,size:"md"});a.style.padding="0",e.appendChild(a)}),e}},v={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="500px";const l=document.createElement("div");l.className="aural-slider";const t=document.createElement("div");t.className="aural-slider__label-row";const s=document.createElement("label");s.className="aural-slider__label",s.textContent="Brightness",t.appendChild(s);const n=document.createElement("span");n.className="aural-slider__value",n.textContent="60%",t.appendChild(n),l.appendChild(t);const a=document.createElement("input");a.type="range",a.className="aural-slider__input",a.min="0",a.max="100",a.value="60",a.setAttribute("aria-label","Brightness control from 0% to 100%"),a.addEventListener("input",C=>{const S=C.target;n.textContent=S.value+"%"}),l.appendChild(a),e.appendChild(l);const r=document.createElement("div");r.className="slider-range-labels",r.style.cssText=`
      display: flex;
      justify-content: space-between;
      font-size: var(--text-sm);
      color: var(--color-text-tertiary);
      margin-top: var(--space-2);
    `;const i=document.createElement("span");i.textContent="0% (Dark)",r.appendChild(i);const o=document.createElement("span");return o.textContent="100% (Bright)",r.appendChild(o),e.appendChild(r),e}},h={render:e=>d(e),args:{label:"Disabled Slider",value:50,min:0,max:100,step:1,disabled:!0,showValue:!0,showLabels:!1,size:"md"}},g={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="500px";const l=document.createElement("div");l.className="aural-slider";const t=document.createElement("div");t.className="aural-slider__label-row";const s=document.createElement("label");s.className="aural-slider__label",s.style.display="flex",s.style.alignItems="center",s.style.gap="0.5rem";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("width","16"),n.setAttribute("height","16"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2"),n.style.verticalAlign="middle",n.style.marginRight="8px";const a=document.createElementNS("http://www.w3.org/2000/svg","polygon");a.setAttribute("points","11 5 6 9 2 9 2 15 6 15 11 19 11 5");const r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"),n.appendChild(a),n.appendChild(r),s.appendChild(n),s.appendChild(document.createTextNode("Volume")),t.appendChild(s);const i=document.createElement("span");i.className="aural-slider__value",i.textContent="70%",t.appendChild(i),l.appendChild(t);const o=document.createElement("input");return o.type="range",o.className="aural-slider__input",o.min="0",o.max="100",o.value="70",o.setAttribute("aria-label","Volume control"),o.addEventListener("input",C=>{const S=C.target;i.textContent=S.value+"%"}),l.appendChild(o),e.appendChild(l),e}},x={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="500px";const l=document.createElement("div");l.className="aural-slider";const t=document.createElement("div");t.className="aural-slider__label-row";const s=document.createElement("label");s.className="aural-slider__label",s.textContent="Maximum Price",t.appendChild(s);const n=document.createElement("span");n.className="aural-slider__value",n.textContent="$500",t.appendChild(n),l.appendChild(t);const a=document.createElement("input");a.type="range",a.className="aural-slider__input",a.min="0",a.max="1000",a.value="500",a.step="50",a.setAttribute("aria-label","Maximum price"),a.addEventListener("input",i=>{const o=i.target;n.textContent="$"+o.value}),l.appendChild(a),e.appendChild(l);const r=document.createElement("div");return r.style.cssText=`
      text-align: center;
      margin-top: var(--space-4);
      font-size: var(--text-xl);
      font-weight: var(--font-semibold);
      color: var(--color-primary);
    `,r.textContent="$500",a.addEventListener("input",i=>{const o=i.target;r.textContent="$"+o.value}),e.appendChild(r),e}},y={render:e=>Y(()=>{const l=document.createElement("div");l.className="aural-slider",e.size==="sm"?l.classList.add("aural-slider--sm"):e.size==="lg"&&l.classList.add("aural-slider--lg"),e.color&&e.color!=="primary"?l.classList.add(`aural-slider--${e.color}`):e.color==="primary"&&l.classList.add("aural-slider--primary");const t=document.createElement("div");t.className="aural-slider__label-row";const s=document.createElement("label");if(s.className="aural-slider__label",s.textContent=e.label||"Slider",t.appendChild(s),e.showValue){const a=document.createElement("span");a.className="aural-slider__value",a.textContent=String(e.value||50),t.appendChild(a)}l.appendChild(t);const n=document.createElement("input");return n.type="range",n.className="aural-slider__input",n.min=String(e.min||0),n.max=String(e.max||100),n.value=String(e.value||50),n.step=String(e.step||1),n.setAttribute("aria-label",e.label||"Slider"),e.disabled&&(n.disabled=!0),e.showValue&&n.addEventListener("input",a=>{const r=a.target,i=l.querySelector(".aural-slider__value");i&&(i.textContent=r.value)}),l.appendChild(n),l}),args:{label:"Volume",value:65,min:0,max:100,step:1,disabled:!1,showValue:!0,size:"md",color:"primary"},argTypes:{label:{control:"text",description:"Slider label"},value:{control:"number",description:"Current value"},min:{control:"number",description:"Minimum value"},max:{control:"number",description:"Maximum value"},step:{control:"number",description:"Step increment"},showValue:{control:"boolean",description:"Show value"},size:{control:"select",options:["sm","md","lg"],description:"Size"},color:{control:"select",options:["primary","success","warning"],description:"Color"},disabled:{control:"boolean",description:"Disabled state"}}};var w,_,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => createSlider(args),
  args: {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: true,
    showLabels: false,
    size: 'md',
    color: 'primary'
  }
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var f,N,W;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';
    container.style.maxWidth = '500px';
    const sizes = [{
      size: 'sm',
      label: 'Small Slider',
      value: 30
    }, {
      size: 'md',
      label: 'Default Slider',
      value: 50
    }, {
      size: 'lg',
      label: 'Large Slider',
      value: 70
    }];
    sizes.forEach(({
      size,
      label,
      value
    }) => {
      const slider = createSlider({
        label,
        value,
        min: 0,
        max: 100,
        step: 1,
        showValue: true,
        size
      });
      slider.style.padding = '0';
      container.appendChild(slider);
    });
    return container;
  }
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var L,V,z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => createSlider(args),
  args: {
    label: 'Opacity',
    value: 80,
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
    showLabels: false,
    size: 'md'
  }
}`,...(z=(V=u.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var R,A,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';
    container.style.maxWidth = '500px';
    const examples = [{
      label: 'Rating',
      min: 1,
      max: 5,
      value: 3,
      step: 1
    }, {
      label: 'Step by 25',
      min: 0,
      max: 100,
      value: 50,
      step: 25
    }];
    examples.forEach(({
      label,
      min,
      max,
      value,
      step
    }) => {
      const slider = createSlider({
        label,
        min,
        max,
        value,
        step,
        showValue: true
      });
      slider.style.padding = '0';
      container.appendChild(slider);
    });
    return container;
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,T,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';
    container.style.maxWidth = '500px';
    const colors = [{
      color: 'primary',
      label: 'Primary',
      value: 65
    }, {
      color: 'success',
      label: 'Success',
      value: 75
    }, {
      color: 'warning',
      label: 'Warning',
      value: 60
    }];
    colors.forEach(({
      color,
      label,
      value
    }) => {
      const slider = createSlider({
        label,
        value,
        min: 0,
        max: 100,
        step: 1,
        showValue: true,
        color,
        size: 'md'
      });
      slider.style.padding = '0';
      container.appendChild(slider);
    });
    return container;
  }
}`,...($=(T=b.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var k,I,P;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'aural-slider';
    const labelRow = document.createElement('div');
    labelRow.className = 'aural-slider__label-row';
    const label = document.createElement('label');
    label.className = 'aural-slider__label';
    label.textContent = 'Brightness';
    labelRow.appendChild(label);
    const valueSpan = document.createElement('span');
    valueSpan.className = 'aural-slider__value';
    valueSpan.textContent = '60%';
    labelRow.appendChild(valueSpan);
    sliderWrapper.appendChild(labelRow);
    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'aural-slider__input';
    input.min = '0';
    input.max = '100';
    input.value = '60';
    input.setAttribute('aria-label', 'Brightness control from 0% to 100%');
    input.addEventListener('input', e => {
      const target = e.target as HTMLInputElement;
      valueSpan.textContent = target.value + '%';
    });
    sliderWrapper.appendChild(input);
    container.appendChild(sliderWrapper);

    // Min/Max labels
    const labelsWrapper = document.createElement('div');
    labelsWrapper.className = 'slider-range-labels';
    labelsWrapper.style.cssText = \`
      display: flex;
      justify-content: space-between;
      font-size: var(--text-sm);
      color: var(--color-text-tertiary);
      margin-top: var(--space-2);
    \`;
    const minLabel = document.createElement('span');
    minLabel.textContent = '0% (Dark)';
    labelsWrapper.appendChild(minLabel);
    const maxLabel = document.createElement('span');
    maxLabel.textContent = '100% (Bright)';
    labelsWrapper.appendChild(maxLabel);
    container.appendChild(labelsWrapper);
    return container;
  }
}`,...(P=(I=v.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var B,H,j;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => createSlider(args),
  args: {
    label: 'Disabled Slider',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    showValue: true,
    showLabels: false,
    size: 'md'
  }
}`,...(j=(H=h.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var q,F,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'aural-slider';
    const labelRow = document.createElement('div');
    labelRow.className = 'aural-slider__label-row';
    const label = document.createElement('label');
    label.className = 'aural-slider__label';
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '0.5rem';

    // Volume icon SVG
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('width', '16');
    icon.setAttribute('height', '16');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('stroke-width', '2');
    icon.style.verticalAlign = 'middle';
    icon.style.marginRight = '8px';
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '11 5 6 9 2 9 2 15 6 15 11 19 11 5');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07');
    icon.appendChild(polygon);
    icon.appendChild(path);
    label.appendChild(icon);
    label.appendChild(document.createTextNode('Volume'));
    labelRow.appendChild(label);
    const valueSpan = document.createElement('span');
    valueSpan.className = 'aural-slider__value';
    valueSpan.textContent = '70%';
    labelRow.appendChild(valueSpan);
    sliderWrapper.appendChild(labelRow);
    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'aural-slider__input';
    input.min = '0';
    input.max = '100';
    input.value = '70';
    input.setAttribute('aria-label', 'Volume control');
    input.addEventListener('input', e => {
      const target = e.target as HTMLInputElement;
      valueSpan.textContent = target.value + '%';
    });
    sliderWrapper.appendChild(input);
    container.appendChild(sliderWrapper);
    return container;
  }
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var O,J,K;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '500px';
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'aural-slider';
    const labelRow = document.createElement('div');
    labelRow.className = 'aural-slider__label-row';
    const label = document.createElement('label');
    label.className = 'aural-slider__label';
    label.textContent = 'Maximum Price';
    labelRow.appendChild(label);
    const valueSpan = document.createElement('span');
    valueSpan.className = 'aural-slider__value';
    valueSpan.textContent = '$500';
    labelRow.appendChild(valueSpan);
    sliderWrapper.appendChild(labelRow);
    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'aural-slider__input';
    input.min = '0';
    input.max = '1000';
    input.value = '500';
    input.step = '50';
    input.setAttribute('aria-label', 'Maximum price');
    input.addEventListener('input', e => {
      const target = e.target as HTMLInputElement;
      valueSpan.textContent = '$' + target.value;
    });
    sliderWrapper.appendChild(input);
    container.appendChild(sliderWrapper);

    // Price display
    const priceDisplay = document.createElement('div');
    priceDisplay.style.cssText = \`
      text-align: center;
      margin-top: var(--space-4);
      font-size: var(--text-xl);
      font-weight: var(--font-semibold);
      color: var(--color-primary);
    \`;
    priceDisplay.textContent = '$500';
    input.addEventListener('input', e => {
      const target = e.target as HTMLInputElement;
      priceDisplay.textContent = '$' + target.value;
    });
    container.appendChild(priceDisplay);
    return container;
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const sliderWrapper = document.createElement('div');
      sliderWrapper.className = 'aural-slider';

      // Add size class
      if (args.size === 'sm') {
        sliderWrapper.classList.add('aural-slider--sm');
      } else if (args.size === 'lg') {
        sliderWrapper.classList.add('aural-slider--lg');
      }

      // Add color class
      if (args.color && args.color !== 'primary') {
        sliderWrapper.classList.add(\`aural-slider--\${args.color}\`);
      } else if (args.color === 'primary') {
        sliderWrapper.classList.add('aural-slider--primary');
      }
      const labelRow = document.createElement('div');
      labelRow.className = 'aural-slider__label-row';
      const label = document.createElement('label');
      label.className = 'aural-slider__label';
      label.textContent = args.label || 'Slider';
      labelRow.appendChild(label);
      if (args.showValue) {
        const valueSpan = document.createElement('span');
        valueSpan.className = 'aural-slider__value';
        valueSpan.textContent = String(args.value || 50);
        labelRow.appendChild(valueSpan);
      }
      sliderWrapper.appendChild(labelRow);
      const input = document.createElement('input');
      input.type = 'range';
      input.className = 'aural-slider__input';
      input.min = String(args.min || 0);
      input.max = String(args.max || 100);
      input.value = String(args.value || 50);
      input.step = String(args.step || 1);
      input.setAttribute('aria-label', args.label || 'Slider');
      if (args.disabled) {
        input.disabled = true;
      }
      if (args.showValue) {
        input.addEventListener('input', e => {
          const target = e.target as HTMLInputElement;
          const valueSpan = sliderWrapper.querySelector('.aural-slider__value');
          if (valueSpan) {
            valueSpan.textContent = target.value;
          }
        });
      }
      sliderWrapper.appendChild(input);
      return sliderWrapper;
    });
  },
  args: {
    label: 'Volume',
    value: 65,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'primary'
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Slider label'
    },
    value: {
      control: 'number',
      description: 'Current value'
    },
    min: {
      control: 'number',
      description: 'Minimum value'
    },
    max: {
      control: 'number',
      description: 'Maximum value'
    },
    step: {
      control: 'number',
      description: 'Step increment'
    },
    showValue: {
      control: 'boolean',
      description: 'Show value'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size'
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning'],
      description: 'Color'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  }
}`,...(X=(U=y.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ne=["Default","Sizes","WithValue","WithSteps","Colors","WithLabels","Disabled","VolumeControl","PriceRange","ThemeComparison"];export{b as Colors,c as Default,h as Disabled,x as PriceRange,p as Sizes,y as ThemeComparison,g as VolumeControl,v as WithLabels,m as WithSteps,u as WithValue,ne as __namedExportsOrder,ee as default};
