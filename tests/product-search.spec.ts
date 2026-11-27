import { test, expect } from '@playwright/test';
import { ProductSearchPage } from '../pages/ProductSearchPage';

test('SG-7: Search using a complete product name', async ({ page }) => {
    const productSearchPage = new ProductSearchPage(page);

    await productSearchPage.gotoProductSearchPage();

    // Search for Hammer
    await productSearchPage.searchForProduct('Hammer');

    // Verify the search result count
    await expect(productSearchPage.resultsMessage('Hammer'))
        .toHaveText("6 products found for 'Hammer'");

    // Get product names
    const productNames = productSearchPage.getProductNames();

    const visibleProductNames = productNames.filter({ visible: true });
    await expect(visibleProductNames).not.toHaveCount(0);
    const productNamesText = await visibleProductNames.allTextContents();

    for (const name of productNamesText) {
        expect(name).toMatch(/Hammer/i);
    }
});
