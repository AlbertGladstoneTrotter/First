import { type Locator, type Page } from '@playwright/test';   //This is needed in order for this class to be used


export class LoginPage{

readonly page: Page;   //The second Page referencira se na ovaj Page (import { type Locator, type Page } from '@playwright/test';)
readonly loginButton: Locator;
readonly emailInput: Locator;
readonly passwordInput: Locator;
readonly loginSubmitButton: Locator;


constructor(page: Page){
    this.page = page;   //page from the Constructor is page from playwright
    this.loginButton = page.locator("//div[@data-cy='login-menu']");
    this.emailInput = page.locator("//input[@name='email']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.loginSubmitButton = page.locator("//button[@data-cy='login-submit']");

    
}


//Method for login
async loginMethod(userName: string, password: string){
    await this.loginButton.click();
    await this.emailInput.type(userName);
    await this.passwordInput.type(password);
    await this.loginSubmitButton.click();

}



}
