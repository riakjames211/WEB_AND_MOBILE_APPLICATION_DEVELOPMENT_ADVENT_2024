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
  
  // Calculate and print the school's age
  let schoolAge = school.calculateSchoolAge();
  console.log("The school is " + schoolAge + " years old.");
  