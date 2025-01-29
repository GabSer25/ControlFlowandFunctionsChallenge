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
