import{c as de}from"./createThemeGrid-DWAncU4Q.js";const pe={title:"Components/Forms/Rating",tags:["autodocs"],parameters:{docs:{description:{component:`
# Rating Component

A star rating component for collecting feedback and displaying ratings. Supports interactive rating input, read-only display, half-star ratings, and custom icons.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="aural-rating" data-rating="4">
  <div class="aural-rating__stars">
    <button class="aural-rating__star aural-rating__star--filled" data-value="1" aria-label="Rate 1 star" tabindex="0">
      <svg class="aural-rating__star-icon" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    </button>
    <!-- Repeat for stars 2-5 -->
  </div>
  <span class="aural-rating__value">4.0</span>
</div>
\`\`\`

**React:**
\`\`\`jsx
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

<div className="aural-rating" data-rating={rating}>
  <div className="aural-rating__stars">
    {[...Array(5)].map((_, i) => (
      <button
        key={i}
        className={\`aural-rating__star \${i < (hover || rating) ? 'aural-rating__star--filled' : 'aural-rating__star--empty'}\`}
        data-value={i + 1}
        aria-label={\`Rate \${i + 1} star\${i === 0 ? '' : 's'}\`}
        tabindex="0"
        onMouseEnter={() => setHover(i + 1)}
        onMouseLeave={() => setHover(0)}
        onClick={() => setRating(i + 1)}
      >
        <svg className="aural-rating__star-icon" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </button>
    ))}
  </div>
  <span className="aural-rating__value">{rating.toFixed(1)}</span>
</div>
\`\`\`

**Vue:**
\`\`\`vue
<script setup>
const rating = ref(0);
const hover = ref(0);
<\/script>

<template>
  <div class="aural-rating" :data-rating="rating">
    <div class="aural-rating__stars">
      <button
        v-for="i in 5"
        :key="i"
        :class="['aural-rating__star', i <= (hover || rating) ? 'aural-rating__star--filled' : 'aural-rating__star--empty']"
        :data-value="i"
        :aria-label="\`Rate \${i} star\${i === 1 ? '' : 's'}\`"
        tabindex="0"
        @mouseenter="hover = i"
        @mouseleave="hover = 0"
        @click="rating = i"
      >
        <svg class="aural-rating__star-icon" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </button>
    </div>
    <span class="aural-rating__value">{{ rating.toFixed(1) }}</span>
  </div>
</template>
\`\`\`
        `.trim()}}},argTypes:{value:{control:{type:"number",min:0,max:5,step:.5},description:"Current rating value"},max:{control:{type:"number",min:3,max:10,step:1},description:"Maximum rating value"},readonly:{control:"boolean",description:"Read-only display mode"},disabled:{control:"boolean",description:"Disabled state"},allowHalf:{control:"boolean",description:"Allow half-star ratings"},size:{control:"select",options:["sm","md","lg"],description:"Rating size"},showValue:{control:"boolean",description:"Show numeric value"},showCount:{control:"boolean",description:"Show review count"},count:{control:{type:"number",min:0},description:"Number of reviews"},icon:{control:"select",options:["star","heart"],description:"Icon type"},color:{control:"select",options:["default","primary","success","error"],description:"Color variant"}}},L="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",A="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z";function p(e){const t=document.createElement("div"),n=["aural-rating"];e.readonly&&n.push("aural-rating--readonly"),e.disabled&&n.push("aural-rating--disabled"),e.size&&e.size!=="md"&&n.push(`aural-rating--${e.size}`),e.color&&e.color!=="default"&&n.push(`aural-rating--${e.color}`),e.icon==="heart"&&n.push("aural-rating--heart"),t.className=n.join(" "),t.setAttribute("data-rating",String(e.value||0));const o=document.createElement("div");o.className="aural-rating__stars";const r=e.max||5,l=e.value||0,s=e.icon==="heart",m=s?"heart":"star";for(let a=1;a<=r;a++){const i=e.readonly?document.createElement("span"):document.createElement("button");let c="aural-rating__star";e.allowHalf&&a-.5===l?c+=" aural-rating__star--half":a<=l?c+=" aural-rating__star--filled":c+=" aural-rating__star--empty",i.className=c,i.setAttribute("data-value",String(a)),e.readonly||(i.setAttribute("aria-label",`Rate ${a} ${m}${a===1?"":"s"}`),i.setAttribute("tabindex","0"),e.disabled&&(i.disabled=!0));const d=document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.setAttribute("class","aural-rating__star-icon"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","currentColor"),e.allowHalf&&a-.5===l){const u=document.createElementNS("http://www.w3.org/2000/svg","defs"),g=document.createElementNS("http://www.w3.org/2000/svg","linearGradient");g.setAttribute("id",`half-fill-${a}`);const y=document.createElementNS("http://www.w3.org/2000/svg","stop");y.setAttribute("offset","50%"),y.setAttribute("stop-color","var(--color-warning)");const V=document.createElementNS("http://www.w3.org/2000/svg","stop");if(V.setAttribute("offset","50%"),V.setAttribute("stop-color","var(--color-border-medium)"),g.appendChild(y),g.appendChild(V),u.appendChild(g),d.appendChild(u),s){const v=document.createElementNS("http://www.w3.org/2000/svg","path");v.setAttribute("d",A),v.setAttribute("fill",`url(#half-fill-${a})`),d.appendChild(v)}else{const v=document.createElementNS("http://www.w3.org/2000/svg","polygon");v.setAttribute("points",L),v.setAttribute("fill",`url(#half-fill-${a})`),d.appendChild(v)}}else if(s){const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d",A),d.appendChild(u)}else{const u=document.createElementNS("http://www.w3.org/2000/svg","polygon");u.setAttribute("points",L),d.appendChild(u)}i.appendChild(d),o.appendChild(i)}if(t.appendChild(o),e.showValue){const a=document.createElement("span");a.className="aural-rating__value",a.textContent=(l||0).toFixed(1),t.appendChild(a)}if(e.showCount&&e.count!==void 0){const a=document.createElement("span");a.className="aural-rating__count",a.textContent=`(${e.count.toLocaleString()})`,t.appendChild(a)}if(!e.readonly&&!e.disabled){let a=l;const i=o.querySelectorAll(".aural-rating__star");i.forEach((d,u)=>{const g=u+1;d.addEventListener("mouseenter",()=>{c(g)}),d.addEventListener("click",()=>{if(a=g,t.setAttribute("data-rating",String(a)),e.showValue){const y=t.querySelector(".aural-rating__value");y&&(y.textContent=a.toFixed(1))}})}),t.addEventListener("mouseleave",()=>{c(a)});const c=d=>{i.forEach((u,g)=>{u.classList.remove("aural-rating__star--filled","aural-rating__star--empty"),g<d?u.classList.add("aural-rating__star--filled"):u.classList.add("aural-rating__star--empty")})}}return t}const h={render:e=>p(e),args:{value:0,max:5,readonly:!1,disabled:!1,allowHalf:!1,size:"md",showValue:!0,showCount:!1,count:0,icon:"star",color:"default"}},b={render:e=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="var(--space-4)",t.style.padding="var(--space-4)",[3.5,4.5].forEach(o=>{t.appendChild(p({...e,value:o,readonly:!0,allowHalf:!0,showValue:!0}))}),t},args:{max:5,icon:"star",size:"md"}},f={render:e=>p(e),args:{value:4.5,max:5,readonly:!0,allowHalf:!0,size:"md",showValue:!0,showCount:!0,count:1234,icon:"star",color:"default"}},x={render:e=>p(e),args:{value:3,max:5,readonly:!1,disabled:!0,size:"md",showValue:!0,icon:"star",color:"default"}},w={render:e=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="var(--space-4)",t.style.padding="var(--space-4)";const n=p({...e,value:4,icon:"star",readonly:!0,showValue:!0}),o=document.createElement("div");o.style.fontSize="var(--text-sm)",o.style.color="var(--color-text-secondary)",o.textContent="Stars";const r=document.createElement("div");r.appendChild(o),r.appendChild(n),t.appendChild(r);const l=p({...e,value:5,icon:"heart",readonly:!0,showValue:!1}),s=document.createElement("div");s.style.fontSize="var(--text-sm)",s.style.color="var(--color-text-secondary)",s.textContent="Favorite";const m=document.createElement("div");return m.appendChild(s),m.appendChild(l),t.appendChild(m),t},args:{max:5,size:"md"}},C={render:e=>p(e),args:{value:4.3,max:5,readonly:!0,allowHalf:!0,size:"md",showValue:!0,showCount:!0,count:12845,icon:"star",color:"default"}},E={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",e.style.padding="var(--space-4)",[{size:"sm",label:"Small",value:3,count:45},{size:"md",label:"Default",value:4,count:256},{size:"lg",label:"Large",value:5,count:1845}].forEach(n=>{const o=document.createElement("div"),r=document.createElement("div");r.textContent=n.label,r.style.fontSize="var(--text-sm)",r.style.color="var(--color-text-secondary)",r.style.marginBottom="var(--space-2)",o.appendChild(r);const l=p({value:n.value,max:5,readonly:!0,size:n.size,showValue:!0,showCount:!0,count:n.count,icon:"star",color:"default"});o.appendChild(l),e.appendChild(o)}),e}},S={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-4)",e.style.padding="var(--space-4)",[{color:"default",label:"Default (Warning)",value:4},{color:"primary",label:"Primary",value:4},{color:"success",label:"Success",value:5},{color:"error",label:"Error",value:2}].forEach(n=>{const o=document.createElement("div"),r=document.createElement("div");r.textContent=n.label,r.style.fontSize="var(--text-sm)",r.style.color="var(--color-text-secondary)",r.style.marginBottom="var(--space-2)",o.appendChild(r);const l=p({value:n.value,max:5,readonly:!0,size:"md",showValue:!0,icon:"star",color:n.color});o.appendChild(l),e.appendChild(o)}),e}},_={render:()=>{const e=document.createElement("div");e.style.maxWidth="500px",e.style.padding="var(--space-6)",e.style.background="var(--color-bg-secondary)",e.style.borderRadius="var(--radius-md)",e.style.border="1px solid var(--color-border-subtle)";const t=document.createElement("h3");t.textContent="Write a Review",t.style.margin="0 0 var(--space-4) 0",t.style.fontSize="var(--text-lg)",t.style.fontWeight="var(--font-semibold)",t.style.color="var(--color-text-primary)",e.appendChild(t);const n=document.createElement("label");n.textContent="Your Rating",n.style.display="block",n.style.marginBottom="var(--space-2)",n.style.fontSize="var(--text-sm)",n.style.fontWeight="var(--font-medium)",n.style.color="var(--color-text-secondary)",e.appendChild(n);const o=p({value:0,max:5,readonly:!1,size:"lg",showValue:!0,icon:"star",color:"default"});e.appendChild(o);const r=document.createElement("textarea");r.className="input",r.placeholder="Tell us about your experience...",r.style.marginTop="var(--space-4)",r.style.width="100%",r.style.minHeight="100px",r.style.padding="var(--space-3)",r.style.fontSize="var(--text-base)",r.style.borderRadius="var(--radius-md)",r.style.border="1px solid var(--color-border-medium)",r.style.background="var(--color-bg-primary)",r.style.color="var(--color-text-primary)",e.appendChild(r);const l=document.createElement("button");return l.className="btn btn-primary",l.textContent="Submit Review",l.style.marginTop="var(--space-4)",e.appendChild(l),e}},z={render:()=>{const e=document.createElement("div");e.style.maxWidth="600px",e.style.padding="var(--space-6)",e.style.background="var(--color-bg-primary)",e.style.borderRadius="var(--radius-md)";const t=document.createElement("div");t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="center",t.style.marginBottom="var(--space-4)";const n=document.createElement("h3");n.textContent="Customer Reviews",n.style.margin="0",n.style.fontSize="var(--text-lg)",n.style.fontWeight="var(--font-semibold)",n.style.color="var(--color-text-primary)",t.appendChild(n);const o=p({value:4.3,max:5,readonly:!0,allowHalf:!0,size:"md",showValue:!0,showCount:!0,count:1234,icon:"star",color:"default"});return t.appendChild(o),e.appendChild(t),[{stars:5,count:850,percentage:69},{stars:4,count:234,percentage:19},{stars:3,count:98,percentage:8},{stars:2,count:37,percentage:3},{stars:1,count:15,percentage:1}].forEach(l=>{const s=document.createElement("div");s.style.display="flex",s.style.alignItems="center",s.style.gap="var(--space-3)",s.style.marginBottom="var(--space-2)";const m=document.createElement("span");m.textContent=`${l.stars} star`,m.style.fontSize="var(--text-sm)",m.style.color="var(--color-text-secondary)",m.style.width="50px",s.appendChild(m);const a=document.createElement("div");a.style.flex="1",a.style.height="8px",a.style.background="var(--color-bg-tertiary)",a.style.borderRadius="var(--radius-full)",a.style.overflow="hidden";const i=document.createElement("div");i.style.height="100%",i.style.width=`${l.percentage}%`,i.style.background="var(--color-warning)",a.appendChild(i),s.appendChild(a);const c=document.createElement("span");c.textContent=String(l.count),c.style.fontSize="var(--text-sm)",c.style.color="var(--color-text-secondary)",c.style.width="50px",c.style.textAlign="right",s.appendChild(c),e.appendChild(s)}),e}},R={render:e=>de(()=>p(e)),args:{value:4,max:5,readonly:!0,allowHalf:!1,size:"md",showValue:!0,showCount:!1,icon:"star",color:"default"},argTypes:{value:{control:{type:"number",min:0,max:5,step:.5},description:"Current rating value"},max:{control:{type:"number",min:3,max:10,step:1},description:"Maximum rating value"},readonly:{control:"boolean",description:"Read-only display mode"},allowHalf:{control:"boolean",description:"Allow half-star ratings"},size:{control:"select",options:["sm","md","lg"],description:"Rating size"},showValue:{control:"boolean",description:"Show numeric value"},showCount:{control:"boolean",description:"Show review count"},icon:{control:"select",options:["star","heart"],description:"Icon type"},color:{control:"select",options:["default","primary","success","error"],description:"Color variant"}}};var H,k,N;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => createRating(args),
  args: {
    value: 0,
    max: 5,
    readonly: false,
    disabled: false,
    allowHalf: false,
    size: 'md',
    showValue: true,
    showCount: false,
    count: 0,
    icon: 'star',
    color: 'default'
  }
}`,...(N=(k=h.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var B,D,T;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.padding = 'var(--space-4)';
    const ratings = [3.5, 4.5];
    ratings.forEach(rating => {
      container.appendChild(createRating({
        ...args,
        value: rating,
        readonly: true,
        allowHalf: true,
        showValue: true
      }));
    });
    return container;
  },
  args: {
    max: 5,
    icon: 'star',
    size: 'md'
  }
}`,...(T=(D=b.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var $,F,W;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => createRating(args),
  args: {
    value: 4.5,
    max: 5,
    readonly: true,
    allowHalf: true,
    size: 'md',
    showValue: true,
    showCount: true,
    count: 1234,
    icon: 'star',
    color: 'default'
  }
}`,...(W=(F=f.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var I,M,P;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => createRating(args),
  args: {
    value: 3,
    max: 5,
    readonly: false,
    disabled: true,
    size: 'md',
    showValue: true,
    icon: 'star',
    color: 'default'
  }
}`,...(P=(M=x.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var j,O,G;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.padding = 'var(--space-4)';

    // Star rating
    const starRating = createRating({
      ...args,
      value: 4,
      icon: 'star',
      readonly: true,
      showValue: true
    });
    const starLabel = document.createElement('div');
    starLabel.style.fontSize = 'var(--text-sm)';
    starLabel.style.color = 'var(--color-text-secondary)';
    starLabel.textContent = 'Stars';
    const starContainer = document.createElement('div');
    starContainer.appendChild(starLabel);
    starContainer.appendChild(starRating);
    container.appendChild(starContainer);

    // Heart rating
    const heartRating = createRating({
      ...args,
      value: 5,
      icon: 'heart',
      readonly: true,
      showValue: false
    });
    const heartLabel = document.createElement('div');
    heartLabel.style.fontSize = 'var(--text-sm)';
    heartLabel.style.color = 'var(--color-text-secondary)';
    heartLabel.textContent = 'Favorite';
    const heartContainer = document.createElement('div');
    heartContainer.appendChild(heartLabel);
    heartContainer.appendChild(heartRating);
    container.appendChild(heartContainer);
    return container;
  },
  args: {
    max: 5,
    size: 'md'
  }
}`,...(G=(O=w.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var q,Y,J;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => createRating(args),
  args: {
    value: 4.3,
    max: 5,
    readonly: true,
    allowHalf: true,
    size: 'md',
    showValue: true,
    showCount: true,
    count: 12845,
    icon: 'star',
    color: 'default'
  }
}`,...(J=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,U;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.padding = 'var(--space-4)';
    const sizes = [{
      size: 'sm',
      label: 'Small',
      value: 3,
      count: 45
    }, {
      size: 'md',
      label: 'Default',
      value: 4,
      count: 256
    }, {
      size: 'lg',
      label: 'Large',
      value: 5,
      count: 1845
    }];
    sizes.forEach(item => {
      const wrapper = document.createElement('div');
      const label = document.createElement('div');
      label.textContent = item.label;
      label.style.fontSize = 'var(--text-sm)';
      label.style.color = 'var(--color-text-secondary)';
      label.style.marginBottom = 'var(--space-2)';
      wrapper.appendChild(label);
      const rating = createRating({
        value: item.value,
        max: 5,
        readonly: true,
        size: item.size,
        showValue: true,
        showCount: true,
        count: item.count,
        icon: 'star',
        color: 'default'
      });
      wrapper.appendChild(rating);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(U=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.padding = 'var(--space-4)';
    const variants = [{
      color: 'default',
      label: 'Default (Warning)',
      value: 4
    }, {
      color: 'primary',
      label: 'Primary',
      value: 4
    }, {
      color: 'success',
      label: 'Success',
      value: 5
    }, {
      color: 'error',
      label: 'Error',
      value: 2
    }];
    variants.forEach(variant => {
      const wrapper = document.createElement('div');
      const label = document.createElement('div');
      label.textContent = variant.label;
      label.style.fontSize = 'var(--text-sm)';
      label.style.color = 'var(--color-text-secondary)';
      label.style.marginBottom = 'var(--space-2)';
      wrapper.appendChild(label);
      const rating = createRating({
        value: variant.value,
        max: 5,
        readonly: true,
        size: 'md',
        showValue: true,
        icon: 'star',
        color: variant.color
      });
      wrapper.appendChild(rating);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    container.style.padding = 'var(--space-6)';
    container.style.background = 'var(--color-bg-secondary)';
    container.style.borderRadius = 'var(--radius-md)';
    container.style.border = '1px solid var(--color-border-subtle)';
    const title = document.createElement('h3');
    title.textContent = 'Write a Review';
    title.style.margin = '0 0 var(--space-4) 0';
    title.style.fontSize = 'var(--text-lg)';
    title.style.fontWeight = 'var(--font-semibold)';
    title.style.color = 'var(--color-text-primary)';
    container.appendChild(title);
    const label = document.createElement('label');
    label.textContent = 'Your Rating';
    label.style.display = 'block';
    label.style.marginBottom = 'var(--space-2)';
    label.style.fontSize = 'var(--text-sm)';
    label.style.fontWeight = 'var(--font-medium)';
    label.style.color = 'var(--color-text-secondary)';
    container.appendChild(label);
    const rating = createRating({
      value: 0,
      max: 5,
      readonly: false,
      size: 'lg',
      showValue: true,
      icon: 'star',
      color: 'default'
    });
    container.appendChild(rating);
    const textarea = document.createElement('textarea');
    textarea.className = 'input';
    textarea.placeholder = 'Tell us about your experience...';
    textarea.style.marginTop = 'var(--space-4)';
    textarea.style.width = '100%';
    textarea.style.minHeight = '100px';
    textarea.style.padding = 'var(--space-3)';
    textarea.style.fontSize = 'var(--text-base)';
    textarea.style.borderRadius = 'var(--radius-md)';
    textarea.style.border = '1px solid var(--color-border-medium)';
    textarea.style.background = 'var(--color-bg-primary)';
    textarea.style.color = 'var(--color-text-primary)';
    container.appendChild(textarea);
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Submit Review';
    button.style.marginTop = 'var(--space-4)';
    container.appendChild(button);
    return container;
  }
}`,...(ae=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,oe,le;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.padding = 'var(--space-6)';
    container.style.background = 'var(--color-bg-primary)';
    container.style.borderRadius = 'var(--radius-md)';
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = 'var(--space-4)';
    const title = document.createElement('h3');
    title.textContent = 'Customer Reviews';
    title.style.margin = '0';
    title.style.fontSize = 'var(--text-lg)';
    title.style.fontWeight = 'var(--font-semibold)';
    title.style.color = 'var(--color-text-primary)';
    header.appendChild(title);
    const overallRating = createRating({
      value: 4.3,
      max: 5,
      readonly: true,
      allowHalf: true,
      size: 'md',
      showValue: true,
      showCount: true,
      count: 1234,
      icon: 'star',
      color: 'default'
    });
    header.appendChild(overallRating);
    container.appendChild(header);

    // Rating breakdown
    const breakdown = [{
      stars: 5,
      count: 850,
      percentage: 69
    }, {
      stars: 4,
      count: 234,
      percentage: 19
    }, {
      stars: 3,
      count: 98,
      percentage: 8
    }, {
      stars: 2,
      count: 37,
      percentage: 3
    }, {
      stars: 1,
      count: 15,
      percentage: 1
    }];
    breakdown.forEach(item => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--space-3)';
      row.style.marginBottom = 'var(--space-2)';
      const starLabel = document.createElement('span');
      starLabel.textContent = \`\${item.stars} star\`;
      starLabel.style.fontSize = 'var(--text-sm)';
      starLabel.style.color = 'var(--color-text-secondary)';
      starLabel.style.width = '50px';
      row.appendChild(starLabel);
      const progressBar = document.createElement('div');
      progressBar.style.flex = '1';
      progressBar.style.height = '8px';
      progressBar.style.background = 'var(--color-bg-tertiary)';
      progressBar.style.borderRadius = 'var(--radius-full)';
      progressBar.style.overflow = 'hidden';
      const progressFill = document.createElement('div');
      progressFill.style.height = '100%';
      progressFill.style.width = \`\${item.percentage}%\`;
      progressFill.style.background = 'var(--color-warning)';
      progressBar.appendChild(progressFill);
      row.appendChild(progressBar);
      const count = document.createElement('span');
      count.textContent = String(item.count);
      count.style.fontSize = 'var(--text-sm)';
      count.style.color = 'var(--color-text-secondary)';
      count.style.width = '50px';
      count.style.textAlign = 'right';
      row.appendChild(count);
      container.appendChild(row);
    });
    return container;
  }
}`,...(le=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ie,ce;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => createRating(args));
  },
  args: {
    value: 4,
    max: 5,
    readonly: true,
    allowHalf: false,
    size: 'md',
    showValue: true,
    showCount: false,
    icon: 'star',
    color: 'default'
  },
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 0.5
      },
      description: 'Current rating value'
    },
    max: {
      control: {
        type: 'number',
        min: 3,
        max: 10,
        step: 1
      },
      description: 'Maximum rating value'
    },
    readonly: {
      control: 'boolean',
      description: 'Read-only display mode'
    },
    allowHalf: {
      control: 'boolean',
      description: 'Allow half-star ratings'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Rating size'
    },
    showValue: {
      control: 'boolean',
      description: 'Show numeric value'
    },
    showCount: {
      control: 'boolean',
      description: 'Show review count'
    },
    icon: {
      control: 'select',
      options: ['star', 'heart'],
      description: 'Icon type'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'error'],
      description: 'Color variant'
    }
  }
}`,...(ce=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const me=["Default","HalfStars","ReadOnly","Disabled","CustomIcon","WithCount","Sizes","ColorVariants","ReviewForm","ProductRating","ThemeComparison"];export{S as ColorVariants,w as CustomIcon,h as Default,x as Disabled,b as HalfStars,z as ProductRating,f as ReadOnly,_ as ReviewForm,E as Sizes,R as ThemeComparison,C as WithCount,me as __namedExportsOrder,pe as default};
