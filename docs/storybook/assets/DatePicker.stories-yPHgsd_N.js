const Q={title:"Components/DatePicker",tags:["autodocs"],parameters:{docs:{description:{component:"A comprehensive calendar-based date selection component with month/year navigation, keyboard support, date restrictions, and customizable formats. Perfect for booking systems, forms, scheduling applications, and any interface requiring date input."}}},argTypes:{id:{control:"text",description:"Unique identifier for the date picker"},placeholder:{control:"text",description:"Placeholder text for the input"},defaultDate:{control:"date",description:"Default selected date"},minDate:{control:"date",description:"Minimum selectable date"},maxDate:{control:"date",description:"Maximum selectable date"},format:{control:"select",options:["MM/DD/YYYY","DD/MM/YYYY","YYYY-MM-DD","MMMM DD, YYYY"],description:"Date format"},disableWeekends:{control:"boolean",description:"Disable weekend selection"}}},y=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
  <line x1="16" y1="2" x2="16" y2="6"></line>
  <line x1="8" y1="2" x2="8" y2="6"></line>
  <line x1="3" y1="10" x2="21" y2="10"></line>
</svg>`,b='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',D='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',d=e=>{const t=document.createElement("div");t.className="story-container",t.style.padding="2rem",t.style.minHeight="500px";const a=document.createElement("div");a.id=e.id||"date-picker-default",a.className="aural-date-picker";const i=e.defaultDate?new Date(e.defaultDate).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}):"";return a.innerHTML=`
    <div class="aural-date-picker__input-wrapper">
      <input type="text" class="aural-date-picker__input" placeholder="${e.placeholder||"Select date..."}" ${i?`value="${i}"`:""} readonly>
      <div class="aural-date-picker__icon">
        ${y}
      </div>
    </div>
    <div class="aural-date-picker__calendar">
      <div class="aural-date-picker__header">
        <button class="aural-date-picker__nav-button" aria-label="Previous month">
          ${b}
        </button>
        <div class="aural-date-picker__current-month">January 2026</div>
        <button class="aural-date-picker__nav-button" aria-label="Next month">
          ${D}
        </button>
      </div>
      <div class="aural-date-picker__weekdays">
        <div class="aural-date-picker__weekday">Su</div>
        <div class="aural-date-picker__weekday">Mo</div>
        <div class="aural-date-picker__weekday">Tu</div>
        <div class="aural-date-picker__weekday">We</div>
        <div class="aural-date-picker__weekday">Th</div>
        <div class="aural-date-picker__weekday">Fr</div>
        <div class="aural-date-picker__weekday">Sa</div>
      </div>
      <div class="aural-date-picker__days">
        <!-- Days rendered by JavaScript -->
      </div>
      <div class="aural-date-picker__footer">
        <button class="aural-date-picker__footer-button">Today</button>
        <button class="aural-date-picker__footer-button">Clear</button>
      </div>
    </div>
  `,t.appendChild(a),setTimeout(()=>{if(typeof window.Aural<"u"&&window.Aural.initDatePicker){const r={format:e.format||"MM/DD/YYYY",onChange:c=>console.log("Selected date:",c)};e.defaultDate&&(r.defaultDate=new Date(e.defaultDate)),e.minDate&&(r.minDate=new Date(e.minDate)),e.maxDate&&(r.maxDate=new Date(e.maxDate)),e.disableWeekends&&(r.disableWeekends=!0),window.Aural.initDatePicker(a.id,r)}},100),t},o={render:d,args:{id:"date-picker-default",placeholder:"Select date..."}},s={render:d,args:{id:"date-picker-preselected",placeholder:"Select date...",defaultDate:new Date(2026,0,26)}},u={render:d,args:{id:"date-picker-restricted",placeholder:"Select date (Jan 15 - Feb 15, 2026)...",minDate:new Date(2026,0,15),maxDate:new Date(2026,1,15)}},p={render:d,args:{id:"date-picker-no-weekends",placeholder:"Select weekday...",disableWeekends:!0}},k={render:d,args:{id:"date-picker-iso",placeholder:"YYYY-MM-DD",format:"YYYY-MM-DD",defaultDate:new Date(2026,0,26)}},v={render:d,args:{id:"date-picker-eu",placeholder:"DD/MM/YYYY",format:"DD/MM/YYYY",defaultDate:new Date(2026,0,26)}},_={render:d,args:{id:"date-picker-long",placeholder:"Month DD, YYYY",format:"MMMM DD, YYYY",defaultDate:new Date(2026,0,26)}},h={render:e=>{const t=document.createElement("div");t.className="story-container",t.style.padding="2rem",t.style.minHeight="500px";const a=document.createElement("div");return a.id=e.id||"date-range-picker",a.className="aural-date-picker",a.innerHTML=`
      <div class="aural-date-picker__input-wrapper">
        <input type="text" class="aural-date-picker__input" placeholder="Select date range..." readonly>
        <div class="aural-date-picker__icon">
          ${y}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            ${b}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            ${D}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days">
          <!-- Days rendered by JavaScript -->
        </div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    `,t.appendChild(a),setTimeout(()=>{typeof window.Aural<"u"&&window.Aural.initDateRangePicker&&window.Aural.initDateRangePicker(a.id,{format:"MM/DD/YYYY",separator:" - ",onChange:i=>console.log("Selected range:",i)})},100),t},args:{id:"date-range-picker"}},m={render:()=>{const e=document.createElement("div");e.className="story-container",e.style.padding="2rem",e.style.minHeight="600px",e.style.display="flex",e.style.gap="var(--space-6)",e.style.flexWrap="wrap";const t=document.createElement("div");t.style.flex="1",t.style.minWidth="300px";const a=document.createElement("label");a.setAttribute("for","checkin-input"),a.style.display="block",a.style.fontSize="var(--text-sm)",a.style.fontWeight="var(--font-semibold)",a.style.marginBottom="var(--space-2)",a.textContent="Check-in Date";const i=document.createElement("div");i.id="date-picker-checkin",i.className="aural-date-picker",i.innerHTML=`
      <div class="aural-date-picker__input-wrapper">
        <input type="text" id="checkin-input" class="aural-date-picker__input" placeholder="Select check-in..." readonly>
        <div class="aural-date-picker__icon">
          ${y}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            ${b}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            ${D}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days"></div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    `,t.appendChild(a),t.appendChild(i);const r=document.createElement("div");r.style.flex="1",r.style.minWidth="300px";const c=document.createElement("label");c.setAttribute("for","checkout-input"),c.style.display="block",c.style.fontSize="var(--text-sm)",c.style.fontWeight="var(--font-semibold)",c.style.marginBottom="var(--space-2)",c.textContent="Check-out Date";const l=document.createElement("div");return l.id="date-picker-checkout",l.className="aural-date-picker",l.innerHTML=`
      <div class="aural-date-picker__input-wrapper">
        <input type="text" id="checkout-input" class="aural-date-picker__input" placeholder="Select check-out..." readonly>
        <div class="aural-date-picker__icon">
          ${y}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            ${b}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            ${D}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days"></div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    `,r.appendChild(c),r.appendChild(l),e.appendChild(t),e.appendChild(r),setTimeout(()=>{if(typeof window.Aural<"u"&&window.Aural.initDatePicker){let w=null;window.Aural.initDatePicker("date-picker-checkin",{minDate:new Date,format:"MM/DD/YYYY",onChange:n=>{if(w=n,f&&f.setMinDate){const g=new Date(n.getTime()+864e5);f.setMinDate(g)}console.log("Check-in selected:",n)}});const f=window.Aural.initDatePicker("date-picker-checkout",{minDate:new Date,format:"MM/DD/YYYY",onChange:n=>{if(console.log("Check-out selected:",n),w){const g=Math.ceil((n.getTime()-w.getTime())/864e5);console.log("Booking duration:",g,"days")}}})}},100),e}};var Y,M,x;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: createDatePicker,
  args: {
    id: 'date-picker-default',
    placeholder: 'Select date...'
  }
}`,...(x=(M=o.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var P,S,C;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: createDatePicker,
  args: {
    id: 'date-picker-preselected',
    placeholder: 'Select date...',
    defaultDate: new Date(2026, 0, 26) // January 26, 2026
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var W,T,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: createDatePicker,
  args: {
    id: 'date-picker-restricted',
    placeholder: 'Select date (Jan 15 - Feb 15, 2026)...',
    minDate: new Date(2026, 0, 15),
    // January 15, 2026
    maxDate: new Date(2026, 1, 15) // February 15, 2026
  }
}`,...(L=(T=u.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var $,E,A;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: createDatePicker,
  args: {
    id: 'date-picker-no-weekends',
    placeholder: 'Select weekday...',
    disableWeekends: true
  }
}`,...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var N,F,J;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: createDatePicker,
  args: {
    id: 'date-picker-iso',
    placeholder: 'YYYY-MM-DD',
    format: 'YYYY-MM-DD',
    defaultDate: new Date(2026, 0, 26)
  }
}`,...(J=(F=k.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var I,H,R;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: createDatePicker,
  args: {
    id: 'date-picker-eu',
    placeholder: 'DD/MM/YYYY',
    format: 'DD/MM/YYYY',
    defaultDate: new Date(2026, 0, 26)
  }
}`,...(R=(H=v.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,z,j;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: createDatePicker,
  args: {
    id: 'date-picker-long',
    placeholder: 'Month DD, YYYY',
    format: 'MMMM DD, YYYY',
    defaultDate: new Date(2026, 0, 26)
  }
}`,...(j=(z=_.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var O,U,q;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '500px';
    const datePicker = document.createElement('div');
    datePicker.id = args.id || 'date-range-picker';
    datePicker.className = 'aural-date-picker';
    datePicker.innerHTML = \`
      <div class="aural-date-picker__input-wrapper">
        <input type="text" class="aural-date-picker__input" placeholder="Select date range..." readonly>
        <div class="aural-date-picker__icon">
          \${calendarIcon}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            \${chevronLeft}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            \${chevronRight}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days">
          <!-- Days rendered by JavaScript -->
        </div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    \`;
    container.appendChild(datePicker);

    // Initialize the date range picker
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined' && window.Aural.initDateRangePicker) {
        window.Aural.initDateRangePicker(datePicker.id, {
          format: 'MM/DD/YYYY',
          separator: ' - ',
          onChange: (range: any) => console.log('Selected range:', range)
        });
      }
    }, 100);
    return container;
  },
  args: {
    id: 'date-range-picker'
  }
}`,...(q=(U=h.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var V,G,K;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'story-container';
    container.style.padding = '2rem';
    container.style.minHeight = '600px';
    container.style.display = 'flex';
    container.style.gap = 'var(--space-6)';
    container.style.flexWrap = 'wrap';

    // Check-in date picker
    const checkinWrapper = document.createElement('div');
    checkinWrapper.style.flex = '1';
    checkinWrapper.style.minWidth = '300px';
    const checkinLabel = document.createElement('label');
    checkinLabel.setAttribute('for', 'checkin-input');
    checkinLabel.style.display = 'block';
    checkinLabel.style.fontSize = 'var(--text-sm)';
    checkinLabel.style.fontWeight = 'var(--font-semibold)';
    checkinLabel.style.marginBottom = 'var(--space-2)';
    checkinLabel.textContent = 'Check-in Date';
    const checkinPicker = document.createElement('div');
    checkinPicker.id = 'date-picker-checkin';
    checkinPicker.className = 'aural-date-picker';
    checkinPicker.innerHTML = \`
      <div class="aural-date-picker__input-wrapper">
        <input type="text" id="checkin-input" class="aural-date-picker__input" placeholder="Select check-in..." readonly>
        <div class="aural-date-picker__icon">
          \${calendarIcon}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            \${chevronLeft}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            \${chevronRight}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days"></div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    \`;
    checkinWrapper.appendChild(checkinLabel);
    checkinWrapper.appendChild(checkinPicker);

    // Check-out date picker
    const checkoutWrapper = document.createElement('div');
    checkoutWrapper.style.flex = '1';
    checkoutWrapper.style.minWidth = '300px';
    const checkoutLabel = document.createElement('label');
    checkoutLabel.setAttribute('for', 'checkout-input');
    checkoutLabel.style.display = 'block';
    checkoutLabel.style.fontSize = 'var(--text-sm)';
    checkoutLabel.style.fontWeight = 'var(--font-semibold)';
    checkoutLabel.style.marginBottom = 'var(--space-2)';
    checkoutLabel.textContent = 'Check-out Date';
    const checkoutPicker = document.createElement('div');
    checkoutPicker.id = 'date-picker-checkout';
    checkoutPicker.className = 'aural-date-picker';
    checkoutPicker.innerHTML = \`
      <div class="aural-date-picker__input-wrapper">
        <input type="text" id="checkout-input" class="aural-date-picker__input" placeholder="Select check-out..." readonly>
        <div class="aural-date-picker__icon">
          \${calendarIcon}
        </div>
      </div>
      <div class="aural-date-picker__calendar">
        <div class="aural-date-picker__header">
          <button class="aural-date-picker__nav-button" aria-label="Previous month">
            \${chevronLeft}
          </button>
          <div class="aural-date-picker__current-month">January 2026</div>
          <button class="aural-date-picker__nav-button" aria-label="Next month">
            \${chevronRight}
          </button>
        </div>
        <div class="aural-date-picker__weekdays">
          <div class="aural-date-picker__weekday">Su</div>
          <div class="aural-date-picker__weekday">Mo</div>
          <div class="aural-date-picker__weekday">Tu</div>
          <div class="aural-date-picker__weekday">We</div>
          <div class="aural-date-picker__weekday">Th</div>
          <div class="aural-date-picker__weekday">Fr</div>
          <div class="aural-date-picker__weekday">Sa</div>
        </div>
        <div class="aural-date-picker__days"></div>
        <div class="aural-date-picker__footer">
          <button class="aural-date-picker__footer-button">Today</button>
          <button class="aural-date-picker__footer-button">Clear</button>
        </div>
      </div>
    \`;
    checkoutWrapper.appendChild(checkoutLabel);
    checkoutWrapper.appendChild(checkoutPicker);
    container.appendChild(checkinWrapper);
    container.appendChild(checkoutWrapper);

    // Initialize the date pickers with linked behavior
    setTimeout(() => {
      if (typeof window.Aural !== 'undefined' && window.Aural.initDatePicker) {
        let checkinDate: Date | null = null;
        window.Aural.initDatePicker('date-picker-checkin', {
          minDate: new Date(),
          format: 'MM/DD/YYYY',
          onChange: (date: Date) => {
            checkinDate = date;
            // Update checkout minimum date to be after check-in
            if (checkoutPickerInstance && checkoutPickerInstance.setMinDate) {
              const nextDay = new Date(date.getTime() + 86400000); // +1 day
              checkoutPickerInstance.setMinDate(nextDay);
            }
            console.log('Check-in selected:', date);
          }
        });
        const checkoutPickerInstance = window.Aural.initDatePicker('date-picker-checkout', {
          minDate: new Date(),
          format: 'MM/DD/YYYY',
          onChange: (date: Date) => {
            console.log('Check-out selected:', date);
            if (checkinDate) {
              const duration = Math.ceil((date.getTime() - checkinDate.getTime()) / 86400000);
              console.log('Booking duration:', duration, 'days');
            }
          }
        });
      }
    }, 100);
    return container;
  }
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const X=["Default","WithPreselectedDate","WithDateRestrictions","WithDisabledWeekends","ISOFormat","EuropeanFormat","LongFormat","DateRangePicker","BookingPattern"];export{m as BookingPattern,h as DateRangePicker,o as Default,v as EuropeanFormat,k as ISOFormat,_ as LongFormat,u as WithDateRestrictions,p as WithDisabledWeekends,s as WithPreselectedDate,X as __namedExportsOrder,Q as default};
