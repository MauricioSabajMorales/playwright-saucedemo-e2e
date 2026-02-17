import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;
    

    async goto() {
    await this.page.goto('/');   
}

constructor(page: Page){
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');

}

async assertLoginFormVisible(){
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.errorMessage).toBeHidden();
}

async login(user: string, password: string){
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

async assertErrorContains(text: string){
    await expect(this.errorMessage).toContainText(text);
}


}











// export class LoginPage {
//   readonly page: Page;
//   readonly username: Locator;
//   readonly password: Locator;
//   readonly loginButton: Locator;
//   readonly error: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.username = page.locator('[data-test="username"]');
//     this.password = page.locator('[data-test="password"]');
//     this.loginButton = page.locator('[data-test="login-button"]');
//     this.error = page.locator('[data-test="error"]');
//   }

//   async goto() {
//     await this.page.goto('/');
//   }

//   async login(user: string, pass: string) {
//     await this.username.fill(user);
//     await this.password.fill(pass);
//     await this.loginButton.click();
//   }

//   async assertErrorContains(text: string) {
//     await expect(this.error).toContainText(text);
//   }
// }
