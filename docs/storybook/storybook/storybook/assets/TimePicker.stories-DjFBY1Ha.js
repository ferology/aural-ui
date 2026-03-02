const De={title:"Forms/Time Picker",tags:["autodocs"],parameters:{docs:{description:{component:"Select time with hours and minutes. Supports 12-hour and 24-hour formats with intuitive scrollable lists and keyboard input. Perfect for scheduling, appointments, or any time selection needs."}}},argTypes:{label:{control:"text",description:"Label text for the time picker"},format:{control:"select",options:["12h","24h"],description:"Time format (12-hour or 24-hour)"},size:{control:"select",options:["sm","default","lg"],description:"Size variant of the time picker"},disabled:{control:"boolean",description:"Whether the time picker is disabled"},placeholder:{control:"text",description:"Placeholder text for the input"},minuteStep:{control:"number",description:"Step interval for minutes (e.g., 1, 5, 15, 30)"},showNowButton:{control:"boolean",description:'Whether to show the "Now" button'},defaultValue:{control:"text",description:"Default time value"},id:{control:"text",description:"Unique identifier for the time picker"}}},t=e=>{const i=e.format==="24h",a=e.size==="default"?"":` aural-time-picker--${e.size}`,y=e.disabled?" aural-time-picker--disabled":"",Oe=i?" aural-time-picker--24h":"",Ee=e.placeholder||(i?"--:--":"--:-- --"),Ie=`
    <div class="aural-time-picker${a}${y}${Oe}" id="${e.id}" ${e.minuteStep!==1?`data-step="${e.minuteStep}"`:""}>
      ${e.label?`<label class="aural-time-picker__label">${e.label}</label>`:""}
      <div class="aural-time-picker__input-wrapper">
        <input
          type="text"
          class="aural-time-picker__input"
          placeholder="${Ee}"
          readonly
          aria-label="${e.label||"Select time"}"
          ${e.disabled?"disabled":""}
        >
        <button
          type="button"
          class="aural-time-picker__toggle"
          aria-label="Open time picker"
          ${e.disabled?"disabled":""}
        >
          <i data-lucide="clock"></i>
        </button>
      </div>
      ${e.disabled?"":`
      <div class="aural-time-picker__dropdown">
        <div class="aural-time-picker__selectors">
          <div class="aural-time-picker__selector">
            <div class="aural-time-picker__selector-label">Hour</div>
            <div class="aural-time-picker__list" data-type="hour"></div>
          </div>
          <div class="aural-time-picker__selector">
            <div class="aural-time-picker__selector-label">Minute</div>
            <div class="aural-time-picker__list" data-type="minute"></div>
          </div>
          ${i?"":`
          <div class="aural-time-picker__selector">
            <div class="aural-time-picker__selector-label">Period</div>
            <div class="aural-time-picker__period">
              <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
              <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
            </div>
          </div>
          `}
        </div>
        ${e.showNowButton?`
        <div class="aural-time-picker__now">
          <button type="button" class="aural-time-picker__now-btn">
            <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
            Now
          </button>
        </div>
        `:""}
        <div class="aural-time-picker__actions">
          <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
          <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
        </div>
      </div>
      `}
    </div>
  `,w=document.createElement("div");return w.innerHTML=Ie,setTimeout(()=>{window.lucide&&window.lucide.createIcons()},0),setTimeout(()=>{var h;(h=window.Aural)!=null&&h.initTimePicker&&window.Aural.initTimePicker()},100),w},r={args:{label:"Select Time",format:"12h",size:"default",disabled:!1,placeholder:"--:-- --",minuteStep:1,showNowButton:!0,defaultValue:"",id:"time-picker-basic"},render:e=>t(e)},l={args:{label:"Meeting Time",format:"24h",size:"default",disabled:!1,placeholder:"--:--",minuteStep:1,showNowButton:!0,defaultValue:"",id:"time-picker-24h"},render:e=>t(e)},c={args:{label:"Small Time Picker",format:"12h",size:"sm",disabled:!1,placeholder:"--:-- --",minuteStep:1,showNowButton:!0,defaultValue:"",id:"time-picker-small"},render:e=>t(e)},n={args:{label:"Large Time Picker",format:"12h",size:"lg",disabled:!1,placeholder:"--:-- --",minuteStep:1,showNowButton:!0,defaultValue:"",id:"time-picker-large"},render:e=>t(e)},s={args:{label:"Quick Selection",format:"12h",size:"default",disabled:!1,placeholder:"--:-- --",minuteStep:5,showNowButton:!0,defaultValue:"",id:"time-picker-5min"},render:e=>t(e)},o={args:{label:"Appointment Time",format:"12h",size:"default",disabled:!1,placeholder:"--:-- --",minuteStep:15,showNowButton:!0,defaultValue:"",id:"time-picker-15min"},render:e=>t(e)},d={args:{label:"Schedule Time",format:"12h",size:"default",disabled:!1,placeholder:"--:-- --",minuteStep:30,showNowButton:!0,defaultValue:"",id:"time-picker-30min"},render:e=>t(e)},p={args:{label:"Select Specific Time",format:"12h",size:"default",disabled:!1,placeholder:"--:-- --",minuteStep:1,showNowButton:!1,defaultValue:"",id:"time-picker-no-now"},render:e=>t(e)},u={args:{label:"Unavailable Time",format:"12h",size:"default",disabled:!0,placeholder:"--:-- --",minuteStep:1,showNowButton:!0,defaultValue:"",id:"time-picker-disabled"},render:e=>t(e)},m={render:()=>{const e=document.createElement("div");return e.innerHTML=`
      <div style="max-width: 500px;">
        <div style="background: var(--color-bg-tertiary); padding: var(--space-6); border-radius: var(--radius-lg);">
          <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Schedule Meeting</h3>
          <div style="display: grid; gap: var(--space-4);">
            <div class="aural-time-picker" id="time-picker-start">
              <label class="aural-time-picker__label">Start Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Meeting start time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker" id="time-picker-end">
              <label class="aural-time-picker__label">End Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Meeting end time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" style="margin-top: var(--space-2);">Schedule Meeting</button>
          </div>
        </div>
      </div>
    `,setTimeout(()=>{var i;window.lucide&&window.lucide.createIcons(),(i=window.Aural)!=null&&i.initTimePicker&&window.Aural.initTimePicker()},100),e}},_={render:()=>{const e=document.createElement("div");return e.innerHTML=`
      <div style="max-width: 400px;">
        <div style="border: 1px solid var(--color-border-subtle); padding: var(--space-6); border-radius: var(--radius-lg);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4);">
            <div>
              <h3 style="margin: 0; color: var(--color-text-primary); font-size: var(--text-lg);">Daily Alarm</h3>
              <p style="margin: var(--space-1) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">Wake up time</p>
            </div>
            <div class="aural-switch">
              <input type="checkbox" id="alarm-switch" checked>
              <label for="alarm-switch"></label>
            </div>
          </div>
          <div class="aural-time-picker aural-time-picker--lg" id="time-picker-alarm">
            <div class="aural-time-picker__input-wrapper">
              <input
                type="text"
                class="aural-time-picker__input"
                placeholder="--:-- --"
                readonly
                aria-label="Alarm time"
                style="text-align: center; font-size: var(--text-2xl); font-weight: var(--font-semibold);"
              >
              <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                <i data-lucide="clock"></i>
              </button>
            </div>
            <div class="aural-time-picker__dropdown">
              <div class="aural-time-picker__selectors">
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Hour</div>
                  <div class="aural-time-picker__list" data-type="hour"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Minute</div>
                  <div class="aural-time-picker__list" data-type="minute"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Period</div>
                  <div class="aural-time-picker__period">
                    <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                    <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                  </div>
                </div>
              </div>
              <div class="aural-time-picker__actions">
                <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,setTimeout(()=>{var i;window.lucide&&window.lucide.createIcons(),(i=window.Aural)!=null&&i.initTimePicker&&window.Aural.initTimePicker()},100),e}},v={render:()=>{const e=document.createElement("div");return e.innerHTML=`
      <div style="max-width: 600px;">
        <div style="background: var(--color-bg-tertiary); padding: var(--space-6); border-radius: var(--radius-lg);">
          <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Set Appointment Time</h3>
          <div class="aural-time-picker aural-time-picker--open" id="time-picker-inline" style="position: relative;">
            <label class="aural-time-picker__label">Select Time</label>
            <div class="aural-time-picker__input-wrapper">
              <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Select time">
              <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                <i data-lucide="clock"></i>
              </button>
            </div>
            <div class="aural-time-picker__dropdown" style="position: static; box-shadow: none; border: 1px solid var(--color-border-subtle); margin-top: var(--space-4);">
              <div class="aural-time-picker__selectors">
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Hour</div>
                  <div class="aural-time-picker__list" data-type="hour"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Minute</div>
                  <div class="aural-time-picker__list" data-type="minute"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Period</div>
                  <div class="aural-time-picker__period">
                    <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                    <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                  </div>
                </div>
              </div>
              <div class="aural-time-picker__now">
                <button type="button" class="aural-time-picker__now-btn">
                  <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
                  Now
                </button>
              </div>
              <div class="aural-time-picker__actions">
                <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,setTimeout(()=>{var i;window.lucide&&window.lucide.createIcons(),(i=window.Aural)!=null&&i.initTimePicker&&window.Aural.initTimePicker()},100),e}},b={render:()=>{const e=document.createElement("div");return e.innerHTML=`
      <div style="display: grid; gap: var(--space-6);">
        <div class="aural-time-picker aural-time-picker--sm" id="time-picker-compare-sm">
          <label class="aural-time-picker__label">Small</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Small time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>

        <div class="aural-time-picker" id="time-picker-compare-default">
          <label class="aural-time-picker__label">Default</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Default time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>

        <div class="aural-time-picker aural-time-picker--lg" id="time-picker-compare-lg">
          <label class="aural-time-picker__label">Large</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Large time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>
      </div>
    `,setTimeout(()=>{var i;window.lucide&&window.lucide.createIcons(),(i=window.Aural)!=null&&i.initTimePicker&&window.Aural.initTimePicker()},100),e}},k={render:()=>{const e=["dark","light","neon","prismatic","minimal","warm","kinetic"],i=document.createElement("div");return i.innerHTML=`
      <div style="display: grid; gap: var(--space-8);">
        ${e.map((a,y)=>`
          <div style="padding: var(--space-6); background: var(--color-bg-secondary); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg); text-transform: capitalize;">${a} Theme</h3>
            <div class="aural-time-picker" id="time-picker-theme-${y}">
              <label class="aural-time-picker__label">Select Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Select time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__now">
                  <button type="button" class="aural-time-picker__now-btn">
                    <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
                    Now
                  </button>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `,setTimeout(()=>{var a;window.lucide&&window.lucide.createIcons(),(a=window.Aural)!=null&&a.initTimePicker&&window.Aural.initTimePicker()},100),i}};var g,f,M,T,P;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Select Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-basic'
  },
  render: args => createTimePicker(args)
}`,...(M=(f=r.parameters)==null?void 0:f.docs)==null?void 0:M.source},description:{story:"Basic 12-hour time picker with AM/PM selector",...(P=(T=r.parameters)==null?void 0:T.docs)==null?void 0:P.description}}};var x,S,A,z,H;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Meeting Time',
    format: '24h',
    size: 'default',
    disabled: false,
    placeholder: '--:--',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-24h'
  },
  render: args => createTimePicker(args)
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:"24-hour format time picker (common in many regions)",...(H=(z=l.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var N,C,B,$,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Small Time Picker',
    format: '12h',
    size: 'sm',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-small'
  },
  render: args => createTimePicker(args)
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"Small size variant",...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.description}}};var V,O,E,I,D;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Large Time Picker',
    format: '12h',
    size: 'lg',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-large'
  },
  render: args => createTimePicker(args)
}`,...(E=(O=n.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"Large size variant",...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.description}}};var F,W,j,U,q;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Quick Selection',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 5,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-5min'
  },
  render: args => createTimePicker(args)
}`,...(j=(W=s.parameters)==null?void 0:W.docs)==null?void 0:j.source},description:{story:"5-minute intervals for quick selection",...(q=(U=s.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var Q,R,G,J,K;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Appointment Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 15,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-15min'
  },
  render: args => createTimePicker(args)
}`,...(G=(R=o.parameters)==null?void 0:R.docs)==null?void 0:G.source},description:{story:"15-minute intervals for appointments",...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var X,Y,Z,ee,ie;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Schedule Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 30,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-30min'
  },
  render: args => createTimePicker(args)
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"30-minute intervals for scheduling",...(ie=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ie.description}}};var te,ae,re,le,ce;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Select Specific Time',
    format: '12h',
    size: 'default',
    disabled: false,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: false,
    defaultValue: '',
    id: 'time-picker-no-now'
  },
  render: args => createTimePicker(args)
}`,...(re=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:'Without "Now" button for specific time entry',...(ce=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var ne,se,oe,de,pe;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Unavailable Time',
    format: '12h',
    size: 'default',
    disabled: true,
    placeholder: '--:-- --',
    minuteStep: 1,
    showNowButton: true,
    defaultValue: '',
    id: 'time-picker-disabled'
  },
  render: args => createTimePicker(args)
}`,...(oe=(se=u.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"Disabled state",...(pe=(de=u.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var ue,me,_e,ve,be;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <div style="max-width: 500px;">
        <div style="background: var(--color-bg-tertiary); padding: var(--space-6); border-radius: var(--radius-lg);">
          <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Schedule Meeting</h3>
          <div style="display: grid; gap: var(--space-4);">
            <div class="aural-time-picker" id="time-picker-start">
              <label class="aural-time-picker__label">Start Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Meeting start time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker" id="time-picker-end">
              <label class="aural-time-picker__label">End Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Meeting end time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" style="margin-top: var(--space-2);">Schedule Meeting</button>
          </div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);
    return container;
  }
}`,...(_e=(me=m.parameters)==null?void 0:me.docs)==null?void 0:_e.source},description:{story:"Time range picker for meetings/events",...(be=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:be.description}}};var ke,ye,we,he,ge;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <div style="max-width: 400px;">
        <div style="border: 1px solid var(--color-border-subtle); padding: var(--space-6); border-radius: var(--radius-lg);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4);">
            <div>
              <h3 style="margin: 0; color: var(--color-text-primary); font-size: var(--text-lg);">Daily Alarm</h3>
              <p style="margin: var(--space-1) 0 0 0; color: var(--color-text-secondary); font-size: var(--text-sm);">Wake up time</p>
            </div>
            <div class="aural-switch">
              <input type="checkbox" id="alarm-switch" checked>
              <label for="alarm-switch"></label>
            </div>
          </div>
          <div class="aural-time-picker aural-time-picker--lg" id="time-picker-alarm">
            <div class="aural-time-picker__input-wrapper">
              <input
                type="text"
                class="aural-time-picker__input"
                placeholder="--:-- --"
                readonly
                aria-label="Alarm time"
                style="text-align: center; font-size: var(--text-2xl); font-weight: var(--font-semibold);"
              >
              <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                <i data-lucide="clock"></i>
              </button>
            </div>
            <div class="aural-time-picker__dropdown">
              <div class="aural-time-picker__selectors">
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Hour</div>
                  <div class="aural-time-picker__list" data-type="hour"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Minute</div>
                  <div class="aural-time-picker__list" data-type="minute"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Period</div>
                  <div class="aural-time-picker__period">
                    <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                    <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                  </div>
                </div>
              </div>
              <div class="aural-time-picker__actions">
                <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);
    return container;
  }
}`,...(we=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:"Alarm clock pattern with toggle",...(ge=(he=_.parameters)==null?void 0:he.docs)==null?void 0:ge.description}}};var fe,Me,Te,Pe,xe;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <div style="max-width: 600px;">
        <div style="background: var(--color-bg-tertiary); padding: var(--space-6); border-radius: var(--radius-lg);">
          <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg);">Set Appointment Time</h3>
          <div class="aural-time-picker aural-time-picker--open" id="time-picker-inline" style="position: relative;">
            <label class="aural-time-picker__label">Select Time</label>
            <div class="aural-time-picker__input-wrapper">
              <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Select time">
              <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                <i data-lucide="clock"></i>
              </button>
            </div>
            <div class="aural-time-picker__dropdown" style="position: static; box-shadow: none; border: 1px solid var(--color-border-subtle); margin-top: var(--space-4);">
              <div class="aural-time-picker__selectors">
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Hour</div>
                  <div class="aural-time-picker__list" data-type="hour"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Minute</div>
                  <div class="aural-time-picker__list" data-type="minute"></div>
                </div>
                <div class="aural-time-picker__selector">
                  <div class="aural-time-picker__selector-label">Period</div>
                  <div class="aural-time-picker__period">
                    <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                    <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                  </div>
                </div>
              </div>
              <div class="aural-time-picker__now">
                <button type="button" class="aural-time-picker__now-btn">
                  <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
                  Now
                </button>
              </div>
              <div class="aural-time-picker__actions">
                <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);
    return container;
  }
}`,...(Te=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Te.source},description:{story:"Inline/Embedded style without dropdown",...(xe=(Pe=v.parameters)==null?void 0:Pe.docs)==null?void 0:xe.description}}};var Se,Ae,ze,He,Ne;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <div style="display: grid; gap: var(--space-6);">
        <div class="aural-time-picker aural-time-picker--sm" id="time-picker-compare-sm">
          <label class="aural-time-picker__label">Small</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Small time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>

        <div class="aural-time-picker" id="time-picker-compare-default">
          <label class="aural-time-picker__label">Default</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Default time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>

        <div class="aural-time-picker aural-time-picker--lg" id="time-picker-compare-lg">
          <label class="aural-time-picker__label">Large</label>
          <div class="aural-time-picker__input-wrapper">
            <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Large time picker">
            <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
              <i data-lucide="clock"></i>
            </button>
          </div>
          <div class="aural-time-picker__dropdown">
            <div class="aural-time-picker__selectors">
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Hour</div>
                <div class="aural-time-picker__list" data-type="hour"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Minute</div>
                <div class="aural-time-picker__list" data-type="minute"></div>
              </div>
              <div class="aural-time-picker__selector">
                <div class="aural-time-picker__selector-label">Period</div>
                <div class="aural-time-picker__period">
                  <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                  <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                </div>
              </div>
            </div>
            <div class="aural-time-picker__actions">
              <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
              <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
            </div>
          </div>
        </div>
      </div>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);
    return container;
  }
}`,...(ze=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source},description:{story:"Size comparison showing all variants",...(Ne=(He=b.parameters)==null?void 0:He.docs)==null?void 0:Ne.description}}};var Ce,Be,$e,Le,Ve;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const themes = ['dark', 'light', 'neon', 'prismatic', 'minimal', 'warm', 'kinetic'];
    const container = document.createElement('div');
    container.innerHTML = \`
      <div style="display: grid; gap: var(--space-8);">
        \${themes.map((theme, index) => \`
          <div style="padding: var(--space-6); background: var(--color-bg-secondary); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary); font-size: var(--text-lg); text-transform: capitalize;">\${theme} Theme</h3>
            <div class="aural-time-picker" id="time-picker-theme-\${index}">
              <label class="aural-time-picker__label">Select Time</label>
              <div class="aural-time-picker__input-wrapper">
                <input type="text" class="aural-time-picker__input" placeholder="--:-- --" readonly aria-label="Select time">
                <button type="button" class="aural-time-picker__toggle" aria-label="Open time picker">
                  <i data-lucide="clock"></i>
                </button>
              </div>
              <div class="aural-time-picker__dropdown">
                <div class="aural-time-picker__selectors">
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Hour</div>
                    <div class="aural-time-picker__list" data-type="hour"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Minute</div>
                    <div class="aural-time-picker__list" data-type="minute"></div>
                  </div>
                  <div class="aural-time-picker__selector">
                    <div class="aural-time-picker__selector-label">Period</div>
                    <div class="aural-time-picker__period">
                      <button type="button" class="aural-time-picker__period-btn" data-period="AM">AM</button>
                      <button type="button" class="aural-time-picker__period-btn" data-period="PM">PM</button>
                    </div>
                  </div>
                </div>
                <div class="aural-time-picker__now">
                  <button type="button" class="aural-time-picker__now-btn">
                    <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
                    Now
                  </button>
                </div>
                <div class="aural-time-picker__actions">
                  <button type="button" class="aural-time-picker__action-btn" data-action="clear">Clear</button>
                  <button type="button" class="aural-time-picker__action-btn aural-time-picker__action-btn--primary" data-action="apply">Apply</button>
                </div>
              </div>
            </div>
          </div>
        \`).join('')}
      </div>
    \`;
    setTimeout(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      if (window.Aural?.initTimePicker) {
        window.Aural.initTimePicker();
      }
    }, 100);
    return container;
  }
}`,...($e=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:$e.source},description:{story:"Theme comparison showing time picker across all themes",...(Ve=(Le=k.parameters)==null?void 0:Le.docs)==null?void 0:Ve.description}}};const Fe=["Basic","TwentyFourHour","Small","Large","FiveMinuteStep","FifteenMinuteStep","ThirtyMinuteStep","WithoutNowButton","Disabled","TimeRange","AlarmClock","InlineStyle","SizeComparison","ThemeComparison"];export{_ as AlarmClock,r as Basic,u as Disabled,o as FifteenMinuteStep,s as FiveMinuteStep,v as InlineStyle,n as Large,b as SizeComparison,c as Small,k as ThemeComparison,d as ThirtyMinuteStep,m as TimeRange,l as TwentyFourHour,p as WithoutNowButton,Fe as __namedExportsOrder,De as default};
