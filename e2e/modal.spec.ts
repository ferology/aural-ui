import { test, expect } from '@playwright/test';

test.describe('Modal E2E', () => {
  test('should open and close modal with keyboard', async ({ page }) => {
    await page.goto('/iframe.html?id=components-modal--basic');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Look for the open modal button
    const openButton = page.locator('button:has-text("Open Modal")').first();
    if (await openButton.isVisible()) {
      await openButton.click();

      // Check if modal opened
      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible();

      // Close with Escape key
      await page.keyboard.press('Escape');
      await expect(modal).not.toBeVisible();
    }
  });

  test('should trap focus in modal', async ({ page }) => {
    await page.goto('/iframe.html?id=components-modal--basic');

    await page.waitForLoadState('networkidle');

    const openButton = page.locator('button:has-text("Open Modal")').first();
    if (await openButton.isVisible()) {
      await openButton.click();

      // Wait for modal to be visible
      await page.waitForSelector('[role="dialog"]', { state: 'visible' });

      // Press Tab to move focus
      await page.keyboard.press('Tab');

      // Check that focus is within the modal
      const focusedElement = await page.evaluate(() => {
        const activeEl = document.activeElement;
        const modal = document.querySelector('[role="dialog"]');
        return modal?.contains(activeEl);
      });

      expect(focusedElement).toBeTruthy();
    }
  });

  test('should close modal on backdrop click', async ({ page }) => {
    await page.goto('/iframe.html?id=components-modal--basic');

    await page.waitForLoadState('networkidle');

    const openButton = page.locator('button:has-text("Open Modal")').first();
    if (await openButton.isVisible()) {
      await openButton.click();

      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible();

      // Click on the backdrop (overlay)
      const overlay = page.locator('.modal-overlay');
      await overlay.click({ position: { x: 10, y: 10 } });

      await expect(modal).not.toBeVisible();
    }
  });

  test('should close modal with close button', async ({ page }) => {
    await page.goto('/iframe.html?id=components-modal--basic');

    await page.waitForLoadState('networkidle');

    const openButton = page.locator('button:has-text("Open Modal")').first();
    if (await openButton.isVisible()) {
      await openButton.click();

      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible();

      // Click the close button
      const closeButton = page.locator('button[aria-label="Close modal"]');
      if (await closeButton.isVisible()) {
        await closeButton.click();
        await expect(modal).not.toBeVisible();
      }
    }
  });
});
