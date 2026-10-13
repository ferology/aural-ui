const V={title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:"Temporary notification messages that appear at the corner of the screen. Toasts provide brief feedback for user actions and status updates."}}},argTypes:{message:{control:"text",description:"The message to display in the toast"},type:{control:"select",options:["success","error","warning","info"],description:"Toast type: success, error, warning, or info"},title:{control:"text",description:"Optional custom title (defaults to type name)"},duration:{control:{type:"range",min:0,max:1e4,step:1e3},description:"Auto-dismiss duration in milliseconds (0 = persistent, default: 5000)"}}},a={render:e=>{const n=document.createElement("div");n.style.padding="2rem";const t=document.createElement("button");return t.className="btn btn-success",t.textContent="Show Success Toast",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast(e.message,e.type,e.title,e.duration)},n.appendChild(t),n},args:{message:"Your changes have been saved successfully!",type:"success",title:"Success",duration:3e3}},r={render:e=>{const n=document.createElement("div");n.style.padding="2rem";const t=document.createElement("button");return t.className="btn btn-error",t.textContent="Show Error Toast",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast(e.message,e.type,e.title,e.duration)},n.appendChild(t),n},args:{message:"Couldn't save changes. Try again.",type:"error",title:"Error",duration:3e3}},i={render:e=>{const n=document.createElement("div");n.style.padding="2rem";const t=document.createElement("button");return t.className="btn btn-warning",t.textContent="Show Warning Toast",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast(e.message,e.type,e.title,e.duration)},n.appendChild(t),n},args:{message:"Your session will expire in 5 minutes.",type:"warning",title:"Warning",duration:5e3}},c={render:e=>{const n=document.createElement("div");n.style.padding="2rem";const t=document.createElement("button");return t.className="btn btn-info",t.textContent="Show Info Toast",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast(e.message,e.type,e.title,e.duration)},n.appendChild(t),n},args:{message:"A new version is available. Click to update.",type:"info",title:"Info",duration:3e3}},d={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.gap="1rem",e.style.flexWrap="wrap",[{type:"success",message:"Changes saved",className:"btn-success"},{type:"error",message:"Couldn't save changes",className:"btn-error"},{type:"warning",message:"Your session expires in 5 minutes",className:"btn-warning"},{type:"info",message:"A new version is available",className:"btn-info"}].forEach(({type:t,message:y,className:g})=>{const o=document.createElement("button");o.className=`btn ${g}`,o.textContent=`${t.charAt(0).toUpperCase()+t.slice(1)} Toast`,o.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast(y,t,t.charAt(0).toUpperCase()+t.slice(1),3e3)},e.appendChild(o)}),e}},l={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.display="flex",e.style.gap="1rem",e.style.flexWrap="wrap";const n=document.createElement("button");n.className="btn btn-success",n.textContent="Success with Title",n.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast("Your profile has been updated successfully.","success","Profile Updated",4e3)};const t=document.createElement("button");return t.className="btn btn-error",t.textContent="Error with Title",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast("Check your connection, then try again.","error","Connection lost",4e3)},e.appendChild(n),e.appendChild(t),e}},u={render:()=>{const e=document.createElement("div");e.style.padding="2rem",e.style.display="flex",e.style.gap="1rem",e.style.flexWrap="wrap";const n=document.createElement("button");n.className="btn btn-secondary",n.textContent="Quick (2s)",n.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast("This is a quick message that dismisses in 2 seconds.","info","Quick Message",2e3)};const t=document.createElement("button");return t.className="btn btn-secondary",t.textContent="Long (8s)",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast("This is a longer message that stays visible for 8 seconds.","info","Extended Message",8e3)},e.appendChild(n),e.appendChild(t),e}},m={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("button");return n.className="btn btn-primary",n.textContent="Show Persistent Toast (No Auto-Dismiss)",n.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast("This toast will not auto-dismiss. Click the X button to close it.","info","Persistent Notification",0)},e.appendChild(n),e}},p={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("button");return n.className="btn btn-primary",n.textContent="Show Multiple Toasts",n.onclick=()=>{typeof window.Aural<"u"&&(window.Aural.showToast("First notification","success","Step 1",4e3),setTimeout(()=>{window.Aural.showToast("Second notification","info","Step 2",4e3)},500),setTimeout(()=>{window.Aural.showToast("Third notification","warning","Step 3",4e3)},1e3))},e.appendChild(n),e}},b={render:()=>{const e=document.createElement("div");e.style.padding="2rem";const n=document.createElement("button");return n.className="btn btn-primary",n.textContent="Show Long Message",n.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast("This is a much longer message that demonstrates how the toast component handles extended content. It should wrap properly and maintain good readability even with multiple lines of text.","info","Long Message Example",6e3)},e.appendChild(n),e}},w={render:()=>{const e=document.createElement("div");return e.style.padding="2rem",e.style.display="flex",e.style.gap="1rem",e.style.flexWrap="wrap",[{label:"Add to Cart",message:"Product added to your cart",type:"success",title:"Cart Updated",className:"btn-primary"},{label:"Copy Link",message:"Link copied to clipboard",type:"info",title:null,className:"btn-secondary"},{label:"Delete Item",message:"Item has been removed",type:"error",title:"Deleted",className:"btn-error"},{label:"Save Draft",message:"Draft saved automatically",type:"success",title:null,className:"btn-success"}].forEach(({label:t,message:y,type:g,title:o,className:R})=>{const s=document.createElement("button");s.className=`btn ${R}`,s.textContent=t,s.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showToast(y,g,o,3e3)},e.appendChild(s)}),e}};var f,h,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-success';
    button.textContent = 'Show Success Toast';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(args.message, args.type, args.title, args.duration);
      }
    };
    container.appendChild(button);
    return container;
  },
  args: {
    message: 'Your changes have been saved successfully!',
    type: 'success',
    title: 'Success',
    duration: 3000
  }
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var T,A,E;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-error';
    button.textContent = 'Show Error Toast';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(args.message, args.type, args.title, args.duration);
      }
    };
    container.appendChild(button);
    return container;
  },
  args: {
    message: "Couldn't save changes. Try again.",
    type: 'error',
    title: 'Error',
    duration: 3000
  }
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var x,v,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = 'Show Warning Toast';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(args.message, args.type, args.title, args.duration);
      }
    };
    container.appendChild(button);
    return container;
  },
  args: {
    message: 'Your session will expire in 5 minutes.',
    type: 'warning',
    title: 'Warning',
    duration: 5000
  }
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var k,S,W;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-info';
    button.textContent = 'Show Info Toast';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast(args.message, args.type, args.title, args.duration);
      }
    };
    container.appendChild(button);
    return container;
  },
  args: {
    message: 'A new version is available. Click to update.',
    type: 'info',
    title: 'Info',
    duration: 3000
  }
}`,...(W=(S=c.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var M,D,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    const toasts = [{
      type: 'success',
      message: 'Changes saved',
      className: 'btn-success'
    }, {
      type: 'error',
      message: "Couldn't save changes",
      className: 'btn-error'
    }, {
      type: 'warning',
      message: 'Your session expires in 5 minutes',
      className: 'btn-warning'
    }, {
      type: 'info',
      message: 'A new version is available',
      className: 'btn-info'
    }];
    toasts.forEach(({
      type,
      message,
      className
    }) => {
      const button = document.createElement('button');
      button.className = \`btn \${className}\`;
      button.textContent = \`\${type.charAt(0).toUpperCase() + type.slice(1)} Toast\`;
      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showToast(message, type as any, type.charAt(0).toUpperCase() + type.slice(1), 3000);
        }
      };
      container.appendChild(button);
    });
    return container;
  }
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,P,U;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    const button1 = document.createElement('button');
    button1.className = 'btn btn-success';
    button1.textContent = 'Success with Title';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('Your profile has been updated successfully.', 'success', 'Profile Updated', 4000);
      }
    };
    const button2 = document.createElement('button');
    button2.className = 'btn btn-error';
    button2.textContent = 'Error with Title';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('Check your connection, then try again.', 'error', 'Connection lost', 4000);
      }
    };
    container.appendChild(button1);
    container.appendChild(button2);
    return container;
  }
}`,...(U=(P=l.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var Y,$,Q;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    const button1 = document.createElement('button');
    button1.className = 'btn btn-secondary';
    button1.textContent = 'Quick (2s)';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('This is a quick message that dismisses in 2 seconds.', 'info', 'Quick Message', 2000);
      }
    };
    const button2 = document.createElement('button');
    button2.className = 'btn btn-secondary';
    button2.textContent = 'Long (8s)';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('This is a longer message that stays visible for 8 seconds.', 'info', 'Extended Message', 8000);
      }
    };
    container.appendChild(button1);
    container.appendChild(button2);
    return container;
  }
}`,...(Q=($=u.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var q,F,O;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Persistent Toast (No Auto-Dismiss)';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('This toast will not auto-dismiss. Click the X button to close it.', 'info', 'Persistent Notification', 0 // duration 0 = no auto-dismiss
        );
      }
    };
    container.appendChild(button);
    return container;
  }
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var X,_,j;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Multiple Toasts';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('First notification', 'success', 'Step 1', 4000);
        setTimeout(() => {
          window.Aural.showToast('Second notification', 'info', 'Step 2', 4000);
        }, 500);
        setTimeout(() => {
          window.Aural.showToast('Third notification', 'warning', 'Step 3', 4000);
        }, 1000);
      }
    };
    container.appendChild(button);
    return container;
  }
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var z,B,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Long Message';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showToast('This is a much longer message that demonstrates how the toast component handles extended content. It should wrap properly and maintain good readability even with multiple lines of text.', 'info', 'Long Message Example', 6000);
      }
    };
    container.appendChild(button);
    return container;
  }
}`,...(G=(B=b.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,J,K;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    const useCases = [{
      label: 'Add to Cart',
      message: 'Product added to your cart',
      type: 'success',
      title: 'Cart Updated',
      className: 'btn-primary'
    }, {
      label: 'Copy Link',
      message: 'Link copied to clipboard',
      type: 'info',
      title: null,
      className: 'btn-secondary'
    }, {
      label: 'Delete Item',
      message: 'Item has been removed',
      type: 'error',
      title: 'Deleted',
      className: 'btn-error'
    }, {
      label: 'Save Draft',
      message: 'Draft saved automatically',
      type: 'success',
      title: null,
      className: 'btn-success'
    }];
    useCases.forEach(({
      label,
      message,
      type,
      title,
      className
    }) => {
      const button = document.createElement('button');
      button.className = \`btn \${className}\`;
      button.textContent = label;
      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showToast(message, type as any, title, 3000);
        }
      };
      container.appendChild(button);
    });
    return container;
  }
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Z=["Success","Error","Warning","Info","AllTypes","WithTitle","CustomDuration","Persistent","MultipleToasts","LongMessage","CommonUseCases"];export{d as AllTypes,w as CommonUseCases,u as CustomDuration,r as Error,c as Info,b as LongMessage,p as MultipleToasts,m as Persistent,a as Success,i as Warning,l as WithTitle,Z as __namedExportsOrder,V as default};
