import { test } from '../fixtures/test-fixtures';

test.describe('Cart - View Cart', () => {

 test('User can navigate to cart and see added item @regression', async ({ cartPage }) => {
  await cartPage.assertBackpackInCart();
  await cartPage.assertCartCount(1);
  await cartPage.assertCheckOut();
  await cartPage.assertContinueShopping();
});
});
