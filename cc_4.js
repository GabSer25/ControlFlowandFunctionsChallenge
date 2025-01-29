console.log("JavaScript file is linked successfully!");
// Task 1 - Customer Discounts
let purchaseAmount = 120; // Change this value to test different amounts

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1; // 10% discount
    let finalAmount = purchaseAmount - discount;
    console.log(`Final amount after discount: $${finalAmount}`);
} else {
    console.log(`Final amount: $${purchaseAmount}`);
}
// Task 2 - Sales Report
let sales = [230, 95, 310, 180, 140]; 
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);
// Task 3 - Inventory Depletion
let stock = 10;

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--;
}

console.log("Stock is now empty.");
// Task 4 - Customer Survey
let responses = 0;

do {
    console.log(`Survey response #${responses + 1}`);
    responses++;
} while (responses < 3);
// Task 5 - Employee Information
let employee = { name: "Alice", position: "Manager", salary: 75000 };

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}
// Task 6 - Product Listings
let products = ["Monitor", "Headphones", "Webcam"];

for (let product of products) {
    console.log(`Product: ${product}`);
}
// Task 7 - Order Processing
let orders = [202, 305, 410];

orders.forEach(order => {
    console.log(`Processing order ID: ${order}`);
});
