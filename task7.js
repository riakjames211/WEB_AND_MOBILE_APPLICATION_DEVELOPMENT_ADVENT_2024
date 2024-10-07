// Constructor function for School
function School(name, location, studentsCount, schoolType) {
    this.name = name;
    this.location = location;
    this.studentsCount = studentsCount;
    this.schoolType = schoolType;
  
    // Method to introduce the school
    this.schoolIntroduction = function() {
      return `Welcome to ${this.name}, located in ${this.location}. We have ${this.studentsCount} students enrolled in our ${this.schoolType} school.`;
    };
  }
  
  // Create two new school objects
  let school1 = new School("st.mary high", "mukono, uganda", 1780, "Secondary");
  let school2 = new School("seetaPrimary School", "kampala, uganda", 3200, "Primary");
  
  // Introduce both schools
  console.log(school1.schoolIntroduction());
  console.log(school2.schoolIntroduction());
  