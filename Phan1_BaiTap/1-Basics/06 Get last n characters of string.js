// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str = "") {
    const otherWay = str.substring(str.length-3);
    return str.slice(-3);
}
