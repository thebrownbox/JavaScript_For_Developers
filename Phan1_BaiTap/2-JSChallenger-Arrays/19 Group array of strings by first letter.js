//? Write a function that takes an array of strings as argument
//? Group those strings by their first letter
//? Return an object that contains properties with keys representing first letters
//? The values should be arrays of strings containing only the corresponding strings
//? For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//? { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr = []) {
    const obj = {};

    for (const s of arr) {
        const c = s[0].toLowerCase();
        if (obj[c]) {
            obj[c].push(s);
        } else {
            obj[c] = [s];
        }
    }

    return obj;
}

console.log(myFunction(["Alf", "Alice", "Ben"]));
//* { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(myFunction(["Ant", "Bear", "Bird"]));
//* { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(myFunction(["Berlin", "Paris", "Prague"]));
//* { b: ['Berlin'], p: ['Paris', 'Prague']}
