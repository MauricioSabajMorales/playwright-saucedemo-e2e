import { test } from '../fixtures/test-fixtures';

test.describe('Cart - Add Item', () => {
  test('User can add product to cart @regression', async ({ inventoryPage }) => {
    await inventoryPage.assertAddToCart();
    await inventoryPage.assertCartCount(0);
    await inventoryPage.addToCart();
    await inventoryPage.assertRemoveFromCart();
    await inventoryPage.assertCartCount(1);
  });
});
