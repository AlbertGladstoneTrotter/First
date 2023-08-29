import { type Locator, type Page } from '@playwright/test';   //This is needed in order for this class to be used


export class GetStartedPage{

readonly page: Page;   //The second Page referencira se na ovaj Page (import { type Locator, type Page } from '@playwright/test';)
readonly boardNameInput: Locator;


constructor(page: Page){
    this.page = page;   //page from the Constructor is page from playwright
    this.boardNameInput = page.locator("input[name='newBoard']");
}


//Method for creating a borad and it has a string input boardName
async createBoard(boardName: string){
    await this.boardNameInput.type(boardName);
    await this.boardNameInput.press('Enter');

}

}