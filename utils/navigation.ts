import { Page } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckOutStepOnePage } from '../pages/CheckOutStepOnePage';
import { CheckOutStepTwoPage } from '../pages/CheckOutStepTwoPage';
import users from '../data/users.json';


export async function goToCheckoutStepOne(page: Page): Promise<CheckOutStepOnePage> {

    const inventory = new InventoryPage(page);

    await inventory.assertOnInventoryPage();
    await inventory.assertAddToCart();
    await inventory.assertCartCount(0);
    await inventory.addToCart();
    await inventory.assertRemoveFromCart();
    await inventory.assertCartCount(1);
    await inventory.goToCart();

    const cart = new CartPage(page);

    await cart.assertOnCartPage();
    await cart.assertBackpackInCart();
    await cart.assertCartCount(1);
    await cart.assertCheckOut();
    await cart.assertContinueShopping();
    await cart.clickOnCheckOutButton();

    const checkout = new CheckOutStepOnePage(page);
    await checkout.assertOnCheckOutPage();

    return checkout;

}

export async function goToCheckoutStepTwo(page: Page): Promise<CheckOutStepTwoPage> {

    const checkout = await goToCheckoutStepOne(page);

    await checkout.addCheckoutInformation(
    users.checkOut.firstName,
    users.checkOut.lastName,
    users.checkOut.postalCode
  );

    await checkout.clickContinue();

    const stepTwo = new CheckOutStepTwoPage(page);
    await stepTwo.assertCheckOutPageTwo();

    return stepTwo;

}

