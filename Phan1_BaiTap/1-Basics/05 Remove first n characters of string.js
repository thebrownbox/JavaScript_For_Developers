// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a = "") {
    const otherWay = a.substring(3);
    return a.slice(3);
}
