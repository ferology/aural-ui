import{c as Te}from"./createThemeGrid-DWAncU4Q.js";const Le={title:"Components/Forms/Color Picker",tags:["autodocs"],parameters:{docs:{description:{component:`
# Color Picker Component

A comprehensive color selection component with visual pickers, multiple input modes (HEX/RGB/HSL), preset colors, and alpha channel support.

Perfect for design tools, theme customizers, and any application requiring precise color selection.

See the **Documentation** tab for complete framework examples and accessibility guidelines.
        `.trim()}}},argTypes:{value:{control:"color",description:"Current color value"},format:{control:"select",options:["hex","rgb","hsl"],description:"Color format for input/output"},showAlpha:{control:"boolean",description:"Show alpha/opacity control"},showInput:{control:"boolean",description:"Show manual text input"},showPresets:{control:"boolean",description:"Show preset color swatches"},compact:{control:"boolean",description:"Use compact variant"},disabled:{control:"boolean",description:"Disabled state"}}};function h(e){const r=document.createElement("div");r.style.cssText="padding: 2rem; max-width: 320px;";const a=document.createElement("div");a.className="aural-color-picker",e.compact&&a.classList.add("aural-color-picker--compact"),e.disabled&&a.classList.add("aural-color-picker--disabled");const m=`color-picker-${Math.random().toString(36).substr(2,9)}`;a.id=m;const o=document.createElement("div");o.className="aural-color-picker__preview";const l=document.createElement("div");l.className="aural-color-picker__swatch";const i=document.createElement("div");i.className="aural-color-picker__swatch-color",l.appendChild(i);const f=document.createElement("input");f.type="text",f.className="aural-color-picker__value",f.value=e.value||"#F00054",f.readOnly=!0,o.appendChild(l),e.showInput!==!1&&o.appendChild(f),a.appendChild(o);const v=document.createElement("div");v.className="aural-color-picker__canvas";const _=document.createElement("div");_.className="aural-color-picker__saturation";const w=document.createElement("div");w.className="aural-color-picker__lightness";const E=document.createElement("div");E.className="aural-color-picker__cursor",v.appendChild(_),v.appendChild(w),v.appendChild(E),a.appendChild(v);const g=document.createElement("div");g.className="aural-color-picker__hue";const k=document.createElement("div");if(k.className="aural-color-picker__hue-handle",g.appendChild(k),a.appendChild(g),e.showAlpha){const d=document.createElement("div");d.className="aural-color-picker__alpha";const C=document.createElement("div");C.className="aural-color-picker__alpha-gradient";const c=document.createElement("div");c.className="aural-color-picker__alpha-handle",d.appendChild(C),d.appendChild(c),a.appendChild(d)}if(!e.compact){const d=document.createElement("div");d.className="aural-color-picker__modes",["hex","rgb","hsl"].forEach(u=>{const n=document.createElement("button");n.type="button",n.className="aural-color-picker__mode",e.format===u&&n.classList.add("aural-color-picker__mode--active"),n.setAttribute("data-mode",u),n.textContent=u.toUpperCase(),n.disabled=e.disabled||!1,d.appendChild(n)}),a.appendChild(d);const c=document.createElement("div");if(c.className="aural-color-picker__inputs",c.setAttribute("data-mode",e.format),e.format==="hex"){const u=document.createElement("div");u.className="aural-color-picker__input-group";const n=document.createElement("label");n.className="aural-color-picker__input-label",n.textContent="Hex";const p=document.createElement("input");p.type="text",p.className="aural-color-picker__input",p.value=(e.value||"#F00054").replace("#",""),p.maxLength=6,p.disabled=e.disabled||!1,u.appendChild(n),u.appendChild(p),c.appendChild(u)}else e.format==="rgb"?(c.classList.add("aural-color-picker__inputs--rgba"),(e.showAlpha?[{name:"R",value:"240",max:"255"},{name:"G",value:"0",max:"255"},{name:"B",value:"84",max:"255"},{name:"A",value:"100",max:"100"}]:[{name:"R",value:"240",max:"255"},{name:"G",value:"0",max:"255"},{name:"B",value:"84",max:"255"}]).forEach(n=>{const p=document.createElement("div");p.className="aural-color-picker__input-group";const s=document.createElement("label");s.className="aural-color-picker__input-label",s.textContent=n.name;const t=document.createElement("input");t.type="number",t.className="aural-color-picker__input",t.value=n.value,t.min="0",t.max=n.max,t.disabled=e.disabled||!1,p.appendChild(s),p.appendChild(t),c.appendChild(p)})):e.format==="hsl"&&(c.classList.add("aural-color-picker__inputs--hsla"),(e.showAlpha?[{name:"H",value:"340",max:"360"},{name:"S",value:"100",max:"100"},{name:"L",value:"47",max:"100"},{name:"A",value:"100",max:"100"}]:[{name:"H",value:"340",max:"360"},{name:"S",value:"100",max:"100"},{name:"L",value:"47",max:"100"}]).forEach(n=>{const p=document.createElement("div");p.className="aural-color-picker__input-group";const s=document.createElement("label");s.className="aural-color-picker__input-label",s.textContent=n.name;const t=document.createElement("input");t.type="number",t.className="aural-color-picker__input",t.value=n.value,t.min="0",t.max=n.max,t.disabled=e.disabled||!1,p.appendChild(s),p.appendChild(t),c.appendChild(p)}));a.appendChild(c)}if(e.showPresets!==!1&&!e.compact){const d=document.createElement("div");d.className="aural-color-picker__presets";const C=document.createElement("div");C.className="aural-color-picker__preset-label",C.textContent="Presets";const c=document.createElement("div");c.className="aural-color-picker__preset-grid",["#f00054","#22c55e","#3b82f6","#f59e0b","#ef4444","#8b5cf6","#ec4899","#14b8a6"].forEach((n,p)=>{const s=document.createElement("button");s.type="button",s.className="aural-color-picker__preset",s.disabled=e.disabled||!1,e.value===n&&s.classList.add("aural-color-picker__preset--active");const t=document.createElement("div");t.className="aural-color-picker__preset-color",t.style.background=n,s.appendChild(t),c.appendChild(s)}),d.appendChild(C),d.appendChild(c),a.appendChild(d)}return r.appendChild(a),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initColorPicker&&window.Aural.initColorPicker(m,{color:e.value||"#F00054",alpha:e.showAlpha||!1,mode:e.format||"hex",presets:e.showPresets!==!1?["#f00054","#22c55e","#3b82f6","#f59e0b","#ef4444","#8b5cf6","#ec4899","#14b8a6"]:void 0,compact:e.compact||!1,onChange:d=>console.log("Color changed:",d)})},0),r}const x={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1}},N={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!0,showInput:!0,showPresets:!0,compact:!1,disabled:!1}},P={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},y={render:e=>h(e),args:{value:"#3B82F6",format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},F={render:e=>h(e),args:{value:"#22C55E",format:"rgb",showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},A={render:e=>h(e),args:{value:"#F59E0B",format:"hsl",showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1}},T={render:e=>h(e),args:{value:"#8B5CF6",format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!0,disabled:!1}},I={render:e=>h(e),args:{value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1}},L={render:e=>h(e),args:{value:"#EC4899",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!0}},S={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 600px;";const r=document.createElement("h3");r.textContent="Theme Customizer",r.style.cssText="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600;";const a=document.createElement("div");return a.style.cssText="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;",[{label:"Primary Color",value:"#F00054"},{label:"Background",value:"#1A1A1A"},{label:"Text Color",value:"#FFFFFF"}].forEach(o=>{const l=document.createElement("div"),i=document.createElement("label");i.style.cssText="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;",i.textContent=o.label;const f=h({value:o.value,format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!0,disabled:!1});l.appendChild(i),l.appendChild(f),a.appendChild(l)}),e.appendChild(r),e.appendChild(a),e}},B={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 400px;";const r=document.createElement("h3");r.textContent="Brand Color Palette",r.style.cssText="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;";const a=document.createElement("p");a.textContent="Select from approved brand colors or create custom colors for your design.",a.style.cssText="margin: 0 0 1.5rem 0; color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.5;";const m=h({value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1});return e.appendChild(r),e.appendChild(a),e.appendChild(m),e}},H={render:()=>{const e=document.createElement("div");return e.style.cssText="padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 1000px;",[{format:"hex",label:"HEX Format",value:"#F00054"},{format:"rgb",label:"RGB Format",value:"#22C55E"},{format:"hsl",label:"HSL Format",value:"#3B82F6"}].forEach(({format:a,label:m,value:o})=>{const l=document.createElement("div"),i=document.createElement("h4");i.textContent=m,i.style.cssText="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;";const f=h({value:o,format:a,showAlpha:!0,showInput:!0,showPresets:!1,compact:!1,disabled:!1});l.appendChild(i),l.appendChild(f),e.appendChild(l)}),e}},G={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; max-width: 320px;";const r=document.createElement("div");r.className="aural-color-picker",r.id="color-picker-recent";const a=document.createElement("div");a.className="aural-color-picker__preview";const m=document.createElement("div");m.className="aural-color-picker__swatch";const o=document.createElement("div");o.className="aural-color-picker__swatch-color",m.appendChild(o);const l=document.createElement("input");l.type="text",l.className="aural-color-picker__value",l.value="#8B5CF6",l.readOnly=!0,a.appendChild(m),a.appendChild(l),r.appendChild(a);const i=document.createElement("div");i.className="aural-color-picker__canvas";const f=document.createElement("div");f.className="aural-color-picker__saturation";const v=document.createElement("div");v.className="aural-color-picker__lightness";const _=document.createElement("div");_.className="aural-color-picker__cursor",i.appendChild(f),i.appendChild(v),i.appendChild(_),r.appendChild(i);const w=document.createElement("div");w.className="aural-color-picker__hue";const E=document.createElement("div");E.className="aural-color-picker__hue-handle",w.appendChild(E),r.appendChild(w);const g=document.createElement("div");g.className="aural-color-picker__presets";const k=document.createElement("div");k.className="aural-color-picker__preset-label",k.textContent="Presets";const d=document.createElement("div");d.className="aural-color-picker__preset-grid";const C=["#f00054","#22c55e","#3b82f6","#f59e0b"];C.forEach(s=>{const t=document.createElement("button");t.className="aural-color-picker__preset";const b=document.createElement("div");b.className="aural-color-picker__preset-color",b.style.background=s,t.appendChild(b),d.appendChild(t)}),g.appendChild(k),g.appendChild(d),r.appendChild(g);const c=document.createElement("div");c.className="aural-color-picker__recent";const u=document.createElement("div");u.className="aural-color-picker__recent-label",u.textContent="Recent";const n=document.createElement("div");return n.className="aural-color-picker__recent-grid",["#8b5cf6","#ec4899","#14b8a6","#ef4444"].forEach(s=>{const t=document.createElement("button");t.className="aural-color-picker__preset";const b=document.createElement("div");b.className="aural-color-picker__preset-color",b.style.background=s,t.appendChild(b),n.appendChild(t)}),c.appendChild(u),c.appendChild(n),r.appendChild(c),e.appendChild(r),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initColorPicker&&window.Aural.initColorPicker("color-picker-recent",{color:"#8B5CF6",presets:C,recentColors:!0,onChange:s=>console.log("Recent picker color changed:",s)})},0),e}},z={render:()=>{const e=document.createElement("div");e.style.cssText="padding: 2rem; position: relative;";const r=document.createElement("button");r.className="aural-color-picker-trigger",r.id="color-trigger";const a=document.createElement("div");a.className="aural-color-picker-trigger__swatch",a.style.setProperty("--color-value","#EC4899");const m=document.createElement("span");m.className="aural-color-picker-trigger__label",m.textContent="Choose Color",r.appendChild(a),r.appendChild(m);const o=document.createElement("div");o.className="aural-color-picker-popover",o.id="color-popover";const l=h({value:"#EC4899",format:"hex",showAlpha:!1,showInput:!0,showPresets:!1,compact:!1,disabled:!1});return o.appendChild(l.firstChild),e.appendChild(r),e.appendChild(o),setTimeout(()=>{r.addEventListener("click",()=>{o.classList.toggle("aural-color-picker-popover--open")}),document.addEventListener("click",i=>{!r.contains(i.target)&&!o.contains(i.target)&&o.classList.remove("aural-color-picker-popover--open")})},0),e}},R={render:e=>Te(()=>h(e)),args:{value:"#F00054",format:"hex",showAlpha:!1,showInput:!0,showPresets:!0,compact:!1,disabled:!1}};var D,W,O;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
}`,...(O=(W=x.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var X,M,U;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
}`,...(U=(M=N.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var q,$,j;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(j=($=P.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#3B82F6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,Y,Z;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#22C55E',
    format: 'rgb',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(Z=(Y=F.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F59E0B',
    format: 'hsl',
    showAlpha: true,
    showInput: true,
    showPresets: false,
    compact: false,
    disabled: false
  }
}`,...(re=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,oe;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#8B5CF6',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: false,
    compact: true,
    disabled: false
  }
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,se,le;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
}`,...(le=(se=I.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,de,pe;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => createColorPicker(args),
  args: {
    value: '#EC4899',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: true
  }
}`,...(pe=(de=L.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 600px;';
    const title = document.createElement('h3');
    title.textContent = 'Theme Customizer';
    title.style.cssText = 'margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600;';
    const grid = document.createElement('div');
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;';
    const colors = [{
      label: 'Primary Color',
      value: '#F00054'
    }, {
      label: 'Background',
      value: '#1A1A1A'
    }, {
      label: 'Text Color',
      value: '#FFFFFF'
    }];
    colors.forEach(color => {
      const group = document.createElement('div');
      const label = document.createElement('label');
      label.style.cssText = 'display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;';
      label.textContent = color.label;
      const picker = createColorPicker({
        value: color.value,
        format: 'hex',
        showAlpha: false,
        showInput: true,
        showPresets: false,
        compact: true,
        disabled: false
      });
      group.appendChild(label);
      group.appendChild(picker);
      grid.appendChild(group);
    });
    container.appendChild(title);
    container.appendChild(grid);
    return container;
  }
}`,...(he=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var fe,Ce,ve;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 400px;';
    const title = document.createElement('h3');
    title.textContent = 'Brand Color Palette';
    title.style.cssText = 'margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 600;';
    const description = document.createElement('p');
    description.textContent = 'Select from approved brand colors or create custom colors for your design.';
    description.style.cssText = 'margin: 0 0 1.5rem 0; color: var(--color-text-secondary); font-size: 0.875rem; line-height: 1.5;';
    const picker = createColorPicker({
      value: '#F00054',
      format: 'hex',
      showAlpha: false,
      showInput: true,
      showPresets: true,
      compact: false,
      disabled: false
    });
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(picker);
    return container;
  }
}`,...(ve=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var ge,be,we;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 1000px;';
    const formats = [{
      format: 'hex',
      label: 'HEX Format',
      value: '#F00054'
    }, {
      format: 'rgb',
      label: 'RGB Format',
      value: '#22C55E'
    }, {
      format: 'hsl',
      label: 'HSL Format',
      value: '#3B82F6'
    }];
    formats.forEach(({
      format,
      label,
      value
    }) => {
      const section = document.createElement('div');
      const heading = document.createElement('h4');
      heading.textContent = label;
      heading.style.cssText = 'margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;';
      const picker = createColorPicker({
        value,
        format: format as 'hex' | 'rgb' | 'hsl',
        showAlpha: true,
        showInput: true,
        showPresets: false,
        compact: false,
        disabled: false
      });
      section.appendChild(heading);
      section.appendChild(picker);
      container.appendChild(section);
    });
    return container;
  }
}`,...(we=(be=H.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ke,_e,Ee;G.parameters={...G.parameters,docs:{...(ke=G.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; max-width: 320px;';
    const picker = document.createElement('div');
    picker.className = 'aural-color-picker';
    picker.id = 'color-picker-recent';

    // Preview
    const preview = document.createElement('div');
    preview.className = 'aural-color-picker__preview';
    const swatch = document.createElement('div');
    swatch.className = 'aural-color-picker__swatch';
    const swatchColor = document.createElement('div');
    swatchColor.className = 'aural-color-picker__swatch-color';
    swatch.appendChild(swatchColor);
    const valueInput = document.createElement('input');
    valueInput.type = 'text';
    valueInput.className = 'aural-color-picker__value';
    valueInput.value = '#8B5CF6';
    valueInput.readOnly = true;
    preview.appendChild(swatch);
    preview.appendChild(valueInput);
    picker.appendChild(preview);

    // Canvas
    const canvas = document.createElement('div');
    canvas.className = 'aural-color-picker__canvas';
    const saturation = document.createElement('div');
    saturation.className = 'aural-color-picker__saturation';
    const lightness = document.createElement('div');
    lightness.className = 'aural-color-picker__lightness';
    const cursor = document.createElement('div');
    cursor.className = 'aural-color-picker__cursor';
    canvas.appendChild(saturation);
    canvas.appendChild(lightness);
    canvas.appendChild(cursor);
    picker.appendChild(canvas);

    // Hue
    const hue = document.createElement('div');
    hue.className = 'aural-color-picker__hue';
    const hueHandle = document.createElement('div');
    hueHandle.className = 'aural-color-picker__hue-handle';
    hue.appendChild(hueHandle);
    picker.appendChild(hue);

    // Presets
    const presets = document.createElement('div');
    presets.className = 'aural-color-picker__presets';
    const presetLabel = document.createElement('div');
    presetLabel.className = 'aural-color-picker__preset-label';
    presetLabel.textContent = 'Presets';
    const presetGrid = document.createElement('div');
    presetGrid.className = 'aural-color-picker__preset-grid';
    const presetColors = ['#f00054', '#22c55e', '#3b82f6', '#f59e0b'];
    presetColors.forEach(color => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      const presetColor = document.createElement('div');
      presetColor.className = 'aural-color-picker__preset-color';
      presetColor.style.background = color;
      button.appendChild(presetColor);
      presetGrid.appendChild(button);
    });
    presets.appendChild(presetLabel);
    presets.appendChild(presetGrid);
    picker.appendChild(presets);

    // Recent colors
    const recent = document.createElement('div');
    recent.className = 'aural-color-picker__recent';
    const recentLabel = document.createElement('div');
    recentLabel.className = 'aural-color-picker__recent-label';
    recentLabel.textContent = 'Recent';
    const recentGrid = document.createElement('div');
    recentGrid.className = 'aural-color-picker__recent-grid';
    const recentColors = ['#8b5cf6', '#ec4899', '#14b8a6', '#ef4444'];
    recentColors.forEach(color => {
      const button = document.createElement('button');
      button.className = 'aural-color-picker__preset';
      const recentColor = document.createElement('div');
      recentColor.className = 'aural-color-picker__preset-color';
      recentColor.style.background = color;
      button.appendChild(recentColor);
      recentGrid.appendChild(button);
    });
    recent.appendChild(recentLabel);
    recent.appendChild(recentGrid);
    picker.appendChild(recent);
    container.appendChild(picker);

    // Initialize
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initColorPicker) {
        (window as any).Aural.initColorPicker('color-picker-recent', {
          color: '#8B5CF6',
          presets: presetColors,
          recentColors: true,
          onChange: (color: string) => console.log('Recent picker color changed:', color)
        });
      }
    }, 0);
    return container;
  }
}`,...(Ee=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var xe,Ne,Pe;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; position: relative;';
    const trigger = document.createElement('button');
    trigger.className = 'aural-color-picker-trigger';
    trigger.id = 'color-trigger';
    const triggerSwatch = document.createElement('div');
    triggerSwatch.className = 'aural-color-picker-trigger__swatch';
    triggerSwatch.style.setProperty('--color-value', '#EC4899');
    const triggerLabel = document.createElement('span');
    triggerLabel.className = 'aural-color-picker-trigger__label';
    triggerLabel.textContent = 'Choose Color';
    trigger.appendChild(triggerSwatch);
    trigger.appendChild(triggerLabel);
    const popover = document.createElement('div');
    popover.className = 'aural-color-picker-popover';
    popover.id = 'color-popover';
    const picker = createColorPicker({
      value: '#EC4899',
      format: 'hex',
      showAlpha: false,
      showInput: true,
      showPresets: false,
      compact: false,
      disabled: false
    });
    popover.appendChild(picker.firstChild as HTMLElement);
    container.appendChild(trigger);
    container.appendChild(popover);

    // Add click handler
    setTimeout(() => {
      trigger.addEventListener('click', () => {
        popover.classList.toggle('aural-color-picker-popover--open');
      });
      document.addEventListener('click', e => {
        if (!trigger.contains(e.target as Node) && !popover.contains(e.target as Node)) {
          popover.classList.remove('aural-color-picker-popover--open');
        }
      });
    }, 0);
    return container;
  }
}`,...(Pe=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var ye,Fe,Ae;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      return createColorPicker(args);
    });
  },
  args: {
    value: '#F00054',
    format: 'hex',
    showAlpha: false,
    showInput: true,
    showPresets: true,
    compact: false,
    disabled: false
  }
}`,...(Ae=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};const Se=["Default","FullFeatured","WithAlpha","HexFormat","RgbFormat","HslFormat","Compact","WithPresets","Disabled","ThemePicker","BrandColors","AllFormats","WithRecentColors","PopoverTrigger","ThemeComparison"];export{H as AllFormats,B as BrandColors,T as Compact,x as Default,L as Disabled,N as FullFeatured,y as HexFormat,A as HslFormat,z as PopoverTrigger,F as RgbFormat,R as ThemeComparison,S as ThemePicker,P as WithAlpha,I as WithPresets,G as WithRecentColors,Se as __namedExportsOrder,Le as default};
