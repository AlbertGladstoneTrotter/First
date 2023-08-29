import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';   //Import this class
import { HomePage } from './pages/home.page';


test('Session 3 JK assignment', async ({ page }) => {

  const gsPO = new GetStartedPage(page);
  const hpPO = new HomePage(page);

  const userName = "one.one"+Date.now()+"@example.com";   //"william.wallace@example.com";
  const password = "passwordJK123";

  await page.goto('http://localhost:3000/');


  await page.locator("//div[@data-cy='login-menu']").click();
  await page.locator("a[href*='signup']").click();

  await expect(page.locator("h1")).toHaveText(" Create a new account ");

  await page.locator("//input[@name='email']").type(userName);
  await page.locator("//input[@name='password']").type(password);
  await page.locator("//button[@data-cy='signup-submit']").click();

  //await expect(page.locator("//div[text()='william.wallace@example.com']")).toHaveText("william.wallace@example.com");
  await expect(page.locator(".inline-block.self-center.pr-2.pl-1")).toHaveText(userName);

  await page.locator(".inline-block.self-center.pr-2.pl-1").click();
  await page.locator("//div[@data-cy='login-menu']").click();

  await page.locator("//input[@name='email']").type(userName);
  await page.locator("//input[@name='password']").type(password);
  await page.locator("//button[@data-cy='login-submit']").click();

  await expect(page.locator("h1")).toHaveText(" Get started! ");

  
  //Create multiple boards/lists/card

  await gsPO.createBoard("Wellington");
  await hpPO.createList("List01");
  await hpPO.createCard("MyTitle");
  await expect(hpPO.cardText).toHaveText("MyTitle");

  await page.locator("//button[@data-cy='home']").click();

  await page.locator("//h1[text()=' Create new board ']").click();
  await page.locator("//input[@data-cy='new-board-input']").type("Barcelona");
  await page.locator("//button[@data-cy='new-board-create']").click();


  //Go to My Boards page and delete one of the boards

  await page.locator("//button[@data-cy='home']").click();
  const allBoardNames = await page.locator("h2").allTextContents();   //Make an array of all the Board names
  console.log(allBoardNames);

  //Count all available Boards and filter the one you want to delete
  const wantedBoard = "Barcelona";

  const allBoards = await page.locator("[data-cy='board-item']");
  const countAllBoards = await allBoards.count();
  console.log(countAllBoards);

  for(let i=0;i<countAllBoards;i++)
  {
    var singleBoard = await allBoards.nth(i).locator("h2").textContent();
    console.log(singleBoard);
      if(singleBoard===wantedBoard)
      {
        await allBoards.nth(i).locator("h2").click();
        break;
      }
  }

  //Delete the Board
  await hpPO.deleteBoard();
  //Verify that the board is deleted
  await expect(hpPO.deleteBoardPopup).toBeVisible();





});