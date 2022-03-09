// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a = "") {
    const otherWay = a.substring(0, a.length - 3);
    return a.slice(0, -3);
}
