// Function to determine if a year is a leap year
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // Check if the year is divisible by 400
            if (year % 400 === 0) {
                // It is a leap year
                return true; 
            } else {
                 // It is not a leap year
                return false;
            }
        } else {
            // It is a leap year
            return true; 
        }
    } else {
        // It is not a leap year
        return false; 
    }
}

// Change this value to test different years
let yearToCheck = 2024; 
let result = isLeapYear(yearToCheck);

// Output the result
if (result) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}
