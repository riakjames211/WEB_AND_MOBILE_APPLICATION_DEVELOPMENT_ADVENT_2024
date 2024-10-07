// Function to calculate the total electricity bill
function calculateElectricityBill(unitsConsumed) {
    let ratePerUnit;
    
    // Define rates based on consumption levels
    if (unitsConsumed <= 100) {
        // Rate for first 100 units
        ratePerUnit = 250; 
    } else if (unitsConsumed <= 300) {
        // Rate for units 101 to 300
        ratePerUnit = 350; 
    } else {
        // Rate for units above 300
        ratePerUnit = 500; 
    }
    
    // Calculate total bill
    let totalBill = unitsConsumed * ratePerUnit;
    
    return totalBill;
}

// number of units consumed
let unitsConsumed = 250; 
let totalElectricityBill = calculateElectricityBill(unitsConsumed);

// Output the result
console.log(`Total electricity bill for ${unitsConsumed} units is UGX ${totalElectricityBill}.`);
