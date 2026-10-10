import{c as Pe}from"./createThemeGrid-DWAncU4Q.js";const Ne={title:"Components/Forms/Range Slider",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `.trim()}}},argTypes:{minValue:{control:{type:"number",min:0,max:100,step:1},description:"Current minimum value"},maxValue:{control:{type:"number",min:0,max:100,step:1},description:"Current maximum value"},min:{control:{type:"number"},description:"Minimum possible value"},max:{control:{type:"number"},description:"Maximum possible value"},step:{control:{type:"number",min:1,max:10},description:"Step increment"},disabled:{control:"boolean",description:"Disabled state"},showValues:{control:"boolean",description:"Show current values below slider"},showLabels:{control:"boolean",description:"Show labels on handles"},showLimits:{control:"boolean",description:"Show min/max limit labels"},showInputs:{control:"boolean",description:"Show number input fields"},size:{control:"select",options:["sm","md","lg"],description:"Slider size"},variant:{control:"select",options:["primary","success","warning","error"],description:"Color variant"},minLabel:{control:"text",description:"Label for minimum value"},maxLabel:{control:"text",description:"Label for maximum value"},valuePrefix:{control:"text",description:'Prefix for values (e.g., "$")'},valueSuffix:{control:"text",description:'Suffix for values (e.g., "°C")'},vertical:{control:"boolean",description:"Vertical orientation"}}};let Re=0;const n=e=>{const s=document.createElement("div"),f=e.size&&e.size!=="md"?`aural-range-slider--${e.size}`:"",x=e.variant&&e.variant!=="primary"?`aural-range-slider--${e.variant}`:"",l=e.vertical?"aural-range-slider--vertical":"";if(s.className=`aural-range-slider ${f} ${x} ${l}`.trim(),e.disabled&&s.classList.add("aural-range-slider--disabled"),e.showInputs){const a=`range-slider-${++Re}`,m=document.createElement("div");m.className="aural-range-slider__inputs";const o=document.createElement("div");o.className="aural-range-slider__input-group";const h=document.createElement("label");h.className="aural-range-slider__input-label",h.textContent="Min",h.htmlFor=`${a}-min`,o.appendChild(h);const g=document.createElement("div");g.className="input-number";const u=document.createElement("input");u.type="number",u.id=`${a}-min`,u.className="aural-range-slider__input",u.value=String(e.minValue||25),u.min=String(e.min||0),u.max=String(e.max||100),e.disabled&&(u.disabled=!0),g.appendChild(u);const D=document.createElement("div");D.className="input-number__controls",D.innerHTML=`
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
    `,g.appendChild(D),o.appendChild(g),m.appendChild(o);const w=document.createElement("div");w.className="aural-range-slider__input-group";const y=document.createElement("label");y.className="aural-range-slider__input-label",y.textContent="Max",y.htmlFor=`${a}-max`,w.appendChild(y);const L=document.createElement("div");L.className="input-number";const d=document.createElement("input");d.type="number",d.id=`${a}-max`,d.className="aural-range-slider__input",d.value=String(e.maxValue||75),d.min=String(e.min||0),d.max=String(e.max||100),e.disabled&&(d.disabled=!0),L.appendChild(d);const W=document.createElement("div");W.className="input-number__controls",W.innerHTML=`
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
    `,L.appendChild(W),w.appendChild(L),m.appendChild(w),s.appendChild(m)}const r=document.createElement("div");r.className="aural-range-slider__wrapper";const c=document.createElement("div");c.className="aural-range-slider__track-bg",r.appendChild(c);const p=document.createElement("div");p.className="aural-range-slider__track-fill",r.appendChild(p);const i=document.createElement("div");if(i.className="aural-range-slider__handle aural-range-slider__handle--min",i.tabIndex=e.disabled?-1:0,i.setAttribute("role","slider"),i.setAttribute("aria-label",e.minLabel||"Minimum value"),i.setAttribute("aria-valuemin",String(e.min||0)),i.setAttribute("aria-valuemax",String(e.max||100)),i.setAttribute("aria-valuenow",String(e.minValue||25)),e.vertical&&i.setAttribute("aria-orientation","vertical"),e.showLabels){const a=document.createElement("div");a.className="aural-range-slider__label",a.textContent=`${e.valuePrefix||""}${e.minValue||25}${e.valueSuffix||""}`,i.appendChild(a)}r.appendChild(i);const t=document.createElement("div");if(t.className="aural-range-slider__handle aural-range-slider__handle--max",t.tabIndex=e.disabled?-1:0,t.setAttribute("role","slider"),t.setAttribute("aria-label",e.maxLabel||"Maximum value"),t.setAttribute("aria-valuemin",String(e.min||0)),t.setAttribute("aria-valuemax",String(e.max||100)),t.setAttribute("aria-valuenow",String(e.maxValue||75)),e.vertical&&t.setAttribute("aria-orientation","vertical"),e.showLabels){const a=document.createElement("div");a.className="aural-range-slider__label",a.textContent=`${e.valuePrefix||""}${e.maxValue||75}${e.valueSuffix||""}`,t.appendChild(a)}r.appendChild(t),s.appendChild(r);const v=((e.minValue||25)-(e.min||0))/((e.max||100)-(e.min||0))*100,b=((e.maxValue||75)-(e.min||0))/((e.max||100)-(e.min||0))*100;if(e.vertical?(i.style.bottom=`${v}%`,t.style.bottom=`${b}%`,p.style.bottom=`${v}%`,p.style.height=`${b-v}%`):(i.style.left=`${v}%`,t.style.left=`${b}%`,p.style.left=`${v}%`,p.style.width=`${b-v}%`),e.showValues){const a=document.createElement("div");a.className="aural-range-slider__values";const m=document.createElement("div");m.className="aural-range-slider__value",m.innerHTML=`
      <span class="aural-range-slider__value-label">Min:</span>
      <span class="aural-range-slider__value-number">${e.valuePrefix||""}${e.minValue||25}${e.valueSuffix||""}</span>
    `;const o=document.createElement("div");o.className="aural-range-slider__value",o.innerHTML=`
      <span class="aural-range-slider__value-label">Max:</span>
      <span class="aural-range-slider__value-number">${e.valuePrefix||""}${e.maxValue||75}${e.valueSuffix||""}</span>
    `,a.appendChild(m),a.appendChild(o),s.appendChild(a)}if(e.showLimits){const a=document.createElement("div");a.className="aural-range-slider__limits",a.innerHTML=`
      <span>${e.valuePrefix||""}${e.min||0}${e.valueSuffix||""}</span>
      <span>${e.valuePrefix||""}${e.max||100}${e.valueSuffix||""}</span>
    `,s.appendChild(a)}return s},S={render:e=>n(e),args:{minValue:25,maxValue:75,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum value",maxLabel:"Maximum value",valuePrefix:"",valueSuffix:"",vertical:!1}},V={render:e=>n(e),args:{minValue:30,maxValue:80,min:0,max:100,step:1,disabled:!1,showValues:!1,showLabels:!1,showLimits:!1,showInputs:!0,size:"md",variant:"primary",minLabel:"Minimum value",maxLabel:"Maximum value",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Range slider with number input fields for precise value entry. Includes increment/decrement controls."}}}},_={render:e=>n(e),args:{minValue:50,maxValue:500,min:0,max:1e3,step:10,disabled:!1,showValues:!1,showLabels:!0,showLimits:!0,showInputs:!0,size:"md",variant:"primary",minLabel:"Minimum price",maxLabel:"Maximum price",valuePrefix:"$",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Price range filter commonly used in e-commerce applications. Shows currency formatting, input fields, and limit labels."}}}},C={render:e=>n(e),args:{minValue:25,maxValue:45,min:18,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum age",maxLabel:"Maximum age",valuePrefix:"",valueSuffix:" years",vertical:!1},parameters:{docs:{description:{story:"Age range selector with minimum age constraint. Useful for filtering content or search results."}}}},M={render:e=>n(e),args:{minValue:9,maxValue:17,min:0,max:24,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!0,showInputs:!1,size:"md",variant:"primary",minLabel:"Start time",maxLabel:"End time",valuePrefix:"",valueSuffix:":00",vertical:!1},parameters:{docs:{description:{story:"Time range selector for scheduling or filtering by time of day. Shows hours in 24-hour format."}}}},z={render:e=>n(e),args:{minValue:18,maxValue:26,min:0,max:40,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!1,showInputs:!1,size:"md",variant:"success",minLabel:"Minimum temperature",maxLabel:"Maximum temperature",valuePrefix:"",valueSuffix:"°C",vertical:!1},parameters:{docs:{description:{story:"Temperature range selector using success variant. Shows unit suffix formatting."}}}},E={render:e=>n(e),args:{minValue:20,maxValue:80,min:0,max:100,step:10,disabled:!1,showValues:!0,showLabels:!0,showLimits:!0,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"%",vertical:!1},parameters:{docs:{description:{story:"Range slider with step increments of 10. Useful for percentage-based selections."}}}},I={render:e=>n(e),args:{minValue:30,maxValue:70,min:0,max:100,step:1,disabled:!0,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum value",maxLabel:"Maximum value",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Disabled state prevents user interaction and reduces visual prominence."}}}},P={render:e=>n(e),args:{minValue:15,maxValue:85,min:0,max:100,step:1,disabled:!1,showValues:!1,showLabels:!0,showLimits:!0,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Range slider with labels on handles and min/max limit labels for better context."}}}},R={render:e=>n(e),args:{minValue:20,maxValue:60,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"sm",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Small size variant for compact spaces or inline usage."}}}},$={render:e=>n(e),args:{minValue:30,maxValue:80,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!0,showInputs:!1,size:"lg",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"Large size variant for emphasis or improved touch targets on mobile."}}}},N={render:e=>{const s=document.createElement("div");return s.style.cssText="display: flex; justify-content: center; align-items: center; min-height: 300px; padding: 2rem;",s.appendChild(n(e)),s},args:{minValue:30,maxValue:70,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!1,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!0},parameters:{docs:{description:{story:"Vertical orientation for height, elevation, or other naturally vertical measurements. Includes proper aria-orientation attribute."}}}},T={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;",[{variant:"primary",label:"Primary"},{variant:"success",label:"Success"},{variant:"warning",label:"Warning"},{variant:"error",label:"Error"}].forEach(({variant:f,label:x})=>{const l=document.createElement("div"),r=document.createElement("div");r.style.cssText="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem; text-transform: capitalize;",r.textContent=x,l.appendChild(r);const c=n({minValue:30,maxValue:70,min:0,max:100,showValues:!0,variant:f,size:"md"});l.appendChild(c),e.appendChild(l)}),e},parameters:{docs:{description:{story:"All color variants: Primary (default), Success (positive), Warning (caution), and Error (danger)."}}}},A={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;",[{size:"sm",label:"Small"},{size:"md",label:"Medium (Default)"},{size:"lg",label:"Large"}].forEach(({size:f,label:x})=>{const l=document.createElement("div"),r=document.createElement("div");r.style.cssText="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-bottom: 0.5rem;",r.textContent=x,l.appendChild(r);const c=n({minValue:25,maxValue:75,min:0,max:100,showValues:!0,showLabels:!0,size:f});l.appendChild(c),e.appendChild(l)}),e},parameters:{docs:{description:{story:"Comparison of all size variants: Small, Medium (default), and Large."}}}},k={render:e=>Pe(()=>n(e)),args:{minValue:25,maxValue:75,min:0,max:100,step:1,disabled:!1,showValues:!0,showLabels:!0,showLimits:!1,showInputs:!1,size:"md",variant:"primary",minLabel:"Minimum",maxLabel:"Maximum",valuePrefix:"",valueSuffix:"",vertical:!1},parameters:{docs:{description:{story:"See how the Range Slider appears across all Aural UI themes. Use the controls to customize the slider and observe theme variations."}}}};var F,H,U;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(H=S.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var B,G,O;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(G=V.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var j,q,K;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(K=(q=_.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var J,Q,X;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,re;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,te;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(te=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var le,me,oe;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:oe.source}}};var ue,de,ce;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ce=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ve,fe;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,be,he;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(be=$.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ge,we,ye;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(we=N.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Le,Se,Ve;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};var _e,Ce,Me;A.parameters={...A.parameters,docs:{...(_e=A.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Me=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Me.source}}};var ze,Ee,Ie;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ie=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};const Te=["Default","WithInputFields","PriceRange","AgeRange","TimeRange","TemperatureRange","WithSteps","Disabled","WithLabels","Small","Large","Vertical","ColorVariants","SizeComparison","ThemeComparison"];export{C as AgeRange,T as ColorVariants,S as Default,I as Disabled,$ as Large,_ as PriceRange,A as SizeComparison,R as Small,z as TemperatureRange,k as ThemeComparison,M as TimeRange,N as Vertical,V as WithInputFields,P as WithLabels,E as WithSteps,Te as __namedExportsOrder,Ne as default};
