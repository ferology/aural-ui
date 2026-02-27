<script setup lang="ts">
import { ref } from 'vue';
import {
  AuralButton,
  AuralInput,
  AuralCheckbox,
  AuralSwitch,
  AuralCard,
  AuralBadge,
  AuralProgress,
  AuralModal,
} from '@aural-ui/vue';

const currentTheme = ref('dark');
const activeTab = ref('Components');
const showModal = ref(false);

const formData = ref({
  name: '',
  enabled: true,
  terms: false,
});

const changeTheme = () => {
  const link = document.getElementById('theme-css') as HTMLLinkElement;
  if (link) {
    link.href = `/@fs/Users/feraf/Projects/aural-ui/packages/core/themes/${currentTheme.value}.css`;
  }
};
</script>

<template>
  <div id="app">
    <header class="header">
      <h1>Aural UI - Vue Demo</h1>
      <div class="theme-switcher">
        <label>Theme:</label>
        <select @change="changeTheme" v-model="currentTheme">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="neon">Neon</option>
          <option value="kinetic">Kinetic</option>
        </select>
      </div>
    </header>

    <main class="content">
      <div class="component-grid">
        <section class="component-section">
          <h2>Button</h2>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <AuralButton class="btn-primary">Primary</AuralButton>
            <AuralButton class="btn-secondary">Secondary</AuralButton>
            <AuralButton class="btn-tertiary">Tertiary</AuralButton>
          </div>
        </section>

        <section class="component-section">
          <h2>Input</h2>
          <AuralInput v-model="formData.name" placeholder="Enter your name" />
          <p>Value: {{ formData.name }}</p>
        </section>

        <section class="component-section">
          <h2>Checkbox & Switch</h2>
          <AuralCheckbox v-model="formData.terms" label="I agree to terms" />
          <AuralSwitch v-model="formData.enabled" label="Enable notifications" />
        </section>

        <section class="component-section">
          <h2>Card</h2>
          <AuralCard class="card">
            <h3>Card Title</h3>
            <p>This is a card component.</p>
            <AuralButton class="btn-primary">Action</AuralButton>
          </AuralCard>
        </section>

        <section class="component-section">
          <h2>Badge</h2>
          <div style="display: flex; gap: 15px; align-items: center;">
            <span>Messages <AuralBadge class="badge-primary">5</AuralBadge></span>
            <span>Alerts <AuralBadge class="badge-error">2</AuralBadge></span>
          </div>
        </section>

        <section class="component-section">
          <h2>Progress</h2>
          <AuralProgress :value="65" :max="100" class="progress" />
          <p>65% Complete</p>
        </section>

        <section class="component-section">
          <h2>Modal (Focus Trap)</h2>
          <AuralButton @click="showModal = true" class="btn-primary">Open Modal</AuralButton>
          <AuralModal v-model="showModal" title="Vue Modal Demo">
            <p>This modal has focus trap!</p>
            <p>Try pressing Tab to see keyboard navigation.</p>
          </AuralModal>
        </section>
      </div>
    </main>

    <footer class="footer">
      <p>Built with ❤️ by FrancescoF | Aural UI Vue Demo</p>
    </footer>
  </div>
</template>

<style>
@import '@aural-ui/core/css';
@import '@aural-ui/core/themes/dark.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: var(--font-family);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--color-bg-secondary);
  padding: 2rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.theme-switcher {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.theme-switcher select {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.content {
  flex: 1;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.component-section {
  background: var(--color-bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.component-section h2 {
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-size: 1.2rem;
}

.component-section > *:not(h2) {
  margin-top: 0.75rem;
}

.footer {
  background: var(--color-bg-secondary);
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}
</style>
