import {Page, Locator} from '@playwright/test';

export class ProductSearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly productNames: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox');
        this.searchButton = page.getByRole('button', { name: 'Serch' });
        this.productNames = this.page.locator('[data-test="product-name"]');
    }

    async gotoProductSearchPage() {
        await this.page.goto('https://with-bugs.practicesoftwaretesting.com/#/');
    }

    async searchForProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    getProductNames() {
        return this.productNames;
    }

    resultsMessage(term: string) {
        return this.page.getByText(new RegExp(`products found for '${term}'`));
    }
}
