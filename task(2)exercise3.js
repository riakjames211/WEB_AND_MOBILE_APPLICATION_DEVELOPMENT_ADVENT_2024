// Function to calculate the total boda-boda fare
function calculateBodaBodaFare(distance, farePerKm) {
    // Calculate total fare
    let totalFare = distance * farePerKm;
    return totalFare;
}

// Distance in kilometers
let distanceToDestination = 15;
// Fare per kilometer in UGX 
let farePerKilometer = 2000; 

let totalBodaBodaFare = calculateBodaBodaFare(distanceToDestination, farePerKilometer);

// Output the result
console.log(`Total boda-boda fare for a journey of ${distanceToDestination} kilometers is UGX ${totalBodaBodaFare}.`);
