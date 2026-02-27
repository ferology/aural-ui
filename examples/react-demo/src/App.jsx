import { useState } from 'react';
import {
  AuralProvider,
  Modal,
  Button,
  Dropdown,
  Tabs,
  Accordion,
  Tooltip,
  Popover,
  Drawer,
  Select,
  Carousel,
  DatePicker,
  Stepper,
  CommandPalette,
  useToast,
  useCommandPalette,
} from '@aural-ui/react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [date, setDate] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { showToast } = useToast();
  const { isOpen: paletteOpen, toggle: togglePalette } = useCommandPalette();

  const selectOptions = [
    { value: '1', label: 'React' },
    { value: '2', label: 'Vue' },
    { value: '3', label: 'Svelte' },
  ];

  const mainTabs = [
    { id: 'overview', label: 'Overview', content: '' },
    { id: 'components', label: 'Components Demo', content: '' },
    { id: 'getting-started', label: 'Getting Started', content: '' },
    { id: 'api', label: 'API Reference', content: '' },
  ];

  const demoTabs = [
    { id: 'tab1', label: 'Features', content: 'All components are accessible, keyboard-navigable, and theme-ready.' },
    { id: 'tab2', label: 'Performance', content: 'Thin wrappers mean small bundle sizes: React 12KB, Vue 6KB, Svelte 16KB (gzipped).' },
    { id: 'tab3', label: 'Frameworks', content: 'Native implementations for React, Vue, and Svelte with idiomatic APIs.' },
  ];

  const accordionItems = [
    {
      id: 'item1',
      title: 'What is Aural UI?',
      content: 'A comprehensive design system with 60+ components, built with vanilla JavaScript and wrapped for React, Vue, and Svelte.'
    },
    {
      id: 'item2',
      title: 'Why choose Aural UI?',
      content: 'Battle-tested vanilla core (4,977 lines), accessible by default (WCAG 2.1 AA), small bundle sizes, and framework-native APIs.'
    },
    {
      id: 'item3',
      title: 'What\'s included?',
      content: '14 priority components, comprehensive TypeScript definitions, 4 themes, design tokens, and utility classes.'
    },
  ];

  const carouselSlides = [
    {
      id: 'slide1',
      content: (
        <div style={{ padding: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', textAlign: 'center', borderRadius: '8px' }}>
          <h2 style={{ margin: 0, fontSize: '32px', marginBottom: '16px' }}>🎨 Design System</h2>
          <p style={{ margin: 0, fontSize: '18px', opacity: 0.9 }}>60+ components, tokens, utilities</p>
        </div>
      )
    },
    {
      id: 'slide2',
      content: (
        <div style={{ padding: '60px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', textAlign: 'center', borderRadius: '8px' }}>
          <h2 style={{ margin: 0, fontSize: '32px', marginBottom: '16px' }}>⚡ Framework Ready</h2>
          <p style={{ margin: 0, fontSize: '18px', opacity: 0.9 }}>React, Vue, Svelte support</p>
        </div>
      )
    },
    {
      id: 'slide3',
      content: (
        <div style={{ padding: '60px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', textAlign: 'center', borderRadius: '8px' }}>
          <h2 style={{ margin: 0, fontSize: '32px', marginBottom: '16px' }}>♿ Accessible</h2>
          <p style={{ margin: 0, fontSize: '18px', opacity: 0.9 }}>WCAG 2.1 AA compliant</p>
        </div>
      )
    },
  ];

  const steps = [
    { id: 'step1', label: 'Install', description: 'npm install @aural-ui/react' },
    { id: 'step2', label: 'Import', description: 'Import components & CSS' },
    { id: 'step3', label: 'Use', description: 'Start building!' },
  ];

  const commands = [
    { id: 'docs', title: 'View Documentation', description: 'Open full docs', action: () => showToast('📚 Opening docs...', 'info') },
    { id: 'github', title: 'View on GitHub', description: 'Go to repository', action: () => showToast('🔗 Opening GitHub...', 'info') },
    { id: 'theme', title: 'Change Theme', description: 'Switch between themes', action: () => showToast('🎨 Theme changed!', 'success') },
    { id: 'copy', title: 'Copy Install Command', description: 'npm install @aural-ui/react', action: () => showToast('📋 Copied to clipboard!', 'success') },
  ];

  const componentStats = [
    { name: 'Total Components', value: '14', color: '#667eea' },
    { name: 'Frameworks', value: '3', color: '#f093fb' },
    { name: 'Bundle Size (React)', value: '12 KB', color: '#4facfe' },
    { name: 'Bundle Size (Vue)', value: '6 KB', color: '#00f2fe' },
  ];

  const componentList = [
    { name: 'Modal', desc: 'Overlay dialogs with backdrop', status: '✅' },
    { name: 'Toast', desc: 'Notification popups', status: '✅' },
    { name: 'Button', desc: 'Interactive button', status: '✅' },
    { name: 'Dropdown', desc: 'Menu with actions', status: '✅' },
    { name: 'Tabs', desc: 'Tabbed interface', status: '✅' },
    { name: 'Accordion', desc: 'Collapsible sections', status: '✅' },
    { name: 'Tooltip', desc: 'Hover tooltips', status: '✅' },
    { name: 'Popover', desc: 'Click popups', status: '✅' },
    { name: 'Drawer', desc: 'Side panel', status: '✅' },
    { name: 'Select', desc: 'Custom dropdown with search', status: '✅' },
    { name: 'Carousel', desc: 'Slider with autoplay', status: '✅' },
    { name: 'DatePicker', desc: 'Calendar selection', status: '✅' },
    { name: 'Stepper', desc: 'Multi-step progress', status: '✅' },
    { name: 'CommandPalette', desc: '⌘K search interface', status: '✅' },
  ];

  return (
    <AuralProvider>
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <div className="header-content">
            <h1 className="app-title">
              <span className="gradient-text">Aural UI</span>
            </h1>
            <p className="app-subtitle">Modern, Accessible Design System for React, Vue & Svelte</p>
            <div className="header-actions">
              <Button onClick={togglePalette} className="btn-primary">
                ⌘K Command Palette
              </Button>
              <Button onClick={() => showToast('⭐ Star us on GitHub!', 'info')} className="btn-secondary">
                GitHub
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="app-main">
          <div className="content-wrapper">
            {/* Navigation Tabs */}
            <nav className="main-nav">
              {mainTabs.map(tab => (
                <button
                  key={tab.id}
                  className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="content-section">
                <div className="hero-section">
                  <h2>Welcome to Aural UI Demo</h2>
                  <p className="lead">
                    A comprehensive design system with 14 production-ready components,
                    built with vanilla JavaScript and wrapped for modern frameworks.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  {componentStats.map(stat => (
                    <div key={stat.name} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.name}</div>
                    </div>
                  ))}
                </div>

                {/* Features Carousel */}
                <section className="section">
                  <h3>Key Features</h3>
                  <Carousel
                    slides={carouselSlides}
                    currentIndex={carouselIndex}
                    onChange={setCarouselIndex}
                    autoplay
                    autoplayDelay={4000}
                    showCounter
                  />
                </section>

                {/* Component List */}
                <section className="section">
                  <h3>Available Components</h3>
                  <div className="component-grid">
                    {componentList.map(comp => (
                      <div key={comp.name} className="component-card">
                        <div className="component-header">
                          <span className="component-status">{comp.status}</span>
                          <strong>{comp.name}</strong>
                        </div>
                        <p className="component-desc">{comp.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQ Accordion */}
                <section className="section">
                  <h3>Frequently Asked Questions</h3>
                  <Accordion items={accordionItems} />
                </section>
              </div>
            )}

            {/* Components Demo Tab */}
            {activeTab === 'components' && (
              <div className="content-section">
                <h2>Interactive Component Demos</h2>
                <p className="section-intro">Test all components with live interactions.</p>

                <div className="demo-grid">
                  {/* Modal */}
                  <div className="demo-card">
                    <h4>Modal</h4>
                    <p>Overlay dialog with backdrop, keyboard navigation, and focus trapping.</p>
                    <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Example Modal">
                      <p>This is a modal component with accessibility built-in.</p>
                      <p>Try pressing <kbd>Escape</kbd> or clicking outside to close.</p>
                    </Modal>
                  </div>

                  {/* Toast */}
                  <div className="demo-card">
                    <h4>Toast Notifications</h4>
                    <p>Non-intrusive notifications with different types.</p>
                    <div className="button-group">
                      <Button onClick={() => showToast('Success message!', 'success')}>Success</Button>
                      <Button onClick={() => showToast('Error occurred', 'error')}>Error</Button>
                      <Button onClick={() => showToast('Information', 'info')}>Info</Button>
                    </div>
                  </div>

                  {/* Drawer */}
                  <div className="demo-card">
                    <h4>Drawer</h4>
                    <p>Side panel that slides in from any direction.</p>
                    <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                    <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} position="right">
                      <h3>Drawer Content</h3>
                      <p>This drawer slides in from the right.</p>
                      <p>Click the backdrop or press Escape to close.</p>
                    </Drawer>
                  </div>

                  {/* Select */}
                  <div className="demo-card">
                    <h4>Select</h4>
                    <p>Custom dropdown with search functionality.</p>
                    <Select
                      options={selectOptions}
                      value={selectValue}
                      onChange={setSelectValue}
                      placeholder="Choose a framework"
                      searchable
                    />
                    {selectValue && <p className="select-result">Selected: {selectOptions.find(o => o.value === selectValue)?.label}</p>}
                  </div>

                  {/* Tabs */}
                  <div className="demo-card full-width">
                    <h4>Tabs</h4>
                    <p>Organize content into separate views.</p>
                    <Tabs tabs={demoTabs} />
                  </div>

                  {/* DatePicker */}
                  <div className="demo-card">
                    <h4>DatePicker</h4>
                    <p>Calendar-based date selection with navigation.</p>
                    <DatePicker
                      value={date}
                      onChange={setDate}
                      placeholder="Select a date"
                    />
                    {date && <p className="select-result">Selected: {date.toLocaleDateString()}</p>}
                  </div>

                  {/* Stepper */}
                  <div className="demo-card">
                    <h4>Stepper</h4>
                    <p>Visual progress indicator for multi-step processes.</p>
                    <Stepper steps={steps} currentStep={currentStep} />
                    <div className="button-group" style={{ marginTop: '16px' }}>
                      <Button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1}>
                        Next
                      </Button>
                    </div>
                  </div>

                  {/* Tooltip & Popover */}
                  <div className="demo-card">
                    <h4>Tooltip & Popover</h4>
                    <p>Contextual information on hover or click.</p>
                    <div className="button-group">
                      <Tooltip content="This is a tooltip!">
                        <Button>Hover me</Button>
                      </Tooltip>
                      <Popover content={<div style={{ padding: '12px' }}>Popover content here!</div>}>
                        <Button>Click me</Button>
                      </Popover>
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div className="demo-card">
                    <h4>Dropdown</h4>
                    <p>Action menu with keyboard navigation.</p>
                    <Dropdown
                      items={[
                        { id: '1', label: 'Edit', action: () => showToast('Edit clicked', 'info') },
                        { id: '2', label: 'Duplicate', action: () => showToast('Duplicate clicked', 'info') },
                        { id: '3', label: 'Delete', action: () => showToast('Delete clicked', 'error') },
                      ]}
                    >
                      <Button>Actions ▼</Button>
                    </Dropdown>
                  </div>
                </div>
              </div>
            )}

            {/* Getting Started Tab */}
            {activeTab === 'getting-started' && (
              <div className="content-section">
                <h2>Getting Started</h2>

                <section className="section">
                  <h3>Installation</h3>
                  <div className="code-block">
                    <code>npm install @aural-ui/react @aural-ui/core</code>
                  </div>
                  <p>Or for other frameworks:</p>
                  <div className="code-block">
                    <code>npm install @aural-ui/vue @aural-ui/core</code>
                  </div>
                  <div className="code-block">
                    <code>npm install @aural-ui/svelte @aural-ui/core</code>
                  </div>
                </section>

                <section className="section">
                  <h3>Setup (React)</h3>
                  <div className="code-block">
                    <pre>{`import { AuralProvider, Modal, Button } from '@aural-ui/react';
import '@aural-ui/core/css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <AuralProvider>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="My Modal"
      >
        <p>Modal content here</p>
      </Modal>
    </AuralProvider>
  );
}`}</pre>
                  </div>
                </section>

                <section className="section">
                  <h3>Setup (Vue)</h3>
                  <div className="code-block">
                    <pre>{`import { createApp } from 'vue';
import AuralUI from '@aural-ui/vue';
import '@aural-ui/core/css';

const app = createApp(App);
app.use(AuralUI);
app.mount('#app');`}</pre>
                  </div>
                  <div className="code-block">
                    <pre>{`<template>
  <AuralButton @click="open = true">
    Open Modal
  </AuralButton>
  <AuralModal v-model="open" title="My Modal">
    <p>Modal content here</p>
  </AuralModal>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
</script>`}</pre>
                  </div>
                </section>

                <section className="section">
                  <h3>Setup (Svelte)</h3>
                  <div className="code-block">
                    <pre>{`import { Modal, Button } from '@aural-ui/svelte';
import '@aural-ui/core/css';`}</pre>
                  </div>
                  <div className="code-block">
                    <pre>{`<script>
  let open = false;
</script>

<Button on:click={() => open = true}>
  Open Modal
</Button>
<Modal bind:open title="My Modal">
  <p>Modal content here</p>
</Modal>`}</pre>
                  </div>
                </section>

                <section className="section">
                  <h3>Architecture</h3>
                  <div className="architecture-info">
                    <h4>Thin Wrapper Pattern</h4>
                    <p>
                      Aural UI uses a "thin wrapper" architecture where framework-specific components
                      wrap a battle-tested vanilla JavaScript core. This provides:
                    </p>
                    <ul>
                      <li>✅ Single source of truth (4,977 lines of vanilla JS)</li>
                      <li>✅ Consistent behavior across frameworks</li>
                      <li>✅ Small bundle sizes (wrappers add only 6-16KB gzipped)</li>
                      <li>✅ Easy maintenance (fix once, works everywhere)</li>
                      <li>✅ Native framework APIs (hooks, composables, stores)</li>
                    </ul>
                  </div>
                </section>
              </div>
            )}

            {/* API Reference Tab */}
            {activeTab === 'api' && (
              <div className="content-section">
                <h2>API Reference</h2>

                <section className="section">
                  <h3>Component Props</h3>

                  <div className="api-section">
                    <h4>Modal</h4>
                    <table className="api-table">
                      <thead>
                        <tr>
                          <th>Prop</th>
                          <th>Type</th>
                          <th>Default</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>isOpen</code></td>
                          <td>boolean</td>
                          <td>false</td>
                          <td>Controls modal visibility</td>
                        </tr>
                        <tr>
                          <td><code>onClose</code></td>
                          <td>function</td>
                          <td>-</td>
                          <td>Callback when modal closes</td>
                        </tr>
                        <tr>
                          <td><code>title</code></td>
                          <td>string</td>
                          <td>-</td>
                          <td>Modal title</td>
                        </tr>
                        <tr>
                          <td><code>id</code></td>
                          <td>string</td>
                          <td>auto</td>
                          <td>Custom element ID</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="api-section">
                    <h4>Carousel</h4>
                    <table className="api-table">
                      <thead>
                        <tr>
                          <th>Prop</th>
                          <th>Type</th>
                          <th>Default</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>slides</code></td>
                          <td>array</td>
                          <td>[]</td>
                          <td>Array of slide objects</td>
                        </tr>
                        <tr>
                          <td><code>autoplay</code></td>
                          <td>boolean</td>
                          <td>false</td>
                          <td>Enable auto-advance</td>
                        </tr>
                        <tr>
                          <td><code>autoplayDelay</code></td>
                          <td>number</td>
                          <td>5000</td>
                          <td>Delay in milliseconds</td>
                        </tr>
                        <tr>
                          <td><code>loop</code></td>
                          <td>boolean</td>
                          <td>true</td>
                          <td>Loop back to first slide</td>
                        </tr>
                        <tr>
                          <td><code>onChange</code></td>
                          <td>function</td>
                          <td>-</td>
                          <td>Callback on slide change</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="api-section">
                    <h4>DatePicker</h4>
                    <table className="api-table">
                      <thead>
                        <tr>
                          <th>Prop</th>
                          <th>Type</th>
                          <th>Default</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>value</code></td>
                          <td>Date | null</td>
                          <td>null</td>
                          <td>Selected date</td>
                        </tr>
                        <tr>
                          <td><code>onChange</code></td>
                          <td>function</td>
                          <td>-</td>
                          <td>Callback on date selection</td>
                        </tr>
                        <tr>
                          <td><code>minDate</code></td>
                          <td>Date | null</td>
                          <td>null</td>
                          <td>Minimum selectable date</td>
                        </tr>
                        <tr>
                          <td><code>maxDate</code></td>
                          <td>Date | null</td>
                          <td>null</td>
                          <td>Maximum selectable date</td>
                        </tr>
                        <tr>
                          <td><code>format</code></td>
                          <td>string</td>
                          <td>'YYYY-MM-DD'</td>
                          <td>Date display format</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="section">
                  <h3>Hooks (React)</h3>

                  <div className="api-section">
                    <h4>useToast()</h4>
                    <div className="code-block">
                      <pre>{`const { showToast } = useToast();

showToast(message, type);
// type: 'success' | 'error' | 'info' | 'warning'`}</pre>
                    </div>
                  </div>

                  <div className="api-section">
                    <h4>useCarousel(id, options)</h4>
                    <div className="code-block">
                      <pre>{`const { currentIndex, next, prev, goTo, play, pause } =
  useCarousel('carousel-1', {
    autoplay: true,
    loop: true,
    onChange: (index) => console.log(index)
  });`}</pre>
                    </div>
                  </div>

                  <div className="api-section">
                    <h4>useCommandPalette()</h4>
                    <div className="code-block">
                      <pre>{`const { isOpen, open, close, toggle } = useCommandPalette();
// Automatically listens for ⌘K / Ctrl+K`}</pre>
                    </div>
                  </div>
                </section>

                <section className="section">
                  <h3>Bundle Sizes</h3>
                  <table className="api-table">
                    <thead>
                      <tr>
                        <th>Package</th>
                        <th>Uncompressed</th>
                        <th>Gzipped</th>
                        <th>Components</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>@aural-ui/core</code></td>
                        <td>153 KB</td>
                        <td>~45 KB</td>
                        <td>Vanilla JS</td>
                      </tr>
                      <tr>
                        <td><code>@aural-ui/react</code></td>
                        <td>49 KB</td>
                        <td>12 KB</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td><code>@aural-ui/vue</code></td>
                        <td>31 KB</td>
                        <td>6 KB</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td><code>@aural-ui/svelte</code></td>
                        <td>75 KB</td>
                        <td>16 KB</td>
                        <td>14</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>
            Built with ❤️ by Workshop BAI Team |
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Opening GitHub...', 'info'); }}> GitHub</a> |
            <a href="#" onClick={(e) => { e.preventDefault(); showToast('Opening Docs...', 'info'); }}> Documentation</a>
          </p>
          <p className="footer-note">Press <kbd>⌘K</kbd> or <kbd>Ctrl+K</kbd> to open Command Palette</p>
        </footer>

        {/* Command Palette */}
        <CommandPalette
          commands={commands}
          isOpen={paletteOpen}
          onClose={togglePalette}
        />
      </div>
    </AuralProvider>
  );
}

export default App;
