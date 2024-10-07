// Arrow function to calculate the area of a plot of land
let calculateArea = (length, width) => {
    return length * width; // Calculate and return the area
};

// plot values for length and width
let plotLength = 45; // Length in meters
let plotWidth = 30; // Width in meters

// Calculate the area of the plot
let area = calculateArea(plotLength, plotWidth);

// Output the result
console.log(`The area of the plot of land is ${area} square meters.`);
