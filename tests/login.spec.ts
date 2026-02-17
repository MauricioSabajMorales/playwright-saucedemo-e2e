import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../data/users.json';

test.describe('Login', () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto();
  });

  test('login exitoso @smoke', async ({ page }) => {
    await login.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('locked_out_user muestra error @regression', async () => {
    await login.login(users.locked.username, users.locked.password);
    await login.assertErrorContains('locked out');
  });

  test('password incorrecta muestra error @regression', async () => {
    await login.login(users.incorrectPassword.username, users.incorrectPassword.password);
    await login.assertErrorContains('Username and password do not match');
  });
});
