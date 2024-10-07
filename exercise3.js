// Constructor function for Hospital
function Hospital(name, location, numberOfBeds) {
    this.name = name;
    this.location = location;
    this.numberOfBeds = numberOfBeds;
  
    // Method to calculate total capacity
    this.calculateTotalCapacity = function(numberOfWards, bedsPerWard) {
      return numberOfWards * bedsPerWard;
    };
  }
  
  // Create a new Hospital object
  let kampalaHospital = new Hospital("Kampala General Hospital", "Kampala", 200);
  
  //  Calculate total capacity
  let numberOfWards = 5; //  number of wards
  let bedsPerWard = 100;  // number of beds per ward
  
  // Log the total capacity of the hospital
  console.log(`Total capacity of ${kampalaHospital.name}: ${kampalaHospital.calculateTotalCapacity(numberOfWards, bedsPerWard)} beds`);
  