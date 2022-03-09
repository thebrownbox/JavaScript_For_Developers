// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(a = "") {
    const otherWay = a.substring(0, a.length / 2);
    return a.slice(0, a.length / 2);
}
