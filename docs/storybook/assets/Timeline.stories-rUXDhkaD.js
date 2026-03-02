import{c as Q}from"./createThemeGrid-DWAncU4Q.js";const X={title:"Components/Timeline",tags:["autodocs"],parameters:{docs:{description:{component:"Display chronological sequences of events with clear visual progression and status indicators. Supports vertical, horizontal, and compact layouts for different use cases."}}}},u=()=>{setTimeout(()=>{typeof lucide<"u"&&lucide.createIcons()},0)},e={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="800px",i.innerHTML=`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Project timeline">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2023-12-15T14:30">Dec 15, 2023<br>2:30 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Project Initialized</h3>
            <p class="aural-timeline__description">Created repository and set up initial project structure</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2023-12-20T16:15">Dec 20, 2023<br>4:15 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Core Components Built</h3>
            <p class="aural-timeline__description">Implemented reusable components with accessibility support</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <div class="aural-timeline__time">In Progress</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Documentation & Testing</h3>
            <p class="aural-timeline__description">Writing guides and adding interactive examples</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Coming Soon</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Public Release v1.0</h3>
            <p class="aural-timeline__description">Official launch with npm package and documentation</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `,i}},a={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="800px",i.innerHTML=`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Order tracking timeline">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T10:30">Jan 15<br>10:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Placed</h3>
            <p class="aural-timeline__description">Order #12345 has been placed successfully. Payment confirmed.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T14:15">Jan 15<br>2:15 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Confirmed</h3>
            <p class="aural-timeline__description">Your order has been confirmed and is being prepared for shipment.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-18">Jan 18<br>Today</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Out for Delivery</h3>
            <p class="aural-timeline__description">Package is on the delivery truck and will arrive by 5:00 PM.</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Pending</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Delivered</h3>
            <p class="aural-timeline__description">Package will be delivered to your address.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `,i}},l={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="800px",i.innerHTML=`
      <div class="aural-timeline timeline-modern">
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__time">Completed</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Completed Task</div>
            <div class="aural-timeline__description">Successfully completed with green indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active">
          <div class="aural-timeline__time">Active</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Active Task</div>
            <div class="aural-timeline__description">Currently in progress with primary color</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--warning">
          <div class="aural-timeline__time">Warning</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Warning Task</div>
            <div class="aural-timeline__description">Needs attention with warning indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--error">
          <div class="aural-timeline__time">Error</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Error Task</div>
            <div class="aural-timeline__description">Failed or blocked with error indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__time">Default</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Pending Task</div>
            <div class="aural-timeline__description">Future or pending event with neutral color</div>
          </div>
        </div>
      </div>
    `,i}},t={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.innerHTML=`
      <div class="aural-timeline timeline-horizontal">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="check-circle" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 1</div>
            <div class="aural-timeline__title">Account Created</div>
            <div class="aural-timeline__description">Signed up successfully</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="check-circle" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 2</div>
            <div class="aural-timeline__title">Email Verified</div>
            <div class="aural-timeline__description">Confirmation email sent</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active aural-timeline__item--primary">
          <div class="aural-timeline__marker">
            <i data-lucide="user" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 3</div>
            <div class="aural-timeline__title">Profile Setup</div>
            <div class="aural-timeline__description">Complete your profile</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="settings" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 4</div>
            <div class="aural-timeline__title">Preferences</div>
            <div class="aural-timeline__description">Set your preferences</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="rocket" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 5</div>
            <div class="aural-timeline__title">Get Started</div>
            <div class="aural-timeline__description">Ready to use</div>
          </div>
        </div>
      </div>
    `,u(),i}},s={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="600px",i.innerHTML=`
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2 minutes ago</div>
            <div class="aural-timeline__title">Sarah Johnson joined the Design Team</div>
            <div class="aural-timeline__description">New team member as Senior Product Designer</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">15 minutes ago</div>
            <div class="aural-timeline__title">Pull Request Merged</div>
            <div class="aural-timeline__description">Feature/new-components merged into main by @johndoe</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">1 hour ago</div>
            <div class="aural-timeline__title">Build Warning</div>
            <div class="aural-timeline__description">CI/CD pipeline completed with 3 warnings</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Yesterday at 4:30 PM</div>
            <div class="aural-timeline__title">Documentation Updated</div>
            <div class="aural-timeline__description">API docs updated with new endpoints</div>
          </div>
        </div>
      </div>
    `,i}},n={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="600px",i.innerHTML=`
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Just now</div>
            <div class="aural-timeline__title">New comment on "Feature Request: Dark Mode"</div>
            <div class="aural-timeline__description">@alex_dev: "Working on this now, will have a PR ready soon"</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">5 minutes ago</div>
            <div class="aural-timeline__title">Issue #142 closed</div>
            <div class="aural-timeline__description">Fixed navigation menu bug in mobile view</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">30 minutes ago</div>
            <div class="aural-timeline__title">Deployment to staging</div>
            <div class="aural-timeline__description">Version 2.4.0 deployed successfully</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2 hours ago</div>
            <div class="aural-timeline__title">Security update available</div>
            <div class="aural-timeline__description">3 npm packages need to be updated</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--error">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Yesterday at 11:45 AM</div>
            <div class="aural-timeline__title">Build failed</div>
            <div class="aural-timeline__description">Tests failed on production branch</div>
          </div>
        </div>
      </div>
    `,i}},r={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="800px",i.innerHTML=`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Order tracking">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T10:30">Jan 15<br>10:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Placed</h3>
            <p class="aural-timeline__description">Order #ORD-2024-0123 placed successfully. Payment of $159.99 confirmed via credit card.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T14:20">Jan 15<br>2:20 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Confirmed</h3>
            <p class="aural-timeline__description">Seller confirmed order. Items are being prepared for shipment.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-16T09:00">Jan 16<br>9:00 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Package Shipped</h3>
            <p class="aural-timeline__description">Package shipped via FedEx. Tracking number: TRK987654321</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-17T08:30">Jan 17<br>8:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">In Transit</h3>
            <p class="aural-timeline__description">Package arrived at distribution center in Chicago, IL</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-18T07:15">Jan 18<br>7:15 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Out for Delivery</h3>
            <p class="aural-timeline__description">Package is on the delivery truck. Estimated arrival: Today by 5:00 PM</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Pending</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Delivered</h3>
            <p class="aural-timeline__description">Package will be delivered to 123 Main St, Apt 4B</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `,i}},d={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="800px",i.innerHTML=`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Project milestones">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-10">Jan 10, 2024<br>Sprint 1</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Planning & Research</h3>
            <p class="aural-timeline__description">Completed user research, competitive analysis, and project requirements gathering. Created initial wireframes and design system foundation.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-24">Jan 24, 2024<br>Sprint 2</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Design & Prototyping</h3>
            <p class="aural-timeline__description">Finalized UI designs, created interactive prototypes, and conducted usability testing with 15 participants.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-02-07">Feb 7, 2024<br>Sprint 3</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Development Phase 1</h3>
            <p class="aural-timeline__description">Building core features: authentication, dashboard, and user profile. Currently 65% complete.</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Feb 21, 2024<br>Sprint 4</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Development Phase 2</h3>
            <p class="aural-timeline__description">Advanced features, integrations, and performance optimization.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Mar 6, 2024<br>Sprint 5</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Testing & QA</h3>
            <p class="aural-timeline__description">Comprehensive testing, bug fixes, and final polishing.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Mar 20, 2024<br>Release</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Launch v1.0</h3>
            <p class="aural-timeline__description">Public release with full documentation and support materials.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    `,i}},m={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.innerHTML=`
      <div class="aural-timeline timeline-horizontal">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="user-plus" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Completed</div>
            <div class="aural-timeline__title">Sign Up</div>
            <div class="aural-timeline__description">Create account</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="mail-check" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Completed</div>
            <div class="aural-timeline__title">Verify Email</div>
            <div class="aural-timeline__description">Confirm address</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active aural-timeline__item--primary">
          <div class="aural-timeline__marker">
            <i data-lucide="credit-card" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Active</div>
            <div class="aural-timeline__title">Add Payment</div>
            <div class="aural-timeline__description">Enter card details</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="shield-check" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Pending</div>
            <div class="aural-timeline__title">Verify Identity</div>
            <div class="aural-timeline__description">Upload documents</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="party-popper" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Final</div>
            <div class="aural-timeline__title">All Set!</div>
            <div class="aural-timeline__description">Start using app</div>
          </div>
        </div>
      </div>
    `,u(),i}},c={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.maxWidth="600px",i.innerHTML=`
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">9:00 AM</div>
            <div class="aural-timeline__title">Morning standup completed</div>
            <div class="aural-timeline__description">Team sync - all members present</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">11:30 AM</div>
            <div class="aural-timeline__title">Code review approved</div>
            <div class="aural-timeline__description">PR #234 merged to main branch</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2:15 PM</div>
            <div class="aural-timeline__title">Build completed with warnings</div>
            <div class="aural-timeline__description">3 ESLint warnings detected</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--error">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">3:45 PM</div>
            <div class="aural-timeline__title">Deployment failed</div>
            <div class="aural-timeline__description">Database migration error - rolled back</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">4:30 PM</div>
            <div class="aural-timeline__title">Investigating deployment issue</div>
            <div class="aural-timeline__description">DevOps team working on fix</div>
          </div>
        </div>
      </div>
    `,i}},_={render:()=>{const i=document.createElement("div");return i.style.padding="2rem",i.style.display="flex",i.style.flexDirection="column",i.style.gap="3rem",i.innerHTML=`
      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Modern (Vertical)</h3>
        <div class="aural-timeline timeline-modern" style="max-width: 800px;">
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__time">Jan 15</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Task Completed</div>
              <div class="aural-timeline__description">Successfully finished the task</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__time">Today</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">In Progress</div>
              <div class="aural-timeline__description">Working on implementation</div>
            </div>
          </div>
          <div class="aural-timeline__item">
            <div class="aural-timeline__time">Pending</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Next Step</div>
              <div class="aural-timeline__description">Upcoming milestone</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Horizontal</h3>
        <div class="aural-timeline timeline-horizontal">
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
            <div class="aural-timeline__marker">
              <i data-lucide="check" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 1</div>
              <div class="aural-timeline__title">Start</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__marker">
              <i data-lucide="loader" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 2</div>
              <div class="aural-timeline__title">Process</div>
            </div>
          </div>
          <div class="aural-timeline__item">
            <div class="aural-timeline__marker">
              <i data-lucide="flag" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 3</div>
              <div class="aural-timeline__title">Complete</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Compact</h3>
        <div class="aural-timeline timeline-compact" style="max-width: 600px;">
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">2 min ago</div>
              <div class="aural-timeline__title">User logged in</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">15 min ago</div>
              <div class="aural-timeline__title">Settings updated</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">1 hour ago</div>
              <div class="aural-timeline__title">Warning detected</div>
            </div>
          </div>
        </div>
      </div>
    `,u(),i}},v={render:()=>Q(()=>{const i=document.createElement("div");return i.style.padding="1rem",i.innerHTML=`
        <div class="aural-timeline timeline-modern" style="max-width: 600px;">
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__time">Jan 15</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Completed</div>
              <div class="aural-timeline__description">Task finished successfully</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__time">Today</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">In Progress</div>
              <div class="aural-timeline__description">Currently working</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--warning">
            <div class="aural-timeline__time">Next</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Warning</div>
              <div class="aural-timeline__description">Needs attention</div>
            </div>
          </div>
        </div>
      `,i})};var o,p,h;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Project timeline">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2023-12-15T14:30">Dec 15, 2023<br>2:30 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Project Initialized</h3>
            <p class="aural-timeline__description">Created repository and set up initial project structure</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2023-12-20T16:15">Dec 20, 2023<br>4:15 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Core Components Built</h3>
            <p class="aural-timeline__description">Implemented reusable components with accessibility support</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <div class="aural-timeline__time">In Progress</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Documentation & Testing</h3>
            <p class="aural-timeline__description">Writing guides and adding interactive examples</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Coming Soon</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Public Release v1.0</h3>
            <p class="aural-timeline__description">Official launch with npm package and documentation</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    \`;
    return container;
  }
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,y,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Order tracking timeline">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T10:30">Jan 15<br>10:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Placed</h3>
            <p class="aural-timeline__description">Order #12345 has been placed successfully. Payment confirmed.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T14:15">Jan 15<br>2:15 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Confirmed</h3>
            <p class="aural-timeline__description">Your order has been confirmed and is being prepared for shipment.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-18">Jan 18<br>Today</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Out for Delivery</h3>
            <p class="aural-timeline__description">Package is on the delivery truck and will arrive by 5:00 PM.</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Pending</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Delivered</h3>
            <p class="aural-timeline__description">Package will be delivered to your address.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    \`;
    return container;
  }
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,P,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
      <div class="aural-timeline timeline-modern">
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__time">Completed</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Completed Task</div>
            <div class="aural-timeline__description">Successfully completed with green indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active">
          <div class="aural-timeline__time">Active</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Active Task</div>
            <div class="aural-timeline__description">Currently in progress with primary color</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--warning">
          <div class="aural-timeline__time">Warning</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Warning Task</div>
            <div class="aural-timeline__description">Needs attention with warning indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--error">
          <div class="aural-timeline__time">Error</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Error Task</div>
            <div class="aural-timeline__description">Failed or blocked with error indicator</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__time">Default</div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__title">Pending Task</div>
            <div class="aural-timeline__description">Future or pending event with neutral color</div>
          </div>
        </div>
      </div>
    \`;
    return container;
  }
}`,...(f=(P=l.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var b,T,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.innerHTML = \`
      <div class="aural-timeline timeline-horizontal">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="check-circle" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 1</div>
            <div class="aural-timeline__title">Account Created</div>
            <div class="aural-timeline__description">Signed up successfully</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="check-circle" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 2</div>
            <div class="aural-timeline__title">Email Verified</div>
            <div class="aural-timeline__description">Confirmation email sent</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active aural-timeline__item--primary">
          <div class="aural-timeline__marker">
            <i data-lucide="user" class="aural-timeline__marker-icon" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 3</div>
            <div class="aural-timeline__title">Profile Setup</div>
            <div class="aural-timeline__description">Complete your profile</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="settings" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 4</div>
            <div class="aural-timeline__title">Preferences</div>
            <div class="aural-timeline__description">Set your preferences</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="rocket" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Step 5</div>
            <div class="aural-timeline__title">Get Started</div>
            <div class="aural-timeline__description">Ready to use</div>
          </div>
        </div>
      </div>
    \`;
    initIcons();
    return container;
  }
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var C,w,M;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.innerHTML = \`
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2 minutes ago</div>
            <div class="aural-timeline__title">Sarah Johnson joined the Design Team</div>
            <div class="aural-timeline__description">New team member as Senior Product Designer</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">15 minutes ago</div>
            <div class="aural-timeline__title">Pull Request Merged</div>
            <div class="aural-timeline__description">Feature/new-components merged into main by @johndoe</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">1 hour ago</div>
            <div class="aural-timeline__title">Build Warning</div>
            <div class="aural-timeline__description">CI/CD pipeline completed with 3 warnings</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Yesterday at 4:30 PM</div>
            <div class="aural-timeline__title">Documentation Updated</div>
            <div class="aural-timeline__description">API docs updated with new endpoints</div>
          </div>
        </div>
      </div>
    \`;
    return container;
  }
}`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var D,I,E;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.innerHTML = \`
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Just now</div>
            <div class="aural-timeline__title">New comment on "Feature Request: Dark Mode"</div>
            <div class="aural-timeline__description">@alex_dev: "Working on this now, will have a PR ready soon"</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">5 minutes ago</div>
            <div class="aural-timeline__title">Issue #142 closed</div>
            <div class="aural-timeline__description">Fixed navigation menu bug in mobile view</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">30 minutes ago</div>
            <div class="aural-timeline__title">Deployment to staging</div>
            <div class="aural-timeline__description">Version 2.4.0 deployed successfully</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2 hours ago</div>
            <div class="aural-timeline__title">Security update available</div>
            <div class="aural-timeline__description">3 npm packages need to be updated</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--error">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Yesterday at 11:45 AM</div>
            <div class="aural-timeline__title">Build failed</div>
            <div class="aural-timeline__description">Tests failed on production branch</div>
          </div>
        </div>
      </div>
    \`;
    return container;
  }
}`,...(E=(I=n.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var A,W,L;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Order tracking">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T10:30">Jan 15<br>10:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Placed</h3>
            <p class="aural-timeline__description">Order #ORD-2024-0123 placed successfully. Payment of $159.99 confirmed via credit card.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-15T14:20">Jan 15<br>2:20 PM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Order Confirmed</h3>
            <p class="aural-timeline__description">Seller confirmed order. Items are being prepared for shipment.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-16T09:00">Jan 16<br>9:00 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Package Shipped</h3>
            <p class="aural-timeline__description">Package shipped via FedEx. Tracking number: TRK987654321</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-17T08:30">Jan 17<br>8:30 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">In Transit</h3>
            <p class="aural-timeline__description">Package arrived at distribution center in Chicago, IL</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-18T07:15">Jan 18<br>7:15 AM</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Out for Delivery</h3>
            <p class="aural-timeline__description">Package is on the delivery truck. Estimated arrival: Today by 5:00 PM</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Pending</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Delivered</h3>
            <p class="aural-timeline__description">Package will be delivered to 123 Main St, Apt 4B</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    \`;
    return container;
  }
}`,...(L=(W=r.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var O,H,J;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '800px';
    container.innerHTML = \`
      <ol class="aural-timeline timeline-modern" role="list" aria-label="Project milestones">
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-10">Jan 10, 2024<br>Sprint 1</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Planning & Research</h3>
            <p class="aural-timeline__description">Completed user research, competitive analysis, and project requirements gathering. Created initial wireframes and design system foundation.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--completed" role="listitem">
          <time class="aural-timeline__time" datetime="2024-01-24">Jan 24, 2024<br>Sprint 2</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Design & Prototyping</h3>
            <p class="aural-timeline__description">Finalized UI designs, created interactive prototypes, and conducted usability testing with 15 participants.</p>
            <span class="sr-only">Status: Completed</span>
          </div>
        </li>
        <li class="aural-timeline__item aural-timeline__item--active" role="listitem">
          <time class="aural-timeline__time" datetime="2024-02-07">Feb 7, 2024<br>Sprint 3</time>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Development Phase 1</h3>
            <p class="aural-timeline__description">Building core features: authentication, dashboard, and user profile. Currently 65% complete.</p>
            <span class="sr-only">Status: In Progress</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Feb 21, 2024<br>Sprint 4</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Development Phase 2</h3>
            <p class="aural-timeline__description">Advanced features, integrations, and performance optimization.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Mar 6, 2024<br>Sprint 5</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Testing & QA</h3>
            <p class="aural-timeline__description">Comprehensive testing, bug fixes, and final polishing.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
        <li class="aural-timeline__item" role="listitem">
          <div class="aural-timeline__time">Mar 20, 2024<br>Release</div>
          <div class="aural-timeline__content">
            <h3 class="aural-timeline__title">Launch v1.0</h3>
            <p class="aural-timeline__description">Public release with full documentation and support materials.</p>
            <span class="sr-only">Status: Pending</span>
          </div>
        </li>
      </ol>
    \`;
    return container;
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var z,F,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.innerHTML = \`
      <div class="aural-timeline timeline-horizontal">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="user-plus" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Completed</div>
            <div class="aural-timeline__title">Sign Up</div>
            <div class="aural-timeline__description">Create account</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker">
            <i data-lucide="mail-check" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Completed</div>
            <div class="aural-timeline__title">Verify Email</div>
            <div class="aural-timeline__description">Confirm address</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active aural-timeline__item--primary">
          <div class="aural-timeline__marker">
            <i data-lucide="credit-card" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Active</div>
            <div class="aural-timeline__title">Add Payment</div>
            <div class="aural-timeline__description">Enter card details</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="shield-check" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Pending</div>
            <div class="aural-timeline__title">Verify Identity</div>
            <div class="aural-timeline__description">Upload documents</div>
          </div>
        </div>
        <div class="aural-timeline__item">
          <div class="aural-timeline__marker">
            <i data-lucide="party-popper" aria-hidden="true"></i>
          </div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">Final</div>
            <div class="aural-timeline__title">All Set!</div>
            <div class="aural-timeline__description">Start using app</div>
          </div>
        </div>
      </div>
    \`;
    initIcons();
    return container;
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var j,V,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.maxWidth = '600px';
    container.innerHTML = \`
      <div class="aural-timeline timeline-compact">
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">9:00 AM</div>
            <div class="aural-timeline__title">Morning standup completed</div>
            <div class="aural-timeline__description">Team sync - all members present</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">11:30 AM</div>
            <div class="aural-timeline__title">Code review approved</div>
            <div class="aural-timeline__description">PR #234 merged to main branch</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">2:15 PM</div>
            <div class="aural-timeline__title">Build completed with warnings</div>
            <div class="aural-timeline__description">3 ESLint warnings detected</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--error">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__connector"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">3:45 PM</div>
            <div class="aural-timeline__title">Deployment failed</div>
            <div class="aural-timeline__description">Database migration error - rolled back</div>
          </div>
        </div>
        <div class="aural-timeline__item aural-timeline__item--active">
          <div class="aural-timeline__marker"></div>
          <div class="aural-timeline__content">
            <div class="aural-timeline__time">4:30 PM</div>
            <div class="aural-timeline__title">Investigating deployment issue</div>
            <div class="aural-timeline__description">DevOps team working on fix</div>
          </div>
        </div>
      </div>
    \`;
    return container;
  }
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var N,U,q;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '3rem';
    container.innerHTML = \`
      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Modern (Vertical)</h3>
        <div class="aural-timeline timeline-modern" style="max-width: 800px;">
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__time">Jan 15</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Task Completed</div>
              <div class="aural-timeline__description">Successfully finished the task</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__time">Today</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">In Progress</div>
              <div class="aural-timeline__description">Working on implementation</div>
            </div>
          </div>
          <div class="aural-timeline__item">
            <div class="aural-timeline__time">Pending</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Next Step</div>
              <div class="aural-timeline__description">Upcoming milestone</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Horizontal</h3>
        <div class="aural-timeline timeline-horizontal">
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
            <div class="aural-timeline__marker">
              <i data-lucide="check" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 1</div>
              <div class="aural-timeline__title">Start</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__marker">
              <i data-lucide="loader" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 2</div>
              <div class="aural-timeline__title">Process</div>
            </div>
          </div>
          <div class="aural-timeline__item">
            <div class="aural-timeline__marker">
              <i data-lucide="flag" aria-hidden="true"></i>
            </div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">Step 3</div>
              <div class="aural-timeline__title">Complete</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1.5rem 0; color: var(--color-text-primary); font-size: var(--text-xl);">Compact</h3>
        <div class="aural-timeline timeline-compact" style="max-width: 600px;">
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--success">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">2 min ago</div>
              <div class="aural-timeline__title">User logged in</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__connector"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">15 min ago</div>
              <div class="aural-timeline__title">Settings updated</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--completed aural-timeline__item--warning">
            <div class="aural-timeline__marker"></div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__time">1 hour ago</div>
              <div class="aural-timeline__title">Warning detected</div>
            </div>
          </div>
        </div>
      </div>
    \`;
    initIcons();
    return container;
  }
}`,...(q=(U=_.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var Y,G,K;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return createThemeGrid(() => {
      const container = document.createElement('div');
      container.style.padding = '1rem';
      container.innerHTML = \`
        <div class="aural-timeline timeline-modern" style="max-width: 600px;">
          <div class="aural-timeline__item aural-timeline__item--completed">
            <div class="aural-timeline__time">Jan 15</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Completed</div>
              <div class="aural-timeline__description">Task finished successfully</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--active">
            <div class="aural-timeline__time">Today</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">In Progress</div>
              <div class="aural-timeline__description">Currently working</div>
            </div>
          </div>
          <div class="aural-timeline__item aural-timeline__item--warning">
            <div class="aural-timeline__time">Next</div>
            <div class="aural-timeline__content">
              <div class="aural-timeline__title">Warning</div>
              <div class="aural-timeline__description">Needs attention</div>
            </div>
          </div>
        </div>
      \`;
      return container;
    });
  }
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const Z=["VerticalTimeline","WithTimestamps","StatusVariants","HorizontalTimeline","CompactTimeline","ActivityFeed","OrderTracking","ProjectMilestones","WithIcons","MixedStates","AllLayouts","ThemeComparison"];export{n as ActivityFeed,_ as AllLayouts,s as CompactTimeline,t as HorizontalTimeline,c as MixedStates,r as OrderTracking,d as ProjectMilestones,l as StatusVariants,v as ThemeComparison,e as VerticalTimeline,m as WithIcons,a as WithTimestamps,Z as __namedExportsOrder,X as default};
