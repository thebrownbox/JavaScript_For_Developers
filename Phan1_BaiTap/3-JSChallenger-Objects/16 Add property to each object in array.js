//? Write a function that takes an array of objects and a string as arguments
//? Add a property with key 'continent' and value
//? equal to the string to each of the objects
//? Return the new array of objects
//! Note: try not to mutate the original array

function myFunction(arr = [], str) {
    // arr.forEach((e) => (e.continent = str));
    // return arr;
    return arr.map((e) => ({ ...e, continent: str }));
}

console.log(
    myFunction(
        [
            { city: "Tokyo", country: "Japan" },
            { city: "Bangkok", country: "Thailand" },
        ],
        "Asia"
    )
);
//* [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(
    myFunction(
        [
            { city: "Stockholm", country: "Sweden" },
            { city: "Paris", country: "France" },
        ],
        "Europe"
    )
);
//* [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]
