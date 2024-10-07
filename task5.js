// Create the school object
let school = {
    name: "seeta high school",
    location: "kampala, uganda",
    studentsCount: 1300,
    establishedYear: 2000,
    schoolType: "Secondary",
    
    // Method to calculate the school's age
    calculateSchoolAge: function() {
      let currentYear = new Date().getFullYear();  // Get the current year
      return currentYear - this.establishedYear;
    }
  };
  
  // Loop through all properties of the school object and log them
  for (let property in school) {
    // Check if the property is a function before logging
    if (typeof school[property] !== 'function') {
      console.log(`${property}: ${school[property]}`);
    }
  }
  