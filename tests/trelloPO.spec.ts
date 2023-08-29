import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';   //Import this class
import { HomePage } from './pages/home.page';


test('Session 2 JK', async ({ page }) => {

  const gsPO = new GetStartedPage(page);
  const hpPO = new HomePage(page);



  await page.goto('http://localhost:3000/');

 /* await gsPO.boardNameInput.type("Wellington");
  await gsPO.boardNameInput.press('Enter');*/
  await gsPO.createBoard("Wellington");   //Now we call the method instead of the 2 lines above

  //await page.locator("[data-cy='create-list']").click();

 /* await page.locator("input[data-cy='add-list-input']").type("List01");
  await page.locator("//button[text()='Add list']").click();*/

  await hpPO.createList("List01");   //Now we call the method instead of the 2 lines above

 /* await page.locator("[data-cy='new-card']").click();
  await page.locator("[data-cy='new-card-input']").type("MyTitle");
  await page.locator("//button[text()='Add card']").click();*/

  await hpPO.createCard("MyTitle");   //Now we call the method instead of the 3 lines above

 // await expect(page.locator("div[data-cy='card-text']")).toHaveText("MyTitle");
  await expect(hpPO.cardText).toHaveText("MyTitle");   //Locator from the line above has been moved into the HomePage

  //Delete the created board 
/*  await page.locator("button[data-cy='board-options']").click();
  await page.locator("div[data-cy='delete-board']").click();*/

  await hpPO.deleteBoard();   //Now we call the method instead of the 2 lines above

  //Verify that the board is deleted
 // await expect(page.locator("input[data-cy='first-board']")).toBeVisible();
  //await expect(page.getByText("Board was deleted")).toBeVisible();
  await expect(hpPO.deleteBoardPopup).toBeVisible();   //Locator from the line above has been moved into the HomePage

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