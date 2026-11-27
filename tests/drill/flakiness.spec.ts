import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const fileUrl = pathToFileURL(path.join(__dirname, 'index.html')).href;

test('Save status appears after clicking Save', async ({ page }) => {
    await page.goto(fileUrl);
    await page.locator('#save').click();
    await expect(page.locator('#status')).toHaveText('Saved');
});
