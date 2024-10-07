// Function to calculate total internet cost with a default value for data bundle
function calculateInternetCost(numberOfBundles, costPerBundle = 50000) {
    // Calculate total cost
    return numberOfBundles * costPerBundle;
}

// value for the number of bundles

let bundlesNeeded = 3; 

// Calculate the total internet cost
let totalCost = calculateInternetCost(bundlesNeeded);

// Output the result
console.log(`Total cost for ${bundlesNeeded} data bundles is UGX ${totalCost}.`);
