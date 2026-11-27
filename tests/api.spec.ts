
import { test, expect } from '@playwright/test';

const baseURL = 'https://api.practicesoftwaretesting.com';

test('GET request fixture that checks the status and one field', async ({ request }) => {
    const response = await request.get(`${baseURL}/products`);

    expect(response.status()).toBe(200);

    const responseObject = await response.json();

    expect(responseObject.data[0].name).toBe('Combination Pliers');
});

test('Create cart and add product', async ({ request }) => {
    // Get a valid product ID
    const productsResponse = await request.get(`${baseURL}/products`);

    expect(productsResponse.status()).toBe(200);

    const productsObject = await productsResponse.json();
    const productId = productsObject.data[0].id;

    expect(productId).toBeTruthy();

    // Create a new cart
    const cartResponse = await request.post(`${baseURL}/carts`);

    expect(cartResponse.status()).toBe(201);

    const cartObject = await cartResponse.json();
    const cartId = cartObject.id;

    expect(cartId).toBeTruthy();

    try {
        // Add the product to the cart
        const addProductResponse = await request.post(
            `${baseURL}/carts/${cartId}`,
            {
                data: {
                    product_id: productId,
                    quantity: 1
                }
            }
        );

        expect(addProductResponse.status()).toBe(200);

        // Retrieve the cart
        const getCartResponse = await request.get(
            `${baseURL}/carts/${cartId}`
        );

        expect(getCartResponse.status()).toBe(200);

        const cart = await getCartResponse.json();

        expect(cart).toBeTruthy();

    } finally {
        // Delete the cart even if an assertion fails
        const deleteResponse = await request.delete(
            `${baseURL}/carts/${cartId}`
        );

        expect(deleteResponse.ok()).toBeTruthy();
    }
});

test('GET non-existent cart returns 404', async ({ request }) => {
    const response = await request.get(
        `${baseURL}/carts/01NONEXISTENTCARTID000000`
    );

    expect(response.status()).toBe(404);
});
