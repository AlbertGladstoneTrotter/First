import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';   //Import this class
import { HomePage } from './pages/home.page';


test('Session 3 JK assignment', async ({ page }) => {

  const gsPO = new GetStartedPage(page);
  const hpPO = new HomePage(page);

  const userName = "one.one03@example.com";   //"william.wallace@example.com";
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

/*  await page.locator("//div[@data-cy='login-menu']").click();
  await page.locator("//input[@name='email']").type("william.wallace@example.com");
  await page.locator("//input[@name='password']").type("password123");
  await page.locator("//button[@data-cy='login-submit']").click();*/




});