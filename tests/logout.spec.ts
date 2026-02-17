import { test, expect } from '../fixtures/test-fixtures';

test.describe('Logout', () => {
  test('logout exitoso @regression', async ({ inventoryPage, page }) => {
    await inventoryPage.logOut();
    await expect(page).toHaveURL(/\/$/);
  });
});
