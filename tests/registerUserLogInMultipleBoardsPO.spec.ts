import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';   //Import this class
import { HomePage } from './pages/home.page';
import { SignupPage } from './pages/signup.page';
import { LoginPage } from './pages/login.page';
import { MyBoardsPage } from './pages/myboards.page';


test('Session 3 JK assignment', async ({ page }) => {

  const gsPO = new GetStartedPage(page);
  const hpPO = new HomePage(page);
  const suPO =  new SignupPage(page);
  const lpPO = new LoginPage(page);
  const mbPO = new MyBoardsPage(page);

  const userName = "one.one"+Date.now()+"@example.com";   //"william.wallace@example.com";
  const password = "passwordJK123";

  await page.goto('http://localhost:3000/');

  await suPO.signupMethod();

  await expect(suPO.h1Headline).toHaveText(" Create a new account ");

  await suPO.createUserMethod(userName, password);

  await expect(suPO.usernameCreated).toHaveText(userName);

  await suPO.logoutMethod();

  await lpPO.loginMethod(userName, password);
  await expect(page.locator("h1")).toHaveText(" Get started! ");

  
  //Create multiple boards/lists/card

  await gsPO.createBoard("Wellington");
  await hpPO.createList("List01");
  await hpPO.createCard("MyTitle");
  await expect(hpPO.cardText).toHaveText("MyTitle");

  await hpPO.createNewBoardMethod("Barcelona");
  await hpPO.createNewBoardMethod("Cleveland");


  //Go to My Boards page and delete one of the boards
  const wantedBoard = "Barcelona";
  await mbPO.chooseBoardMethod(wantedBoard);

  //Delete the Board
  await hpPO.deleteBoard();
  //Verify that the board is deleted
  await expect(hpPO.deleteBoardPopup).toBeVisible();





});