import{c as we}from"./createThemeGrid-DWAncU4Q.js";const Ie={title:"Components/Forms/File Upload",tags:["autodocs"],parameters:{docs:{description:{component:`
# File Upload Component

Drag-and-drop file upload with progress tracking, validation, and preview support.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="file-upload">
  <label class="file-upload__zone">
    <input type="file" class="file-upload__input" multiple>
    <div class="file-upload__content">
      <i data-lucide="upload" class="file-upload__icon"></i>
      <span class="file-upload__text">Drop files here or click to browse</span>
      <span class="file-upload__subtext">Support for multiple files</span>
    </div>
  </label>
  <div class="file-upload__list"></div>
</div>
\`\`\`

**React:**
\`\`\`jsx
const FileUpload = ({ onUpload, accept, multiple = false }) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    onUpload?.(selectedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    onUpload?.(droppedFiles);
  };

  return (
    <div className="file-upload">
      <label className="file-upload__zone">
        <input
          type="file"
          className="file-upload__input"
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
        />
        <div className="file-upload__content">
          <i data-lucide="upload" className="file-upload__icon"></i>
          <span className="file-upload__text">Drop files or click to browse</span>
        </div>
      </label>
      <div className="file-upload__list"></div>
    </div>
  );
};
\`\`\`
        `.trim()}}},argTypes:{accept:{control:"text",description:'Accepted file types (e.g., "image/*", ".pdf,.doc")'},multiple:{control:"boolean",description:"Allow multiple file selection"},disabled:{control:"boolean",description:"Disabled state"},maxSize:{control:"text",description:'Maximum file size (e.g., "10MB")'},dragDrop:{control:"boolean",description:"Enable drag and drop functionality"},showPreview:{control:"boolean",description:"Show file preview thumbnails"},size:{control:"select",options:["sm","md","lg"],description:"Upload zone size"},variant:{control:"select",options:["default","button","image-grid"],description:"Upload zone style variant"}}};function C(t){const e=document.createElement("i");return e.setAttribute("data-lucide",t),e.className="file-upload__icon",e}function ze(t){const e=document.createElement("i");return e.setAttribute("data-lucide",t),e.className="file-upload__preview-icon",e}function x(t){const e=t.querySelector(".file-upload__zone"),n=t.querySelector(".file-upload__input"),l=t.querySelector(".file-upload__list");if(!e||!n||!l)return;let a=[];e.addEventListener("dragover",d=>{d.preventDefault(),e.classList.add("file-upload__zone--active")}),e.addEventListener("dragleave",d=>{d.preventDefault(),e.classList.remove("file-upload__zone--active")}),e.addEventListener("drop",d=>{var p;d.preventDefault(),e.classList.remove("file-upload__zone--active");const r=Array.from(((p=d.dataTransfer)==null?void 0:p.files)||[]);c(r)}),n.addEventListener("change",d=>{const r=d.target,p=Array.from(r.files||[]);c(p)});function c(d){n.multiple?a=[...a,...d]:a=[d[0]],o(),s()}function o(){l.innerHTML="",a.forEach((d,r)=>{const p=i(d,r);l.appendChild(p)}),typeof window.lucide<"u"&&window.lucide.createIcons()}function i(d,r){const p=document.createElement("div");p.className="file-upload__item file-upload__item--pending",p.setAttribute("data-index",r.toString());const f=document.createElement("div");if(f.className="file-upload__preview",d.type.startsWith("image/")){const g=document.createElement("img"),k=new FileReader;k.onload=ge=>{var $;g.src=($=ge.target)==null?void 0:$.result},k.readAsDataURL(d),f.appendChild(g)}else{const g=ze(m(d.type));f.appendChild(g)}const _=document.createElement("div");_.className="file-upload__info";const N=document.createElement("div");N.className="file-upload__filename",N.textContent=d.name;const E=document.createElement("div");E.className="file-upload__meta";const h=document.createElement("span");h.className="file-upload__filesize",h.textContent=b(d.size);const v=document.createElement("span");v.className="file-upload__status";const z=document.createElement("i");z.setAttribute("data-lucide","clock"),v.appendChild(z),v.appendChild(document.createTextNode(" Pending")),E.appendChild(h),E.appendChild(v),_.appendChild(N),_.appendChild(E);const y=document.createElement("div");y.className="file-upload__actions";const w=document.createElement("button");w.className="file-upload__action file-upload__action--remove",w.setAttribute("aria-label",`Remove ${d.name}`);const G=document.createElement("i");return G.setAttribute("data-lucide","x"),w.appendChild(G),w.onclick=g=>{g.preventDefault(),u(r)},y.appendChild(w),p.appendChild(f),p.appendChild(_),p.appendChild(y),p}function s(){a.forEach((d,r)=>{const p=l.querySelector(`[data-index="${r}"]`);if(!p||!p.classList.contains("file-upload__item--pending"))return;const f=p.querySelector(".file-upload__info"),_=document.createElement("div");_.className="file-upload__progress";const N=document.createElement("div");N.className="file-upload__progress-bar";const E=document.createElement("div");E.className="file-upload__progress-fill",E.style.width="0%",N.appendChild(E),_.appendChild(N),f==null||f.appendChild(_),p.classList.remove("file-upload__item--pending"),p.classList.add("file-upload__item--uploading");const h=p.querySelector(".file-upload__status");if(h){h.innerHTML="";const y=document.createElement("i");y.setAttribute("data-lucide","loader-2"),h.appendChild(y),h.appendChild(document.createTextNode(" Uploading..."))}typeof window.lucide<"u"&&window.lucide.createIcons();let v=0;const z=setInterval(()=>{v+=Math.random()*30,v>=100&&(v=100,clearInterval(z),setTimeout(()=>{if(p.classList.remove("file-upload__item--uploading"),p.classList.add("file-upload__item--success"),h){h.innerHTML="";const y=document.createElement("i");y.setAttribute("data-lucide","check-circle"),h.appendChild(y),h.appendChild(document.createTextNode(" Complete")),typeof window.lucide<"u"&&window.lucide.createIcons()}},300)),E.style.width=v+"%"},200)})}function u(d){a.splice(d,1),o()}function m(d){return d.startsWith("image/")?"image":d.startsWith("video/")?"video":d.startsWith("audio/")?"music":d.includes("pdf")?"file-text":d.includes("zip")||d.includes("rar")?"archive":"file"}function b(d){if(d===0)return"0 Bytes";const r=1024,p=["Bytes","KB","MB","GB"],f=Math.floor(Math.log(d)/Math.log(r));return Math.round(d/Math.pow(r,f)*100)/100+" "+p[f]}}const U={render:t=>{const e=document.createElement("div");e.style.padding="2rem",e.style.maxWidth="600px";const n=document.createElement("div");n.className=`file-upload${t.size?` file-upload--${t.size}`:""}${t.variant!=="default"?` file-upload--${t.variant}`:""}`;const l=document.createElement("label");l.className="file-upload__zone";const a=document.createElement("input");a.type="file",a.className="file-upload__input",a.multiple=t.multiple??!0,a.disabled=t.disabled??!1,t.accept&&(a.accept=t.accept);const c=document.createElement("div");c.className="file-upload__content";const o=C("upload"),i=document.createElement("span");i.className="file-upload__text",i.textContent="Drop files here or click to browse";const s=document.createElement("span");s.className="file-upload__subtext",s.textContent=t.multiple?"Support for multiple files":"Single file upload",c.appendChild(o),c.appendChild(i),c.appendChild(s),l.appendChild(a),l.appendChild(c);const u=document.createElement("div");if(u.className="file-upload__list",n.appendChild(l),t.maxSize){const m=document.createElement("div");m.className="file-upload__constraints",m.textContent=`Maximum file size: ${t.maxSize}`,n.appendChild(m)}return n.appendChild(u),e.appendChild(n),setTimeout(()=>{x(n),typeof window.lucide<"u"&&window.lucide.createIcons()},0),e},args:{accept:"",multiple:!0,disabled:!1,maxSize:"",dragDrop:!0,showPreview:!0,size:"md",variant:"default"}},I={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("div");e.className="file-upload";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.accept="image/*",l.multiple=!0;const a=document.createElement("div");a.className="file-upload__content";const c=C("image"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Drop images here or click to browse";const i=document.createElement("span");i.className="file-upload__subtext",i.textContent="PNG, JPG, GIF up to 10MB",a.appendChild(c),a.appendChild(o),a.appendChild(i),n.appendChild(l),n.appendChild(a);const s=document.createElement("div");s.className="file-upload__constraints",s.textContent="Maximum file size: 10MB";const u=document.createElement("div");return u.className="file-upload__list",e.appendChild(n),e.appendChild(s),e.appendChild(u),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},F={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("div");e.className="file-upload file-upload--sm";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.multiple=!0;const a=document.createElement("div");a.className="file-upload__content";const c=C("upload"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Small upload zone",a.appendChild(c),a.appendChild(o),n.appendChild(l),n.appendChild(a);const i=document.createElement("div");return i.className="file-upload__list",e.appendChild(n),e.appendChild(i),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},S={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("div");e.className="file-upload file-upload--lg";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.multiple=!0;const a=document.createElement("div");a.className="file-upload__content";const c=C("upload"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Large upload zone";const i=document.createElement("span");i.className="file-upload__subtext",i.textContent="Prominent display for primary upload actions",a.appendChild(c),a.appendChild(o),a.appendChild(i),n.appendChild(l),n.appendChild(a);const s=document.createElement("div");return s.className="file-upload__list",e.appendChild(n),e.appendChild(s),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},D={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("div");e.className="file-upload file-upload--button";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.multiple=!0;const a=document.createElement("div");a.className="file-upload__content";const c=C("upload"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Choose Files",a.appendChild(c),a.appendChild(o),n.appendChild(l),n.appendChild(a);const i=document.createElement("div");return i.className="file-upload__list",e.appendChild(n),e.appendChild(i),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},T={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="800px";const e=document.createElement("div");e.className="file-upload file-upload--image-grid";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.accept="image/*",l.multiple=!0;const a=document.createElement("div");a.className="file-upload__content";const c=C("image"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Upload Images";const i=document.createElement("span");i.className="file-upload__subtext",i.textContent="Display as grid",a.appendChild(c),a.appendChild(o),a.appendChild(i),n.appendChild(l),n.appendChild(a);const s=document.createElement("div");return s.className="file-upload__list",e.appendChild(n),e.appendChild(s),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},A={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("div");e.className="file-upload";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input";const a=document.createElement("div");a.className="file-upload__content";const c=C("file-text"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Upload a single file";const i=document.createElement("span");i.className="file-upload__subtext",i.textContent="PDF, DOC, DOCX up to 5MB",a.appendChild(c),a.appendChild(o),a.appendChild(i),n.appendChild(l),n.appendChild(a);const s=document.createElement("div");return s.className="file-upload__list",e.appendChild(n),e.appendChild(s),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},W={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("div");e.className="file-upload";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.accept=".pdf,.doc,.docx",l.multiple=!0;const a=document.createElement("div");a.className="file-upload__content";const c=C("file-text"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Upload documents";const i=document.createElement("span");i.className="file-upload__subtext",i.textContent="Only PDF and DOC files allowed",a.appendChild(c),a.appendChild(o),a.appendChild(i),n.appendChild(l),n.appendChild(a);const s=document.createElement("div");s.className="file-upload__constraints",s.textContent="Accepted: PDF, DOC, DOCX - Max 5MB";const u=document.createElement("div");return u.className="file-upload__list",e.appendChild(n),e.appendChild(s),e.appendChild(u),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},L={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("div");e.className="file-upload";const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.multiple=!0;const a=document.createElement("div");a.className="file-upload__content";const c=C("upload-cloud"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Upload with progress tracking";const i=document.createElement("span");i.className="file-upload__subtext",i.textContent="Simulates upload with progress bar",a.appendChild(c),a.appendChild(o),a.appendChild(i),n.appendChild(l),n.appendChild(a);const s=document.createElement("div");return s.className="file-upload__list",e.appendChild(n),e.appendChild(s),t.appendChild(e),setTimeout(()=>{x(e),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},M={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="400px";const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="var(--space-4)";const n=document.createElement("div");n.style.width="120px",n.style.height="120px",n.style.borderRadius="50%",n.style.background="var(--color-bg-tertiary)",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.overflow="hidden",n.id="avatar-preview";const l=document.createElement("i");l.setAttribute("data-lucide","user"),l.style.width="48px",l.style.height="48px",l.style.color="var(--color-text-tertiary)",n.appendChild(l);const a=document.createElement("div"),c=document.createElement("input");c.type="file",c.id="avatar-upload-input",c.accept="image/*",c.style.display="none";const o=document.createElement("label");o.htmlFor="avatar-upload-input",o.className="btn btn-primary",o.style.cursor="pointer";const i=document.createElement("i");return i.setAttribute("data-lucide","camera"),o.appendChild(i),o.appendChild(document.createTextNode(" Change Avatar")),c.addEventListener("change",s=>{var b;const m=(b=s.target.files)==null?void 0:b[0];if(m&&m.type.startsWith("image/")){const d=new FileReader;d.onload=r=>{var p;n.innerHTML=`<img src="${(p=r.target)==null?void 0:p.result}" style="width: 100%; height: 100%; object-fit: cover;" alt="Avatar preview">`},d.readAsDataURL(m)}}),a.appendChild(c),a.appendChild(o),e.appendChild(n),e.appendChild(a),t.appendChild(e),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},P={render:()=>{const t=document.createElement("div");t.style.padding="2rem",t.style.maxWidth="600px";const e=document.createElement("form");e.style.display="flex",e.style.flexDirection="column",e.style.gap="var(--space-4)";const n=document.createElement("div");n.className="form-group";const l=document.createElement("label");l.className="label",l.textContent="Project Name";const a=document.createElement("input");a.type="text",a.className="input",a.placeholder="Enter project name",n.appendChild(l),n.appendChild(a);const c=document.createElement("div");c.className="form-group";const o=document.createElement("label");o.className="label",o.textContent="Project Files";const i=document.createElement("div");i.className="file-upload";const s=document.createElement("label");s.className="file-upload__zone";const u=document.createElement("input");u.type="file",u.className="file-upload__input",u.multiple=!0;const m=document.createElement("div");m.className="file-upload__content";const b=C("folder-up"),d=document.createElement("span");d.className="file-upload__text",d.textContent="Upload project files";const r=document.createElement("span");r.className="file-upload__subtext",r.textContent="All file types accepted",m.appendChild(b),m.appendChild(d),m.appendChild(r),s.appendChild(u),s.appendChild(m);const p=document.createElement("div");p.className="file-upload__list",i.appendChild(s),i.appendChild(p),c.appendChild(o),c.appendChild(i);const f=document.createElement("div"),_=document.createElement("button");return _.type="submit",_.className="btn btn-primary",_.textContent="Submit Project",f.appendChild(_),e.appendChild(n),e.appendChild(c),e.appendChild(f),t.appendChild(e),setTimeout(()=>{x(i),typeof window.lucide<"u"&&window.lucide.createIcons()},0),t}},B={render:t=>we(()=>{const e=document.createElement("div");e.className=`file-upload${t.size?` file-upload--${t.size}`:""}`;const n=document.createElement("label");n.className="file-upload__zone";const l=document.createElement("input");l.type="file",l.className="file-upload__input",l.multiple=t.multiple??!0,t.accept&&(l.accept=t.accept);const a=document.createElement("div");a.className="file-upload__content";const c=C("upload"),o=document.createElement("span");o.className="file-upload__text",o.textContent="Drop files or browse",a.appendChild(c),a.appendChild(o),n.appendChild(l),n.appendChild(a);const i=document.createElement("div");return i.className="file-upload__list",e.appendChild(n),e.appendChild(i),e}),args:{accept:"",multiple:!0,size:"md"},argTypes:{accept:{control:"text",description:"Accepted file types"},multiple:{control:"boolean",description:"Allow multiple files"},size:{control:"select",options:["sm","md","lg"],description:"Upload zone size"}}};var j,O,R;U.parameters={...U.parameters,docs:{...(j=U.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = \`file-upload\${args.size ? \` file-upload--\${args.size}\` : ''}\${args.variant !== 'default' ? \` file-upload--\${args.variant}\` : ''}\`;
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = args.multiple ?? true;
    input.disabled = args.disabled ?? false;
    if (args.accept) {
      input.accept = args.accept;
    }
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('upload');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Drop files here or click to browse';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = args.multiple ? 'Support for multiple files' : 'Single file upload';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    if (args.maxSize) {
      const constraints = document.createElement('div');
      constraints.className = 'file-upload__constraints';
      constraints.textContent = \`Maximum file size: \${args.maxSize}\`;
      fileUpload.appendChild(constraints);
    }
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);

    // Initialize functionality and Lucide icons
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  },
  args: {
    accept: '',
    multiple: true,
    disabled: false,
    maxSize: '',
    dragDrop: true,
    showPreview: true,
    size: 'md',
    variant: 'default'
  }
}`,...(R=(O=U.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var H,q,X;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = 'image/*';
    input.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('image');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Drop images here or click to browse';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'PNG, JPG, GIF up to 10MB';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);
    const constraints = document.createElement('div');
    constraints.className = 'file-upload__constraints';
    constraints.textContent = 'Maximum file size: 10MB';
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(constraints);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);

    // Initialize functionality and Lucide icons
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(X=(q=I.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var V,J,K;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--sm';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('upload');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Small upload zone';
    content.appendChild(icon);
    content.appendChild(text);
    zone.appendChild(input);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(K=(J=F.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--lg';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('upload');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Large upload zone';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Prominent display for primary upload actions';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--button';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('upload');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Choose Files';
    content.appendChild(icon);
    content.appendChild(text);
    zone.appendChild(input);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(ne=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,le,oe;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload file-upload--image-grid';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = 'image/*';
    input.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('image');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload Images';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Display as grid';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(oe=(le=T.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,de,ce;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    // No multiple attribute - single file only

    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('file-text');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload a single file';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'PDF, DOC, DOCX up to 5MB';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(ce=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var se,pe,re;W.parameters={...W.parameters,docs:{...(se=W.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.accept = '.pdf,.doc,.docx';
    input.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('file-text');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload documents';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Only PDF and DOC files allowed';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);
    const constraints = document.createElement('div');
    constraints.className = 'file-upload__constraints';
    constraints.textContent = 'Accepted: PDF, DOC, DOCX - Max 5MB';
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(constraints);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(re=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:re.source}}};var ue,me,fe;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'file-upload__input';
    input.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('upload-cloud');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload with progress tracking';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'Simulates upload with progress bar';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);
    container.appendChild(fileUpload);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(fe=(me=L.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var _e,he,Ce;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '400px';
    const avatarContainer = document.createElement('div');
    avatarContainer.style.display = 'flex';
    avatarContainer.style.alignItems = 'center';
    avatarContainer.style.gap = 'var(--space-4)';
    const preview = document.createElement('div');
    preview.style.width = '120px';
    preview.style.height = '120px';
    preview.style.borderRadius = '50%';
    preview.style.background = 'var(--color-bg-tertiary)';
    preview.style.display = 'flex';
    preview.style.alignItems = 'center';
    preview.style.justifyContent = 'center';
    preview.style.overflow = 'hidden';
    preview.id = 'avatar-preview';
    const userIcon = document.createElement('i');
    userIcon.setAttribute('data-lucide', 'user');
    userIcon.style.width = '48px';
    userIcon.style.height = '48px';
    userIcon.style.color = 'var(--color-text-tertiary)';
    preview.appendChild(userIcon);
    const uploadSection = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'file';
    input.id = 'avatar-upload-input';
    input.accept = 'image/*';
    input.style.display = 'none';
    const label = document.createElement('label');
    label.htmlFor = 'avatar-upload-input';
    label.className = 'btn btn-primary';
    label.style.cursor = 'pointer';
    const cameraIcon = document.createElement('i');
    cameraIcon.setAttribute('data-lucide', 'camera');
    label.appendChild(cameraIcon);
    label.appendChild(document.createTextNode(' Change Avatar'));

    // Handle avatar preview
    input.addEventListener('change', e => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = e => {
          preview.innerHTML = \`<img src="\${e.target?.result}" style="width: 100%; height: 100%; object-fit: cover;" alt="Avatar preview">\`;
        };
        reader.readAsDataURL(file);
      }
    });
    uploadSection.appendChild(input);
    uploadSection.appendChild(label);
    avatarContainer.appendChild(preview);
    avatarContainer.appendChild(uploadSection);
    container.appendChild(avatarContainer);

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(Ce=(he=M.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var xe,Ee,ve;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = 'var(--space-4)';

    // Project Name Field
    const formGroup1 = document.createElement('div');
    formGroup1.className = 'form-group';
    const label1 = document.createElement('label');
    label1.className = 'label';
    label1.textContent = 'Project Name';
    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.className = 'input';
    input1.placeholder = 'Enter project name';
    formGroup1.appendChild(label1);
    formGroup1.appendChild(input1);

    // File Upload Field
    const formGroup2 = document.createElement('div');
    formGroup2.className = 'form-group';
    const label2 = document.createElement('label');
    label2.className = 'label';
    label2.textContent = 'Project Files';
    const fileUpload = document.createElement('div');
    fileUpload.className = 'file-upload';
    const zone = document.createElement('label');
    zone.className = 'file-upload__zone';
    const input2 = document.createElement('input');
    input2.type = 'file';
    input2.className = 'file-upload__input';
    input2.multiple = true;
    const content = document.createElement('div');
    content.className = 'file-upload__content';
    const icon = createIcon('folder-up');
    const text = document.createElement('span');
    text.className = 'file-upload__text';
    text.textContent = 'Upload project files';
    const subtext = document.createElement('span');
    subtext.className = 'file-upload__subtext';
    subtext.textContent = 'All file types accepted';
    content.appendChild(icon);
    content.appendChild(text);
    content.appendChild(subtext);
    zone.appendChild(input2);
    zone.appendChild(content);
    const list = document.createElement('div');
    list.className = 'file-upload__list';
    fileUpload.appendChild(zone);
    fileUpload.appendChild(list);
    formGroup2.appendChild(label2);
    formGroup2.appendChild(fileUpload);

    // Submit Button
    const submitDiv = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn btn-primary';
    submitBtn.textContent = 'Submit Project';
    submitDiv.appendChild(submitBtn);
    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(submitDiv);
    container.appendChild(form);
    setTimeout(() => {
      initFileUpload(fileUpload);
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);
    return container;
  }
}`,...(ve=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var ye,Ne,be;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const fileUpload = document.createElement('div');
      fileUpload.className = \`file-upload\${args.size ? \` file-upload--\${args.size}\` : ''}\`;
      const zone = document.createElement('label');
      zone.className = 'file-upload__zone';
      const input = document.createElement('input');
      input.type = 'file';
      input.className = 'file-upload__input';
      input.multiple = args.multiple ?? true;
      if (args.accept) {
        input.accept = args.accept;
      }
      const content = document.createElement('div');
      content.className = 'file-upload__content';
      const icon = createIcon('upload');
      const text = document.createElement('span');
      text.className = 'file-upload__text';
      text.textContent = 'Drop files or browse';
      content.appendChild(icon);
      content.appendChild(text);
      zone.appendChild(input);
      zone.appendChild(content);
      const list = document.createElement('div');
      list.className = 'file-upload__list';
      fileUpload.appendChild(zone);
      fileUpload.appendChild(list);
      return fileUpload;
    });
  },
  args: {
    accept: '',
    multiple: true,
    size: 'md'
  },
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types'
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple files'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Upload zone size'
    }
  }
}`,...(be=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:be.source}}};const Fe=["Default","ImageUploadWithPreview","SmallSize","LargeSize","ButtonStyle","ImageGrid","SingleFileUpload","WithFileTypeRestrictions","WithUploadProgress","AvatarUpload","FormIntegration","ThemeComparison"];export{M as AvatarUpload,D as ButtonStyle,U as Default,P as FormIntegration,T as ImageGrid,I as ImageUploadWithPreview,S as LargeSize,A as SingleFileUpload,F as SmallSize,B as ThemeComparison,W as WithFileTypeRestrictions,L as WithUploadProgress,Fe as __namedExportsOrder,Ie as default};
