// Function to calculate profit
function calculateProfit(sellingPrice, costPrice, numberOfUnitsSold) {
    // Calculate profit per unit
    let profitPerUnit = sellingPrice - costPrice;
    // Calculate total profit
    return profitPerUnit * numberOfUnitsSold;
}

// to get proft values
// Selling price per unit in UGX
let sellingPrice = 20000; 
// Cost price per unit in UGX
let costPrice = 15000; 
// Number of units sold
let numberOfUnitsSold = 50; 

// Calculate the total profit
let totalProfit = calculateProfit(sellingPrice, costPrice, numberOfUnitsSold);

// Output the result
console.log(`Total profit from selling maize flour is UGX ${totalProfit}`);
