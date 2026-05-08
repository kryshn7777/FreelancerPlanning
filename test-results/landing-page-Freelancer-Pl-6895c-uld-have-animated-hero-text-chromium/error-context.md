# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing-page.spec.ts >> Freelancer Planning Landing Page >> should have animated hero text
- Location: tests\landing-page.spec.ts:14:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Plan with clarity.')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Plan with clarity.')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Freelancer Planning Landing Page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |   });
  7  | 
  8  |   test('should load the landing page and show the navbar', async ({ page }) => {
  9  |     const navbar = page.locator('nav');
  10 |     await expect(navbar).toBeVisible({ timeout: 15000 });
  11 |     await expect(page).toHaveTitle(/Freelancer/i);
  12 |   });
  13 | 
  14 |   test('should have animated hero text', async ({ page }) => {
  15 |     const heroTitle = page.getByText('Plan with clarity.');
> 16 |     await expect(heroTitle).toBeVisible({ timeout: 10000 });
     |                             ^ Error: expect(locator).toBeVisible() failed
  17 |     
  18 |     const heroSubTitle = page.getByText('Build with freedom.');
  19 |     await expect(heroSubTitle).toBeVisible({ timeout: 10000 });
  20 |   });
  21 | 
  22 |   test('should reveal feature grid cards on scroll', async ({ page }) => {
  23 |     const featureGrid = page.locator('section').filter({ hasText: 'Smart Planning' });
  24 |     
  25 |     // Scroll to the feature grid and wait for animations
  26 |     await featureGrid.scrollIntoViewIfNeeded();
  27 |     await page.waitForTimeout(1000);
  28 |     
  29 |     // Check if the cards are visible
  30 |     const cards = featureGrid.locator('.group');
  31 |     // Ensure at least one card is visible
  32 |     await expect(cards.first()).toBeVisible();
  33 |   });
  34 | 
  35 |   test('should reveal the dashboard mockup', async ({ page }) => {
  36 |     // Wait for the mockup section
  37 |     const mockupSection = page.locator('section').filter({ has: page.locator('.perspective-1000') });
  38 |     await mockupSection.scrollIntoViewIfNeeded();
  39 |     await page.waitForTimeout(1000);
  40 | 
  41 |     const mockup = page.locator('.perspective-1000');
  42 |     await expect(mockup).toBeVisible();
  43 |   });
  44 | 
  45 |   test('should show CTA sections as user scrolls deeper', async ({ page }) => {
  46 |     // Scroll to bottom gradually to trigger reveals
  47 |     await page.evaluate(async () => {
  48 |       const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  49 |       for (let i = 0; i < 5; i++) {
  50 |         window.scrollTo(0, (document.body.scrollHeight / 5) * i);
  51 |         await delay(500);
  52 |       }
  53 |       window.scrollTo(0, document.body.scrollHeight);
  54 |     });
  55 |     
  56 |     await page.waitForTimeout(1000);
  57 |     
  58 |     // Check for the CTA text - using a more flexible selector
  59 |     await expect(page.getByText(/ELIMINATE SCOPE CREEP/i)).toBeVisible({ timeout: 10000 });
  60 |     
  61 |     const ctaButton = page.getByRole('button', { name: /Initialize Your Agent/i });
  62 |     await expect(ctaButton).toBeVisible();
  63 |   });
  64 | });
  65 | 
```