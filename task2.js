// Function to calculate total food expense
function calculateFoodExpense(numberOfMeals, costPerMeal) {
    return numberOfMeals * costPerMeal; // Calculate total food expense
}

let numberOfMeals = 5; // Number of meals
let costPerMeal = 10000; // Cost per meal in UGX

// Calculate total food expense
let totalFoodExpense = calculateFoodExpense(numberOfMeals, costPerMeal);

// Output the result
console.log(`Total food expense is UGX ${totalFoodExpense}`);
