const Oa={title:"Components/Stats Card",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error"],description:"Semantic color variant",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:"The label describing the metric"},value:{control:"text",description:"The main value/metric to display"},icon:{control:"text",description:'Lucide icon name (e.g., "dollar-sign", "users")'},hasIcon:{control:"boolean",description:"Whether to show an icon"},hasTrend:{control:"boolean",description:"Whether to show trend indicator"},trendDirection:{control:"select",options:["up","down","neutral"],description:"Trend direction"},trendValue:{control:"text",description:"Trend percentage/value"},description:{control:"text",description:"Footer description text"},hasProgress:{control:"boolean",description:"Whether to show progress bar"},progressValue:{control:{type:"range",min:0,max:100,step:1},description:"Progress bar percentage (0-100)"}},parameters:{docs:{description:{component:"Statistical data cards for displaying key metrics, trends, and performance indicators with visual emphasis."}}}},s={args:{label:"Page Views",value:"124.5K",description:"Last 30 days",hasIcon:!1,hasTrend:!1,hasProgress:!1,variant:"default"},render:a=>html`
    <div class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${a.description}</span>
      </div>
    </div>
  `},r={args:{label:"Total Revenue",value:"$45,231",description:"This month",icon:"dollar-sign",hasIcon:!0,hasTrend:!1,hasProgress:!1,variant:"primary"},render:a=>html`
    <div class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
          <div class="aural-stats-card__icon">
            <i data-lucide="${a.icon}" aria-hidden="true"></i>
          </div>
        `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${a.description}</span>
      </div>
    </div>
  `},t={args:{label:"Active Users",value:"8,492",description:"vs last week",icon:"users",hasIcon:!0,hasTrend:!0,trendDirection:"up",trendValue:"8.1%",hasProgress:!1,variant:"success"},render:a=>html`
    <div class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
          <div class="aural-stats-card__icon">
            <i data-lucide="${a.icon}" aria-hidden="true"></i>
          </div>
        `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasTrend||a.description?html`
        <div class="aural-stats-card__footer">
          ${a.hasTrend?html`
            <span class="aural-stats-card__trend aural-stats-card__trend--${a.trendDirection}">
              <i data-lucide="${a.trendDirection==="up"?"trending-up":a.trendDirection==="down"?"trending-down":"minus"}" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              ${a.trendValue}
            </span>
          `:""}
          ${a.description?html`
            <span class="aural-stats-card__description">${a.description}</span>
          `:""}
        </div>
      `:""}
    </div>
  `},d={args:{label:"Customer Loss",value:"127",description:"vs yesterday",icon:"trending-down",hasIcon:!0,hasTrend:!0,trendDirection:"down",trendValue:"3.2%",hasProgress:!1,variant:"warning"},render:a=>html`
    <div class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
          <div class="aural-stats-card__icon">
            <i data-lucide="${a.icon}" aria-hidden="true"></i>
          </div>
        `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasTrend||a.description?html`
        <div class="aural-stats-card__footer">
          ${a.hasTrend?html`
            <span class="aural-stats-card__trend aural-stats-card__trend--${a.trendDirection}">
              <i data-lucide="${a.trendDirection==="up"?"trending-up":a.trendDirection==="down"?"trending-down":"minus"}" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              ${a.trendValue}
            </span>
          `:""}
          ${a.description?html`
            <span class="aural-stats-card__description">${a.description}</span>
          `:""}
        </div>
      `:""}
    </div>
  `},i={args:{label:"Error Rate",value:"2.3%",description:"no change",icon:"alert-circle",hasIcon:!0,hasTrend:!0,trendDirection:"neutral",trendValue:"0.0%",hasProgress:!1,variant:"error"},render:a=>html`
    <div class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
          <div class="aural-stats-card__icon">
            <i data-lucide="${a.icon}" aria-hidden="true"></i>
          </div>
        `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasTrend||a.description?html`
        <div class="aural-stats-card__footer">
          ${a.hasTrend?html`
            <span class="aural-stats-card__trend aural-stats-card__trend--${a.trendDirection}">
              <i data-lucide="${a.trendDirection==="up"?"trending-up":a.trendDirection==="down"?"trending-down":"minus"}" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              ${a.trendValue}
            </span>
          `:""}
          ${a.description?html`
            <span class="aural-stats-card__description">${a.description}</span>
          `:""}
        </div>
      `:""}
    </div>
  `},e={args:{label:"Storage Used",value:"67.8 GB",description:"of 100 GB total",icon:"hard-drive",hasIcon:!0,hasTrend:!1,hasProgress:!0,progressValue:67.8,variant:"primary"},render:a=>html`
    <div class="aural-stats-card${a.variant!=="default"?` aural-stats-card--${a.variant}`:""}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">${a.label}</span>
        ${a.hasIcon?html`
          <div class="aural-stats-card__icon">
            <i data-lucide="${a.icon}" aria-hidden="true"></i>
          </div>
        `:""}
      </div>
      <div class="aural-stats-card__value">${a.value}</div>
      ${a.hasProgress?html`
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar"
               style="width: ${a.progressValue}%"
               role="progressbar"
               aria-valuenow="${a.progressValue}"
               aria-valuemin="0"
               aria-valuemax="100"></div>
        </div>
      `:""}
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">${a.description}</span>
      </div>
    </div>
  `},l={render:()=>html`
    <div class="aural-stats-card aural-stats-card--primary">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Total Revenue</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="dollar-sign" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">$45,231</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Primary variant</span>
      </div>
    </div>
  `},c={render:()=>html`
    <div class="aural-stats-card aural-stats-card--success">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Active Users</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="users" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">8,492</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Success variant</span>
      </div>
    </div>
  `},n={render:()=>html`
    <div class="aural-stats-card aural-stats-card--warning">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Pending Orders</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="clock" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">127</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Warning variant</span>
      </div>
    </div>
  `},u={render:()=>html`
    <div class="aural-stats-card aural-stats-card--error">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Error Rate</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="alert-circle" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">2.3%</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Error variant</span>
      </div>
    </div>
  `},o={render:()=>html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Total Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="dollar-sign" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$45,231</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Primary variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Active Users</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="users" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">8,492</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Success variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Pending Orders</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="clock" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">127</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Warning variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--error">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Error Rate</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="alert-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">2.3%</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Error variant</span>
        </div>
      </div>
    </div>
  `},v={render:()=>html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Total Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="dollar-sign" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$45,231</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            12.5%
          </span>
          <span class="aural-stats-card__description">vs last month</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Active Users</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="users" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">8,492</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            8.1%
          </span>
          <span class="aural-stats-card__description">vs last week</span>
        </div>
      </div>

      <div class="aural-stats-card">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Page Views</span>
        </div>
        <div class="aural-stats-card__value">124.5K</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Last 30 days</span>
        </div>
      </div>

      <div class="aural-stats-card">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Conversions</span>
        </div>
        <div class="aural-stats-card__value">3,842</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Last 30 days</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">CPU Usage</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="cpu" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">72%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">High load detected</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Project Completion</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="check-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">85%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 85%" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">17 of 20 tasks done</span>
        </div>
      </div>
    </div>
  `},_={render:()=>html`
    <div class="aural-stats-card">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Loading...</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="loader-2" aria-hidden="true" style="animation: spin 1s linear infinite;"></i>
        </div>
      </div>
      <div class="aural-stats-card__value" style="opacity: 0.5;">---</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Fetching data...</span>
      </div>
    </div>
    <style>
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  `},p={render:()=>html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Storage Used</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="hard-drive" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">67.8 GB</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 67.8%" role="progressbar" aria-valuenow="67.8" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">of 100 GB total</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Project Completion</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="check-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">85%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 85%" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">17 of 20 tasks done</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">CPU Usage</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="cpu" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">72%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">High load detected</span>
        </div>
      </div>
    </div>
  `},h={render:()=>html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Monthly Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="trending-up" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$124,590</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="arrow-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            18.2% increase
          </span>
          <span class="aural-stats-card__description">from last month</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">New Customers</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="user-plus" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">1,284</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="arrow-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            24% increase
          </span>
          <span class="aural-stats-card__description">from last month</span>
        </div>
      </div>
    </div>
  `},m={render:()=>html`
    <div style="display: grid; gap: var(--space-8);">
      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Primary Variant</h3>
        <div class="aural-stats-card aural-stats-card--primary">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Total Revenue</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="dollar-sign" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">$45,231</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--up">
              <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              12.5%
            </span>
            <span class="aural-stats-card__description">vs last month</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Success Variant</h3>
        <div class="aural-stats-card aural-stats-card--success">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Active Users</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="users" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">8,492</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--up">
              <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              8.1%
            </span>
            <span class="aural-stats-card__description">vs last week</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Warning Variant</h3>
        <div class="aural-stats-card aural-stats-card--warning">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">CPU Usage</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="cpu" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">72%</div>
          <div class="aural-stats-card__progress">
            <div class="aural-stats-card__progress-bar" style="width: 72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__description">High load detected</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Error Variant</h3>
        <div class="aural-stats-card aural-stats-card--error">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Error Rate</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="alert-circle" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">2.3%</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--neutral">
              <i data-lucide="minus" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              0.0%
            </span>
            <span class="aural-stats-card__description">no change</span>
          </div>
        </div>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"View how stats cards appear across all themes. Use the theme switcher in the toolbar to compare."}}}};var g,f,b,$,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Page Views',
    value: '124.5K',
    description: 'Last 30 days',
    hasIcon: false,
    hasTrend: false,
    hasProgress: false,
    variant: 'default'
  },
  render: args => html\`
    <div class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">\${args.description}</span>
      </div>
    </div>
  \`
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Basic stats card with just a label, value, and description.",...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.description}}};var w,T,x,P,V;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Total Revenue',
    value: '$45,231',
    description: 'This month',
    icon: 'dollar-sign',
    hasIcon: true,
    hasTrend: false,
    hasProgress: false,
    variant: 'primary'
  },
  render: args => html\`
    <div class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
          <div class="aural-stats-card__icon">
            <i data-lucide="\${args.icon}" aria-hidden="true"></i>
          </div>
        \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">\${args.description}</span>
      </div>
    </div>
  \`
}`,...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.source},description:{story:"Stats card with an icon for visual categorization.",...(V=(P=r.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};var S,U,D,I,W;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Active Users',
    value: '8,492',
    description: 'vs last week',
    icon: 'users',
    hasIcon: true,
    hasTrend: true,
    trendDirection: 'up',
    trendValue: '8.1%',
    hasProgress: false,
    variant: 'success'
  },
  render: args => html\`
    <div class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
          <div class="aural-stats-card__icon">
            <i data-lucide="\${args.icon}" aria-hidden="true"></i>
          </div>
        \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasTrend || args.description ? html\`
        <div class="aural-stats-card__footer">
          \${args.hasTrend ? html\`
            <span class="aural-stats-card__trend aural-stats-card__trend--\${args.trendDirection}">
              <i data-lucide="\${args.trendDirection === 'up' ? 'trending-up' : args.trendDirection === 'down' ? 'trending-down' : 'minus'}" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              \${args.trendValue}
            </span>
          \` : ''}
          \${args.description ? html\`
            <span class="aural-stats-card__description">\${args.description}</span>
          \` : ''}
        </div>
      \` : ''}
    </div>
  \`
}`,...(D=(U=t.parameters)==null?void 0:U.docs)==null?void 0:D.source},description:{story:"Stats card with an upward trend indicator showing positive growth.",...(W=(I=t.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var k,C,R,E,L;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Customer Loss',
    value: '127',
    description: 'vs yesterday',
    icon: 'trending-down',
    hasIcon: true,
    hasTrend: true,
    trendDirection: 'down',
    trendValue: '3.2%',
    hasProgress: false,
    variant: 'warning'
  },
  render: args => html\`
    <div class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
          <div class="aural-stats-card__icon">
            <i data-lucide="\${args.icon}" aria-hidden="true"></i>
          </div>
        \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasTrend || args.description ? html\`
        <div class="aural-stats-card__footer">
          \${args.hasTrend ? html\`
            <span class="aural-stats-card__trend aural-stats-card__trend--\${args.trendDirection}">
              <i data-lucide="\${args.trendDirection === 'up' ? 'trending-up' : args.trendDirection === 'down' ? 'trending-down' : 'minus'}" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              \${args.trendValue}
            </span>
          \` : ''}
          \${args.description ? html\`
            <span class="aural-stats-card__description">\${args.description}</span>
          \` : ''}
        </div>
      \` : ''}
    </div>
  \`
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source},description:{story:"Stats card with a downward trend indicator showing decline.",...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var A,B,G,H,j;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Error Rate',
    value: '2.3%',
    description: 'no change',
    icon: 'alert-circle',
    hasIcon: true,
    hasTrend: true,
    trendDirection: 'neutral',
    trendValue: '0.0%',
    hasProgress: false,
    variant: 'error'
  },
  render: args => html\`
    <div class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
          <div class="aural-stats-card__icon">
            <i data-lucide="\${args.icon}" aria-hidden="true"></i>
          </div>
        \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasTrend || args.description ? html\`
        <div class="aural-stats-card__footer">
          \${args.hasTrend ? html\`
            <span class="aural-stats-card__trend aural-stats-card__trend--\${args.trendDirection}">
              <i data-lucide="\${args.trendDirection === 'up' ? 'trending-up' : args.trendDirection === 'down' ? 'trending-down' : 'minus'}" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              \${args.trendValue}
            </span>
          \` : ''}
          \${args.description ? html\`
            <span class="aural-stats-card__description">\${args.description}</span>
          \` : ''}
        </div>
      \` : ''}
    </div>
  \`
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:"Stats card with a neutral trend indicator showing no change.",...(j=(H=i.parameters)==null?void 0:H.docs)==null?void 0:j.description}}};var F,O,K,N,M;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Storage Used',
    value: '67.8 GB',
    description: 'of 100 GB total',
    icon: 'hard-drive',
    hasIcon: true,
    hasTrend: false,
    hasProgress: true,
    progressValue: 67.8,
    variant: 'primary'
  },
  render: args => html\`
    <div class="aural-stats-card\${args.variant !== 'default' ? \` aural-stats-card--\${args.variant}\` : ''}">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">\${args.label}</span>
        \${args.hasIcon ? html\`
          <div class="aural-stats-card__icon">
            <i data-lucide="\${args.icon}" aria-hidden="true"></i>
          </div>
        \` : ''}
      </div>
      <div class="aural-stats-card__value">\${args.value}</div>
      \${args.hasProgress ? html\`
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar"
               style="width: \${args.progressValue}%"
               role="progressbar"
               aria-valuenow="\${args.progressValue}"
               aria-valuemin="0"
               aria-valuemax="100"></div>
        </div>
      \` : ''}
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">\${args.description}</span>
      </div>
    </div>
  \`
}`,...(K=(O=e.parameters)==null?void 0:O.docs)==null?void 0:K.source},description:{story:"Stats card with a progress bar showing completion or usage percentage.",...(M=(N=e.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var z,q,J,Q,X;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div class="aural-stats-card aural-stats-card--primary">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Total Revenue</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="dollar-sign" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">$45,231</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Primary variant</span>
      </div>
    </div>
  \`
}`,...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"Primary variant - used for default metrics and brand-related data.",...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,aa,sa,ra;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => html\`
    <div class="aural-stats-card aural-stats-card--success">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Active Users</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="users" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">8,492</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Success variant</span>
      </div>
    </div>
  \`
}`,...(aa=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:aa.source},description:{story:"Success variant - used for positive metrics, growth, and achievements.",...(ra=(sa=c.parameters)==null?void 0:sa.docs)==null?void 0:ra.description}}};var ta,da,ia,ea,la;n.parameters={...n.parameters,docs:{...(ta=n.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => html\`
    <div class="aural-stats-card aural-stats-card--warning">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Pending Orders</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="clock" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">127</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Warning variant</span>
      </div>
    </div>
  \`
}`,...(ia=(da=n.parameters)==null?void 0:da.docs)==null?void 0:ia.source},description:{story:"Warning variant - used for cautionary metrics and approaching limits.",...(la=(ea=n.parameters)==null?void 0:ea.docs)==null?void 0:la.description}}};var ca,na,ua,oa,va;u.parameters={...u.parameters,docs:{...(ca=u.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  render: () => html\`
    <div class="aural-stats-card aural-stats-card--error">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Error Rate</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="alert-circle" aria-hidden="true"></i>
        </div>
      </div>
      <div class="aural-stats-card__value">2.3%</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Error variant</span>
      </div>
    </div>
  \`
}`,...(ua=(na=u.parameters)==null?void 0:na.docs)==null?void 0:ua.source},description:{story:"Error variant - used for negative metrics, errors, and critical issues.",...(va=(oa=u.parameters)==null?void 0:oa.docs)==null?void 0:va.description}}};var _a,pa,ha,ma,ga;o.parameters={...o.parameters,docs:{...(_a=o.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Total Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="dollar-sign" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$45,231</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Primary variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Active Users</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="users" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">8,492</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Success variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Pending Orders</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="clock" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">127</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Warning variant</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--error">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Error Rate</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="alert-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">2.3%</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Error variant</span>
        </div>
      </div>
    </div>
  \`
}`,...(ha=(pa=o.parameters)==null?void 0:pa.docs)==null?void 0:ha.source},description:{story:"All semantic color variants displayed together for comparison.",...(ga=(ma=o.parameters)==null?void 0:ma.docs)==null?void 0:ga.description}}};var fa,ba,$a,ya,wa;v.parameters={...v.parameters,docs:{...(fa=v.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Total Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="dollar-sign" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$45,231</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            12.5%
          </span>
          <span class="aural-stats-card__description">vs last month</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Active Users</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="users" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">8,492</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            8.1%
          </span>
          <span class="aural-stats-card__description">vs last week</span>
        </div>
      </div>

      <div class="aural-stats-card">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Page Views</span>
        </div>
        <div class="aural-stats-card__value">124.5K</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Last 30 days</span>
        </div>
      </div>

      <div class="aural-stats-card">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Conversions</span>
        </div>
        <div class="aural-stats-card__value">3,842</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">Last 30 days</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">CPU Usage</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="cpu" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">72%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">High load detected</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Project Completion</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="check-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">85%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 85%" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">17 of 20 tasks done</span>
        </div>
      </div>
    </div>
  \`
}`,...($a=(ba=v.parameters)==null?void 0:ba.docs)==null?void 0:$a.source},description:{story:`Dashboard grid showing multiple stats cards in a responsive layout.
This is a common pattern for analytics dashboards.`,...(wa=(ya=v.parameters)==null?void 0:ya.docs)==null?void 0:wa.description}}};var Ta,xa,Pa,Va,Sa;_.parameters={..._.parameters,docs:{...(Ta=_.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  render: () => html\`
    <div class="aural-stats-card">
      <div class="aural-stats-card__header">
        <span class="aural-stats-card__label">Loading...</span>
        <div class="aural-stats-card__icon">
          <i data-lucide="loader-2" aria-hidden="true" style="animation: spin 1s linear infinite;"></i>
        </div>
      </div>
      <div class="aural-stats-card__value" style="opacity: 0.5;">---</div>
      <div class="aural-stats-card__footer">
        <span class="aural-stats-card__description">Fetching data...</span>
      </div>
    </div>
    <style>
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  \`
}`,...(Pa=(xa=_.parameters)==null?void 0:xa.docs)==null?void 0:Pa.source},description:{story:"Loading state with skeleton placeholder.",...(Sa=(Va=_.parameters)==null?void 0:Va.docs)==null?void 0:Sa.description}}};var Ua,Da,Ia,Wa,ka;p.parameters={...p.parameters,docs:{...(Ua=p.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Storage Used</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="hard-drive" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">67.8 GB</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 67.8%" role="progressbar" aria-valuenow="67.8" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">of 100 GB total</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Project Completion</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="check-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">85%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 85%" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">17 of 20 tasks done</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--warning">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">CPU Usage</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="cpu" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">72%</div>
        <div class="aural-stats-card__progress">
          <div class="aural-stats-card__progress-bar" style="width: 72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__description">High load detected</span>
        </div>
      </div>
    </div>
  \`
}`,...(Ia=(Da=p.parameters)==null?void 0:Da.docs)==null?void 0:Ia.source},description:{story:"Multiple stats cards with progress bars showing resource usage.",...(ka=(Wa=p.parameters)==null?void 0:Wa.docs)==null?void 0:ka.description}}};var Ca,Ra,Ea,La,Aa;h.parameters={...h.parameters,docs:{...(Ca=h.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">
      <div class="aural-stats-card aural-stats-card--primary">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">Monthly Revenue</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="trending-up" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">$124,590</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="arrow-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            18.2% increase
          </span>
          <span class="aural-stats-card__description">from last month</span>
        </div>
      </div>

      <div class="aural-stats-card aural-stats-card--success">
        <div class="aural-stats-card__header">
          <span class="aural-stats-card__label">New Customers</span>
          <div class="aural-stats-card__icon">
            <i data-lucide="user-plus" aria-hidden="true"></i>
          </div>
        </div>
        <div class="aural-stats-card__value">1,284</div>
        <div class="aural-stats-card__footer">
          <span class="aural-stats-card__trend aural-stats-card__trend--up">
            <i data-lucide="arrow-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
            24% increase
          </span>
          <span class="aural-stats-card__description">from last month</span>
        </div>
      </div>
    </div>
  \`
}`,...(Ea=(Ra=h.parameters)==null?void 0:Ra.docs)==null?void 0:Ea.source},description:{story:"Large featured cards for highlighting key metrics on a dashboard.",...(Aa=(La=h.parameters)==null?void 0:La.docs)==null?void 0:Aa.description}}};var Ba,Ga,Ha,ja,Fa;m.parameters={...m.parameters,docs:{...(Ba=m.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; gap: var(--space-8);">
      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Primary Variant</h3>
        <div class="aural-stats-card aural-stats-card--primary">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Total Revenue</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="dollar-sign" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">$45,231</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--up">
              <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              12.5%
            </span>
            <span class="aural-stats-card__description">vs last month</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Success Variant</h3>
        <div class="aural-stats-card aural-stats-card--success">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Active Users</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="users" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">8,492</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--up">
              <i data-lucide="trending-up" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              8.1%
            </span>
            <span class="aural-stats-card__description">vs last week</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Warning Variant</h3>
        <div class="aural-stats-card aural-stats-card--warning">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">CPU Usage</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="cpu" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">72%</div>
          <div class="aural-stats-card__progress">
            <div class="aural-stats-card__progress-bar" style="width: 72%" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__description">High load detected</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 var(--space-4) 0; color: var(--color-text-primary);">Error Variant</h3>
        <div class="aural-stats-card aural-stats-card--error">
          <div class="aural-stats-card__header">
            <span class="aural-stats-card__label">Error Rate</span>
            <div class="aural-stats-card__icon">
              <i data-lucide="alert-circle" aria-hidden="true"></i>
            </div>
          </div>
          <div class="aural-stats-card__value">2.3%</div>
          <div class="aural-stats-card__footer">
            <span class="aural-stats-card__trend aural-stats-card__trend--neutral">
              <i data-lucide="minus" class="aural-stats-card__trend-icon" aria-hidden="true"></i>
              0.0%
            </span>
            <span class="aural-stats-card__description">no change</span>
          </div>
        </div>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'View how stats cards appear across all themes. Use the theme switcher in the toolbar to compare.'
      }
    }
  }
}`,...(Ha=(Ga=m.parameters)==null?void 0:Ga.docs)==null?void 0:Ha.source},description:{story:`Compare how the stats card appears across all available themes.
Useful for ensuring consistent appearance and accessibility.`,...(Fa=(ja=m.parameters)==null?void 0:ja.docs)==null?void 0:Fa.description}}};const Ka=["Basic","WithIcon","WithTrendUp","WithTrendDown","WithTrendNeutral","WithProgress","VariantPrimary","VariantSuccess","VariantWarning","VariantError","AllVariants","DashboardGrid","Loading","WithProgressBars","FeaturedCards","ThemeComparison"];export{o as AllVariants,s as Basic,v as DashboardGrid,h as FeaturedCards,_ as Loading,m as ThemeComparison,u as VariantError,l as VariantPrimary,c as VariantSuccess,n as VariantWarning,r as WithIcon,e as WithProgress,p as WithProgressBars,d as WithTrendDown,i as WithTrendNeutral,t as WithTrendUp,Ka as __namedExportsOrder,Oa as default};
