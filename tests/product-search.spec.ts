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


test('C1 Search by name', async ({ page }) => {
    const productSearchPage = new ProductSearchPage(page);

    await productSearchPage.gotoProductSearchPage();

    // Search for Pliers
    await productSearchPage.searchForProduct('Pliers');

    // Verify the search results message
    await expect(productSearchPage.resultsMessage('Pliers'))
        .toHaveText(/\d+ products found for 'Pliers'/);

    // Get visible product names
    const productNames = productSearchPage.getProductNames();
    const visibleProductNames = productNames.filter({ visible: true });

    // Verify that results are displayed
    await expect(visibleProductNames).not.toHaveCount(0);

    // Verify that no unrelated products appear
    const unrelatedProducts = visibleProductNames.filter({
        hasNotText: /Pliers/i
    });

    await expect(unrelatedProducts).toHaveCount(0);
});
