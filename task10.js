// Higher-order function to simulate fetching data from a server
function fetchData(callback) {
    // Simulating data fetching with a timeout
    setTimeout(() => {
        // Simulating successful data retrieval
        console.log("Data fetched from the server."); 

        // Calling the callback function
        callback("Data successfully retrieved from the server.");
    }, 2000); 
}

// Callback function to display the success message
function displayMessage(message) {
    console.log(message);
}

// display
fetchData(displayMessage);
