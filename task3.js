// Function to calculate average daily water usage over a week
function calculateWaterUsage(totalWeeklyWaterUsage) {
    let daysInWeek = 7; // Number of days in a week
    return totalWeeklyWaterUsage / daysInWeek; // Calculate and return average daily usage
}

// Total water usage for the week in liters
let totalWaterUsageForWeek = 1500;

// Calculate average daily water usage
let averageDailyWaterUsage = calculateWaterUsage(totalWaterUsageForWeek);

// Output the result
console.log(`The average daily water usage for the household is ${averageDailyWaterUsage} liters.`);
