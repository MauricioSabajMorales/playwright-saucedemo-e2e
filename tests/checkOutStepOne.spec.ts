import { test } from '../fixtures/test-fixtures';
import users from '../data/users.json';

test.describe('Purchase Flow - Standard User', () => {

  test('User can complete checkout step one (enter personal information) @regression', async ({ checkoutStepOnePage }) => {
       
    await checkoutStepOnePage.assertInformationForm();
    await checkoutStepOnePage.assertCancelButton();
    await checkoutStepOnePage.assertContinueButton();
    await checkoutStepOnePage.assertCartCount(1);

    await checkoutStepOnePage.addCheckoutInformation(
      users.checkOut.firstName,
      users.checkOut.lastName,
      users.checkOut.postalCode
    );

    await checkoutStepOnePage.clickContinue();
  });

  test('User cannot continue checkout step one with empty form @regression', async ({ checkoutStepOnePage }) => {

    await checkoutStepOnePage.clickContinue();
    await checkoutStepOnePage.assertErrorContains('First Name is required');
  });

});

