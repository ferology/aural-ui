import{c as O}from"./createThemeGrid-DWAncU4Q.js";const Z={title:"Components/DateRangePicker",tags:["autodocs"],parameters:{docs:{description:{component:`
# Date Range Picker Component

Select a date range with start and end dates using a visual calendar interface. Perfect for filtering data, booking ranges, or scheduling period selections.

See the **DateRangePicker.mdx** documentation for framework-specific examples (React, Vue, Svelte).

## Features

- Dual input fields for start and end dates
- Visual calendar with range highlighting
- Quick preset ranges (Today, Last 7 Days, etc.)
- Single or dual calendar view
- Min/max date restrictions
- Keyboard navigation support
- Full ARIA attributes for accessibility
- Responsive design for mobile and desktop

## Basic Usage

**Vanilla HTML:**
\`\`\`html
<div class="aural-date-range-picker" id="date-range-1">
  <div class="aural-date-range-picker__input-wrapper">
    <div class="aural-date-range-picker__inputs">
      <input type="text" class="aural-date-range-picker__input"
             placeholder="Start date" readonly aria-label="Start date">
      <span class="aural-date-range-picker__separator">to</span>
      <input type="text" class="aural-date-range-picker__input"
             placeholder="End date" readonly aria-label="End date">
    </div>
    <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
  </div>
  <div class="aural-date-range-picker__dropdown">
    <div class="aural-date-range-picker__calendars">
      <div class="aural-date-range-picker__calendar">
        <div class="aural-date-range-picker__calendar-header">
          <button class="aural-date-range-picker__nav-button" data-action="prev" aria-label="Previous month">
            <i data-lucide="chevron-left"></i>
          </button>
          <div class="aural-date-range-picker__month-label">January 2026</div>
          <button class="aural-date-range-picker__nav-button" data-action="next" aria-label="Next month">
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
        <div class="aural-date-range-picker__weekdays">
          <div class="aural-date-range-picker__weekday">Su</div>
          <div class="aural-date-range-picker__weekday">Mo</div>
          <div class="aural-date-range-picker__weekday">Tu</div>
          <div class="aural-date-range-picker__weekday">We</div>
          <div class="aural-date-range-picker__weekday">Th</div>
          <div class="aural-date-range-picker__weekday">Fr</div>
          <div class="aural-date-range-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-range-picker__days"></div>
      </div>
    </div>
    <div class="aural-date-range-picker__footer">
      <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
      <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
    </div>
  </div>
</div>

<script>
  // Initialize after Aural UI loads
  window.Aural?.initDateRangePicker('#date-range-1');
<\/script>
\`\`\`
        `.trim()}}},argTypes:{id:{control:"text",description:"Unique identifier for the date range picker"},startPlaceholder:{control:"text",description:"Placeholder text for start date input"},endPlaceholder:{control:"text",description:"Placeholder text for end date input"},showPresets:{control:"boolean",description:"Show quick preset ranges"},dualCalendar:{control:"boolean",description:"Show two calendars side by side"}}},o=e=>{const a=document.createElement("div");a.className="story-container",a.style.padding="2rem",a.style.minHeight="600px";const r=document.createElement("div");r.id=e.id||"date-range-picker",r.className="aural-date-range-picker";let n="";return e.showPresets?n=`
      <div style="display: flex; gap: var(--space-4);">
        <div class="aural-date-range-picker__presets">
          <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
          <div class="aural-date-range-picker__preset-list">
            <button class="aural-date-range-picker__preset-button" data-preset="today">Today</button>
            <button class="aural-date-range-picker__preset-button" data-preset="yesterday">Yesterday</button>
            <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
            <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
            <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
            <button class="aural-date-range-picker__preset-button" data-preset="lastMonth">Last Month</button>
          </div>
        </div>
        <div class="aural-date-range-picker__calendars">
          ${l(0)}
        </div>
      </div>`:e.dualCalendar?n=`
      <div class="aural-date-range-picker__calendars">
        ${l(0)}
        ${l(1)}
      </div>`:n=`
      <div class="aural-date-range-picker__calendars">
        ${l(0)}
      </div>`,r.innerHTML=`
    <div class="aural-date-range-picker__input-wrapper">
      <div class="aural-date-range-picker__inputs">
        <input type="text" class="aural-date-range-picker__input"
               placeholder="${e.startPlaceholder||"Start date"}"
               readonly aria-label="${e.startPlaceholder||"Start date"}">
        <span class="aural-date-range-picker__separator">to</span>
        <input type="text" class="aural-date-range-picker__input"
               placeholder="${e.endPlaceholder||"End date"}"
               readonly aria-label="${e.endPlaceholder||"End date"}">
      </div>
      <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
    </div>
    <div class="aural-date-range-picker__dropdown">
      ${n}
      <div class="aural-date-range-picker__footer">
        <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
        <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
      </div>
    </div>
  `,a.appendChild(r),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),setTimeout(()=>{if(typeof window.Aural<"u"&&window.Aural.initDateRangePicker){const t={onChange:d=>console.log("Selected range:",d)};e.startDate&&(t.startDate=new Date(e.startDate)),e.endDate&&(t.endDate=new Date(e.endDate)),e.minDate&&(t.minDate=new Date(e.minDate)),e.maxDate&&(t.maxDate=new Date(e.maxDate)),e.maxRange&&(t.maxRange=e.maxRange),window.Aural.initDateRangePicker("#"+r.id,t)}},100),a};function l(e){return`
    <div class="aural-date-range-picker__calendar">
      <div class="aural-date-range-picker__calendar-header">
        <button class="aural-date-range-picker__nav-button" data-action="prev" ${e===1?"disabled":""} aria-label="Previous month">
          <i data-lucide="chevron-left"></i>
        </button>
        <div class="aural-date-range-picker__month-label">January 2026</div>
        <button class="aural-date-range-picker__nav-button" data-action="next${e===1?"2":""}" ${e===0&&e!==0?"disabled":""} aria-label="Next month">
          <i data-lucide="chevron-right"></i>
        </button>
      </div>
      <div class="aural-date-range-picker__weekdays">
        <div class="aural-date-range-picker__weekday">Su</div>
        <div class="aural-date-range-picker__weekday">Mo</div>
        <div class="aural-date-range-picker__weekday">Tu</div>
        <div class="aural-date-range-picker__weekday">We</div>
        <div class="aural-date-range-picker__weekday">Th</div>
        <div class="aural-date-range-picker__weekday">Fr</div>
        <div class="aural-date-range-picker__weekday">Sa</div>
      </div>
      <div class="aural-date-range-picker__days"></div>
    </div>`}const c={render:o,args:{id:"date-range-basic",startPlaceholder:"Start date",endPlaceholder:"End date",showPresets:!1,dualCalendar:!1}},p={render:o,args:{id:"date-range-preselected",startPlaceholder:"Start date",endPlaceholder:"End date",showPresets:!1,dualCalendar:!1,startDate:new Date(2026,0,20),endDate:new Date(2026,0,27)}},u={render:o,args:{id:"date-range-presets",startPlaceholder:"Start date",endPlaceholder:"End date",showPresets:!0,dualCalendar:!1}},g={render:o,args:{id:"date-range-dual",startPlaceholder:"Start date",endPlaceholder:"End date",showPresets:!1,dualCalendar:!0}},_={render:o,args:{id:"date-range-restricted",startPlaceholder:"Start date",endPlaceholder:"End date",showPresets:!1,dualCalendar:!1,minDate:new Date(2026,0,1),maxDate:new Date(2026,2,31)}},y={render:o,args:{id:"date-range-max-range",startPlaceholder:"Start date",endPlaceholder:"End date",showPresets:!1,dualCalendar:!1,maxRange:30}},v={render:()=>{const e=document.createElement("div");e.className="story-container",e.style.padding="2rem",e.style.minHeight="600px";const a=document.createElement("div");a.style.background="var(--color-bg-tertiary)",a.style.padding="var(--space-6)",a.style.borderRadius="var(--radius-lg)",a.style.maxWidth="500px";const r=document.createElement("h3");r.textContent="Select Your Stay",r.style.margin="0 0 var(--space-4) 0",r.style.color="var(--color-text-primary)",r.style.fontSize="var(--text-lg)";const n=document.createElement("div");n.id="date-range-booking",n.className="aural-date-range-picker",n.innerHTML=`
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Check-in" readonly aria-label="Check-in date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Check-out" readonly aria-label="Check-out date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div class="aural-date-range-picker__calendars">
          ${l(0)}
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    `;const t=document.createElement("div");return t.style.marginTop="var(--space-4)",t.style.padding="var(--space-3)",t.style.background="var(--color-bg-primary)",t.style.borderRadius="var(--radius-md)",t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="center",t.innerHTML=`
      <span style="color: var(--color-text-secondary); font-size: var(--text-sm);">Duration:</span>
      <span style="color: var(--color-primary); font-weight: var(--font-semibold);" id="duration-booking">0 nights</span>
    `,a.appendChild(r),a.appendChild(n),a.appendChild(t),e.appendChild(a),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDateRangePicker&&window.Aural.initDateRangePicker("#date-range-booking",{minDate:new Date,onChange:d=>{if(d.start&&d.end){const i=Math.ceil((d.end.getTime()-d.start.getTime())/864e5),s=document.getElementById("duration-booking");s&&(s.textContent=`${i} night${i!==1?"s":""}`)}}})},100),e}},k={render:()=>{const e=document.createElement("div");e.className="story-container",e.style.padding="2rem",e.style.minHeight="600px";const a=document.createElement("div"),r=document.createElement("div");r.style.display="flex",r.style.alignItems="center",r.style.gap="var(--space-3)",r.style.marginBottom="var(--space-4)";const n=document.createElement("label");n.textContent="Date Range:",n.style.fontWeight="var(--font-semibold)",n.style.color="var(--color-text-primary)";const t=document.createElement("div");t.id="date-range-analytics",t.className="aural-date-range-picker",t.style.flex="1",t.innerHTML=`
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Start date" readonly aria-label="Start date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="End date" readonly aria-label="End date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div style="display: flex; gap: var(--space-4);">
          <div class="aural-date-range-picker__presets">
            <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
            <div class="aural-date-range-picker__preset-list">
              <button class="aural-date-range-picker__preset-button" data-preset="today">Today</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
            </div>
          </div>
          <div class="aural-date-range-picker__calendars">
            ${l(0)}
          </div>
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    `;const d=document.createElement("div");return d.style.padding="var(--space-4)",d.style.background="var(--color-bg-tertiary)",d.style.borderRadius="var(--radius-md)",d.style.textAlign="center",d.innerHTML=`
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-2);">Total Views</div>
      <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-primary);">12,458</div>
    `,r.appendChild(n),r.appendChild(t),a.appendChild(r),a.appendChild(d),e.appendChild(a),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDateRangePicker&&window.Aural.initDateRangePicker("#date-range-analytics",{onChange:i=>console.log("Analytics range:",i)})},100),e}},m={render:()=>{const e=document.createElement("div");e.className="story-container",e.style.padding="2rem",e.style.minHeight="600px";const a=document.createElement("div");a.style.border="1px solid var(--color-border-subtle)",a.style.padding="var(--space-6)",a.style.borderRadius="var(--radius-lg)",a.style.maxWidth="600px";const r=document.createElement("h3");r.textContent="Generate Report",r.style.margin="0 0 var(--space-6) 0",r.style.color="var(--color-text-primary)",r.style.fontSize="var(--text-xl)";const n=document.createElement("div");n.style.display="grid",n.style.gap="var(--space-4)";const t=document.createElement("label");t.textContent="Report Period",t.style.display="block",t.style.fontWeight="var(--font-medium)",t.style.color="var(--color-text-primary)",t.style.marginBottom="var(--space-2)";const d=document.createElement("div");d.id="date-range-report",d.className="aural-date-range-picker",d.innerHTML=`
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Start date" readonly aria-label="Start date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="End date" readonly aria-label="End date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div style="display: flex; gap: var(--space-4);">
          <div class="aural-date-range-picker__presets">
            <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
            <div class="aural-date-range-picker__preset-list">
              <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
              <button class="aural-date-range-picker__preset-button" data-preset="lastMonth">Last Month</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisQuarter">This Quarter</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisYear">This Year</button>
            </div>
          </div>
          <div class="aural-date-range-picker__calendars">
            ${l(0)}
          </div>
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    `;const i=document.createElement("button");i.className="btn btn-primary",i.style.marginTop="var(--space-2)",i.innerHTML=`
      <i data-lucide="download" style="width: 16px; height: 16px; margin-right: var(--space-2);"></i>
      Generate Report
    `;const s=document.createElement("div");return s.appendChild(t),s.appendChild(d),n.appendChild(s),n.appendChild(i),a.appendChild(r),a.appendChild(n),e.appendChild(a),setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDateRangePicker&&window.Aural.initDateRangePicker("#date-range-report",{onChange:K=>console.log("Report range:",K)})},100),e}},b={render:e=>O(()=>{const a=document.createElement("div");return a.className="aural-date-range-picker",a.style.margin="0 auto",a.style.maxWidth="400px",a.innerHTML=`
        <div class="aural-date-range-picker__input-wrapper">
          <div class="aural-date-range-picker__inputs">
            <input type="text" class="aural-date-range-picker__input"
                   placeholder="${e.startPlaceholder||"Start date"}"
                   readonly aria-label="${e.startPlaceholder||"Start date"}">
            <span class="aural-date-range-picker__separator">to</span>
            <input type="text" class="aural-date-range-picker__input"
                   placeholder="${e.endPlaceholder||"End date"}"
                   readonly aria-label="${e.endPlaceholder||"End date"}">
          </div>
          <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
        </div>
      `,setTimeout(()=>{typeof window.lucide<"u"&&window.lucide.createIcons()},0),a}),args:{startPlaceholder:"Start date",endPlaceholder:"End date"},argTypes:{startPlaceholder:{control:"text",description:"Placeholder text for start date input"},endPlaceholder:{control:"text",description:"Placeholder text for end date input"}}};var h,f,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: createDateRangePicker,
  args: {
    id: 'date-range-basic',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false
  }
}`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var P,x,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: createDateRangePicker,
  args: {
    id: 'date-range-preselected',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false,
    startDate: new Date(2026, 0, 20),
    // January 20, 2026
    endDate: new Date(2026, 0, 27) // January 27, 2026
  }
}`,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,E,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: createDateRangePicker,
  args: {
    id: 'date-range-presets',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: true,
    dualCalendar: false
  }
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var T,S,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: createDateRangePicker,
  args: {
    id: 'date-range-dual',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: true
  }
}`,...(L=(S=g.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var M,A,$;_.parameters={..._.parameters,docs:{...(M=_.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: createDateRangePicker,
  args: {
    id: 'date-range-restricted',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false,
    minDate: new Date(2026, 0, 1),
    // January 1, 2026
    maxDate: new Date(2026, 2, 31) // March 31, 2026
  }
}`,...($=(A=_.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var W,I,H;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: createDateRangePicker,
  args: {
    id: 'date-range-max-range',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    showPresets: false,
    dualCalendar: false,
    maxRange: 30 // Maximum 30 days
  }
}`,...(H=(I=y.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var N,z,B;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';
    const bookingCard = document.createElement('div');
    bookingCard.style.background = 'var(--color-bg-tertiary)';
    bookingCard.style.padding = 'var(--space-6)';
    bookingCard.style.borderRadius = 'var(--radius-lg)';
    bookingCard.style.maxWidth = '500px';
    const title = document.createElement('h3');
    title.textContent = 'Select Your Stay';
    title.style.margin = '0 0 var(--space-4) 0';
    title.style.color = 'var(--color-text-primary)';
    title.style.fontSize = 'var(--text-lg)';
    const datePicker = document.createElement('div');
    datePicker.id = 'date-range-booking';
    datePicker.className = 'aural-date-range-picker';
    datePicker.innerHTML = \`
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Check-in" readonly aria-label="Check-in date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Check-out" readonly aria-label="Check-out date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div class="aural-date-range-picker__calendars">
          \${createCalendar(0)}
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    \`;
    const durationDisplay = document.createElement('div');
    durationDisplay.style.marginTop = 'var(--space-4)';
    durationDisplay.style.padding = 'var(--space-3)';
    durationDisplay.style.background = 'var(--color-bg-primary)';
    durationDisplay.style.borderRadius = 'var(--radius-md)';
    durationDisplay.style.display = 'flex';
    durationDisplay.style.justifyContent = 'space-between';
    durationDisplay.style.alignItems = 'center';
    durationDisplay.innerHTML = \`
      <span style="color: var(--color-text-secondary); font-size: var(--text-sm);">Duration:</span>
      <span style="color: var(--color-primary); font-weight: var(--font-semibold);" id="duration-booking">0 nights</span>
    \`;
    bookingCard.appendChild(title);
    bookingCard.appendChild(datePicker);
    bookingCard.appendChild(durationDisplay);
    container.appendChild(bookingCard);

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    // Initialize with booking logic
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initDateRangePicker) {
        (window as any).Aural.initDateRangePicker('#date-range-booking', {
          minDate: new Date(),
          onChange: (range: any) => {
            if (range.start && range.end) {
              const days = Math.ceil((range.end.getTime() - range.start.getTime()) / (1000 * 60 * 60 * 24));
              const durationEl = document.getElementById('duration-booking');
              if (durationEl) {
                durationEl.textContent = \`\${days} night\${days !== 1 ? 's' : ''}\`;
              }
            }
          }
        });
      }
    }, 100);
    return container;
  }
}`,...(B=(z=v.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var Q,V,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';
    const wrapper = document.createElement('div');
    const filterRow = document.createElement('div');
    filterRow.style.display = 'flex';
    filterRow.style.alignItems = 'center';
    filterRow.style.gap = 'var(--space-3)';
    filterRow.style.marginBottom = 'var(--space-4)';
    const label = document.createElement('label');
    label.textContent = 'Date Range:';
    label.style.fontWeight = 'var(--font-semibold)';
    label.style.color = 'var(--color-text-primary)';
    const datePicker = document.createElement('div');
    datePicker.id = 'date-range-analytics';
    datePicker.className = 'aural-date-range-picker';
    datePicker.style.flex = '1';
    datePicker.innerHTML = \`
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Start date" readonly aria-label="Start date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="End date" readonly aria-label="End date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div style="display: flex; gap: var(--space-4);">
          <div class="aural-date-range-picker__presets">
            <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
            <div class="aural-date-range-picker__preset-list">
              <button class="aural-date-range-picker__preset-button" data-preset="today">Today</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
            </div>
          </div>
          <div class="aural-date-range-picker__calendars">
            \${createCalendar(0)}
          </div>
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    \`;
    const statsCard = document.createElement('div');
    statsCard.style.padding = 'var(--space-4)';
    statsCard.style.background = 'var(--color-bg-tertiary)';
    statsCard.style.borderRadius = 'var(--radius-md)';
    statsCard.style.textAlign = 'center';
    statsCard.innerHTML = \`
      <div style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-2);">Total Views</div>
      <div style="font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-primary);">12,458</div>
    \`;
    filterRow.appendChild(label);
    filterRow.appendChild(datePicker);
    wrapper.appendChild(filterRow);
    wrapper.appendChild(statsCard);
    container.appendChild(wrapper);

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    // Initialize
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initDateRangePicker) {
        (window as any).Aural.initDateRangePicker('#date-range-analytics', {
          onChange: (range: any) => console.log('Analytics range:', range)
        });
      }
    }, 100);
    return container;
  }
}`,...(Y=(V=k.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var F,G,J;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';
    const reportCard = document.createElement('div');
    reportCard.style.border = '1px solid var(--color-border-subtle)';
    reportCard.style.padding = 'var(--space-6)';
    reportCard.style.borderRadius = 'var(--radius-lg)';
    reportCard.style.maxWidth = '600px';
    const title = document.createElement('h3');
    title.textContent = 'Generate Report';
    title.style.margin = '0 0 var(--space-6) 0';
    title.style.color = 'var(--color-text-primary)';
    title.style.fontSize = 'var(--text-xl)';
    const fieldWrapper = document.createElement('div');
    fieldWrapper.style.display = 'grid';
    fieldWrapper.style.gap = 'var(--space-4)';
    const fieldLabel = document.createElement('label');
    fieldLabel.textContent = 'Report Period';
    fieldLabel.style.display = 'block';
    fieldLabel.style.fontWeight = 'var(--font-medium)';
    fieldLabel.style.color = 'var(--color-text-primary)';
    fieldLabel.style.marginBottom = 'var(--space-2)';
    const datePicker = document.createElement('div');
    datePicker.id = 'date-range-report';
    datePicker.className = 'aural-date-range-picker';
    datePicker.innerHTML = \`
      <div class="aural-date-range-picker__input-wrapper">
        <div class="aural-date-range-picker__inputs">
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="Start date" readonly aria-label="Start date">
          <span class="aural-date-range-picker__separator">to</span>
          <input type="text" class="aural-date-range-picker__input"
                 placeholder="End date" readonly aria-label="End date">
        </div>
        <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
      </div>
      <div class="aural-date-range-picker__dropdown">
        <div style="display: flex; gap: var(--space-4);">
          <div class="aural-date-range-picker__presets">
            <div class="aural-date-range-picker__preset-label">Quick Ranges</div>
            <div class="aural-date-range-picker__preset-list">
              <button class="aural-date-range-picker__preset-button" data-preset="last7">Last 7 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="last30">Last 30 Days</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisMonth">This Month</button>
              <button class="aural-date-range-picker__preset-button" data-preset="lastMonth">Last Month</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisQuarter">This Quarter</button>
              <button class="aural-date-range-picker__preset-button" data-preset="thisYear">This Year</button>
            </div>
          </div>
          <div class="aural-date-range-picker__calendars">
            \${createCalendar(0)}
          </div>
        </div>
        <div class="aural-date-range-picker__footer">
          <button class="aural-date-range-picker__footer-button" data-action="clear">Clear</button>
          <button class="aural-date-range-picker__footer-button aural-date-range-picker__footer-button--primary" data-action="apply">Apply</button>
        </div>
      </div>
    \`;
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.style.marginTop = 'var(--space-2)';
    button.innerHTML = \`
      <i data-lucide="download" style="width: 16px; height: 16px; margin-right: var(--space-2);"></i>
      Generate Report
    \`;
    const fieldDiv = document.createElement('div');
    fieldDiv.appendChild(fieldLabel);
    fieldDiv.appendChild(datePicker);
    fieldWrapper.appendChild(fieldDiv);
    fieldWrapper.appendChild(button);
    reportCard.appendChild(title);
    reportCard.appendChild(fieldWrapper);
    container.appendChild(reportCard);

    // Initialize Lucide icons
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 0);

    // Initialize
    setTimeout(() => {
      if (typeof (window as any).Aural !== 'undefined' && (window as any).Aural.initDateRangePicker) {
        (window as any).Aural.initDateRangePicker('#date-range-report', {
          onChange: (range: any) => console.log('Report range:', range)
        });
      }
    }, 100);
    return container;
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var U,j,q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    return createThemeGrid(() => {
      const datePicker = document.createElement('div');
      datePicker.className = 'aural-date-range-picker';
      datePicker.style.margin = '0 auto';
      datePicker.style.maxWidth = '400px';
      datePicker.innerHTML = \`
        <div class="aural-date-range-picker__input-wrapper">
          <div class="aural-date-range-picker__inputs">
            <input type="text" class="aural-date-range-picker__input"
                   placeholder="\${args.startPlaceholder || 'Start date'}"
                   readonly aria-label="\${args.startPlaceholder || 'Start date'}">
            <span class="aural-date-range-picker__separator">to</span>
            <input type="text" class="aural-date-range-picker__input"
                   placeholder="\${args.endPlaceholder || 'End date'}"
                   readonly aria-label="\${args.endPlaceholder || 'End date'}">
          </div>
          <i data-lucide="calendar" class="aural-date-range-picker__icon" aria-hidden="true"></i>
        </div>
      \`;

      // Initialize Lucide icons
      setTimeout(() => {
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons();
        }
      }, 0);
      return datePicker;
    });
  },
  args: {
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date'
  },
  argTypes: {
    startPlaceholder: {
      control: 'text',
      description: 'Placeholder text for start date input'
    },
    endPlaceholder: {
      control: 'text',
      description: 'Placeholder text for end date input'
    }
  }
}`,...(q=(j=b.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const ee=["Basic","WithPreselectedRange","WithPresets","DualCalendarView","WithDateRestrictions","WithMaxRangeLimit","BookingPattern","AnalyticsDashboardPattern","ReportFilterPattern","ThemeComparison"];export{k as AnalyticsDashboardPattern,c as Basic,v as BookingPattern,g as DualCalendarView,m as ReportFilterPattern,b as ThemeComparison,_ as WithDateRestrictions,y as WithMaxRangeLimit,p as WithPreselectedRange,u as WithPresets,ee as __namedExportsOrder,Z as default};
