import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    private readonly page: Page;
    private readonly backpackInCart: Locator;
    private readonly cartBadge: Locator;
    private readonly removeFromCart: Locator;
    private readonly checkout: Locator;
    private readonly continueShopping: Locator;


    async goto(){
        await this.page.goto('/cart.html');   
    }


constructor(page: Page){
    this.page = page;
    this.backpackInCart = page.getByText('Sauce Labs Backpack', { exact: true });
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.removeFromCart = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.checkout = page.locator('[data-test="checkout"]');
    this.continueShopping = page.locator('[data-test="continue-shopping"]');
}

async assertOnCartPage(){
    await expect(this.page).toHaveURL(/cart\.html/);
    await expect(this.page.locator('.title')).toHaveText('Your Cart');
}

async assertBackpackInCart(){
    await expect(this.backpackInCart).toBeVisible();
}

async assertRemoveFromCart(){
    await expect(this.removeFromCart).toBeVisible();
}

async removeBackpack() {
  await this.removeFromCart.click();
}

async assertCheckOut(){
    await expect(this.checkout).toBeVisible();
}

async assertContinueShopping(){
    await expect(this.continueShopping).toBeVisible();
}

async assertCartCount(count: number) {
    if (count === 0) {
        await expect(this.cartBadge).toHaveCount(0);
    } else {
        await expect(this.cartBadge).toHaveText(String(count));
    }
}

async clickOnCheckOutButton(){
    await this.checkout.click();
}

}
