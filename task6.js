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
    },
  
    // Method to introduce the school
    schoolIntroduction: function() {
      return `Welcome to ${this.name}, located in ${this.location}. We have ${this.studentsCount} students enrolled.`;
    }
  };
  
  // Log the school introduction
  console.log(school.schoolIntroduction());
  