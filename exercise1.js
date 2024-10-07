let bodaBodaRider = {
    name: "jamesspeeedriders",
    location: "Kampala",
    bodaType: "Motorcycle",
    
    // Method to calculate income for a day
    calculateIncome: function(distanceTraveled, farePerKilometer) {
      return distanceTraveled * farePerKilometer;
    }
  };
  
  // Example usage: calculating income for a day
  let distanceTraveled = 30; // kilometers
  let farePerKilometer = 5000; // UGX
  
  // Log the rider's income for the day
  console.log(`Rider's Income for the Day: UGX ${bodaBodaRider.calculateIncome(distanceTraveled, farePerKilometer)}`);
  