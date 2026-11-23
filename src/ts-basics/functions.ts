function calculateTax(income: number, taxRate: number): number {
    return income * taxRate;
}

function greetUser(name: string): void {
    console.log(`Hello, ${name}!`);
}

console.log(calculateTax(50000, 0.16));
greetUser("Steven");