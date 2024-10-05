// Create a university object
const university = {
    name: "uganda christian University",
    location: "mukono",
    departments: {
        computerScience: {
            name: "Computer Science",
            headOfDepartment: "Dr. joseph wambete"
        },
        mathematics: {
            name: "Mathematics",
            headOfDepartment: "mr.riak james"
        },
        physics: {
            name: "Physics",
            headOfDepartment: "Dr. deng Clark"
        }
    }
};

// Log the head of the Computer Science department
console.log("Head of Computer Science Department:", university.departments.computerScience.headOfDepartment);

