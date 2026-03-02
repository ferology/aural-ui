const ee={title:"Components/Progress",tags:["autodocs"],parameters:{docs:{description:{component:"Visual indicators for ongoing operations, loading states, and task completion showing progress percentage or indeterminate activity."}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0-100)"},variant:{control:"select",options:["default","success","warning","error","info"],description:"Progress bar semantic color"},size:{control:"select",options:["sm","default","lg","xl"],description:"Progress bar size"},showLabel:{control:"boolean",description:"Show percentage label inside the bar (recommended for xl size)"},indeterminate:{control:"boolean",description:"Indeterminate progress (animated when duration is unknown)"},ariaLabel:{control:"text",description:"Accessibility label for the progress bar"}}},b={render:e=>{const o=document.createElement("div");o.style.padding="2rem",o.style.maxWidth="600px";const t=document.createElement("div"),n=["progress"];e.size&&e.size!=="default"&&n.push(`progress-${e.size}`),e.variant&&e.variant!=="default"&&n.push(`progress-${e.variant}`),e.indeterminate&&n.push("progress-indeterminate"),t.className=n.join(" "),e.indeterminate||(t.setAttribute("role","progressbar"),t.setAttribute("aria-label",e.ariaLabel||"Progress"),t.setAttribute("aria-valuenow",e.value.toString()),t.setAttribute("aria-valuemin","0"),t.setAttribute("aria-valuemax","100"));const r=document.createElement("div");return r.className="progress-bar",e.indeterminate||(r.style.width=`${e.value}%`),e.showLabel&&!e.indeterminate&&(r.textContent=`${e.value}%`),t.appendChild(r),o.appendChild(t),o},args:{value:65,variant:"default",size:"default",showLabel:!1,indeterminate:!1,ariaLabel:"Progress"}},y={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("div");o.style.marginBottom="var(--space-2)",o.style.display="flex",o.style.justifyContent="space-between";const t=document.createElement("span");t.style.fontSize="var(--text-sm)",t.style.color="var(--color-text-secondary)",t.textContent="Uploading files...";const n=document.createElement("span");n.style.fontSize="var(--text-sm)",n.style.fontWeight="var(--font-semibold)",n.style.color="var(--color-text-primary)",n.textContent="65%",o.appendChild(t),o.appendChild(n),e.appendChild(o);const r=document.createElement("div");r.className="progress",r.setAttribute("role","progressbar"),r.setAttribute("aria-label","File upload progress"),r.setAttribute("aria-valuenow","65"),r.setAttribute("aria-valuemin","0"),r.setAttribute("aria-valuemax","100");const a=document.createElement("div");return a.className="progress-bar",a.style.width="65%",r.appendChild(a),e.appendChild(r),e}},h={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)";const o=document.createElement("div"),t=document.createElement("div");t.style.marginBottom="var(--space-2)",t.style.fontSize="var(--text-sm)",t.style.color="var(--color-text-secondary)",t.textContent="Processing data...",o.appendChild(t);const n=document.createElement("div");n.className="progress progress-indeterminate";const r=document.createElement("div");r.className="progress-bar",n.appendChild(r),o.appendChild(n),e.appendChild(o);const a=document.createElement("div"),i=document.createElement("div");i.style.marginBottom="var(--space-2)",i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-secondary)",i.textContent="Connecting to server...",a.appendChild(i);const s=document.createElement("div");s.className="progress progress-indeterminate progress-info";const l=document.createElement("div");return l.className="progress-bar",s.appendChild(l),a.appendChild(s),e.appendChild(a),e}},x={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="600px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{size:"progress-sm",label:"Small - Inline progress",value:60},{size:"progress",label:"Default - Standard progress",value:60},{size:"progress-lg",label:"Large - Prominent progress",value:60},{size:"progress-xl",label:"Extra Large - With label inside",value:60,showLabel:!0}].forEach(({size:t,label:n,value:r,showLabel:a})=>{const i=document.createElement("div"),s=document.createElement("div");s.style.marginBottom="var(--space-2)",s.style.fontSize="var(--text-sm)",s.style.color="var(--color-text-secondary)",s.textContent=n,i.appendChild(s);const l=document.createElement("div");l.className=t;const c=document.createElement("div");c.className="progress-bar",c.style.width=`${r}%`,a&&(c.textContent=`${r}%`),l.appendChild(c),i.appendChild(l),e.appendChild(i)}),e}},f={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="600px",e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",[{variant:"",label:"Default Progress",value:45,ariaLabel:"Default progress"},{variant:"progress-success",label:"Installation Complete",value:100,ariaLabel:"Installation complete"},{variant:"progress-warning",label:"Disk Space Warning",value:85,ariaLabel:"Disk space usage"},{variant:"progress-error",label:"Upload Failed",value:30,ariaLabel:"Upload failed at 30%"},{variant:"progress-info",label:"Download in Progress",value:70,ariaLabel:"Download progress"}].forEach(({variant:t,label:n,value:r,ariaLabel:a})=>{const i=document.createElement("div"),s=document.createElement("div");s.style.marginBottom="var(--space-2)",s.style.fontSize="var(--text-sm)",s.style.color="var(--color-text-secondary)",s.textContent=n,i.appendChild(s);const l=document.createElement("div");l.className=t?`progress ${t}`:"progress",l.setAttribute("role","progressbar"),l.setAttribute("aria-label",a),l.setAttribute("aria-valuenow",r.toString()),l.setAttribute("aria-valuemin","0"),l.setAttribute("aria-valuemax","100");const c=document.createElement("div");c.className="progress-bar",c.style.width=`${r}%`,l.appendChild(c),i.appendChild(l),e.appendChild(i)}),e}},C={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("div");o.style.background="var(--color-bg-primary)",o.style.padding="var(--space-4)",o.style.borderRadius="var(--radius-md)",o.style.border="1px solid var(--color-border-medium)";const t=document.createElement("div");t.style.display="flex",t.style.alignItems="center",t.style.gap="var(--space-3)",t.style.marginBottom="var(--space-3)";const n=document.createElement("div");n.style.width="40px",n.style.height="40px",n.style.background="var(--color-primary-subtle)",n.style.borderRadius="var(--radius-md)",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.flexShrink="0",n.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';const r=document.createElement("div");r.style.flex="1",r.style.minWidth="0";const a=document.createElement("div");a.style.fontWeight="var(--font-semibold)",a.style.color="var(--color-text-primary)",a.style.marginBottom="var(--space-1)",a.textContent="annual-report-2024.pdf";const i=document.createElement("div");i.style.fontSize="var(--text-sm)",i.style.color="var(--color-text-tertiary)",i.textContent="2.4 MB of 3.2 MB • 45 seconds remaining",r.appendChild(a),r.appendChild(i);const s=document.createElement("button");s.className="btn btn-ghost btn-sm",s.style.flexShrink="0",s.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',t.appendChild(n),t.appendChild(r),t.appendChild(s);const l=document.createElement("div");l.className="progress",l.setAttribute("role","progressbar"),l.setAttribute("aria-label","File upload progress"),l.setAttribute("aria-valuenow","75"),l.setAttribute("aria-valuemin","0"),l.setAttribute("aria-valuemax","100");const c=document.createElement("div");return c.className="progress-bar",c.style.width="75%",l.appendChild(c),o.appendChild(t),o.appendChild(l),e.appendChild(o),e}},E={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("div");o.style.marginBottom="var(--space-4)";const t=document.createElement("div");t.style.display="flex",t.style.justifyContent="space-between",t.style.marginBottom="var(--space-3)";const n=document.createElement("span");n.style.fontSize="var(--text-sm)",n.style.color="var(--color-text-secondary)",n.textContent="Step 2 of 4: Payment Information";const r=document.createElement("span");r.style.fontSize="var(--text-sm)",r.style.fontWeight="var(--font-semibold)",r.style.color="var(--color-text-primary)",r.textContent="50%",t.appendChild(n),t.appendChild(r),o.appendChild(t);const a=document.createElement("div");a.className="progress progress-lg",a.setAttribute("role","progressbar"),a.setAttribute("aria-label","Checkout progress: step 2 of 4"),a.setAttribute("aria-valuenow","50"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax","100");const i=document.createElement("div");i.className="progress-bar",i.style.width="50%",a.appendChild(i),o.appendChild(a),e.appendChild(o);const s=document.createElement("div");return s.style.display="grid",s.style.gridTemplateColumns="repeat(4, 1fr)",s.style.gap="var(--space-2)",[{icon:"✓",label:"Account",state:"complete"},{icon:"💳",label:"Payment",state:"current"},{icon:"🚚",label:"Shipping",state:"pending"},{icon:"✓",label:"Confirm",state:"pending"}].forEach(({icon:c,label:u,state:m})=>{const d=document.createElement("div");d.style.textAlign="center",d.style.padding="var(--space-2)",d.style.borderRadius="var(--radius-sm)",m==="complete"?d.style.background="var(--color-success-subtle)":m==="current"?d.style.background="var(--color-primary-subtle)":d.style.opacity="0.5";const p=document.createElement("div");p.style.marginBottom="var(--space-1)",p.textContent=c;const g=document.createElement("div");g.style.fontSize="var(--text-xs)",g.style.color=m==="current"?"var(--color-text-primary)":"var(--color-text-secondary)",m==="current"&&(g.style.fontWeight="var(--font-semibold)"),g.textContent=u,d.appendChild(p),d.appendChild(g),s.appendChild(d)}),e.appendChild(s),e}},w={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.maxWidth="900px",e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))",e.style.gap="var(--space-6)",[{title:"Disk Usage",value:"45.2 GB",total:"100 GB",percentage:45,variant:""},{title:"Memory Usage",value:"13.6 GB",total:"16 GB",percentage:85,variant:"progress-warning"}].forEach(({title:t,value:n,total:r,percentage:a,variant:i})=>{const s=document.createElement("div");s.className="card";const l=document.createElement("div");l.className="card-body";const c=document.createElement("div");c.style.marginBottom="var(--space-3)";const u=document.createElement("div");u.style.fontSize="var(--text-sm)",u.style.color="var(--color-text-tertiary)",u.style.marginBottom="var(--space-1)",u.textContent=t;const m=document.createElement("div");m.style.fontSize="var(--text-2xl)",m.style.fontWeight="var(--font-bold)",m.style.color="var(--color-text-primary)",m.textContent=n,c.appendChild(u),c.appendChild(m);const d=document.createElement("div");d.style.marginTop="var(--space-4)";const p=document.createElement("div");p.style.display="flex",p.style.justifyContent="space-between",p.style.marginBottom="var(--space-2)",p.style.fontSize="var(--text-sm)";const g=document.createElement("span");g.style.color="var(--color-text-tertiary)",g.textContent=`${n} of ${r}`;const v=document.createElement("span");v.style.color=i.includes("warning")?"var(--color-warning)":"var(--color-text-primary)",v.style.fontWeight="var(--font-semibold)",v.textContent=`${a}%`,p.appendChild(g),p.appendChild(v);const B=document.createElement("div");B.className=i?`progress ${i}`:"progress";const A=document.createElement("div");A.className="progress-bar",A.style.width=`${a}%`,B.appendChild(A),d.appendChild(p),d.appendChild(B),l.appendChild(c),l.appendChild(d),s.appendChild(l),e.appendChild(s)}),e}},S={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const o=document.createElement("h3");o.textContent="Simulated Upload Progress",o.style.marginTop="0",o.style.marginBottom="var(--space-3)",e.appendChild(o);const t=document.createElement("div");t.style.marginBottom="var(--space-2)",t.style.display="flex",t.style.justifyContent="space-between";const n=document.createElement("span");n.style.fontSize="var(--text-sm)",n.style.color="var(--color-text-secondary)",n.textContent="Uploading...";const r=document.createElement("span");r.style.fontSize="var(--text-sm)",r.style.fontWeight="var(--font-semibold)",r.style.color="var(--color-text-primary)",r.textContent="0%",t.appendChild(n),t.appendChild(r),e.appendChild(t);const a=document.createElement("div");a.className="progress",a.setAttribute("role","progressbar"),a.setAttribute("aria-label","Upload progress"),a.setAttribute("aria-valuenow","0"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax","100");const i=document.createElement("div");i.className="progress-bar",i.style.width="0%",a.appendChild(i),e.appendChild(a);let s=0;const l=setInterval(()=>{s+=Math.random()*15,s>=100&&(s=100,n.textContent="Upload complete!",a.classList.add("progress-success"),clearInterval(l)),i.style.width=`${s}%`,r.textContent=`${Math.round(s)}%`,a.setAttribute("aria-valuenow",Math.round(s).toString())},500);return e}};var L,z,N;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const progress = document.createElement('div');
    const progressClasses = ['progress'];
    if (args.size && args.size !== 'default') {
      progressClasses.push(\`progress-\${args.size}\`);
    }
    if (args.variant && args.variant !== 'default') {
      progressClasses.push(\`progress-\${args.variant}\`);
    }
    if (args.indeterminate) {
      progressClasses.push('progress-indeterminate');
    }
    progress.className = progressClasses.join(' ');

    // ARIA attributes on wrapper (not on bar)
    if (!args.indeterminate) {
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-label', args.ariaLabel || 'Progress');
      progress.setAttribute('aria-valuenow', args.value.toString());
      progress.setAttribute('aria-valuemin', '0');
      progress.setAttribute('aria-valuemax', '100');
    }
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    if (!args.indeterminate) {
      bar.style.width = \`\${args.value}%\`;
    }
    if (args.showLabel && !args.indeterminate) {
      bar.textContent = \`\${args.value}%\`;
    }
    progress.appendChild(bar);
    container.appendChild(progress);
    return container;
  },
  args: {
    value: 65,
    variant: 'default',
    size: 'default',
    showLabel: false,
    indeterminate: false,
    ariaLabel: 'Progress'
  }
}`,...(N=(z=b.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var D,W,P;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    // Label and percentage
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-2)';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    const label = document.createElement('span');
    label.style.fontSize = 'var(--text-sm)';
    label.style.color = 'var(--color-text-secondary)';
    label.textContent = 'Uploading files...';
    const percentage = document.createElement('span');
    percentage.style.fontSize = 'var(--text-sm)';
    percentage.style.fontWeight = 'var(--font-semibold)';
    percentage.style.color = 'var(--color-text-primary)';
    percentage.textContent = '65%';
    header.appendChild(label);
    header.appendChild(percentage);
    container.appendChild(header);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'File upload progress');
    progress.setAttribute('aria-valuenow', '65');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '65%';
    progress.appendChild(bar);
    container.appendChild(progress);
    return container;
  }
}`,...(P=(W=y.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var k,$,R;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';

    // Default indeterminate
    const wrapper1 = document.createElement('div');
    const label1 = document.createElement('div');
    label1.style.marginBottom = 'var(--space-2)';
    label1.style.fontSize = 'var(--text-sm)';
    label1.style.color = 'var(--color-text-secondary)';
    label1.textContent = 'Processing data...';
    wrapper1.appendChild(label1);
    const progress1 = document.createElement('div');
    progress1.className = 'progress progress-indeterminate';
    const bar1 = document.createElement('div');
    bar1.className = 'progress-bar';
    progress1.appendChild(bar1);
    wrapper1.appendChild(progress1);
    container.appendChild(wrapper1);

    // Info indeterminate
    const wrapper2 = document.createElement('div');
    const label2 = document.createElement('div');
    label2.style.marginBottom = 'var(--space-2)';
    label2.style.fontSize = 'var(--text-sm)';
    label2.style.color = 'var(--color-text-secondary)';
    label2.textContent = 'Connecting to server...';
    wrapper2.appendChild(label2);
    const progress2 = document.createElement('div');
    progress2.className = 'progress progress-indeterminate progress-info';
    const bar2 = document.createElement('div');
    bar2.className = 'progress-bar';
    progress2.appendChild(bar2);
    wrapper2.appendChild(progress2);
    container.appendChild(wrapper2);
    return container;
  }
}`,...(R=($=h.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var U,I,M;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const sizes = [{
      size: 'progress-sm',
      label: 'Small - Inline progress',
      value: 60
    }, {
      size: 'progress',
      label: 'Default - Standard progress',
      value: 60
    }, {
      size: 'progress-lg',
      label: 'Large - Prominent progress',
      value: 60
    }, {
      size: 'progress-xl',
      label: 'Extra Large - With label inside',
      value: 60,
      showLabel: true
    }];
    sizes.forEach(({
      size,
      label,
      value,
      showLabel
    }) => {
      const wrapper = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.style.marginBottom = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);
      const progress = document.createElement('div');
      progress.className = size;
      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = \`\${value}%\`;
      if (showLabel) {
        bar.textContent = \`\${value}%\`;
      }
      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(M=(I=x.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,j,F;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    const variants = [{
      variant: '',
      label: 'Default Progress',
      value: 45,
      ariaLabel: 'Default progress'
    }, {
      variant: 'progress-success',
      label: 'Installation Complete',
      value: 100,
      ariaLabel: 'Installation complete'
    }, {
      variant: 'progress-warning',
      label: 'Disk Space Warning',
      value: 85,
      ariaLabel: 'Disk space usage'
    }, {
      variant: 'progress-error',
      label: 'Upload Failed',
      value: 30,
      ariaLabel: 'Upload failed at 30%'
    }, {
      variant: 'progress-info',
      label: 'Download in Progress',
      value: 70,
      ariaLabel: 'Download progress'
    }];
    variants.forEach(({
      variant,
      label,
      value,
      ariaLabel
    }) => {
      const wrapper = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.style.marginBottom = 'var(--space-2)';
      labelEl.style.fontSize = 'var(--text-sm)';
      labelEl.style.color = 'var(--color-text-secondary)';
      labelEl.textContent = label;
      wrapper.appendChild(labelEl);
      const progress = document.createElement('div');
      progress.className = variant ? \`progress \${variant}\` : 'progress';
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-label', ariaLabel);
      progress.setAttribute('aria-valuenow', value.toString());
      progress.setAttribute('aria-valuemin', '0');
      progress.setAttribute('aria-valuemax', '100');
      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = \`\${value}%\`;
      progress.appendChild(bar);
      wrapper.appendChild(progress);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(F=(j=f.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var G,H,V;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const card = document.createElement('div');
    card.style.background = 'var(--color-bg-primary)';
    card.style.padding = 'var(--space-4)';
    card.style.borderRadius = 'var(--radius-md)';
    card.style.border = '1px solid var(--color-border-medium)';

    // File info row
    const fileRow = document.createElement('div');
    fileRow.style.display = 'flex';
    fileRow.style.alignItems = 'center';
    fileRow.style.gap = 'var(--space-3)';
    fileRow.style.marginBottom = 'var(--space-3)';

    // File icon
    const iconBox = document.createElement('div');
    iconBox.style.width = '40px';
    iconBox.style.height = '40px';
    iconBox.style.background = 'var(--color-primary-subtle)';
    iconBox.style.borderRadius = 'var(--radius-md)';
    iconBox.style.display = 'flex';
    iconBox.style.alignItems = 'center';
    iconBox.style.justifyContent = 'center';
    iconBox.style.flexShrink = '0';
    iconBox.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';

    // File details
    const fileDetails = document.createElement('div');
    fileDetails.style.flex = '1';
    fileDetails.style.minWidth = '0';
    const fileName = document.createElement('div');
    fileName.style.fontWeight = 'var(--font-semibold)';
    fileName.style.color = 'var(--color-text-primary)';
    fileName.style.marginBottom = 'var(--space-1)';
    fileName.textContent = 'annual-report-2024.pdf';
    const fileSize = document.createElement('div');
    fileSize.style.fontSize = 'var(--text-sm)';
    fileSize.style.color = 'var(--color-text-tertiary)';
    fileSize.textContent = '2.4 MB of 3.2 MB • 45 seconds remaining';
    fileDetails.appendChild(fileName);
    fileDetails.appendChild(fileSize);

    // Cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn btn-ghost btn-sm';
    cancelBtn.style.flexShrink = '0';
    cancelBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    fileRow.appendChild(iconBox);
    fileRow.appendChild(fileDetails);
    fileRow.appendChild(cancelBtn);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'File upload progress');
    progress.setAttribute('aria-valuenow', '75');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '75%';
    progress.appendChild(bar);
    card.appendChild(fileRow);
    card.appendChild(progress);
    container.appendChild(card);
    return container;
  }
}`,...(V=(H=C.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var _,O,q;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';

    // Progress header
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-4)';
    const headerRow = document.createElement('div');
    headerRow.style.display = 'flex';
    headerRow.style.justifyContent = 'space-between';
    headerRow.style.marginBottom = 'var(--space-3)';
    const stepLabel = document.createElement('span');
    stepLabel.style.fontSize = 'var(--text-sm)';
    stepLabel.style.color = 'var(--color-text-secondary)';
    stepLabel.textContent = 'Step 2 of 4: Payment Information';
    const percentage = document.createElement('span');
    percentage.style.fontSize = 'var(--text-sm)';
    percentage.style.fontWeight = 'var(--font-semibold)';
    percentage.style.color = 'var(--color-text-primary)';
    percentage.textContent = '50%';
    headerRow.appendChild(stepLabel);
    headerRow.appendChild(percentage);
    header.appendChild(headerRow);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress progress-lg';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Checkout progress: step 2 of 4');
    progress.setAttribute('aria-valuenow', '50');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '50%';
    progress.appendChild(bar);
    header.appendChild(progress);
    container.appendChild(header);

    // Step indicators
    const steps = document.createElement('div');
    steps.style.display = 'grid';
    steps.style.gridTemplateColumns = 'repeat(4, 1fr)';
    steps.style.gap = 'var(--space-2)';
    const stepData = [{
      icon: '✓',
      label: 'Account',
      state: 'complete'
    }, {
      icon: '💳',
      label: 'Payment',
      state: 'current'
    }, {
      icon: '🚚',
      label: 'Shipping',
      state: 'pending'
    }, {
      icon: '✓',
      label: 'Confirm',
      state: 'pending'
    }];
    stepData.forEach(({
      icon,
      label,
      state
    }) => {
      const step = document.createElement('div');
      step.style.textAlign = 'center';
      step.style.padding = 'var(--space-2)';
      step.style.borderRadius = 'var(--radius-sm)';
      if (state === 'complete') {
        step.style.background = 'var(--color-success-subtle)';
      } else if (state === 'current') {
        step.style.background = 'var(--color-primary-subtle)';
      } else {
        step.style.opacity = '0.5';
      }
      const iconEl = document.createElement('div');
      iconEl.style.marginBottom = 'var(--space-1)';
      iconEl.textContent = icon;
      const labelEl = document.createElement('div');
      labelEl.style.fontSize = 'var(--text-xs)';
      labelEl.style.color = state === 'current' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)';
      if (state === 'current') {
        labelEl.style.fontWeight = 'var(--font-semibold)';
      }
      labelEl.textContent = label;
      step.appendChild(iconEl);
      step.appendChild(labelEl);
      steps.appendChild(step);
    });
    container.appendChild(steps);
    return container;
  }
}`,...(q=(O=E.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '900px';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    container.style.gap = 'var(--space-6)';
    const stats = [{
      title: 'Disk Usage',
      value: '45.2 GB',
      total: '100 GB',
      percentage: 45,
      variant: ''
    }, {
      title: 'Memory Usage',
      value: '13.6 GB',
      total: '16 GB',
      percentage: 85,
      variant: 'progress-warning'
    }];
    stats.forEach(({
      title,
      value,
      total,
      percentage,
      variant
    }) => {
      const card = document.createElement('div');
      card.className = 'card';
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      // Header
      const header = document.createElement('div');
      header.style.marginBottom = 'var(--space-3)';
      const titleEl = document.createElement('div');
      titleEl.style.fontSize = 'var(--text-sm)';
      titleEl.style.color = 'var(--color-text-tertiary)';
      titleEl.style.marginBottom = 'var(--space-1)';
      titleEl.textContent = title;
      const valueEl = document.createElement('div');
      valueEl.style.fontSize = 'var(--text-2xl)';
      valueEl.style.fontWeight = 'var(--font-bold)';
      valueEl.style.color = 'var(--color-text-primary)';
      valueEl.textContent = value;
      header.appendChild(titleEl);
      header.appendChild(valueEl);

      // Progress section
      const progressSection = document.createElement('div');
      progressSection.style.marginTop = 'var(--space-4)';
      const progressLabel = document.createElement('div');
      progressLabel.style.display = 'flex';
      progressLabel.style.justifyContent = 'space-between';
      progressLabel.style.marginBottom = 'var(--space-2)';
      progressLabel.style.fontSize = 'var(--text-sm)';
      const totalLabel = document.createElement('span');
      totalLabel.style.color = 'var(--color-text-tertiary)';
      totalLabel.textContent = \`\${value} of \${total}\`;
      const percentLabel = document.createElement('span');
      percentLabel.style.color = variant.includes('warning') ? 'var(--color-warning)' : 'var(--color-text-primary)';
      percentLabel.style.fontWeight = 'var(--font-semibold)';
      percentLabel.textContent = \`\${percentage}%\`;
      progressLabel.appendChild(totalLabel);
      progressLabel.appendChild(percentLabel);
      const progress = document.createElement('div');
      progress.className = variant ? \`progress \${variant}\` : 'progress';
      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      bar.style.width = \`\${percentage}%\`;
      progress.appendChild(bar);
      progressSection.appendChild(progressLabel);
      progressSection.appendChild(progress);
      cardBody.appendChild(header);
      cardBody.appendChild(progressSection);
      card.appendChild(cardBody);
      container.appendChild(card);
    });
    return container;
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const title = document.createElement('h3');
    title.textContent = 'Simulated Upload Progress';
    title.style.marginTop = '0';
    title.style.marginBottom = 'var(--space-3)';
    container.appendChild(title);

    // Progress header
    const header = document.createElement('div');
    header.style.marginBottom = 'var(--space-2)';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    const label = document.createElement('span');
    label.style.fontSize = 'var(--text-sm)';
    label.style.color = 'var(--color-text-secondary)';
    label.textContent = 'Uploading...';
    const percentageLabel = document.createElement('span');
    percentageLabel.style.fontSize = 'var(--text-sm)';
    percentageLabel.style.fontWeight = 'var(--font-semibold)';
    percentageLabel.style.color = 'var(--color-text-primary)';
    percentageLabel.textContent = '0%';
    header.appendChild(label);
    header.appendChild(percentageLabel);
    container.appendChild(header);

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', 'Upload progress');
    progress.setAttribute('aria-valuenow', '0');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.style.width = '0%';
    progress.appendChild(bar);
    container.appendChild(progress);

    // Simulate upload progress
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        label.textContent = 'Upload complete!';
        progress.classList.add('progress-success');
        clearInterval(interval);
      }
      bar.style.width = \`\${value}%\`;
      percentageLabel.textContent = \`\${Math.round(value)}%\`;
      progress.setAttribute('aria-valuenow', Math.round(value).toString());
    }, 500);
    return container;
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const te=["Default","BasicProgress","IndeterminateProgress","Sizes","SemanticColors","FileUploadPattern","MultiStepProgress","DashboardStats","AnimatedUpload"];export{S as AnimatedUpload,y as BasicProgress,w as DashboardStats,b as Default,C as FileUploadPattern,h as IndeterminateProgress,E as MultiStepProgress,f as SemanticColors,x as Sizes,te as __namedExportsOrder,ee as default};
