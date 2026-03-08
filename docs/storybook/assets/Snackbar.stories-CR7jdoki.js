import{c as H}from"./createThemeGrid-DWAncU4Q.js";const j={title:"Components/Snackbar",tags:["autodocs"],parameters:{docs:{description:{component:`
# Snackbar Component

Brief messages with optional actions, appearing at the edge of the screen. Snackbars provide feedback about an operation and can include action buttons.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Key Differences: Snackbar vs Toast

- **Snackbars** can include action buttons (Undo, Retry, View, etc.)
- **Snackbars** typically appear at the bottom of the screen
- **Toasts** are purely informational without actions
- **Toasts** typically appear at the top corners

Use snackbars when undo/retry actions are helpful for the user.

## JavaScript API

The Aural UI library provides a convenient API for showing snackbars:

\`\`\`javascript
// Basic snackbar
Aural.showSnackbar('This is a default snackbar message');

// Success snackbar
Aural.showSnackbar('Operation completed successfully!', { type: 'success' });

// Error snackbar
Aural.showSnackbar('An error occurred!', { type: 'error' });

// With action button
Aural.showSnackbar('New message received', {
  description: 'From John Doe',
  type: 'info',
  action: { label: 'View', onClick: () => alert('Viewing message') }
});

// Custom position
Aural.showSnackbar('Bottom Left', { position: 'bottom-left' });

// Custom duration
Aural.showSnackbar('Quick message (2s)', { duration: 2000 });
\`\`\`

## Options

- \`type\` - 'default', 'success', 'error', 'warning', 'info'
- \`description\` - Additional details
- \`position\` - 'bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'
- \`duration\` - Time in milliseconds (0 = persistent)
- \`action\` - { label, onClick }

## Framework Examples

**Vanilla JS:**
\`\`\`javascript
// Basic snackbar
Aural.showSnackbar('Item deleted');

// With action button
Aural.showSnackbar('Item deleted', {
  action: { label: 'Undo', onClick: () => console.log('Undo clicked') }
});
\`\`\`

**React:**
\`\`\`jsx
const handleDelete = () => {
  window.Aural.showSnackbar('Item deleted', {
    type: 'error',
    action: { label: 'Undo', onClick: handleUndo }
  });
};
\`\`\`

## Accessibility

1. **ARIA live regions** - Snackbars use \`role="status"\` (for info/success) or \`role="alert"\` (for warnings/errors) to announce to screen readers without stealing focus
2. **Polite announcements** - Non-critical snackbars use \`aria-live="polite"\` to wait for user's current task before announcing; urgent ones use \`aria-live="assertive"\`
3. **Focus management** - Don't move focus to snackbar; maintain focus on user's current interaction (form field, button)
4. **Action button keyboard access** - Ensure action buttons are keyboard-focusable and activatable with Enter/Space
5. **Close button labeling** - Provide \`aria-label="Close notification"\` on close button for screen reader context
6. **Auto-dismiss timing** - Provide minimum 4 seconds duration to allow screen reader users time to perceive and act on message
7. **Persistent important messages** - For critical errors or undo actions, use \`duration: 0\` to prevent premature dismissal
8. **Color independence** - Never rely solely on color to convey meaning; always pair with icons and explicit text ("Error:", "Success:")
9. **High contrast support** - Ensure 4.5:1 contrast ratio for text, 3:1 for icons against snackbar background
10. **Reduced motion** - Respect \`prefers-reduced-motion\` by disabling slide/fade animations (instant show/hide)
11. **Multiple snackbars** - Stack limit of 3-5 snackbars to prevent screen reader announcement spam; queue additional messages
12. **Dismissal options** - Provide both auto-dismiss AND manual close button for user control
13. **Mobile touch targets** - Ensure minimum 44×44px touch area for close button and action buttons
14. **Escape key support** - Allow Escape key to dismiss active snackbar for keyboard users

## Usage Guidelines

### When to Use

- **Action confirmation** - "Changes saved", "Item added to cart", "Email sent successfully"
- **Undo operations** - "Item deleted" with "Undo" button (6-10 second duration for user action)
- **Form submission feedback** - "Profile updated", "Settings saved", "Password changed"
- **Connection status** - "Connection lost" with "Retry" button, "Back online" confirmation
- **Background task completion** - "Export complete", "Upload finished", "Sync successful"
- **Error notifications** - "Payment failed", "Upload error" with brief explanation and retry option

### When NOT to Use

- **Form validation errors** - Use inline field-level errors instead (more contextual)
- **Critical system alerts** - Use Alert Banners for persistent, page-level warnings
- **Complex messages** - Use Modals or dedicated pages for multi-paragraph content
- **Frequent updates** - For real-time data streams, use status indicators not repeated snackbars
- **Initial page load info** - Use Alert Banners or inline content for non-ephemeral information
- **Multiple simultaneous feedbacks** - Batch operations and show single summary snackbar

### Best Practices

- Keep messages to 5-10 words maximum for quick scanning
- Place action buttons on the right side of snackbar (visual flow left-to-right)
- Use uppercase labels for action buttons ("UNDO", "RETRY", "VIEW") for emphasis
- Limit to 1 action button per snackbar; 2+ buttons create decision paralysis
- Position snackbars at bottom-center or bottom-right (don't obscure page content)
- Auto-dismiss durations: 2s (quick feedback), 4s (standard), 6-10s (with actions), 0 (persistent)
- Show only 1-2 snackbars at once; queue additional messages to prevent overwhelming
- For undo actions, keep snackbar visible until action completes (prevent data loss)

### Mobile Considerations

- Use full-width snackbars on mobile (not floating cards) for better thumb reach
- Place snackbars at bottom above navigation bars to avoid safe area collisions
- Increase touch target size to 48×48px minimum for close/action buttons
- Consider swipe-to-dismiss gesture for faster dismissal on touch devices
- Reduce default duration to 3-4 seconds on mobile (shorter attention spans)
- Show 1 snackbar maximum on mobile due to limited screen real estate
- Test on iOS with notch/Dynamic Island to ensure proper positioning
        `.trim()}}},argTypes:{message:{control:"text",description:'Primary snackbar message text (1-2 sentences recommended); keep concise and action-oriented ("Item deleted", "Changes saved") for quick comprehension'},type:{control:"select",options:["default","success","error","warning","info"],description:"Semantic type controlling background color and icon (default: neutral dark, success: green for confirmations, error: red for failures, warning: yellow for cautions, info: blue for notifications)"},position:{control:"select",options:["bottom-left","bottom-center","bottom-right","top-left","top-center","top-right"],description:"Screen position for snackbar container (bottom-center: default/standard, bottom-right: common for desktop apps, top-right: alternative for errors, avoid top positions on mobile due to notch/status bar)"},duration:{control:{type:"range",min:0,max:1e4,step:1e3},description:"Auto-dismiss timer in milliseconds (4000ms: default for standard messages, 2000ms: quick feedback, 6000ms: messages with actions, 0: persistent until manually closed)"},description:{control:"text",description:"Optional secondary text providing additional context or details; displayed below main message in smaller font; useful for errors with explanation or notifications with sender info"}}},s={render:n=>{const e=document.createElement("div");e.style.padding="2rem";const t=document.createElement("button");return t.className="btn btn-secondary",t.textContent="Show Snackbar",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar(n.message,{type:n.type,duration:n.duration,position:n.position})},e.appendChild(t),e},args:{message:"This is a basic snackbar message",type:"default",duration:4e3,position:"bottom-center"}},i={render:()=>{const n=document.createElement("div");return n.style.padding="2rem",n.style.display="flex",n.style.gap="1rem",n.style.flexWrap="wrap",[{type:"default",message:"Default message",className:"btn-secondary"},{type:"success",message:"Success message",className:"btn-success"},{type:"info",message:"Info message",className:"btn-info"},{type:"warning",message:"Warning message",className:"btn-warning"},{type:"error",message:"Error message",className:"btn-error"}].forEach(({type:t,message:o,className:a})=>{const r=document.createElement("button");r.className=`btn ${a}`,r.textContent=t.charAt(0).toUpperCase()+t.slice(1),r.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar(o,{type:t})},n.appendChild(r)}),n}},c={render:()=>{const n=document.createElement("div");return n.style.padding="2rem",n.style.display="grid",n.style.gridTemplateColumns="repeat(3, 1fr)",n.style.gap="1rem",[{position:"top-left",label:"Top Left"},{position:"top-center",label:"Top Center"},{position:"top-right",label:"Top Right"},{position:"bottom-left",label:"Bottom Left"},{position:"bottom-center",label:"Bottom Center"},{position:"bottom-right",label:"Bottom Right"}].forEach(({position:t,label:o})=>{const a=document.createElement("button");a.className="btn btn-secondary",a.textContent=o,a.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar(`Snackbar at ${o}`,{position:t,type:"info"})},n.appendChild(a)}),n}},l={render:()=>{const n=document.createElement("div");n.style.padding="2rem",n.style.display="flex",n.style.gap="1rem",n.style.flexWrap="wrap";const e=document.createElement("button");e.className="btn btn-error",e.textContent="Delete with Undo",e.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Item deleted",{type:"error",action:{label:"Undo",onClick:()=>{window.Aural.showSnackbar("Item restored",{type:"success"})}},duration:6e3})};const t=document.createElement("button");t.className="btn btn-warning",t.textContent="Error with Retry",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Connection failed",{type:"error",action:{label:"Retry",onClick:()=>{window.Aural.showSnackbar("Retrying...",{type:"info"})}},duration:6e3})};const o=document.createElement("button");return o.className="btn btn-success",o.textContent="Message with View",o.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("New message received",{description:"From John Doe",type:"info",action:{label:"View",onClick:()=>{alert("Viewing message...")}},duration:6e3})},n.appendChild(e),n.appendChild(t),n.appendChild(o),n}},d={render:()=>{const n=document.createElement("div");n.style.padding="2rem",n.style.display="flex",n.style.gap="1rem",n.style.flexWrap="wrap";const e=document.createElement("button");e.className="btn btn-success",e.textContent="Upload Success",e.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("File uploaded",{description:"document.pdf has been uploaded successfully",type:"success",action:{label:"View",onClick:()=>alert("View file")}})};const t=document.createElement("button");return t.className="btn btn-info",t.textContent="New Notification",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("New message received",{description:'From John Doe: "Meeting at 3 PM"',type:"info",action:{label:"Reply",onClick:()=>alert("Reply to message")}})},n.appendChild(e),n.appendChild(t),n}},u={render:()=>{const n=document.createElement("div");n.style.padding="2rem",n.style.display="flex",n.style.gap="1rem",n.style.flexWrap="wrap";const e=document.createElement("button");e.className="btn btn-secondary",e.textContent="Quick (2s)",e.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Quick message",{duration:2e3,type:"info"})};const t=document.createElement("button");t.className="btn btn-secondary",t.textContent="Standard (5s)",t.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Standard duration message",{duration:5e3,type:"info"})};const o=document.createElement("button");return o.className="btn btn-secondary",o.textContent="Extended (10s)",o.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Extended duration message",{duration:1e4,type:"info"})},n.appendChild(e),n.appendChild(t),n.appendChild(o),n}},p={render:()=>{const n=document.createElement("div");n.style.padding="2rem";const e=document.createElement("button");return e.className="btn btn-primary",e.textContent="Show Persistent Snackbar",e.onclick=()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("This snackbar will not auto-dismiss",{description:"Click the X button to close it manually",type:"info",duration:0,action:{label:"Got it",onClick:()=>{}}})},n.appendChild(e),n}},m={render:()=>{const n=document.createElement("div");n.style.padding="2rem";const e=document.createElement("button");return e.className="btn btn-primary",e.textContent="Show Multiple Snackbars",e.onclick=()=>{typeof window.Aural<"u"&&(window.Aural.showSnackbar("First snackbar",{type:"success",duration:5e3}),setTimeout(()=>{window.Aural.showSnackbar("Second snackbar",{type:"info",duration:5e3})},500),setTimeout(()=>{window.Aural.showSnackbar("Third snackbar",{type:"warning",duration:5e3})},1e3))},n.appendChild(e),n}},b={render:()=>{const n=document.createElement("div");return n.style.padding="2rem",n.style.display="grid",n.style.gridTemplateColumns="repeat(2, 1fr)",n.style.gap="1rem",[{label:"Delete Pattern",className:"btn-error",onClick:()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Item deleted",{type:"error",action:{label:"UNDO",onClick:()=>{window.Aural.showSnackbar("Item restored",{type:"success"})}},duration:6e3})}},{label:"Save Pattern",className:"btn-success",onClick:()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Changes saved",{type:"success",duration:3e3})}},{label:"Network Error",className:"btn-warning",onClick:()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Connection lost",{description:"Check your internet connection",type:"error",action:{label:"Retry",onClick:()=>{window.Aural.showSnackbar("Reconnecting...",{type:"info"})}},duration:0})}},{label:"Copy to Clipboard",className:"btn-secondary",onClick:()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Link copied to clipboard",{type:"success",duration:2e3})}},{label:"Item Added",className:"btn-primary",onClick:()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Item added to cart",{type:"success",action:{label:"View Cart",onClick:()=>alert("View cart")},duration:5e3})}},{label:"Form Validation",className:"btn-warning",onClick:()=>{typeof window.Aural<"u"&&window.Aural.showSnackbar("Please fill in all required fields",{type:"warning",duration:4e3})}}].forEach(({label:t,className:o,onClick:a})=>{const r=document.createElement("button");r.className=`btn ${o}`,r.textContent=t,r.onclick=a,n.appendChild(r)}),n}},w={render:n=>H(()=>{const e=document.createElement("button");e.className="btn btn-primary",e.textContent="Show Snackbar";const t=document.createElement("div");t.style.position="relative",t.style.minHeight="120px",t.appendChild(e);const o=document.createElement("div");o.className="aural-snackbar",n.type!=="default"&&o.classList.add(`aural-snackbar--${n.type}`),o.style.position="relative",o.style.marginTop="1rem",o.style.opacity="1",o.style.transform="translateY(0)",o.setAttribute("role",n.type==="error"?"alert":"status");let a="";return n.type!=="default"&&(a+='<div class="aural-snackbar__icon">',n.type==="success"?a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>':n.type==="error"?a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>':n.type==="warning"?a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>':n.type==="info"&&(a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'),a+="</div>"),a+='<div class="aural-snackbar__content">',a+=`<div class="aural-snackbar__message">${n.message}</div>`,n.description&&(a+=`<div class="aural-snackbar__description">${n.description}</div>`),a+="</div>",n.showAction&&(a+='<div class="aural-snackbar__actions">',a+='<button class="aural-snackbar__action">Undo</button>',a+='<button class="aural-snackbar__close" aria-label="Close snackbar">',a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',a+="</button>",a+="</div>"),o.innerHTML=a,t.appendChild(o),t}),args:{message:"Item deleted",description:"",type:"error",showAction:!0},argTypes:{message:{control:"text",description:"Snackbar message"},description:{control:"text",description:"Optional description text"},type:{control:"select",options:["default","success","error","warning","info"],description:"Snackbar type"},showAction:{control:"boolean",description:"Show action button"}}};var y,f,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.textContent = 'Show Snackbar';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar(args.message, {
          type: args.type,
          duration: args.duration,
          position: args.position
        });
      }
    };
    container.appendChild(button);
    return container;
  },
  args: {
    message: 'This is a basic snackbar message',
    type: 'default',
    duration: 4000,
    position: 'bottom-center'
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var h,g,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    const types = [{
      type: 'default',
      message: 'Default message',
      className: 'btn-secondary'
    }, {
      type: 'success',
      message: 'Success message',
      className: 'btn-success'
    }, {
      type: 'info',
      message: 'Info message',
      className: 'btn-info'
    }, {
      type: 'warning',
      message: 'Warning message',
      className: 'btn-warning'
    }, {
      type: 'error',
      message: 'Error message',
      className: 'btn-error'
    }];
    types.forEach(({
      type,
      message,
      className
    }) => {
      const button = document.createElement('button');
      button.className = \`btn \${className}\`;
      button.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar(message, {
            type: type as any
          });
        }
      };
      container.appendChild(button);
    });
    return container;
  }
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var A,S,v;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = '1rem';
    const positions = [{
      position: 'top-left',
      label: 'Top Left'
    }, {
      position: 'top-center',
      label: 'Top Center'
    }, {
      position: 'top-right',
      label: 'Top Right'
    }, {
      position: 'bottom-left',
      label: 'Bottom Left'
    }, {
      position: 'bottom-center',
      label: 'Bottom Center'
    }, {
      position: 'bottom-right',
      label: 'Bottom Right'
    }];
    positions.forEach(({
      position,
      label
    }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;
      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar(\`Snackbar at \${label}\`, {
            position: position as any,
            type: 'info'
          });
        }
      };
      container.appendChild(button);
    });
    return container;
  }
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,E,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    const button1 = document.createElement('button');
    button1.className = 'btn btn-error';
    button1.textContent = 'Delete with Undo';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Item deleted', {
          type: 'error',
          action: {
            label: 'Undo',
            onClick: () => {
              window.Aural.showSnackbar('Item restored', {
                type: 'success'
              });
            }
          },
          duration: 6000
        });
      }
    };
    const button2 = document.createElement('button');
    button2.className = 'btn btn-warning';
    button2.textContent = 'Error with Retry';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Connection failed', {
          type: 'error',
          action: {
            label: 'Retry',
            onClick: () => {
              window.Aural.showSnackbar('Retrying...', {
                type: 'info'
              });
            }
          },
          duration: 6000
        });
      }
    };
    const button3 = document.createElement('button');
    button3.className = 'btn btn-success';
    button3.textContent = 'Message with View';
    button3.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('New message received', {
          description: 'From John Doe',
          type: 'info',
          action: {
            label: 'View',
            onClick: () => {
              alert('Viewing message...');
            }
          },
          duration: 6000
        });
      }
    };
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    return container;
  }
}`,...(N=(E=l.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var T,U,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    const button1 = document.createElement('button');
    button1.className = 'btn btn-success';
    button1.textContent = 'Upload Success';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('File uploaded', {
          description: 'document.pdf has been uploaded successfully',
          type: 'success',
          action: {
            label: 'View',
            onClick: () => alert('View file')
          }
        });
      }
    };
    const button2 = document.createElement('button');
    button2.className = 'btn btn-info';
    button2.textContent = 'New Notification';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('New message received', {
          description: 'From John Doe: "Meeting at 3 PM"',
          type: 'info',
          action: {
            label: 'Reply',
            onClick: () => alert('Reply to message')
          }
        });
      }
    };
    container.appendChild(button1);
    container.appendChild(button2);
    return container;
  }
}`,...(I=(U=d.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var P,_,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        window.Aural.showSnackbar('Quick message', {
          duration: 2000,
          type: 'info'
        });
      }
    };
    const button2 = document.createElement('button');
    button2.className = 'btn btn-secondary';
    button2.textContent = 'Standard (5s)';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Standard duration message', {
          duration: 5000,
          type: 'info'
        });
      }
    };
    const button3 = document.createElement('button');
    button3.className = 'btn btn-secondary';
    button3.textContent = 'Extended (10s)';
    button3.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Extended duration message', {
          duration: 10000,
          type: 'info'
        });
      }
    };
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    return container;
  }
}`,...(B=(_=u.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var R,D,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Persistent Snackbar';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('This snackbar will not auto-dismiss', {
          description: 'Click the X button to close it manually',
          type: 'info',
          duration: 0,
          action: {
            label: 'Got it',
            onClick: () => {}
          }
        });
      }
    };
    container.appendChild(button);
    return container;
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var F,M,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Multiple Snackbars';
    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('First snackbar', {
          type: 'success',
          duration: 5000
        });
        setTimeout(() => {
          window.Aural.showSnackbar('Second snackbar', {
            type: 'info',
            duration: 5000
          });
        }, 500);
        setTimeout(() => {
          window.Aural.showSnackbar('Third snackbar', {
            type: 'warning',
            duration: 5000
          });
        }, 1000);
      }
    };
    container.appendChild(button);
    return container;
  }
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var L,$,O;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    container.style.gap = '1rem';
    const patterns = [{
      label: 'Delete Pattern',
      className: 'btn-error',
      onClick: () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar('Item deleted', {
            type: 'error',
            action: {
              label: 'UNDO',
              onClick: () => {
                window.Aural.showSnackbar('Item restored', {
                  type: 'success'
                });
              }
            },
            duration: 6000
          });
        }
      }
    }, {
      label: 'Save Pattern',
      className: 'btn-success',
      onClick: () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar('Changes saved', {
            type: 'success',
            duration: 3000
          });
        }
      }
    }, {
      label: 'Network Error',
      className: 'btn-warning',
      onClick: () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar('Connection lost', {
            description: 'Check your internet connection',
            type: 'error',
            action: {
              label: 'Retry',
              onClick: () => {
                window.Aural.showSnackbar('Reconnecting...', {
                  type: 'info'
                });
              }
            },
            duration: 0
          });
        }
      }
    }, {
      label: 'Copy to Clipboard',
      className: 'btn-secondary',
      onClick: () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar('Link copied to clipboard', {
            type: 'success',
            duration: 2000
          });
        }
      }
    }, {
      label: 'Item Added',
      className: 'btn-primary',
      onClick: () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar('Item added to cart', {
            type: 'success',
            action: {
              label: 'View Cart',
              onClick: () => alert('View cart')
            },
            duration: 5000
          });
        }
      }
    }, {
      label: 'Form Validation',
      className: 'btn-warning',
      onClick: () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar('Please fill in all required fields', {
            type: 'warning',
            duration: 4000
          });
        }
      }
    }];
    patterns.forEach(({
      label,
      className,
      onClick
    }) => {
      const button = document.createElement('button');
      button.className = \`btn \${className}\`;
      button.textContent = label;
      button.onclick = onClick;
      container.appendChild(button);
    });
    return container;
  }
}`,...(O=($=b.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var q,J,G;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.textContent = 'Show Snackbar';

      // Create container to hold both button and snackbar preview
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.minHeight = '120px';
      wrapper.appendChild(button);

      // Create static snackbar preview using correct Aural UI structure
      const snackbar = document.createElement('div');
      snackbar.className = 'aural-snackbar';
      if (args.type !== 'default') {
        snackbar.classList.add(\`aural-snackbar--\${args.type}\`);
      }
      snackbar.style.position = 'relative';
      snackbar.style.marginTop = '1rem';
      snackbar.style.opacity = '1';
      snackbar.style.transform = 'translateY(0)';
      snackbar.setAttribute('role', args.type === 'error' ? 'alert' : 'status');
      let html = '';

      // Add icon based on type
      if (args.type !== 'default') {
        html += '<div class="aural-snackbar__icon">';
        if (args.type === 'success') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        } else if (args.type === 'error') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
        } else if (args.type === 'warning') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
        } else if (args.type === 'info') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
        }
        html += '</div>';
      }

      // Content section
      html += '<div class="aural-snackbar__content">';
      html += \`<div class="aural-snackbar__message">\${args.message}</div>\`;
      if (args.description) {
        html += \`<div class="aural-snackbar__description">\${args.description}</div>\`;
      }
      html += '</div>';

      // Actions section
      if (args.showAction) {
        html += '<div class="aural-snackbar__actions">';
        html += '<button class="aural-snackbar__action">Undo</button>';
        html += '<button class="aural-snackbar__close" aria-label="Close snackbar">';
        html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
        html += '</button>';
        html += '</div>';
      }
      snackbar.innerHTML = html;
      wrapper.appendChild(snackbar);
      return wrapper;
    });
  },
  args: {
    message: 'Item deleted',
    description: '',
    type: 'error',
    showAction: true
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Snackbar message'
    },
    description: {
      control: 'text',
      description: 'Optional description text'
    },
    type: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Snackbar type'
    },
    showAction: {
      control: 'boolean',
      description: 'Show action button'
    }
  }
}`,...(G=(J=w.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};const z=["Basic","AllTypes","AllPositions","WithAction","WithDescription","DurationVariants","Persistent","StackingSnackbars","CommonPatterns","ThemeComparison"];export{c as AllPositions,i as AllTypes,s as Basic,b as CommonPatterns,u as DurationVariants,p as Persistent,m as StackingSnackbars,w as ThemeComparison,l as WithAction,d as WithDescription,z as __namedExportsOrder,j as default};
