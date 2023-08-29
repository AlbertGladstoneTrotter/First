import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';   //Import this class
import { HomePage } from './pages/home.page';


test('Session 2 JK', async ({ page }) => {

  const gsPO = new GetStartedPage(page);
  const hpPO = new HomePage(page);



  await page.goto('http://localhost:3000/');

  await gsPO.createBoard("Wellington");   //Now we call the method instead of the 2 lines above

  await hpPO.createList("List01");   //Now we call the method instead of the 2 lines above

  await hpPO.createCard("MyTitle");   //Now we call the method instead of the 3 lines above

  await expect(hpPO.cardText).toHaveText("MyTitle");   //Locator from the line above has been moved into the HomePage

  //Delete the created board 
  await hpPO.deleteBoard();   //Now we call the method instead of the 2 lines above

  //Verify that the board is deleted
  await expect(hpPO.deleteBoardPopup).toBeVisible();   //Locator from the line above has been moved into the HomePage


});