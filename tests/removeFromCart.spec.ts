import { test } from '../fixtures/test-fixtures';

test.describe('Cart - Remove Item', () => {

  test('User can remove product from cart @regression', async ({ cartPage }) => {

  await cartPage.assertBackpackInCart();
  await cartPage.assertCartCount(1);
  await cartPage.assertRemoveFromCart();

  await cartPage.removeBackpack(); 
  await cartPage.assertCartCount(0);

  });

});
