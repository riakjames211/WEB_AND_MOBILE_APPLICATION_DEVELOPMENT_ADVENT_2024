// Global variable representing the national population of Uganda
//nationalpopulation
let nationalPopulation = 45000000; 

// Function to calculate population growth
function calculatePopulationGrowth(growthRate) {
    // Local variable for the number of years to calculate growth
    let years = 5;

    // Calculate the projected population after a certain number of years
    let projectedPopulation = nationalPopulation * Math.pow(1 + growthRate, years);
    
    // Print the results
    console.log(`Current National Population: ${nationalPopulation}`);
    console.log(`Projected Population after ${years} years at a growth rate of ${growthRate * 100}%: ${Math.round(projectedPopulation)}`);
}

 // 3% annual growth rate
let annualGrowthRate = 0.03; 
calculatePopulationGrowth(annualGrowthRate);

// Show the effect of the function on the global variable
console.log(`The national population remains unchanged: ${nationalPopulation}`);
