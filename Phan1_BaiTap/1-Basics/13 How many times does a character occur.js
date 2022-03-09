// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a = "", b = "") {
    /* Cach 1: using indexOf
    let count = 0;
    while(b && b.indexOf(a) >= 0){
        count++;
        const k = b.indexOf(a)+1;
        b = b.substring(k);
    }
    return count;
    */

    /* Cach 1:
    let count = 0;
    while(b && b.indexOf(a) >= 0){
        count++;
        const k = b.indexOf(a)+1;
        b = b.substring(k);
    }
    return count;
    */
    return b.split(a).length - 1;
}
