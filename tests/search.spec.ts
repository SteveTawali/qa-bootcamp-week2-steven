
import { test, expect } from '@playwright/test';

test('search for pliers returns only matching products', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
    await page.getByRole('button', { name: 'Search' }).click();

    const productNames = page.getByRole('heading', { level: 5 });

    await expect(
        page.getByText("4 products found for 'pliers'")
    ).toBeVisible();

    const count = await productNames.count();

    for (let i = 0; i < count; i++) {
        await expect(productNames.nth(i)).toContainText(/pliers/i);
    }
});
