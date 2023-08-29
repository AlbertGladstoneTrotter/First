import { type Locator, type Page } from '@playwright/test';   //This is needed in order for this class to be used


export class HomePage{

readonly page: Page;   //The second Page referencira se na ovaj Page (import { type Locator, type Page } from '@playwright/test';)
readonly listTitleInput: Locator;
readonly addListButton: Locator;
readonly addAnotherCardDiv: Locator;
readonly newCardInput: Locator;
readonly addCardButton: Locator;
readonly cardText: Locator;
readonly boardOptionsButton: Locator;
readonly deleteBoardDiv: Locator;
readonly deleteBoardPopup: Locator;
readonly homeButton: Locator;
readonly createNewBoardH1: Locator;
readonly boardTitleInput: Locator;
readonly createBoardButton: Locator;

constructor(page: Page){
    this.page = page;   //page from the Constructor is page from playwright
    this.listTitleInput = page.locator("input[data-cy='add-list-input']");
    this.addListButton = page.locator("//button[text()='Add list']");
    this.addAnotherCardDiv = page.locator("[data-cy='new-card']");
    this.newCardInput = page.locator("[data-cy='new-card-input']");
    this.addCardButton = page.locator("//button[text()='Add card']");
    this.cardText = page.locator("div[data-cy='card-text']");
    this.boardOptionsButton = page.locator("button[data-cy='board-options']");
    this.deleteBoardDiv = page.locator("div[data-cy='delete-board']");
    this.deleteBoardPopup = page.getByText("Board was deleted");
    this.homeButton = page.locator("//button[@data-cy='home']");
    this.createNewBoardH1 = page.locator("//h1[text()=' Create new board ']");
    this.boardTitleInput = page.locator("//input[@data-cy='new-board-input']");
    this.createBoardButton = page.locator("//button[@data-cy='new-board-create']");

}


//Method for creating a list
async createList(listName: string){
    await this.listTitleInput.type(listName);
    await this.addListButton.click();

}

//Method for creating a card
async createCard(cardName: string){
    await this.addAnotherCardDiv.click();
    await this.newCardInput.type(cardName);
    await this.addCardButton.click();

}

//Method for delete a board
async deleteBoard(){
    await this.boardOptionsButton.click();
    await this.deleteBoardDiv.click();

}

//Method for creating an additional board
async createNewBoardMethod(newBoardName: string){
    await this.homeButton.click();
    await this.createNewBoardH1.click();
    await this.boardTitleInput.type(newBoardName);
    await this.createBoardButton.click();

}



}
