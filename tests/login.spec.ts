import { test, expect } from '@playwright/test';

test('invalid login is rejected', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');


await page.getByRole('textbox', { name: 'Email address *' }).fill('invalid@example.com');

await page.getByLabel('Password *').fill('wrongpassword');

await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Invalid email or password')).toBeVisible();

});