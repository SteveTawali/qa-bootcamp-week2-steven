import { test, expect } from '@playwright/test';
import { ProductSearchPage } from '../pages/ProductSearchPage';

test('SG-7: Search using a complete product name', async ({ page }) => {
    const productSearchPage = new ProductSearchPage(page);

    await productSearchPage.gotoProductSearchPage();

    // Search for Hammer
    await productSearchPage.searchForProduct('Hammer');

    // Verify the search result count
    await expect(
        page.getByText("6 products found for 'Hammer'")
    ).toBeVisible();

    // Get product names
    const productNames = productSearchPage.getProductNames();

    console.log('Total product names:', await productNames.count());
    console.log('Visible product names:', await productNames.filter({ visible: true }).count());
});