import{c as Ie}from"./createThemeGrid-DWAncU4Q.js";const Re={title:"Components/Forms/Range Slider",tags:["autodocs"],parameters:{docs:{description:{component:`
# Range Slider Component

A dual-handle slider component for selecting minimum and maximum values from a range. Perfect for price filters, date ranges, and any scenario requiring bounded value selection.

## Features

- **Dual Handles**: Independent min/max value selection
- **Keyboard Accessible**: Full keyboard navigation support
- **Touch Friendly**: Optimized for mobile and touch devices
- **Multiple Sizes**: Small, Medium, and Large variants
- **Color Variants**: Primary, Success, Warning, and Error
- **Value Display**: Optional value labels and input fields
- **Vertical Orientation**: Support for vertical sliders
- **WCAG AAA Compliant**: Meets highest accessibility standards

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-range-slider">
  <div class="aural-range-slider__wrapper">
    <div class="aural-range-slider__track-bg"></div>
    <div class="aural-range-slider__track-fill"></div>
    <div class="aural-range-slider__handle aural-range-slider__handle--min"
         tabindex="0" role="slider" aria-label="Minimum value"
         aria-valuemin="0" aria-valuemax="100" aria-valuenow="25"></div>
    <div class="aural-range-slider__handle aural-range-slider__handle--max"
         tabindex="0" role="slider" aria-label="Maximum value"
         aria-valuemin="0" aria-valuemax="100" aria-valuenow="75"></div>
  </div>
  <div class="aural-range-slider__values">
    <div class="aural-range-slider__value">
      <span class="aural-range-slider__value-label">Min:</span>
      <span class="aural-range-slider__value-number">25</span>
    </div>
    <div class="aural-range-slider__value">
      <span class="aural-range-slider__value-label">Max:</span>
      <span class="aural-range-slider__value-number">75</span>
    </div>
  </div>
</div>
\`\`\`

**React:**
\`\`\`jsx
function RangeSlider({ min = 0, max = 100, values, onChange }) {
  const [range, setRange] = useState(values || [min, max]);

  const handleChange = (index, value) => {
    const newRange = [...range];
    newRange[index] = value;
    // Prevent handles from crossing
    if (index === 0 && value <= range[1]) {
      setRange(newRange);
      onChange?.(newRange);
    } else if (index === 1 && value >= range[0]) {
      setRange(newRange);
      onChange?.(newRange);
    }
  };

  return (
    <div className="aural-range-slider">
      <div className="aural-range-slider__wrapper">
        <div className="aural-range-slider__track-bg"></div>
        <div className="aural-range-slider__track-fill"></div>
        <div className="aural-range-slider__handle aural-range-slider__handle--min"
             tabindex="0" role="slider" aria-valuemin={min} aria-valuemax={max} aria-valuenow={range[0]}></div>
        <div className="aural-range-slider__handle aural-range-slider__handle--max"
             tabindex="0" role="slider" aria-valuemin={min} aria-valuemax={max} aria-valuenow={range[1]}></div>
      </div>
    </div>
  );
}
\`\`\`

**Vue 3:**
\`\`\`vue
<template>
  <div class="aural-range-slider">
    <div class="aural-range-slider__wrapper">
      <div class="aural-range-slider__track-bg" />
      <div
        class="aural-range-slider__track-fill"
        :style="fillStyle"
      />
      <div class="aural-range-slider__handle aural-range-slider__handle--min"
           tabindex="0" role="slider" :aria-valuenow="modelValue[0]"></div>
      <div class="aural-range-slider__handle aural-range-slider__handle--max"
           tabindex="0" role="slider" :aria-valuenow="modelValue[1]"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Array, default: () => [0, 100] },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 }
});

const fillStyle = computed(() => {
  const [start, end] = props.modelValue;
  return {
    left: \`\${(start / props.max) * 100}%\`,
    width: \`\${((end - start) / props.max) * 100}%\`
  };
});
<\/script>
\`\`\`
        `.trim()}}},argTypes:{minValue:{control:{type:"number",min:0,max:100,step:1},description:"Current minimum value"},maxValue:{control:{type:"number",min:0,max:100,step:1},description:"Current maximum value"},min:{control:{type:"number"},description:"Minimum possible value"},max:{control:{type:"number"},description:"Maximum possible value"},step:{control:{type:"number",min:1,max:10},description:"Step increment"},disabled:{control:"boolean",description:"Disabled state"},showValues:{control:"boolean",description:"Show current values below slider"},showLabels:{control:"boolean",description:"Show labels on handles"},showLimits:{control:"boolean",description:"Show min/max limit labels"},showInputs:{control:"boolean",description:"Show number input fields"},size:{control:"select",options:["sm","md","lg"],description:"Slider size"},variant:{control:"select",options:["primary","success","warning","error"],description:"Color variant"},minLabel:{control:"text",description:"Label for minimum value"},maxLabel:{control:"text",description:"Label for maximum value"},valuePrefix:{control:"text",description:'Prefix for values (e.g., "$")'},valueSuffix:{control:"text",description:'Suffix for values (e.g., "°C")'},vertical:{control:"boolean",description:"Vertical orientation"}}},n=e=>{const s=document.createElement("div"),f=e.size&&e.size!=="md"?`aural-range-slider--${e.size}`:"",x=e.variant&&e.variant!=="primary"?`aural-range-slider--${e.variant}`:"",l=e.vertical?"aural-range-slider--vertical":"";if(s.className=`aural-range-slider ${f} ${x} ${l}`.trim(),e.disabled&&s.classList.add("aural-range-slider--disabled"),e.showInputs){const a=document.createElement("div");a.className="aural-range-slider__inputs";const m=document.createElement("div");m.className="aural-range-slider__input-group";const o=document.createElement("label");o.className="aural-range-slider__input-label",o.textContent="Min",m.appendChild(o);const h=document.createElement("div");h.className="input-number";const u=document.createElement("input");u.type="number",u.className="aural-range-slider__input",u.value=String(e.minValue||25),u.min=String(e.min||0),u.max=String(e.max||100),e.disabled&&(u.disabled=!0),h.appendChild(u);const A=document.createElement("div");A.className="input-number__controls",A.innerHTML=`
      <button type="button" class="input-number__button" data-action="increment" aria-label="Increment">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button type="button" class="input-number__button" data-action="decrement" aria-label="Decrement">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    `,h.appendChild(A),m.appendChild(h),a.appendChild(m);const g=document.createElement("div");g.className="aural-range-slider__input-group";const k=document.createElement("label");k.className="aural-range-slider__input-label",k.textContent="Max",g.appendChild(k);const w=document.createElement("div");w.className="input-number";const d=document.createElement("input");d.type="number",d.className="aural-range-slider__input",d.value=String(e.maxValue||75),d.min=String(e.min||0),d.max=String(e.max||100),e.disabled&&(d.disabled=!0),w.appendChild(d);const D=document.createElement("div");D.className="input-number__controls",D.innerHTML=`
      <button type="button" class="input-number__button" data-action="increment" aria-label="Increment">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button type="button" class="input-number__button" data-action="decrement" aria-label="Decrement">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    `,w.appendChild(D),g.appendChild(w),a.appendChild(g),s.appendChild(a)}const r=document.createElement("div");r.className="aural-range-slider__wrapper";const c=document.createElement("div");c.className="aural-range-slider__track-bg",r.appendChild(c);const p=document.createElement("div");p.className="aural-range-slider__track-fill",r.appendChild(p);const i=document.createElement("div");if(i.className="aural-range-slider__handle aural-range-slider__handle--min",i.tabIndex=e.disabled?-1:0,i.setAttribute("role","slider"),i.setAttribute("aria-label",e.minLabel||"Minimum value"),i.setAttribute("aria-valuemin",String(e.min||0)),i.setAttribute("aria-valuemax",String(e.max||100)),i.setAttribute("aria-valuenow",String(e.minValue||25)),e.vertical&&i.setAttribute("aria-orientation","vertical"),e.showLabels){const a=document.createElement("div");a.className="aural-range-slider__label",a.textContent=`${e.valuePrefix||""}${e.minValue||25}${e.valueSuffix||""}`,i.appendChild(a)}r.appendChild(i);const t=document.createElement("div");if(t.className="aural-range-slider__handle aural-range-slider__handle--max",t.tabIndex=e.disabled?-1:0,t.setAttribute("role","slider"),t.setAttribute("aria-label",e.maxLabel||"Maximum value"),t.setAttribute("aria-valuemin",String(e.min||0)),t.setAttribute("aria-valuemax",String(e.max||100)),t.setAttribute("aria-valuenow",String(e.maxValue||75)),e.vertical&&t.setAttribute("aria-orientation","vertical"),e.showLabels){const a=document.createElement("div");a.className="aural-range-slider__label",a.textContent=`${e.valuePrefix||""}${e.maxValue||75}${e.valueSuffix||""}`,t.appendChild(a)}r.appendChild(t),s.appendChild(r);const v=((e.minValue||25)-(e.min||0))/((e.max||100)-(e.min||0))*100,b=((e.maxValue||75)-(e.min||0))/((e.max||100)-(e.min||0))*100;if(e.vertical?(i.style.bottom=`${v}%`,t.style.bottom=`${b}%`,p.style.bottom=`${v}%`,p.style.height=`${b-v}%`):(i.style.left=`${v}%`,t.style.left=`${b}%`,p.style.left=`${v}%`,p.style.width=`${b-v}%`),e.showValues){const a=document.createElement("div");a.className="aural-range-slider__values";const m=document.createElement("div");m.className="aural-range-slider__value",m.innerHTML=`
      <span class="aural-range-slider__value-label">Min:</span>
      <span class="aural-range-slider__value-number">${e.valuePrefix||""}${e.minValue||25}${e.valueSuffix||""}</span>
    `;const o=document.createElement("div");o.className="aural-range-slider__value",o.innerHTML=`
      <span class="aural-range-slider__value-label">Max:</span>
      <span class="aural-range-slider__value-number">${e.valuePrefix||""}${e.maxValue||75}${e.valueSuffix||""}</span>
    `,a.appendChild(m),a.appendChild(o),s.appendChild(a)}if(e.showLimits){const a=document.createElement("div");a.className="aural-range-slider__limits",a.innerHTML=`
      <span>${e.valuePrefix||""}${e.min||0}${e.valueSuffix||""}</span>
      <span>${e.valuePrefix||""}${e.max||100}${e.valueSuffix||""}</span>
    `,s.appendChild(a)}return s},y={render:e=>n(e),args:{minValue:25,maxValue:75,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum value",maxLabel:"Maximum value",valuePrefix:"",valueSuffix:"",vertical:!1}},L={render:e=>n(e),args:{minValue:30,maxValue:80,min:0,max:100,step:1,disabled:!1,showValues:!1,showLabels:!1,showLimits:!1,showInputs:!0,size:"md",variant:"primary",minLabel:"Minimum value",maxLabel:"Maximum value",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Range slider with number input fields for precise value entry. Includes increment/decrement controls."}}}},V={render:e=>n(e),args:{minValue:50,maxValue:500,min:0,max:1e3,step:10,disabled:!1,showValues:!1,showLabels:!0,showLimits:!0,showInputs:!0,size:"md",variant:"primary",minLabel:"Minimum price",maxLabel:"Maximum price",valuePrefix:"$",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Price range filter commonly used in e-commerce applications. Shows currency formatting, input fields, and limit labels."}}}},S={render:e=>n(e),args:{minValue:25,maxValue:45,min:18,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum age",maxLabel:"Maximum age",valuePrefix:"",valueSuffix:" years",vertical:!1},parameters:{docs:{description:{story:"Age range selector with minimum age constraint. Useful for filtering content or search results."}}}},_={render:e=>n(e),args:{minValue:9,maxValue:17,min:0,max:24,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!0,showInputs:!1,size:"md",variant:"primary",minLabel:"Start time",maxLabel:"End time",valuePrefix:"",valueSuffix:":00",vertical:!1},parameters:{docs:{description:{story:"Time range selector for scheduling or filtering by time of day. Shows hours in 24-hour format."}}}},C={render:e=>n(e),args:{minValue:18,maxValue:26,min:0,max:40,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!1,showInputs:!1,size:"md",variant:"success",minLabel:"Minimum temperature",maxLabel:"Maximum temperature",valuePrefix:"",valueSuffix:"°C",vertical:!1},parameters:{docs:{description:{story:"Temperature range selector using success variant. Shows unit suffix formatting."}}}},M={render:e=>n(e),args:{minValue:20,maxValue:80,min:0,max:100,step:10,disabled:!1,showValues:!0,showLabels:!0,showLimits:!0,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"%",vertical:!1},parameters:{docs:{description:{story:"Range slider with step increments of 10. Useful for percentage-based selections."}}}},z={render:e=>n(e),args:{minValue:30,maxValue:70,min:0,max:100,step:1,disabled:!0,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum value",maxLabel:"Maximum value",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Disabled state prevents user interaction and reduces visual prominence."}}}},E={render:e=>n(e),args:{minValue:15,maxValue:85,min:0,max:100,step:1,disabled:!1,showValues:!1,showLabels:!0,showLimits:!0,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Range slider with labels on handles and min/max limit labels for better context."}}}},I={render:e=>n(e),args:{minValue:20,maxValue:60,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"sm",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Small size variant for compact spaces or inline usage."}}}},P={render:e=>n(e),args:{minValue:30,maxValue:80,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!0,showInputs:!1,size:"lg",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Large size variant for emphasis or improved touch targets on mobile."}}}},R={render:e=>{const s=document.createElement("div");return s.style.cssText="display: flex; justify-content: center; align-items: center; min-height: 300px; padding: 2rem;",s.appendChild(n(e)),s},args:{minValue:30,maxValue:70,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!0},parameters:{docs:{description:{story:"Vertical orientation for height, elevation, or other naturally vertical measurements. Includes proper aria-orientation attribute."}}}},$={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;",[{variant:"primary",label:"Primary"},{variant:"success",label:"Success"},{variant:"warning",label:"Warning"},{variant:"error",label:"Error"}].forEach(({variant:f,label:x})=>{const l=document.createElement("div"),r=document.createElement("div");r.style.cssText="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem; text-transform: capitalize;",r.textContent=x,l.appendChild(r);const c=n({minValue:30,maxValue:70,min:0,max:100,showValues:!0,variant:f,size:"md"});l.appendChild(c),e.appendChild(l)}),e},parameters:{docs:{description:{story:"All color variants: Primary (default), Success (positive), Warning (caution), and Error (danger)."}}}},N={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;",[{size:"sm",label:"Small"},{size:"md",label:"Medium (Default)"},{size:"lg",label:"Large"}].forEach(({size:f,label:x})=>{const l=document.createElement("div"),r=document.createElement("div");r.style.cssText="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem;",r.textContent=x,l.appendChild(r);const c=n({minValue:25,maxValue:75,min:0,max:100,showValues:!0,showLabels:!0,size:f});l.appendChild(c),e.appendChild(l)}),e},parameters:{docs:{description:{story:"Comparison of all size variants: Small, Medium (default), and Large."}}}},T={render:e=>Ie(()=>n(e)),args:{minValue:25,maxValue:75,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"See how the Range Slider appears across all Aural UI themes. Use the controls to customize the slider and observe theme variations."}}}};var W,H,F;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 25,
    maxValue: 75,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum value',
    maxLabel: 'Maximum value',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  }
}`,...(F=(H=y.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var U,B,G;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 30,
    maxValue: 80,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: false,
    showLabels: false,
    showLimits: false,
    showInputs: true,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum value',
    maxLabel: 'Maximum value',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with number input fields for precise value entry. Includes increment/decrement controls.'
      }
    }
  }
}`,...(G=(B=L.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var O,j,q;V.parameters={...V.parameters,docs:{...(O=V.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 50,
    maxValue: 500,
    min: 0,
    max: 1000,
    step: 10,
    disabled: false,
    showValues: false,
    showLabels: true,
    showLimits: true,
    showInputs: true,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum price',
    maxLabel: 'Maximum price',
    valuePrefix: '$',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Price range filter commonly used in e-commerce applications. Shows currency formatting, input fields, and limit labels.'
      }
    }
  }
}`,...(q=(j=V.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var K,J,Q;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 25,
    maxValue: 45,
    min: 18,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum age',
    maxLabel: 'Maximum age',
    valuePrefix: '',
    valueSuffix: ' years',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Age range selector with minimum age constraint. Useful for filtering content or search results.'
      }
    }
  }
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 9,
    maxValue: 17,
    min: 0,
    max: 24,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Start time',
    maxLabel: 'End time',
    valuePrefix: '',
    valueSuffix: ':00',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Time range selector for scheduling or filtering by time of day. Shows hours in 24-hour format.'
      }
    }
  }
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 18,
    maxValue: 26,
    min: 0,
    max: 40,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'success',
    minLabel: 'Minimum temperature',
    maxLabel: 'Maximum temperature',
    valuePrefix: '',
    valueSuffix: '°C',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Temperature range selector using success variant. Shows unit suffix formatting.'
      }
    }
  }
}`,...(ne=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,se,ie;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 20,
    maxValue: 80,
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '%',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with step increments of 10. Useful for percentage-based selections.'
      }
    }
  }
}`,...(ie=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var te,le,me;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 30,
    maxValue: 70,
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum value',
    maxLabel: 'Maximum value',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state prevents user interaction and reduces visual prominence.'
      }
    }
  }
}`,...(me=(le=z.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var oe,ue,de;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 15,
    maxValue: 85,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: false,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with labels on handles and min/max limit labels for better context.'
      }
    }
  }
}`,...(de=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,pe,ve;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 20,
    maxValue: 60,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'sm',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size variant for compact spaces or inline usage.'
      }
    }
  }
}`,...(ve=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var fe,xe,be;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => createRangeSlider(args),
  args: {
    minValue: 30,
    maxValue: 80,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: true,
    showInputs: false,
    size: 'lg',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size variant for emphasis or improved touch targets on mobile.'
      }
    }
  }
}`,...(be=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var he,ge,we;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; justify-content: center; align-items: center; min-height: 300px; padding: 2rem;';
    wrapper.appendChild(createRangeSlider(args));
    return wrapper;
  },
  args: {
    minValue: 30,
    maxValue: 70,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: false,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical orientation for height, elevation, or other naturally vertical measurements. Includes proper aria-orientation attribute.'
      }
    }
  }
}`,...(we=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var ye,Le,Ve;$.parameters={...$.parameters,docs:{...(ye=$.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';
    const variants: Array<{
      variant: 'primary' | 'success' | 'warning' | 'error';
      label: string;
    }> = [{
      variant: 'primary',
      label: 'Primary'
    }, {
      variant: 'success',
      label: 'Success'
    }, {
      variant: 'warning',
      label: 'Warning'
    }, {
      variant: 'error',
      label: 'Error'
    }];
    variants.forEach(({
      variant,
      label
    }) => {
      const wrapper = document.createElement('div');
      const heading = document.createElement('div');
      heading.style.cssText = 'font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem; text-transform: capitalize;';
      heading.textContent = label;
      wrapper.appendChild(heading);
      const slider = createRangeSlider({
        minValue: 30,
        maxValue: 70,
        min: 0,
        max: 100,
        showValues: true,
        variant,
        size: 'md'
      });
      wrapper.appendChild(slider);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'All color variants: Primary (default), Success (positive), Warning (caution), and Error (danger).'
      }
    }
  }
}`,...(Ve=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var Se,_e,Ce;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; padding: 2rem;';
    const sizes: Array<{
      size: 'sm' | 'md' | 'lg';
      label: string;
    }> = [{
      size: 'sm',
      label: 'Small'
    }, {
      size: 'md',
      label: 'Medium (Default)'
    }, {
      size: 'lg',
      label: 'Large'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const wrapper = document.createElement('div');
      const heading = document.createElement('div');
      heading.style.cssText = 'font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem;';
      heading.textContent = label;
      wrapper.appendChild(heading);
      const slider = createRangeSlider({
        minValue: 25,
        maxValue: 75,
        min: 0,
        max: 100,
        showValues: true,
        showLabels: true,
        size
      });
      wrapper.appendChild(slider);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all size variants: Small, Medium (default), and Large.'
      }
    }
  }
}`,...(Ce=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Me,ze,Ee;T.parameters={...T.parameters,docs:{...(Me=T.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => createRangeSlider(args));
  },
  args: {
    minValue: 25,
    maxValue: 75,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValues: true,
    showLabels: true,
    showLimits: false,
    showInputs: false,
    size: 'md',
    variant: 'primary',
    minLabel: 'Minimum',
    maxLabel: 'Maximum',
    valuePrefix: '',
    valueSuffix: '',
    vertical: false
  },
  parameters: {
    docs: {
      description: {
        story: 'See how the Range Slider appears across all Aural UI themes. Use the controls to customize the slider and observe theme variations.'
      }
    }
  }
}`,...(Ee=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};const $e=["Default","WithInputFields","PriceRange","AgeRange","TimeRange","TemperatureRange","WithSteps","Disabled","WithLabels","Small","Large","Vertical","ColorVariants","SizeComparison","ThemeComparison"];export{S as AgeRange,$ as ColorVariants,y as Default,z as Disabled,P as Large,V as PriceRange,N as SizeComparison,I as Small,C as TemperatureRange,T as ThemeComparison,_ as TimeRange,R as Vertical,L as WithInputFields,E as WithLabels,M as WithSteps,$e as __namedExportsOrder,Re as default};
