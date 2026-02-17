import { Page, Locator, expect } from '@playwright/test';

export class CheckOutStepTwoPage {
    
    private readonly page: Page;
    private readonly cancelButton: Locator;
    private readonly finishButton: Locator;
    private readonly cartBadge: Locator;
    private readonly itemNames: Locator;
    private readonly quantityItem: Locator;
    private readonly priceItem: Locator;


    constructor(page: Page){
        this.page = page;
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.itemNames = page.locator('.inventory_item_name');
        this.quantityItem = page.locator('[data-test="item-quantity"]');
        this.priceItem = page.locator('[data-test="inventory-item-price"]');

    }

    async assertCheckOutPageTwo(){
        await expect(this.page).toHaveURL(/\/checkout-step-two\.html$/);
        await expect(this.page.locator('.title')).toHaveText('Checkout: Overview');
    }

    async assertCartCount(count: number) {
    if (count === 0) {
        await expect(this.cartBadge).toHaveCount(0);
    } else {
        await expect(this.cartBadge).toHaveText(String(count));
    }
}

    async assertItemNames(){
        await expect(this.itemNames).toContainText('Sauce Labs Backpack');
    }

 async assertQuantity(expected: string) {
  await expect(this.quantityItem.first()).toHaveText(expected); 
}


    async assertPriceItem(){
        await expect(this.priceItem.first()).toContainText('$');
    }

    async assertCancelButton(){
        await expect(this.cancelButton).toBeVisible();
    }

    async assertFinishButtonVisible(){
        await expect(this.finishButton).toBeVisible();
    }

    async clickFinish(){
        await this.finishButton.click();
    }
    }