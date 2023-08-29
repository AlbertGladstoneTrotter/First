import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';   //Import this class


test('GIT session', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.locator("input[name='newBoard']").type("Wellington");   //   await page.locator("input[name='newBoard']").press('Enter');


  
});