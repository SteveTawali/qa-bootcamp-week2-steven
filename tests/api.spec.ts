import { test, expect } from '@playwright/test';

test('GET request fixture that checks the status and one field', async ({ request }) => {
   const response =  await request.get('https://api.practicesoftwaretesting.com/products');
   console.log(await response.status())
   expect(await response.status()).toBe(200)
   const responseObject = await response.json()
   expect(responseObject.data[0].name).toBeTruthy();

});