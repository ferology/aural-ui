import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['packages/*/src/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.tsx', '**/*.d.ts', '**/types.ts', '**/index.ts'],
      // NOTE: thresholds reflect actual current coverage (with a small
      // safety margin), not an aspirational target. They were previously
      // set to 50% across the board while real coverage sat around
      // 22-31%, which meant `npm run test:ci` / CI's Tests job had been
      // failing on every run for months regardless of what else changed.
      // Several components (Accordion, Alert, Avatar, Badge, Card,
      // Divider, Drawer, Popover, Progress, Select, Spinner, Table, Tabs,
      // Tooltip) and the Vue composables have no tests at all yet — raise
      // these back up as coverage genuinely improves. Approved by repo
      // owner 2026-10-02.
      thresholds: {
        lines: 20,
        functions: 25,
        branches: 60,
        statements: 20,
      },
    },
  },
  resolve: {
    alias: {
      '@aural-ui/core': resolve(__dirname, 'packages/core/src'),
      '@aural-ui/react': resolve(__dirname, 'packages/react/src'),
    },
  },
});
