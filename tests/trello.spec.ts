import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';   //Import this class


test('Session 2 JK', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.locator("input[name='newBoard']").type("Wellington");   //   //input[@name='newBoard'] xpath

  await page.locator("input[name='newBoard']").press('Enter');

  //await page.locator("[data-cy='create-list']").click();

  await page.locator("input[data-cy='add-list-input']").type("List01");

  await page.locator("//button[text()='Add list']").click();

  await page.locator("[data-cy='new-card']").click();

  await page.locator("[data-cy='new-card-input']").type("MyTitle");

  await page.locator("//button[text()='Add card']").click();

  await expect(page.locator("div[data-cy='card-text']")).toHaveText("MyTitle");

 /* const isAddList =await page.locator("[data-cy='create-list']").isVisible();
  console.log(isAddList);
  expect(isAddList).toBeTruthy();*/

//  await page.getByPlaceholder("Enter a title for this card...").fill("Something");
 //   await page.getByRole("button", { name: "Add card" }).click();

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});