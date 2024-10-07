// Create the school object
let school = {
    name: "seeta high school",
    location: "kampala, uganda",
    studentsCount: 1300,
    establishedYear: 2000,
    schoolType: "Secondary",
    
    // Method to calculate the school's age
    calculateSchoolAge: function() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.establishedYear;
    }
  };
  
  // Destructure the school object to extract name, location, and studentsCount
  let { name, location, studentsCount } = school;
  
  // Log the destructured variables
  console.log("School Name:", name);
  console.log("School Location:", location);
  console.log("Number of Students:", studentsCount);
  