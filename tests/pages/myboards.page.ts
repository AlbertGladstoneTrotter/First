import { type Locator, type Page } from '@playwright/test';   //This is needed in order for this class to be used


export class MyBoardsPage{

readonly page: Page;   //The second Page referencira se na ovaj Page (import { type Locator, type Page } from '@playwright/test';)
readonly homeButton: Locator;
readonly h2: Locator;
readonly boardItems: Locator;




constructor(page: Page){
    this.page = page;   //page from the Constructor is page from playwright
    this.homeButton = page.locator("//button[@data-cy='home']");
    this.h2 = page.locator("h2");
    this.boardItems = page.locator("[data-cy='board-item']");
    
    
}




//Method for choosing a board
async chooseBoardMethod(wantedBoard: string){
    await this.homeButton.click();
    const allBoardNames = await this.h2.allTextContents();   //Make an array of all the Board names
    console.log(allBoardNames);

    const allBoards = await this.boardItems;
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

}



}
