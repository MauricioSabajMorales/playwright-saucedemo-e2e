import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckOutStepTwoPage } from '../pages/CheckOutStepTwoPage';
import { CheckOutStepOnePage } from '../pages/CheckOutStepOnePage';
import { CartPage } from '../pages/CartPage';

import users from '../data/users.json';
import { goToCheckoutStepTwo } from '../utils/navigation';
import { goToCheckoutStepOne } from '../utils/navigation';

type MyFixtures = {
  inventoryPage: InventoryPage;
  checkoutStepTwoPage: CheckOutStepTwoPage;
  checkoutStepOnePage: CheckOutStepOnePage;
  cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
  inventoryPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    const inventory = new InventoryPage(page);
    await inventory.assertOnInventoryPage();

    await use(inventory);
  },

  checkoutStepOnePage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    const stepOne = await goToCheckoutStepOne(page);
    await use(stepOne);
  },

  checkoutStepTwoPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    const stepTwo = await goToCheckoutStepTwo(page);
    await use(stepTwo);
  },

  cartPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    const inventory = new InventoryPage(page);
    await inventory.addToCart();
    await inventory.goToCart();

    const cart = new CartPage(page);
    await cart.assertOnCartPage();

    await use(cart);
  },
});

export { expect };
