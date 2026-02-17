import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {

    private readonly page: Page;
    private readonly openMenu: Locator;
    private readonly logOutButton: Locator;
    private readonly addBackPackToCart: Locator;
    private readonly shoppingCart: Locator;
    private readonly removeBackpackFromCart: Locator;
    private readonly cartBadge: Locator;

    

    async goto(){
        await this.page.goto('/inventory.html');   
    }


constructor(page: Page){
    this.page = page;
    this.openMenu = page.getByRole('button', { name: 'Open Menu' });
    this.logOutButton = page.locator('[data-test="logout-sidebar-link"]');
    this.addBackPackToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.removeBackpackFromCart = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    // this.cartLink = page.locator('[data-test="shopping-cart-link"]');

    

}

async assertOnInventoryPage(){
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.locator('.title')).toHaveText('Products');
}

async assertLogOutMenuVisible(){
    await expect(this.openMenu).toBeVisible();
} 

async assertAddToCart(){
    await expect(this.addBackPackToCart).toBeVisible();
}

async assertCartCount(count: number) {
  if (count === 0) {
    await expect(this.cartBadge).toHaveCount(0);
  } else {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}

async goToCart(){
    await expect(this.shoppingCart).toBeVisible();
    await this.shoppingCart.click();
}    

async assertRemoveFromCart(){
    await expect(this.removeBackpackFromCart).toBeVisible();
}

async addToCart(){
    await this.addBackPackToCart.click();
}

//async assertCartLink(){
//    await expect(this.shoppingCart).toBeVisible();
//}

//async goToCartPage(){
//    await this.shoppingCart.click();
//}

async removeFromCart(){
    await this.removeBackpackFromCart.click();
}

async logOut(){
    await this.openMenu.click();
    await this.logOutButton.click();
}
}

