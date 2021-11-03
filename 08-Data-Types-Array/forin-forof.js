process.stdout.write("\033c");
const arr = [4, 5, 6];
arr.name = "arr";

// for (const x of arr) {
//   console.log(x);
// }

// for (const key in arr) {
//   console.log(key);
// }

//! Object
const obj = { name: "obj", age: 10 };

for (const key in obj) {
  console.log(key);
}
