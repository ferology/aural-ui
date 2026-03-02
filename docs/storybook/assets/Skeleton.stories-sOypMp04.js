import{c as ue}from"./createThemeGrid-DWAncU4Q.js";const he={title:"Components/Data Display/Skeleton",tags:["autodocs"],parameters:{docs:{description:{component:"Animated loading placeholders that mimic the structure of content before it loads, improving perceived performance and user experience."}}},argTypes:{variant:{control:"select",options:["text","circle","rect","custom"],description:"Skeleton shape variant"},width:{control:"text",description:'Width (CSS value, e.g., "200px", "80%")'},height:{control:"text",description:'Height (CSS value, e.g., "20px", "100px")'},animation:{control:"select",options:["pulse","wave","none"],description:"Animation style (default uses system animation)"},count:{control:"number",description:"Number of skeleton elements to display",min:1,max:10}}},b={render:e=>{const t=document.createElement("div");t.style.maxWidth="600px",t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","Loading content");const n=e.count||3,a=["100%","80%","60%"];for(let l=0;l<n;l++){const r=document.createElement("div");r.className="skeleton skeleton-text",e.width?r.style.width=e.width:l<a.length&&(r.style.width=a[l]),e.height&&(r.style.height=e.height),t.appendChild(r)}const s=document.createElement("span");return s.className="sr-only",s.textContent="Loading content...",t.appendChild(s),t},args:{variant:"text",count:3,width:"",height:""}},k={render:e=>{const t=document.createElement("div");t.style.display="flex",t.style.gap="var(--space-4)",t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","Loading avatars");const n=e.count||3,a=e.width||e.height||"48px";for(let s=0;s<n;s++){const l=document.createElement("div");l.className="skeleton skeleton-circle",l.style.width=a,l.style.height=a,t.appendChild(l)}return t},args:{variant:"circle",count:3,width:"48px",height:"48px"}},f={render:e=>{const t=document.createElement("div");return t.className="skeleton skeleton-rect",t.style.width=e.width||"300px",t.style.height=e.height||"200px",t.style.borderRadius="var(--radius-md)",t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","Loading image"),t},args:{variant:"rect",width:"300px",height:"200px"}},E={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="var(--space-6)",e.style.alignItems="center",e.style.maxWidth="600px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading user profile");const t=document.createElement("div");t.className="skeleton skeleton-circle",t.style.width="48px",t.style.height="48px",t.style.flexShrink="0";const n=document.createElement("div");n.style.flex="1",n.style.display="flex",n.style.flexDirection="column",n.style.gap="var(--space-2)";const a=document.createElement("div");a.className="skeleton skeleton-text",a.style.width="40%";const s=document.createElement("div");return s.className="skeleton skeleton-text",s.style.width="60%",n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}},w={render:()=>{const e=document.createElement("div");e.className="card",e.style.maxWidth="400px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading card content");const t=document.createElement("div");t.className="skeleton skeleton-rect",t.style.width="100%",t.style.height="200px",t.style.borderRadius="var(--radius-md) var(--radius-md) 0 0";const n=document.createElement("div");n.style.padding="var(--space-4)";const a=document.createElement("div");a.className="skeleton skeleton-text",a.style.width="70%",a.style.height="24px",a.style.marginBottom="var(--space-3)";const s=document.createElement("div");s.className="skeleton skeleton-text",s.style.width="100%",s.style.marginBottom="var(--space-2)";const l=document.createElement("div");l.className="skeleton skeleton-text",l.style.width="90%",l.style.marginBottom="var(--space-4)";const r=document.createElement("div");r.style.display="flex",r.style.gap="var(--space-3)";const o=document.createElement("div");o.className="skeleton skeleton-rect",o.style.width="80px",o.style.height="36px",o.style.borderRadius="var(--radius-sm)";const i=document.createElement("div");return i.className="skeleton skeleton-rect",i.style.width="80px",i.style.height="36px",i.style.borderRadius="var(--radius-sm)",r.appendChild(o),r.appendChild(i),n.appendChild(a),n.appendChild(s),n.appendChild(l),n.appendChild(r),e.appendChild(t),e.appendChild(n),e}},N={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-3)",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading table data");for(let t=0;t<5;t++){const n=document.createElement("div");n.style.display="grid",n.style.gridTemplateColumns="2fr 1fr 1fr 80px",n.style.gap="var(--space-6)",n.style.padding="var(--space-3)",n.style.borderBottom="1px solid var(--color-border-subtle)",["70%","80%","65%","60px"].forEach((s,l)=>{const r=document.createElement("div");l===3?(r.className="skeleton skeleton-rect",r.style.height="24px",r.style.borderRadius="var(--radius-sm)"):r.className="skeleton skeleton-text",r.style.width=s,n.appendChild(r)}),e.appendChild(n)}return e}},A={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-4)",e.style.maxWidth="600px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading list items");const t=["40%","50%","35%","45%"];for(let n=0;n<4;n++){const a=document.createElement("div");a.style.display="flex",a.style.gap="var(--space-6)",a.style.alignItems="center",a.style.padding="var(--space-4)",a.style.background="var(--color-bg-primary)",a.style.borderRadius="var(--radius-md)";const s=document.createElement("div");s.className="skeleton skeleton-circle",s.style.width="48px",s.style.height="48px",s.style.flexShrink="0";const l=document.createElement("div");l.style.flex="1",l.style.display="flex",l.style.flexDirection="column",l.style.gap="var(--space-2)";const r=document.createElement("div");r.className="skeleton skeleton-text",r.style.width=t[n];const o=document.createElement("div");o.className="skeleton skeleton-text",o.style.width="70%",l.appendChild(r),l.appendChild(o);const i=document.createElement("div");i.className="skeleton skeleton-rect",i.style.width="24px",i.style.height="24px",i.style.borderRadius="var(--radius-sm)",i.style.flexShrink="0",a.appendChild(s),a.appendChild(l),a.appendChild(i),e.appendChild(a)}return e}},T={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",e.style.maxWidth="500px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading form");for(let n=0;n<3;n++){const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-2)";const s=document.createElement("div");s.className="skeleton skeleton-text",s.style.width="30%",s.style.height="14px";const l=document.createElement("div");l.className="skeleton skeleton-rect",l.style.width="100%",l.style.height="44px",l.style.borderRadius="var(--radius-md)",a.appendChild(s),a.appendChild(l),e.appendChild(a)}const t=document.createElement("div");return t.className="skeleton skeleton-rect",t.style.width="120px",t.style.height="44px",t.style.borderRadius="var(--radius-md)",t.style.marginTop="var(--space-4)",e.appendChild(t),e}},L={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-6)",e.style.maxWidth="700px",e.setAttribute("aria-busy","true"),e.setAttribute("aria-label","Loading article");const t=document.createElement("div");t.style.display="flex",t.style.gap="var(--space-6)",t.style.alignItems="center";const n=document.createElement("div");n.className="skeleton skeleton-circle",n.style.width="40px",n.style.height="40px";const a=document.createElement("div");a.style.flex="1",a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-2)";const s=document.createElement("div");s.className="skeleton skeleton-text",s.style.width="30%";const l=document.createElement("div");l.className="skeleton skeleton-text",l.style.width="20%",l.style.height="12px",a.appendChild(s),a.appendChild(l),t.appendChild(n),t.appendChild(a);const r=document.createElement("div");r.className="skeleton skeleton-text",r.style.width="80%",r.style.height="32px";const o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.gap="var(--space-2)";for(let c=0;c<3;c++){const d=document.createElement("div");d.className="skeleton skeleton-text",d.style.width=c===2?"70%":"100%",o.appendChild(d)}const i=document.createElement("div");i.className="skeleton skeleton-rect",i.style.width="100%",i.style.height="300px",i.style.borderRadius="var(--radius-md)";const p=document.createElement("div");p.style.display="flex",p.style.gap="var(--space-3)";for(let c=0;c<3;c++){const d=document.createElement("div");d.className="skeleton skeleton-rect",d.style.width="60px",d.style.height="24px",d.style.borderRadius="var(--radius-full)",p.appendChild(d)}return e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(i),e.appendChild(p),e}},B={render:e=>ue(()=>{const t=document.createElement("div");t.style.display="flex",t.style.gap="var(--space-6)",t.style.alignItems="center",t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","Loading content");const n=document.createElement("div");n.className="skeleton skeleton-circle",n.style.width="48px",n.style.height="48px",n.style.flexShrink="0";const a=document.createElement("div");a.style.flex="1",a.style.display="flex",a.style.flexDirection="column",a.style.gap="var(--space-2)";const s=document.createElement("div");s.className="skeleton skeleton-text",s.style.width="60%";const l=document.createElement("div");return l.className="skeleton skeleton-text",l.style.width="80%",a.appendChild(s),a.appendChild(l),t.appendChild(n),t.appendChild(a),t})},R={render:()=>{const e=document.createElement("div");e.style.maxWidth="600px";const t=document.createElement("button");t.className="btn btn-primary",t.textContent="Load Content",t.style.marginBottom="var(--space-6)";const n=document.createElement("div");return t.addEventListener("click",()=>{t.disabled=!0,t.textContent="Loading...",n.innerHTML="",n.setAttribute("aria-busy","true"),n.setAttribute("aria-live","polite");const a=document.createElement("div");a.className="card";const s=document.createElement("div");s.style.padding="var(--space-4)";const l=document.createElement("div");l.style.display="flex",l.style.gap="var(--space-6)",l.style.alignItems="center",l.style.marginBottom="var(--space-4)";const r=document.createElement("div");r.className="skeleton skeleton-circle",r.style.width="48px",r.style.height="48px";const o=document.createElement("div");o.style.flex="1",o.style.display="flex",o.style.flexDirection="column",o.style.gap="var(--space-2)";const i=document.createElement("div");i.className="skeleton skeleton-text",i.style.width="40%";const p=document.createElement("div");p.className="skeleton skeleton-text",p.style.width="60%",o.appendChild(i),o.appendChild(p),l.appendChild(r),l.appendChild(o);const c=document.createElement("div");c.className="skeleton skeleton-text",c.style.width="100%",c.style.marginBottom="var(--space-2)";const d=document.createElement("div");d.className="skeleton skeleton-text",d.style.width="90%",d.style.marginBottom="var(--space-2)";const S=document.createElement("div");S.className="skeleton skeleton-text",S.style.width="70%";const D=document.createElement("span");D.className="sr-only",D.textContent="Loading user profile...",s.appendChild(l),s.appendChild(c),s.appendChild(d),s.appendChild(S),s.appendChild(D),a.appendChild(s),n.appendChild(a),setTimeout(()=>{n.removeAttribute("aria-busy"),n.innerHTML="";const I=document.createElement("div");I.className="card";const v=document.createElement("div");v.style.padding="var(--space-4)";const u=document.createElement("div");u.style.display="flex",u.style.gap="var(--space-6)",u.style.alignItems="center",u.style.marginBottom="var(--space-4)";const m=document.createElement("div");m.style.width="48px",m.style.height="48px",m.style.borderRadius="50%",m.style.background="var(--color-primary)",m.style.display="flex",m.style.alignItems="center",m.style.justifyContent="center",m.style.color="white",m.style.fontWeight="var(--font-semibold)",m.textContent="JD";const g=document.createElement("div");g.style.flex="1";const y=document.createElement("div");y.style.fontWeight="var(--font-semibold)",y.style.color="var(--color-text-primary)",y.style.marginBottom="var(--space-1)",y.textContent="John Doe";const C=document.createElement("div");C.style.fontSize="var(--text-sm)",C.style.color="var(--color-text-secondary)",C.textContent="Product Designer",g.appendChild(y),g.appendChild(C),u.appendChild(m),u.appendChild(g);const h=document.createElement("p");h.style.color="var(--color-text-secondary)",h.style.lineHeight="1.6",h.style.margin="0",h.textContent="Passionate about creating beautiful and functional user interfaces. Love working with modern design systems and accessibility-first approaches.",v.appendChild(u),v.appendChild(h),I.appendChild(v),n.appendChild(I),t.disabled=!1,t.textContent="Load Content";const x=document.createElement("div");x.setAttribute("role","status"),x.setAttribute("aria-live","polite"),x.className="sr-only",x.textContent="Content loaded successfully",n.appendChild(x)},2e3)}),e.appendChild(t),e.appendChild(n),e}};var W,H,G;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading content');
    const count = args.count || 3;
    const widths = ['100%', '80%', '60%'];
    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-text';
      if (args.width) {
        skeleton.style.width = args.width;
      } else if (i < widths.length) {
        skeleton.style.width = widths[i];
      }
      if (args.height) {
        skeleton.style.height = args.height;
      }
      container.appendChild(skeleton);
    }

    // Screen reader text
    const srText = document.createElement('span');
    srText.className = 'sr-only';
    srText.textContent = 'Loading content...';
    container.appendChild(srText);
    return container;
  },
  args: {
    variant: 'text',
    count: 3,
    width: '',
    height: ''
  }
}`,...(G=(H=b.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var z,P,J;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-4)';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading avatars');
    const count = args.count || 3;
    const size = args.width || args.height || '48px';
    for (let i = 0; i < count; i++) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-circle';
      skeleton.style.width = size;
      skeleton.style.height = size;
      container.appendChild(skeleton);
    }
    return container;
  },
  args: {
    variant: 'circle',
    count: 3,
    width: '48px',
    height: '48px'
  }
}`,...(J=(P=k.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var M,j,F;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton skeleton-rect';
    skeleton.style.width = args.width || '300px';
    skeleton.style.height = args.height || '200px';
    skeleton.style.borderRadius = 'var(--radius-md)';
    skeleton.setAttribute('aria-busy', 'true');
    skeleton.setAttribute('aria-label', 'Loading image');
    return skeleton;
  },
  args: {
    variant: 'rect',
    width: '300px',
    height: '200px'
  }
}`,...(F=(j=f.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var _,O,q;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.alignItems = 'center';
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading user profile');
    const avatar = document.createElement('div');
    avatar.className = 'skeleton skeleton-circle';
    avatar.style.width = '48px';
    avatar.style.height = '48px';
    avatar.style.flexShrink = '0';
    const textContainer = document.createElement('div');
    textContainer.style.flex = '1';
    textContainer.style.display = 'flex';
    textContainer.style.flexDirection = 'column';
    textContainer.style.gap = 'var(--space-2)';
    const name = document.createElement('div');
    name.className = 'skeleton skeleton-text';
    name.style.width = '40%';
    const email = document.createElement('div');
    email.className = 'skeleton skeleton-text';
    email.style.width = '60%';
    textContainer.appendChild(name);
    textContainer.appendChild(email);
    container.appendChild(avatar);
    container.appendChild(textContainer);
    return container;
  }
}`,...(q=(O=E.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var K,Q,U;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.maxWidth = '400px';
    card.setAttribute('aria-busy', 'true');
    card.setAttribute('aria-label', 'Loading card content');
    const image = document.createElement('div');
    image.className = 'skeleton skeleton-rect';
    image.style.width = '100%';
    image.style.height = '200px';
    image.style.borderRadius = 'var(--radius-md) var(--radius-md) 0 0';
    const body = document.createElement('div');
    body.style.padding = 'var(--space-4)';
    const title = document.createElement('div');
    title.className = 'skeleton skeleton-text';
    title.style.width = '70%';
    title.style.height = '24px';
    title.style.marginBottom = 'var(--space-3)';
    const line1 = document.createElement('div');
    line1.className = 'skeleton skeleton-text';
    line1.style.width = '100%';
    line1.style.marginBottom = 'var(--space-2)';
    const line2 = document.createElement('div');
    line2.className = 'skeleton skeleton-text';
    line2.style.width = '90%';
    line2.style.marginBottom = 'var(--space-4)';
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = 'var(--space-3)';
    const button1 = document.createElement('div');
    button1.className = 'skeleton skeleton-rect';
    button1.style.width = '80px';
    button1.style.height = '36px';
    button1.style.borderRadius = 'var(--radius-sm)';
    const button2 = document.createElement('div');
    button2.className = 'skeleton skeleton-rect';
    button2.style.width = '80px';
    button2.style.height = '36px';
    button2.style.borderRadius = 'var(--radius-sm)';
    buttonGroup.appendChild(button1);
    buttonGroup.appendChild(button2);
    body.appendChild(title);
    body.appendChild(line1);
    body.appendChild(line2);
    body.appendChild(buttonGroup);
    card.appendChild(image);
    card.appendChild(body);
    return card;
  }
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-3)';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading table data');
    for (let i = 0; i < 5; i++) {
      const row = document.createElement('div');
      row.style.display = 'grid';
      row.style.gridTemplateColumns = '2fr 1fr 1fr 80px';
      row.style.gap = 'var(--space-6)';
      row.style.padding = 'var(--space-3)';
      row.style.borderBottom = '1px solid var(--color-border-subtle)';
      const widths = ['70%', '80%', '65%', '60px'];
      widths.forEach((width, index) => {
        const cell = document.createElement('div');
        if (index === 3) {
          cell.className = 'skeleton skeleton-rect';
          cell.style.height = '24px';
          cell.style.borderRadius = 'var(--radius-sm)';
        } else {
          cell.className = 'skeleton skeleton-text';
        }
        cell.style.width = width;
        row.appendChild(cell);
      });
      container.appendChild(row);
    }
    return container;
  }
}`,...(Y=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-4)';
    container.style.maxWidth = '600px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading list items');
    const nameWidths = ['40%', '50%', '35%', '45%'];
    for (let i = 0; i < 4; i++) {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.gap = 'var(--space-6)';
      item.style.alignItems = 'center';
      item.style.padding = 'var(--space-4)';
      item.style.background = 'var(--color-bg-primary)';
      item.style.borderRadius = 'var(--radius-md)';
      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      avatar.style.flexShrink = '0';
      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';
      const name = document.createElement('div');
      name.className = 'skeleton skeleton-text';
      name.style.width = nameWidths[i];
      const description = document.createElement('div');
      description.className = 'skeleton skeleton-text';
      description.style.width = '70%';
      textContainer.appendChild(name);
      textContainer.appendChild(description);
      const icon = document.createElement('div');
      icon.className = 'skeleton skeleton-rect';
      icon.style.width = '24px';
      icon.style.height = '24px';
      icon.style.borderRadius = 'var(--radius-sm)';
      icon.style.flexShrink = '0';
      item.appendChild(avatar);
      item.appendChild(textContainer);
      item.appendChild(icon);
      container.appendChild(item);
    }
    return container;
  }
}`,...(ee=($=A.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.maxWidth = '500px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading form');
    for (let i = 0; i < 3; i++) {
      const field = document.createElement('div');
      field.style.display = 'flex';
      field.style.flexDirection = 'column';
      field.style.gap = 'var(--space-2)';
      const label = document.createElement('div');
      label.className = 'skeleton skeleton-text';
      label.style.width = '30%';
      label.style.height = '14px';
      const input = document.createElement('div');
      input.className = 'skeleton skeleton-rect';
      input.style.width = '100%';
      input.style.height = '44px';
      input.style.borderRadius = 'var(--radius-md)';
      field.appendChild(label);
      field.appendChild(input);
      container.appendChild(field);
    }
    const button = document.createElement('div');
    button.className = 'skeleton skeleton-rect';
    button.style.width = '120px';
    button.style.height = '44px';
    button.style.borderRadius = 'var(--radius-md)';
    button.style.marginTop = 'var(--space-4)';
    container.appendChild(button);
    return container;
  }
}`,...(ae=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,se,re;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = 'var(--space-6)';
    container.style.maxWidth = '700px';
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading article');

    // Header
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.gap = 'var(--space-6)';
    header.style.alignItems = 'center';
    const avatar = document.createElement('div');
    avatar.className = 'skeleton skeleton-circle';
    avatar.style.width = '40px';
    avatar.style.height = '40px';
    const authorInfo = document.createElement('div');
    authorInfo.style.flex = '1';
    authorInfo.style.display = 'flex';
    authorInfo.style.flexDirection = 'column';
    authorInfo.style.gap = 'var(--space-2)';
    const author = document.createElement('div');
    author.className = 'skeleton skeleton-text';
    author.style.width = '30%';
    const date = document.createElement('div');
    date.className = 'skeleton skeleton-text';
    date.style.width = '20%';
    date.style.height = '12px';
    authorInfo.appendChild(author);
    authorInfo.appendChild(date);
    header.appendChild(avatar);
    header.appendChild(authorInfo);

    // Title
    const title = document.createElement('div');
    title.className = 'skeleton skeleton-text';
    title.style.width = '80%';
    title.style.height = '32px';

    // Excerpt
    const excerpt = document.createElement('div');
    excerpt.style.display = 'flex';
    excerpt.style.flexDirection = 'column';
    excerpt.style.gap = 'var(--space-2)';
    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      line.className = 'skeleton skeleton-text';
      line.style.width = i === 2 ? '70%' : '100%';
      excerpt.appendChild(line);
    }

    // Image
    const image = document.createElement('div');
    image.className = 'skeleton skeleton-rect';
    image.style.width = '100%';
    image.style.height = '300px';
    image.style.borderRadius = 'var(--radius-md)';

    // Tags
    const tags = document.createElement('div');
    tags.style.display = 'flex';
    tags.style.gap = 'var(--space-3)';
    for (let i = 0; i < 3; i++) {
      const tag = document.createElement('div');
      tag.className = 'skeleton skeleton-rect';
      tag.style.width = '60px';
      tag.style.height = '24px';
      tag.style.borderRadius = 'var(--radius-full)';
      tags.appendChild(tag);
    }
    container.appendChild(header);
    container.appendChild(title);
    container.appendChild(excerpt);
    container.appendChild(image);
    container.appendChild(tags);
    return container;
  }
}`,...(re=(se=L.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,de;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = 'var(--space-6)';
      container.style.alignItems = 'center';
      container.setAttribute('aria-busy', 'true');
      container.setAttribute('aria-label', 'Loading content');
      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      avatar.style.flexShrink = '0';
      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';
      const line1 = document.createElement('div');
      line1.className = 'skeleton skeleton-text';
      line1.style.width = '60%';
      const line2 = document.createElement('div');
      line2.className = 'skeleton skeleton-text';
      line2.style.width = '80%';
      textContainer.appendChild(line1);
      textContainer.appendChild(line2);
      container.appendChild(avatar);
      container.appendChild(textContainer);
      return container;
    });
  }
}`,...(de=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,me,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '600px';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Load Content';
    button.style.marginBottom = 'var(--space-6)';
    const contentContainer = document.createElement('div');
    button.addEventListener('click', () => {
      button.disabled = true;
      button.textContent = 'Loading...';

      // Show skeleton
      contentContainer.innerHTML = '';
      contentContainer.setAttribute('aria-busy', 'true');
      contentContainer.setAttribute('aria-live', 'polite');
      const card = document.createElement('div');
      card.className = 'card';
      const cardBody = document.createElement('div');
      cardBody.style.padding = 'var(--space-4)';
      const header = document.createElement('div');
      header.style.display = 'flex';
      header.style.gap = 'var(--space-6)';
      header.style.alignItems = 'center';
      header.style.marginBottom = 'var(--space-4)';
      const avatar = document.createElement('div');
      avatar.className = 'skeleton skeleton-circle';
      avatar.style.width = '48px';
      avatar.style.height = '48px';
      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';
      textContainer.style.display = 'flex';
      textContainer.style.flexDirection = 'column';
      textContainer.style.gap = 'var(--space-2)';
      const name = document.createElement('div');
      name.className = 'skeleton skeleton-text';
      name.style.width = '40%';
      const role = document.createElement('div');
      role.className = 'skeleton skeleton-text';
      role.style.width = '60%';
      textContainer.appendChild(name);
      textContainer.appendChild(role);
      header.appendChild(avatar);
      header.appendChild(textContainer);
      const line1 = document.createElement('div');
      line1.className = 'skeleton skeleton-text';
      line1.style.width = '100%';
      line1.style.marginBottom = 'var(--space-2)';
      const line2 = document.createElement('div');
      line2.className = 'skeleton skeleton-text';
      line2.style.width = '90%';
      line2.style.marginBottom = 'var(--space-2)';
      const line3 = document.createElement('div');
      line3.className = 'skeleton skeleton-text';
      line3.style.width = '70%';
      const srText = document.createElement('span');
      srText.className = 'sr-only';
      srText.textContent = 'Loading user profile...';
      cardBody.appendChild(header);
      cardBody.appendChild(line1);
      cardBody.appendChild(line2);
      cardBody.appendChild(line3);
      cardBody.appendChild(srText);
      card.appendChild(cardBody);
      contentContainer.appendChild(card);

      // Load actual content after 2 seconds
      setTimeout(() => {
        contentContainer.removeAttribute('aria-busy');
        contentContainer.innerHTML = '';
        const loadedCard = document.createElement('div');
        loadedCard.className = 'card';
        const loadedBody = document.createElement('div');
        loadedBody.style.padding = 'var(--space-4)';
        const loadedHeader = document.createElement('div');
        loadedHeader.style.display = 'flex';
        loadedHeader.style.gap = 'var(--space-6)';
        loadedHeader.style.alignItems = 'center';
        loadedHeader.style.marginBottom = 'var(--space-4)';
        const loadedAvatar = document.createElement('div');
        loadedAvatar.style.width = '48px';
        loadedAvatar.style.height = '48px';
        loadedAvatar.style.borderRadius = '50%';
        loadedAvatar.style.background = 'var(--color-primary)';
        loadedAvatar.style.display = 'flex';
        loadedAvatar.style.alignItems = 'center';
        loadedAvatar.style.justifyContent = 'center';
        loadedAvatar.style.color = 'white';
        loadedAvatar.style.fontWeight = 'var(--font-semibold)';
        loadedAvatar.textContent = 'JD';
        const loadedTextContainer = document.createElement('div');
        loadedTextContainer.style.flex = '1';
        const loadedName = document.createElement('div');
        loadedName.style.fontWeight = 'var(--font-semibold)';
        loadedName.style.color = 'var(--color-text-primary)';
        loadedName.style.marginBottom = 'var(--space-1)';
        loadedName.textContent = 'John Doe';
        const loadedRole = document.createElement('div');
        loadedRole.style.fontSize = 'var(--text-sm)';
        loadedRole.style.color = 'var(--color-text-secondary)';
        loadedRole.textContent = 'Product Designer';
        loadedTextContainer.appendChild(loadedName);
        loadedTextContainer.appendChild(loadedRole);
        loadedHeader.appendChild(loadedAvatar);
        loadedHeader.appendChild(loadedTextContainer);
        const loadedText = document.createElement('p');
        loadedText.style.color = 'var(--color-text-secondary)';
        loadedText.style.lineHeight = '1.6';
        loadedText.style.margin = '0';
        loadedText.textContent = 'Passionate about creating beautiful and functional user interfaces. Love working with modern design systems and accessibility-first approaches.';
        loadedBody.appendChild(loadedHeader);
        loadedBody.appendChild(loadedText);
        loadedCard.appendChild(loadedBody);
        contentContainer.appendChild(loadedCard);
        button.disabled = false;
        button.textContent = 'Load Content';

        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Content loaded successfully';
        contentContainer.appendChild(announcement);
      }, 2000);
    });
    wrapper.appendChild(button);
    wrapper.appendChild(contentContainer);
    return wrapper;
  }
}`,...(pe=(me=R.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const xe=["Text","Circle","Rectangle","Avatar","Card","Table","List","Form","ArticlePreview","ThemeComparison","LoadingSimulation"];export{L as ArticlePreview,E as Avatar,w as Card,k as Circle,T as Form,A as List,R as LoadingSimulation,f as Rectangle,N as Table,b as Text,B as ThemeComparison,xe as __namedExportsOrder,he as default};
