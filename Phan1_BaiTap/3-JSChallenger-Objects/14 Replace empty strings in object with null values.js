//? Write a function that takes an object as argument
//? Some of the property values contain
//? empty strings
//? Replace empty strings and strings
//? that contain only whitespace with null values
//? Return the resulting object

function myFunction(obj) {
    for (const key in obj) {
        if (!obj[key].trim()) {
            obj[key] = null;
        }
    }
    return obj;
}

//* { a: 'a', b: 'b', c: null }
console.log(myFunction({ a: "", b: "b", c: " ", d: "d" }));
//* { a: null, b: 'b', c: null, d: 'd' }
console.log(myFunction({ a: "a", b: "b ", c: " ", d: "" }));
//* { a: 'a', b: 'b ', c: null, d: null }
