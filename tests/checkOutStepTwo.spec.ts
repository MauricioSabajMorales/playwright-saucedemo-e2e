import { test } from '../fixtures/test-fixtures';

test.describe('Purchase Flow - Standard User', () => {
  test('User can review order and finish purchase (checkout step two) @regression', async ({ checkoutStepTwoPage }) => {
    await checkoutStepTwoPage.assertCartCount(1);
    await checkoutStepTwoPage.assertItemNames();
    await checkoutStepTwoPage.assertQuantity('1');
    await checkoutStepTwoPage.assertPriceItem();
    await checkoutStepTwoPage.assertCancelButton();
    await checkoutStepTwoPage.assertFinishButtonVisible();
    await checkoutStepTwoPage.clickFinish();
  });

});

