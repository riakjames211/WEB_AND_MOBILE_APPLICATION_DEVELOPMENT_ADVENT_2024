// Recursive function to print a countdown
function countdown(number) {
    //stop the countdown when number is less than 0
    if (number < 0) {
        console.log("Countdown finished!");
        return; // return the function
    }
    
    // Print the current number
    console.log(number);
    
    // Recursive call with the next number
    countdown(number - 1);
}
// Starting number for the countdown
let startNumber = 5; 
countdown(startNumber);
