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
