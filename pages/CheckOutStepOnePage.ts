import { Page, Locator, expect } from '@playwright/test';

export class CheckOutStepOnePage {
    
    private readonly page: Page;
    private readonly firstNameTextField: Locator;
    private readonly lastNameTextField: Locator;
    private readonly postalCodeTextField: Locator;
    private readonly cancelButton: Locator;
    private readonly continueButton: Locator;
    private readonly cartBadge: Locator;
    private readonly errorBanner: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.firstNameTextField = page.locator('[data-test="firstName"]');
        this.lastNameTextField = page.locator('[data-test="lastName"]');
        this.postalCodeTextField = page.locator('[data-test="postalCode"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.errorBanner = page.locator('[data-test="error"]');
        
    }

    async assertOnCheckOutPage(){
        await expect(this.page).toHaveURL(/\/checkout-step-one\.html$/);
        await expect(this.page.locator('.title')).toHaveText('Checkout: Your Information');    }

    async assertInformationForm(){
        await expect(this.firstNameTextField).toBeVisible();
        await expect(this.lastNameTextField).toBeVisible();
        await expect(this.postalCodeTextField).toBeVisible();
    }

    async assertCancelButton(){
        await expect(this.cancelButton).toBeVisible();
    }

    async assertContinueButton(){
        await expect(this.continueButton).toBeVisible();
    }

    async addCheckoutInformation(firstName: string, lastName: string, postalCode: string ){
        await this.firstNameTextField.fill(firstName);
        await this.lastNameTextField.fill(lastName);
        await this.postalCodeTextField.fill(String(postalCode));
    }

    async assertCartCount(count: number) {
    if (count === 0) {
        await expect(this.cartBadge).toHaveCount(0);
    } else {
        await expect(this.cartBadge).toHaveText(String(count));
    }
} 

    async clickContinue(){
        await this.continueButton.click();
    }

    async assertErrorContains(text: string){
    await expect(this.errorBanner).toBeVisible();
    await expect(this.errorBanner).toContainText(text);
}
}

 