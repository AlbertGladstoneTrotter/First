import { type Locator, type Page } from '@playwright/test';   //This is needed in order for this class to be used


export class SignupPage{

readonly page: Page;   //The second Page referencira se na ovaj Page (import { type Locator, type Page } from '@playwright/test';)
readonly loginDiv: Locator;
readonly signupLink: Locator;
readonly h1Headline: Locator;
readonly emailInput: Locator;
readonly passwordInput: Locator;
readonly createAccountButton: Locator;
readonly usernameCreated: Locator;
readonly logoutButton: Locator;


constructor(page: Page){
    this.page = page;   //page from the Constructor is page from playwright
    this.loginDiv = page.locator("//div[@data-cy='login-menu']");
    this.signupLink = page.locator("a[href*='signup']");
    this.h1Headline = page.locator("h1")
    this.emailInput = page.locator("//input[@name='email']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.createAccountButton = page.locator("//button[@data-cy='signup-submit']");
    this.usernameCreated = page.locator(".inline-block.self-center.pr-2.pl-1");
    this.logoutButton = page.locator(".inline-block.self-center.pr-2.pl-1");
    
}



//Method for sign up a user
async signupMethod(){
    await this.loginDiv.click();
    await this.signupLink.click();

}

//Method for creating a user
async createUserMethod(userName: string, password: string){
    await this.emailInput.type(userName);
  await this.passwordInput.type(password);
  await this.createAccountButton.click();

}

//Method for logout
async logoutMethod(){
    await this.logoutButton.click();

}



}
